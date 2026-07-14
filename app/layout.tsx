import { Geist_Mono } from "next/font/google"
import localFont from "next/font/local"
import Script from "next/script"

import "./globals.css"
import "@xyflow/react/dist/style.css"
import { ThemeProvider } from "@/components/layout/theme-provider"
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://dexkor.com"),
  title: {
    default: "AI-Native Support Platform for the Entire Customer Lifecycle | DexKor",
    template: "%s | DexKor",
  },
  description: "DexKor is an AI-native support platform that unifies acquisition, onboarding, support, customer success, and expansion to reduce churn, increase retention, and drive growth.",
  keywords: [
    "CRM", "Automation", "Enterprise Software", "Business Growth", "Workflow Automation", "DexKor",
    "ai native support platform", "customer lifecycle platform", "post sale operations platform",
    "customer lifecycle management software", "ai helpdesk software", "omnichannel support platform",
    "zendesk alternative", "freshdesk alternative", "customer success software",
    "churn prediction software", "customer health scoring software", "churnzero alternative",
    "customer onboarding software", "rocketlane alternative", "sales pipeline software",
    "zoho crm alternative", "pipedrive alternative", "agentic ai customer support",
    "ai support copilot", "ai customer success platform"
  ],
  authors: [{ name: "DexKor Team" }],
  creator: "DexKor",
  publisher: "DexKor",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dexkor.com",
    siteName: "DexKor",
    title: "AI-Native Support Platform for the Entire Customer Lifecycle | DexKor",
    description: "DexKor is an AI-native support platform that unifies acquisition, onboarding, support, customer success, and expansion to reduce churn, increase retention, and drive growth.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Native Support Platform for the Entire Customer Lifecycle | DexKor",
    description: "DexKor is an AI-native support platform that unifies acquisition, onboarding, support, customer success, and expansion to reduce churn, increase retention, and drive growth.",
    creator: "@dexkor",
  },
};

const satoshi = localFont({
  src: "../public/font/Fonts/WEB/fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

import PageWrapper from "@/components/layout/PageWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, satoshi.variable, "font-sans")}
    >
      <body className="bg-background text-foreground transition-colors duration-300">
        {/* ... (scripts) ... */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XB56M0QBPG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-XB56M0QBPG');
          `}
        </Script>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "wpb1pgay60");
          `}
        </Script>
       {/*  Script for  facebook from Getnos  */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2317309995432074');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2317309995432074&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <Script id="apollo-tracking" strategy="afterInteractive">
          {`
            function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");
            o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,
            o.onload=function(){window.trackingFunctions.onLoad({appId:"6a141dd3a319410020332cf1"})},
            document.head.appendChild(o)}initApollo();
          `}
        </Script>
        <Script
          id="vtag-ai-js"
          async
          src="https://r2.leadsy.ai/tag.js"
          data-pid="16wsFf1z6SunN47Ky"
          data-version="062024"
          strategy="afterInteractive"
        />
        <ThemeProvider>
          <Navbar />
          <PageWrapper>
            {children}
          </PageWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
