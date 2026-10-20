import React, { useState } from 'react';
import { X, ShoppingBag, MessageCircle, Star, ShieldCheck, Check } from 'lucide-react';
import { Product } from '../types';
import { formatCurrency, getProductDirectWhatsAppLink } from '../utils/whatsapp';
import { STORE_INFO } from '../data/products';
import { BrandLogo } from './BrandLogo';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, selectedFlavour: string, selectedSize: string, quantity: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart
}) => {
  if (!product) return null;

  const [selectedFlavour, setSelectedFlavour] = useState(product.flavours[0] || 'Standard');
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || 'Standard');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const discountPercent = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  const handleAdd = () => {
    onAddToCart(product, selectedFlavour, selectedSize, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const directWhatsAppLink = getProductDirectWhatsAppLink(product, selectedFlavour, selectedSize);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden z-10 my-8 flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/80">
          <div className="flex items-center gap-2.5 text-xs font-mono">
            <BrandLogo variant="emblem" size="sm" />
            <span className="text-black font-black uppercase">{product.categoryLabel}</span>
            <span className="text-zinc-300">·</span>
            <span className="text-zinc-600 font-bold">{product.goalLabel}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-black hover:bg-zinc-100 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left: Product Visual */}
            <div className="md:col-span-5 space-y-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-white border border-zinc-200 p-4 flex items-center justify-center shadow-xs">
                <img
                  src={product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain drop-shadow-md"
                />
                <div className="absolute top-3 left-3 bg-black/90 border border-yellow-500/40 text-[#FACC15] text-xs font-mono font-black px-2.5 py-1 rounded-md shadow-xs">
                  {discountPercent}% OFF
                </div>
              </div>

              {/* Authenticity Pledge Box */}
              <div className="p-4 rounded-2xl bg-yellow-400/15 border border-yellow-300 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-black shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <div className="font-black text-black">100% Genuine Guaranteed</div>
                  <p className="text-zinc-700 leading-relaxed font-medium">
                    Personally sourced & authenticated by store owner <strong>{STORE_INFO.owner}</strong>.
                    Direct helpline: <strong>{STORE_INFO.phone}</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Purchase Controls & Info */}
            <div className="md:col-span-7 space-y-5">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-500" />
                    <span className="font-mono text-xs font-black text-black">{product.rating}</span>
                  </div>
                  <span className="text-xs text-zinc-300">·</span>
                  <span className="text-xs text-zinc-600 font-bold">{product.reviewsCount} verified lifters</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-display font-black text-black leading-tight">
                  {product.name}
                </h2>
                <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Price */}
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-baseline justify-between">
                <div>
                  <div className="text-xs text-zinc-500 mb-0.5 font-bold">Special Offer Price:</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-black font-mono text-black tabular-nums">
                      {formatCurrency(product.price)}
                    </span>
                    <span className="text-sm text-zinc-400 line-through font-mono tabular-nums">
                      {formatCurrency(product.mrp)}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-extrabold text-black bg-yellow-400 px-2 py-1 rounded border border-yellow-500">
                    Save {formatCurrency(product.mrp - product.price)}
                  </span>
                  <div className="text-[11px] text-slate-500 mt-1">All Taxes Included</div>
                </div>
              </div>

              {/* Variant Selector: Flavour */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Select Flavour: <span className="text-slate-900 font-semibold">{selectedFlavour}</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.flavours.map((f) => (
                    <button
                      key={f}
                      onClick={() => setSelectedFlavour(f)}
                      className={`px-3 py-1.5 text-xs rounded-lg border transition-all ${
                        selectedFlavour === f
                          ? 'bg-yellow-400 border-black text-black font-black shadow-2xs'
                          : 'bg-white border-zinc-200 text-zinc-700 hover:border-black hover:bg-zinc-50'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {/* Variant Selector: Size */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-600">
                  Select Size / Tub: <span className="text-black font-extrabold">{selectedSize}</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`px-3 py-1.5 text-xs rounded-lg border transition-all ${
                        selectedSize === s
                          ? 'bg-yellow-400 border-black text-black font-black shadow-2xs'
                          : 'bg-white border-zinc-200 text-zinc-700 hover:border-black hover:bg-zinc-50'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity stepper & Action Buttons */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-zinc-300 rounded-xl bg-zinc-50 overflow-hidden">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3.5 py-2.5 text-zinc-700 hover:text-black hover:bg-zinc-200 text-sm font-bold cursor-pointer"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 font-mono text-sm font-black text-black tabular-nums">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3.5 py-2.5 text-zinc-700 hover:text-black hover:bg-zinc-200 text-sm font-bold cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={handleAdd}
                    className={`flex-1 py-3.5 px-5 rounded-xl text-sm font-black flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer ${
                      added
                        ? 'bg-black text-[#FACC15] border border-yellow-500'
                        : 'bg-yellow-400 hover:bg-yellow-500 text-black active:scale-95 border border-yellow-500'
                    }`}
                  >
                    {added ? (
                      <>
                        <Check className="w-4 h-4 text-[#FACC15]" />
                        <span>Added to Bag ({quantity})</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4 text-black" />
                        <span>Add {quantity} to Bag</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Direct WhatsApp Ordering Button */}
                <a
                  href={directWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl text-sm font-black text-[#FACC15] bg-black hover:bg-zinc-800 flex items-center justify-center gap-2 transition-colors shadow-xs border border-yellow-500/30"
                >
                  <MessageCircle className="w-4 h-4 text-[#FACC15]" />
                  <span>Order Directly via WhatsApp ({STORE_INFO.phone})</span>
                </a>
              </div>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="border-t border-zinc-200 pt-6">
            <h3 className="text-xs font-black uppercase tracking-wider text-black flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-yellow-400" />
              Key Formula Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.keyHighlights.map((hl, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-800 bg-zinc-50 p-3 rounded-xl border border-zinc-200">
                  <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

        
          {/* Official Nutrition Facts Panel */}
          <div className="border-t border-slate-200 pt-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Official Supplement & Nutrition Facts
              </h3>
              <span className="text-xs text-slate-500 font-mono">
                Serving Size: {product.nutritionFacts?.servingSize || 'See product label'}
              </span>
            </div>

            <div className="border border-slate-300 rounded-xl overflow-hidden bg-white shadow-2xs">
              <div className="divide-y divide-slate-200 text-xs">
                {product.nutritionFacts?.nutrients?.length ? (
                  product.nutritionFacts.nutrients.map((item, i) => (
                    <div key={i} className="px-4 py-2.5 flex items-center justify-between hover:bg-slate-50">
                      <span className="text-slate-800 font-medium">{item.label}</span>
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-slate-900 font-bold tabular-nums">{item.amount}</span>
                        {item.dailyValue && (
                          <span className="font-mono text-slate-400 text-[11px] w-12 text-right">
                            {item.dailyValue}
                          </span>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="px-4 py-3 text-slate-500">
                    Nutrition facts are not available yet. Please check the product label for verified information.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Suggested Usage / Directions */}
          <div className="border-t border-slate-200 pt-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
              Recommended Usage & Timing
            </h3>
            <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
              {product.howToUse}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
