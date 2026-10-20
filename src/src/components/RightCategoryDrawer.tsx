import React, { useState } from 'react';
import { X, ChevronRight, Dumbbell, Zap, Flame, HeartPulse, Sparkles, ShieldCheck, Phone, MessageCircle, Menu, Search } from 'lucide-react';
import { SHOP_MENU_CATEGORIES, STORE_INFO } from '../data/products';
import { BrandLogo } from './BrandLogo';
import { getGeneralWhatsAppConsultationLink } from '../utils/whatsapp';

interface RightCategoryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory: (categoryId: string, subTypeId?: string) => void;
  onOpenAdvisor: () => void;
}

export const RightCategoryDrawer: React.FC<RightCategoryDrawerProps> = ({
  isOpen,
  onClose,
  onSelectCategory,
  onOpenAdvisor
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'whey':
        return <Dumbbell className="w-4 h-4 text-black" />;
      case 'gainers':
        return <Zap className="w-4 h-4 text-black" />;
      case 'essentials':
        return <Zap className="w-4 h-4 text-black" />;
      case 'fat-loss':
        return <Flame className="w-4 h-4 text-black" />;
      case 'wellness':
        return <HeartPulse className="w-4 h-4 text-black" />;
      default:
        return <Dumbbell className="w-4 h-4 text-black" />;
    }
  };

  const handleItemClick = (categoryId: string, subTypeId?: string) => {
    onSelectCategory(categoryId, subTypeId);
    onClose();
    const el = document.getElementById('supplements');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredCategories = SHOP_MENU_CATEGORIES.map((cat) => {
    if (!searchTerm.trim()) return cat;
    const term = searchTerm.toLowerCase();
    const matchesCat = cat.label.toLowerCase().includes(term);
    const matchedSubs = cat.subItems.filter((s) => s.label.toLowerCase().includes(term));
    if (matchesCat) return cat;
    if (matchedSubs.length > 0) {
      return { ...cat, subItems: matchedSubs };
    }
    return null;
  }).filter(Boolean) as typeof SHOP_MENU_CATEGORIES;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-xs">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-zinc-200 shadow-2xl flex flex-col h-full animate-in slide-in-from-right duration-300">
          {/* Drawer Top Header: Athletic Black & Yellow Theme */}
          <div className="px-6 py-4.5 bg-black border-b border-yellow-500/40 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-yellow-400 flex items-center justify-center text-black shadow-xs">
                <Menu className="w-5 h-5 text-black" />
              </div>
              <div>
                <h3 className="font-display font-black text-base tracking-tight text-white flex items-center gap-1.5">
                  <span>SUPPLEMENT</span>
                  <span className="text-[#FACC15]">CATEGORIES</span>
                </h3>
                <p className="text-[11px] text-zinc-300 font-medium">
                  The Prime Nutritions · Owner: {STORE_INFO.owner}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search inside Category Drawer */}
          <div className="p-4 bg-zinc-50 border-b border-zinc-200">
            <div className="relative">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search Whey, Isolate, Gainer, Creatine..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-white border border-zinc-300 rounded-xl text-xs text-black placeholder-zinc-400 focus:outline-none focus:border-black font-medium"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-black text-xs"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Quick "Browse All" Strip */}
          <div className="px-5 py-3 bg-yellow-400/15 border-b border-yellow-300 flex items-center justify-between">
            <span className="text-xs font-black text-black">
              Full Store Collection
            </span>
            <button
              onClick={() => handleItemClick('all')}
              className="px-3 py-1.5 bg-yellow-400 hover:bg-yellow-500 text-black font-black text-xs rounded-lg transition-colors cursor-pointer border border-yellow-500 shadow-2xs"
            >
              View All Supplements →
            </button>
          </div>

          {/* Drawer Body: All Categories & Subcategories */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {filteredCategories.map((cat) => (
              <div
                key={cat.id}
                className="p-4 rounded-2xl bg-white border-2 border-zinc-200 hover:border-black transition-all shadow-2xs"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-zinc-100">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-yellow-400 border border-yellow-500 flex items-center justify-center shadow-2xs">
                      {getCategoryIcon(cat.id)}
                    </div>
                    <span className="font-display font-black text-sm text-black">
                      {cat.label}
                    </span>
                  </div>
                  <button
                    onClick={() => handleItemClick(cat.id, 'all')}
                    className="text-xs font-black text-black bg-zinc-100 hover:bg-yellow-400 px-2 py-0.5 rounded-md transition-colors cursor-pointer"
                  >
                    View All →
                  </button>
                </div>

                {/* Sub-type option buttons (Whey Isolate, Pea Protein, Bulk Gainer, etc.) */}
                <div className="grid grid-cols-2 gap-2">
                  {cat.subItems.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => handleItemClick(cat.id, sub.id)}
                      className="p-2.5 rounded-xl bg-zinc-50 hover:bg-yellow-400/20 border border-zinc-200 hover:border-black text-left text-xs font-bold text-zinc-900 transition-all flex items-center justify-between group cursor-pointer"
                    >
                      <span className="truncate">{sub.label}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-black shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {filteredCategories.length === 0 && (
              <div className="text-center py-8 text-zinc-500 text-xs">
                No categories matched "{searchTerm}".
              </div>
            )}

            {/* Quick Action Buttons */}
            <div className="space-y-2 pt-2">
              <button
                onClick={() => {
                  onClose();
                  onOpenAdvisor();
                }}
                className="w-full p-3.5 rounded-xl bg-black text-[#FACC15] font-black text-xs flex items-center justify-center gap-2 hover:bg-zinc-900 transition-colors cursor-pointer border border-yellow-500/40 shadow-xs"
              >
                <Sparkles className="w-4 h-4 text-[#FACC15]" />
                <span>Personalized Stack Advisor</span>
              </button>

              <a
                href={getGeneralWhatsAppConsultationLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-3.5 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-black font-black text-xs flex items-center justify-center gap-2 transition-colors border border-yellow-500 shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-black" />
                <span>Order on WhatsApp ({STORE_INFO.phone})</span>
              </a>
            </div>
          </div>

          {/* Drawer Footer: Owner Pratham Chachra and Call info */}
          <div className="p-4 bg-zinc-50 border-t border-zinc-200 text-xs text-zinc-700 flex items-center justify-between font-bold">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-black" />
              <span>Owner: {STORE_INFO.owner}</span>
            </div>
            <a
              href={`tel:${STORE_INFO.phone}`}
              className="text-black font-extrabold flex items-center gap-1 hover:text-[#CA8A04]"
            >
              <Phone className="w-3.5 h-3.5 text-black" />
              <span>Call: {STORE_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
