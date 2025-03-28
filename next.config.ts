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
      },
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "scontent.fmnl4-6.fna.fbcdn.net"
      },
      {
        hostname: "scontent.fcrk1-5.fna.fbcdn.net"
      },
      {
        hostname: "images.pexels.com"
      }
    ],
  },
};

export default nextConfig;
