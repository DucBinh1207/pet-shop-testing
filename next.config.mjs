/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.imgur.com"], // Cho phép hình ảnh từ domain này
  },
  reactStrictMode: false,
  target: "serverless",
};

export default nextConfig;
