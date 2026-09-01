'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_INFO, MEMBERSHIP_PLANS, ROADMAP_TIERS, PRODUCTS_LIST } from '@/data/siteData';
import MottoBanner from '@/components/MottoBanner';
import ScrollReveal from '@/components/ScrollReveal';
import {
  Package,
  HandCoins,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Users,
  Award,
  Truck,
  PhoneCall,
  ChevronRight,
  Check,
  Zap,
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-0 overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden hero-pattern border-b border-[#e1e3e4] py-12 md:py-20 lg:py-24">
        {/* Background glow orbs */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#c3ecd7]/30 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#fea619]/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-6">
              <ScrollReveal direction="down" delay={100}>
                {/* Society Badge */}
                <div className="inline-flex items-center gap-2 bg-[#ffddb8] text-[#855300] px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm border border-[#fea619]/40 hover:scale-105 transition-transform duration-300">
                  <ShieldCheck className="w-4 h-4 text-[#855300]" />
                  <span>{SITE_INFO.organization}</span>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={200}>
                {/* Main Headline */}
                <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#003527] leading-[1.15] tracking-tight">
                  A New Opportunity.{' '}
                  <span className="text-[#855300] underline decoration-[#fea619] decoration-wavy decoration-2">
                    A Better Future.
                  </span>{' '}
                  Build Your Life with Easy Life Manager.
                </h1>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={300}>
                {/* Subtitle */}
                <p className="text-base sm:text-lg text-[#404944] leading-relaxed max-w-2xl">
                  A structured, community-centered opportunity designed by the{' '}
                  <strong className="text-[#003527]">{SITE_INFO.organization}</strong> to help you
                  overcome challenges, access tangible high-value resources, and establish a stable
                  financial foundation for yourself and your loved ones.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={400} className="w-full">
                {/* Motto Banner Light */}
                <div className="w-full">
                  <MottoBanner variant="light" />
                </div>
              </ScrollReveal>

              {/* CTAs */}
              <ScrollReveal direction="up" delay={500}>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Link
                    href="/register"
                    className="bg-[#fea619] hover:bg-[#855300] text-[#191c1d] hover:text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group animate-pulse-glow"
                  >
                    <span>Join Now & Register</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/membership"
                    className="bg-white hover:bg-[#c3ecd7]/40 text-[#003527] border-2 border-[#003527] font-bold text-base px-7 py-4 rounded-xl transition-all duration-300 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Explore Plans</span>
                  </Link>

                  <a
                    href={`tel:${SITE_INFO.phone}`}
                    className="inline-flex lg:hidden items-center gap-2 px-5 py-4 rounded-xl bg-[#064e3b] text-white font-medium text-sm hover:bg-[#003527] transition-colors"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Call Us</span>
                  </a>
                </div>
              </ScrollReveal>

              {/* Trust Indicators */}
              <ScrollReveal direction="up" delay={600}>
                <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-semibold text-[#707974]">
                  <div className="flex items-center gap-1.5 text-[#003527]">
                    <CheckCircle2 className="w-4 h-4 text-[#fea619]" />
                    <span>Doorstep Courier Delivery</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#003527]">
                    <CheckCircle2 className="w-4 h-4 text-[#fea619]" />
                    <span>5x Product Value Return</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#003527]">
                    <CheckCircle2 className="w-4 h-4 text-[#fea619]" />
                    <span>Work-From-Home Support</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <ScrollReveal direction="left" delay={300}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] w-full group">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                    alt="Sayana Charitable Society Community Members collaborating"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003527] via-[#003527]/30 to-transparent" />

                  {/* Floating Achievement Card 1 with CSS Float animation */}
                  <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/95 backdrop-blur-md rounded-2xl border border-white shadow-lg text-[#191c1d] space-y-2 animate-float">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#c3ecd7] flex items-center justify-center text-[#003527]">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <span className="font-heading font-bold text-sm text-[#003527]">
                          Verified Initiative
                        </span>
                      </div>
                      <span className="text-xs bg-[#ffddb8] text-[#855300] font-bold px-2.5 py-0.5 rounded-full">
                        5-Tier Rewards
                      </span>
                    </div>
                    <p className="text-xs text-[#404944] leading-relaxed">
                      Designed to empower thousands of families with reliable income streams, high-utility products, and community solidarity.
                    </p>
                  </div>

                  {/* Top Badge */}
                  <div className="absolute top-5 left-5 bg-[#003527]/90 backdrop-blur-sm text-white px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-2 border border-white/20 animate-float-slow">
                    <Users className="w-3.5 h-3.5 text-[#fea619]" />
                    <span>Growing Kerala Community</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS & HIGHLIGHTS */}
      <section className="bg-[#003527] text-white py-12 border-b border-[#064e3b] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="space-y-1 hover:scale-105 transition-transform duration-300">
                <p className="font-heading font-extrabold text-3xl sm:text-4xl text-[#fea619]">10,000+</p>
                <p className="text-xs sm:text-sm text-[#b0f0d6] font-medium">Registered Participants</p>
              </div>
              <div className="space-y-1 hover:scale-105 transition-transform duration-300">
                <p className="font-heading font-extrabold text-3xl sm:text-4xl text-white">5x</p>
                <p className="text-xs sm:text-sm text-[#b0f0d6] font-medium">Product Value Benefit</p>
              </div>
              <div className="space-y-1 hover:scale-105 transition-transform duration-300">
                <p className="font-heading font-extrabold text-3xl sm:text-4xl text-[#fea619]">14</p>
                <p className="text-xs sm:text-sm text-[#b0f0d6] font-medium">Districts Supported</p>
              </div>
              <div className="space-y-1 hover:scale-105 transition-transform duration-300">
                <p className="font-heading font-extrabold text-3xl sm:text-4xl text-white">100%</p>
                <p className="text-xs sm:text-sm text-[#b0f0d6] font-medium">Doorstep Courier Delivery</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. THREE CORE PILLARS */}
      <section className="w-full bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#855300] bg-[#ffddb8] px-3.5 py-1 rounded-full">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Comprehensive Ecosystem</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#003527]">
              Your Journey Towards Growth Starts Here
            </h2>
            <p className="text-base sm:text-lg text-[#404944]">
              We provide the tools, support, and community network necessary to help you overcome
              financial challenges and achieve sustainable independence.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <ScrollReveal direction="up" delay={100}>
              <div className="bg-[#f8f9fa] border border-[#e1e3e4] rounded-2xl p-8 card-shadow-hover flex flex-col group hover:border-[#80bea6] shimmer-card h-full">
                <div className="w-14 h-14 rounded-2xl bg-[#c3ecd7] text-[#003527] flex items-center justify-center mb-6 group-hover:bg-[#003527] group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Package className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-[#003527] mb-3">
                  Valuable Products
                </h3>
                <p className="text-sm text-[#404944] leading-relaxed flex-grow">
                  Access a curated range of high-quality products offering genuine value and practical utility for your everyday life, wellness, and work.
                </p>
                <Link
                  href="/products"
                  className="text-[#003527] font-bold text-sm flex items-center gap-2 hover:text-[#855300] transition-colors mt-6 pt-4 border-t border-[#e7e8e9] group-hover:translate-x-1"
                >
                  <span>Explore Products</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>

            {/* Pillar 2 */}
            <ScrollReveal direction="up" delay={200}>
              <div className="bg-[#f8f9fa] border-2 border-[#fea619]/40 rounded-2xl p-8 card-shadow-hover flex flex-col relative overflow-hidden group hover:border-[#fea619] shimmer-card h-full">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#fea619]/10 rounded-bl-full pointer-events-none" />
                <div className="w-14 h-14 rounded-2xl bg-[#ffddb8] text-[#855300] flex items-center justify-center mb-6 group-hover:bg-[#fea619] group-hover:text-[#191c1d] transition-colors duration-300 shadow-sm">
                  <HandCoins className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-[#003527] mb-3">
                  Financial Assistance
                </h3>
                <p className="text-sm text-[#404944] leading-relaxed flex-grow">
                  Structured support programs and working funds designed to provide stability during challenging times, helping you build a stronger financial foundation.
                </p>
                <Link
                  href="/benefits"
                  className="text-[#003527] font-bold text-sm flex items-center gap-2 hover:text-[#855300] transition-colors mt-6 pt-4 border-t border-[#e7e8e9] group-hover:translate-x-1"
                >
                  <span>Learn About Benefits</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>

            {/* Pillar 3 */}
            <ScrollReveal direction="up" delay={300}>
              <div className="bg-[#f8f9fa] border border-[#e1e3e4] rounded-2xl p-8 card-shadow-hover flex flex-col group hover:border-[#80bea6] shimmer-card h-full">
                <div className="w-14 h-14 rounded-2xl bg-[#c3ecd7] text-[#003527] flex items-center justify-center mb-6 group-hover:bg-[#003527] group-hover:text-white transition-colors duration-300 shadow-sm">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-[#003527] mb-3">
                  Business & WFH
                </h3>
                <p className="text-sm text-[#404944] leading-relaxed flex-grow">
                  Join a thriving statewide network. Develop valuable skills, create reliable supplemental income, and achieve independence within our supportive ecosystem.
                </p>
                <Link
                  href="/membership"
                  className="text-[#003527] font-bold text-sm flex items-center gap-2 hover:text-[#855300] transition-colors mt-6 pt-4 border-t border-[#e7e8e9] group-hover:translate-x-1"
                >
                  <span>View Opportunities</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. MEMBERSHIP TIERS SPOTLIGHT */}
      <section className="w-full bg-[#f3f4f5] py-16 sm:py-24 border-y border-[#e1e3e4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#003527]">
              Simple, Accessible Entry Options
            </h2>
            <p className="text-base sm:text-lg text-[#404944]">
              Choose the pathway that best fits your goals. Start small or unlock the full power of community membership.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
            {MEMBERSHIP_PLANS.map((plan, idx) => (
              <ScrollReveal key={plan.id} direction="up" delay={idx * 150}>
                <div
                  className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative shimmer-card h-full ${
                    plan.isPopular
                      ? 'bg-white border-2 border-[#fea619] shadow-2xl scale-[1.02] hover:scale-[1.03]'
                      : 'bg-white border border-[#e1e3e4] card-shadow hover:scale-[1.01]'
                  }`}
                >
                  {plan.isPopular && (
                    <div className="absolute -top-4 right-8 bg-[#fea619] text-[#191c1d] text-xs font-extrabold px-4 py-1.5 rounded-full shadow-md uppercase tracking-wider flex items-center gap-1 animate-pulse">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Recommended Choice</span>
                    </div>
                  )}

                  <div className="space-y-6">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#707974]">
                        {plan.tagline}
                      </span>
                      <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#003527] mt-1">
                        {plan.name}
                      </h3>
                    </div>

                    <div className="p-4 bg-[#f8f9fa] rounded-2xl border border-[#e7e8e9]">
                      <span className="text-xs text-[#707974] block">Guaranteed Return</span>
                      <span className="text-lg font-bold text-[#855300]">
                        {plan.productValue}
                      </span>
                    </div>

                    <div className="space-y-3 pt-2">
                      <p className="text-xs font-bold text-[#003527] uppercase tracking-wider">
                        Included Advantages:
                      </p>
                      <ul className="space-y-2.5">
                        {plan.benefits.map((benefit, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-3 text-sm text-[#404944]">
                            <CheckCircle2 className="w-4 h-4 text-[#003527] shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8">
                    <Link
                      href={plan.ctaLink}
                      className={`w-full py-4 px-6 rounded-xl font-bold text-center block transition-all shadow-sm ${
                        plan.isPopular
                          ? 'bg-[#fea619] hover:bg-[#855300] text-[#191c1d] hover:text-white'
                          : 'bg-[#003527] hover:bg-[#064e3b] text-white'
                      }`}
                    >
                      {plan.ctaText}
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/membership"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#003527] hover:text-[#855300] hover:underline"
            >
              <span>View full feature comparison table</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4.5 AUTHENTIC PRODUCTS SPOTLIGHT */}
      <section className="w-full bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#855300] bg-[#ffddb8] px-3.5 py-1 rounded-full">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Verified High-Utility Products</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#003527]">
                Authentic Home Essentials & Packages
              </h2>
              <p className="text-sm sm:text-base text-[#404944] max-w-2xl">
                From the 21-item AWPL Onam Kit to pure Idukki spices, rice bran oils, and AYUSH-certified wellness elixirs delivered straight to your door.
              </p>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-[#003527] hover:text-[#855300] font-bold text-sm bg-[#f3f4f5] hover:bg-[#e7e8e9] px-5 py-3 rounded-xl transition-colors shrink-0"
            >
              <span>View Full Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS_LIST.slice(0, 4).map((product, pIdx) => (
              <ScrollReveal key={product.id} direction="up" delay={pIdx * 100}>
                <div
                  className="bg-[#f8f9fa] border border-[#e1e3e4] rounded-2xl overflow-hidden hover:border-[#fea619] transition-all duration-300 card-shadow-hover flex flex-col justify-between group h-full shimmer-card"
                >
                  <div>
                    <div className="h-60 sm:h-64 w-full bg-white relative overflow-hidden flex items-center justify-center p-3 border-b border-[#e7e8e9]">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain group-hover:scale-108 transition-transform duration-500"
                      />
                      <div className="absolute top-2.5 right-2.5 bg-[#003527] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                        {product.badge}
                      </div>
                    </div>

                    <div className="p-5 space-y-2">
                      <span className="text-[10px] font-bold text-[#855300] uppercase tracking-wider block">
                        {product.category}
                      </span>
                      <h3 className="font-heading font-bold text-base text-[#003527] line-clamp-1 group-hover:text-[#855300] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-xs text-[#404944] line-clamp-2">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <div className="p-2.5 bg-white rounded-xl border border-[#e7e8e9] flex items-center justify-between text-xs mb-3">
                      <span className="text-[#707974]">Value/DP:</span>
                      <span className="font-bold text-[#003527]">{product.dp || product.price}</span>
                    </div>

                    <Link
                      href={`/products`}
                      className="w-full bg-[#003527] hover:bg-[#064e3b] text-white text-xs font-bold py-2.5 px-3 rounded-lg text-center block transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ROADMAP TEASER */}
      <section className="w-full bg-[#f8f9fa] py-16 sm:py-24 border-t border-[#e1e3e4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#003527] bg-[#c3ecd7] px-3.5 py-1 rounded-full">
              <Award className="w-3.5 h-3.5 text-[#003527]" />
              <span>5-Stage Progression</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#003527]">
              High-Tier Progression Roadmap
            </h2>
            <p className="text-base sm:text-lg text-[#404944]">
              As a member of Easy Life Manager, your dedication and team building unlock substantial milestones.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {ROADMAP_TIERS.map((tier, tIdx) => (
              <ScrollReveal key={tier.step} direction="up" delay={tIdx * 80}>
                <div
                  className="bg-[#f8f9fa] border border-[#e1e3e4] rounded-2xl p-6 flex flex-col justify-between hover:border-[#fea619] transition-all duration-300 card-shadow-hover group h-full"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-[#003527] text-[#fea619] flex items-center justify-center font-bold text-sm group-hover:scale-110 transition-transform">
                      {tier.step}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#855300] uppercase tracking-wider">
                        {tier.level}
                      </span>
                      <h4 className="font-heading font-bold text-base text-[#003527] mt-0.5">
                        {tier.title}
                      </h4>
                    </div>
                    <div className="p-2.5 bg-[#ffddb8]/40 rounded-lg text-xs font-bold text-[#855300]">
                      {tier.reward}
                    </div>
                    <p className="text-xs text-[#404944] leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#e7e8e9] text-[11px] font-medium text-[#707974]">
                    {tier.qualifications}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* 10-Member Team Malayalam Callout */}
          <ScrollReveal direction="up" delay={200} className="mt-12">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e1e3e4] card-shadow flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#003527] text-[#fea619] flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#855300]">
                    ഗ്രൂപ്പ് വളർച്ച • 10-Member Team Pathway
                  </span>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#003527]">
                    ഗ്രൂപ്പ് അടിസ്ഥാനത്തിലുള്ള വളർച്ച
                  </h3>
                  <p className="text-xs sm:text-sm text-[#404944] leading-relaxed">
                    10 പേർ അടങ്ങുന്ന ഗ്രൂപ്പുകളുടെ അടിസ്ഥാനത്തിൽ അംഗങ്ങൾക്ക് Easy Life Manager Programme-ലേക്ക് എത്തിച്ചേരാനുള്ള അവസരം ലഭിക്കുന്നു. ഓരോ ഘട്ടത്തിലും പുതിയ നേട്ടങ്ങളിലേക്കും ആനുകൂല്യങ്ങളിലേക്കും മുന്നേറാം.
                  </p>
                </div>
              </div>

              <Link
                href="/benefits"
                className="inline-flex items-center gap-2 bg-[#003527] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl hover:bg-[#064e3b] transition-colors shrink-0 whitespace-nowrap shadow-sm"
              >
                <span>Learn Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="text-center mt-10">
            <Link
              href="/benefits"
              className="inline-flex items-center gap-2 bg-[#fea619] hover:bg-[#855300] text-[#191c1d] hover:text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-md transition-all"
            >
              <span>Explore All Benefits & Rewards</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION SECTION */}
      <section className="w-full bg-[#003527] py-16 sm:py-20 text-white relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#fea619]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal direction="up" className="max-w-4xl mx-auto text-center space-y-6">
            <span className="inline-block bg-[#fea619] text-[#191c1d] font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full">
              Registration Open
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              Start Today. Grow Together. Secure Your Future.
            </h2>
            <p className="text-base sm:text-xl text-[#b0f0d6] max-w-2xl mx-auto">
              Join thousands of individuals across Kerala taking positive steps towards financial stability and collective success.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                href="/register"
                className="bg-[#fea619] hover:bg-[#855300] text-[#191c1d] hover:text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg transition-all hover:scale-105 active:scale-95"
              >
                Join Now Online
              </Link>
              <Link
                href="/register"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-[#003527] text-white font-bold text-base px-8 py-4 rounded-xl transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                <span>Join WhatsApp Group</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
