import React from 'react';
import { Phone, Instagram, Mail, MessageCircle, CheckCircle2 } from 'lucide-react';
import { STORE_INFO } from '../data/products';
import { getGeneralWhatsAppConsultationLink } from '../utils/whatsapp';
import { BrandLogo } from './BrandLogo';

export const OwnerSection: React.FC = () => {
  return (
    <section id="about-owner" className="py-16 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Founder Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-black">
              <BrandLogo variant="emblem" size="sm" />
              <span>STORE FOUNDER & FITNESS ADVOCATE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight leading-tight">
              Meet Pratham Chachra
            </h2>

            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                "As an avid gym enthusiast and lifter, I experienced firsthand how challenging it is in India to find 100% genuine supplements without worrying about counterfeit powders or middleman markups.
              </p>
              <p>
                I established <strong className="text-slate-900 font-bold">The Prime Nutritions</strong> with a direct, transparent mission: to provide verified, batch-tested sports nutrition to lifters at fair prices. Every whey isolate tub, creatine jar, and pre-workout we stock is personally inspected before dispatch."
              </p>
            </div>

            {/* Core commitments */}
            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-zinc-700 font-bold">
                <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                <span>Zero fake batch guarantee with official importer scratch codes</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-zinc-700 font-bold">
                <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                <span>Direct WhatsApp accessibility for supplement dosage and stack advice</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-zinc-700 font-bold">
                <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                <span>Honest pricing with Pay on Delivery and direct WhatsApp booking</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Contact Card */}
          <div id="contact" className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-zinc-50 border-2 border-zinc-200 shadow-md space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-200">
                <div className="flex items-center gap-3">
                  <BrandLogo variant="emblem" size="md" />
                  <div>
                    <h3 className="font-display font-black text-lg text-black">Direct Contact & Orders</h3>
                    <p className="text-xs text-zinc-500">Connect directly with Pratham Chachra</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-black uppercase text-black bg-yellow-400 px-2 py-0.5 rounded border border-yellow-500">
                    VERIFIED OWNER
                  </span>
                </div>
              </div>

              {/* Contact Channels */}
              <div className="space-y-3 text-xs">
                {/* Phone */}
                <a
                  href={`tel:${STORE_INFO.phone}`}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-zinc-200 hover:border-black transition-all hover:shadow-xs group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-yellow-400 border border-yellow-500 flex items-center justify-center text-black group-hover:scale-105 transition-transform shadow-2xs">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-zinc-500 text-[11px] font-medium">Direct Call / Mobile</div>
                      <div className="font-mono font-black text-black text-sm tabular-nums">
                        {STORE_INFO.phone} / {STORE_INFO.altPhone}
                      </div>
                    </div>
                  </div>
                  <span className="text-black font-extrabold text-xs">Call Now →</span>
                </a>

                {/* WhatsApp */}
                <a
                  href={getGeneralWhatsAppConsultationLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-zinc-200 hover:border-black transition-all hover:shadow-xs group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-black border border-black flex items-center justify-center text-[#FACC15] group-hover:scale-105 transition-transform shadow-2xs">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-zinc-500 text-[11px] font-medium">WhatsApp Orders & Advice</div>
                      <div className="font-mono font-black text-black text-sm tabular-nums">
                        {STORE_INFO.whatsappNumber}
                      </div>
                    </div>
                  </div>
                  <span className="text-black font-extrabold text-xs">WhatsApp Order →</span>
                </a>

                {/* Instagram */}
                <a
                  href={STORE_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-zinc-200 hover:border-black transition-all hover:shadow-xs group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-yellow-400/20 border border-yellow-500/50 flex items-center justify-center text-black group-hover:scale-105 transition-transform">
                      <Instagram className="w-4 h-4 text-black" />
                    </div>
                    <div>
                      <div className="text-zinc-500 text-[11px] font-medium">Instagram Official Page</div>
                      <div className="font-black text-black text-sm">
                        @{STORE_INFO.instagram}
                      </div>
                    </div>
                  </div>
                  <span className="text-black font-extrabold text-xs">Follow Page →</span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${STORE_INFO.email}`}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-zinc-200 hover:border-black transition-all hover:shadow-xs group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-800 group-hover:scale-105 transition-transform">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-zinc-500 text-[11px] font-medium">Support Email</div>
                      <div className="font-bold text-black text-xs">
                        {STORE_INFO.email}
                      </div>
                    </div>
                  </div>
                  <span className="text-zinc-600 font-bold text-xs">Send Email →</span>
                </a>
              </div>

              {/* Working Hours note */}
              <div className="pt-2 border-t border-zinc-200 text-[11px] text-zinc-600 flex items-center justify-between font-bold">
                <span>Orders Dispatched Daily: Pan-India Delivery</span>
                <span className="text-black bg-yellow-400 px-2 py-0.5 rounded text-[10px]">Fast Dispatch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
