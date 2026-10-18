import React, { useState } from 'react';
import { ShoppingBag, MessageCircle, Star, Eye, Check } from 'lucide-react';
import { Product } from '../types';
import { formatCurrency, getProductDirectWhatsAppLink } from '../utils/whatsapp';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, selectedFlavour: string, selectedSize: string) => void;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onViewDetails
}) => {
  const [selectedFlavour, setSelectedFlavour] = useState(product.flavours[0] || 'Standard');
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || 'Standard');
  const [addedNotice, setAddedNotice] = useState(false);

  const discountPercent = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, selectedFlavour, selectedSize);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 1800);
  };

  const directWhatsAppUrl = getProductDirectWhatsAppLink(product, selectedFlavour, selectedSize);

  return (
    <div
      onClick={() => onViewDetails(product)}
      className="group relative flex flex-col bg-white border border-zinc-200 hover:border-black rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
    >
      {/* Product Image Stage - High Quality Studio Display */}
      <div className="relative aspect-square w-full bg-white border-b border-zinc-100 p-3 overflow-hidden flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain object-center group-hover:scale-108 transition-transform duration-500 ease-out drop-shadow-sm"
          onError={(e) => {
            (e.target as HTMLElement).style.display = 'none';
          }}
        />

        {/* Top Badges: Black & Yellow */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <div className="bg-black/90 backdrop-blur-md text-[#FACC15] text-[11px] font-mono font-extrabold px-2.5 py-1 rounded-md shadow-xs border border-yellow-500/40">
            SAVE {discountPercent}%
          </div>
          {product.proteinPerServing && product.proteinPerServing !== '0g' && (
            <div className="bg-yellow-400 text-black text-[11px] font-mono font-extrabold px-2.5 py-1 rounded-md shadow-xs border border-black/20">
              {product.proteinPerServing} PROTEIN
            </div>
          )}
        </div>

        {/* Quick View Button on Hover */}
        <div className="absolute inset-0 bg-black/25 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(product);
            }}
            className="px-4 py-2 bg-black text-[#FACC15] text-xs font-black rounded-xl shadow-md border border-yellow-500/50 flex items-center gap-1.5 hover:bg-zinc-900 transition-colors cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 text-[#FACC15]" />
            <span>Nutrition Facts</span>
          </button>
        </div>
      </div>

      {/* Product Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-2">
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs text-zinc-500">
            <span className="font-mono text-[11px] uppercase tracking-wider font-extrabold text-black">
              {product.subTypeLabel || product.categoryLabel}
            </span>
            <div className="flex items-center gap-1 text-yellow-500">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-500" />
              <span className="font-mono text-black font-extrabold tabular-nums">{product.rating}</span>
              <span className="text-zinc-400">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-display font-black text-base sm:text-lg text-black group-hover:text-[#CA8A04] transition-colors leading-snug line-clamp-2">
            {product.name}
          </h3>

          {/* Tagline */}
          <p className="text-xs text-zinc-600 line-clamp-2 leading-relaxed">
            {product.tagline}
          </p>
        </div>

        {/* Variant Selectors */}
        <div className="space-y-2.5 pt-2 border-t border-zinc-100" onClick={(e) => e.stopPropagation()}>
          {/* Flavor options */}
          {product.flavours.length > 1 && (
            <div>
              <div className="text-[11px] text-zinc-500 mb-1 flex items-center justify-between font-medium">
                <span>Flavour:</span>
                <span className="text-black font-bold truncate max-w-[150px]">{selectedFlavour}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {product.flavours.map((flav) => (
                  <button
                    key={flav}
                    onClick={() => setSelectedFlavour(flav)}
                    className={`px-2 py-0.5 text-[11px] rounded-md border transition-colors cursor-pointer ${
                      selectedFlavour === flav
                        ? 'bg-black border-black text-[#FACC15] font-black'
                        : 'bg-zinc-50 border-zinc-200 text-zinc-700 hover:text-black hover:border-zinc-400'
                    }`}
                  >
                    {flav}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Size options */}
          {product.sizes.length > 1 && (
            <div>
              <div className="text-[11px] text-zinc-500 mb-1 flex items-center justify-between font-medium">
                <span>Packaging:</span>
                <span className="text-black font-bold">{selectedSize}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {product.sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`px-2 py-0.5 text-[11px] rounded-md border transition-colors cursor-pointer ${
                      selectedSize === sz
                        ? 'bg-black border-black text-[#FACC15] font-black'
                        : 'bg-zinc-50 border-zinc-200 text-zinc-700 hover:text-black hover:border-zinc-400'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Pricing and Action Buttons */}
        <div className="space-y-3 pt-2" onClick={(e) => e.stopPropagation()}>
          {/* Price lockup */}
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-xl sm:text-2xl font-black font-mono text-black tabular-nums">
                {formatCurrency(product.price)}
              </span>
              <span className="ml-2 text-xs text-zinc-400 line-through font-mono tabular-nums">
                {formatCurrency(product.mrp)}
              </span>
            </div>
            <span className="text-[11px] font-extrabold text-black bg-yellow-400 px-2 py-0.5 rounded border border-yellow-500/50">
              In Stock
            </span>
          </div>

          {/* Action Row */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleAdd}
              className={`w-full py-2.5 px-3 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer ${
                addedNotice
                  ? 'bg-black text-[#FACC15] border border-yellow-500'
                  : 'bg-yellow-400 hover:bg-yellow-500 text-black active:scale-95'
              }`}
            >
              {addedNotice ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Added!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5 text-black" />
                  <span>Add to Bag</span>
                </>
              )}
            </button>

            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 rounded-xl text-xs font-black text-[#FACC15] bg-black hover:bg-zinc-800 border border-black flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap"
              title="Order this product directly on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#FACC15]" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
