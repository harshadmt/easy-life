import React from 'react';
import Link from 'next/link';
import { ROADMAP_TIERS, SITE_INFO } from '@/data/siteData';
import {
  Package,
  Wallet,
  Coins,
  Laptop,
  Smartphone,
  Bike,
  Award,
  Car,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  TrendingUp,
  ShieldCheck,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  Smartphone: <Smartphone className="w-6 h-6" />,
  Laptop: <Laptop className="w-6 h-6" />,
  Bike: <Bike className="w-6 h-6" />,
  Award: <Award className="w-6 h-6" />,
  Car: <Car className="w-6 h-6" />,
};

export default function BenefitsPage() {
  return (
    <div className="flex flex-col gap-0">
      {/* Header Banner */}
      <section className="bg-[#003527] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-[#ffddb8] text-[#855300] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Growth & Rewards</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight max-w-3xl mx-auto">
            More Than an Opportunity — A Journey Towards Growth
          </h1>
          <p className="text-base sm:text-xl text-[#b0f0d6] max-w-2xl mx-auto mt-4">
            Explore the diverse range of foundational advantages and high-tier rewards designed to support your personal and professional evolution.
          </p>
        </div>
      </section>

      {/* Core Foundation Benefits Bento Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#003527]">
            Core Foundation Benefits
          </h2>
          <p className="text-base text-[#404944]">
            Every active member enjoys immediate and recurring structural advantages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Benefit 1 */}
          <div className="bg-white border border-[#e1e3e4] rounded-2xl p-6 card-shadow flex flex-col items-start hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#064e3b] text-[#b0f0d6] flex items-center justify-center mb-4">
              <Package className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-[#003527] mb-2">Product Benefits</h3>
            <p className="text-sm text-[#404944] leading-relaxed flex-grow">
              Access exclusive membership-level products tailored for your everyday living and personal productivity.
            </p>
            <div className="mt-4 pt-4 border-t border-[#e7e8e9] w-full text-xs font-semibold text-[#855300]">
              Up to 5x Guaranteed Value
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white border border-[#e1e3e4] rounded-2xl p-6 card-shadow flex flex-col items-start hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#064e3b] text-[#b0f0d6] flex items-center justify-center mb-4">
              <Wallet className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-[#003527] mb-2">Financial Assistance</h3>
            <p className="text-sm text-[#404944] leading-relaxed flex-grow">
              Receive targeted financial support at specific milestones of your journey to ensure personal and family stability.
            </p>
            <div className="mt-4 pt-4 border-t border-[#e7e8e9] w-full text-xs font-semibold text-[#855300]">
              Emergency Welfare Security
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white border border-[#e1e3e4] rounded-2xl p-6 card-shadow flex flex-col items-start hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#064e3b] text-[#b0f0d6] flex items-center justify-center mb-4">
              <Coins className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-[#003527] mb-2">Working Funds</h3>
            <p className="text-sm text-[#404944] leading-relaxed flex-grow">
              Unlock progression-based monthly working funds designed to scale alongside your community leadership and coordination.
            </p>
            <div className="mt-4 pt-4 border-t border-[#e7e8e9] w-full text-xs font-semibold text-[#855300]">
              Recurring Monthly Allocation
            </div>
          </div>

          {/* Benefit 4 */}
          <div className="bg-white border border-[#e1e3e4] rounded-2xl p-6 card-shadow flex flex-col items-start hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#064e3b] text-[#b0f0d6] flex items-center justify-center mb-4">
              <Laptop className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-[#003527] mb-2">Work From Home</h3>
            <p className="text-sm text-[#404944] leading-relaxed flex-grow">
              Engage in flexible online coordination, digital tasks, and member support from the comfort of your own home.
            </p>
            <div className="mt-4 pt-4 border-t border-[#e7e8e9] w-full text-xs font-semibold text-[#855300]">
              Flexible Schedule & Support
            </div>
          </div>
        </div>
      </section>

      {/* Progression Roadmap: 5 High-Tier Milestones */}
      <section className="w-full bg-[#f3f4f5] py-16 sm:py-24 border-y border-[#e1e3e4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 bg-[#c3ecd7] text-[#003527] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Milestone Achievement Plan</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#003527]">
              The Progression Roadmap: High-Tier Rewards
            </h2>
            <p className="text-base text-[#404944]">
              Structured stages that reward genuine teamwork, leadership, and community expansion across 5 distinguished tiers.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {ROADMAP_TIERS.map((tier) => (
              <div
                key={tier.step}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e1e3e4] card-shadow hover:border-[#fea619] transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group"
              >
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#003527] to-[#064e3b] text-[#fea619] flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                    {ICON_MAP[tier.iconName] || <Award className="w-7 h-7" />}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider bg-[#ffddb8] text-[#855300] px-2.5 py-0.5 rounded-full">
                        {tier.level}
                      </span>
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#003527]">
                        {tier.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base font-bold text-[#855300]">
                      Reward: {tier.reward}
                    </p>
                    <p className="text-xs sm:text-sm text-[#404944] max-w-xl">
                      {tier.description}
                    </p>
                  </div>
                </div>

                <div className="sm:text-right shrink-0 w-full sm:w-auto pt-4 sm:pt-0 border-t sm:border-t-0 border-[#e7e8e9]">
                  <span className="text-xs text-[#707974] block">Requirement</span>
                  <span className="text-xs font-semibold text-[#003527] block max-w-xs sm:max-w-[200px]">
                    {tier.qualifications}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/register?plan=1000_membership"
              className="inline-flex items-center gap-2 bg-[#fea619] hover:bg-[#855300] text-[#191c1d] hover:text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg transition-all"
            >
              <span>Unlock the Progression Roadmap</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
