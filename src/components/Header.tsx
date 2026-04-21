'use client';

import Link from 'next/link';
import Image from 'next/image';
import MobileNavigation from './MobileNavigation';

export default function Header() {
  return (
    <header className="bg-primary py-3 px-4 md:px-8 sticky top-0 z-30 border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-10 w-10 mr-2">
            <Image
              src="/3-patti-tiger-logo.webp"
              alt="3 Patti Tiger Logo"
              width={40}
              height={40}
              className="object-contain"
              priority={true}
              fetchPriority="high"
            />
          </div>
          <span className="text-accent text-xl md:text-2xl font-bold">
            3 Patti Tiger
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-white hover:text-accent font-medium transition-colors">
            Home
          </Link>
          <Link href="/download-3-patti-tiger" className="text-white hover:text-accent font-medium transition-colors">
            Download
          </Link>
          <Link href="/deposit-money-in-3-patti-tiger" className="text-white hover:text-accent font-medium transition-colors">
            Deposit
          </Link>
          <Link href="/withdraw-money-from-3-patti-tiger" className="text-white hover:text-accent font-medium transition-colors">
            Withdraw
          </Link>
          <Link href="/3-patti-tiger-for-pc" className="text-white hover:text-accent font-medium transition-colors">
            PC Version
          </Link>
          <Link href="/about-us-3-patti-tiger-pakistan" className="text-white hover:text-accent font-medium transition-colors">
            About Us
          </Link>
          <Link href="/blog" className="text-white hover:text-accent font-medium transition-colors">
            Blog
          </Link>
          <Link href="/contact-us-3-patti-tiger-pakistan" className="text-white hover:text-accent font-medium transition-colors">
            Contact Us
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <MobileNavigation />
      </div>
    </header>
  );
} 