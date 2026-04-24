import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/Dise-oIntegral",
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;