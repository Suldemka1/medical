/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    api: "https://inf17.rtyva.ru/cms",
    token: "h8EAglQTsbmTwTs89EFcJS35aCqwjZTv"
  },

  output: "standalone"
}

module.exports = nextConfig
