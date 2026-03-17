import Image from "next/image";
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';

// This additional metadata enhances the page-specific SEO
export const metadata: Metadata = {
  title: {
    default: "3 Patti Tiger Pakistan v1.3(1) Free Download Official APK",
    template: "%s | 3 Patti Tiger"
  },
  description: "3 Patti Tiger 2026 - Pakistan's #1 card game platform. Download 3 Patti Tiger APK, play Teen Patti, Rummy, Dragon vs Tiger & win real cash. Fast withdrawals via JazzCash & EasyPaisa. Join 500K+ players!",
  keywords: [
    "3 Patti Tiger",
    "3 Patti Tiger game",
    "3 Patti Tiger download",
    "3 Patti Tiger app",
    "3 Patti Tiger apk",
    "3 Patti Tiger pakistan",
    "3 Patti Tiger online",
    "download 3 Patti Tiger",
    "3 Patti Tiger real money",
    "3 Patti Tiger",
    "how to play 3 Patti Tiger",
    "3 Patti Tiger 2026",
    "Pakistan card games",
    "Teen Patti game",
    "online rummy game",
    "earn money playing cards",
    "Android gaming app 2026",
    "JazzCash gaming",
    "EasyPaisa gaming",
    "mobile card games",
    "real money games Pakistan",
    "card game earning app",
    "Teen Patti online",
    "Dragon vs Tiger",
    "best earning app Pakistan",
    "rummy card game",
    "play rummy online",
    "rummy game download"
  ],
  alternates: {
    canonical: 'https://3pattitigergame.com.pk/',
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
    title: '3 Patti Tiger Pakistan v1.3(1) Free Download Official APK',
    description: '3 Patti Tiger 2026 - Pakistan\'s #1 card game platform. Join 500K+ players. Play Teen Patti, Rummy & more. Earn real money with JazzCash & EasyPaisa. Download now!',
    url: 'https://3pattitigergame.com.pk/',
    siteName: '3 Patti Tiger',
    locale: 'en_US',
    images: [
      {
        url: 'https://3pattitigergame.com.pk/3-patti-tiger.webp',
        width: 512,
        height: 512,
        alt: '3 Patti Tiger Pakistan - Official Card Game APK Download'
      },
      {
        url: 'https://3pattitigergame.com.pk/feature/og-image.webp',
        width: 1200,
        height: 630,
        alt: '3 Patti Tiger - Premier Card Gaming Platform'
      },
      {
        url: 'https://3pattitigergame.com.pk/feature/og-image-square.webp',
        width: 800,
        height: 800,
        alt: '3 Patti Tiger - Premier Card Gaming Platform'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: '3 Patti Tiger Pakistan v1.3(1) Free Download Official APK',
    description: '3 Patti Tiger 2026 - Pakistan\'s #1 card game platform. Join 500K+ players. Play Teen Patti, Rummy & more. Earn real money with JazzCash & EasyPaisa. Download now!',
    images: ['https://3pattitigergame.com.pk/3-patti-tiger.webp']
  }
};

export default function Home() {
  // Schema.org structured data for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://3pattitigergame.com.pk/#website",
        "url": "https://3pattitigergame.com.pk/",
        "name": "3 Patti Tiger",
        "description": "Pakistan's premier card game platform with Teen Patti, Rummy, Dragon Tiger and more",
        "inLanguage": "en-US",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://3pattitigergame.com.pk/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://3pattitigergame.com.pk/#organization",
        "name": "3 Patti Tiger",
        "url": "https://3pattitigergame.com.pk/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://3pattitigergame.com.pk/3-patti-tiger-logo.webp",
          "width": 512,
          "height": 512
        },
        "sameAs": [
          "https://www.facebook.com/share/1CALJMZaK9/?mibextid=wwXIfr",
          "https://x.com/goldsbetpk?s=21&t=pREWCR0SGL2R4kK-TCyECg",
          "https://youtube.com/@3patti-tiger?si=vnZzxCVd-KCdwY-P"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "support@3pattitigergame.com.pk",
          "contactType": "Customer Support",
          "areaServed": "PK"
        }
      },
      {
        "@type": "SoftwareApplication",
        "name": "3 Patti Tiger",
        "operatingSystem": "Android 5.0+",
        "applicationCategory": "GameApplication",
        "image": "https://3pattitigergame.com.pk/3-patti-tiger-logo.webp",
        "logo": "https://3pattitigergame.com.pk/3-patti-tiger-logo.webp",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.5",
          "ratingCount": "500000"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "PKR"
        },
        "downloadUrl": "https://pk3pattitiger.com/?from_gameid=8052768&channelCode=6669183",
        "softwareVersion": "V1.3(1)",
        "fileSize": "49MB",
        "description": "Play Teen Patti, Rummy, Dragon Tiger and other card games. Earn real money with JazzCash & EasyPaisa withdrawals.",
        "screenshot": [
          "https://3pattitigergame.com.pk/3-patti-tiger-logo.webp",
          "https://3pattitigergame.com.pk/3-patti-tiger.webp",
          "https://3pattitigergame.com.pk/3-patti-tiger-game-interface.webp",
          "https://3pattitigergame.com.pk/3-patti-tiger-game-2026.webp",
          "https://3pattitigergame.com.pk/3-patti-tiger-bonuses.webp"
        ],
        "author": {
          "@type": "Organization",
          "name": "3 Patti Tiger"
        }
      },
      {
        "@type": "ImageObject",
        "@id": "https://3pattitigergame.com.pk/#hero-image",
        "url": "https://3pattitigergame.com.pk/3-patti-tiger.webp",
        "contentUrl": "https://3pattitigergame.com.pk/3-patti-tiger.webp",
        "name": "3 Patti Tiger Pakistan - Official Card Game",
        "description": "3 Patti Tiger Pakistan official card game app - Download the latest version and play Teen Patti, Rummy, Dragon vs Tiger to earn real cash rewards via JazzCash and EasyPaisa.",
        "caption": "3 Patti Tiger Pakistan v1.3(1) - Official APK Download 2026",
        "width": 512,
        "height": 512,
        "representativeOfPage": true,
        "inLanguage": "en-US",
        "author": {
          "@type": "Organization",
          "name": "3 Patti Tiger",
          "url": "https://3pattitigergame.com.pk/"
        },
        "copyrightHolder": {
          "@type": "Organization",
          "name": "3 Patti Tiger",
          "url": "https://3pattitigergame.com.pk/"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is 3 Patti Tiger?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "3 Patti Tiger is Pakistan's premier online card game platform where you can play Teen Patti, Rummy, Dragon vs Tiger, and many other exciting casino games. 3 Patti Tiger offers real cash rewards with fast withdrawals via JazzCash and EasyPaisa."
            }
          },
          {
            "@type": "Question",
            "name": "How to download 3 Patti Tiger?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can download 3 Patti Tiger APK from the official website 3pattitigergame.com.pk. The app is available for Android devices and can be installed directly by downloading the APK file."
            }
          },
          {
            "@type": "Question",
            "name": "How to download 3 Patti Tiger app for Android?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "To download the 3 Patti Tiger app for Android, visit 3pattitigergame.com.pk, click the download button, enable Unknown Sources in your settings, and install the APK file. The 3 Patti Tiger game is free to download and works on Android 5.0 or higher."
            }
          },
          {
            "@type": "Question",
            "name": "Is 3 Patti Tiger safe and legal?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, 3 Patti Tiger is safe to use with secure data protection. The platform uses encrypted transactions and protects user privacy. However, legality depends on local laws, so always check your region's regulations."
            }
          },
          {
            "@type": "Question",
            "name": "How to earn money on 3 Patti Tiger?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can earn money on 3 Patti Tiger by playing games like Teen Patti, Rummy, and Dragon vs Tiger. The platform offers welcome bonuses, daily rewards, referral commissions, and deposit bonuses to help you start earning."
            }
          },
          {
            "@type": "Question",
            "name": "How to withdraw money from 3 Patti Tiger?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can withdraw money from 3 Patti Tiger using JazzCash or EasyPaisa. Go to the Wallet section, click Withdrawal, choose your payment method, enter the amount and account details, then confirm. Withdrawals are processed quickly."
            }
          },
          {
            "@type": "Question",
            "name": "What games are available on 3 Patti Tiger?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "3 Patti Tiger offers multiple games including Teen Patti, Classic Rummy, Dragon vs Tiger, Andar Bahar, Poker, and various slot games. All games are available 24/7 with real cash prizes."
            }
          },
          {
            "@type": "Question",
            "name": "How long do 3 Patti Tiger withdrawals take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "3 Patti Tiger withdrawals through JazzCash and EasyPaisa are processed within 5-30 minutes. The platform offers fast, secure withdrawals with no hidden fees."
            }
          },
          {
            "@type": "Question",
            "name": "What is the minimum withdrawal on 3 Patti Tiger?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The minimum withdrawal amount on 3 Patti Tiger depends on your payment method. Generally, you can withdraw as low as PKR 500 via JazzCash or EasyPaisa."
            }
          },
          {
            "@type": "Question",
            "name": "How do I contact 3 Patti Tiger customer support?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can contact 3 Patti Tiger customer support via 24/7 live chat within the app, email at support@3pattitigergame.com.pk, or through WhatsApp. Support team responds quickly to all queries."
            }
          },
          {
            "@type": "Question",
            "name": "What bonuses does 3 Patti Tiger offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "3 Patti Tiger offers welcome bonuses for new users, daily login bonuses, deposit bonuses, referral bonuses, and recharge rebates. Special VIP bonuses are available for high-volume players."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://3pattitigergame.com.pk/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://3pattitigergame.com.pk/"
          }
        ]
      }
    ]
  };

  return (
    <>
      {/* Schema.org JSON-LD */}
      <Script
        id="homepage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 md:px-8 pt-4">
        <ol className="flex items-center text-sm text-gray-400">
          <li>
            <span className="text-accent font-medium">Home</span>
          </li>
        </ol>
      </nav>
      
      {/* Hero Section with improved spacing */}
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto" style={{ minHeight: '400px' }}>
        <div className="md:flex md:items-start md:justify-between md:space-x-12 lg:space-x-20">
          <div className="md:w-1/2 space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-white">3 Patti Tiger Pakistan</span>
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                <span className="text-[#FFA500]">Official APK Download</span>{' '}
                <span className="text-white">| Teen Patti Tiger 2026</span>
              </h2>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed" style={{ contain: 'layout style', minHeight: '120px', display: 'block' }}>
              Are you searching for the official website of <Link href="/about-us-3-patti-tiger-pakistan" className="text-accent hover:underline font-semibold">3 Patti Tiger</Link>? If yes, then you are on the right website. Here, you can find the original App and new updates of this application. You can download the latest version of Teen Patti Tiger using the download link below:
            </p>

            {/* Download Button */}
            <div className="flex justify-center my-8">
              <a 
                href="https://pk3pattitiger.com/?from_gameid=8052768&channelCode=6669183"
                id="download"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center px-8 py-4 text-white font-semibold text-lg rounded-full border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all group"
              >
                <span>DOWNLOAD NOW</span>
                <div className="ml-3 bg-[#f97316] rounded-full p-2 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                  </svg>
                </div>
              </a>
            </div>

            {/* Stats Grid with improved spacing */}
            <div className="flex flex-row gap-4 justify-center mt-8 mb-4" style={{ minHeight: '120px' }}>
              <div className="bg-[#0A1029] p-6 rounded-2xl text-center flex-1 max-w-[180px]" style={{ minHeight: '120px' }}>
                <svg className="w-6 h-6 mb-3 text-[#FFA500] mx-auto" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                <div className="text-white text-2xl font-bold mb-1">500K+</div>
                <div className="text-gray-400 text-sm">Downloads</div>
              </div>
              
              <div className="bg-[#0A1029] p-6 rounded-2xl text-center flex-1 max-w-[180px]" style={{ minHeight: '120px' }}>
                <svg className="w-6 h-6 mb-3 text-[#FFA500] mx-auto" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z"/>
                </svg>
                <div className="text-white text-2xl font-bold mb-1">200K+</div>
                <div className="text-gray-400 text-sm">Ratings</div>
              </div>
              
              <div className="bg-[#0A1029] p-6 rounded-2xl text-center flex-1 max-w-[180px]" style={{ minHeight: '120px' }}>
                <svg className="w-6 h-6 mb-3 text-[#FFA500] mx-auto" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
                <div className="text-white text-2xl font-bold mb-1">49MB</div>
                <div className="text-gray-400 text-sm">App Size</div>
              </div>
            </div>

            {/* Android only notice */}
            <p className="text-gray-400 text-sm text-center italic">*Available for Android devices only</p>
          </div>

          {/* Desktop Image */}
          <div className="hidden md:block md:w-1/2 md:mt-8">
            <div className="relative ml-auto" style={{ width: '320px', height: '320px', maxWidth: '100%' }}>
              <Image
                src="/3-patti-tiger.webp"
                alt="3 Patti Tiger Pakistan - Official Card Game APK Download 2026"
                title="3 Patti Tiger Pakistan v1.3(1) Free Download"
                width={320}
                height={320}
                className="object-contain drop-shadow-2xl"
                priority={true}
                fetchPriority="high"
                quality={90}
                sizes="320px"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
          </div>

          {/* Mobile Image */}
          <div className="mt-8 md:hidden">
            <div className="relative mx-auto" style={{ width: '280px', height: '280px', maxWidth: '100%' }}>
              <Image
                src="/3-patti-tiger.webp"
                alt="3 Patti Tiger Pakistan - Official Card Game APK Download 2026"
                title="3 Patti Tiger Pakistan v1.3(1) Free Download"
                width={280}
                height={280}
                className="object-contain drop-shadow-2xl"
                priority={true}
                fetchPriority="high"
                quality={90}
                sizes="280px"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* App Specifications Table with improved spacing */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="download">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500]">Download Info Table</h2>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-800">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800">
              <tbody className="divide-y divide-gray-800">
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">App Name</td>
                  <td className="py-4 px-6 text-left text-white">3 Patti Tiger</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Developer</td>
                  <td className="py-4 px-6 text-left text-white">3pattitiger</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Category</td>
                  <td className="py-4 px-6 text-left text-white">Cards, Game</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Size</td>
                  <td className="py-4 px-6 text-left text-white">49MB</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Latest Version</td>
                  <td className="py-4 px-6 text-left text-white">V1.3(1)</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Required OS</td>
                  <td className="py-4 px-6 text-left text-white">Android 5.0+</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Update</td>
                  <td className="py-4 px-6 text-left text-white">15-March-2026</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Downloads</td>
                  <td className="py-4 px-6 text-left text-white">500k+</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Rating Count</td>
                  <td className="py-4 px-6 text-left text-white">200000+</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Language</td>
                  <td className="py-4 px-6 text-left text-white">English, Urdu</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Price</td>
                  <td className="py-4 px-6 text-left text-white">Free (0$)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* About 3 Patti Tiger Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">About 3 Patti Tiger</h2>
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Nowadays, everyone is looking for online earning platforms in Pakistan. If you are one of them, then we recommend you try 3 Patti Tiger on your smartphone. This game is trending in Pakistan and has gained millions of active users in a short period because of its awesome features and great policy. If you are an online gamer, then you must try this application once. It gives opportunities for you to earn money by playing games and many other ways, like referral link, daily, weekly, and monthly bonuses.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This platform is filled with a lot of wonderful games like Card, Rummy, Crash, Mines, Poker, etc. If you play these games wisely, then you can easily generate a good amount of income/money. The best thing about this platform is that it also offers you Dragon Tiger, Crash, and Mines games, which are mostly played by users. Nowadays, everyone is a lover of Dragon Tiger, Crash, and Mines games, and they almost download this App because of these games. So, download Teen Patti Tiger from this website and earn a good amount of income/money.
            </p>
          </div>
        </div>
      </section>

      {/* What is 3 Patti Tiger Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">What is 3 Patti Tiger?</h2>
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              3 Patti Tiger APK is an online gaming platform in Pakistan that offers you to earn real money by playing various games. This application provides a safe and secure platform for users who want to generate a good amount of money by playing card games. You can play this game on any kind of Android device without facing problems. This is the best opportunity for you to earn a good profit in a short period, and it can also improve your gaming experience. So, without further thinking, get this app on your smartphone and start earning money now.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Teen Patti Tiger is known for its attractive interface, easy customization, classic themes, and simple settings. Moreover, the Dragon vs Tiger game is available on this platform, which is the most popular and hottest game. Most users like the Dragon vs Tiger game, and they also download this Tiger because of Dragon vs Tiger.
            </p>
            <p className="text-gray-300 leading-relaxed">
              You can withdraw your winning amount into your Easypaisa and Jazzcash accounts at any time, anywhere, without facing problems. You can also deposit money in this platform by Easypaisa and Jazzcash at any time. The bonus chips for your deposits are also added to your gaming account. Moreover, you can get a login bonuses everyday in this game. This platform provides a great chance for every online gamer to earn unlimited money by playing their favourite games.
            </p>
          </div>
        </div>
      </section>

      {/* Overview of 3 Patti Tiger Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Overview of 3 Patti Tiger</h2>
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              3 Patti Tiger is covered by all the basic requirements of gamers. In this platform, you can enjoy different casino games with an attractive interface, background music, and an engaging theme. Moreover, games are organised separately in different categories such as card games, slots, poker, and a few other categories. All the games are available on the homepage of the app. Support, Withdraw, deposit, wheel spins, 7-days bonus, special day&apos;s bonus are also available at the front of the application.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Furthermore, it provides high-quality services for users, and any user can easily win a big amount of money by investing a small amount in a short time. You can also win rewards and bonuses in the form of real money. If any user wants to earn money without investing money, then earn money from the referral link system, where you have to invite friends to play the game and get a commission. So, invite more friends and earn more commission.
            </p>
          </div>
        </div>
      </section>

      {/* Why 3 Patti Tiger Popular Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Why 3 Patti Tiger Game so Popular?</h2>
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              The 3 Patti Tiger game is very popular because it allows you to earn real money while having fun. It is easy to play because it provides you with simple rules that are very easy to understand, especially for beginners. The design of this app is very beautiful and colorful, which gives you a real casino experience on your device. Players love this app because you can withdraw and deposit money easily through Easypaisa and Jazzcash without facing any delays.
            </p>

            <p className="text-gray-300 leading-relaxed">
              It also includes many exciting games such as Teen Patti, Dragon vs Tiger, Poker, Rummy, and Slots, so that you never feel bored. The other main reason for the popularity of 3 Patti Tiger is its daily bonus and rewards that help you earn coins and extra cash. It is very safe and secure and can protect your personal details or money, and work smoothly even on low-storage devices.
            </p>
          </div>
        </div>
      </section>

      {/* How to Start Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">How Can We Start with 3 Patti Tiger?</h2>
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">To start the 3 Patti Tiger game, follow the given steps:</p>
            <ol className="list-decimal pl-5 space-y-3 text-gray-300">
              <li>Firstly, open the official website of 3 Patti Tiger and <Link href="/download-3-patti-tiger" className="text-accent hover:underline font-semibold">download the APK file</Link> to your device.</li>
              <li>Once downloaded then click on the downloaded APK file to start the installation by allowing the Unknown Sources.</li>
              <li>Once installation is complete, click on it to open the 3 Patti Tiger app.</li>
              <li>When the app opens then log in with your mobile number or just play as a guest.</li>
              <li>When you log in, you will get free chips or welcome bonuses to start playing the game.</li>
              <li>Choose a table or game that you want to play, and start enjoying the game.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Game Screenshots Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-[#06091F] rounded-xl p-8">
          <h2 className="text-4xl font-bold mb-12 text-[#FFA500] text-center">3 Patti Tiger App Screenshots</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Games Collection */}
            <div className="w-full">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/3-patti-tiger-game-interface.webp"
                  alt="3 Patti Tiger Games Collection"
                  width={400}
                  height={711}
                  className="w-full h-auto"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <p className="text-center text-gray-300 mt-3 font-medium">Games Collection</p>
            </div>

            {/* Game Interface */}
            <div className="w-full">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/3-patti-tiger-game-2026.webp"
                  alt="3 Patti Tiger Game Interface"
                  width={400}
                  height={711}
                  className="w-full h-auto"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <p className="text-center text-gray-300 mt-3 font-medium">Game Interface</p>
            </div>

            {/* Bonuses */}
            <div className="w-full">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/3-patti-tiger-bonuses.webp"
                  alt="3 Patti Tiger Bonuses & Rewards"
                  width={400}
                  height={711}
                  className="w-full h-auto"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <p className="text-center text-gray-300 mt-3 font-medium">Bonuses & Rewards</p>
            </div>

            {/* Add Money */}
            <div className="w-full">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/3-patti-tiger-add-money.webp"
                  alt="3 Patti Tiger Deposit Money"
                  width={400}
                  height={711}
                  className="w-full h-auto"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <p className="text-center text-gray-300 mt-3 font-medium">Add Money</p>
            </div>

            {/* Withdraw Money */}
            <div className="w-full">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/3-patti-tiger-withdraw-money.webp"
                  alt="3 Patti Tiger Withdraw Money"
                  width={400}
                  height={711}
                  className="w-full h-auto"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <p className="text-center text-gray-300 mt-3 font-medium">Withdraw Money</p>
            </div>

            {/* Refer and Earn */}
            <div className="w-full">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/3-patti-tiger-refer-and-earn.webp"
                  alt="3 Patti Tiger Refer and Earn"
                  width={400}
                  height={711}
                  className="w-full h-auto"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <p className="text-center text-gray-300 mt-3 font-medium">Refer & Earn</p>
            </div>
          </div>

          {/* Additional Screenshots */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Recharge Rebate */}
            <div className="w-full">
              <div className="rounded-lg overflow-hidden shadow-2xl">
              <Image
                  src="/3-patti-tiger-free-spin.webp"
                  alt="3 Patti Tiger Recharge Rebate"
                  width={400}
                  height={711}
                  className="w-full h-auto"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              </div>
              <p className="text-center text-gray-300 mt-3 font-medium">Recharge Rebate</p>
            </div>

            {/* Bind Email */}
            <div className="w-full">
              <div className="rounded-lg overflow-hidden shadow-2xl">
              <Image
                  src="/3-patti-tiger-account.webp"
                  alt="3 Patti Tiger Bind Email"
                  width={400}
                  height={711}
                  className="w-full h-auto"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              </div>
              <p className="text-center text-gray-300 mt-3 font-medium">Account Security</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-accent">Top Features of 3 Patti Tiger</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
            <h3 className="text-xl font-semibold mb-3 text-accent">1: Real Money Earning</h3>
            <p className="text-gray-300">3 Patti Tiger allows you to earn real cash rewards just by playing the game that you want to play or like. Whether you enjoy teen patti, poker, or rummy, every match provides you with a chance to win money. This app directly transfers your earnings through the local and easy payment methods safely.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
            <h3 className="text-xl font-semibold mb-3 text-accent">2: Easy Withdraw & Deposit</h3>
            <p className="text-gray-300">With 3 Patti Tiger, you can manage your money in a super simple or fast way. With just a few steps, you can withdraw or deposit money anytime using local payment methods, such as JazzCash or EasyPaisa. It also ensures you have secure and quick transactions without any delays.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
            <h3 className="text-xl font-semibold mb-3 text-accent">3: Attractive Interface</h3>
            <p className="text-gray-300">This app is designed with a bright, colorful, and modern interface that can attract its users. The background music, smooth animations, and clear layout create an amazing or pleasant experience. Each section of this app is designed very well, so that you can find your favourite game easily.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
            <h3 className="text-xl font-semibold mb-3 text-accent">4: Popular Games</h3>
            <p className="text-gray-300">3 Patti Tiger provides you with a wide variety of famous games in one app so that you can enjoy dragon vs tiger, poker, slots, and many other exciting options. Each game of this app has simple rules that make it perfect for both beginners and experienced players.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
            <h3 className="text-xl font-semibold mb-3 text-accent">5: Daily Bonus</h3>
            <p className="text-gray-300">This app rewards you every day with free login bonuses or chips. You can earn extra coins just by opening the app regularly. It also provides special rewards on weekly or festival occasions. These bonuses help you to keep playing even if you do not want to deposit money.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
            <h3 className="text-xl font-semibold mb-3 text-accent">6: Referral Earning</h3>
            <p className="text-gray-300">3 Patti Tiger offers you a referral program where you can earn money without playing games. You just need to share your referral link with your friends and invite them to join. When they start playing games, you receive a commission automatically.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
            <h3 className="text-xl font-semibold mb-3 text-accent">7: Fast Performance</h3>
            <p className="text-gray-300">This app runs smoothly on almost every Android device, even on older models. It does not hang, crash, or use too much storage space. The lightweight design of this app helps it to run faster and load to provide a smooth gameplay.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
            <h3 className="text-xl font-semibold mb-3 text-accent">8: Safe & Secure Platform</h3>
            <p className="text-gray-300">In 3 Patti Tiger, your privacy and money are completely safe because it uses a secure payment method and data protection system that keeps everything private. This app is trusted by thousands of players for its reliability.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
            <h3 className="text-xl font-semibold mb-3 text-accent">9: Free to Play</h3>
            <p className="text-gray-300">3 Patti Tiger is free to download and does not ask for any registration fees. Through this feature, you can start playing games quickly with free chips that are given by the app. This feature is a perfect choice, especially for beginners.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
            <h3 className="text-xl font-semibold mb-3 text-accent">10: 24/7 Support</h3>
            <p className="text-gray-300">This app also provides you with fast customer support, which helps you anytime. Whether you face a deposit issue or a technical error, this support team responds quickly. You can contact the team directly through the app for quick help.</p>
          </div>
          </div>
        </div>
      </section>

      {/* Available Games Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Best Games to Play on 3 Patti Tiger</h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-[#FFA500]">1: Multiplayer Games</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">Tiger Dragon <span className="text-[#f97316]">(Hot)</span></p>
          </div>
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">7 UP Down <span className="text-[#f97316]">(Hot)</span></p>
          </div>
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">Zoo Roulette <span className="text-[#f97316]">(Hot)</span></p>
          </div>
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">Crash</p>
              </div>
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">Car Roulette</p>
              </div>
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">Andar Bahar</p>
              </div>
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">Teenpatti 20-20</p>
              </div>
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">Best of Five</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-[#FFA500]">2: Skill-Based Games</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">Domino <span className="text-[#f97316]">(Hot)</span></p>
              </div>
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">Rummy <span className="text-[#f97316]">(Hot)</span></p>
              </div>
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">Teen Patti</p>
              </div>
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">Fishing Rush</p>
              </div>
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">10 Cards</p>
              </div>
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">Poker</p>
              </div>
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">Ludo</p>
              </div>
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">Black Jack</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#FFA500]">3: Slots</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">Mines <span className="text-[#f97316]">(Hot)</span></p>
            </div>
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">Fruit Line</p>
              </div>
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">777 Bingo</p>
              </div>
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">Rattling GEMS</p>
              </div>
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">Video Poker 1, 2</p>
              </div>
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">Wild Energy</p>
              </div>
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">WoW Slot</p>
              </div>
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">God of Fortune</p>
          </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Benefits for New Players by Joining 3 Patti Tiger</h2>
        
        {/* New Player Welcome Bonus */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#FFA500]">1: New Player Welcome Bonus</h3>
          <p className="text-gray-300 mb-4">3Patti offers a 100% recharge bonus for all new, fresh users on their first deposit in this game.</p>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800 rounded-lg overflow-hidden">
              <thead className="bg-[#0a1029]">
                <tr>
                  <th className="py-3 px-6 text-left text-white font-semibold">Deposit Amount (PKR)</th>
                  <th className="py-3 px-6 text-left text-white font-semibold">Bonus Amount (PKR)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">100</td><td className="py-3 px-6 text-gray-300">100</td></tr>
                <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">1000</td><td className="py-3 px-6 text-gray-300">1000</td></tr>
                <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">5000</td><td className="py-3 px-6 text-gray-300">5000</td></tr>
                <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">10,000</td><td className="py-3 px-6 text-gray-300">10,000</td></tr>
                <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">20,000</td><td className="py-3 px-6 text-gray-300">20,000</td></tr>
                <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">100,000</td><td className="py-3 px-6 text-gray-300">100,000</td></tr>
              </tbody>
            </table>
          </div>
          </div>

        {/* Recharge Rebate */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#FFA500]">2: Recharge Rebate</h3>
          <p className="text-gray-300 mb-4">3 Patti Tiger game is also offering huge recharge rebate bonuses for every player when they deposit an amount.</p>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800 rounded-lg overflow-hidden">
              <thead className="bg-[#0a1029]">
                <tr>
                  <th className="py-3 px-6 text-left text-white font-semibold">Rebate</th>
                  <th className="py-3 px-6 text-left text-white font-semibold">Recharge Required</th>
                  <th className="py-3 px-6 text-left text-white font-semibold">Required Wager</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">5%</td><td className="py-3 px-6 text-gray-300">3000 PKR</td><td className="py-3 px-6 text-gray-300">2x</td></tr>
                <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">10%</td><td className="py-3 px-6 text-gray-300">5000</td><td className="py-3 px-6 text-gray-300">3x</td></tr>
                <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">15%</td><td className="py-3 px-6 text-gray-300">8000</td><td className="py-3 px-6 text-gray-300">4x</td></tr>
                <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">20%</td><td className="py-3 px-6 text-gray-300">10,000</td><td className="py-3 px-6 text-gray-300">5x</td></tr>
                <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">25%</td><td className="py-3 px-6 text-gray-300">20,000</td><td className="py-3 px-6 text-gray-300">6x</td></tr>
                <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">30%</td><td className="py-3 px-6 text-gray-300">50,000</td><td className="py-3 px-6 text-gray-300">7x</td></tr>
              </tbody>
            </table>
          </div>
          </div>

        {/* Big Rebate on Recharge */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#FFA500]">3: Big Rebate on Recharge</h3>
          <p className="text-gray-300 mb-4">This type of reward is only available for deposit of a minimum of 3000PKR or more. It also depends upon VIP Level with increasing rebate bonus. It can be claimed every day.</p>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800 rounded-lg overflow-hidden">
              <thead className="bg-[#0a1029]">
                <tr>
                  <th className="py-3 px-6 text-left text-white font-semibold">VIP Level</th>
                  <th className="py-3 px-6 text-left text-white font-semibold">Rebate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">V1-V2</td><td className="py-3 px-6 text-gray-300">1% rebate</td></tr>
                <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">V3-V4</td><td className="py-3 px-6 text-gray-300">2% rebate</td></tr>
                <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">V5-V6</td><td className="py-3 px-6 text-gray-300">3% rebate</td></tr>
                <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">V7-V8</td><td className="py-3 px-6 text-gray-300">4% rebate</td></tr>
                <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">V9-V10</td><td className="py-3 px-6 text-gray-300">5% rebate</td></tr>
                <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">V11-V12</td><td className="py-3 px-6 text-gray-300">6% rebate</td></tr>
                <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">V13-V14</td><td className="py-3 px-6 text-gray-300">7% rebate</td></tr>
                <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">V15-V16</td><td className="py-3 px-6 text-gray-300">8% rebate</td></tr>
                <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">V17-V18</td><td className="py-3 px-6 text-gray-300">9% rebate</td></tr>
                <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">V19-V20</td><td className="py-3 px-6 text-gray-300">10% rebate</td></tr>
              </tbody>
            </table>
          </div>
          </div>
        </div>
      </section>

      {/* Download Instructions */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Download 3 Patti Tiger APK Latest Version For Android</h2>
          <p className="text-gray-300 mb-4">To download the latest version of 3 Patti Tiger APK for Android devices, follow the given steps:</p>
          <div className="mb-8">
          <ol className="list-decimal pl-5 space-y-3 text-gray-300">
            <li>First, you open the browser on your Android device and click on the search bar.</li>
            <li>In the search bar, type the latest version of 33 Patti Tiger and visit the trusted website.</li>
            <li>On the trusted website, click on the Download button to start downloading.</li>
            <li>Now wait a few seconds to complete the downloading process.</li>
            <li>Once complete, that file will be saved in the Download Folder of the device.</li>
          </ol>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Installation Guide for 3 Patti Tiger APK</h2>
        <p className="text-gray-300 mb-4">After downloading to installing the 3 Patti Tiger APK, follow the given steps:</p>
        <div className="mb-8">
          <ol className="list-decimal pl-5 space-y-3 text-gray-300">
            <li>To start installation, your device grants permission to install unknown sources.</li>
            <li>Open the Settings &lt; Security and enable the Install Unknown Apps.</li>
            <li>After this, open the File Manager and go to the Download Folder.</li>
            <li>Click on the download APK file, and the installation process will start.</li>
            <li>Wait until the installation completes successfully on your device.</li>
            <li>Once complete then the app icon will show on your device.</li>
            <li>Click on it to launch the app and start playing the games that you want.</li>
          </ol>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">System Requirements</h2>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full divide-y divide-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-[#0a1029]">
              <tr>
                <th className="py-3 px-6 text-left text-white font-semibold">System</th>
                <th className="py-3 px-6 text-left text-white font-semibold">Minimum</th>
                <th className="py-3 px-6 text-left text-white font-semibold">Recommended</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">Operating System</td><td className="py-3 px-6 text-gray-300">Android 4.1</td><td className="py-3 px-6 text-gray-300">Android 8.0 or above</td></tr>
              <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">RAM</td><td className="py-3 px-6 text-gray-300">2GB or more</td><td className="py-3 px-6 text-gray-300">4GB or more</td></tr>
              <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">Storage Space</td><td className="py-3 px-6 text-gray-300">At least 500 MB free</td><td className="py-3 px-6 text-gray-300">1GB free space</td></tr>
              <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">Processor</td><td className="py-3 px-6 text-gray-300">Quad-core 1.5 GHz</td><td className="py-3 px-6 text-gray-300">Octa-core 2.0 GHz</td></tr>
              <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">Internet</td><td className="py-3 px-6 text-gray-300">Stable 3G or WiFi</td><td className="py-3 px-6 text-gray-300">Fast & stable 4G or WiFi</td></tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-center">
          <a 
            href="https://pk3pattitiger.com/?from_gameid=8052768&channelCode=6669183"
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn bg-transparent hover:bg-[#0ea5e9]/10 text-white font-bold py-4 px-8 rounded-full inline-flex items-center transition-all shadow-lg hover:shadow-xl border-2 border-[#0ea5e9]"
          >
            <span className="text-lg">DOWNLOAD NOW</span>
            <div className="download-icon ml-2 bg-[#f97316] rounded-full p-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
            </div>
          </a>
          </div>
        </div>
      </section>

      {/* Account Creation */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">How to Register & Login on 3 Patti Tiger?</h2>
          
          <h3 className="text-xl font-semibold mb-4 text-[#FFA500]">1: Register Method</h3>
          <p className="text-gray-300 mb-4">To register the account on 3 Patti Tiger, follow the given steps:</p>
          <div className="mb-8">
          <ol className="list-decimal pl-5 space-y-3 text-gray-300">
            <li>Firstly, open the 3 Patti Tiger app on your device.</li>
            <li>On the homescreen, click on the Register or Sign Up option.</li>
            <li>Now, enter your valid mobile number or email address.</li>
            <li>Set a strong password that can never be accessed easily.</li>
            <li>Enter the OTP that you can receive through phone or email for verification.</li>
            <li>Once verification is complete then your account will be created successfully.</li>
          </ol>
          </div>

          <h3 className="text-xl font-semibold mb-4 text-[#FFA500]">2: Login Method</h3>
          <p className="text-gray-300 mb-4">After registration, the next step is to log account for Follow the given steps:</p>
          <div className="space-y-4">
          <ol className="list-decimal pl-5 space-y-3 text-gray-300">
            <li>Open the 3 Patti Tiger app on your device.</li>
            <li>Click on the Login button on the homescreen.</li>
            <li>Enter your registered mobile number, email, or password.</li>
            <li>Make sure that your entered details are correct.</li>
            <li>Once confirmed, tap on the Sign in or Login option.</li>
            <li>If you forget your password, then use Forgot Password to reset it.</li>
            <li>Once logging is complete, you can start playing games.</li>
          </ol>
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Ways to Deposit & Withdraw Money in 3 Patti Tiger</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">1: Jazzcash</h3>
              <p className="text-gray-300">Jazzcash is one of the most trusted and secure mobile banking services that allows you to deposit money quickly into your gaming account and start playing games quickly. It's a fast and safe transaction system that allows you to withdraw your winnings directly into your account wallet. The best part of this method is that you can wait a long time because the transactions are completed within seconds.</p>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">2: Easypaisa</h3>
              <p className="text-gray-300">Easypaisa is another secure and most commonly used payment method that is similar to the JazzCash method. It allows you to deposit or withdraw money without any difficulty. Through this method, you can add funds to your game account and transfer winnings to your Easypaisa wallet in just a few steps. The process of this method is very safe, reliable, and suitable for all types of users.</p>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">3: Bank Card</h3>
              <p className="text-gray-300">Bank Card is a convenient withdrawal option that lets you send your winnings directly to your bank account. Simply choose your desired bank, enter your account number, user name, and email, then submit your withdrawal request. With Bank Card, you can withdraw up to PKR 20,000 maximum per transaction, making it ideal for larger payouts. This method provides a secure way to receive your earnings straight to your bank account.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deposit Instructions */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-secondary rounded-xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">How to Deposit Money?</h2>
            <p className="text-gray-300 mb-4">To deposit money in 3 Patti Tiger, follow the given steps:</p>
                <ol className="list-decimal pl-5 space-y-3 text-gray-300">
              <li>First, open the 3 Patti Tiger app on your device and log in.</li>
              <li>Now, click on the Wallet option that is available on the homescreen.</li>
              <li>In this wallet section, click on the Deposit option.</li>
              <li>Choose a payment method that you want to use.</li>
              <li>Enter the amount that you want to deposit.</li>
              <li>Click on the confirm option and wait to complete it.</li>
              <li>Once complete, the balance will show in your game wallet.</li>
                </ol>
              </div>
          <div className="bg-secondary rounded-xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">How to Withdraw Money?</h2>
            <p className="text-gray-300 mb-4">To withdraw money in 3 Patti Tiger, follow the given steps:</p>
                <ol className="list-decimal pl-5 space-y-3 text-gray-300">
              <li>Open the 3 Patti Tiger app and log in to your account.</li>
              <li>Click on the Wallet option that is available on the main screen.</li>
              <li>In the wallet section, click on the Withdrawal option.</li>
              <li>Choose your payment method, like JazzCash, EasyPaisa, or Bank Card.</li>
              <li>Now enter the amount that you want to withdraw.</li>
              <li>Enter some required details, like the account number.</li>
              <li>Double-check all entered details and click on Confirm.</li>
              <li>Wait a few seconds to complete the withdrawal process.</li>
              <li>Once complete, that money will be shown in your selected payment method.</li>
                </ol>
          </div>
        </div>
      </section>

      {/* Tips and Tricks */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Tips & Tricks to Earn Maximum on Teen Patti Tiger Game</h2>
          <div className="space-y-4">
          <ul className="list-disc pl-5 space-y-3 text-gray-300">
            <li><strong>Start with Small Bets:</strong> Always start a game with a small investment because it will help you to understand the game rules and overcome the risk of losing money. When you become confident, then increase your bet.</li>
            <li><strong>Use Bonuses Wisely:</strong> 3 Patti Tiger offers you daily login bonuses, referral bonuses, or deposit rewards. It helps you to play more games without spending your one money or earning extra money.</li>
            <li><strong>Play Popular Games:</strong> Focus on high-earning games such as Dragon vs Tiger or Teen Patti Classic that provide you with higher winning chances, and also attract players with better opportunities to earn.</li>
            <li><strong>Invite Friends:</strong> Use the referral link system to invite friends every time your friends join, and then you can earn commission. The more friends you invite, the higher you can become.</li>
            <li><strong>Stay Active Daily:</strong> Regularly log in to the app to collect the daily rewards or spin bonuses. Always stay active because it will increase your bonus balance or improve your chances of winning big.</li>
            <li><strong>Withdraw on Time:</strong> When you earn a good amount then do not delay withdrawal. Always transfer your winnings as soon as possible through Jazcash or EasyPaisa to keep your money safe.</li>
            <li><strong>Learn from Practice Mode:</strong> Before playing games with real money, try the free or demo mode as practice. This helps you to understand the gameplay easily and develop the winning strategies without any risk.</li>
            <li><strong>Keep the Emotions in Control:</strong> Never play games with frustration or greed. Always stay calm or make smart decisions during the game because it helps you to avoid unnecessary losses.</li>
            <li><strong>With Expert Players:</strong> Observe how other players make the moves. Through this, you can learn new techniques or strategies and timing from them to improve your skills.</li>
            <li><strong>Avoid Fake Apps:</strong> Always download the original 3 Patti Tiger app through official or trusted sources because fake links or websites can steal your personal data or money.</li>
          </ul>
          </div>
        </div>
      </section>

      {/* What's New Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">What's New in the Latest Version of the 3 Patti Tiger?</h2>
          <div className="space-y-4">
            <ol className="list-decimal pl-5 space-y-3 text-gray-300">
              <li>In the latest version, the game looks better with improved graphics and smooth animations.</li>
              <li>Provide fast performance so that the app opens quickly and runs smoothly without lag.</li>
              <li>Its menu and layout are simple, which makes it very easy, especially for new users.</li>
              <li>In the latest versions, more games are added, such as Dragon vs Tiger, Rummy, and others.</li>
              <li>The withdrawal or deposit options work faster and smoothly in the latest version.</li>
              <li>In the latest version, better security measures can be used that can protect your account and money.</li>
              <li>New bonuses and referral rewards provide you with more chances to earn money.</li>
              <li>Old Errors or app issues are removed to offer a smooth gaming experience.</li>
              <li>The background music or game sounds improve the app and provide more fun.</li>
              <li>The new VIP system gives you extra prizes and benefits that help you stay active.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Pros and Cons */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Pros & Cons of using 3 Patti Tiger</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Pros</h3>
            <div className="bg-[#0A1029] px-8 py-8 rounded-lg">
              <ul className="list-disc pl-5 space-y-3 text-gray-300">
                <li>Very simple and fun to play</li>
                <li>Earn money with a small investment</li>
                <li>Jazzcash and Easypaisa make payment easy</li>
                <li>Many different games for enjoyment</li>
                <li>Fast withdrawal of your money</li>
                <li>Very easy to use and quick to start</li>
                <li>Daily rewards and bonuses</li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Cons</h3>
            <div className="bg-[#0A1029] px-8 py-8 rounded-lg">
              <ul className="list-disc pl-5 space-y-3 text-gray-300">
                <li>Risk of losing money</li>
                <li>Sometimes withdrawals take time</li>
                <li>Gameplay can be addictive</li>
                <li>Run slow on weak phones</li>
                <li>No legal Support</li>
                <li>No Financial Freedom</li>
                <li>Gameplay can be complicated</li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Safety Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">About the Safety & Security of the 3 Patti Tiger</h2>
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              3 Patti Tiger is an online gaming platform that provides you with a safe and secure environment. It uses basic security features such as data encryption or SSL certificates that can protect your information. This app also supports local payment options such as JazzCash or Easy Paisa, which can make the transactions safer and secure. However, this app is not officially available on the Google Play Store and may come with some risks, such as malware or scams. So, it is important to make sure that you can download it from official, safe, and secure sources. Always avoid sharing your sensitive personal information or banking details.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">How Can We Contact the 3 Patti Tiger?</h2>
          <p className="text-gray-300 mb-6">To contact the customer support team of 3 Patti Tiger, you can use the given methods:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Live Chat</h3>
              <p className="text-gray-300">3 Patti Tiger provides you with a live chat feature inside the app so that you can directly talk to the support team if you face any problems. Whether you face any issue like playing or using the app, this team responds to you quickly and helps you solve your issues in real time. Live chat is the fastest way to get support without leaving the app.</p>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">WhatsApp</h3>
              <p className="text-gray-300">You can also contact the support team through WhatsApp. You can simply use the number that is provided in the app to send your problem. This support team replies to you with instructions or solutions that make it easy to fix any problem. This WhatsApp support is very convenient because this is a simple and easy way to get help.</p>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">FAQs</h3>
              <p className="text-gray-300">This app also dedicates a FAQs section where common questions are given with their answers. You can check this section before contacting the customer support team to save time. These FAQs mostly cover all topics such as registration, deposit, withdrawals, bonuses, and game rules. So, this is quick and easy to find the solution without waiting long.</p>
            </div>
          </div>
        </div>
      </section>

      {/* From the Blog - internal links to blog */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#FFA500]">From the 3 Patti Tiger Blog</h2>
          <p className="text-gray-300 mb-8">Guides, tips, and reviews to help you play and earn with 3 Patti Tiger.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Link href="/blog/3-patti-tiger-app-review-2026" className="block bg-[#0A1029] p-6 rounded-lg hover:border-accent border border-transparent border-gray-700 transition-colors">
              <h3 className="text-lg font-bold text-white mb-2">3 Patti Tiger App Review 2026</h3>
              <p className="text-gray-400 text-sm">Complete review: features, pros, cons & real user experience.</p>
            </Link>
            <Link href="/blog/is-3-patti-tiger-real-or-fake" className="block bg-[#0A1029] p-6 rounded-lg hover:border-accent border border-transparent border-gray-700 transition-colors">
              <h3 className="text-lg font-bold text-white mb-2">Is 3 Patti Tiger Real or Fake?</h3>
              <p className="text-gray-400 text-sm">Legitimacy, payment methods & how to spot fake apps.</p>
            </Link>
            <Link href="/blog/how-to-use-3-patti-tiger-app-pakistan-guide-2026" className="block bg-[#0A1029] p-6 rounded-lg hover:border-accent border border-transparent border-gray-700 transition-colors">
              <h3 className="text-lg font-bold text-white mb-2">How to Use 3 Patti Tiger in Pakistan</h3>
              <p className="text-gray-400 text-sm">Step-by-step beginner guide: download, deposit & play.</p>
            </Link>
            <Link href="/blog/tips-to-win-big-in-3-patti-tiger" className="block bg-[#0A1029] p-6 rounded-lg hover:border-accent border border-transparent border-gray-700 transition-colors">
              <h3 className="text-lg font-bold text-white mb-2">Tips to Win Big in 3 Patti Tiger</h3>
              <p className="text-gray-400 text-sm">Expert strategies for Teen Patti, Rummy & card games.</p>
            </Link>
            <Link href="/blog/is-3-patti-tiger-safe-legal-pakistan" className="block bg-[#0A1029] p-6 rounded-lg hover:border-accent border border-transparent border-gray-700 transition-colors">
              <h3 className="text-lg font-bold text-white mb-2">Is 3 Patti Tiger Safe & Legal?</h3>
              <p className="text-gray-400 text-sm">Risks, rules & safe play tips for Pakistan.</p>
            </Link>
            <Link href="/blog/ways-to-earn-money-with-3-patti-tiger-2026" className="block bg-[#0A1029] p-6 rounded-lg hover:border-accent border border-transparent border-gray-700 transition-colors">
              <h3 className="text-lg font-bold text-white mb-2">Ways to Earn Money with 3 Patti Tiger</h3>
              <p className="text-gray-400 text-sm">Bonuses, daily rewards & how to maximize income.</p>
            </Link>
          </div>
          <p className="text-center">
            <Link href="/blog" className="text-accent hover:underline font-semibold text-lg">View all blog posts →</Link>
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
        <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="group bg-[#0a1029]/50 rounded-xl border border-gray-700 hover:border-[#FFA500]/50 transition-all duration-300 shadow-md hover:shadow-lg">
            <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium hover:text-[#FFA500] transition-colors">
              What is 3 Patti Tiger and how does it work?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 pt-0 text-gray-300 border-t border-gray-700/50">
              3 Patti Tiger is Pakistan's premier online card game platform where you can play Teen Patti, Rummy, Dragon vs Tiger, and many other exciting casino games. You can play 3 Patti Tiger without depositing money by using free bonuses like the Welcome Bonus and Referral Commission. 3 Patti Tiger offers real cash rewards with fast withdrawals via JazzCash and EasyPaisa.
            </div>
          </details>

          <details className="group bg-[#0a1029]/50 rounded-xl border border-gray-700 hover:border-[#FFA500]/50 transition-all duration-300 shadow-md hover:shadow-lg">
            <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium hover:text-[#FFA500] transition-colors">
              How to download 3 Patti Tiger APK?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 pt-0 text-gray-300 border-t border-gray-700/50">
              To download 3 Patti Tiger APK, visit 3pattitigergame.com.pk and click the download button. The 3 Patti Tiger APK file will be saved to your device. Enable "Install from Unknown Sources" in your Android settings, then open the downloaded file to install 3 Patti Tiger.
            </div>
          </details>

          <details className="group bg-[#0a1029]/50 rounded-xl border border-gray-700 hover:border-[#FFA500]/50 transition-all duration-300 shadow-md hover:shadow-lg">
            <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium hover:text-[#FFA500] transition-colors">
              What makes 3 Patti Tiger different from other card games?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 pt-0 text-gray-300 border-t border-gray-700/50">
              3 Patti Tiger stands out with its simple design, fast transactions via JazzCash and EasyPaisa, exciting games like Teen Patti and Rummy, daily bonuses, and secure platform. 3 Patti Tiger offers the best card gaming experience in Pakistan with real cash rewards.
            </div>
          </details>

          <details className="group bg-[#0a1029]/50 rounded-xl border border-gray-700 hover:border-[#FFA500]/50 transition-all duration-300 shadow-md hover:shadow-lg">
            <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium hover:text-[#FFA500] transition-colors">
              Is 3 Patti Tiger safe and legal to use?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 pt-0 text-gray-300 border-t border-gray-700/50">
              Yes, 3 Patti Tiger is safe to use with secure data encryption and privacy protection. 3 Patti Tiger ensures your personal information and transactions are protected. However, the legality of online gaming depends on your local laws, so always check your region's regulations before playing 3 Patti Tiger.
            </div>
          </details>

          <details className="group bg-[#0a1029]/50 rounded-xl border border-gray-700 hover:border-[#FFA500]/50 transition-all duration-300 shadow-md hover:shadow-lg">
            <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium hover:text-[#FFA500] transition-colors">
              Can users lose money while playing?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 pt-0 text-gray-300 border-t border-gray-700/50">
              Yes, this app is involved with real money, so you might lose some amount if you do not play the games carefully. So, always play wisely and set a limit while playing.
            </div>
          </details>

          <details className="group bg-[#0a1029]/50 rounded-xl border border-gray-700 hover:border-[#FFA500]/50 transition-all duration-300 shadow-md hover:shadow-lg">
            <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium hover:text-[#FFA500] transition-colors">
              Is it possible to change the language of 3 Patti Tiger?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 pt-0 text-gray-300 border-t border-gray-700/50">
              Yes, it is possible because this app supports multiple languages, so you can change the language from the settings menu easily.
            </div>
          </details>

          <details className="group bg-[#0a1029]/50 rounded-xl border border-gray-700 hover:border-[#FFA500]/50 transition-all duration-300 shadow-md hover:shadow-lg">
            <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium hover:text-[#FFA500] transition-colors">
              How do referral rewards work?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 pt-0 text-gray-300 border-t border-gray-700/50">
              When you share your referral link with others, or when someone joins this app through your link, you can receive a commission.
            </div>
          </details>

          <details className="group bg-[#0a1029]/50 rounded-xl border border-gray-700 hover:border-[#FFA500]/50 transition-all duration-300 shadow-md hover:shadow-lg">
            <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium hover:text-[#FFA500] transition-colors">
              How to bind bank?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 pt-0 text-gray-300 border-t border-gray-700/50">
              To bind your bank for withdrawals, go to Wallet &gt; Withdrawal &gt; Bank Card. Select your desired bank from the list, then enter your account number, user name, and email. Once submitted, your bank account will be linked and ready for withdrawals.
            </div>
          </details>

          <details className="group bg-[#0a1029]/50 rounded-xl border border-gray-700 hover:border-[#FFA500]/50 transition-all duration-300 shadow-md hover:shadow-lg">
            <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium hover:text-[#FFA500] transition-colors">
              What is the maximum withdrawal at a time?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 pt-0 text-gray-300 border-t border-gray-700/50">
              For Bank Card withdrawals, the maximum amount you can withdraw at a time is PKR 20,000. For JazzCash and EasyPaisa, limits may vary—check the withdrawal section in the app for current limits.
            </div>
          </details>

          <details className="group bg-[#0a1029]/50 rounded-xl border border-gray-700 hover:border-[#FFA500]/50 transition-all duration-300 shadow-md hover:shadow-lg">
            <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium hover:text-[#FFA500] transition-colors">
              Is 3 Patti Tiger available on iPhone (iOS)?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 pt-0 text-gray-300 border-t border-gray-700/50">
              This app is mainly available for Android devices, but you can also check the official website or store for updates about iOS availability.
            </div>
          </details>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="pt-12 pb-4 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Final Thoughts</h2>
          <div className="space-y-4">
          <p className="text-gray-300">
            3 Patti Tiger is one of the most popular online card games in the world. It not only provides you with fun or entertainment but also provides you with a great chance to earn money if you play games wisely. This app provides you with a simple and user-friendly interface that can make it easy, especially for beginners, to play games. The deposit or withdrawal system through JazzCash or EasyPaisa is very convenient, which makes this platform very easy to use. If you play responsibly, make plans with smart strategies, and focus on your skill rather than luck, 3 Patti Tiger can become a more exciting or rewarding gaming experience.
          </p>
          </div>
        </div>
      </section>
    </>
  );
}
