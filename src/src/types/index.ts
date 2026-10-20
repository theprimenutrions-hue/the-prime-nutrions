export interface Product {
  id: string;
  name: string;
  category: 'whey' | 'gainers' | 'essentials' | 'fat-loss' | 'wellness';
  categoryLabel: string;
  subType:
    | 'whey-protein'
    | 'isolate'
    | 'pea-protein'
    | 'yeast-protein'
    | 'bulk-gainer'
    | 'weight-gainer'
    | 'pre-workout'
    | 'bcaa'
    | 'eaa'
    | 'creatine'
    | 'l-carnitine'
    | 'fat-burner'
    | 'cla'
    | 'multivitamin'
    | 'fish-oil'
    | 'testo-booster'
    | 'joint-health';
  subTypeLabel: string;
  goal: 'muscle-building' | 'strength-power' | 'fat-loss' | 'recovery-health' | 'mass-gain';
  goalLabel: string;
  tagline: string;
  price: number;
  mrp: number;
  rating: number;
  reviewsCount: number;
  image: string;
  sizes: string[];
  flavours: string[];
  servings: number;
  proteinPerServing?: string;
  bcaaPerServing?: string;
  keyHighlights: string[];
  description: string;
  nutritionFacts: {
    servingSize: string;
    servingsPerTub: number;
    nutrients: { label: string; amount: string; dailyValue?: string }[];
  };
  howToUse: string;
  inStock: boolean;
  featured?: boolean;
}

export interface CartItem {
  id: string;
  product: Product;
  selectedSize: string;
  selectedFlavour: string;
  quantity: number;
  unitPrice: number;
}

export interface CustomerDetails {
  name: string;
  phone: string;
  address: string;
  city: string;
  pincode: string;
  notes: string;
}

export interface Order {
  orderId: string;
  createdAt: string;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  customer: CustomerDetails;
  method: 'whatsapp' | 'cod' | 'cashfree';
  paymentSessionId?: string;
}
