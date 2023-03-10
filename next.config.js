/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    BACKEND_URL: "http://api.deuterium.wiki:8000/",
  },
};

module.exports = nextConfig;
