/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    disableStaticImages: false,
  },
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false
  },
  output: 'standalone',
  trailingSlash: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/site.webmanifest',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/manifest+json',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig; 