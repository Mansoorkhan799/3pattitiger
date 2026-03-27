'use client';

import { useState, useEffect, useTransition } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [, startTransition] = useTransition();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    startTransition(() => setIsOpen((prev) => !prev));
  };

  const closeMenu = () => {
    startTransition(() => setIsOpen(false));
  };

  if (!mounted) {
    return (
      <div className="md:hidden">
        <button 
          className="flex items-center text-accent p-1"
          aria-label="Open menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-8 h-8"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <div className="md:hidden">
      {/* Mobile menu button */}
      <button 
        onClick={toggleMenu}
        className="flex items-center text-accent p-1"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          className="w-8 h-8"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-primary">
          <div className="flex justify-between items-center p-4 border-b border-gray-800">
            <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image
                  src="/3-patti-tiger-logo.webp"
                  alt="3 Patti Tiger Logo"
                  fill
                  sizes="(max-width: 768px) 32px, 40px"
                  className="object-contain"
                  priority={true}
                />
              </div>
              <span className="text-accent text-xl font-bold">3 Patti Tiger</span>
            </Link>
            <button 
              onClick={closeMenu}
              className="text-accent p-1"
              aria-label="Close menu"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                className="w-8 h-8"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <nav className="flex flex-col p-4">
            <Link href="/download-3-patti-tiger" className="text-white hover:text-accent py-2 text-lg font-medium transition-colors" onClick={closeMenu}>Download</Link>
            <Link href="/deposit-money-in-3-patti-tiger" className="text-white hover:text-accent py-2 text-lg font-medium transition-colors" onClick={closeMenu}>Deposit Guide</Link>
            <Link href="/withdraw-money-from-3-patti-tiger" className="text-white hover:text-accent py-2 text-lg font-medium transition-colors" onClick={closeMenu}>Withdraw Guide</Link>
            <Link href="/3-patti-tiger-for-pc" className="text-white hover:text-accent py-2 text-lg font-medium transition-colors" onClick={closeMenu}>PC Version</Link>
            <Link href="/about-us-3-patti-tiger-pakistan" className="text-white hover:text-accent py-2 text-lg font-medium transition-colors" onClick={closeMenu}>About Us</Link>
            <Link href="/blog" className="text-white hover:text-accent py-2 text-lg font-medium transition-colors" onClick={closeMenu}>Blog</Link>
            <Link href="/contact-us-3-patti-tiger-pakistan" className="text-white hover:text-accent py-2 text-lg font-medium transition-colors" onClick={closeMenu}>Contact Us</Link>
          </nav>
        </div>
      )}
    </div>
  );
}