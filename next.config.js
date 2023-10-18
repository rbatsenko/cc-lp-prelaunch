const { withAxiom } = require("next-axiom");

/** @type {import('next').NextConfig} */
const nextConfig = withAxiom({
  async redirects() {
    return [
      {
        source: "/",
        destination: "/coaches",
        permanent: false,
      },
    ];
  },
});

module.exports = nextConfig;
