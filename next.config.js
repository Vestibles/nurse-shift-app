const nextPWA = require("next-pwa");

const isDev = process.env.NODE_ENV === "development";

const withPWA = nextPWA({
  dest: "public",
  disable: isDev,
});

module.exports = withPWA({
  reactStrictMode: true,
  turbopack: {}, // 👈 prevents that warning/error
});