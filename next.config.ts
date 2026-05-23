import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone output for Docker/VPS deployment
  output: "standalone",

  // React strict mode
  reactStrictMode: true,

  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**nextjswoo-henna.vercel.app",
      },
    ],

    formats: ["image/avif", "image/webp"],
  },

  /**
   * IMPORTANT:
   * Do NOT expose secret env variables here.
   * Next.js automatically loads .env.local
   */

  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
};

export default nextConfig;