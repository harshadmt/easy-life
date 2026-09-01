'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import confetti from 'canvas-confetti';
import { SITE_INFO } from '@/data/siteData';
import {
  CheckCircle2,
  Send,
  MessageSquare,
  UserCheck,
  QrCode,
  Copy,
  Check,
  ShieldCheck,
  Truck,
  ArrowRight,
  Sparkles,
  PhoneCall,
  Building,
  CreditCard,
  Wallet,
} from 'lucide-react';

const INTEREST_OPTIONS = [
  { id: '1000_membership', title: '₹1,000 Membership Plan', desc: '5x Value (₹5,000 Products) + Milestone Roadmap', amount: '₹1,000', isPopular: true },
  { id: '999_purchase', title: '₹999 Starter Purchase', desc: '21-Item Home Kit (MRP ₹4,385) + Courier Delivery', amount: '₹999' },
  { id: 'wfh', title: 'Work From Home Opportunity', desc: 'Flexible task-based supplemental earnings (₹1,000 Tier)', amount: '₹1,000' },
  { id: 'business', title: 'Business Development', desc: 'Community coordination & district entrepreneurship', amount: '₹1,000' },
  { id: 'solar', title: 'KSEB Rooftop Solar Scheme', desc: '₹78,000 MNRE Direct Government Subsidy Scheme', amount: 'Free Consultation' },
  { id: 'more_info', title: 'General Information Inquiry', desc: 'Request direct callback from society representative', amount: 'Free' },
];

