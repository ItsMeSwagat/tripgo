import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // Ensure proper type annotation for Webpack rules
    const fileLoaderRule = config.module.rules.find((rule: { test?: RegExp }) =>
      rule.test?.test(".svg")
    );

    if (fileLoaderRule) {
      config.module.rules.push(
        // Reapply the existing rule for *.svg?url imports
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/, // *.svg?url
        },
        // Use @svgr/webpack for React components
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          resourceQuery: { not: [/url/] }, // Exclude *.svg?url
          use: [{ loader: "@svgr/webpack", options: { ico: true } }],
        }
      );

      // Exclude *.svg from the default file loader
      fileLoaderRule.exclude = /\.svg$/i;
    }

    return config;
  },
};

export default nextConfig;
