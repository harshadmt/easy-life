'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function AppPreloader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Only show preloader on first page load
    const hasLoaded = sessionStorage.getItem('elm_preloaded');
    if (hasLoaded) {
      setVisible(false);
      return;
    }

    const timer = setTimeout(() => {
      setFading(true);
      sessionStorage.setItem('elm_preloaded', 'true');
      const removeTimer = setTimeout(() => {
        setVisible(false);
      }, 400);
      return () => clearTimeout(removeTimer);
    }, 450);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#003527] transition-opacity duration-400 ease-out pointer-events-none ${
        fading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center gap-5">
        {/* Animated outer ring */}
        <div className="relative w-20 h-20 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-[#fea619]/20 animate-ping" />
          <div className="absolute inset-0 rounded-full border-2 border-t-[#fea619] border-r-[#80bea6] border-b-transparent border-l-transparent animate-spin" />
          <div className="w-14 h-14 rounded-full bg-white p-1 shadow-lg overflow-hidden flex items-center justify-center">
            <Image
              src="/logo.jpeg"
              alt="Easy Life Manager"
              width={56}
              height={56}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Minimal text indicator */}
        <div className="text-center space-y-1">
          <p className="font-heading font-bold text-sm tracking-wider text-white uppercase">
            Easy Life Manager
          </p>
          <p className="text-[11px] text-[#b0f0d6] font-medium tracking-wide">
            Sayana Charitable Society
          </p>
        </div>

        {/* Minimal glowing loading bar */}
        <div className="w-32 h-1 bg-[#064e3b] rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#fea619] to-[#c3ecd7] rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
}