function RegisterFormContent() {
  const searchParams = useSearchParams();
  const initialPlan = searchParams.get('plan') || '1000_membership';
  const initialProduct = searchParams.get('product') || '';

  const [formData, setFormData] = useState({
    fullName: '',
    location: '',
    phone: '',
    whatsapp: '',
    sameAsPhone: true,
    interest: initialPlan,
    address: '',
    pincode: '',
    message: initialProduct ? `Interested in product: ${initialProduct}` : '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'bank'>('upi');
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [copiedAcc, setCopiedAcc] = useState(false);
  const [copiedIfsc, setCopiedIfsc] = useState(false);
  const [refNumber, setRefNumber] = useState('ELM-84920');

  const UPI_ID = SITE_INFO.bankDetails.upiId;
  const ADMIN_WHATSAPP = '918075028292';

  useEffect(() => {
    const planParam = searchParams.get('plan');
    if (planParam && INTEREST_OPTIONS.some((o) => o.id === planParam)) {
      setFormData((prev) => ({ ...prev, interest: planParam }));
    }
  }, [searchParams]);

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(UPI_ID);
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2500);
  };

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

  const constructRegistrationMessage = (ref: string) => {
    const selectedPlan = INTEREST_OPTIONS.find((o) => o.id === formData.interest) || INTEREST_OPTIONS[0];
    return `🌟 *പുതിയ അംഗത്വ രജിസ്ട്രേഷൻ / NEW REGISTRATION*\n` +
      `🏢 *Easy Life Manager (Sayana Charitable Society)*\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `📋 *Ref ID:* ${ref}\n` +
      `👤 *പേര് / Name:* ${formData.fullName}\n` +
      `📞 *ഫോൺ / Phone:* ${formData.phone}\n` +
      `💬 *WhatsApp:* ${formData.sameAsPhone ? formData.phone : formData.whatsapp}\n` +
      `📍 *സ്ഥലം / District:* ${formData.location}\n` +
      `📦 *തിരഞ്ഞെടുത്ത പാക്കേജ് / Plan:* ${selectedPlan.title} (${selectedPlan.amount})\n` +
      `🏠 *ഡെലിവറി വിലാസം / Address:* ${formData.address || 'Not Provided'}${formData.pincode ? ` - ${formData.pincode}` : ''}\n` +
      `📝 *കുറിപ്പ് / Notes:* ${formData.message || 'None'}\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `_ഞാൻ ഓൺലൈനായി രജിസ്റ്റർ ചെയ്തിട്ടുണ്ട്. QR കോഡ് വഴി പേയ്‌മെന്റ് പൂർത്തിയാക്കുവാൻ തയ്യാറാണ്. ദയവായി അക്കൗണ്ട് ആക്റ്റീവാക്കുക._`;
  };

  const getDirectWhatsAppUrl = (ref: string) => {
    const text = constructRegistrationMessage(ref);
    return `https://api.whatsapp.com/send?phone=${ADMIN_WHATSAPP}&text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const generatedRef = `ELM-${Math.floor(10000 + Math.random() * 90000)}`;
    setRefNumber(generatedRef);

    const waUrl = getDirectWhatsAppUrl(generatedRef);

    // Open WhatsApp synchronously to prevent popup blocker
    if (typeof window !== 'undefined') {
      window.open(waUrl, '_blank');
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger confetti celebration
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#003527', '#fea619', '#80bea6', '#ffddb8', '#ffffff'],
        });
      } catch (err) {
        console.error('Confetti error', err);
      }
    }, 400);
  };

  const selectedPlanObj = INTEREST_OPTIONS.find((o) => o.id === formData.interest) || INTEREST_OPTIONS[0];

  return (
    <>
      {isSubmitted ? (
        /* SUCCESS & PAYMENT QR CODE ACTIVATION SCREEN */
        <div className="bg-white border-2 border-[#fea619] rounded-3xl p-6 sm:p-10 lg:p-12 card-shadow-hover space-y-8 animate-in zoom-in-95 duration-300">
          {/* Top Status Header */}
          <div className="text-center space-y-3">
            <div className="w-20 h-20 bg-[#c3ecd7] text-[#003527] rounded-full flex items-center justify-center mx-auto shadow-md ring-8 ring-[#c3ecd7]/40">
              <CheckCircle2 className="w-10 h-10 text-[#003527]" />
            </div>

            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 bg-[#ffddb8] text-[#855300] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Application Form Submitted</span>
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#003527]">
                Welcome, {formData.fullName}!
              </h2>
              <p className="text-sm sm:text-base text-[#404944] max-w-xl mx-auto">
                Your application has been registered with reference ID <strong className="text-[#003527] font-mono bg-[#f3f4f5] px-2 py-0.5 rounded border border-[#e1e3e4]">{refNumber}</strong>.
              </p>
            </div>
          </div>

          {/* TWO-COLUMN LAYOUT: APPLICATION SUMMARY & QR CODE PAYMENT CARD */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COL: Application Summary */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 bg-[#f8f9fa] rounded-2xl border border-[#e1e3e4] space-y-4 text-sm text-[#404944]">
                <h3 className="font-heading font-bold text-base text-[#003527] pb-2 border-b border-[#e7e8e9] flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-[#fea619]" />
                  <span>Registration Summary</span>
                </h3>

                <div className="space-y-2.5">
                  <div className="flex justify-between">
                    <span className="text-[#707974]">Applicant:</span>
                    <span className="font-bold text-[#191c1d]">{formData.fullName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#707974]">Mobile Number:</span>
                    <span className="font-bold text-[#191c1d]">{formData.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#707974]">Selected Plan:</span>
                    <span className="font-bold text-[#003527] text-right">{selectedPlanObj.title}</span>
                  </div>
                  {formData.address && (
                    <div className="flex justify-between">
                      <span className="text-[#707974]">Delivery Address:</span>
                      <span className="font-medium text-[#191c1d] text-right text-xs max-w-[200px]">{formData.address}, {formData.pincode}</span>
                    </div>
                  )}
                  <div className="flex justify-between pt-2 border-t border-[#e7e8e9]">
                    <span className="font-bold text-[#003527]">Payable Amount:</span>
                    <span className="font-heading font-extrabold text-lg text-[#855300]">{selectedPlanObj.amount}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#e7e8e9] text-xs text-[#707974] flex items-start gap-2">
                  <Truck className="w-4 h-4 text-[#003527] shrink-0 mt-0.5" />
                  <span>Your product kit will be dispatched via registered courier within 24 hours of payment verification.</span>
                </div>
              </div>

              {/* Direct WhatsApp Action Link */}
              <div className="p-5 bg-[#c3ecd7]/40 rounded-2xl border border-[#80bea6]/50 text-xs text-[#003527] space-y-3">
                <p className="font-bold text-sm flex items-center gap-1.5 text-[#003527]">
                  <MessageSquare className="w-4 h-4 text-[#003527]" />
                  <span>Didn&apos;t open WhatsApp automatically?</span>
                </p>
                <p className="text-[#404944] leading-relaxed">
                  Click below to send your application details and payment confirmation directly to our administrator on <strong>+91 80750 28292</strong>:
                </p>
                <a
                  href={getDirectWhatsAppUrl(refNumber)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#003527] hover:bg-[#064e3b] text-white font-bold py-3 px-4 rounded-xl text-center flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#fea619]" />
                  <span>Send Details to WhatsApp (+91 80750 28292)</span>
                </a>
              </div>
            </div>

            {/* RIGHT COL: PAYMENT (UPI SCAN & PAY OR BANK TRANSFER) */}
            <div className="lg:col-span-7 bg-[#003527] text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#fea619]/10 rounded-full blur-2xl pointer-events-none" />

              {/* Payment Method Switcher Tabs */}
              <div className="flex bg-[#064e3b] p-1.5 rounded-2xl border border-[#80bea6]/30 max-w-sm mx-auto">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('upi')}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    paymentMethod === 'upi'
                      ? 'bg-[#fea619] text-[#191c1d] shadow-md'
                      : 'text-[#b0f0d6] hover:text-white'
                  }`}
                >
                  <QrCode className="w-3.5 h-3.5" />
                  <span>UPI Scan & Pay</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('bank')}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    paymentMethod === 'bank'
                      ? 'bg-[#fea619] text-[#191c1d] shadow-md'
                      : 'text-[#b0f0d6] hover:text-white'
                  }`}
                >
                  <Building className="w-3.5 h-3.5" />
                  <span>Bank Transfer</span>
                </button>
              </div>

              {paymentMethod === 'upi' ? (
                /* TAB 1: UPI SCAN & PAY */
                <div className="space-y-4 animate-fade-in">
                  <div className="text-center space-y-1">
                    <h3 className="font-heading font-extrabold text-2xl text-white">
                      Scan UPI QR Code
                    </h3>
                    <p className="text-xs sm:text-sm text-[#b0f0d6] max-w-md mx-auto">
                      Scan with Google Pay, PhonePe, Paytm, or BHIM to pay <strong>{selectedPlanObj.amount}</strong>.
                    </p>
                  </div>

                  {/* QR Code Container */}
                  <div className="bg-white rounded-2xl p-4 sm:p-6 text-center max-w-sm mx-auto shadow-2xl border-4 border-[#fea619] relative group">
                    <div className="relative aspect-[3/4] w-full max-w-[240px] mx-auto overflow-hidden rounded-xl bg-white flex items-center justify-center">
                      <img
                        src="/qrcode.png"
                        alt="BHIM UPI Scan & Pay QR Code"
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="mt-3 pt-3 border-t border-[#e7e8e9] space-y-1">
                      <span className="text-[11px] font-bold text-[#707974] uppercase block">
                        Official UPI ID:
                      </span>
                      <div className="flex items-center justify-center gap-2 bg-[#f8f9fa] py-1.5 px-3 rounded-lg border border-[#e1e3e4]">
                        <span className="font-mono font-bold text-xs sm:text-sm text-[#003527] truncate">
                          {UPI_ID}
                        </span>
                        <button
                          type="button"
                          onClick={handleCopyUpi}
                          className="text-xs bg-[#003527] hover:bg-[#064e3b] text-white px-2.5 py-1 rounded flex items-center gap-1 transition-colors shrink-0"
                        >
                          {copiedUpi ? (
                            <>
                              <Check className="w-3 h-3 text-[#fea619]" />
                              <span>Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* TAB 2: BANK TRANSFER (NEFT / IMPS / RTGS) */
                <div className="space-y-4 animate-fade-in">
                  <div className="text-center space-y-1">
                    <h3 className="font-heading font-extrabold text-2xl text-white">
                      Direct Bank Transfer Details
                    </h3>
                    <p className="text-xs sm:text-sm text-[#b0f0d6] max-w-md mx-auto">
                      Transfer <strong>{selectedPlanObj.amount}</strong> via NEFT, IMPS, RTGS, or Online Banking to our official account:
                    </p>
                  </div>

                  <div className="bg-white text-[#191c1d] rounded-2xl p-5 sm:p-6 shadow-2xl border-4 border-[#fea619] max-w-md mx-auto space-y-3.5 text-xs">
                    <div className="flex items-center justify-between pb-2 border-b border-[#e7e8e9]">
                      <span className="font-bold text-[#855300] uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                        <Building className="w-4 h-4 text-[#003527]" />
                        Official Society Bank Account
                      </span>
                      <span className="bg-[#c3ecd7] text-[#003527] px-2 py-0.5 rounded text-[10px] font-extrabold uppercase">
                        Verified
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      <div className="flex justify-between items-center">
                        <span className="text-[#707974]">Bank:</span>
                        <span className="font-bold text-[#003527] text-sm">{SITE_INFO.bankDetails.bank}</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-[#707974]">Account Name:</span>
                        <span className="font-bold text-[#191c1d]">{SITE_INFO.bankDetails.accountName}</span>
                      </div>

                      <div className="flex justify-between items-center bg-[#f8f9fa] p-2.5 rounded-xl border border-[#e1e3e4]">
                        <div>
                          <span className="text-[10px] text-[#707974] block uppercase">Account Number</span>
                          <span className="font-mono font-extrabold text-sm text-[#003527]">{SITE_INFO.bankDetails.accountNumber}</span>
                        </div>
                        <button
                          type="button"
                          onClick={handleCopyAcc}
                          className="text-xs bg-[#003527] hover:bg-[#064e3b] text-white px-2.5 py-1 rounded-lg flex items-center gap-1 transition-colors"
                        >
                          {copiedAcc ? <Check className="w-3 h-3 text-[#fea619]" /> : <Copy className="w-3 h-3" />}
                          <span>{copiedAcc ? 'Copied' : 'Copy'}</span>
                        </button>
                      </div>

                      <div className="flex justify-between items-center bg-[#f8f9fa] p-2.5 rounded-xl border border-[#e1e3e4]">
                        <div>
                          <span className="text-[10px] text-[#707974] block uppercase">IFSC Code</span>
                          <span className="font-mono font-extrabold text-sm text-[#855300]">{SITE_INFO.bankDetails.ifscCode}</span>
                        </div>
                        <button
                          type="button"
                          onClick={handleCopyIfsc}
                          className="text-xs bg-[#003527] hover:bg-[#064e3b] text-white px-2.5 py-1 rounded-lg flex items-center gap-1 transition-colors"
                        >
                          {copiedIfsc ? <Check className="w-3 h-3 text-[#fea619]" /> : <Copy className="w-3 h-3" />}
                          <span>{copiedIfsc ? 'Copied' : 'Copy'}</span>
                        </button>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-[#707974]">Branch:</span>
                        <span className="font-semibold text-[#191c1d]">{SITE_INFO.bankDetails.branch} (Code: {SITE_INFO.bankDetails.branchCode})</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* INSTRUCTION & PROMINENT WHATSAPP BUTTON */}
              <div className="space-y-4 pt-2 text-center">
                <div className="bg-[#064e3b]/80 border border-[#80bea6]/30 p-3.5 rounded-xl text-xs text-[#b0f0d6] text-left space-y-1.5">
                  <p className="font-bold text-[#fea619] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Next steps for activation:</span>
                  </p>
                  <ol className="list-decimal list-inside space-y-0.5 text-[11px] leading-relaxed">
                    <li>Complete payment of <strong>{selectedPlanObj.amount}</strong> using UPI QR or Bank Transfer.</li>
                    <li>Take a screenshot of the completed transaction receipt.</li>
                    <li>Click the button below to join the official WhatsApp group & share the receipt.</li>
                  </ol>
                </div>

                {/* PRIMARY ACTION: JOIN WHATSAPP GROUP */}
                <div className="space-y-3">
                  <a
                    href={SITE_INFO.whatsappGroupLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#fea619] hover:bg-[#ffbe4d] text-[#191c1d] font-extrabold text-base py-4 px-6 rounded-2xl shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group ring-4 ring-[#fea619]/30 hover:scale-[1.02]"
                  >
                    <MessageSquare className="w-6 h-6 text-[#191c1d] shrink-0 group-hover:rotate-6 transition-transform" />
                    <span className="font-heading tracking-wide">Join Official WhatsApp Group</span>
                    <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>

                  {/* SECONDARY ACTION: DIRECT WHATSAPP CHAT */}
                  <a
                    href={getDirectWhatsAppUrl(refNumber)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-transparent hover:bg-white/10 text-[#b0f0d6] hover:text-white border border-[#80bea6]/40 text-xs font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Send Application to WhatsApp Admin (+91 80750 28292)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-4 border-t border-[#e7e8e9]">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#003527] hover:text-[#855300] transition-colors"
            >
              <span>Return to Home Page</span>
            </Link>
          </div>
        </div>
      ) : (
        /* REGISTRATION FORM */
        <div className="bg-white border border-[#e1e3e4] rounded-3xl p-6 sm:p-10 lg:p-12 card-shadow shadow-xl space-y-8">
          <div className="border-b border-[#e7e8e9] pb-6 space-y-1">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#003527]">
              Participant Application Form
            </h2>
            <p className="text-sm text-[#404944]">
              Please provide accurate contact details for smooth courier product delivery and onboarding.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#191c1d] block">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Anjali Nair"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#f8f9fa] border border-[#e1e3e4] text-sm text-[#191c1d] placeholder-[#707974] focus:outline-none focus:ring-2 focus:ring-[#003527] focus:bg-white transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#191c1d] block">
                  City / District, State *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Kochi, Kerala"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#f8f9fa] border border-[#e1e3e4] text-sm text-[#191c1d] placeholder-[#707974] focus:outline-none focus:ring-2 focus:ring-[#003527] focus:bg-white transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#191c1d] block">
                  Mobile Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => {
                    const val = e.target.value;
                    setFormData({
                      ...formData,
                      phone: val,
                      whatsapp: formData.sameAsPhone ? val : formData.whatsapp,
                    });
                  }}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#f8f9fa] border border-[#e1e3e4] text-sm text-[#191c1d] placeholder-[#707974] focus:outline-none focus:ring-2 focus:ring-[#003527] focus:bg-white transition-all"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#191c1d] block">
                    WhatsApp Number
                  </label>
                  <label className="text-xs text-[#707974] flex items-center gap-1 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.sameAsPhone}
                      onChange={(e) => {
                        const checked = e.target.checked;
                        setFormData({
                          ...formData,
                          sameAsPhone: checked,
                          whatsapp: checked ? formData.phone : formData.whatsapp,
                        });
                      }}
                      className="rounded text-[#003527] focus:ring-[#003527]"
                    />
                    <span>Same as Phone</span>
                  </label>
                </div>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  disabled={formData.sameAsPhone}
                  value={formData.sameAsPhone ? formData.phone : formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#f8f9fa] border border-[#e1e3e4] text-sm text-[#191c1d] placeholder-[#707974] focus:outline-none focus:ring-2 focus:ring-[#003527] focus:bg-white transition-all disabled:opacity-70"
                />
              </div>
            </div>

            {/* Interest / Plan Selection */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-[#191c1d] block">
                Select Your Plan / Primary Area of Interest *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {INTEREST_OPTIONS.map((opt) => {
                  const isSelected = formData.interest === opt.id;
                  return (
                    <div
                      key={opt.id}
                      onClick={() => setFormData({ ...formData, interest: opt.id })}
                      className={`p-4 rounded-2xl border-2 cursor-pointer transition-all duration-200 flex items-start justify-between relative ${
                        isSelected
                          ? 'border-[#003527] bg-[#c3ecd7]/30 shadow-sm'
                          : 'border-[#e1e3e4] bg-[#f8f9fa] hover:border-[#80bea6]'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-heading font-bold text-sm text-[#003527]">
                            {opt.title}
                          </span>
                          {opt.isPopular && (
                            <span className="text-[10px] bg-[#fea619] text-[#191c1d] font-extrabold px-2 py-0.5 rounded-full uppercase">
                              Best Value
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[#404944]">{opt.desc}</p>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 ${
                          isSelected ? 'border-[#003527] bg-[#003527]' : 'border-[#707974]'
                        }`}
                      >
                        {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Delivery Address (Important for Product Courier) */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#003527]">
                <Truck className="w-4 h-4 text-[#fea619]" />
                <span>Doorstep Courier Delivery Address</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2 space-y-1.5">
                  <label className="text-xs text-[#707974]">Street / House Name / Landmark</label>
                  <input
                    type="text"
                    placeholder="House No, Landmark, Post Office"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#f8f9fa] border border-[#e1e3e4] text-sm text-[#191c1d] focus:outline-none focus:ring-2 focus:ring-[#003527] focus:bg-white"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs text-[#707974]">PIN Code</label>
                  <input
                    type="text"
                    maxLength={6}
                    placeholder="682001"
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#f8f9fa] border border-[#e1e3e4] text-sm text-[#191c1d] focus:outline-none focus:ring-2 focus:ring-[#003527] focus:bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Optional Notes */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#191c1d] block">
                Additional Notes or Product Preferences (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Any special courier instructions or product requests..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#f8f9fa] border border-[#e1e3e4] text-sm text-[#191c1d] placeholder-[#707974] focus:outline-none focus:ring-2 focus:ring-[#003527] focus:bg-white transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4 border-t border-[#e7e8e9] space-y-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#fea619] hover:bg-[#855300] text-[#191c1d] hover:text-white font-bold text-base py-4 px-8 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Submitting Application...
                  </span>
                ) : (
                  <>
                    <span>Submit & Send Details to WhatsApp (+91 80750 28292)</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#707974] pt-2">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#003527]" /> Direct WhatsApp Notification
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#003527]" /> Doorstep Courier Delivery
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#003527]" /> Official WhatsApp Support
                </span>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default function RegisterPage() {
  return (
    <div className="flex flex-col gap-0 min-h-screen bg-[#f8f9fa]">
      {/* Header */}
      <section className="bg-[#003527] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#ffddb8] text-[#855300] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Join Easy Life Manager</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Participant Registration & Onboarding
          </h1>
          <p className="text-base sm:text-lg text-[#b0f0d6] max-w-2xl mx-auto">
            Fill in your details below to activate your plan, receive your high-value product kit, and join our official community network.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full -mt-8 relative z-20">
        <Suspense
          fallback={
            <div className="bg-white rounded-3xl p-12 text-center card-shadow space-y-4">
              <div className="w-8 h-8 border-4 border-[#003527] border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-sm font-semibold text-[#707974]">Loading application form...</p>
            </div>
          }
        >
          <RegisterFormContent />
        </Suspense>
      </section>
    </div>
  );
}
