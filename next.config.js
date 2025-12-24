/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Allow production builds even if TypeScript errors are present
    ignoreBuildErrors: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
