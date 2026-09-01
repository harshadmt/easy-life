'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MEMBERSHIP_PLANS, SITE_INFO } from '@/data/siteData';
import {
  CheckCircle2,
  XCircle,
  Sparkles,
  Truck,
  Diamond,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  Package,
  Layers,
  HelpCircle,
} from 'lucide-react';

export default function MembershipPage() {
  const [selectedPlan, setSelectedPlan] = useState<'all' | 'starter' | 'premium'>('all');

  return (
    <div className="flex flex-col gap-0">
      {/* Header Banner */}
      <section className="bg-[#003527] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-[#ffddb8] text-[#855300] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Accessible Pathways</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight max-w-3xl mx-auto">
            Choose the Perfect Plan for Your Growth
          </h1>
          <p className="text-base sm:text-xl text-[#b0f0d6] max-w-2xl mx-auto mt-4">
            Whether you want an immediate high-value product or full participation in our 5-tier community roadmap, we have a clear path for you.
          </p>
        </div>
      </section>

      {/* Main Plans Display */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Plan 1: Starter */}
          <div className="bg-white border border-[#e1e3e4] rounded-3xl p-8 sm:p-10 card-shadow flex flex-col justify-between hover:border-[#003527] transition-all duration-300 relative">
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#707974]">
                    Entry Level
                  </span>
                  <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#003527] mt-1">
                    ₹999 Starter Purchase
                  </h2>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#c3ecd7] text-[#003527] flex items-center justify-center font-bold">
                  <Package className="w-6 h-6" />
                </div>
              </div>

              <p className="text-sm text-[#404944] leading-relaxed">
                Start Today. Receive an essential lifestyle toolkit delivered right to your home.
              </p>

              <div className="p-4 bg-[#f8f9fa] rounded-2xl border border-[#e7e8e9] space-y-1">
                <span className="text-xs text-[#707974]">Delivered Product Value:</span>
                <span className="text-xl font-extrabold text-[#003527] block font-heading">
                  ₹1,000 Value
                </span>
                <span className="text-xs text-[#855300] font-semibold flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5" /> Doorstep Courier Delivery (2-3 days)
                </span>
              </div>

              <div className="space-y-3 pt-2">
                <p className="text-xs font-bold text-[#003527] uppercase tracking-wider">
                  What is Included:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-[#404944]">
                    <CheckCircle2 className="w-4 h-4 text-[#003527] shrink-0 mt-0.5" />
                    <span>Quality physical lifestyle toolkit (valued at ₹1,000)</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-[#404944]">
                    <CheckCircle2 className="w-4 h-4 text-[#003527] shrink-0 mt-0.5" />
                    <span>Safe & insured courier delivery to any Kerala address</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-[#404944]">
                    <CheckCircle2 className="w-4 h-4 text-[#003527] shrink-0 mt-0.5" />
                    <span>Access to member updates and event broadcasts</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-[#707974] line-through opacity-60">
                    <XCircle className="w-4 h-4 text-[#707974] shrink-0 mt-0.5" />
                    <span>High-tier milestone progression (Phones, Vehicles)</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-[#707974] line-through opacity-60">
                    <XCircle className="w-4 h-4 text-[#707974] shrink-0 mt-0.5" />
                    <span>Work-from-home tasks and working fund grants</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8">
              <Link
                href="/register?plan=999_purchase"
                className="w-full py-4 px-6 rounded-xl font-bold text-center block bg-white hover:bg-[#c3ecd7]/40 text-[#003527] border-2 border-[#003527] transition-all"
              >
                Start with ₹999
              </Link>
            </div>
          </div>

          {/* Plan 2: Premium (Recommended) */}
          <div className="bg-white border-2 border-[#fea619] rounded-3xl p-8 sm:p-10 card-shadow-hover flex flex-col justify-between transition-all duration-300 relative scale-[1.02] shadow-xl">
            {/* Recommended Pill */}
            <div className="absolute -top-4 right-8 bg-[#fea619] text-[#191c1d] text-xs font-extrabold px-4 py-1.5 rounded-full shadow-md uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Recommended Plan</span>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#855300]">
                    Full Membership
                  </span>
                  <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#003527] mt-1">
                    ₹1,000 Membership Plan
                  </h2>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#ffddb8] text-[#855300] flex items-center justify-center font-bold">
                  <Diamond className="w-6 h-6" />
                </div>
              </div>

              <p className="text-sm text-[#404944] leading-relaxed">
                Become a Member. Start Growing. Unlock 5x value, work from home, and milestone rewards.
              </p>

              <div className="p-4 bg-[#ffddb8]/30 rounded-2xl border border-[#fea619]/50 space-y-1">
                <span className="text-xs text-[#855300] font-semibold">Immediate Guaranteed Package Value:</span>
                <span className="text-xl font-extrabold text-[#855300] block font-heading">
                  ₹5,000 Value (5x Return)
                </span>
                <span className="text-xs text-[#003527] font-semibold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#fea619]" /> Includes Full Milestone Progression Rights
                </span>
              </div>

              <div className="space-y-3 pt-2">
                <p className="text-xs font-bold text-[#003527] uppercase tracking-wider">
                  Full Membership Inclusions:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-[#191c1d] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#fea619] shrink-0 mt-0.5" />
                    <span><strong>Premium Product package worth ₹5,000</strong> (5x Return)</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-[#191c1d] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#fea619] shrink-0 mt-0.5" />
                    <span><strong>Full progression eligibility</strong> across all 5 milestone stages</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-[#191c1d] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#fea619] shrink-0 mt-0.5" />
                    <span><strong>Work-from-home tasks</strong> and monthly working funds access</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-[#191c1d] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#fea619] shrink-0 mt-0.5" />
                    <span>Express doorstep courier delivery with tracking</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-[#191c1d] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#fea619] shrink-0 mt-0.5" />
                    <span>Access to exclusive community workshops & leadership forums</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8">
              <Link
                href="/register?plan=1000_membership"
                className="w-full py-4 px-6 rounded-xl font-bold text-center block bg-[#fea619] hover:bg-[#855300] text-[#191c1d] hover:text-white shadow-lg transition-all"
              >
                Become a Member (₹1,000)
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Highlights */}
      <section className="w-full bg-[#f3f4f5] py-16 sm:py-24 border-y border-[#e1e3e4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h3 className="font-heading font-bold text-3xl sm:text-4xl text-[#003527]">
                Why Choose the ₹1,000 Membership?
              </h3>
              <p className="text-base text-[#404944] leading-relaxed">
                Our structured grid of benefits ensures continuous value. The ₹1,000 tier unlocks our comprehensive empowerment system, designed specifically for long-term collective growth.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-white rounded-2xl border border-[#e1e3e4] card-shadow space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-[#ffddb8] text-[#855300] flex items-center justify-center">
                    <Diamond className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-bold text-base text-[#003527]">High Value</h4>
                  <p className="text-xs sm:text-sm text-[#404944]">
                    Get an exceptional physical product package worth 5x your entry amount.
                  </p>
                </div>

                <div className="p-5 bg-white rounded-2xl border border-[#e1e3e4] card-shadow space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-[#c3ecd7] text-[#003527] flex items-center justify-center">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-bold text-base text-[#003527]">Clear Path</h4>
                  <p className="text-xs sm:text-sm text-[#404944]">
                    Transparent stages and verifiable benchmarks for upward mobility.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl p-8 border border-[#e1e3e4] card-shadow space-y-6">
                <h4 className="font-heading font-bold text-xl text-[#003527] flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#fea619]" />
                  <span>Member Guarantees</span>
                </h4>
                <div className="space-y-4 text-sm text-[#404944]">
                  <div className="flex items-start gap-3 pb-3 border-b border-[#e7e8e9]">
                    <Truck className="w-5 h-5 text-[#003527] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#191c1d] block">Doorstep Delivery Guarantee</span>
                      <span>All products dispatched with insured tracking within 48 hours of verification.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 pb-3 border-b border-[#e7e8e9]">
                    <Sparkles className="w-5 h-5 text-[#003527] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#191c1d] block">Direct Society Mentorship</span>
                      <span>Access training webinars, local coordinator help, and digital materials.</span>
                    </div>
                  </div>
                </div>

                <Link
                  href="/register"
                  className="w-full bg-[#003527] hover:bg-[#064e3b] text-white font-bold py-3.5 px-4 rounded-xl text-center block transition-colors"
                >
                  Register in 2 Minutes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
