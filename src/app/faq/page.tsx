'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FAQ_ITEMS, SITE_INFO } from '@/data/siteData';
import {
  HelpCircle,
  ChevronDown,
  Search,
  MessageSquare,
  PhoneCall,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

const CATEGORIES = ['All', 'General', 'Plans', 'Deliveries', 'Work From Home', 'Registration'];

export default function FaqPage() {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory =
      activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col gap-0">
      {/* Header Banner */}
      <section className="bg-[#003527] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-[#ffddb8] text-[#855300] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Helpdesk & Knowledge Base</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight max-w-3xl mx-auto">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-xl text-[#b0f0d6] max-w-2xl mx-auto mt-4">
            Find clear answers to common questions about Easy Life Manager, our membership tiers, delivery procedures, and community support.
          </p>
        </div>
      </section>

      {/* Main FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 w-full">
        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex overflow-x-auto pb-2 sm:pb-0 gap-2 w-full sm:w-auto scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#003527] text-white shadow-sm'
                    : 'bg-[#f3f4f5] text-[#404944] hover:bg-[#e7e8e9]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-[#707974] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#e1e3e4] rounded-xl text-sm text-[#191c1d] placeholder-[#707974] focus:outline-none focus:ring-2 focus:ring-[#003527] shadow-sm"
            />
          </div>
        </div>

        {/* Accordion List */}
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-[#e1e3e4] space-y-2">
            <p className="text-[#404944] font-medium">No matching questions found.</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="text-xs font-bold text-[#855300] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className={`bg-white border rounded-2xl transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-[#003527] shadow-md ring-1 ring-[#003527]/10'
                      : 'border-[#e1e3e4] card-shadow hover:border-[#80bea6]'
                  }`}
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-3 pr-4">
                      <span className="text-xs font-bold bg-[#f3f4f5] text-[#855300] px-2.5 py-1 rounded-lg shrink-0">
                        {faq.category}
                      </span>
                      <span className="font-heading font-bold text-base sm:text-lg text-[#003527]">
                        {faq.question}
                      </span>
                    </div>
                    <div
                      className={`w-8 h-8 rounded-full bg-[#f8f9fa] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-[#c3ecd7] text-[#003527]' : 'text-[#707974]'
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#404944] leading-relaxed border-t border-[#f1f3f4] animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Still Have Questions CTA */}
        <div className="mt-16 bg-[#064e3b] text-white rounded-3xl p-8 sm:p-10 card-shadow flex flex-col md:flex-row items-center justify-between gap-6 border border-[#80bea6]/30">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-heading font-bold text-2xl text-white">
              Still have questions?
            </h3>
            <p className="text-sm text-[#b0f0d6] max-w-md">
              Our dedicated support team is available via direct phone or WhatsApp to help you choose the best plan.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={SITE_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#fea619] hover:bg-[#855300] text-[#191c1d] hover:text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-6 py-3.5 rounded-xl border border-white/30 transition-all flex items-center gap-2"
            >
              <span>Contact Page</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
