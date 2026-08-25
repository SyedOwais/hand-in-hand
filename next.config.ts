import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/blog/:slug*",
        destination: "/blogs/:slug*",
        permanent: true,
      },
      {
        source: "/speech-therapy-adults-vaughan",
        destination: "/locations/speech-therapy-adults-vaughan",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
