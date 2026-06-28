import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  reactStrictMode: true,
  // swcMinify: true, // این خط رو حذف کن (دیگه نیازی نیست)
};

export default nextConfig;