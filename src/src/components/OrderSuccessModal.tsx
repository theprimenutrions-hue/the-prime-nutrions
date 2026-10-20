import React, { useState } from 'react';
import { CheckCircle2, MessageCircle, Phone, Copy, Check, X, ShieldCheck } from 'lucide-react';
import { Order } from '../types';
import { formatCurrency, getWhatsAppOrderLink, buildWhatsAppOrderMessage } from '../utils/whatsapp';
import { STORE_INFO } from '../data/products';
import { BrandLogo } from './BrandLogo';

interface OrderSuccessModalProps {
  order: Order | null;
  onClose: () => void;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({ order, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!order) return null;

  const handleCopy = () => {
    const rawText = buildWhatsAppOrderMessage(
      order.items,
      order.customer,
      order.subtotal,
      order.deliveryFee,
      order.total,
      order.orderId
    );
    navigator.clipboard.writeText(rawText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappUrl = getWhatsAppOrderLink(
    order.items,
    order.customer,
    order.subtotal,
    order.deliveryFee,
    order.total,
    order.orderId
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden z-10 my-6">
        {/* Header */}
        <div className="px-6 py-5 bg-gradient-to-b from-yellow-50 to-white border-b border-zinc-200 text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex justify-center mb-2">
            <BrandLogo variant="emblem" size="md" />
          </div>

          <div className="w-10 h-10 rounded-full bg-yellow-400 border border-yellow-500 text-black flex items-center justify-center mx-auto mb-2 shadow-2xs">
            <CheckCircle2 className="w-6 h-6 text-black" />
          </div>

          <h2 className="text-xl font-display font-black text-black">Order Booking Placed!</h2>
          <p className="text-xs text-zinc-600 mt-0.5">
            Order Reference: <span className="font-mono font-black text-black">#{order.orderId}</span>
          </p>
        </div>

        {/* Order Details Body */}
        <div className="p-6 space-y-5 text-xs">
          <div className="bg-zinc-50 p-4 rounded-2xl border border-zinc-200 space-y-3">
            <div className="flex justify-between items-center pb-2 border-b border-zinc-200">
              <span className="text-zinc-500 font-medium">Order Method:</span>
              <span className="font-bold text-black uppercase">
                {order.method === 'whatsapp' ? 'WhatsApp Direct' : 'Cash on Delivery (COD)'}
              </span>
            </div>

            <div className="flex justify-between items-center pb-2 border-b border-zinc-200">
              <span className="text-zinc-500 font-medium">Customer:</span>
              <span className="text-black font-bold">{order.customer.name} ({order.customer.phone})</span>
            </div>

            {order.customer.address && (
              <div className="flex justify-between items-start pb-2 border-b border-zinc-200">
                <span className="text-zinc-500 font-medium">Delivery Address:</span>
                <span className="text-black font-medium text-right max-w-[220px]">
                  {order.customer.address}, {order.customer.city} {order.customer.pincode}
                </span>
              </div>
            )}

            {/* Items summary */}
            <div className="space-y-1.5 pt-1">
              <div className="text-zinc-500 font-bold uppercase text-[11px]">Items:</div>
              {order.items.map((it) => (
                <div key={it.id} className="flex justify-between text-zinc-700">
                  <span className="truncate pr-2 font-medium">
                    {it.quantity}x {it.product.name} ({it.selectedFlavour})
                  </span>
                  <span className="font-mono text-black font-bold shrink-0">
                    {formatCurrency(it.unitPrice * it.quantity)}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-zinc-200 flex justify-between text-sm font-black text-black">
              <span>Total Payable</span>
              <span className="font-mono text-black text-base">{formatCurrency(order.total)}</span>
            </div>
          </div>

          {/* Verification info */}
          <div className="p-3 bg-yellow-400/20 rounded-xl border border-yellow-300 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-black shrink-0 mt-0.5" />
            <p className="text-black leading-relaxed font-bold">
              Store Owner <strong>{STORE_INFO.owner}</strong> personally verifies all orders before dispatch.
              Send your order slip on WhatsApp ({STORE_INFO.phone}) for immediate confirmation.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 bg-yellow-400 hover:bg-yellow-500 text-black font-black text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md border border-yellow-500"
            >
              <MessageCircle className="w-4 h-4 text-black" />
              <span>Send Order on WhatsApp ({STORE_INFO.phone})</span>
            </a>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handleCopy}
                className="py-2.5 px-3 bg-zinc-100 hover:bg-zinc-200 text-black border border-zinc-300 rounded-xl font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-black" /> : <Copy className="w-3.5 h-3.5 text-zinc-600" />}
                <span>{copied ? 'Copied Slip' : 'Copy Order Text'}</span>
              </button>

              <a
                href={`tel:${STORE_INFO.phone}`}
                className="py-2.5 px-3 bg-zinc-100 hover:bg-zinc-200 text-black border border-zinc-300 rounded-xl font-bold flex items-center justify-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-black" />
                <span>Call Pratham</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
