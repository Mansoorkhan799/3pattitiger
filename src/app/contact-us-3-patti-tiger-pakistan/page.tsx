import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us 3 Patti Tiger Pakistan | Get Help & Support',
  description: 'Contact 3 Patti Tiger Pakistan support team for help with the app, content, privacy policy, and more. We are here to assist you.',
  keywords: 'contact 3 Patti Tiger Pakistan, 3 Patti Tiger support, 3 Patti Tiger email, customer support, help 3 Patti Tiger',
  openGraph: {
    title: 'Contact Us 3 Patti Tiger Pakistan',
    description: 'Get in touch with 3 Patti Tiger Pakistan support team for any queries or assistance.',
    url: 'https://3pattitigergame.com.pk/contact-us-3-patti-tiger-pakistan',
    siteName: '3 Patti Tiger',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Contact Us 3 Patti Tiger Pakistan',
    description: 'Get in touch with 3 Patti Tiger Pakistan support team for any queries or assistance.',
  },
  alternates: {
    canonical: 'https://3pattitigergame.com.pk/contact-us-3-patti-tiger-pakistan',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Contact Us</h1>
            <p className="text-lg text-gray-400">We're here to help you!</p>
          </div>

          {/* Main Content */}
          <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Welcome to the Contact Us page of this site. Here, we will share the source to contact us. Feel free to contact us if you are facing any problems regarding our site, such as <Link href="/" className="text-accent hover:underline font-semibold">3 Patti Tiger</Link> APP related content or <Link href="/about-us-3-patti-tiger-pakistan" className="text-accent hover:text-accent font-semibold">About us</Link>, <Link href="/privacy-3-patti-tiger-pakistan" className="text-accent hover:text-accent font-semibold">privacy policy</Link>, etc.
              </p>

              {/* Email Contact Section */}
              <div className="bg-secondary rounded-xl p-6 md:p-8 border-2 border-orange-200 overflow-hidden">
                <div className="flex items-center justify-center mb-4">
                  <svg className="w-16 h-16 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-white">Email Us</h2>
                <p className="text-center mb-4 text-gray-400">Send us your questions or concerns via email</p>
                <div className="flex justify-center w-full min-w-0 overflow-hidden px-4">
                  <a
                    href="mailto:support@3pattitigergame.com.pk"
                    className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-4 md:py-4 md:px-6 rounded-full text-sm sm:text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl max-w-full min-w-0 overflow-hidden"
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <span className="break-all">support@3pattitigergame.com.pk</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Help Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-secondary rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-[#0A1029] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">App Information</h3>
              <p className="text-gray-400 mb-4">Need help with the 3 Patti Tiger app?</p>
              <Link href="/" className="text-accent hover:text-accent font-semibold">
                Learn More →
              </Link>
            </div>

            <div className="bg-secondary rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-[#0A1029] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Privacy Policy</h3>
              <p className="text-gray-400 mb-4">Read our privacy policy</p>
              <Link href="/privacy-3-patti-tiger-pakistan" className="text-accent hover:text-accent font-semibold">
                Read Policy →
              </Link>
            </div>

            <div className="bg-secondary rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-[#0A1029] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">About Us</h3>
              <p className="text-gray-400 mb-4">Learn more about our platform</p>
              <Link href="/about-us-3-patti-tiger-pakistan" className="text-accent hover:text-accent font-semibold">
                About Us →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "3 Patti Tiger",
              "url": "https://3pattitigergame.com.pk",
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "support@3pattitigergame.com.pk",
                "contactType": "Customer Support",
                "availableLanguage": ["English", "Urdu"]
              }
            }
          })
        }}
      />
    </div>
  );
}
