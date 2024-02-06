if (!URL.canParse(process.env.WORDPRESS_API_URL)) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `)
}

const { protocol, hostname, port, pathname } = new URL(
  process.env.WORDPRESS_API_URL
)

/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: protocol.slice(0, -1),
        hostname: process.env.WP_IMAGES_URL,
        port,
        pathname: `${pathname}/**`,
      },
      // {
      //   protocol: 'https',
      //   hostname: process.env.WP_IMAGES_URL,
      //   port,
      //   pathname: `${pathname}/**`        
      // },
    ],
    domains: [process.env.WP_IMAGES_URL, '0.gravatar.com'],
  },
}
