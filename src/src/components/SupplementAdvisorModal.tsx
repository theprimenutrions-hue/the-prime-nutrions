import React, { useState, useMemo } from 'react';
import { X, Sparkles, Check, ShoppingBag, MessageCircle, ShieldCheck, Flame, Dumbbell, Zap, HeartPulse, RefreshCw } from 'lucide-react';
import { PRODUCTS, STORE_INFO } from '../data/products';
import { Product } from '../types';
import { formatCurrency } from '../utils/whatsapp';
import { BrandLogo } from './BrandLogo';

interface SupplementAdvisorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddStackToCart: (products: Product[]) => void;
}

type AdvisorGoal = 'muscle' | 'bulking' | 'fat-loss' | 'strength' | 'wellness';
type TrainingLevel = 'beginner' | 'intermediate' | 'advanced';

const GOAL_OPTIONS: { id: AdvisorGoal; label: string; icon: React.FC<{ className?: string }>; desc: string }[] = [
  {
    id: 'muscle',
    label: 'Lean Muscle & Definition',
    icon: Dumbbell,
    desc: 'High protein, clean recovery with minimal body fat gain'
  },
  {
    id: 'bulking',
    label: 'Mass Gainer & Heavy Bulk',
    icon: Zap,
    desc: 'High calorie mass formula for hardgainers wanting size'
  },
  {
    id: 'fat-loss',
    label: 'Fat Loss & Cutting',
    icon: Flame,
    desc: 'Metabolic thermogenics, L-Carnitine and muscle sparing'
  },
  {
    id: 'strength',
    label: 'Raw Barbell Strength & Power',
    icon: Dumbbell,
    desc: 'Explosive ATP energy, heavy squats & bench press power'
  },
  {
    id: 'wellness',
    label: 'Joints & Athletic Longevity',
    icon: HeartPulse,
    desc: 'Heavy lift joint cartilage repair, fish oil & daily vitamins'
  }
];

