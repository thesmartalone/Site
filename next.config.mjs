/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // static build -> out/ folder, works on GitHub Pages
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
