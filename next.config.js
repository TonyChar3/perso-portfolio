/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["ik.imagekit.io"],
  },
  allowedDevOrigins: ["10.0.0.33"],
};

module.exports = nextConfig;
