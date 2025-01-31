import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,  // Image optimization বন্ধ
  },
  eslint: {
    ignoreDuringBuilds: true,  // Build সময় ESLint চেক বন্ধ
  },
  reactStrictMode: true,  // React strict mode চালু
  swcMinify: true,  // SWC মিনি্ফাইয়ার চালু
 
};

export default nextConfig;
