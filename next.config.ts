import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  reactStrictMode: true,
  // swcMinify: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true
};

export default nextConfig;
