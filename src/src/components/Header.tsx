import React, { useState, useRef, useEffect } from 'react';
import { ShoppingBag, MessageCircle, Phone, Menu, X, ShieldCheck, Sparkles, ChevronDown, Dumbbell, Zap, Flame, HeartPulse } from 'lucide-react';
import { STORE_INFO, SHOP_MENU_CATEGORIES } from '../data/products';
import { getGeneralWhatsAppConsultationLink } from '../utils/whatsapp';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenAdvisor: () => void;
  onSelectCategory: (categoryId: string, subTypeId?: string) => void;
  onGoHome: () => void;
  onOpenRightDrawer: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenAdvisor,
  onSelectCategory,
  onGoHome,
  onOpenRightDrawer
}) => {
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShopDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubCategoryClick = (categoryId: string, subTypeId?: string) => {
    onSelectCategory(categoryId, subTypeId);
    setShopDropdownOpen(false);
    const el = document.getElementById('supplements');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-zinc-200 shadow-2xs">
      {/* Top Bar: Athletic Black & Yellow Announcement */}
      <div className="bg-black text-white py-1.5 px-4 text-center border-b border-yellow-500/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-[#FACC15] font-extrabold uppercase">100% Genuine Lab Tested</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span className="text-zinc-300">Official Batch Scratch Seals</span>
          </div>

          <div className="mx-auto sm:mx-0 flex items-center gap-2">
            <span className="text-zinc-300">Free Doorstep Shipping over ₹999</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span className="text-[#FACC15] font-mono font-bold">WhatsApp: {STORE_INFO.phone}</span>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${STORE_INFO.phone}`}
              className="text-white hover:text-[#FACC15] transition-colors flex items-center gap-1.5 font-bold font-mono"
            >
              <Phone className="w-3.5 h-3.5 text-[#FACC15]" />
              <span>Call Pratham: {STORE_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-4 sm:gap-6">
        {/* Zone 1: Official Brand Logo */}
        <button
          onClick={onGoHome}
          className="flex items-center gap-3 whitespace-nowrap shrink-0 group text-left cursor-pointer"
        >
          <BrandLogo size="md" showSubtitle={true} />
        </button>

        {/* Zone 2: Navigation Links with Interactive Dropdown */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-bold text-black">
          <button
            onClick={onGoHome}
            className="hover:text-[#CA8A04] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Home
          </button>

          {/* Shop Mega Menu */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShopDropdownOpen(!shopDropdownOpen)}
              onMouseEnter={() => setShopDropdownOpen(true)}
              className={`flex items-center gap-1 hover:text-[#CA8A04] transition-colors whitespace-nowrap shrink-0 py-2 cursor-pointer ${
                shopDropdownOpen ? 'text-[#CA8A04]' : ''
              }`}
            >
              <span>Shop</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${shopDropdownOpen ? 'rotate-180 text-[#CA8A04]' : ''}`} />
            </button>

            {shopDropdownOpen && (
              <div
                onMouseLeave={() => setShopDropdownOpen(false)}
                className="absolute top-full -left-20 w-[780px] bg-white border border-zinc-200 rounded-3xl shadow-2xl p-6 mt-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
              >
                <div className="flex items-center justify-between pb-3 border-b border-zinc-100 mb-5">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-black">
                    <BrandLogo variant="emblem" size="sm" />
                    <span>The Prime Nutritions Catalog</span>
                  </div>
                  <button
                    onClick={() => handleSubCategoryClick('all')}
                    className="text-xs font-extrabold text-[#CA8A04] hover:underline cursor-pointer"
                  >
                    View All Products →
                  </button>
                </div>

                <div className="grid grid-cols-5 gap-5 text-left">
                  {/* Proteins */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-black uppercase text-black pb-1 border-b border-zinc-100">
                      <Dumbbell className="w-3.5 h-3.5 text-[#CA8A04]" />
                      <span>Proteins</span>
                    </div>
                    <ul className="space-y-1 text-xs">
                      <li>
                        <button onClick={() => handleSubCategoryClick('whey', 'whey-protein')} className="text-zinc-600 hover:text-black font-semibold transition-colors block text-left py-0.5 cursor-pointer">
                          Whey Protein
                        </button>
                      </li>
                      <li>
                        <button onClick={() => handleSubCategoryClick('whey', 'pea-protein')} className="text-zinc-600 hover:text-black font-semibold transition-colors block text-left py-0.5 cursor-pointer">
                          Pea Protein
                        </button>
                      </li>
                    </ul>
                  </div>

                  {/* Gainers */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-black uppercase text-black pb-1 border-b border-zinc-100">
                      <Zap className="w-3.5 h-3.5 text-[#CA8A04]" />
                      <span>Gainers</span>
                    </div>
                    <ul className="space-y-1 text-xs">
                      <li>
                        <button onClick={() => handleSubCategoryClick('gainers', 'bulk-gainer')} className="text-zinc-600 hover:text-black font-semibold transition-colors block text-left py-0.5 cursor-pointer">
                          Bulk Gainer
                        </button>
                      </li>
                      <li>
                        <button onClick={() => handleSubCategoryClick('gainers', 'weight-gainer')} className="text-zinc-600 hover:text-black font-semibold transition-colors block text-left py-0.5 cursor-pointer">
                          Weight Gainer
                        </button>
                      </li>
                    </ul>
                  </div>

                  {/* Essentials */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-black uppercase text-black pb-1 border-b border-zinc-100">
                      <Zap className="w-3.5 h-3.5 text-black" />
                      <span>Essentials</span>
                    </div>
                    <ul className="space-y-1 text-xs">
                      <li>
                        <button onClick={() => handleSubCategoryClick('essentials', 'creatine')} className="text-zinc-600 hover:text-black font-semibold transition-colors block text-left py-0.5 cursor-pointer">
                          Creatine
                        </button>
                      </li>
                      <li>
                        <button onClick={() => handleSubCategoryClick('essentials', 'pre-workout')} className="text-zinc-600 hover:text-black font-semibold transition-colors block text-left py-0.5 cursor-pointer">
                          Pre Workout
                        </button>
                      </li>
                    </ul>
                  </div>

                  {/* Fat Loss */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-black uppercase text-black pb-1 border-b border-zinc-100">
                      <Flame className="w-3.5 h-3.5 text-rose-600" />
                      <span>Fat Loss</span>
                    </div>
                    <ul className="space-y-1 text-xs">
                      <li>
                        <button onClick={() => handleSubCategoryClick('fat-loss', 'l-carnitine')} className="text-zinc-600 hover:text-black font-semibold transition-colors block text-left py-0.5 cursor-pointer">
                          L-Carnitine
                        </button>
                      </li>
                    </ul>
                  </div>

                  {/* Wellness */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-black uppercase text-black pb-1 border-b border-zinc-100">
                      <HeartPulse className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Wellness</span>
                    </div>
                    <ul className="space-y-1 text-xs">
                      <li>
                        <button onClick={() => handleSubCategoryClick('wellness', 'multivitamin')} className="text-zinc-600 hover:text-black font-semibold transition-colors block text-left py-0.5 cursor-pointer">
                          Multivitamin
                        </button>
                      </li>
                      <li>
                        <button onClick={() => handleSubCategoryClick('wellness', 'fish-oil')} className="text-zinc-600 hover:text-black font-semibold transition-colors block text-left py-0.5 cursor-pointer">
                          Fish Oil
                        </button>
                      </li>
                      <li>
                        <button onClick={() => handleSubCategoryClick('wellness', 'testo-booster')} className="text-zinc-600 hover:text-black font-semibold transition-colors block text-left py-0.5 cursor-pointer">
                          Testo Booster
                        </button>
                      </li>
                      <li>
                        <button onClick={() => handleSubCategoryClick('wellness', 'joint-health')} className="text-zinc-600 hover:text-black font-semibold transition-colors block text-left py-0.5 cursor-pointer">
                          Health Joints
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={onOpenAdvisor}
            className="hover:text-[#CA8A04] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#EAB308]" />
            <span>Stack Guide</span>
          </button>

          <a
            href="#authenticity"
            className="hover:text-[#CA8A04] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-black" />
            <span>Authenticity</span>
          </a>

          <a
            href="#contact"
            className="hover:text-[#CA8A04] transition-colors whitespace-nowrap shrink-0"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: Actions + Right "Three Lines" Category Drawer Trigger */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          {/* Quick WhatsApp Connect */}
          <a
            href={getGeneralWhatsAppConsultationLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-black text-black bg-[#FACC15] hover:bg-[#EAB308] rounded-xl transition-all whitespace-nowrap shadow-xs"
            title={`Chat on WhatsApp (${STORE_INFO.phone})`}
          >
            <MessageCircle className="w-4 h-4 text-black" />
            <span>WhatsApp Order</span>
          </a>

          {/* Cart Trigger */}
          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-white bg-black hover:bg-zinc-800 rounded-xl transition-all active:scale-95 whitespace-nowrap cursor-pointer shadow-xs"
            aria-label="View Shopping Cart"
          >
            <ShoppingBag className="w-4 h-4 text-[#FACC15]" />
            <span className="hidden xs:inline">Bag</span>
            <span className="flex items-center justify-center min-w-5 h-5 px-1 bg-[#FACC15] text-black text-[11px] font-mono font-black rounded-full">
              {cartCount}
            </span>
          </button>

          {/* Right "Three Lines" Category Menu Button (Whey, Gainer, Essentials, etc.) */}
          <button
            onClick={onOpenRightDrawer}
            className="flex items-center gap-1.5 px-3 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-black text-xs rounded-xl shadow-xs transition-transform active:scale-95 cursor-pointer border border-yellow-500"
            title="Open all supplement categories (Whey, Gainer, Essentials, Fat Loss, Wellness)"
            aria-label="Open supplement categories menu"
          >
            <Menu className="w-5 h-5 text-black stroke-[2.5]" />
            <span className="uppercase tracking-tight font-black text-[11px] sm:text-xs">Categories</span>
          </button>
        </div>
      </div>
    </header>
  );
};
