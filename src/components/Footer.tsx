import React from 'react';
import { STORE_INFO } from '../data/products';
import { Phone, Instagram, MessageCircle } from 'lucide-react';
import { getGeneralWhatsAppConsultationLink } from '../utils/whatsapp';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-yellow-500/30 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <BrandLogo variant="emblem" size="md" />
              <div className="flex flex-col">
                <span className="font-display font-black tracking-tight text-white text-lg">
                  THE PRIME <span className="text-[#FACC15]">NUTRITIONS</span>
                </span>
                <span className="text-[11px] font-bold text-yellow-400">
                  ESTD 2026 · Pure Sports Nutrition
                </span>
              </div>
            </div>

            <p className="text-zinc-400 max-w-md leading-relaxed text-xs">
              Direct official store for certified, 100% genuine gym supplements. Owned and operated by <strong>{STORE_INFO.owner}</strong>.
              Pure whey isolate, micronized creatine, pre-workout, mass gainer, and daily athletic vitamins.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs">
              <a
                href={getGeneralWhatsAppConsultationLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition-colors flex items-center gap-1.5 font-bold font-mono text-white"
              >
                <MessageCircle className="w-4 h-4 text-[#FACC15]" />
                <span>WhatsApp: {STORE_INFO.phone}</span>
              </a>
              <span className="text-zinc-700">·</span>
              <a
                href={`tel:${STORE_INFO.phone}`}
                className="hover:text-yellow-400 transition-colors flex items-center gap-1.5 font-bold font-mono text-white"
              >
                <Phone className="w-3.5 h-3.5 text-[#FACC15]" />
                <span>Call: {STORE_INFO.phone}</span>
              </a>
              <span className="text-zinc-700">·</span>
              <a
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-colors flex items-center gap-1.5 text-zinc-300"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <span>@{STORE_INFO.instagram}</span>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <h4 className="font-black text-white uppercase tracking-wider text-[11px]">
              Store Categories
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <a href="#supplements" className="hover:text-[#FACC15] transition-colors">
                  Whey Protein & Isolate
                </a>
              </li>
              <li>
                <a href="#supplements" className="hover:text-[#FACC15] transition-colors">
                  Mass & Bulk Gainer
                </a>
              </li>
              <li>
                <a href="#supplements" className="hover:text-[#FACC15] transition-colors">
                  Pre Workout & Creatine
                </a>
              </li>
              <li>
                <a href="#supplements" className="hover:text-[#FACC15] transition-colors">
                  Fat Burner & L-Carnitine
                </a>
              </li>
              <li>
                <a href="#supplements" className="hover:text-[#FACC15] transition-colors">
                  Vitamins & Joint Health
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-3">
            <h4 className="font-black text-white uppercase tracking-wider text-[11px]">
              Customer Care
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li>• Direct Doorstep Pan-India Shipping</li>
              <li>• Cash on Delivery (COD) Supported</li>
              <li>• Scratch Code Batch Verification</li>
              <li>• Cashfree Online UPI & Card Payments</li>
              <li>• Calling Helpline: {STORE_INFO.phone}</li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-12 pt-6 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <p>
            © {new Date().getFullYear()} The Prime Nutritions. Owned and managed by {STORE_INFO.owner}.
          </p>
          <p className="max-w-xl text-center md:text-right">
            Dietary fitness supplements intended for healthy adults. Not intended to diagnose, treat, or cure any medical condition.
          </p>
        </div>
      </div>
    </footer>
  );
};
