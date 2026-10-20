import React, { useState, useEffect } from 'react';
import { ArrowDown, MessageCircle, ChevronLeft, ChevronRight, ShieldCheck, Truck, Sparkles, Phone, ArrowRight, Zap, Flame, Dumbbell } from 'lucide-react';
import { STORE_INFO } from '../data/products';
import { getGeneralWhatsAppConsultationLink } from '../utils/whatsapp';
import { BrandLogo } from './BrandLogo';

import mbBiozymeImg from '../assets/images/mb_biozyme_whey.jpg';
import mbMassGainerImg from '../assets/images/mb_mass_gainer.jpg';
import mbCreatineImg from '../assets/images/mb_creatine.jpg';
import mbCarnitineImg from '../assets/images/mb_carnitine.jpg';
import mbPreworkoutImg from '../assets/images/mb_preworkout.jpg';
import oneScienceImg from '../assets/images/one_science_whey.jpg';
import gncImg from '../assets/images/gnc_pro_whey.jpg';
import atomImg from '../assets/images/asitis_atom_whey.jpg';
import nutrabayPeaImg from '../assets/images/nutrabay_pea_protein.jpg';

interface HeroProps {
  onExploreClick: () => void;
  onOpenAdvisor: () => void;
  onSelectCategory: (category: string, subType?: string) => void;
}

