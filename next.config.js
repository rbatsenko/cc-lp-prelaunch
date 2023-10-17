/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/coach",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