export const SupplementAdvisorModal: React.FC<SupplementAdvisorModalProps> = ({
  isOpen,
  onClose,
  onAddStackToCart
}) => {
  const [goal, setGoal] = useState<AdvisorGoal>('muscle');
  const [level, setLevel] = useState<TrainingLevel>('intermediate');
  const [selectedProductIds, setSelectedProductIds] = useState<string[]>([]);
  const [added, setAdded] = useState(false);

  // Safe product finder by ID with guaranteed fallback
  const getProduct = (id: string): Product => {
    const found = PRODUCTS.find((p) => p.id === id);
    if (found) return found;
    return PRODUCTS[0];
  };

  // Compute recommended 3-piece stack based on goal and experience level
  const recommendedStack = useMemo((): Product[] => {
    let ids: string[] = [];

    switch (goal) {
      case 'muscle':
        if (level === 'beginner') {
          ids = ['tp-mb-biozyme-whey', 'tp-mb-vite', 'tp-mb-fishoil'];
        } else if (level === 'intermediate') {
          ids = ['tp-mb-biozyme-whey', 'tp-mb-creatine', 'tp-mb-fishoil'];
        } else {
          ids = ['tp-one-science-whey', 'tp-mb-creatine', 'tp-mb-preworkout'];
        }
        break;

      case 'bulking':
        if (level === 'beginner') {
          ids = ['tp-mb-mass-gainer', 'tp-mb-creatine', 'tp-mb-vite'];
        } else if (level === 'intermediate') {
          ids = ['tp-mb-mass-gainer', 'tp-mb-creatine', 'tp-mb-fishoil'];
        } else {
          ids = ['tp-mb-mass-gainer', 'tp-mb-creatine', 'tp-mb-preworkout'];
        }
        break;

      case 'fat-loss':
        if (level === 'beginner') {
          ids = ['tp-mb-carnitine', 'tp-nutrabay-pea-protein', 'tp-mb-vite'];
        } else if (level === 'intermediate') {
          ids = ['tp-mb-carnitine', 'tp-mb-biozyme-whey', 'tp-mb-fishoil'];
        } else {
          ids = ['tp-mb-carnitine', 'tp-atom-pwr-whey', 'tp-mb-preworkout'];
        }
        break;

      case 'strength':
        if (level === 'beginner') {
          ids = ['tp-mb-creatine', 'tp-atom-pwr-whey', 'tp-mb-fishoil'];
        } else if (level === 'intermediate') {
          ids = ['tp-mb-preworkout', 'tp-mb-creatine', 'tp-mb-biozyme-whey'];
        } else {
          ids = ['tp-mb-preworkout', 'tp-mb-creatine', 'tp-mb-testo'];
        }
        break;

      case 'wellness':
        if (level === 'beginner') {
          ids = ['tp-mb-vite', 'tp-mb-fishoil', 'tp-nutrabay-pea-protein'];
        } else if (level === 'intermediate') {
          ids = ['tp-mb-vite', 'tp-mb-fishoil', 'tp-gnc-pro-whey'];
        } else {
          ids = ['tp-mb-testo', 'tp-mb-fishoil', 'tp-mb-vite'];
        }
        break;

      default:
        ids = ['tp-mb-biozyme-whey', 'tp-mb-creatine', 'tp-mb-vite'];
    }

    return ids.map((id) => getProduct(id));
  }, [goal, level]);

  // Sync selected products whenever recommendation changes
  React.useEffect(() => {
    setSelectedProductIds(recommendedStack.map((p) => p.id));
  }, [recommendedStack]);

  if (!isOpen) return null;

  const activeProducts = recommendedStack.filter((p) => selectedProductIds.includes(p.id));
  const rawSubtotal = activeProducts.reduce((sum, p) => sum + p.price, 0);
  const bundleDiscount = activeProducts.length >= 3 ? Math.round(rawSubtotal * 0.05) : 0;
  const stackTotal = rawSubtotal - bundleDiscount;

  const toggleProduct = (productId: string) => {
    setSelectedProductIds((prev) => {
      if (prev.includes(productId)) {
        if (prev.length === 1) return prev; // Keep at least one product
        return prev.filter((id) => id !== productId);
      } else {
        return [...prev, productId];
      }
    });
  };

  const handleAddAll = () => {
    if (activeProducts.length === 0) return;
    setAdded(true);
    onClose();
    onAddStackToCart(activeProducts);
    setTimeout(() => {
      setAdded(false);
    }, 500);
  };

  const currentGoalLabel = GOAL_OPTIONS.find((g) => g.id === goal)?.label || goal;
  const stackWhatsAppQuery = `Hi Pratham Chachra, I consulted the Personalized Stack Advisor on The Prime Nutritions for my goal: *${currentGoalLabel}* (${level.toUpperCase()} lifter).\n\nI want to order this recommended stack:\n${activeProducts.map((s, i) => `${i + 1}. ${s.name} - ${formatCurrency(s.price)}`).join('\n')}\n\n*Bundle Total:* ${formatCurrency(stackTotal)} (Pan-India Free Express Delivery)\nPlease help confirm my order!`;
  const whatsappUrl = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(stackWhatsAppQuery)}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-white border border-zinc-200 rounded-3xl shadow-2xl overflow-hidden z-10 my-4 max-h-[92vh] flex flex-col">
        {/* Header: White, Yellow & Black Theme */}
        <div className="px-5 py-4 border-b border-zinc-200 flex items-center justify-between bg-zinc-50 shrink-0">
          <div className="flex items-center gap-3">
            <BrandLogo variant="emblem" size="sm" />
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-display font-black text-base sm:text-lg text-black">
                  Personalized Stack Advisor
                </h2>
                <span className="hidden sm:inline-flex items-center gap-1 bg-yellow-400 text-black text-[10px] font-mono font-extrabold px-2 py-0.5 rounded-full border border-yellow-500">
                  <Sparkles className="w-3 h-3" />
                  VERIFIED BY PRATHAM CHACHRA
                </span>
              </div>
              <p className="text-[11px] text-zinc-500">
                Scientifically formulated supplement regimens matching your exact training stage
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-zinc-400 hover:text-black hover:bg-zinc-200 transition-colors cursor-pointer"
            aria-label="Close stack advisor"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-5 sm:p-6 space-y-6 overflow-y-auto">
          {/* Step 1: Select Primary Goal */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-black uppercase tracking-wider text-black flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-black text-[#FACC15] text-[11px] font-mono font-black flex items-center justify-center">1</span>
                <span>Select Your Fitness Goal:</span>
              </label>
              <span className="text-[11px] text-zinc-500 font-medium">Click to select</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {GOAL_OPTIONS.map((item) => {
                const IconComp = item.icon;
                const isSelected = goal === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setGoal(item.id)}
                    className={`p-3 text-left rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                      isSelected
                        ? 'bg-yellow-400 border-black shadow-sm ring-1 ring-black'
                        : 'bg-zinc-50 border-zinc-200 hover:border-black hover:bg-white text-zinc-800'
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center ${
                        isSelected ? 'bg-black text-[#FACC15]' : 'bg-white border border-zinc-200 text-black'
                      }`}
                    >
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className={`text-xs font-black ${isSelected ? 'text-black' : 'text-zinc-900'}`}>
                        {item.label}
                      </div>
                      <div className={`text-[11px] line-clamp-1 ${isSelected ? 'text-zinc-800 font-medium' : 'text-zinc-500'}`}>
                        {item.desc}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Training Level */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-black uppercase tracking-wider text-black flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-black text-[#FACC15] text-[11px] font-mono font-black flex items-center justify-center">2</span>
                <span>Gym Experience Level:</span>
              </label>
              <span className="text-[11px] text-zinc-500 font-medium">Adjusts dosage & intensity</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'beginner', label: 'Beginner', sub: '< 1 Year' },
                { id: 'intermediate', label: 'Intermediate', sub: '1-3 Years' },
                { id: 'advanced', label: 'Advanced', sub: '3+ Years' }
              ].map((lvl) => {
                const isSelected = level === lvl.id;
                return (
                  <button
                    key={lvl.id}
                    onClick={() => setLevel(lvl.id as TrainingLevel)}
                    className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-black border-black text-[#FACC15] font-black shadow-sm'
                        : 'bg-zinc-50 border-zinc-200 text-zinc-700 hover:border-black hover:bg-white'
                    }`}
                  >
                    <div className="text-xs font-black">{lvl.label}</div>
                    <div className={`text-[10px] ${isSelected ? 'text-yellow-400 font-bold' : 'text-zinc-500'}`}>
                      {lvl.sub}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Recommended Stack Display */}
          <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 animate-pulse" />
                <span className="text-xs font-black text-black uppercase tracking-wider">
                  Recommended Stack for {currentGoalLabel}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {bundleDiscount > 0 && (
                  <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                    5% Bundle Off
                  </span>
                )}
                <span className="text-xs font-mono text-black font-black bg-yellow-400 px-2.5 py-1 rounded-lg border border-yellow-500 shadow-2xs">
                  Stack: {formatCurrency(stackTotal)}
                </span>
              </div>
            </div>

            {/* Stack Items */}
            <div className="space-y-2">
              {recommendedStack.map((item, index) => {
                const isChecked = selectedProductIds.includes(item.id);
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleProduct(item.id)}
                    className={`flex items-center justify-between p-3 rounded-xl border transition-all cursor-pointer ${
                      isChecked
                        ? 'bg-white border-zinc-300 shadow-2xs hover:border-black'
                        : 'bg-zinc-100/60 border-zinc-200 opacity-60'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      {/* Checkbox */}
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border transition-colors ${
                          isChecked ? 'bg-black border-black text-[#FACC15]' : 'border-zinc-300 bg-white'
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>

                      {/* Product Thumbnail */}
                      <div className="w-12 h-12 rounded-lg bg-white border border-zinc-200 p-1 shrink-0 overflow-hidden flex items-center justify-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-contain"
                        />
                      </div>

                      {/* Name & Tagline */}
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-[10px] font-mono font-extrabold uppercase bg-yellow-400/20 text-black px-1.5 py-0.5 rounded">
                            {item.subTypeLabel || item.categoryLabel}
                          </span>
                          <span className="text-xs font-black text-black line-clamp-1">
                            {item.name}
                          </span>
                        </div>
                        <p className="text-[11px] text-zinc-500 line-clamp-1 mt-0.5">
                          {item.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="text-right shrink-0 ml-3">
                      <div className="font-mono text-xs font-black text-black">
                        {formatCurrency(item.price)}
                      </div>
                      <div className="text-[10px] font-mono text-zinc-400 line-through">
                        {formatCurrency(item.mrp)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Authenticity Pledge Banner */}
            <div className="pt-2 flex items-center justify-between text-xs text-zinc-600 border-t border-zinc-200/80">
              <div className="flex items-center gap-1.5 font-bold text-black">
                <ShieldCheck className="w-4 h-4 text-black shrink-0" />
                <span>Handpicked by Pratham Chachra ({STORE_INFO.phone})</span>
              </div>
              <span className="font-black text-black bg-yellow-400 px-2 py-0.5 rounded text-[10px] border border-yellow-500">
                Pan-India Free Express Delivery
              </span>
            </div>
          </div>
        </div>

        {/* Action Row - Sticky Footer */}
        <div className="p-4 sm:p-5 bg-white border-t border-zinc-200 shrink-0 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={handleAddAll}
            disabled={activeProducts.length === 0}
            className={`py-3.5 px-4 rounded-xl text-xs font-black flex items-center justify-center gap-2 transition-all cursor-pointer ${
              added
                ? 'bg-black text-[#FACC15] border border-yellow-500'
                : 'bg-yellow-400 hover:bg-yellow-500 text-black active:scale-[0.98] shadow-md border border-yellow-500'
            }`}
          >
            {added ? (
              <>
                <Check className="w-4 h-4 text-[#FACC15]" />
                <span>Stack Added to Bag!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4 text-black" />
                <span>Add Stack to Bag ({formatCurrency(stackTotal)})</span>
              </>
            )}
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3.5 px-4 rounded-xl text-xs font-black text-[#FACC15] bg-black hover:bg-zinc-800 border border-yellow-500/40 flex items-center justify-center gap-2 transition-colors active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4 text-[#FACC15]" />
            <span>Discuss Stack on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
