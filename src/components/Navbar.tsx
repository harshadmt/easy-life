'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, SITE_INFO } from '@/data/siteData';
import { Menu, X, ShieldCheck, ArrowRight, PhoneCall, MessageSquare, Mail } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-[#e1e3e4]'
          : 'bg-[#f8f9fa] border-b border-[#e7e8e9]'
      }`}
    >
      {/* Top micro-bar */}
      <div className="bg-[#003527] text-white py-1.5 px-4 text-xs font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-[#064e3b] text-[#b0f0d6] px-2 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3 h-3 text-[#fea619]" />
              {SITE_INFO.organization}
            </span>
            <span className="hidden sm:inline text-white/80 text-[12px]">
              {SITE_INFO.regNumber}
            </span>
          </div>
          <div className="flex items-center gap-4 text-[12px]">
            <a
              href={`mailto:${SITE_INFO.email}`}
              className="hover:text-[#fea619] transition-colors hidden md:flex items-center gap-1 text-white/90"
            >
              <Mail className="w-3 h-3 text-[#fea619]" />
              <span>{SITE_INFO.email}</span>
            </a>
            <span className="text-white/40 hidden md:inline">|</span>
            <Link
              href="/register"
              className="text-[#fea619] hover:underline font-bold flex items-center gap-1"
            >
              <MessageSquare className="w-3 h-3" />
              <span>Join WhatsApp Group</span>
            </Link>
            <span className="text-white/40 hidden sm:inline">|</span>
            <a
              href={`tel:${SITE_INFO.phone}`}
              className="hover:text-[#fea619] transition-colors hidden sm:flex items-center gap-1"
            >
              <PhoneCall className="w-3 h-3" />
              <span>Helpline: {SITE_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-13 sm:h-14 w-auto flex items-center justify-center rounded-xl bg-black px-2 py-1 shadow-md border border-[#064e3b] group-hover:scale-102 transition-transform duration-300">
              <Image
                src="/logo.jpeg"
                alt="Easy Life Manager Logo"
                width={160}
                height={52}
                className="h-full w-auto object-contain rounded"
                priority
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-heading font-bold text-lg lg:text-xl text-[#003527] tracking-tight group-hover:text-[#064e3b] transition-colors leading-tight">
                Easy Life Manager
              </span>
              <span className="text-[10px] font-semibold text-[#855300] tracking-wider uppercase">
                Sayana Charitable Society
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-[#003527] bg-[#c3ecd7]/50 font-bold border-b-2 border-[#855300]'
                      : 'text-[#404944] hover:text-[#003527] hover:bg-[#e7e8e9]/60'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/register"
              className="bg-[#c3ecd7]/60 hover:bg-[#c3ecd7] text-[#003527] border border-[#80bea6] font-bold text-xs px-3.5 py-2.5 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#064e3b]" />
              <span>WhatsApp Group</span>
            </Link>
            <Link
              href="/register"
              className="bg-[#fea619] hover:bg-[#855300] text-[#191c1d] hover:text-white font-bold text-sm px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-1.5 group"
            >
              <span>Join Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/register"
              className="bg-[#fea619] text-[#191c1d] font-bold text-xs px-3.5 py-2 rounded-lg shadow-sm"
            >
              Join Now
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              className="p-2.5 rounded-lg text-[#003527] hover:bg-[#e7e8e9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#003527]"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-[#e1e3e4] px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-1 gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-semibold ${
                    isActive
                      ? 'bg-[#064e3b] text-white'
                      : 'text-[#191c1d] hover:bg-[#f3f4f5]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#fea619]" />}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[#e7e8e9] flex flex-col gap-2">
            <Link
              href="/register"
              className="w-full bg-[#fea619] text-[#191c1d] font-bold py-3.5 px-4 rounded-xl text-center shadow-md flex items-center justify-center gap-2"
            >
              <span>Get Started & Register</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/register"
              className="w-full bg-[#064e3b] text-white font-medium py-3 px-4 rounded-xl text-center flex items-center justify-center gap-2 text-sm"
            >
              <MessageSquare className="w-4 h-4 text-[#fea619]" />
              <span>Join WhatsApp Group (Register)</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
