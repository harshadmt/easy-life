'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function NavigationProgress() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // When path or query params change, start silky smooth progress sequence
    setVisible(true);
    setProgress(15);

    const step1 = setTimeout(() => {
      setProgress(45);
    }, 80);

    const step2 = setTimeout(() => {
      setProgress(85);
    }, 180);

    const step3 = setTimeout(() => {
      setProgress(100);
      const finishTimer = setTimeout(() => {
        setVisible(false);
        const resetTimer = setTimeout(() => {
          setProgress(0);
        }, 150);
        return () => clearTimeout(resetTimer);
      }, 250);
      return () => clearTimeout(finishTimer);
    }, 320);

    return () => {
      clearTimeout(step1);
      clearTimeout(step2);
      clearTimeout(step3);
    };
  }, [pathname, searchParams]);

  if (!visible && progress === 0) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[9999] h-[3.5px] pointer-events-none overflow-visible"
      style={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 250ms ease-out',
      }}
    >
      {/* Background Track */}
      <div className="absolute inset-0 bg-transparent" />

      {/* Animated Glowing Progress Bar */}
      <div
        className="h-full bg-gradient-to-r from-[#003527] via-[#fea619] to-[#ffbe4d] transition-all duration-300 ease-out relative"
        style={{
          width: `${progress}%`,
        }}
      >
        {/* Leading edge glowing spark */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-3 bg-white/80 rounded-full blur-xs shadow-[0_0_12px_#fea619,0_0_20px_#fea619]" />
      </div>
    </div>
  );
}
