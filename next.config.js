/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Image optimization configuration
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.capital.bg",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "darikradio.bg",
        pathname: "/**",
      },
    ],
    // Image optimization settings
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Experimental features
  experimental: {
    // Enable optimized package imports
    optimizePackageImports: ["framer-motion", "react-icons", "swiper"],
  },

  // Security headers
  // async headers() {
  //   return [
  //     {
  //       source: "/(.*)",
  //       headers: [
  //         // Prevent clickjacking
  //         {
  //           key: "X-Frame-Options",
  //           value: "DENY",
  //         },
  //         // Prevent MIME type sniffing
  //         {
  //           key: "X-Content-Type-Options",
  //           value: "nosniff",
  //         },
  //         // Enable XSS protection
  //         {
  //           key: "X-XSS-Protection",
  //           value: "1; mode=block",
  //         },
  //         // Referrer policy
  //         {
  //           key: "Referrer-Policy",
  //           value: "strict-origin-when-cross-origin",
  //         },
  //         // Permissions policy
  //         {
  //           key: "Permissions-Policy",
  //           value:
  //             "camera=(), microphone=(), geolocation=(self), interest-cohort=()",
  //         },
  //         // Content Security Policy
  //         {
  //           key: "Content-Security-Policy",
  //           value: [
  //             "default-src 'self'",
  //             "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
  //             "style-src 'self' 'unsafe-inline'",
  //             "img-src 'self' data: https: blob:",
  //             "font-src 'self' data:",
  //             "connect-src 'self' https://www.google-analytics.com",
  //             "frame-ancestors 'none'",
  //             "base-uri 'self'",
  //             "form-action 'self'",
  //           ].join("; "),
  //         },
  //       ],
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
