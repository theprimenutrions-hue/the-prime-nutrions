import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, Truck, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { CartItem, CustomerDetails, Order } from '../types';
import { formatCurrency, getWhatsAppOrderLink } from '../utils/whatsapp';
import { STORE_INFO } from '../data/products';
import { BrandLogo } from './BrandLogo';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (itemId: string, newQty: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
  onOrderPlaced: (order: Order) => void;
  onOpenCashfree: (
    items: CartItem[],
    customer: CustomerDetails,
    subtotal: number,
    deliveryFee: number,
    total: number
  ) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onOrderPlaced,
  onOpenCashfree
}) => {
  const [step, setStep] = useState<'cart' | 'checkout'>('cart');
  const [customer, setCustomer] = useState<CustomerDetails>({
    name: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    notes: ''
  });
  const [validationError, setValidationError] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const deliveryFee = subtotal >= STORE_INFO.deliveryThreshold || subtotal === 0 ? 0 : STORE_INFO.standardDeliveryFee;
  const total = subtotal + deliveryFee;

  const freeDeliveryRemaining = Math.max(0, STORE_INFO.deliveryThreshold - subtotal);

  const handleProceedToDetails = () => {
    if (items.length === 0) return;
    setStep('checkout');
  };

  const handleStartCashfree = () => {
    if (!customer.name.trim() || !customer.phone.trim()) {
      setValidationError('Please enter your Name and Phone Number to proceed.');
      return;
    }
    setValidationError('');
    onOpenCashfree(items, customer, subtotal, deliveryFee, total);
  };

  const handlePlaceOrder = (method: 'whatsapp' | 'cod') => {
    if (!customer.name.trim() || !customer.phone.trim()) {
      setValidationError('Please enter your Name and Phone Number to confirm order.');
      return;
    }
    setValidationError('');

    const newOrder: Order = {
      orderId: `TPN-${Math.floor(100000 + Math.random() * 900000)}`,
      createdAt: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      items: [...items],
      subtotal,
      deliveryFee,
      total,
      customer,
      method
    };

    if (method === 'whatsapp') {
      const waLink = getWhatsAppOrderLink(items, customer, subtotal, deliveryFee, total, newOrder.orderId);
      window.open(waLink, '_blank', 'noopener,noreferrer');
    }

    onClearCart();
    onOrderPlaced(newOrder);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-sm">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-slate-200 flex flex-col shadow-2xl">
          {/* Cart Header */}
          <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between bg-slate-50/80">
            <div className="flex items-center gap-2.5">
              <BrandLogo variant="emblem" size="sm" />
              <h2 className="font-display font-black text-base text-black">
                {step === 'cart' ? 'Shopping Bag' : 'Delivery & WhatsApp Order'}
              </h2>
              <span className="text-xs font-mono font-black px-2 py-0.5 rounded-full bg-yellow-400 text-black border border-yellow-500">
                {items.reduce((acc, it) => acc + it.quantity, 0)}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-black hover:bg-zinc-100 transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Meter */}
          <div className="px-6 py-3 bg-yellow-400/15 border-b border-yellow-200">
            {freeDeliveryRemaining > 0 ? (
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs text-zinc-800">
                  <span className="flex items-center gap-1.5 font-bold">
                    <Truck className="w-3.5 h-3.5 text-black" />
                    <span>Add {formatCurrency(freeDeliveryRemaining)} more for FREE Delivery</span>
                  </span>
                  <span className="font-mono text-black font-extrabold">₹999</span>
                </div>
                <div className="w-full bg-zinc-200 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-yellow-400 h-full rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(100, (subtotal / STORE_INFO.deliveryThreshold) * 100)}%` }}
                  />
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-xs font-black text-black">
                <CheckCircle2 className="w-4 h-4 text-black" />
                <span>You unlocked FREE Doorstep Delivery across India!</span>
              </div>
            )}
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <div className="text-base font-bold text-slate-900">Your bag is currently empty</div>
                  <p className="text-xs text-slate-500 max-w-xs">
                    Explore our genuine supplements verified by Pratham Chachra.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 bg-yellow-400 hover:bg-yellow-500 text-black font-black text-xs rounded-xl transition-colors cursor-pointer border border-yellow-500"
                >
                  Explore Supplements
                </button>
              </div>
            ) : step === 'cart' ? (
              /* Itemized List */
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-2xl bg-white border border-zinc-200 shadow-2xs flex gap-3.5 items-start"
                  >
                    <div className="w-18 h-18 rounded-xl overflow-hidden bg-white shrink-0 border border-zinc-200 p-1 flex items-center justify-center">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-xs font-bold text-zinc-900 line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-zinc-400 hover:text-rose-600 p-0.5 transition-colors cursor-pointer"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-[11px] text-zinc-500 space-x-1.5 font-medium">
                        <span>{item.selectedSize}</span>
                        <span>·</span>
                        <span className="text-black font-bold">{item.selectedFlavour}</span>
                      </div>

                      <div className="pt-2 flex items-center justify-between">
                        <div className="flex items-center border border-slate-300 rounded-lg bg-slate-50 overflow-hidden">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-slate-200 text-slate-600 hover:text-slate-900"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-mono font-bold text-slate-900 tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-slate-200 text-slate-600 hover:text-slate-900"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="font-mono text-xs font-bold text-slate-900 tabular-nums">
                          {formatCurrency(item.unitPrice * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Checkout Details Form */
              <div className="space-y-4">
                <div className="p-3 bg-yellow-400/20 rounded-xl border border-yellow-300 text-xs text-black flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span className="font-bold">
                    No fake payment cards needed. Direct order confirmation with <strong>{STORE_INFO.owner}</strong> ({STORE_INFO.phone}) via WhatsApp or Pay on Delivery.
                  </span>
                </div>

                {validationError && (
                  <div className="p-2.5 bg-rose-50 border border-rose-200 text-rose-600 text-xs rounded-lg font-medium">
                    {validationError}
                  </div>
                )}

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-black text-black mb-1">
                      Full Name <span className="text-yellow-600">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sahil Sharma"
                      value={customer.name}
                      onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-zinc-300 rounded-xl text-xs text-black placeholder-zinc-400 focus:outline-none focus:border-black font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black text-black mb-1">
                      Phone Number (WhatsApp) <span className="text-yellow-600">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 6396601206"
                      value={customer.phone}
                      onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-zinc-300 rounded-xl text-xs text-black placeholder-zinc-400 focus:outline-none focus:border-black font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black text-black mb-1">
                      Delivery Address
                    </label>
                    <input
                      type="text"
                      placeholder="House / Street / Gym address"
                      value={customer.address}
                      onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-zinc-300 rounded-xl text-xs text-black placeholder-zinc-400 focus:outline-none focus:border-black font-medium"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-black text-black mb-1">City</label>
                      <input
                        type="text"
                        placeholder="e.g. Delhi"
                        value={customer.city}
                        onChange={(e) => setCustomer({ ...customer, city: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-zinc-300 rounded-xl text-xs text-black placeholder-zinc-400 focus:outline-none focus:border-black font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black text-black mb-1">PIN Code</label>
                      <input
                        type="text"
                        placeholder="e.g. 110001"
                        value={customer.pincode}
                        onChange={(e) => setCustomer({ ...customer, pincode: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-zinc-300 rounded-xl text-xs text-black placeholder-zinc-400 focus:outline-none focus:border-black font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black text-black mb-1">Special Notes / Timing</label>
                    <input
                      type="text"
                      placeholder="e.g. Deliver after 5pm, call before delivery"
                      value={customer.notes}
                      onChange={(e) => setCustomer({ ...customer, notes: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-zinc-300 rounded-xl text-xs text-black placeholder-zinc-400 focus:outline-none focus:border-black font-medium"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setStep('cart')}
                  className="text-xs text-slate-600 hover:text-slate-900 transition-colors underline pt-1 font-semibold"
                >
                  ← Back to review items
                </button>
              </div>
            )}
          </div>

          {/* Drawer Footer with Bill Breakdown and Action Buttons */}
          {items.length > 0 && (
            <div className="p-6 border-t border-slate-200 bg-slate-50/90 space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-mono text-slate-900 font-bold tabular-nums">{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Estimated Shipping</span>
                  <span className="font-mono tabular-nums">
                    {deliveryFee === 0 ? (
                      <span className="text-black font-extrabold bg-yellow-400 px-1.5 py-0.5 rounded text-[11px]">FREE</span>
                    ) : (
                      formatCurrency(deliveryFee)
                    )}
                  </span>
                </div>
                <div className="pt-2 border-t border-zinc-200 flex justify-between text-sm font-black text-black">
                  <span>Total Amount</span>
                  <span className="font-mono text-black text-base tabular-nums">
                    {formatCurrency(total)}
                  </span>
                </div>
              </div>

              {step === 'cart' ? (
                <div className="space-y-2">
                  <button
                    onClick={handleProceedToDetails}
                    className="w-full py-3.5 bg-yellow-400 hover:bg-yellow-500 text-black font-black text-sm rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md border border-yellow-500 cursor-pointer"
                  >
                    <span>Proceed to Order</span>
                    <ArrowRight className="w-4 h-4 text-black" />
                  </button>
                </div>
              ) : (
                <div className="space-y-2.5">
                  {/* Pay Online with Cashfree Payments */}
                  <button
                    type="button"
                    onClick={handleStartCashfree}
                    className="w-full py-3.5 bg-black hover:bg-zinc-800 text-[#FACC15] font-black text-sm rounded-xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 border border-yellow-500/50 cursor-pointer group"
                  >
                    <span>Pay Online (UPI, Cards, NetBanking)</span>
                    <span className="text-[10px] bg-yellow-400 text-black px-2 py-0.5 rounded font-mono font-black">
                      Cashfree
                    </span>
                  </button>

                  {/* WhatsApp Order Button */}
                  <button
                    type="button"
                    onClick={() => handlePlaceOrder('whatsapp')}
                    className="w-full py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-black text-xs rounded-xl flex items-center justify-center gap-2 transition-all shadow-xs active:scale-95 border border-yellow-500 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-black" />
                    <span>Order via WhatsApp ({STORE_INFO.phone})</span>
                  </button>

                  {/* Cash on Delivery / Offline Booking Button */}
                  <button
                    type="button"
                    onClick={() => handlePlaceOrder('cod')}
                    className="w-full py-2.5 bg-white hover:bg-zinc-100 text-black font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors border border-zinc-300 cursor-pointer"
                  >
                    <span>Book with Cash on Delivery (COD)</span>
                  </button>

                  <div className="text-center pt-1">
                    <p className="text-[11px] text-zinc-600 font-bold">
                      Store Owner: Pratham Chachra ({STORE_INFO.phone})
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
