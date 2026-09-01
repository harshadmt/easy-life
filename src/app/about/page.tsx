import React from 'react';
import Link from 'next/link';
import { SITE_INFO } from '@/data/siteData';
import MottoBanner from '@/components/MottoBanner';
import {
  Eye,
  Target,
  ShieldCheck,
  Users,
  Award,
  Sparkles,
  ArrowRight,
  HeartHandshake,
  CheckCircle2,
  Building2,
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-0">
      {/* Header Banner */}
      <section className="bg-[#003527] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#ffddb8] text-[#855300] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>Registered Charitable Initiative</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              About Easy Life Manager & Sayana Charitable Society
            </h1>
            <p className="text-base sm:text-xl text-[#b0f0d6] leading-relaxed">
              Empowering communities with structured pathways to financial stability, professional development, and mutual growth.
            </p>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Vision Card */}
          <div className="bg-white border border-[#e1e3e4] rounded-3xl p-8 sm:p-10 card-shadow hover:border-[#064e3b] transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#c3ecd7] text-[#003527] flex items-center justify-center group-hover:bg-[#003527] group-hover:text-white transition-colors duration-300">
                <Eye className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#855300]">
                Guiding Horizon
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#003527]">
                Our Vision
              </h2>
              <p className="text-base sm:text-lg text-[#404944] leading-relaxed">
                To empower individuals and families to become stronger, more confident, and financially independent through supportive community ecosystems.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#e7e8e9] flex items-center gap-2 text-xs font-semibold text-[#003527]">
              <CheckCircle2 className="w-4 h-4 text-[#fea619]" />
              <span>Collective Financial Independence for All</span>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-white border border-[#e1e3e4] rounded-3xl p-8 sm:p-10 card-shadow hover:border-[#fea619] transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#ffddb8] text-[#855300] flex items-center justify-center group-hover:bg-[#fea619] group-hover:text-[#191c1d] transition-colors duration-300">
                <Target className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#855300]">
                Active Commitment
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#003527]">
                Our Mission
              </h2>
              <p className="text-base sm:text-lg text-[#404944] leading-relaxed">
                To create accessible opportunities through structured programmes, product distribution, work-from-home activities, financial assistance, and business development support.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#e7e8e9] flex items-center gap-2 text-xs font-semibold text-[#855300]">
              <CheckCircle2 className="w-4 h-4 text-[#fea619]" />
              <span>Structured Assistance & Tangible Value</span>
            </div>
          </div>
        </div>

        {/* Malayalam Motto Container */}
        <MottoBanner variant="emerald" className="my-8" />
      </section>

      {/* Organization Background Story */}
      <section className="bg-[#f3f4f5] py-16 sm:py-24 border-y border-[#e1e3e4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#ffddb8] text-[#855300] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>Our Heritage & Purpose</span>
              </div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#003527]">
                The Story Behind Sayana Charitable Society
              </h2>
              <p className="text-base text-[#404944] leading-relaxed">
                Founded under registered charter <strong>{SITE_INFO.regNumber}</strong>, the Sayana Charitable Society was established with the conviction that real social upliftment occurs when people are given tangible tools, practical guidance, and community support.
              </p>
              <p className="text-base text-[#404944] leading-relaxed">
                The <strong>Easy Life Manager</strong> platform represents our flagship initiative to merge cooperative social responsibility with structured economic pathways. By enabling accessible entry points and doorstep logistics, we ensure every participant receives tangible value from day one.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-white rounded-xl border border-[#e1e3e4]">
                  <span className="text-2xl font-extrabold text-[#003527] block font-heading">100%</span>
                  <span className="text-xs text-[#707974]">Transparent Operations</span>
                </div>
                <div className="p-4 bg-white rounded-xl border border-[#e1e3e4]">
                  <span className="text-2xl font-extrabold text-[#855300] block font-heading">5x</span>
                  <span className="text-xs text-[#707974]">Value Returned on Tier 2</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white card-shadow-hover">
                <img
                  src="/sayana_community_story.jpg"
                  alt="Sayana Charitable Society Community Empowerment Gathering"
                  className="w-full h-auto object-cover"
                />
                <div className="p-6 bg-[#003527] text-white">
                  <p className="font-heading font-bold text-lg text-[#fea619]">
                    "Together We Rise • സംഘടിക്കുക ശക്തരാകുക"
                  </p>
                  <p className="text-xs text-[#b0f0d6] mt-1 leading-relaxed">
                    Sayana Charitable Society empowerment coordinators reviewing verified health & household products, milestone progression, and member support charters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#003527]">
            Our Foundational Pillars
          </h2>
          <p className="text-base text-[#404944]">
            Every action and program under Easy Life Manager is rooted in four essential principles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Integrity & Trust',
              desc: 'Committed to ethical management, reliable courier fulfillments, and honest communication.',
              icon: ShieldCheck,
            },
            {
              title: 'Collective Growth',
              desc: 'We believe genuine prosperity is communal. As our members rise, society flourishes.',
              icon: Users,
            },
            {
              title: 'Practical Value',
              desc: 'Every kit, product, and training module delivers tangible everyday utility to your home.',
              icon: Award,
            },
            {
              title: 'Self Reliance',
              desc: 'Providing work-from-home tasks and working funds to empower sustainable living.',
              icon: Sparkles,
            },
          ].map((val, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#e1e3e4] rounded-2xl p-6 card-shadow space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-[#c3ecd7] text-[#003527] flex items-center justify-center">
                <val.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#003527]">{val.title}</h3>
              <p className="text-xs sm:text-sm text-[#404944] leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/register"
            className="inline-flex items-center gap-2 bg-[#fea619] hover:bg-[#855300] text-[#191c1d] hover:text-white font-bold text-base px-8 py-4 rounded-xl shadow-md transition-all"
          >
            <span>Join Our Community Today</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
