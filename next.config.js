/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/jobs",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
