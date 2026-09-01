'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function NavigationProgress() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // When path or query params change, start minimal top bar indicator
    setVisible(true);
    setProgress(30);

    const timer1 = setTimeout(() => {
      setProgress(70);
    }, 60);

    const timer2 = setTimeout(() => {
      setProgress(100);
      const finishTimer = setTimeout(() => {
        setVisible(false);
        const resetTimer = setTimeout(() => {
          setProgress(0);
        }, 150);
        return () => clearTimeout(resetTimer);
      }, 200);
      return () => clearTimeout(finishTimer);
    }, 180);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [pathname, searchParams]);

  if (!visible && progress === 0) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[9999] h-[2.5px] pointer-events-none overflow-hidden"
      style={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 200ms ease-out',
      }}
    >
      <div
        className="h-full bg-gradient-to-r from-[#003527] via-[#fea619] to-[#80bea6] transition-all duration-200 ease-out relative"
        style={{
          width: `${progress}%`,
          boxShadow: '0 0 8px rgba(254, 166, 25, 0.9), 0 0 3px rgba(0, 53, 39, 0.6)',
        }}
      >
        <div className="absolute right-0 top-0 bottom-0 w-6 bg-white/70 blur-[1px]" />
      </div>
    </div>
  );
}
