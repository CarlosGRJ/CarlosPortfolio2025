import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
      },
    ],
    domains: ['placehold.co', 'images.unsplash.com', 'images.pexels.com'],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
