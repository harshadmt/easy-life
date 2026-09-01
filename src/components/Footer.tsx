import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_INFO, NAV_LINKS } from '@/data/siteData';
import { Phone, Mail, MapPin, MessageSquare, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#003527] text-white pt-16 pb-12 border-t-4 border-[#fea619]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-[#064e3b]">
          {/* Col 1: Brand & Motto */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-14 w-auto flex items-center justify-center rounded-xl bg-black px-2 py-1 shadow-md border border-[#064e3b]">
                <Image
                  src="/logo.jpeg"
                  alt="Easy Life Manager Logo"
                  width={180}
                  height={58}
                  className="h-full w-auto object-contain rounded"
                />
              </div>
            </div>
            <p className="text-sm text-[#b0f0d6] font-medium leading-relaxed">
              An initiative of <strong className="text-white">{SITE_INFO.organization}</strong> ({SITE_INFO.regNumber}) dedicated to personal growth, structured support, and economic empowerment.
            </p>
            <div className="p-3.5 bg-[#064e3b]/80 rounded-xl border border-[#80bea6]/20">
              <p className="text-[#fea619] font-bold text-base tracking-wide font-heading">
                {SITE_INFO.mottoMalayalam}
              </p>
              <p className="text-xs text-[#b0f0d6] mt-1">
                {SITE_INFO.mottoEnglish}
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-lg text-[#ffddb8] uppercase tracking-wider text-xs">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-[#fea619] transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-[#fea619] text-xs opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/register"
                  className="text-[#fea619] font-bold hover:underline flex items-center gap-1 mt-2"
                >
                  <span>→ Register Now</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Support */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-lg text-[#ffddb8] uppercase tracking-wider text-xs">
              Contact & Support
            </h3>
            <ul className="space-y-3 text-sm text-white/85">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#fea619] shrink-0 mt-1" />
                <div>
                  <span className="block text-xs text-white/60">Helpline</span>
                  <a href={`tel:${SITE_INFO.phone}`} className="font-semibold hover:text-[#fea619]">
                    {SITE_INFO.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageSquare className="w-4 h-4 text-[#fea619] shrink-0 mt-1" />
                <div>
                  <span className="block text-xs text-white/60">WhatsApp Support</span>
                  <a
                    href={SITE_INFO.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold hover:text-[#fea619]"
                  >
                    {SITE_INFO.whatsapp}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#fea619] shrink-0 mt-1" />
                <div>
                  <span className="block text-xs text-white/60">Email</span>
                  <a href={`mailto:${SITE_INFO.email}`} className="font-semibold hover:text-[#fea619]">
                    {SITE_INFO.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#fea619] shrink-0 mt-1" />
                <div>
                  <span className="block text-xs text-white/60">Headquarters</span>
                  <span className="text-xs leading-relaxed text-white/80">
                    {SITE_INFO.address}
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4: Charitable Trust Trustmark & Legal */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-lg text-[#ffddb8] uppercase tracking-wider text-xs">
              Trust & Legal
            </h3>
            <div className="p-4 bg-[#064e3b]/60 rounded-xl border border-[#80bea6]/20 space-y-2">
              <div className="flex items-center gap-2 text-[#b0f0d6] font-semibold text-sm">
                <ShieldCheck className="w-5 h-5 text-[#fea619]" />
                <span>Govt. Registered Society</span>
              </div>
              <p className="text-xs text-white/70">
                Operating with transparent community guidelines, verified product distribution, and member support charters.
              </p>
            </div>

            <div className="flex flex-col gap-1.5 text-xs text-white/70 pt-2">
              <Link href="/faq" className="hover:text-[#fea619] transition-colors">
                • Frequently Asked Questions (FAQ)
              </Link>
              <Link href="/contact" className="hover:text-[#fea619] transition-colors">
                • Grievance & Inquiries
              </Link>
              <Link href="/membership" className="hover:text-[#fea619] transition-colors">
                • Membership Terms & Benefits
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/65">
          <p>© {new Date().getFullYear()} Easy Life Manager by Sayana Charitable Society. All rights reserved.</p>
          <div className="flex items-center gap-1 text-[#b0f0d6]">
            <span>Empowering communities with</span>
            <Heart className="w-3.5 h-3.5 text-[#fea619] fill-[#fea619]" />
            <span>in Kerala, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
