import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/lib/siteConfig";

// Rate limiting configuration
const rateLimit = {
  windowMs: 60 * 1000, // 1 minute
  max: 5, // 5 requests per minute per IP
};

// Simple in-memory rate limiting (use Redis in production)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

function getRateLimitKey(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0] : "unknown";
  return `contact-${ip}`;
}

function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(key);

  if (!record || now > record.resetTime) {
    rateLimitStore.set(key, { count: 1, resetTime: now + rateLimit.windowMs });
    return true;
  }

  if (record.count >= rateLimit.max) {
    return false;
  }

  record.count++;
  return true;
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sanitizeInput(input: string): string {
  return input.trim().slice(0, 5000); // Limit input length
}

export async function POST(request: NextRequest) {
  try {
    // Check rate limit
    const rateLimitKey = getRateLimitKey(request);
    if (!checkRateLimit(rateLimitKey)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }

    // Parse request body
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    // Validate email format
    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      phone: phone ? sanitizeInput(phone) : "",
      subject: subject ? sanitizeInput(subject) : "Contact Form Submission",
      message: sanitizeInput(message),
    };

    // Validate message length
    if (sanitizedData.message.length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters long." },
        { status: 400 },
      );
    }

    // TODO: Implement actual email sending
    // Example with nodemailer or other email service:
    // await sendEmail({
    //   to: siteConfig.contact.email,
    //   from: siteConfig.contact.email,
    //   subject: sanitizedData.subject,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${sanitizedData.name}</p>
    //     <p><strong>Email:</strong> ${sanitizedData.email}</p>
    //     <p><strong>Phone:</strong> ${sanitizedData.phone || 'Not provided'}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${sanitizedData.message}</p>
    //   `,
    // });

    // Log for development (remove in production)
    if (process.env.NODE_ENV === "development") {
      console.log("Contact form submission:", sanitizedData);
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message. We will get back to you soon.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 },
    );
  }
}

// Handle OPTIONS for CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": siteConfig.url,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
    },
  });
}
