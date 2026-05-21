import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: '/alums-declassified',
  assetPrefix: '/alums-declassified/',
};
export default nextConfig;
