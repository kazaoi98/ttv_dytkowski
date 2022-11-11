/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'static-cdn.jtvnw.net',
          pathname: '/ttv-boxart/**',
        },
      ],
    },
  };
  
  module.exports = nextConfig;