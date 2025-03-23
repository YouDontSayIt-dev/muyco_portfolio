import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'media.licdn.com', 
      },
      {
        hostname: 'assets.aceternity.com',
      },
      {
        hostname: 'scontent.fcrk1-4.fna.fbcdn.net'
      }
    ],
  },
};

export default nextConfig;
