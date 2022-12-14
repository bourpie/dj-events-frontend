/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aristote.soquij.qc.ca',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
