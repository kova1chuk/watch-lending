/** @type {import('next').NextConfig} */

const siteUrl = "https://watch-lending.vercel.app";

const nextConfig = {
  plugins: [
    {
      resolve: "next-sitemap",
      options: {
        baseUrl: siteUrl,
        // exclude: ["/"], // Add paths you want to exclude from the sitemap
        // You can add more options here, such as changefreq and priority
      },
    },
  ],
};

module.exports = nextConfig;
