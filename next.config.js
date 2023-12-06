const withNextIntl = require('next-intl/plugin')('./i18n.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nix-tag-images.s3.amazonaws.com',
        port: '',
      },
    ],
  },
};

module.exports = withNextIntl(nextConfig);
