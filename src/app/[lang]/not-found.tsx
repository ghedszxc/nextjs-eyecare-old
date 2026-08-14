'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <Image
        src="/images/essilor-compass.svg"
        alt="404 illustration"
        width={100}
        height={100}
        className="mb-6 sm:mb-8 w-[60px] h-[60px] sm:w-[100px] sm:h-[100px]"
        priority
      />
      <h1 className="text-xl sm:text-[2rem] font-light mb-3 sm:mb-4 text-center">404 - File not found</h1>
      <p className="mb-6 sm:mb-8 text-base sm:text-lg text-center font-light">The requested resource does not exist.</p>
      <Link 
        href="/"
        className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-black hover:bg-black hover:text-white transition-colors text-sm sm:text-base font-light"
      >
        BACK TO HOMEPAGE
      </Link>
    </div>
  );
} 