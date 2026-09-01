'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function AppPreloader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if user already viewed preloader in this session
    const hasLoaded = sessionStorage.getItem('elm_preloaded');
    if (hasLoaded) {
      setVisible(false);
      return;
    }

    // High-precision smooth progress counter (0% to 100%)
    let currentProgress = 0;
    const startTime = performance.now();
    const duration = 750; // 750ms smooth entry duration

    const updateProgress = (now: number) => {
      const elapsed = now - startTime;
      const progressRatio = Math.min(elapsed / duration, 1);
      // easeOutCubic curve
      const easedProgress = 1 - Math.pow(1 - progressRatio, 3);
      currentProgress = Math.round(easedProgress * 100);
      setProgress(currentProgress);

      if (progressRatio < 1) {
        requestAnimationFrame(updateProgress);
      } else {
        // Complete & trigger smooth dissolve
        setTimeout(() => {
          setFading(true);
          sessionStorage.setItem('elm_preloaded', 'true');
          const hideTimer = setTimeout(() => {
            setVisible(false);
          }, 550);
          return () => clearTimeout(hideTimer);
        }, 150);
      }
    };

    const animFrame = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(animFrame);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#003527] transition-all duration-500 ease-out pointer-events-none ${
        fading
          ? 'opacity-0 scale-105 blur-sm'
          : 'opacity-100 scale-100 blur-0'
      }`}
    >
      {/* Background ambient light orbs */}
      <div className="absolute w-96 h-96 bg-[#064e3b] rounded-full blur-3xl opacity-50 animate-pulse pointer-events-none" />
      <div className="absolute w-64 h-64 bg-[#fea619]/15 rounded-full blur-2xl pointer-events-none" />

      <div className="relative flex flex-col items-center gap-6 z-10 px-6 max-w-sm text-center">
        {/* Glowing Logo Frame */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          {/* Outer glowing pulsing rings */}
          <div className="absolute inset-0 rounded-full border border-[#fea619]/30 animate-ping opacity-30" />
          <div className="absolute -inset-1.5 rounded-full border-2 border-t-[#fea619] border-r-[#80bea6] border-b-transparent border-l-transparent animate-spin" />
          
          {/* Logo container with glass shine */}
          <div className="w-18 h-18 rounded-2xl bg-white p-1.5 shadow-2xl overflow-hidden flex items-center justify-center ring-4 ring-[#064e3b] transform transition-transform duration-500 hover:scale-105">
            <Image
              src="/logo.jpeg"
              alt="Easy Life Manager"
              width={72}
              height={72}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Brand Information */}
        <div className="space-y-1.5">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#fea619] bg-[#ffddb8]/10 px-3 py-1 rounded-full border border-[#fea619]/30">
            Sayana Charitable Society
          </span>
          <h1 className="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-tight">
            Easy Life Manager
          </h1>
          <p className="text-xs text-[#b0f0d6] font-medium italic">
            “സംഘടിക്കുക ശക്തരാകുക”
          </p>
        </div>

        {/* Progress Bar & Numeric Indicator */}
        <div className="w-full max-w-[220px] space-y-2 pt-1">
          <div className="w-full h-1.5 bg-[#064e3b] rounded-full overflow-hidden p-0.5 border border-[#80bea6]/20 shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-[#80bea6] via-[#fea619] to-[#ffffff] rounded-full transition-all duration-75 ease-out shadow-[0_0_10px_#fea619]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex justify-between items-center text-[11px] font-mono text-[#b0f0d6]/80 px-1">
            <span className="text-[10px] uppercase tracking-wider">Loading Platform</span>
            <span className="font-bold text-[#fea619]">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
