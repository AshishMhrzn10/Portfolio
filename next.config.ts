import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true // Disables ESLint during the build process
  },
  typescript: {
    ignoreBuildErrors: true
  }
};

export default nextConfig;
