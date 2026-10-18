import React, { useState, useEffect } from 'react';
import { ArrowDown, MessageCircle, ChevronLeft, ChevronRight, ShieldCheck, Truck, Sparkles, Phone, Award } from 'lucide-react';
import { STORE_INFO } from '../data/products';
import { getGeneralWhatsAppConsultationLink } from '../utils/whatsapp';
import { BrandLogo } from './BrandLogo';

import heroWheyImg from '../assets/images/hero_gym_supplements_1792314108398.jpg';
import wheyImg from '../assets/images/product_whey_gold_tub_1792314108089.jpg';
import preworkoutImg from '../assets/images/product_preworkout_tub_1792314109394.jpg';
import massGainerImg from '../assets/images/product_mass_gainer_1792314130550.jpg';
import carnitineImg from '../assets/images/product_carnitine_cla_1792315865359.jpg';

interface HeroProps {
  onExploreClick: () => void;
  onOpenAdvisor: () => void;
  onSelectCategory: (category: string, subType?: string) => void;
}

interface BannerSlide {
  id: string;
  badge: string;
  title: string;
  highlight: string;
  subtitle: string;
  image: string;
  startingPrice: string;
  category: string;
  subType?: string;
  accentBg: string;
}

const SLIDES: BannerSlide[] = [
  {
    id: 'whey',
    badge: 'SIGNATURE SERIES · 100% GENUINE',
    title: 'THE PRIME GOLD',
    highlight: 'WHEY ISOLATE',
    subtitle: '27g cold-filtered grass fed protein, zero sugar, 6.2g BCAAs for lean muscle repair.',
    image: heroWheyImg,
    startingPrice: '₹4,899',
    category: 'whey',
    subType: 'isolate',
    accentBg: 'from-yellow-100/40 via-white to-zinc-50'
  },
  {
    id: 'essentials',
    badge: 'EXPLOSIVE GYM DRIVE',
    title: 'ALPHA SURGE &',
    highlight: 'CREATINE MONOHYDRATE',
    subtitle: '4000mg Citrulline Malate + 200 Mesh Creapure® grade micronized ATP resynthesis.',
    image: preworkoutImg,
    startingPrice: '₹1,199',
    category: 'essentials',
    subType: 'pre-workout',
    accentBg: 'from-zinc-100 via-white to-yellow-50'
  },
  {
    id: 'gainers',
    badge: 'HEAVYWEIGHT BULKING',
    title: 'TITAN GAIN',
    highlight: 'MASS GAINER',
    subtitle: '52g multi-phase sustained proteins and clean oat carbs delivering 1,280 dense calories.',
    image: massGainerImg,
    startingPrice: '₹2,499',
    category: 'gainers',
    subType: 'bulk-gainer',
    accentBg: 'from-yellow-50 via-white to-zinc-100/60'
  },
  {
    id: 'fatloss',
    badge: 'METABOLIC ACCELERATORS',
    title: 'ELITE LIQUID',
    highlight: 'L-CARNITINE & CLA',
    subtitle: 'Pure liquid carnitine shuttles stubborn fatty acids into cellular mitochondria for ATP.',
    image: carnitineImg,
    startingPrice: '₹1,199',
    category: 'fat-loss',
    subType: 'l-carnitine',
    accentBg: 'from-zinc-50 via-white to-yellow-50/50'
  }
];

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onOpenAdvisor, onSelectCategory }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto sliding carousel
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const slide = SLIDES[currentSlide];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const handleSlideShopClick = () => {
    onSelectCategory(slide.category, slide.subType);
    onExploreClick();
  };

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 pt-6 pb-12 lg:pt-10 lg:pb-16 border-b border-slate-200"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Banner Sliding Container */}
        <div className={`relative rounded-3xl overflow-hidden border border-slate-200 bg-gradient-to-br ${slide.accentBg} p-6 sm:p-10 lg:p-12 shadow-lg transition-all duration-700`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Visual copy */}
            <div className="lg:col-span-7 space-y-5 text-left">
              {/* Badge & Owner Lockup */}
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-[#FACC15] rounded-full text-xs font-black shadow-xs border border-yellow-500/40">
                  <BrandLogo variant="emblem" size="sm" />
                  <span>{slide.badge}</span>
                </div>
                <span className="text-xs text-zinc-600 font-bold">
                  Owner: Pratham Chachra ({STORE_INFO.phone})
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight text-black leading-[1.08]">
                {slide.title} <br />
                <span className="text-yellow-500 bg-black px-2 py-0.5 rounded-lg inline-block mt-1">{slide.highlight}</span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-zinc-700 leading-relaxed max-w-xl font-medium">
                {slide.subtitle}
              </p>

              {/* Price Callout & CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={handleSlideShopClick}
                  className="px-6 py-3.5 bg-yellow-400 hover:bg-yellow-500 text-black font-black text-sm rounded-xl transition-all active:scale-95 shadow-md flex items-center gap-2 shrink-0 cursor-pointer border border-yellow-500"
                >
                  <span>Shop This Collection</span>
                  <ArrowDown className="w-4 h-4 text-black" />
                </button>

                <a
                  href={getGeneralWhatsAppConsultationLink(slide.title + ' ' + slide.highlight)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 bg-black hover:bg-zinc-800 text-[#FACC15] border border-black font-black text-sm rounded-xl transition-all active:scale-95 flex items-center gap-2 shrink-0 shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#FACC15]" />
                  <span>Order on WhatsApp ({STORE_INFO.phone})</span>
                </a>
              </div>

              {/* Trust Badges Bar */}
              <div className="pt-3 border-t border-zinc-200 flex flex-wrap items-center gap-4 text-xs font-extrabold text-black">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-black" />
                  <span>100% Scratch Verification</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-black" />
                  <span>Free Express Shipping</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-yellow-500" />
                  <span>Cashfree UPI & Cards</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Asset Stage */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-md group">
                <img
                  src={slide.image}
                  alt={slide.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-200 shadow-xs flex items-center gap-2">
                  <BrandLogo variant="emblem" size="sm" />
                  <span className="text-[11px] font-bold text-slate-800 uppercase font-mono">100% Genuine</span>
                </div>

                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-zinc-200 shadow-xs text-right">
                  <span className="text-[10px] text-zinc-500 font-medium block">Starting at</span>
                  <span className="text-sm font-black font-mono text-black">{slide.startingPrice}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Slider Prev / Next Controls */}
          <button
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white border border-zinc-300 shadow-md flex items-center justify-center text-zinc-800 hover:text-black transition-colors z-20 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white border border-zinc-300 shadow-md flex items-center justify-center text-zinc-800 hover:text-black transition-colors z-20 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Slide Indicator Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
            {SLIDES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentSlide === idx ? 'w-8 bg-black' : 'w-2 bg-yellow-400 hover:bg-yellow-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* 4 Highlights strip below sliding banner */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-2xl border border-zinc-200 shadow-2xs flex items-center gap-3 hover:border-black transition-colors">
            <div className="w-10 h-10 rounded-xl bg-yellow-400 border border-yellow-500 flex items-center justify-center text-black shrink-0 shadow-2xs">
              <ShieldCheck className="w-5 h-5 text-black" />
            </div>
            <div>
              <div className="text-xs font-black text-black">100% Genuine Seals</div>
              <div className="text-[11px] text-zinc-500">Untouched scratch codes</div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-zinc-200 shadow-2xs flex items-center gap-3 hover:border-black transition-colors">
            <div className="w-10 h-10 rounded-xl bg-yellow-400 border border-yellow-500 flex items-center justify-center text-black shrink-0 shadow-2xs">
              <Truck className="w-5 h-5 text-black" />
            </div>
            <div>
              <div className="text-xs font-black text-black">Free Express Delivery</div>
              <div className="text-[11px] text-zinc-500">Pan-India on ₹999+</div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-zinc-200 shadow-2xs flex items-center gap-3 hover:border-black transition-colors">
            <div className="w-10 h-10 rounded-xl bg-black border border-black flex items-center justify-center text-[#FACC15] shrink-0 shadow-2xs">
              <Sparkles className="w-5 h-5 text-[#FACC15]" />
            </div>
            <div>
              <div className="text-xs font-black text-black">Cashfree UPI & Cards</div>
              <div className="text-[11px] text-zinc-500">Official hosted checkout</div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-zinc-200 shadow-2xs flex items-center gap-3 hover:border-black transition-colors">
            <div className="w-10 h-10 rounded-xl bg-yellow-400 border border-yellow-500 flex items-center justify-center text-black shrink-0 shadow-2xs">
              <Phone className="w-5 h-5 text-black" />
            </div>
            <div>
              <div className="text-xs font-black text-black">WhatsApp: {STORE_INFO.phone}</div>
              <div className="text-[11px] text-zinc-500">Direct Pratham Chachra</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
