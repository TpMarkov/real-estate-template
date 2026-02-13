/** @type {import('next').NextConfig} */
console.log("Testing");

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

  // =============================================================================
  // SECURITY HEADERS - TEMPORARILY DISABLED FOR IFRAME EMBEDDING TESTING
  // To re-enable: Uncomment the entire headers() function below
  // =============================================================================
  // async headers() {
  //   return [
  //     {
  //       source: "/(.*)",
  //       headers: [
  //         // Prevent clickjacking - allow embedding from specific domains
  //         // Use CSP frame-ancestors below instead of X-Frame-Options (better browser support)
  //         {
  //           key: "X-Frame-Options",
  //           value: "ALLOW-FROM https://webdevstuiohq.online",
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
  //             "frame-ancestors 'self' https://webdevstuiohq.online https://www.webdevstuiohq.online https://real-estate-template-gilt.vercel.app https://*.vercel.app",
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
