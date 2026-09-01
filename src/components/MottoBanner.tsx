import React from 'react';
import { SITE_INFO } from '@/data/siteData';
import { Sparkles, Quote } from 'lucide-react';

interface MottoBannerProps {
  variant?: 'emerald' | 'light';
  className?: string;
}

export default function MottoBanner({ variant = 'emerald', className = '' }: MottoBannerProps) {
  if (variant === 'light') {
    return (
      <div className={`bg-white rounded-2xl p-6 sm:p-8 border-l-8 border-[#fea619] card-shadow relative overflow-hidden ${className}`}>
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#c3ecd7] text-[#003527] flex items-center justify-center shrink-0">
            <Quote className="w-6 h-6 text-[#064e3b]" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#855300] uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Society Motto</span>
            </div>
            <p className="font-heading font-bold text-2xl sm:text-3xl text-[#003527] tracking-wide">
              {SITE_INFO.mottoMalayalam}
            </p>
            <p className="text-base sm:text-lg font-medium text-[#404944] mt-1">
              {SITE_INFO.mottoEnglish}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-r from-[#003527] via-[#064e3b] to-[#0e3427] text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl border border-[#80bea6]/20 relative overflow-hidden ${className}`}>
      {/* Ambient background orbs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#fea619]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#c3ecd7]/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="relative z-10 max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 bg-[#fea619] text-[#191c1d] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Core Guiding Principle</span>
        </div>
        <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-wide leading-tight">
          {SITE_INFO.mottoMalayalam}
        </h2>
        <div className="w-24 h-1 bg-[#fea619] mx-auto rounded-full" />
        <p className="text-lg sm:text-2xl text-[#b0f0d6] font-medium tracking-wide">
          {SITE_INFO.mottoEnglish}
        </p>
        <p className="text-sm text-white/70">
          {SITE_INFO.subMotto}
        </p>
      </div>
    </div>
  );
}
