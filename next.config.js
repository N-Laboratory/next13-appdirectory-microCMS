const cacheHeaders = [
  {
    key: 'Cache-Control',
    value: 'max-age=0, s-maxage=86400'
    ,
  }
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // URLを直接入力して遷移した場合
        source: '/',
        headers: cacheHeaders,
      },
      {
        // next/link や next/routerで遷移した場合
        source: '/_next/data/:hash/',
        headers: cacheHeaders,
      },
      {
        source: '/list',
        headers: cacheHeaders,
      },
      {
        source: '/_next/data/:hash/list',
        headers: cacheHeaders,
      },
      {
        source: '/api/list',
        headers: cacheHeaders,
      },
      {
        source: '/_next/data/:hash/api/list',
        headers: cacheHeaders,
      },
      {
        source: '/articles/:id*',
        headers: cacheHeaders,
      },
      {
        source: '/_next/data/:hash/articles/:id*',
        headers: cacheHeaders,
      },
    ];
  },
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.microcms-assets.io'],
  },
}

module.exports = nextConfig
