/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      fallback: [
        {
          source: "/:path*",
          destination: `https://www.google.com/search?q=:path*`,
        },
      ],
    };
  },
};

export default nextConfig;
