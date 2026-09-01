'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SITE_INFO } from '@/data/siteData';
import { MessageSquare, X, Users, MessageCircle, Sparkles } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 font-sans">
      {/* Expanded Quick Options Menu */}
      {isOpen && (
        <div className="bg-white rounded-3xl p-5 shadow-2xl border-2 border-[#fea619] w-80 animate-in slide-in-from-bottom-5 zoom-in-95 duration-250 text-left space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#e7e8e9]">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-[#003527] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                ELM
              </div>
              <div>
                <p className="font-heading font-bold text-sm text-[#003527]">
                  Easy Life Manager
                </p>
                <p className="text-[11px] text-[#064e3b] font-medium flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Online Support (+91 80750 28292)
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#707974] hover:text-[#191c1d] p-1 rounded-lg hover:bg-[#f3f4f5] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-[#404944] leading-relaxed">
            Welcome! How can we assist your community journey today?
          </p>

          <div className="space-y-2.5">
            {/* Action 1: Official WhatsApp Group (Routes to Register) */}
            <Link
              href="/register"
              onClick={() => setIsOpen(false)}
              className="w-full bg-[#fea619] hover:bg-[#855300] text-[#191c1d] hover:text-white font-bold text-xs p-3.5 rounded-xl transition-all duration-200 flex items-center gap-3 shadow-md group"
            >
              <Users className="w-4 h-4 text-[#191c1d] group-hover:text-white shrink-0" />
              <div className="text-left">
                <span className="block font-bold">Join Official WhatsApp Group</span>
                <span className="text-[10px] opacity-80 block">Register to unlock community group access</span>
              </div>
            </Link>

            {/* Action 2: Direct Chat with Support */}
            <a
              href={SITE_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#f3f4f5] hover:bg-[#c3ecd7]/60 text-[#003527] font-bold text-xs p-3.5 rounded-xl transition-all duration-200 flex items-center gap-3 border border-[#e1e3e4]"
            >
              <MessageCircle className="w-4 h-4 text-[#003527] shrink-0" />
              <div className="text-left">
                <span className="block font-bold">Direct WhatsApp Chat</span>
                <span className="text-[10px] text-[#707974] block">Ask questions or send screenshot</span>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open WhatsApp Helpdesk"
        className="bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 relative group animate-pulse-emerald flex items-center justify-center ring-4 ring-[#25D366]/30"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fea619] opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#fea619] border-2 border-white" />
        </span>
        <MessageSquare className="w-7 h-7 text-white" />
      </button>
    </div>
  );
}
