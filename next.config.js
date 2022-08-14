/** @type {import('next').NextConfig} */
import { i18n } from "./next-i18next.config";

const nextConfig = {
  i18n,
  reactStrictMode: true,
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    return config;
  }
};

export default nextConfig;
