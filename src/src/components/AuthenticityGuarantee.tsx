import React from 'react';
import { ShieldCheck, Lock, FileCheck, PhoneCall, Sparkles } from 'lucide-react';
import { STORE_INFO } from '../data/products';
import { getGeneralWhatsAppConsultationLink } from '../utils/whatsapp';
import { BrandLogo } from './BrandLogo';

export const AuthenticityGuarantee: React.FC = () => {
  return (
    <section id="authenticity" className="py-16 sm:py-20 bg-slate-50/60 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-wider uppercase text-black">
            <BrandLogo variant="emblem" size="sm" />
            <span>100% CERTIFIED PURITY · ZERO COUNTERFEIT PROMISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-black tracking-tight">
            Our Authenticity Guarantee
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed text-balance">
            The Indian fitness market faces widespread issues with fake supplements and adulterated powders.
            At <strong className="text-black">The Prime Nutritions</strong>, founder Pratham Chachra personally inspects every batch with official importer scratch codes so you only ingest verified nutrients.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-zinc-200 hover:border-black transition-all hover:shadow-lg space-y-3">
            <div className="w-10 h-10 rounded-xl bg-yellow-400 border border-yellow-500 flex items-center justify-center text-black shadow-2xs">
              <ShieldCheck className="w-5 h-5 text-black" />
            </div>
            <h3 className="font-display font-black text-base text-black">Direct Authorized Sourcing</h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Never sourced from third-party gray wholesalers. Every tub comes directly from authorized brand importers with tamper-proof holographic seals.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-zinc-200 hover:border-black transition-all hover:shadow-lg space-y-3">
            <div className="w-10 h-10 rounded-xl bg-yellow-400 border border-yellow-500 flex items-center justify-center text-black shadow-2xs">
              <FileCheck className="w-5 h-5 text-black" />
            </div>
            <h3 className="font-display font-black text-base text-black">Scratch Code Verification</h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Every tub features an intact scratch code. Verify your unique batch on the brand’s official website or app in under 30 seconds.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-zinc-200 hover:border-black transition-all hover:shadow-lg space-y-3">
            <div className="w-10 h-10 rounded-xl bg-black border border-black flex items-center justify-center text-[#FACC15] shadow-2xs">
              <Sparkles className="w-5 h-5 text-[#FACC15]" />
            </div>
            <h3 className="font-display font-black text-base text-black">Zero Amino Spiking</h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Label accuracy guaranteed. No cheap glycine, taurine, or non-protein nitrogen compounds used to fake protein concentration tests.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-zinc-200 hover:border-black transition-all hover:shadow-lg space-y-3">
            <div className="w-10 h-10 rounded-xl bg-yellow-400 border border-yellow-500 flex items-center justify-center text-black shadow-2xs">
              <Lock className="w-5 h-5 text-black" />
            </div>
            <h3 className="font-display font-black text-base text-black">Founder Accountability</h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Personal oversight by Pratham Chachra. If any batch fails verification, we offer an immediate replacement or 100% refund without questions.
            </p>
          </div>
        </div>

        {/* Verification Action Banner */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-white border-2 border-zinc-200 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display font-black text-lg text-black">Have questions about a specific batch or label?</h4>
            <p className="text-xs text-zinc-600">
              Speak directly with Pratham Chachra before ordering. We verify batch expiration dates and import paperwork on WhatsApp.
            </p>
          </div>

          <a
            href={getGeneralWhatsAppConsultationLink('Verification of batch and authenticity')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-black text-xs sm:text-sm rounded-xl whitespace-nowrap transition-colors flex items-center gap-2 shadow-xs border border-yellow-500"
          >
            <PhoneCall className="w-4 h-4 text-black" />
            <span>Verify on WhatsApp ({STORE_INFO.phone})</span>
          </a>
        </div>
      </div>
    </section>
  );
};
