/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
