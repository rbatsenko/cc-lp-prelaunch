/** @type {import('next').NextConfig} */
const nextConfig = {
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
