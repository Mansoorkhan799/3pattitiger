import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-8 pb-2 px-4 md:px-8 border-t border-gray-800 relative z-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold text-accent mb-4">3 Patti Tiger</h3>
            <p className="text-sm text-gray-300 mb-4">
              3 Patti Tiger is Pakistan's premier card gaming platform, offering Teen Patti, Rummy, Dragon vs Tiger and many other exciting games. Earn real cash with JazzCash & EasyPaisa payments.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1CALJMZaK9/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg className="w-5 h-5 text-gray-400 hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77,7.46H14.5v-1.9c0-0.9,0.6-1.1,1-1.1h3V0.13H14.5c-4.1,0-5,2.9-5,4.8v2.5H6v4.5h3.5V22h5V11.96h3.35L18.77,7.46z" />
                </svg>
              </a>
              <a href="https://x.com/goldsbetpk?s=21&t=pREWCR0SGL2R4kK-TCyECg" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                <svg className="w-5 h-5 text-gray-400 hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.706 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://youtube.com/@3patti-tiger?si=vnZzxCVd-KCdwY-P" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg className="w-5 h-5 text-gray-400 hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/download-3-patti-tiger" className="text-gray-300 hover:text-accent transition-colors">
                  Download
                </Link>
              </li>
              <li>
                <Link href="/3-patti-tiger-for-pc" className="text-gray-300 hover:text-accent transition-colors">
                  PC Version
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about-us-3-patti-tiger-pakistan" className="text-gray-300 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact-us-3-patti-tiger-pakistan" className="text-gray-300 hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/deposit-money-in-3-patti-tiger" className="text-gray-300 hover:text-accent transition-colors">
                  Deposit Guide
                </Link>
              </li>
              <li>
                <Link href="/withdraw-money-from-3-patti-tiger" className="text-gray-300 hover:text-accent transition-colors">
                  Withdraw Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/create-3-patti-tiger-account-and-login" className="text-gray-300 hover:text-accent transition-colors">
                  Account & Login
                </Link>
              </li>
              <li>
                <Link href="/blog/tips-to-win-big-in-3-patti-tiger" className="text-gray-300 hover:text-accent transition-colors">
                  Tips to Win Big
                </Link>
              </li>
              <li>
                <Link href="/privacy-3-patti-tiger-pakistan" className="text-gray-300 hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer-3-patti-tiger-pakistan" className="text-gray-300 hover:text-accent transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Download */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Download App</h3>
            <p className="text-sm text-gray-300 mb-4">
              Download 3 Patti Tiger to enjoy the best card gaming experience and earn real cash rewards on your mobile device.
            </p>
            <a 
              href="https://pk3pattitiger.com/?from_gameid=8052768&channelCode=6669183"
              target="_blank" 
              rel="noopener noreferrer" 
              className="download-btn bg-transparent hover:bg-[#0ea5e9]/10 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition-all shadow-lg hover:shadow-xl border-2 border-[#0ea5e9]"
            >
              <span>DOWNLOAD NOW</span>
              <div className="download-icon ml-2 bg-[#f97316] rounded-full p-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-4 pb-3 text-center text-sm text-gray-400">
          <p className="mb-0">© 2026 3 Patti Tiger. All rights reserved. | <Link href="/" className="hover:text-accent">3pattitigergame.com.pk</Link></p>
        </div>
      </div>
    </footer>
  );
} 