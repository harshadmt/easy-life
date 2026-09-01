'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setDisplayChildren(children);
      setIsTransitioning(false);
    }, 120);

    return () => clearTimeout(timer);
  }, [pathname, children]);

  return (
    <div
      className={`w-full transition-all duration-300 ease-out ${
        isTransitioning
          ? 'opacity-85 translate-y-1.5'
          : 'opacity-100 translate-y-0'
      }`}
    >
      {displayChildren}
    </div>
  );
}
