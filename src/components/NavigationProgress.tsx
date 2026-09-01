'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function NavigationProgress() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // When path or search parameters change, run a quick minimal progress animation
    setLoading(true);
    setProgress(25);

    const timer1 = setTimeout(() => {
      setProgress(75);
    }, 100);

    const timer2 = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setLoading(false);
        setProgress(0);
      }, 200);
    }, 250);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [pathname, searchParams]);

  if (!loading && progress === 0) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-[3px] pointer-events-none overflow-hidden"
      style={{ opacity: loading ? 1 : 0, transition: 'opacity 0.2s ease-out' }}
    >
      <div
        className="h-full bg-gradient-to-r from-[#003527] via-[#fea619] to-[#80bea6] transition-all duration-300 ease-out shadow-[0_0_8px_rgba(254,166,25,0.8)]"
        style={{
          width: `${progress}%`,
          boxShadow: '0 0 10px #fea619, 0 0 5px #003527',
        }}
      />
    </div>
  );
}
