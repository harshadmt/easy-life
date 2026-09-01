'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS_LIST, Product, SITE_INFO } from '@/data/siteData';
import {
  Package,
  Search,
  Truck,
  Users,
  ShieldCheck,
  CheckCircle2,
  X,
  ArrowRight,
  Sparkles,
  Tag,
  Percent,
  Layers,
} from 'lucide-react';

const CATEGORIES = [
  'All',
  'Starter Packages & Kits',
  'Cooking Essentials & Oils',
  'Taste of Idukki Spices & Teas',
  'Health & Wellness',
  'Community & Solar Initiatives',
] as const;

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll and handle ESC key when modal is open
  useEffect(() => {
    if (selectedProduct) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setSelectedProduct(null);
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalStyle || 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [selectedProduct]);

  const filteredProducts = PRODUCTS_LIST.filter((p) => {
    const matchesCategory =
      activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.malayalamName && p.malayalamName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col gap-0">
      {/* Header Banner */}
      <section className="bg-[#003527] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-[#ffddb8] text-[#855300] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Package className="w-3.5 h-3.5" />
            <span>High-Quality Verified Products</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight max-w-3xl mx-auto">
            Products That Start Your Journey
          </h1>
          <p className="text-base sm:text-xl text-[#b0f0d6] max-w-2xl mx-auto mt-4">
            High quality home essential packages, authentic Idukki spices, wellness nutrition, and guaranteed doorstep courier delivery across Kerala.
          </p>
        </div>
      </section>

      {/* SPECIAL ₹1,000 PACKAGE & 21-ITEM KIT HIGHLIGHT BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 w-full">
        <div className="bg-white rounded-3xl border-2 border-[#fea619] p-6 sm:p-8 shadow-2xl card-shadow-hover">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 bg-[#ffddb8] text-[#855300] px-3 py-0.5 rounded-full text-xs font-extrabold uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Special ₹1,000 Package Combos</span>
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#003527]">
                AWPL വിശ്വസനീയമായ ഹൈ ക്വാളിറ്റി ഹോം പാക്കേജ് (ഓണകിറ്റ്)
              </h2>
              <p className="text-sm text-[#404944] max-w-2xl">
                21 Essential Items Package: <strong>DP ₹3,288</strong> | <strong>MRP ₹4,385</strong> | <strong>SP 9</strong>. Includes Rice Bran Oil 2 Bottles (MRP ₹1,398 / DP ₹998), Popular Strong Tea, Chilly powder, and Basmati rice options.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/register?plan=1000_membership"
                className="bg-[#fea619] hover:bg-[#855300] text-[#191c1d] hover:text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all flex items-center gap-2"
              >
                <span>Select ₹1,000 Package</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={SITE_INFO.whatsappGroupLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#003527] hover:bg-[#064e3b] text-white font-bold text-sm px-5 py-3.5 rounded-xl transition-all"
              >
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Controls & Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 w-full">
        {/* Search and Category Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          {/* Category Tabs */}
          <div className="flex overflow-x-auto pb-2 sm:pb-0 gap-2 w-full md:w-auto scrollbar-none border-b sm:border-b-0 border-[#e1e3e4]">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#003527] text-white shadow-sm'
                    : 'bg-[#f3f4f5] text-[#404944] hover:bg-[#e7e8e9]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#707974] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search products, spices, oils..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#e1e3e4] rounded-xl text-sm text-[#191c1d] placeholder-[#707974] focus:outline-none focus:ring-2 focus:ring-[#003527] shadow-sm"
            />
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-[#f8f9fa] rounded-3xl border border-[#e1e3e4] space-y-3 animate-fade-in">
            <Package className="w-12 h-12 text-[#707974] mx-auto" />
            <h3 className="font-heading font-bold text-xl text-[#003527]">No products found</h3>
            <p className="text-sm text-[#404944]">Try adjusting your search query or category filter.</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="text-xs font-bold text-[#855300] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up"
          >
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-[#e1e3e4] rounded-3xl overflow-hidden card-shadow-hover flex flex-col justify-between group hover:border-[#80bea6] shimmer-card"
              >
                <div>
                  {/* Image Container (Clickable) */}
                  <div
                    onClick={() => setSelectedProduct(product)}
                    className="h-72 w-full bg-[#f8f9fa] relative overflow-hidden flex items-center justify-center p-3 border-b border-[#e7e8e9] cursor-pointer group/img"
                    title={`Click to view details for ${product.name}`}
                  >
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain group-hover/img:scale-108 transition-transform duration-500 rounded-lg"
                    />
                    <div className="absolute top-3 right-3 bg-[#003527] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                      {product.badge}
                    </div>
                    {product.mrp && (
                      <div className="absolute bottom-3 left-3 bg-[#003527]/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg border border-white/20 shadow-sm">
                        MRP: {product.mrp}
                      </div>
                    )}
                  </div>

                  {/* Details */}
                  <div className="p-6 space-y-3">
                    <span className="text-[11px] font-bold text-[#855300] uppercase tracking-wider block">
                      {product.category}
                    </span>

                    <h3
                      onClick={() => setSelectedProduct(product)}
                      className="font-heading font-bold text-lg sm:text-xl text-[#003527] group-hover:text-[#855300] transition-colors leading-snug cursor-pointer"
                    >
                      {product.name}
                    </h3>

                    {product.malayalamName && (
                      <p className="text-xs font-semibold text-[#855300] line-clamp-1">
                        {product.malayalamName}
                      </p>
                    )}

                    <p className="text-xs sm:text-sm text-[#404944] leading-relaxed line-clamp-2">
                      {product.description}
                    </p>

                    {/* Price & DP/SP Tag Bar */}
                    <div className="p-3 bg-[#f8f9fa] rounded-xl border border-[#e7e8e9] flex flex-wrap items-center justify-between gap-2 text-xs">
                      {product.dp && (
                        <div>
                          <span className="text-[10px] text-[#707974] block">Distributor (DP)</span>
                          <span className="font-bold text-[#003527] text-sm">{product.dp}</span>
                        </div>
                      )}
                      {product.sp && (
                        <div>
                          <span className="text-[10px] text-[#707974] block">Point Value</span>
                          <span className="font-bold text-[#855300] text-sm">{product.sp}</span>
                        </div>
                      )}
                      <div>
                        <span className="text-[10px] text-[#707974] block">Package Entry</span>
                        <span className="font-extrabold text-[#003527] text-sm">{product.price}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#707974] pt-2 border-t border-[#e7e8e9]">
                    <span className="flex items-center gap-1">
                      <Truck className="w-3.5 h-3.5 text-[#fea619]" /> {product.delivery}
                    </span>
                    <span>{product.group}</span>
                  </div>

                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="w-full bg-[#003527] hover:bg-[#064e3b] text-white font-bold text-sm py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>View Details & Package</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* QUICK VIEW MODAL (Rendered directly in Portal at body level) */}
      {mounted &&
        selectedProduct &&
        createPortal(
          <div
            className="fixed inset-0 z-[99999] bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedProduct(null);
            }}
          >
            <div
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#e1e3e4] shadow-2xl relative my-auto animate-modal-in"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProduct(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 z-10 p-2 bg-white/95 rounded-full hover:bg-[#e7e8e9] transition-colors shadow-md border border-[#e1e3e4]"
              >
                <X className="w-5 h-5 text-[#191c1d]" />
              </button>

              <div className="relative h-72 sm:h-80 w-full bg-[#f8f9fa] flex items-center justify-center border-b border-[#e1e3e4] p-4">
                <img
                  src={selectedProduct.imageUrl}
                  alt={selectedProduct.name}
                  className="max-h-full max-w-full object-contain rounded-xl"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-xs bg-[#003527] text-white font-bold px-3 py-1 rounded-full uppercase shadow-sm">
                    {selectedProduct.badge}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <span className="text-xs font-bold text-[#855300] uppercase tracking-wider block">
                    {selectedProduct.category}
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#003527] mt-1">
                    {selectedProduct.name}
                  </h3>
                  {selectedProduct.malayalamName && (
                    <p className="text-sm font-semibold text-[#855300] mt-1">
                      {selectedProduct.malayalamName}
                    </p>
                  )}
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-3 gap-3 p-4 bg-[#f8f9fa] rounded-2xl border border-[#e7e8e9] text-center">
                  {selectedProduct.mrp && (
                    <div>
                      <span className="text-[10px] text-[#707974] block uppercase">MRP</span>
                      <span className="text-lg font-bold text-[#191c1d] font-heading">{selectedProduct.mrp}</span>
                    </div>
                  )}
                  {selectedProduct.dp && (
                    <div>
                      <span className="text-[10px] text-[#707974] block uppercase">DP (Distributor)</span>
                      <span className="text-lg font-bold text-[#003527] font-heading">{selectedProduct.dp}</span>
                    </div>
                  )}
                  {selectedProduct.sp && (
                    <div>
                      <span className="text-[10px] text-[#707974] block uppercase">SP Points</span>
                      <span className="text-lg font-bold text-[#855300] font-heading">{selectedProduct.sp}</span>
                    </div>
                  )}
                </div>

                <div>
                  <h4 className="font-heading font-bold text-base text-[#003527] mb-2">Description</h4>
                  <p className="text-sm text-[#404944] leading-relaxed">{selectedProduct.description}</p>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-base text-[#003527] mb-3">Package Contents & Features</h4>
                  <ul className="space-y-2">
                    {selectedProduct.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-sm text-[#191c1d]">
                        <CheckCircle2 className="w-4 h-4 text-[#fea619] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#e7e8e9] flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/register?product=${encodeURIComponent(selectedProduct.name)}`}
                    className="flex-1 bg-[#fea619] hover:bg-[#855300] text-[#191c1d] hover:text-white font-bold py-3.5 px-6 rounded-xl text-center shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>Register & Order This Package</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="px-6 py-3.5 bg-[#f3f4f5] hover:bg-[#e7e8e9] text-[#191c1d] font-semibold text-sm rounded-xl transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
