import type { NextConfig } from "next";

const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.ohou.se",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "image.ohou.se",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "prs.ohou.se",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "bucketplace-v2-development.s3.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "bucketplace-v2-development.s3.ap-northeast-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default withVanillaExtract(nextConfig);
