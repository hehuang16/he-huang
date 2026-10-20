/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.youtube.com'],
  },
  async redirects() {
    return [
      {
        source: '/spanish',
        destination: '/spanish/index.html',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
