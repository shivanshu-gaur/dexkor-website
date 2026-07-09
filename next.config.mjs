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
      {
        source: '/dexkor-funnel',
        destination: '/external-pages/dexkor-funnel',
      },
      {
        source: '/dexkor-funnel/landing',
        destination: '/external-pages/dexkor-funnel/landing',
      },
      {
        source: '/dexkor-funnel/booking',
        destination: '/external-pages/dexkor-funnel/booking',
      },
      {
        source: '/dexkor-funnel/thankyou',
        destination: '/external-pages/dexkor-funnel/thankyou',
      },
      {
        source: '/dexkor-demo-optin.html',
        destination: '/external-pages/dexkor-funnel',
      },
      {
        source: '/dexkor-demo-landing.html',
        destination: '/external-pages/dexkor-funnel/landing',
      },
      {
        source: '/dexkor-demo-booking.html',
        destination: '/external-pages/dexkor-funnel/booking',
      },
      {
        source: '/dexkor-demo-thankyou.html',
        destination: '/external-pages/dexkor-funnel/thankyou',
      },
      {
        source: '/dexkor-499',
        destination: '/external-pages/dexkor-499',
      },
      {
        source: '/dexkor-499/landing',
        destination: '/external-pages/dexkor-499/landing',
      },
      {
        source: '/dexkor-499/order',
        destination: '/external-pages/dexkor-499/order',
      },
      {
        source: '/dexkor-499/thankyou',
        destination: '/external-pages/dexkor-499/thankyou',
      },
      {
        source: '/dexkor-499-optin.html',
        destination: '/external-pages/dexkor-499',
      },
      {
        source: '/dexkor-499-landing.html',
        destination: '/external-pages/dexkor-499/landing',
      },
      {
        source: '/dexkor-499-order.html',
        destination: '/external-pages/dexkor-499/order',
      },
      {
        source: '/dexkor-499-thankyou.html',
        destination: '/external-pages/dexkor-499/thankyou',
      },
    ]
  },
}

export default nextConfig

