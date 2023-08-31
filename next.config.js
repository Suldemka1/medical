/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    api: "http://localhost:1337",
    token: "0903ed508a5035dad2fce9a5e971f47ee9af931bee4ef783cb9128e101527220e34bd16d707d354b59e15772248d1c247b1b57865e93603c975ef0bc713098a2e8f255bc00b20215855b37199f3fd22a415db05480e0c80e59dc76d947eb0286c7c336c4656b3141dd18fa524903b2c01c915e0ec844570266b5c5dfeb54e325"
  },

  output: "standalone"
}

module.exports = nextConfig
