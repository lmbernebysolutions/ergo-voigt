import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Erlaube unoptimized Bilder für bessere Kompatibilität mit Umlauten auf Vercel
    unoptimized: false,
    // Erhöhe die Bildqualität für bessere Darstellung
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;