interface BannerSlide {
  id: string;
  badge: string;
  categoryTag: string;
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
    id: 'mb-biozyme',
    badge: 'TOP SELLER · CLINICALLY PROVEN 50% HIGHER ABSORPTION',
    categoryTag: 'WHEY PROTEIN',
    title: 'MUSCLEBLAZE BIOZYME',
    highlight: 'PERFORMANCE WHEY',
    subtitle: 'Clinically proven 50% higher protein absorption & 60% higher BCAA bioavailability with patented EAF® formula.',
    image: mbBiozymeImg,
    startingPrice: '₹2,499',
    category: 'whey',
    subType: 'whey-protein',
    accentBg: 'from-yellow-100/50 via-white to-zinc-50'
  },
  {
    id: 'mb-gainer',
    badge: 'HARD BULKING · 1,120 DENSE CALORIES',
    categoryTag: 'BULK GAINER',
    title: 'MUSCLEBLAZE SUPER GAINER',
    highlight: 'XXL BULK FORMULA',
    subtitle: '45g multi-source protein, 1,120 calories & 27 vitamins and minerals engineered for hardgainers putting on serious muscle size.',
    image: mbMassGainerImg,
    startingPrice: '₹2,199',
    category: 'gainers',
    subType: 'bulk-gainer',
    accentBg: 'from-amber-100/40 via-white to-yellow-50/60'
  },
  {
    id: 'mb-creatine',
    badge: '100% PURE · 200 MESH MICRONIZED',
    categoryTag: 'CREATINE',
    title: 'MUSCLEBLAZE MICRONIZED',
    highlight: 'CREATINE MONOHYDRATE',
    subtitle: 'Ultra-pure 200 mesh pharmaceutical-grade powder for explosive barbell ATP strength and intracellular muscle hydration.',
    image: mbCreatineImg,
    startingPrice: '₹999',
    category: 'essentials',
    subType: 'creatine',
    accentBg: 'from-yellow-50 via-white to-zinc-100/70'
  },
  {
    id: 'mb-carnitine',
    badge: 'FAST FAT BURN · 3300MG CLINICAL STRENGTH',
    categoryTag: 'L-CARNITINE',
    title: 'MUSCLEBLAZE LIQUID',
    highlight: 'L-CARNITINE 3300',
    subtitle: 'Ultra-fast liquid absorption with Vitamin B5. Shuttles stubborn fatty acids into mitochondria to produce clean workout energy.',
    image: mbCarnitineImg,
    startingPrice: '₹1,299',
    category: 'fat-loss',
    subType: 'l-carnitine',
    accentBg: 'from-orange-50 via-white to-yellow-50/70'
  },
  {
    id: 'mb-preworkout',
    badge: 'SAVAGE PUMP · 2000MG CITRULLINE + CAFFEINE',
    categoryTag: 'PRE WORKOUT',
    title: 'MUSCLEBLAZE PRE WORKOUT',
    highlight: '200 SAVAGE PUMP',
    subtitle: '2000mg L-Citrulline Malate + 1500mg Beta-Alanine + 200mg Instant Caffeine for razor-sharp gym aggression and skin-splitting pumps.',
    image: mbPreworkoutImg,
    startingPrice: '₹1,299',
    category: 'essentials',
    subType: 'pre-workout',
    accentBg: 'from-yellow-100/40 via-white to-zinc-100'
  },
  {
    id: 'one-science',
    badge: 'EUROPEAN GRADE · 25G GRASS-FED PROTEIN',
    categoryTag: 'WHEY PROTEIN',
    title: 'ONE SCIENCE NUTRITION',
    highlight: '100% PREMIUM WHEY',
    subtitle: '25g Grass-fed European whey protein, 6.6g BCAAs & 5.2g Glutamine for rapid lean muscular recovery and dense hypertrophy.',
    image: oneScienceImg,
    startingPrice: '₹4,299',
    category: 'whey',
    subType: 'whey-protein',
    accentBg: 'from-zinc-100 via-white to-yellow-50/60'
  },
  {
    id: 'nutrabay-pea',
    badge: '100% VEGAN PLANT · ZERO BLOATING',
    categoryTag: 'PEA PROTEIN',
    title: 'NUTRABAY GOLD HYDROLYZED',
    highlight: '100% PEA PROTEIN',
    subtitle: '25g Complete plant protein from yellow peas with 4.6g BCAAs. Hypoallergenic, dairy-free & verified 100% pure.',
    image: nutrabayPeaImg,
    startingPrice: '₹1,899',
    category: 'whey',
    subType: 'pea-protein',
    accentBg: 'from-emerald-50/40 via-white to-yellow-50/50'
  },
  {
    id: 'atom-whey',
    badge: 'POWER WITHIN · 24G PURE WHEY',
    categoryTag: 'WHEY PROTEIN',
    title: 'AS-IT-IS ATOM PWR',
    highlight: 'WHEY PROTEIN XL',
    subtitle: 'Lab-tested 24g pure whey protein with instant solubility and high leucine concentration for fast post-workout recovery.',
    image: atomImg,
    startingPrice: '₹1,799',
    category: 'whey',
    subType: 'whey-protein',
    accentBg: 'from-zinc-50 via-white to-yellow-50/50'
  },
  {
    id: 'gnc-pro',
    badge: 'WORLD TRUSTED SINCE 1935',
    categoryTag: 'WHEY PROTEIN',
    title: 'GNC PRO PERFORMANCE',
    highlight: '100% WHEY BLEND',
    subtitle: '24g Pure whey protein with DigeZyme enzyme blend for smooth digestion, zero bloating & zero added sugar.',
    image: gncImg,
    startingPrice: '₹3,199',
    category: 'whey',
    subType: 'whey-protein',
    accentBg: 'from-yellow-50 via-white to-zinc-100/60'
  }
];

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onOpenAdvisor, onSelectCategory }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto sliding carousel (every 5 seconds)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
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
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 pt-5 pb-10 lg:pt-8 lg:pb-14 border-b border-slate-200"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Banner Sliding Container */}
        <div className={`relative rounded-3xl overflow-hidden border-2 border-zinc-200 bg-gradient-to-br ${slide.accentBg} p-6 sm:p-9 lg:p-11 shadow-xl transition-all duration-700`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Visual copy */}
            <div className="lg:col-span-7 space-y-5 text-left">
              {/* Badge & Owner Lockup */}
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-[#FACC15] rounded-full text-xs font-black shadow-xs border border-yellow-500/40">
                  <BrandLogo variant="emblem" size="sm" />
                  <span>{slide.badge}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-yellow-400 text-black rounded-full text-xs font-black border border-yellow-500">
                  <span>CATEGORY: {slide.categoryTag}</span>
                </div>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight text-black leading-[1.08]">
                {slide.title} <br />
                <span className="text-yellow-500 bg-black px-2.5 py-0.5 rounded-lg inline-block mt-1">{slide.highlight}</span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-zinc-700 leading-relaxed max-w-xl font-medium">
                {slide.subtitle}
              </p>

              {/* Price Callout & CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  onClick={handleSlideShopClick}
                  className="px-6 py-3.5 bg-yellow-400 hover:bg-yellow-500 text-black font-black text-sm rounded-xl transition-all active:scale-95 shadow-md flex items-center gap-2 shrink-0 cursor-pointer border border-yellow-500"
                >
                  <span>Shop {slide.categoryTag}</span>
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
                  <Sparkles className="w-4 h-4 text-yellow-600" />
                  <span>Cashfree UPI & Cards</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Asset Stage - FULL SIZE PRESENTATION */}
            <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
              <div
                onClick={handleSlideShopClick}
                className="relative w-full max-w-md h-[380px] sm:h-[430px] lg:h-[460px] rounded-3xl overflow-hidden bg-white border-2 border-zinc-200/90 shadow-2xl p-4 sm:p-6 flex items-center justify-center group cursor-pointer hover:border-black transition-all duration-300"
              >
                {/* Full Size Product Photo - Complete Tub / Bottle Visibility (No Cropping) */}
                <img
                  key={slide.id}
                  src={slide.image}
                  alt={slide.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain filter drop-shadow-2xl transition-all duration-500 ease-out group-hover:scale-105 animate-in fade-in zoom-in-95"
                />

                {/* Top Category Badge */}
                <div className="absolute top-3.5 left-3.5 bg-black text-[#FACC15] px-3 py-1 rounded-xl border border-yellow-500/50 shadow-sm flex items-center gap-1.5 text-xs font-black tracking-wide">
                  <BrandLogo variant="emblem" size="sm" />
                  <span>{slide.categoryTag}</span>
                </div>

                {/* 100% Scratch Verification Badge */}
                <div className="absolute top-3.5 right-3.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg border border-zinc-200 shadow-xs flex items-center gap-1.5 text-[11px] font-black text-black">
                  <ShieldCheck className="w-3.5 h-3.5 text-black" />
                  <span>Genuine Seal</span>
                </div>

                {/* Bottom Price & Shop Callout */}
                <div className="absolute bottom-3.5 right-3.5 bg-black/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-yellow-500/60 shadow-md text-right flex items-center gap-2 group-hover:scale-105 transition-transform">
                  <div>
                    <span className="text-[10px] text-zinc-300 font-bold block uppercase tracking-wider">Store Price</span>
                    <span className="text-base font-black font-mono text-[#FACC15]">{slide.startingPrice}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#FACC15] group-hover:translate-x-0.5 transition-transform" />
                </div>

                {/* Full Size View Hint */}
                <div className="absolute bottom-3.5 left-3.5 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-zinc-200 text-[10px] font-bold text-zinc-700 shadow-xs">
                  Full View · Click to Shop
                </div>
              </div>
            </div>
          </div>

          {/* Slider Prev / Next Controls */}
          <button
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white border border-zinc-300 shadow-md flex items-center justify-center text-zinc-800 hover:text-black transition-colors z-20 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white border border-zinc-300 shadow-md flex items-center justify-center text-zinc-800 hover:text-black transition-colors z-20 cursor-pointer"
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

        {/* Quick Slide Category Switcher Strip - Allows direct 1-click jump to Gainer, Creatine, L-Carnitine, Pre-Workout, Whey, Pea Protein */}
        <div className="mt-4 flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
          <span className="text-[11px] font-black text-black uppercase tracking-wider mr-1">Quick Slides:</span>
          {SLIDES.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(idx)}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer ${
                currentSlide === idx
                  ? 'bg-black text-[#FACC15] shadow-md scale-105 border border-black'
                  : 'bg-white hover:bg-yellow-50 text-zinc-700 hover:text-black border border-zinc-200 shadow-2xs'
              }`}
            >
              <span>{s.categoryTag}</span>
              {currentSlide === idx && <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]" />}
            </button>
          ))}
        </div>

        {/* 4 Highlights strip below sliding banner */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
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
