/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/dexkor-new-lp',
        destination: '/external-pages/dexkor-optin-page',
      },
      {
        source: '/dexkor-optin-page',
        destination: '/external-pages/dexkor-new-lp',
      },
      {
        source: '/dexkor-thank-you',
        destination: '/external-pages/dexkor-thank-you',
      },
    ]
  },
}

export default nextConfig

