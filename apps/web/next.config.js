/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [],
  output: 'standalone',
  env: {
    API_URL: process.env.API_URL || 'http://localhost:3001',
    AI_URL: process.env.AI_URL || 'http://localhost:8000',
  },
};

module.exports = nextConfig;
