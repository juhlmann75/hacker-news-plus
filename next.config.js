/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/topstories',
        destination: 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'
      },
      {
        source: '/item/:itemId',
        destination: 'https://hacker-news.firebaseio.com/v0/item/:itemId.json?print=pretty'
      }
    ]
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
