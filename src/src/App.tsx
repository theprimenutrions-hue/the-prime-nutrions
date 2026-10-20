import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, ShoppingBag, MessageCircle, Sparkles, X, CreditCard, ChevronRight, Menu } from 'lucide-react';
import { PRODUCTS, CATEGORIES, GOALS, STORE_INFO, SHOP_MENU_CATEGORIES } from './data/products';
import { Product, CartItem, Order, CustomerDetails } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CashfreeModal } from './components/CashfreeModal';
import { RightCategoryDrawer } from './components/RightCategoryDrawer';
import { SupplementAdvisorModal } from './components/SupplementAdvisorModal';
import { OrderSuccessModal } from './components/OrderSuccessModal';
import { AuthenticityGuarantee } from './components/AuthenticityGuarantee';
import { OwnerSection } from './components/OwnerSection';
import { Footer } from './components/Footer';
import { getGeneralWhatsAppConsultationLink } from './utils/whatsapp';

const CART_STORAGE_KEY = 'the_prime_nutritions_cart_v4';

export default function App() {
  // Cart state persisted to localStorage
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Active UI modal states
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isAdvisorOpen, setIsAdvisorOpen] = useState(false);
  const [latestOrder, setLatestOrder] = useState<Order | null>(null);
  const [isRightDrawerOpen, setIsRightDrawerOpen] = useState(false);

  // Cashfree Modal State
  const [isCashfreeOpen, setIsCashfreeOpen] = useState(false);
  const [cashfreeData, setCashfreeData] = useState<{
    items: CartItem[];
    customer: CustomerDetails;
    subtotal: number;
    deliveryFee: number;
    total: number;
  } | null>(null);

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubType, setSelectedSubType] = useState('all');
  const [selectedGoal, setSelectedGoal] = useState('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  const productsRef = useRef<HTMLDivElement>(null);

  // Save cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  const totalCartCount = cartItems.reduce((acc, it) => acc + it.quantity, 0);

  // Cart operations
  const handleAddToCart = (
    product: Product,
    selectedFlavour: string,
    selectedSize: string,
    quantity: number = 1
  ) => {
    const itemId = `${product.id}-${selectedSize}-${selectedFlavour}`;

    setCartItems((prev) => {
      const existingIndex = prev.findIndex((i) => i.id === itemId);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prev,
          {
            id: itemId,
            product,
            selectedSize,
            selectedFlavour,
            quantity,
            unitPrice: product.price
          }
        ];
      }
    });
  };

  const handleUpdateQuantity = (itemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveFromCart(itemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((it) => (it.id === itemId ? { ...it, quantity: newQty } : it))
    );
  };

  const handleRemoveFromCart = (itemId: string) => {
    setCartItems((prev) => prev.filter((it) => it.id !== itemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleAddMultipleToCart = (productsToAdd: Product[]) => {
    productsToAdd.forEach((p) => {
      handleAddToCart(p, p.flavours[0], p.sizes[0], 1);
    });
    setIsCartOpen(true);
  };

  const handleSelectCategory = (categoryId: string, subTypeId?: string) => {
    setSelectedCategory(categoryId);
    setSelectedSubType(subTypeId || 'all');
    setSelectedGoal('all');
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedSubType('all');
    setSelectedGoal('all');
  };

  // Open Cashfree hosted checkout modal from Cart
  const handleOpenCashfree = (
    items: CartItem[],
    customer: CustomerDetails,
    subtotal: number,
    deliveryFee: number,
    total: number
  ) => {
    setCashfreeData({ items, customer, subtotal, deliveryFee, total });
    setIsCartOpen(false);
    setIsCashfreeOpen(true);
  };

  const handleCashfreeSuccess = (orderId: string) => {
    if (!cashfreeData) return;
    const completedOrder: Order = {
      orderId,
      createdAt: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      items: [...cashfreeData.items],
      subtotal: cashfreeData.subtotal,
      deliveryFee: cashfreeData.deliveryFee,
      total: cashfreeData.total,
      customer: cashfreeData.customer,
      method: 'cashfree'
    };
    handleClearCart();
    setLatestOrder(completedOrder);
    setIsCashfreeOpen(false);
  };

  // Sub-type items for active category
  const activeCategoryMenu = useMemo(() => {
    return SHOP_MENU_CATEGORIES.find((c) => c.id === selectedCategory);
  }, [selectedCategory]);

  // Filter & Search logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Sub-type filter
      if (selectedSubType !== 'all' && item.subType !== selectedSubType) {
        return false;
      }
      // Goal filter
      if (selectedGoal !== 'all' && item.goal !== selectedGoal) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesCategory = item.categoryLabel.toLowerCase().includes(query);
        const matchesSubType = item.subTypeLabel.toLowerCase().includes(query);
        const matchesTagline = item.tagline.toLowerCase().includes(query);
        const matchesHighlights = item.keyHighlights.some((h) => h.toLowerCase().includes(query));
        return matchesName || matchesCategory || matchesSubType || matchesTagline || matchesHighlights;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [searchQuery, selectedCategory, selectedSubType, selectedGoal, sortBy]);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col selection:bg-yellow-400 selection:text-black">
      {/* Top Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenAdvisor={() => setIsAdvisorOpen(true)}
        onSelectCategory={handleSelectCategory}
        onGoHome={handleResetFilters}
        onOpenRightDrawer={() => setIsRightDrawerOpen(true)}
      />

      {/* Hero with Banner Sliding Carousel */}
      <Hero
        onExploreClick={scrollToProducts}
        onOpenAdvisor={() => setIsAdvisorOpen(true)}
        onSelectCategory={handleSelectCategory}
      />

      {/* Main Supplement Catalog */}
      <main
        id="supplements"
        ref={productsRef}
        className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow space-y-8"
      >
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-200 pb-6">
          <div className="space-y-1.5 text-left">
            <div className="flex items-center gap-2 text-xs font-black tracking-wider uppercase text-black">
              <span className="font-mono bg-yellow-400 text-black px-2 py-0.5 rounded">AUTHENTIC STORE</span>
              <span aria-hidden="true" className="text-zinc-400">·</span>
              <span>100% GENUINE LAB VERIFIED</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-black tracking-tight">
              Supplements & Live Pricing
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 max-w-xl">
              All prices in INR (₹) with intact scratch-verification codes. Free express doorstep delivery on orders over ₹999.
            </p>
          </div>

          {/* Quick Actions & Right Drawer Trigger */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => setIsRightDrawerOpen(true)}
              className="px-4 py-2.5 bg-yellow-400 hover:bg-yellow-500 text-black text-xs font-black rounded-xl transition-colors flex items-center gap-2 shadow-xs cursor-pointer border border-yellow-500"
            >
              <Menu className="w-4 h-4 text-black" />
              <span>All Categories</span>
            </button>

            <button
              onClick={() => setIsAdvisorOpen(true)}
              className="px-4 py-2.5 bg-zinc-100 hover:bg-zinc-200 border border-zinc-300 text-xs font-bold text-black rounded-xl transition-colors flex items-center gap-2 shadow-2xs cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-yellow-600" />
              <span>Stack Guide</span>
            </button>

            <a
              href={getGeneralWhatsAppConsultationLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-black hover:bg-zinc-800 text-[#FACC15] text-xs font-bold rounded-xl transition-colors flex items-center gap-2 shadow-2xs"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#FACC15]" />
              <span>WhatsApp: {STORE_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* Search & Sorting Controls */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            {/* Search Input */}
            <div className="md:col-span-8 relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                placeholder="Search Whey Isolate, Pea Protein, Creatine, Pre-Workout, Mass Gainer..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 bg-zinc-50 border border-zinc-300 focus:border-black rounded-xl text-xs sm:text-sm text-black placeholder-zinc-500 focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-black cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="md:col-span-4 flex items-center gap-2">
              <div className="relative w-full">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-300 focus:border-black rounded-xl text-xs sm:text-sm text-black font-bold focus:outline-none appearance-none cursor-pointer"
                >
                  <option value="featured">Sort by: Featured First</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500 text-xs">
                  ▼
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Main Category Tabs: Black & Yellow Styling */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isSelected =
                cat.id === 'all'
                  ? selectedCategory === 'all' && selectedSubType === 'all'
                  : selectedCategory === cat.category &&
                    (cat.subType === 'all' ? selectedSubType === 'all' || !selectedSubType : selectedSubType === cat.subType);
              return (
                <button
                  key={cat.id}
                  onClick={() => handleSelectCategory(cat.category, cat.subType || 'all')}
                  className={`px-4 py-2 text-xs font-black rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-black text-[#FACC15] shadow-xs border border-black'
                      : 'bg-zinc-100 hover:bg-zinc-200 text-black border border-zinc-200'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Sub-Category Type Filter Bar (Whey Isolate, Pea Protein, Yeast Protein, Bulk Gainer, etc.) */}
          {activeCategoryMenu && activeCategoryMenu.subItems.length > 0 && (
            <div className="p-3 bg-yellow-50/60 rounded-2xl border border-yellow-200 flex flex-wrap items-center gap-2 text-xs">
              <span className="font-black text-black mr-1">Types:</span>
              <button
                onClick={() => setSelectedSubType('all')}
                className={`px-3 py-1 rounded-lg text-xs font-black transition-colors cursor-pointer ${
                  selectedSubType === 'all'
                    ? 'bg-black text-[#FACC15] shadow-2xs'
                    : 'bg-white border border-zinc-300 text-black hover:bg-yellow-100'
                }`}
              >
                All {activeCategoryMenu.label}
              </button>

              {activeCategoryMenu.subItems.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => setSelectedSubType(sub.id)}
                  className={`px-3 py-1 rounded-lg text-xs font-black transition-colors cursor-pointer ${
                    selectedSubType === sub.id
                      ? 'bg-black text-[#FACC15] shadow-2xs'
                      : 'bg-white border border-zinc-300 text-black hover:bg-yellow-100'
                  }`}
                >
                  {sub.label}
                </button>
              ))}
            </div>
          )}

          {/* Goal Filter Chips */}
          <div className="flex items-center gap-2 text-xs overflow-x-auto pb-1 text-zinc-600">
            <span className="font-bold text-black shrink-0">Filter by Goal:</span>
            {GOALS.map((g) => (
              <button
                key={g.id}
                onClick={() => setSelectedGoal(g.id)}
                className={`px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedGoal === g.id
                    ? 'bg-black text-white'
                    : 'text-zinc-700 hover:text-black hover:bg-zinc-100'
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center space-y-4 rounded-3xl bg-zinc-50 border border-zinc-200">
            <p className="text-zinc-600 text-sm font-medium">
              No products found matching your current filters.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-5 py-2.5 bg-black text-[#FACC15] text-xs rounded-xl font-black transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={(p, flavour, size) => handleAddToCart(p, flavour, size, 1)}
                onViewDetails={(p) => setSelectedProduct(p)}
              />
            ))}
          </div>
        )}

        {/* Direct Order Guidance & Cashfree Banner: Black & Yellow Styling */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-black text-white border border-yellow-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="text-xs font-mono text-[#FACC15] uppercase tracking-wider font-extrabold">
              Fast WhatsApp Ordering & Online Checkout
            </div>
            <h3 className="font-display font-black text-xl text-white">
              The Prime Nutritions · Direct Service
            </h3>
            <p className="text-xs text-zinc-300 max-w-xl leading-relaxed">
              Pay using Google Pay, PhonePe, Paytm UPI, Cards, Cash on Delivery, or chat directly on WhatsApp with Pratham Chachra ({STORE_INFO.phone}) for honest supplement guidance.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={getGeneralWhatsAppConsultationLink('I want to order genuine gym supplements')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 bg-[#FACC15] hover:bg-[#EAB308] text-black font-black text-xs sm:text-sm rounded-xl flex items-center gap-2 whitespace-nowrap transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-black" />
              <span>WhatsApp Order ({STORE_INFO.phone})</span>
            </a>

            <button
              onClick={() => setIsCartOpen(true)}
              className="px-4 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 font-bold text-xs sm:text-sm rounded-xl flex items-center gap-2 whitespace-nowrap transition-colors shadow-md cursor-pointer"
            >
              <CreditCard className="w-4 h-4 text-[#FACC15]" />
              <span>Checkout Online (Cashfree)</span>
            </button>
          </div>
        </div>
      </main>

      {/* Authenticity Guarantee Section */}
      <AuthenticityGuarantee />

      {/* Founder / Owner & Contact Section */}
      <OwnerSection />

      {/* Footer */}
      <Footer />

      {/* Right "Three Lines" Category Drawer */}
      <RightCategoryDrawer
        isOpen={isRightDrawerOpen}
        onClose={() => setIsRightDrawerOpen(false)}
        onSelectCategory={handleSelectCategory}
        onOpenAdvisor={() => setIsAdvisorOpen(true)}
      />

      {/* Modals & Drawers */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={(p, flav, size, qty) => handleAddToCart(p, flav, size, qty)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
        onOrderPlaced={(order) => setLatestOrder(order)}
        onOpenCashfree={handleOpenCashfree}
      />

      {/* Cashfree Hosted Checkout Modal with Non-Developer Guide */}
      {cashfreeData && (
        <CashfreeModal
          isOpen={isCashfreeOpen}
          onClose={() => setIsCashfreeOpen(false)}
          items={cashfreeData.items}
          customer={cashfreeData.customer}
          subtotal={cashfreeData.subtotal}
          deliveryFee={cashfreeData.deliveryFee}
          total={cashfreeData.total}
          onOrderSuccess={handleCashfreeSuccess}
        />
      )}

      <SupplementAdvisorModal
        isOpen={isAdvisorOpen}
        onClose={() => setIsAdvisorOpen(false)}
        onAddStackToCart={handleAddMultipleToCart}
      />

      <OrderSuccessModal
        order={latestOrder}
        onClose={() => setLatestOrder(null)}
      />

      {/* Mobile Sticky Quick-Action Bar */}
      <div className="md:hidden fixed bottom-3 left-3 right-3 z-30">
        <div className="bg-white/95 backdrop-blur-md border border-zinc-200 p-2 rounded-2xl shadow-2xl flex items-center justify-between gap-2">
          {/* Categories 3-lines button */}
          <button
            onClick={() => setIsRightDrawerOpen(true)}
            className="p-2.5 bg-yellow-400 text-black font-black text-xs rounded-xl flex items-center justify-center cursor-pointer"
            aria-label="Open categories"
          >
            <Menu className="w-4 h-4 text-black" />
          </button>

          {/* Cart preview */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex-1 py-2.5 px-3 bg-black text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-xs cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 text-[#FACC15]" />
            <span>Bag ({totalCartCount})</span>
          </button>

          {/* WhatsApp Direct */}
          <a
            href={getGeneralWhatsAppConsultationLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 px-3 bg-yellow-400 text-black font-extrabold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-xs"
          >
            <MessageCircle className="w-4 h-4 text-black" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
