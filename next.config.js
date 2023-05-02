/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.microcms-assets.io'],
  },
  // 新URLがインデックスされて旧URLがインデックスされなくなったらredirectsの中身を全て消す。
  async redirects() {
    return [
      {
        source: '/nlab/contentspage/amazon_ses',
        destination: '/articles/amazon-ses-notification',
        statusCode: 308,
        permanent: true,
      },
      {
        source: '/nlab/contentspage/out-excel-jett',
        destination: '/articles/jett-excel',
        statusCode: 308,
        permanent: true,
      },
      {
        source: '/nlab/contentspage/disable-tls',
        destination: '/articles/aws-clb-disable-old-tls',
        statusCode: 308,
        permanent: true,
      },
      {
        source: '/nlab/contentspage/docker_mongo',
        destination: '/articles/mongodb-docker',
        statusCode: 308,
        permanent: true,
      },
      {
        source: '/nlab/contentspage/strapi',
        destination: '/articles/strapi-api',
        statusCode: 308,
        permanent: true,
      },
      {
        source: '/nlab/contentspage/wordpress_local_install',
        destination: '/articles/wordpress-install-mac',
        statusCode: 308,
        permanent: true,
      },
      {
        source: '/nlab/contentspage/zabbix_alert',
        destination: '/articles/zabbix-notification',
        statusCode: 308,
        permanent: true,
      },
      {
        source: '/nlab/contentspage/apache_access_log',
        destination: '/articles/apache-access-log',
        statusCode: 308,
        permanent: true,
      },
      {
        source: '/nlab/contentspage/nuxt-spa-deploy-s3',
        destination: '/articles/deploy-nuxt-s3',
        statusCode: 308,
        permanent: true,
      },
      {
        source: '/nlab/contentspage/enable-hsts',
        destination: '/articles/aws-clb-hsts',
        statusCode: 308,
        permanent: true,
      },
      {
        source: '/nlab/contentspage/wordpress_local_install_windows',
        destination: '/articles/wordpress-install-windows',
        statusCode: 308,
        permanent: true,
      },
      {
        source: '/nlab/contentspage/mongodb-replica-set',
        destination: '/articles/mongodb-replicaset-docker',
        statusCode: 308,
        permanent: true,
      },
      {
        source: '/nlab/contentspage/cron',
        destination: '/articles/linux-cron',
        statusCode: 308,
        permanent: true,
      },
      {
        source: '/nlab/contentspage/zabbix_setup',
        destination: '/articles/zabbix-source-install',
        statusCode: 308,
        permanent: true,
      },
      {
        source: '/nlab/contentspage/wordpress-java-integration',
        destination: '/articles/wp-rest-api-jwt',
        statusCode: 308,
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
