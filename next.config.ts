import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "booking-fly-anywhere.s3.ap-southeast-2.amazonaws.com",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
