import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/taprobane-detailing-website',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
