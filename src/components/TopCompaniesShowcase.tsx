'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { TOP_DIRECT_SELLING_COMPANIES, DirectSellingCompany } from '@/data/siteData';
import {
  Award,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Building2,
  ExternalLink,
  ChevronRight,
  Info,
} from 'lucide-react';

/* Vector Brand Logos perfectly rendered in SVG */
function CompanyLogo({ type }: { type: DirectSellingCompany['logoType'] }) {
  switch (type) {
    case 'amway':
      return (
        <div className="flex flex-col items-center justify-center h-14 w-full">
          <div className="flex items-baseline font-black tracking-tight text-[#002f6c] text-2xl sm:text-3xl font-sans">
            <span>Amway</span>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-[#d9222a] via-[#d9222a] to-transparent rounded-full -mt-0.5" />
          <span className="text-[10px] font-black tracking-[0.25em] text-[#002f6c] uppercase mt-0.5">
            INDIA
          </span>
        </div>
      );

    case 'vestige':
      return (
        <div className="flex items-center justify-center gap-2 h-14 w-full">
          <div className="w-9 h-9 relative flex items-center justify-center">
            <svg viewBox="0 0 40 40" className="w-9 h-9 fill-none">
              <path
                d="M8 22L16 30L32 10"
                stroke="#16a34a"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 22L20 28L32 14"
                stroke="#0284c7"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="text-left font-sans">
            <div className="font-extrabold text-lg sm:text-xl tracking-wider text-[#1e293b] leading-tight">
              VESTIGE
            </div>
            <div className="text-[9px] font-bold tracking-[0.2em] text-[#64748b] uppercase">
              MARKETING
            </div>
          </div>
        </div>
      );

    case 'herbalife':
      return (
        <div className="flex items-center justify-center gap-2 h-14 w-full">
          <div className="w-10 h-10 rounded-full border-2 border-[#5cb85c] flex items-center justify-center p-1">
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#5cb85c]">
              <path d="M12 2C9 5 8 9 9 13C10 17 12 21 12 21C12 21 14 17 15 13C16 9 15 5 12 2Z" />
              <path d="M7 8C5 11 5 15 7 18C9 20 11 21 11 21C11 21 10 17 9 14C8 11 8 9 7 8Z" opacity="0.8" />
              <path d="M17 8C19 11 19 15 17 18C15 20 13 21 13 21C13 21 14 17 15 14C16 11 16 9 17 8Z" opacity="0.8" />
            </svg>
          </div>
          <div className="text-left font-sans leading-tight">
            <div className="font-extrabold text-sm sm:text-base tracking-tight text-[#222]">
              HERBALIFE
            </div>
            <div className="font-black text-xs sm:text-sm tracking-widest text-[#5cb85c]">
              NUTRITION
            </div>
          </div>
        </div>
      );

    case 'modicare':
      return (
        <div className="flex items-center justify-center gap-2 h-14 w-full font-sans">
          <span className="font-extrabold text-2xl sm:text-3xl tracking-tight text-[#334155]">
            Modicare
          </span>
          <div className="w-5 h-5 relative flex items-center justify-center">
            <svg viewBox="0 0 30 30" className="w-5 h-5">
              <polygon points="5,5 25,15 15,25" fill="#f97316" />
              <polygon points="12,2 28,10 18,22" fill="#0284c7" opacity="0.85" />
            </svg>
          </div>
        </div>
      );

    case 'milifestyle':
      return (
        <div className="flex items-center justify-center gap-2 h-14 w-full font-sans">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#ea580c] to-[#f97316] flex items-center justify-center text-white font-extrabold text-xl shadow-sm">
            mi
          </div>
          <div className="text-left leading-none">
            <span className="font-extrabold text-base sm:text-lg text-[#1e293b] tracking-tight block">
              Lifestyle
            </span>
            <span className="text-[9px] font-black text-[#64748b] tracking-widest uppercase block mt-0.5">
              MARKETING
            </span>
          </div>
        </div>
      );

    case 'forever':
      return (
        <div className="flex items-center justify-center gap-2 h-14 w-full">
          <div className="text-right font-serif">
            <span className="text-[9px] font-extrabold tracking-widest text-[#b45309] block uppercase">
              FOREVER
            </span>
            <span className="text-[11px] font-black tracking-wider text-[#78350f] block uppercase -mt-0.5">
              LIVING
            </span>
          </div>
          <div className="w-9 h-9 flex items-center justify-center">
            <svg viewBox="0 0 36 36" className="w-9 h-9 fill-[#d97706]">
              <path d="M18 4L22 14L32 16L24 23L27 32L18 26L9 32L12 23L4 16L14 14L18 4Z" opacity="0.9" />
            </svg>
          </div>
          <span className="text-[9px] font-bold tracking-widest text-[#b45309] uppercase self-center font-serif">
            PRODUCTS
          </span>
        </div>
      );

    case 'rcm':
      return (
        <div className="flex items-center justify-center gap-2.5 h-14 w-full font-sans">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0284c7] via-[#059669] to-[#ea580c] flex items-center justify-center p-1">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-[#0284c7]" />
            </div>
          </div>
          <span className="font-black text-2xl sm:text-3xl tracking-wider text-[#1e3a8a]">
            RCM
          </span>
        </div>
      );

    case 'imc':
      return (
        <div className="flex items-center justify-center gap-2 h-14 w-full font-sans">
          <div className="w-10 h-10 rounded-full bg-[#047857] text-white flex items-center justify-center font-black text-xs shadow-sm">
            IMC
          </div>
          <span className="font-black text-2xl sm:text-3xl tracking-wider text-[#047857]">
            IMC
          </span>
        </div>
      );

    case 'tupperware':
      return (
        <div className="flex flex-col items-center justify-center h-14 w-full font-sans">
          <span className="font-black text-xl sm:text-2xl tracking-tight text-[#0f172a]">
            Tupperware<span className="text-xs align-top font-bold">®</span>
          </span>
          <span className="text-[10px] font-semibold text-[#64748b] -mt-0.5">
            India
          </span>
        </div>
      );

    case 'oriflame':
      return (
        <div className="flex flex-col items-center justify-center h-14 w-full font-serif">
          <span className="font-bold text-lg sm:text-xl tracking-[0.25em] text-[#0f172a] uppercase">
            ORIFLAME
          </span>
          <div className="w-16 h-px bg-[#cbd5e1] my-0.5" />
          <span className="text-[8px] font-semibold tracking-[0.3em] text-[#64748b] uppercase">
            SWEDEN
          </span>
        </div>
      );

    default:
      return null;
  }
}

const CATEGORIES = [
  'All Leaders',
  'Health & Wellness',
  'FMCG & Groceries',
  'Ayurvedic Care',
  'Beauty & Lifestyle',
] as const;

export default function TopCompaniesShowcase({ className = '' }: { className?: string }) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Leaders');
  const [activeCompany, setActiveCompany] = useState<DirectSellingCompany | null>(null);

  const filteredCompanies =
    selectedCategory === 'All Leaders'
      ? TOP_DIRECT_SELLING_COMPANIES
      : TOP_DIRECT_SELLING_COMPANIES.filter((c) => c.category === selectedCategory);

  return (
    <section className={`w-full py-16 sm:py-24 bg-gradient-to-b from-[#ffffff] via-[#f8faf9] to-[#f0f4f2] relative overflow-hidden ${className}`}>
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#c3ecd7]/25 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#ffddb8] text-[#855300] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-sm">
            <Award className="w-4 h-4 text-[#855300]" />
            <span>Industry Benchmark & Authority</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#003527] tracking-tight">
            Top Direct Selling Companies in India
          </h2>

          <p className="text-base sm:text-lg text-[#404944] leading-relaxed">
            ഇന്ത്യയിലെ മുൻനിര ഡയറക്ട് സെല്ലിംഗ് & കമ്മ്യൂണിറ്റി കൊമേഴ്‌സ് മാതൃകകൾ. Inspiring ethical business models, high-quality FMCG distribution, and community empowerment.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-[#003527] text-white shadow-md scale-105'
                  : 'bg-white text-[#404944] border border-[#e1e3e4] hover:border-[#003527] hover:bg-[#f3f4f5]'
              }`}
            >
              {cat}
              {cat === 'All Leaders' && (
                <span className="ml-1.5 bg-[#fea619] text-[#191c1d] px-1.5 py-0.5 rounded-full text-[10px]">
                  10
                </span>
              )}
            </button>
          ))}
        </div>

        {/* 10 Companies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {filteredCompanies.map((company) => (
            <div
              key={company.id}
              onClick={() => setActiveCompany(company)}
              className="bg-white rounded-3xl border border-[#e1e3e4] hover:border-[#fea619] p-5 card-shadow-hover transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
            >
              {/* Rank Badge */}
              <div className="absolute top-3 left-3 bg-[#003527] text-[#fea619] font-heading font-extrabold text-xs px-2.5 py-1 rounded-lg shadow-sm flex items-center gap-1">
                <span>#{company.rank}</span>
              </div>

              {/* Verified Sector Tag */}
              <div className="text-right">
                <span className="text-[10px] font-bold text-[#855300] bg-[#ffddb8]/60 px-2 py-0.5 rounded-full">
                  {company.category}
                </span>
              </div>

              {/* Logo Area */}
              <div className="my-5 bg-[#fafbfc] border border-[#f1f5f9] rounded-2xl p-4 flex items-center justify-center min-h-[90px] group-hover:scale-105 transition-transform duration-300">
                <CompanyLogo type={company.logoType} />
              </div>

              {/* Text Information */}
              <div className="space-y-2 pt-2 border-t border-[#f1f5f9]">
                <h3 className="font-heading font-bold text-base text-[#003527] group-hover:text-[#855300] transition-colors flex items-center justify-between">
                  <span>{company.name}</span>
                  <ChevronRight className="w-4 h-4 text-[#707974] group-hover:translate-x-1 transition-transform" />
                </h3>

                <p className="text-xs font-semibold text-[#064e3b]">
                  {company.sector}
                </p>

                <p className="text-[11px] text-[#707974] leading-relaxed line-clamp-2">
                  {company.malayalamSector}
                </p>
              </div>

              {/* Quick View Prompt */}
              <div className="mt-3 pt-3 border-t border-[#f3f4f5] text-[11px] font-bold text-[#003527] flex items-center justify-between">
                <span>View Highlights</span>
                <span className="text-[#fea619] font-black">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Trust & Guidelines Callout */}
        <div className="bg-gradient-to-r from-[#003527] via-[#064e3b] to-[#003527] rounded-3xl p-6 sm:p-10 text-white shadow-2xl border-2 border-[#fea619] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#fea619]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 bg-[#ffddb8] text-[#855300] px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Govt. of India Direct Selling Framework</span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                Ethical Direct Selling & Community Distribution in India
              </h3>

              <p className="text-xs sm:text-sm text-[#b0f0d6] leading-relaxed">
                Direct Selling in India operates under the <strong>Consumer Protection (Direct Selling) Rules, 2021</strong> issued by the <em>Ministry of Consumer Affairs, Food & Public Distribution</em>. <strong>Sayana Charitable Society’s Easy Life Manager</strong> adheres to principles of genuine FMCG product value, transparent doorstep logistics, and mutual socio-economic upliftment.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch gap-3">
              <Link
                href="/register?plan=1000_membership"
                className="bg-[#fea619] hover:bg-[#855300] text-[#191c1d] hover:text-white font-bold py-3.5 px-6 rounded-xl text-center shadow-lg transition-all text-xs sm:text-sm flex items-center justify-center gap-2"
              >
                <span>Join Easy Life Manager</span>
                <Sparkles className="w-4 h-4" />
              </Link>
              <Link
                href="/products"
                className="bg-transparent hover:bg-white/10 text-white border border-[#80bea6]/40 font-bold py-3 px-6 rounded-xl text-center transition-colors text-xs flex items-center justify-center gap-2"
              >
                <span>Explore Verified Products</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL: COMPANY DETAILS QUICK VIEW */}
      {activeCompany && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActiveCompany(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 card-shadow border-2 border-[#fea619] space-y-6 relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#e7e8e9]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#003527] text-[#fea619] font-heading font-black text-lg flex items-center justify-center">
                  #{activeCompany.rank}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#003527]">
                    {activeCompany.name}
                  </h3>
                  <span className="text-xs font-bold text-[#855300]">
                    {activeCompany.category}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveCompany(null)}
                className="text-[#707974] hover:text-[#191c1d] p-1.5 rounded-lg hover:bg-[#f3f4f5] transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Logo Box */}
            <div className="bg-[#fafbfc] border border-[#e1e3e4] rounded-2xl p-6 flex items-center justify-center">
              <CompanyLogo type={activeCompany.logoType} />
            </div>

            {/* Content */}
            <div className="space-y-4 text-sm text-[#404944]">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#707974] block">
                  Core Sector & Focus Area:
                </span>
                <p className="font-bold text-[#003527] text-base mt-0.5">
                  {activeCompany.sector}
                </p>
                <p className="text-xs text-[#064e3b] font-medium">
                  {activeCompany.malayalamSector}
                </p>
              </div>

              <p className="text-xs sm:text-sm leading-relaxed">
                {activeCompany.description}
              </p>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#707974] block mb-2">
                  Key Product Pillars:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {activeCompany.highlights.map((h, idx) => (
                    <div
                      key={idx}
                      className="bg-[#f8f9fa] border border-[#e1e3e4] p-2.5 rounded-xl text-xs font-semibold text-[#003527] flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#fea619] shrink-0" />
                      <span className="truncate">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-[#e7e8e9] flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setActiveCompany(null)}
                className="px-5 py-2.5 rounded-xl border border-[#e1e3e4] text-xs font-bold text-[#404944] hover:bg-[#f3f4f5]"
              >
                Close
              </button>
              <Link
                href="/register?plan=1000_membership"
                onClick={() => setActiveCompany(null)}
                className="px-6 py-2.5 rounded-xl bg-[#003527] hover:bg-[#064e3b] text-white text-xs font-bold transition-colors"
              >
                Join Easy Life Manager
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
