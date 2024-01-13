const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.stripe.com",
      },
      {
        protocol: "https",
        hostname: "botanicaipe.com.br",
      },
    ],
  },
};

module.exports = nextConfig;
