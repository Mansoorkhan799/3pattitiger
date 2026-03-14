'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

// Throttle scroll handler to reduce main-thread work and improve INP
function useThrottledScroll(callback: () => void, delay: number) {
  const lastRan = useRef(Date.now());
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const handler = () => {
      if (rafId.current) return;
      rafId.current = requestAnimationFrame(() => {
        const now = Date.now();
        if (now - lastRan.current >= delay) {
          callback();
          lastRan.current = now;
        }
        rafId.current = null;
      });
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => {
      window.removeEventListener('scroll', handler);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [callback, delay]);
}

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    const visible = window.pageYOffset > 300;
    setIsVisible((prev) => (prev !== visible ? visible : prev));
  }, []);

  useThrottledScroll(toggleVisibility, 150);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
}

