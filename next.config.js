/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tailwindui.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/coaches",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
