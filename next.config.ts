import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "slotspk.com.pk",
      },
    ],
    formats: ["image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 80, 90, 100],
  },

  // Permanent redirects: old permalinks → new 3 Patti Tiger Pakistan permalinks
  async redirects() {
    return [
      { source: "/about-us", destination: "/about-us-3-patti-tiger-pakistan", permanent: true },
      { source: "/contact-us", destination: "/contact-us-3-patti-tiger-pakistan", permanent: true },
      { source: "/privacy", destination: "/privacy-3-patti-tiger-pakistan", permanent: true },
      { source: "/disclaimer", destination: "/disclaimer-3-patti-tiger-pakistan", permanent: true },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/.well-known/:path*",
        destination: "/public/.well-known/:path*",
      },
      {
        source: "/3-patti-blue-logo.webp",
        destination: "/3-patti-tiger-logo.webp",
      },
    ];
  },

  async headers() {
    return [
      // Security headers for all routes
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
      // Long-lived cache only for immutable static assets (fingerprinted by Next.js)
      {
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      // Long-lived cache for static images/icons in /public
      {
        source: "/:path*.webp",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/:path*.ico",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          { key: "X-Robots-Tag", value: "noindex" },
        ],
      },
      // CSS assets
      {
        source: "/css/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          { key: "Content-Type", value: "text/css" },
        ],
      },
      // Sitemaps and robots should be fresh
      {
        source: "/:path*.xml",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, must-revalidate" },
        ],
      },
      {
        source: "/robots.txt",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, must-revalidate" },
        ],
      },
    ];
  },

  webpack: (config, { dev, isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }

    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }

    if (!isServer) {
      config.target = ["web", "es2022"];
      config.resolve.alias = {
        ...config.resolve.alias,
        "../build/polyfills/polyfill-module": false,
        "next/dist/build/polyfills/polyfill-module": false,
      };
    }

    return config;
  },

  experimental: {
    optimizeCss: true,
    inlineCss: true,
    scrollRestoration: true,
    optimizePackageImports: ["react-icons"],
  },

  modularizeImports: {
    "react-icons": {
      transform: "react-icons/{{member}}",
    },
  },
};

export default nextConfig;
