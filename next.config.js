/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "assets.ey.com",
      "swipo.eu",
      "hips.hearstapps.com",
      "www.johnritz.com",
      "i.pinimg.com",
      "smart-invest.s3.us-east-2.amazonaws.com",
      "i.ebayimg.com",
      "fab-furnishings.co.uk",
      "cdn.shopify.com",
      "cdn.home-designing.com",
      "media.architecturaldigest.com",
    ],
  },
};

module.exports = nextConfig;
