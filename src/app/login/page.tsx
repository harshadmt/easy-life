'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_INFO } from '@/data/siteData';
import { Lock, Phone, ArrowRight, ShieldCheck, CheckCircle2, UserCheck, MessageSquare } from 'lucide-react';

export default function LoginPage() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState<'phone' | 'otp' | 'success'>('phone');
  const [loading, setLoading] = useState(false);

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep('otp');
    }, 600);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep('success');
    }, 700);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-gradient-to-b from-[#c3ecd7]/30 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center space-y-3">
        <div className="w-16 h-16 rounded-2xl bg-white p-2 shadow-md border border-[#e1e3e4] mx-auto flex items-center justify-center">
          <Image
            src="/logo.jpeg"
            alt="Easy Life Manager"
            width={52}
            height={52}
            className="object-contain"
          />
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#003527]">
          Member & Partner Portal
        </h2>
        <p className="text-xs sm:text-sm text-[#707974]">
          {SITE_INFO.organization} • Easy Life Manager
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4 sm:px-0">
        <div className="bg-white py-8 px-6 sm:px-10 rounded-3xl border border-[#e1e3e4] card-shadow-hover space-y-6">
          {step === 'phone' && (
            <form onSubmit={handleSendOtp} className="space-y-5 animate-fade-in">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#191c1d] block">
                  Registered Mobile Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#707974]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    required
                    placeholder="+91 89430 43143"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-[#f8f9fa] border border-[#e1e3e4] rounded-xl text-sm text-[#191c1d] focus:outline-none focus:ring-2 focus:ring-[#003527] focus:bg-white transition-all"
                  />
                </div>
                <p className="text-[11px] text-[#707974]">
                  Enter the 10-digit mobile number used during registration.
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#fea619] hover:bg-[#855300] text-[#191c1d] hover:text-white font-bold py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Get Login OTP</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          )}

          {step === 'otp' && (
            <form onSubmit={handleVerifyOtp} className="space-y-5 animate-fade-in">
              <div className="text-center space-y-1 pb-2">
                <span className="text-xs text-[#003527] font-bold">
                  OTP sent to {mobileNumber}
                </span>
                <p className="text-[11px] text-[#707974]">
                  Enter the 4-digit verification code below.
                </p>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#191c1d] block text-center">
                  Verification Code (OTP)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#707974]">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    maxLength={6}
                    placeholder="• • • •"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-[#f8f9fa] border border-[#e1e3e4] rounded-xl text-center text-lg tracking-widest font-mono text-[#191c1d] focus:outline-none focus:ring-2 focus:ring-[#003527] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#003527] hover:bg-[#064e3b] text-white font-bold py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Verify & Access Dashboard</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setStep('phone')}
                  className="text-xs text-[#855300] hover:underline"
                >
                  Change Mobile Number
                </button>
              </div>
            </form>
          )}

          {step === 'success' && (
            <div className="text-center space-y-4 py-4 animate-fade-in">
              <div className="w-14 h-14 rounded-full bg-[#c3ecd7] text-[#003527] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#003527]">
                Authenticated Successfully
              </h3>
              <p className="text-xs text-[#404944] leading-relaxed">
                Welcome back to your Easy Life Manager Member portal.
              </p>
              <Link
                href="/products"
                className="block w-full bg-[#003527] text-white font-bold py-3 px-4 rounded-xl text-sm hover:bg-[#064e3b] transition-colors"
              >
                Go to Member Products
              </Link>
            </div>
          )}

          <div className="pt-4 border-t border-[#e7e8e9] text-center space-y-3">
            <p className="text-xs text-[#707974]">
              Don&apos;t have an account yet?{' '}
              <Link href="/register" className="font-bold text-[#855300] hover:underline">
                Register here
              </Link>
            </p>
            <div className="flex items-center justify-center gap-2 text-[11px] text-[#707974]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#003527]" />
              <span>Registered Society Onboarding Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
