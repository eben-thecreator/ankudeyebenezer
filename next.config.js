/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // ✅ modern image config
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // loosened for testing; restrict later
      },
    ],
  },

  // ✅ The correct way for Next 16.0.1
  turbopack: {
    root: __dirname, // explicitly define project root
  },
};

module.exports = nextConfig;
