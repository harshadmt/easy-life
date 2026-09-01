'use client';

import React, { useState } from 'react';
import { SITE_INFO } from '@/data/siteData';
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  PhoneCall,
  ExternalLink,
  Building,
  Copy,
  Check,
  ShieldCheck,
} from 'lucide-react';

export default function ContactPage() {
  const [inquiryData, setInquiryData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Question',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [copiedAcc, setCopiedAcc] = useState(false);
  const [copiedIfsc, setCopiedIfsc] = useState(false);
  const [copiedUpi, setCopiedUpi] = useState(false);

  const handleCopyAcc = () => {
    navigator.clipboard.writeText(SITE_INFO.bankDetails.accountNumber);
    setCopiedAcc(true);
    setTimeout(() => setCopiedAcc(false), 2500);
  };

  const handleCopyIfsc = () => {
    navigator.clipboard.writeText(SITE_INFO.bankDetails.ifscCode);
    setCopiedIfsc(true);
    setTimeout(() => setCopiedIfsc(false), 2500);
  };

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(SITE_INFO.bankDetails.upiId);
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2500);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const formattedMessage = `*New Website Inquiry - Easy Life Manager*\n` +
      `👤 *Name:* ${inquiryData.name}\n` +
      `📞 *Phone:* ${inquiryData.phone}\n` +
      `✉️ *Email:* ${inquiryData.email || 'N/A'}\n` +
      `📋 *Subject:* ${inquiryData.subject}\n` +
      `💬 *Message:* ${inquiryData.message}`;

    const waUrl = `https://api.whatsapp.com/send/?phone=918075028292&text=${encodeURIComponent(formattedMessage)}`;

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      if (typeof window !== 'undefined') {
        window.open(waUrl, '_blank');
      }
    }, 600);
  };

  return (
    <div className="flex flex-col gap-0">
      {/* Header Banner */}
      <section className="bg-[#003527] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-[#ffddb8] text-[#855300] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>Direct Support & Helpdesk</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight max-w-3xl mx-auto">
            Get in Touch with Our Team
          </h1>
          <p className="text-base sm:text-xl text-[#b0f0d6] max-w-2xl mx-auto mt-4">
            We are here to answer your questions, assist with your registration, and guide your community journey.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Details & Actions */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white border border-[#e1e3e4] rounded-3xl p-8 card-shadow space-y-6">
              <h2 className="font-heading font-bold text-2xl text-[#003527]">
                Contact Information
              </h2>
              <p className="text-sm text-[#404944] leading-relaxed">
                Reach out directly to our state coordination office or chat with our automated helpdesk.
              </p>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#c3ecd7] text-[#003527] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#707974] block">
                      Helpline Phone
                    </span>
                    <a
                      href={`tel:${SITE_INFO.phone}`}
                      className="font-heading font-bold text-lg text-[#003527] hover:text-[#855300] transition-colors"
                    >
                      {SITE_INFO.phone}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#ffddb8] text-[#855300] flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#707974] block">
                      WhatsApp Helpdesk
                    </span>
                    <a
                      href={SITE_INFO.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-heading font-bold text-lg text-[#003527] hover:text-[#855300] transition-colors"
                    >
                      {SITE_INFO.whatsapp}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#c3ecd7] text-[#003527] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#707974] block">
                      Email Inquiries
                    </span>
                    <a
                      href={`mailto:${SITE_INFO.email}`}
                      className="font-semibold text-sm text-[#003527] hover:text-[#855300] transition-colors"
                    >
                      {SITE_INFO.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#c3ecd7] text-[#003527] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#707974] block">
                      Registered Office
                    </span>
                    <p className="text-xs text-[#404944] leading-relaxed mt-0.5">
                      {SITE_INFO.address}
                    </p>
                  </div>
                </li>
              </ul>

              {/* Fast Action Buttons */}
              <div className="pt-4 border-t border-[#e7e8e9] grid grid-cols-2 gap-3">
                <a
                  href={`tel:${SITE_INFO.phone}`}
                  className="bg-[#003527] hover:bg-[#064e3b] text-white font-bold text-xs py-3.5 px-4 rounded-xl text-center flex items-center justify-center gap-2 transition-colors"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call Hotline</span>
                </a>
                <a
                  href={SITE_INFO.whatsappGroupLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#fea619] hover:bg-[#855300] text-[#191c1d] hover:text-white font-bold text-xs py-3.5 px-4 rounded-xl text-center flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Group</span>
                </a>
              </div>
            </div>

            {/* Official Society Bank Account Card */}
            <div className="bg-white border-2 border-[#fea619] rounded-3xl p-6 sm:p-8 card-shadow-hover space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#e7e8e9]">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#003527] text-[#fea619] flex items-center justify-center font-bold">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-[#003527]">
                      Official Bank Account
                    </h3>
                    <p className="text-[11px] text-[#707974]">
                      Direct Transfer & NEFT / IMPS Credentials
                    </p>
                  </div>
                </div>
                <span className="bg-[#c3ecd7] text-[#003527] px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase">
                  Verified
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-center py-1 border-b border-[#f3f4f5]">
                  <span className="text-[#707974]">Bank:</span>
                  <span className="font-bold text-[#003527] text-sm">{SITE_INFO.bankDetails.bank}</span>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-[#f3f4f5]">
                  <span className="text-[#707974]">Account Holder:</span>
                  <span className="font-bold text-[#191c1d]">{SITE_INFO.bankDetails.accountName}</span>
                </div>

                <div className="flex justify-between items-center bg-[#f8f9fa] p-3 rounded-xl border border-[#e1e3e4]">
                  <div>
                    <span className="text-[10px] text-[#707974] block uppercase">Account Number</span>
                    <span className="font-mono font-extrabold text-sm text-[#003527]">{SITE_INFO.bankDetails.accountNumber}</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyAcc}
                    className="text-xs bg-[#003527] hover:bg-[#064e3b] text-white px-3 py-1.5 rounded-lg flex items-center gap-1 transition-colors"
                  >
                    {copiedAcc ? <Check className="w-3.5 h-3.5 text-[#fea619]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedAcc ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div className="flex justify-between items-center bg-[#f8f9fa] p-3 rounded-xl border border-[#e1e3e4]">
                  <div>
                    <span className="text-[10px] text-[#707974] block uppercase">IFSC Code</span>
                    <span className="font-mono font-extrabold text-sm text-[#855300]">{SITE_INFO.bankDetails.ifscCode}</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyIfsc}
                    className="text-xs bg-[#003527] hover:bg-[#064e3b] text-white px-3 py-1.5 rounded-lg flex items-center gap-1 transition-colors"
                  >
                    {copiedIfsc ? <Check className="w-3.5 h-3.5 text-[#fea619]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedIfsc ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-[#f3f4f5]">
                  <span className="text-[#707974]">Branch:</span>
                  <span className="font-semibold text-[#191c1d]">{SITE_INFO.bankDetails.branch} (Code: {SITE_INFO.bankDetails.branchCode})</span>
                </div>

                <div className="flex justify-between items-center py-1">
                  <span className="text-[#707974]">UPI ID:</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-[#003527]">{SITE_INFO.bankDetails.upiId}</span>
                    <button
                      type="button"
                      onClick={handleCopyUpi}
                      className="text-xs text-[#855300] hover:underline flex items-center gap-0.5"
                    >
                      {copiedUpi ? <span>✓</span> : <span>Copy</span>}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Location Interactive Map Card */}
            <div className="bg-white border border-[#e1e3e4] rounded-3xl overflow-hidden card-shadow relative group">
              <div className="h-60 w-full relative">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80"
                  alt="Headquarters location in Ernakulam"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#003527]/20" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-2xl border border-[#e1e3e4] shadow-md flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Building2 className="w-5 h-5 text-[#003527]" />
                    <div>
                      <p className="font-heading font-bold text-xs text-[#003527]">
                        Sayana Charitable Society HQ
                      </p>
                      <p className="text-[11px] text-[#707974] flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#fea619]" /> Mon-Sat: 9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Message Form */}
          <div className="lg:col-span-7 bg-white border border-[#e1e3e4] rounded-3xl p-8 sm:p-10 card-shadow shadow-xl space-y-6">
            <div className="border-b border-[#e7e8e9] pb-4">
              <h2 className="font-heading font-bold text-2xl text-[#003527]">
                Send Us a Message
              </h2>
              <p className="text-sm text-[#404944] mt-1">
                Have a specific question about programs or bulk community registrations? Leave a message below.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-[#c3ecd7] text-[#003527] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-[#064e3b]" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-[#003527]">
                  Message Sent Successfully
                </h3>
                <p className="text-sm text-[#404944] max-w-md mx-auto">
                  Thank you, <strong>{inquiryData.name}</strong>. Our team has received your note and will get in touch shortly via phone or email.
                </p>
                <div className="pt-2 flex flex-wrap justify-center gap-3">
                  <a
                    href={`https://api.whatsapp.com/send/?phone=918075028292&text=${encodeURIComponent(`*New Website Inquiry - Easy Life Manager*\n👤 *Name:* ${inquiryData.name}\n📞 *Phone:* ${inquiryData.phone}\n✉️ *Email:* ${inquiryData.email || 'N/A'}\n📋 *Subject:* ${inquiryData.subject}\n💬 *Message:* ${inquiryData.message}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#fea619] hover:bg-[#855300] text-[#191c1d] hover:text-white font-bold text-xs py-3 px-6 rounded-xl transition-colors inline-flex items-center gap-2 shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Open WhatsApp Chat (+91 80750 28292)</span>
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setInquiryData({ name: '', phone: '', email: '', subject: 'General Question', message: '' });
                    }}
                    className="text-xs font-bold text-[#003527] bg-[#f3f4f5] hover:bg-[#e7e8e9] py-3 px-5 rounded-xl transition-colors"
                  >
                    Send another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#191c1d] block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Menon"
                      value={inquiryData.name}
                      onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#f8f9fa] border border-[#e1e3e4] text-sm text-[#191c1d] focus:outline-none focus:ring-2 focus:ring-[#003527] focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#191c1d] block">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 89430 00000"
                      value={inquiryData.phone}
                      onChange={(e) => setInquiryData({ ...inquiryData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#f8f9fa] border border-[#e1e3e4] text-sm text-[#191c1d] focus:outline-none focus:ring-2 focus:ring-[#003527] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#191c1d] block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="rahul@example.com"
                      value={inquiryData.email}
                      onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#f8f9fa] border border-[#e1e3e4] text-sm text-[#191c1d] focus:outline-none focus:ring-2 focus:ring-[#003527] focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#191c1d] block">
                      Subject Topic
                    </label>
                    <select
                      value={inquiryData.subject}
                      onChange={(e) => setInquiryData({ ...inquiryData, subject: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#f8f9fa] border border-[#e1e3e4] text-sm text-[#191c1d] focus:outline-none focus:ring-2 focus:ring-[#003527] focus:bg-white transition-all"
                    >
                      <option>General Question</option>
                      <option>Membership Plan Clarification</option>
                      <option>Product & Courier Delivery</option>
                      <option>Work From Home Application</option>
                      <option>Community Group Coordination</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#191c1d] block">
                    Message Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How can we assist you today?"
                    value={inquiryData.message}
                    onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#f8f9fa] border border-[#e1e3e4] text-sm text-[#191c1d] focus:outline-none focus:ring-2 focus:ring-[#003527] focus:bg-white transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#003527] hover:bg-[#064e3b] text-white font-heading font-bold text-sm py-4 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-75"
                >
                  {submitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Inquiry Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
