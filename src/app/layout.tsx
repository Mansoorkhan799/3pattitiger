import type { Metadata, Viewport } from "next";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeferredStyles from "@/components/DeferredStyles";
import ScrollToTopWrapper from "@/components/ScrollToTopWrapper";
import WebVitalsTracker from "@/components/WebVitalsTracker";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#06091F",
  viewportFit: "cover",
  interactiveWidget: "resizes-visual",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://3pattitigergame.com.pk'),
  title: {
    default: "3 Patti Tiger Pakistan - Official APK Download | Teen Patti Tiger",
    template: "%s | 3 Patti Tiger"
  },
  description: "3 Patti Tiger 2026 - Pakistan's #1 gaming platform. Download Teen Patti Tiger APK, play Dragon Tiger, Crash, Mines & win real cash. Fast withdrawals via JazzCash & EasyPaisa. Join millions of players!",
  keywords: [
    "3 Patti Tiger",
    "Teen Patti Tiger",
    "3 Patti Tiger download",
    "3 Patti Tiger app",
    "3 Patti Tiger apk",
    "3 Patti Tiger pakistan",
    "3 Patti Tiger online",
    "download 3 Patti Tiger",
    "3 Patti Tiger real money",
    "Teen Patti Tiger APK",
    "how to play 3 Patti Tiger",
    "3 Patti Tiger 2026",
    "Pakistan card games",
    "Dragon vs Tiger game",
    "Crash game",
    "Mines game",
    "earn money playing games",
    "Android gaming app 2026",
    "JazzCash gaming",
    "EasyPaisa gaming",
    "mobile card games",
    "real money games Pakistan",
    "3PattiTiger",
    "Teen Patti online",
    "Dragon Tiger",
    "best earning app Pakistan",
    "online gaming Pakistan",
    "play Teen Patti online",
    "3 Patti Tiger game download"
  ],
  authors: [{ name: "3 Patti Tiger Team" }],
  creator: "3 Patti Tiger",
  publisher: "3 Patti Tiger",
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
  icons: {
    icon: [
      { url: '/3-patti-tiger.ico', type: 'image/x-icon', sizes: 'any' },
      { url: '/3-patti-tiger-logo.webp', type: 'image/webp', sizes: '192x192' },
      { url: '/3-patti-tiger-logo.webp', type: 'image/webp', sizes: '512x512' }
    ],
    apple: [
      { url: '/3-patti-tiger-logo.webp', sizes: '180x180' }
    ],
    shortcut: [
      { url: '/3-patti-tiger.ico', type: 'image/x-icon' }
    ]
  },
  verification: {
    google: "8a7c21f6e90a89ef",
  },
  alternates: {
    canonical: "https://3pattitigergame.com.pk",
  },
  openGraph: {
    title: "3 Patti Tiger Pakistan - Official APK Download | Teen Patti Tiger",
    description: "3 Patti Tiger 2026 - Pakistan's #1 gaming platform. Join millions of players. Play Dragon Tiger, Crash, Mines & more. Earn real money with JazzCash & EasyPaisa. Download now!",
    url: "https://3pattitigergame.com.pk",
    siteName: "3 Patti Tiger",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://3pattitigergame.com.pk/feature/og-image.webp",
        width: 1200,
        height: 630,
        alt: "3 Patti Tiger - Premier Gaming Platform",
      },
      {
        url: "https://3pattitigergame.com.pk/feature/og-image-square.webp",
        width: 800,
        height: 800,
        alt: "3 Patti Tiger - Premier Gaming Platform",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "3 Patti Tiger Pakistan - Official APK Download | Teen Patti Tiger",
    description: "3 Patti Tiger 2026 - Pakistan's #1 gaming platform. Join millions of players. Play Dragon Tiger, Crash, Mines & more. Earn real money with JazzCash & EasyPaisa. Download now!",
    creator: "@3pattitiger",
    images: [
      {
        url: "https://3pattitigergame.com.pk/feature/twitter-card.webp",
        width: 1200,
        height: 600,
        alt: "3 Patti Tiger - Premier Gaming Platform",
      }
    ],
  },
  applicationName: "3 Patti Tiger",
  category: "Gaming",
  classification: "Gaming Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="icon" href="/3-patti-tiger.ico" type="image/x-icon" sizes="16x16 32x32" />
        <link rel="shortcut icon" href="/3-patti-tiger.ico" type="image/x-icon" />
        <link rel="icon" href="/3-patti-tiger-logo.webp" type="image/webp" sizes="192x192" />
        <link rel="icon" href="/3-patti-tiger-logo.webp" type="image/webp" sizes="512x512" />
        <link rel="apple-touch-icon" href="/3-patti-tiger-logo.webp" sizes="180x180" />
        <meta property="og:image" content="https://3pattitigergame.com.pk/3-patti-tiger-logo.webp" />
        
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Defer manifest to avoid critical path (374ms latency) - load after page interactive */}
        <Script id="deferred-manifest" strategy="lazyOnload">
          {`(function(){var l=document.createElement('link');l.rel='manifest';l.href='/manifest.json';document.head.appendChild(l);})();`}
        </Script>
        {/* Google Analytics - only load if GA ID is set in env (use NEXT_PUBLIC_GA_MEASUREMENT_ID) */}
        {typeof process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID === 'string' &&
         process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID &&
         !/^G-XXXXXXXXXX$/i.test(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                  send_page_view: false,
                  transport_type: 'beacon'
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className="antialiased bg-primary text-white min-h-screen flex flex-col"
        style={{
          backgroundImage: "radial-gradient(circle at 10% 20%, rgba(10, 16, 41, 0.4) 0%, rgba(6, 9, 31, 0.01) 90%)",
          backgroundAttachment: "fixed",
          minHeight: "100vh"
        }}
        suppressHydrationWarning
      >
        <div className="stars-bg fixed inset-0 z-0 opacity-20"></div>
        <Header />
        <main className="flex-grow relative z-10">
        {children}
        </main>
        <DeferredStyles />
        <Footer />
        <ScrollToTopWrapper />
        <WebVitalsTracker />
        
        {/* Structured data for Organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "3 Patti Tiger",
              "url": "https://3pattitigergame.com.pk",
              "logo": "https://3pattitigergame.com.pk/3-patti-tiger-logo.webp",
              "description": "3 Patti Tiger is Pakistan's premier gaming platform, offering Dragon Tiger, Crash, Mines, Teen Patti, and many other games with real cash rewards.",
              "sameAs": [
                "https://facebook.com/3pattitiger",
                "https://twitter.com/3pattitiger"
              ]
            })
          }}
        />
        
        {/* Structured data for SoftwareApplication */}
        <Script
          id="app-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "3 Patti Tiger",
              "operatingSystem": "Android",
              "applicationCategory": "GameApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "PKR"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.5",
                "ratingCount": "500000"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
