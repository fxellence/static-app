/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: '/static-app',
  assetPrefix: '/static-app',
};

module.exports = nextConfig;
