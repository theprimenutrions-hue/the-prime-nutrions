import React, { useState } from 'react';
import { X, ShieldCheck, CreditCard, ArrowRight, Check, AlertCircle, Copy, HelpCircle, ExternalLink, Lock } from 'lucide-react';
import { CartItem, CustomerDetails } from '../types';
import { formatCurrency, getWhatsAppOrderLink } from '../utils/whatsapp';
import { STORE_INFO } from '../data/products';

declare global {
  interface Window {
    Cashfree?: any;
  }
}

interface CashfreeModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  customer: CustomerDetails;
  subtotal: number;
  deliveryFee: number;
  total: number;
  onOrderSuccess: (orderId: string) => void;
}

export const CashfreeModal: React.FC<CashfreeModalProps> = ({
  isOpen,
  onClose,
  items,
  customer,
  subtotal,
  deliveryFee,
  total,
  onOrderSuccess
}) => {
  const [activeTab, setActiveTab] = useState<'checkout' | 'guide'>('checkout');
  const [paymentSessionId, setPaymentSessionId] = useState('');
  const [mode, setMode] = useState<'sandbox' | 'production'>('sandbox');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedCode, setCopiedCode] = useState(false);

  if (!isOpen) return null;

  const orderId = `CF-${Math.floor(100000 + Math.random() * 900000)}`;

  const handleLaunchCashfree = () => {
    if (!paymentSessionId.trim()) {
      setErrorMessage(
        'A valid payment_session_id is required. Follow the non-developer guide below to generate one from your Cashfree account, or order instantly via WhatsApp!'
      );
      return;
    }

    setErrorMessage('');

    if (typeof window !== 'undefined' && window.Cashfree) {
      try {
        const cashfree = window.Cashfree({
          mode: mode
        });

        cashfree.checkout({
          paymentSessionId: paymentSessionId.trim(),
          redirectTarget: '_modal'
        }).then((result: any) => {
          if (result.error) {
            setErrorMessage(`Cashfree error: ${result.error.message || 'Payment initiation failed'}`);
          }
          if (result.paymentDetails) {
            onOrderSuccess(orderId);
            onClose();
          }
        });
      } catch (err: any) {
        setErrorMessage(`Could not start Cashfree checkout: ${err.message || 'Check your paymentSessionId'}`);
      }
    } else {
      setErrorMessage('Cashfree SDK is currently loading. Please check your internet connection and retry.');
    }
  };

  const handleFallbackWhatsApp = () => {
    const waLink = getWhatsAppOrderLink(items, customer, subtotal, deliveryFee, total, orderId);
    window.open(waLink, '_blank', 'noopener,noreferrer');
    onOrderSuccess(orderId);
    onClose();
  };

  const sampleBackendCode = `// Server route: POST /api/create-cashfree-order
// Requires: npm install axios
app.post('/api/create-cashfree-order', async (req, res) => {
  const { orderAmount, customerPhone, customerName } = req.body;
  
  const response = await axios.post(
    'https://sandbox.cashfree.com/pg/orders', // or api.cashfree.com for live
    {
      order_id: 'ORDER_' + Date.now(),
      order_amount: orderAmount,
      order_currency: 'INR',
      customer_details: {
        customer_id: 'CUST_' + customerPhone,
        customer_phone: customerPhone,
        customer_name: customerName,
      },
      order_meta: {
        return_url: 'https://yourwebsite.com/order-success?order_id={order_id}'
      }
    },
    {
      headers: {
        'x-client-id': process.env.CASHFREE_APP_ID,
        'x-client-secret': process.env.CASHFREE_SECRET_KEY,
        'x-api-version': '2023-08-01'
      }
    }
  );
  
  res.json({ payment_session_id: response.data.payment_session_id });
});`;

  const copyBackendCode = () => {
    navigator.clipboard.writeText(sampleBackendCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden z-10 my-6">
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-700 font-black">
              CF
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display font-black text-lg text-slate-900">
                  Cashfree Payments
                </h3>
                <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                  Official Hosted Checkout
                </span>
              </div>
              <p className="text-xs text-slate-500">
                UPI (GPay, PhonePe, Paytm), Debit/Credit Cards & NetBanking
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 bg-slate-100/60 p-1.5 gap-1.5 text-xs font-bold">
          <button
            onClick={() => setActiveTab('checkout')}
            className={`flex-1 py-2 px-3 rounded-xl transition-all ${
              activeTab === 'checkout'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Pay Online Checkout
          </button>
          <button
            onClick={() => setActiveTab('guide')}
            className={`flex-1 py-2 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'guide'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5 text-purple-600" />
            <span>Non-Developer Integration Guide</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 space-y-6">
          {activeTab === 'checkout' ? (
            <div className="space-y-5">
              {/* Order Summary Strip */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-500 font-medium">Customer:</span>
                  <div className="font-bold text-slate-900">{customer.name || 'Store Customer'} ({customer.phone || STORE_INFO.phone})</div>
                  <div className="text-[11px] text-slate-500">{items.length} supplement items in cart</div>
                </div>
                <div className="text-right">
                  <span className="text-zinc-500 font-medium">Total Amount</span>
                  <div className="text-2xl font-black font-mono text-black">{formatCurrency(total)}</div>
                </div>
              </div>

              {/* Supported Payment Logos */}
              <div className="p-4 rounded-2xl bg-white border border-zinc-200 space-y-2">
                <span className="text-[11px] font-black text-black uppercase tracking-wider block">
                  Accepted Payment Methods:
                </span>
                <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-zinc-800">
                  <span className="px-2.5 py-1 bg-yellow-400/20 rounded-lg border border-yellow-400 text-black">Google Pay</span>
                  <span className="px-2.5 py-1 bg-yellow-400/20 rounded-lg border border-yellow-400 text-black">PhonePe</span>
                  <span className="px-2.5 py-1 bg-yellow-400/20 rounded-lg border border-yellow-400 text-black">Paytm UPI</span>
                  <span className="px-2.5 py-1 bg-zinc-100 rounded-lg border border-zinc-200">Visa / Mastercard / RuPay</span>
                  <span className="px-2.5 py-1 bg-zinc-100 rounded-lg border border-zinc-200">50+ NetBanking</span>
                </div>
              </div>

              {/* Payment Session ID Input */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-black text-black">
                    Cashfree Payment Session ID
                  </label>
                  <div className="flex items-center gap-2 text-[11px]">
                    <span className="text-zinc-500 font-bold">Mode:</span>
                    <button
                      type="button"
                      onClick={() => setMode(mode === 'sandbox' ? 'production' : 'sandbox')}
                      className="px-2 py-0.5 rounded bg-black text-[#FACC15] font-mono font-black"
                    >
                      {mode.toUpperCase()}
                    </button>
                  </div>
                </div>

                <input
                  type="text"
                  placeholder="Paste payment_session_id from your Cashfree server order..."
                  value={paymentSessionId}
                  onChange={(e) => setPaymentSessionId(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-300 focus:border-black rounded-xl text-xs font-mono text-black placeholder-zinc-400 focus:outline-none"
                />

                <p className="text-[11px] text-zinc-600 leading-relaxed font-medium">
                  <Lock className="w-3 h-3 inline text-black mr-1" />
                  Cashfree official security standard: Real orders require creating a <code>payment_session_id</code> on your server using your private Cashfree credentials so that payments cannot be falsified or altered.
                </p>
              </div>

              {errorMessage && (
                <div className="p-3 bg-amber-50 border border-amber-300 text-amber-900 text-xs rounded-xl flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  type="button"
                  onClick={handleLaunchCashfree}
                  className="w-full py-3.5 px-4 bg-black hover:bg-zinc-800 text-[#FACC15] font-black text-sm rounded-xl flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 border border-yellow-500/50 cursor-pointer"
                >
                  <CreditCard className="w-4 h-4 text-[#FACC15]" />
                  <span>Launch Cashfree Hosted Checkout ({formatCurrency(total)})</span>
                </button>

                <div className="text-center">
                  <span className="text-xs text-zinc-400 font-bold">— OR PLACE DIRECTLY —</span>
                </div>

                <button
                  type="button"
                  onClick={handleFallbackWhatsApp}
                  className="w-full py-3 px-4 bg-yellow-400 hover:bg-yellow-500 text-black font-black text-xs rounded-xl flex items-center justify-center gap-2 transition-colors border border-yellow-500 cursor-pointer"
                >
                  <span>Pay & Order via WhatsApp with Pratham Chachra ({STORE_INFO.phone})</span>
                </button>
              </div>
            </div>
          ) : (
            /* Non-developer integration guide */
            <div className="space-y-5 text-xs text-slate-700 leading-relaxed">
              <div className="p-4 rounded-2xl bg-purple-50/80 border border-purple-200 space-y-1">
                <div className="font-bold text-purple-900 text-sm">
                  How Cashfree Online Payments Work (In Simple Language)
                </div>
                <p className="text-purple-800 text-xs">
                  Cashfree is a certified Indian payment gateway licensed by RBI. Here is how your store uses it without paying any subscription fees:
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-slate-900 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Create your Free Cashfree Merchant Account</h4>
                    <p className="text-slate-600">
                      Sign up at <a href="https://merchant.cashfree.com" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline font-semibold">merchant.cashfree.com</a>. Registration and hosting are completely free with zero monthly charges.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-slate-900 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Why Secret Keys Must Stay on the Server</h4>
                    <p className="text-slate-600">
                      Cashfree gives you an <strong>App ID</strong> and a <strong>Secret Key</strong>. As per RBI and payment security rules, the Secret Key must never be put inside the public browser code. Otherwise, malicious visitors could steal your key or change prices.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-slate-900 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Server Creates the Order and Returns a Session ID</h4>
                    <p className="text-slate-600">
                      When the customer clicks "Pay Online", your server calls Cashfree’s <code>/pg/orders</code> endpoint with the cart amount ({formatCurrency(total)}) and gets back a temporary <code>payment_session_id</code>.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-slate-900 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Cashfree Hosted Checkout Opens</h4>
                    <p className="text-slate-600">
                      The official Cashfree SDK loaded on this website then displays the secure checkout modal where customers can pay using Google Pay, PhonePe, Paytm, or Credit/Debit Cards.
                    </p>
                  </div>
                </div>
              </div>

              {/* Ready-to-use backend route snippet */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900">Server Code Example (Node / Express):</span>
                  <button
                    onClick={copyBackendCode}
                    className="text-xs text-purple-700 font-bold flex items-center gap-1 hover:underline"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedCode ? 'Copied' : 'Copy Code'}</span>
                  </button>
                </div>
                <pre className="p-3 bg-slate-900 text-emerald-300 font-mono text-[11px] rounded-xl overflow-x-auto leading-relaxed">
                  {sampleBackendCode}
                </pre>
              </div>

              <div className="p-3 bg-yellow-400/20 rounded-xl border border-yellow-300 flex items-center justify-between">
                <span className="text-xs text-black font-bold">
                  While setting up your Cashfree API keys, all customers can order instantly via WhatsApp and COD.
                </span>
                <button
                  onClick={() => setActiveTab('checkout')}
                  className="px-3 py-1 bg-black text-[#FACC15] font-black rounded-lg text-xs hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  Return to Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
