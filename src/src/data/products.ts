import { Product } from '../types';

import mbBiozymeImg from '../assets/images/mb_biozyme_whey.jpg';
import atomImg from '../assets/images/asitis_atom_whey.jpg';
import gncImg from '../assets/images/gnc_pro_whey.jpg';
import oneScienceImg from '../assets/images/one_science_whey.jpg';
import gxnArmourImg from '../assets/images/gxn_armour_whey.jpg';
import nutrabayPeaImg from '../assets/images/nutrabay_pea_protein.jpg';
import mbCreatineImg from '../assets/images/mb_creatine.jpg';
import mbMassGainerImg from '../assets/images/mb_mass_gainer.jpg';
import mbPreworkoutImg from '../assets/images/mb_preworkout.jpg';
import mbFishOilImg from '../assets/images/mb_fishoil.jpg';
import mbViteImg from '../assets/images/mb_vite.jpg';
import mbCarnitineImg from '../assets/images/mb_carnitine.jpg';
import mbTestoImg from '../assets/images/mb_testo.jpg';
import gncBulkGainerImg from '../assets/images/gnc_bulk_gainer_1792427121370.jpg';
import kevinAnabolicMassImg from '../assets/images/kevin_anabolic_mass_1792427122230.jpg';
import onSeriousMassImg from '../assets/images/on_serious_mass_1792427122673.jpg';
import muscleGarageGainerImg from '../assets/images/muscle_garage_gainer_1792427122645.jpg';
import labradaMassGainerImg from '../assets/images/labrada_mass_gainer_1792427123236.jpg';

export const STORE_INFO = {
  name: 'The Prime Nutritions',
  owner: 'Pratham Chachra',
  phone: '6396601206',
  altPhone: '9897701206',
  whatsappNumber: '919897701206',
  instagram: 'the_prime_nutritions',
  instagramUrl: 'https://instagram.com/the_prime_nutritions',
  email: 'theprimenutritions@gmail.com',
  tagline: '100% Authentic Gym Supplements by Pratham Chachra',
  deliveryThreshold: 999, // Free shipping above 999
  standardDeliveryFee: 80,
  guarantees: [
    { title: '100% Genuine', description: 'Verified importer scratch codes on every tub' },
    { title: 'Owner Verified', description: 'Dispatched under Pratham Chachra supervision' },
    { title: 'Free Express Shipping', description: 'Free pan-India delivery on orders above ₹999' },
    { title: 'WhatsApp Direct Support', description: 'Instant order updates and stack advice at 919897701206' }
  ]
};

export interface ShopMenuCategory {
  id: 'whey' | 'gainers' | 'essentials' | 'fat-loss' | 'wellness';
  label: string;
  subItems: { id: string; label: string; count?: number }[];
}

export const SHOP_MENU_CATEGORIES: ShopMenuCategory[] = [
  {
    id: 'whey',
    label: 'Whey & Proteins',
    subItems: [
      { id: 'whey-protein', label: 'Whey Protein' },
      { id: 'pea-protein', label: 'Pea Protein' }
    ]
  },
  {
    id: 'gainers',
    label: 'Gainer Options',
    subItems: [
      { id: 'bulk-gainer', label: 'Bulk Gainer' },
      { id: 'weight-gainer', label: 'Weight Gainer' }
    ]
  },
  {
    id: 'essentials',
    label: 'Creatine & Pre-Workout',
    subItems: [
      { id: 'creatine', label: 'Creatine' },
      { id: 'pre-workout', label: 'Pre Workout' }
    ]
  },
  {
    id: 'fat-loss',
    label: 'Fat Loss',
    subItems: [
      { id: 'l-carnitine', label: 'L-Carnitine' }
    ]
  },
  {
    id: 'wellness',
    label: 'Health & Wellness',
    subItems: [
      { id: 'multivitamin', label: 'Multivitamin' },
      { id: 'fish-oil', label: 'Fish Oil' },
      { id: 'testo-booster', label: 'Testo Booster' }
    ]
  }
];

export const PRODUCTS: Product[] = [
  // 1. WHEY & PROTEINS - WHEY PROTEIN (All real store brands uploaded by user)
  {
    id: 'tp-mb-biozyme-whey',
    name: 'MuscleBlaze Biozyme Performance Whey',
    category: 'whey',
    categoryLabel: 'Whey & Proteins',
    subType: 'whey-protein',
    subTypeLabel: 'Whey Protein',
    goal: 'muscle-building',
    goalLabel: 'Lean Muscle & Absorption',
    tagline: 'Clinically proven 50% higher protein absorption with patented EAF® formula.',
    price: 2499,
    mrp: 3299,
    rating: 4.95,
    reviewsCount: 384,
    image: mbBiozymeImg,
    sizes: ['1 kg (2.2 lbs)', '2 kg (4.4 lbs)', '500g (1.1 lbs)'],
    flavours: ['Rich Chocolate', 'Chocolate Hazelnut', 'Magical Mango', 'French Vanilla'],
    servings: 33,
    proteinPerServing: '25g',
    bcaaPerServing: '5.51g',
    keyHighlights: [
      'Clinically Proven 50% Higher Protein Absorption & 60% Higher BCAA Absorption',
      '25g Pure Protein per scoop with Enhanced Absorption Formula (EAF®)',
      'Informed Choice UK & Labdoor USA Tested and Certified for zero heavy metals',
      'Patented Scoop-on-Top design for clean, hassle-free measurement'
    ],
    description:
      'MuscleBlaze Biozyme Performance Whey is formulated with the revolutionary Enhanced Absorption Formula (EAF®) that lowers stomach discomfort and maximizes muscle protein synthesis for Indian lifters.',
    nutritionFacts: {
      servingSize: '1 Scoop (30g)',
      servingsPerTub: 33,
      nutrients: [
        { label: 'Energy', amount: '120 kcal' },
        { label: 'Pure Protein', amount: '25.0 g', dailyValue: '50%' },
        { label: 'Total Carbohydrates', amount: '2.5 g' },
        { label: 'Total Fat', amount: '1.2 g' },
        { label: 'BCAA', amount: '5.51 g' },
        { label: 'EAA', amount: '11.75 g' }
      ]
    },
    howToUse: 'Mix 1 rounded scoop (30g) in 200ml chilled water immediately post-workout.',
    inStock: true,
    featured: true
  },
  {
    id: 'tp-atom-pwr-whey',
    name: 'AS-IT-IS ATOM PWR Whey Protein XL',
    category: 'whey',
    categoryLabel: 'Whey & Proteins',
    subType: 'whey-protein',
    subTypeLabel: 'Whey Protein',
    goal: 'muscle-building',
    goalLabel: 'Rapid Recovery & Power',
    tagline: '24g pure whey protein engineered with DigeZyme for explosive strength.',
    price: 1799,
    mrp: 2499,
    rating: 4.88,
    reviewsCount: 215,
    image: atomImg,
    sizes: ['1 kg (2.2 lbs)', '2 kg (4.4 lbs)'],
    flavours: ['Choco Hazel Fusion', 'Double Rich Chocolate', 'Mango Fusion'],
    servings: 31,
    proteinPerServing: '24g',
    bcaaPerServing: '5.5g',
    keyHighlights: [
      '24g Pure Whey Protein per scoop for rapid muscle recovery',
      'Enriched with DigeZyme® multi-enzyme digestive complex for zero bloating',
      '5.5g BCAAs and 4g Glutamine precursor to accelerate protein synthesis',
      'Lab tested, 100% dope-free authentic formula direct to consumer'
    ],
    description:
      'AS-IT-IS ATOM PWR Whey Protein XL delivers high biological value whey protein with fast digestion dynamics, fueling quick muscle recovery after intense barbell training.',
    nutritionFacts: {
      servingSize: '1 Scoop (32g)',
      servingsPerTub: 31,
      nutrients: [
        { label: 'Energy', amount: '128 kcal' },
        { label: 'Protein', amount: '24.0 g' },
        { label: 'BCAA', amount: '5.5 g' },
        { label: 'Glutamine', amount: '4.0 g' }
      ]
    },
    howToUse: 'Add 1 scoop to 240ml chilled water or milk. Shake well for 30 seconds and consume post-workout.',
    inStock: true,
    featured: true
  },
  {
    id: 'tp-gnc-pro-whey',
    name: 'GNC Pro Performance 100% Whey',
    category: 'whey',
    categoryLabel: 'Whey & Proteins',
    subType: 'whey-protein',
    subTypeLabel: 'Whey Protein',
    goal: 'muscle-building',
    goalLabel: 'World Trusted Quality',
    tagline: '24g Pure whey blend with DigeZyme digestive enzyme complex & zero added sugar.',
    price: 3199,
    mrp: 4499,
    rating: 4.92,
    reviewsCount: 298,
    image: gncImg,
    sizes: ['1.81 kg (4 lbs)', '907g (2 lbs)'],
    flavours: ['Chocolate Fudge', 'Vanilla Cream', 'Cafe Mocha'],
    servings: 51,
    proteinPerServing: '24g',
    bcaaPerServing: '5.5g',
    keyHighlights: [
      '24g 100% Whey Blend (Concentrate & Isolate) supporting lean muscle recovery',
      'DigeZyme® digestive enzyme complex for rapid, smooth gastro-absorption',
      'Zero Added Sugar, gluten-free USA sports formulation trusted since 1935',
      'Banned substance tested & certified authentic importer verified'
    ],
    description:
      'GNC Pro Performance 100% Whey delivers pure, high-quality whey protein in every scoop. Tested and certified banned-substance free, it supplies essential amino acids to fuel athletic recovery.',
    nutritionFacts: {
      servingSize: '1 Scoop (35.5g)',
      servingsPerTub: 51,
      nutrients: [
        { label: 'Energy', amount: '138 kcal' },
        { label: 'Protein', amount: '24.0 g' },
        { label: 'BCAA', amount: '5.5 g' },
        { label: 'Carbs', amount: '4.5 g' }
      ]
    },
    howToUse: 'Mix 1 scoop with 180-240ml cold water or your favourite beverage. Drink after workout or between meals.',
    inStock: true,
    featured: true
  },
  {
    id: 'tp-one-science-whey',
    name: 'One Science Nutrition 100% Premium Whey Protein',
    category: 'whey',
    categoryLabel: 'Whey & Proteins',
    subType: 'whey-protein',
    subTypeLabel: 'Whey Protein',
    goal: 'muscle-building',
    goalLabel: 'European Grass-Fed Formula',
    tagline: '25g Grass-Fed whey protein, 6.6g BCAAs & 5.2g Glutamine for lean hypertrophy.',
    price: 4299,
    mrp: 5999,
    rating: 4.94,
    reviewsCount: 342,
    image: oneScienceImg,
    sizes: ['2.27 kg (5 lbs)', '907g (2 lbs)'],
    flavours: ['Chocolate Charge', 'Vanilla Swirl', 'Strawberry Delight'],
    servings: 76,
    proteinPerServing: '25g',
    bcaaPerServing: '6.6g',
    keyHighlights: [
      '25g Grass-Fed European Whey Protein per serving with ultra bioavailability',
      '6.6g BCAAs & 5.2g L-Glutamine for maximal muscle preservation and pump',
      'Formulated to refuel, repair, and build dense athletic muscle tissue',
      'Official importer scratch code verification on every tub'
    ],
    description:
      'One Science Nutrition 100% Premium Whey Protein is made from grass-fed cows, offering unmatched purity and a rich amino profile to fuel muscle repair and athletic conditioning.',
    nutritionFacts: {
      servingSize: '1 Scoop (30g)',
      servingsPerTub: 76,
      nutrients: [
        { label: 'Energy', amount: '116 kcal' },
        { label: 'Protein', amount: '25.0 g' },
        { label: 'BCAA', amount: '6.6 g' },
        { label: 'L-Glutamine', amount: '5.2 g' }
      ]
    },
    howToUse: 'Mix 1 scoop with 250ml water or milk in a shaker immediately post-training.',
    inStock: true,
    featured: true
  },
  {
    id: 'tp-gxn-armour-whey',
    name: 'GXN Armour Whey Anabolic Protein Fuel',
    category: 'whey',
    categoryLabel: 'Whey & Proteins',
    subType: 'whey-protein',
    subTypeLabel: 'Whey Protein',
    goal: 'muscle-building',
    goalLabel: 'Anabolic Muscle Fuel',
    tagline: '23g Anabolic Protein Fuel with 5g EAA & 4g Glutamic Acid in Mango Magic.',
    price: 2199,
    mrp: 2999,
    rating: 4.86,
    reviewsCount: 164,
    image: gxnArmourImg,
    sizes: ['907g (2 lbs)', '2 kg (4.4 lbs)'],
    flavours: ['Mango Magic', 'Mocha Cappuccino', 'Kulfi'],
    servings: 30,
    proteinPerServing: '23g',
    bcaaPerServing: '5g',
    keyHighlights: [
      '23g Anabolic Protein Fuel matrix engineered for intense hypertrophy',
      '5g Essential Amino Acids (EAA) and 4g Glutamic Acid per serving',
      'Hormone-free, authentic military-grade packaging with batch verification',
      'Refreshing Mango Magic flavor crafted specifically for Indian palate'
    ],
    description:
      'Greenex Nutrition GXN Armour Whey is an anabolic protein fuel designed for hardcore strength trainers, packing 23g protein and 5g EAAs to speed muscular rebuild.',
    nutritionFacts: {
      servingSize: '1 Scoop (30g)',
      servingsPerTub: 30,
      nutrients: [
        { label: 'Energy', amount: '122 kcal' },
        { label: 'Protein', amount: '23.0 g' },
        { label: 'EAA', amount: '5.0 g' },
        { label: 'Glutamic Acid', amount: '4.0 g' }
      ]
    },
    howToUse: 'Mix 1 scoop with 200ml chilled water 20 minutes after workout.',
    inStock: true,
    featured: false
  },

  // 2. WHEY & PROTEINS - PEA PROTEIN (Nutrabay Gold Hydrolyzed Pea)
  {
    id: 'tp-nutrabay-pea-protein',
    name: 'Nutrabay Gold Hydrolyzed 100% Pea Protein',
    category: 'whey',
    categoryLabel: 'Whey & Proteins',
    subType: 'pea-protein',
    subTypeLabel: 'Pea Protein',
    goal: 'muscle-building',
    goalLabel: 'Clean Vegan Plant Protein',
    tagline: '25g Hydrolyzed plant protein from yellow peas with 4.6g BCAAs & zero dairy.',
    price: 1899,
    mrp: 2699,
    rating: 4.9,
    reviewsCount: 188,
    image: nutrabayPeaImg,
    sizes: ['1 kg (2.2 lbs)', '2 kg (4.4 lbs)'],
    flavours: ['Rich Chocolate Creme', 'Kesar Badam Pista', 'Unflavored'],
    servings: 33,
    proteinPerServing: '25g',
    bcaaPerServing: '4.6g',
    keyHighlights: [
      '25g Complete Plant Protein per scoop from premium hydrolyzed yellow peas',
      '4.6g BCAAs to stimulate muscle protein synthesis without dairy or lactose',
      '100% Vegan, hypoallergenic, and certified by Trustified for purity',
      'Zero Added Sugar, naturally flavored for delicious dairy-free shakes'
    ],
    description:
      'Nutrabay Gold Hydrolyzed Pea Protein provides an ultra-clean plant-based protein source for athletes with dairy sensitivity or lactose intolerance. Delivers 25g protein per scoop.',
    nutritionFacts: {
      servingSize: '1 Scoop (33g)',
      servingsPerTub: 33,
      nutrients: [
        { label: 'Energy', amount: '124 kcal' },
        { label: 'Plant Protein', amount: '25.0 g' },
        { label: 'BCAA', amount: '4.6 g' },
        { label: 'Carbs', amount: '2.1 g' }
      ]
    },
    howToUse: 'Mix 1 scoop with 250ml water or almond milk. Best consumed post-workout or in morning smoothies.',
    inStock: true,
    featured: true
  },

  // 3. GAINER OPTIONS (Bulk Gainer & Weight Gainer)
  {
    id: 'tp-mb-mass-gainer',
    name: 'MuscleBlaze Super Gainer XXL High Calorie Bulker',
    category: 'gainers',
    categoryLabel: 'Gainer Options',
    subType: 'bulk-gainer',
    subTypeLabel: 'Bulk Gainer',
    goal: 'mass-gain',
    goalLabel: 'Hard Bulking & Weight Gain',
    tagline: 'High calorie mass formula with 1,120 calories and 45g protein for hardgainers.',
    price: 2199,
    mrp: 2999,
    rating: 4.89,
    reviewsCount: 310,
    image: mbMassGainerImg,
    sizes: ['3 kg (6.6 lbs)', '1 kg (2.2 lbs)', '5 kg (11 lbs)'],
    flavours: ['Chocolate', 'Banana Shake', 'Cookies & Cream'],
    servings: 30,
    proteinPerServing: '45g',
    bcaaPerServing: '9g',
    keyHighlights: [
      '45g Multi-Source Protein matrix for sustained muscle tissue bulking',
      '1,120 Dense Calories per serving with full cream milk for rapid scale gains',
      'Complex carbohydrates with 27 vitamins and minerals for optimal metabolism',
      '100% Authentic with importer verification scratch code'
    ],
    description:
      'MuscleBlaze Super Gainer XXL is crafted for hardgainers looking to put on dense size and muscle volume without sugar crashes.',
    nutritionFacts: {
      servingSize: '2 Scoops (100g)',
      servingsPerTub: 30,
      nutrients: [
        { label: 'Energy', amount: '560 kcal' },
        { label: 'Protein', amount: '22.5 g' },
        { label: 'Complex Carbs', amount: '112 g' }
      ]
    },
    howToUse: 'Consume 1-2 servings daily blended with 300ml whole milk and bananas.',
    inStock: true,
    featured: true
  },
  {
    id: 'tp-mb-weight-gainer-xxl',
    name: 'MuscleBlaze Mass Gainer XXL Weight Gainer',
    category: 'gainers',
    categoryLabel: 'Gainer Options',
    subType: 'weight-gainer',
    subTypeLabel: 'Weight Gainer',
    goal: 'mass-gain',
    goalLabel: 'Weight & Size Bulking',
    tagline: 'Balanced 1:3 protein-to-carb ratio with 27 essential vitamins for clean weight gain.',
    price: 1999,
    mrp: 2799,
    rating: 4.87,
    reviewsCount: 194,
    image: mbMassGainerImg,
    sizes: ['1 kg (2.2 lbs)', '3 kg (6.6 lbs)'],
    flavours: ['Chocolate', 'Kulfi', 'Banana'],
    servings: 20,
    proteinPerServing: '30g',
    bcaaPerServing: '6g',
    keyHighlights: [
      '30g High Quality Protein per serving with sustained carb energy release',
      'Enriched with digestive enzymes for smooth assimilation without bloating',
      'Zero added trans-fats, 100% genuine importer scratch verification code',
      'Ideal for post-workout mass recovery and weight gaining diets'
    ],
    description:
      'MuscleBlaze Mass Gainer XXL delivers a scientifically calibrated 1:3 protein-to-carbohydrate formula to help athletes and beginners pack on healthy body weight.',
    nutritionFacts: {
      servingSize: '2 Scoops (100g)',
      servingsPerTub: 20,
      nutrients: [
        { label: 'Energy', amount: '375 kcal' },
        { label: 'Protein', amount: '30.0 g' },
        { label: 'Carbohydrates', amount: '60.0 g' }
      ]
    },
    howToUse: 'Consume 1 serving post-workout or in between meals with 300ml milk.',
    inStock: true,
    featured: false
  },
  {
    id: 'tp-gnc-bulk-1340',
    name: 'GNC Pro Performance Bulk 1340 High-Calorie Mass Gainer',
    category: 'gainers',
    categoryLabel: 'Gainer Options',
    subType: 'bulk-gainer',
    subTypeLabel: 'Bulk Gainer',
    goal: 'mass-gain',
    goalLabel: 'Maximum Caloric Mass Building',
    tagline: '50g Protein, 1,340 nutrient-dense calories & 277g complex carbs for rapid size.',
    price: 3799,
    mrp: 5499,
    rating: 4.93,
    reviewsCount: 268,
    image: gncBulkGainerImg,
    sizes: ['3.24 kg (7.14 lbs)', '1.5 kg (3.3 lbs)'],
    flavours: ['Double Chocolate', 'Chocolate Peanut Butter', 'Vanilla Ice Cream'],
    servings: 12,
    proteinPerServing: '50g',
    bcaaPerServing: '11g',
    keyHighlights: [
      '50g High Biological Value Whey & Casein Protein matrix per serving',
      '1,340 Scientifically Formulated Dense Calories to fuel aggressive mass growth',
      '277g Carbohydrates to reload muscle glycogen and sustain intense hypertrophy',
      'Tested and certified banned-substance free with official GNC scratch authenticity seal'
    ],
    description:
      'GNC Pro Performance Bulk 1340 is an ultra-dense caloric powerhouse engineered for athletes needing intense fuel to gain weight and pack on heavy muscular bulk.',
    nutritionFacts: {
      servingSize: '4 Scoops (360g)',
      servingsPerTub: 12,
      nutrients: [
        { label: 'Energy', amount: '1340 kcal' },
        { label: 'Protein', amount: '50.0 g' },
        { label: 'Carbohydrates', amount: '277.0 g' },
        { label: 'BCAAs', amount: '11.0 g' }
      ]
    },
    howToUse: 'Mix 4 scoops with 700ml cold water or milk. Consume in 2 split servings post-workout and before bed.',
    inStock: true,
    featured: true
  },
  {
    id: 'tp-kevin-levrone-anabolic-mass',
    name: 'Kevin Levrone Signature Series Black Line Anabolic Mass',
    category: 'gainers',
    categoryLabel: 'Gainer Options',
    subType: 'bulk-gainer',
    subTypeLabel: 'Bulk Gainer',
    goal: 'mass-gain',
    goalLabel: 'Hardcore Anabolic Bulking',
    tagline: 'Hardcore European muscle mass stimulator with 30% protein, Creatine, DAA, Taurine & Fenugreek.',
    price: 4499,
    mrp: 6299,
    rating: 4.96,
    reviewsCount: 312,
    image: kevinAnabolicMassImg,
    sizes: ['3 kg (6.6 lbs)', '7 kg (15.4 lbs)'],
    flavours: ['Chocolate Velvet', 'Strawberry Supreme', 'Cookies & Cream'],
    servings: 25,
    proteinPerServing: '48g',
    bcaaPerServing: '10g',
    keyHighlights: [
      '30% Pure Protein matrix formulated under supervision of IFBB Legend Kevin Levrone',
      'Enhanced with Creatine Monohydrate, D-Aspartic Acid (DAA) and HMB for savage power',
      'Fenugreek extract, L-Arginine, and Taurine for optimal hormonal recovery & pumps',
      'Ultra-fine solubility with genuine European importer scratch verification seal'
    ],
    description:
      'Kevin Levrone Signature Series Anabolic Mass is an advanced sports mass stimulator packed with muscle-building co-factors, designed for serious lifters seeking dense, sculpted muscle mass.',
    nutritionFacts: {
      servingSize: '2 Scoops (120g)',
      servingsPerTub: 25,
      nutrients: [
        { label: 'Energy', amount: '438 kcal' },
        { label: 'Protein', amount: '48.0 g' },
        { label: 'Creatine Monohydrate', amount: '3600 mg' },
        { label: 'DAA', amount: '1200 mg' }
      ]
    },
    howToUse: 'Mix 2 scoops with 250-300ml water or milk. Consume 1-3 times daily (post-workout and between meals).',
    inStock: true,
    featured: true
  },
  {
    id: 'tp-on-serious-mass',
    name: 'Optimum Nutrition (ON) Serious Mass High Protein Weight Gainer',
    category: 'gainers',
    categoryLabel: 'Gainer Options',
    subType: 'weight-gainer',
    subTypeLabel: 'Weight Gainer',
    goal: 'mass-gain',
    goalLabel: 'World #1 Hardgainer Formula',
    tagline: 'World #1 Weight Gainer with 1,267 calories, 50g protein and 25 vitamins & minerals.',
    price: 3499,
    mrp: 4999,
    rating: 4.94,
    reviewsCount: 450,
    image: onSeriousMassImg,
    sizes: ['2.73 kg (6 lbs)', '5.44 kg (12 lbs)'],
    flavours: ['Banana', 'Chocolate', 'Vanilla', 'Chocolate Peanut Butter'],
    servings: 16,
    proteinPerServing: '50g',
    bcaaPerServing: '11.5g',
    keyHighlights: [
      '1,267 Dense Calories & 50g Blended Protein per serving to power weight gain',
      '256g Energy-Yielding Carbohydrates with zero added table sugar',
      'Fortified with 25 essential vitamins & minerals plus Creatine and L-Glutamine',
      '100% Genuine USA formula with TruSeal scratch verification hologram'
    ],
    description:
      'Optimum Nutrition Serious Mass is the ultimate weight gain formula, providing massive caloric density to hardgainers with fast metabolisms who struggle to build size.',
    nutritionFacts: {
      servingSize: '2 Heaping Scoops (334g)',
      servingsPerTub: 16,
      nutrients: [
        { label: 'Energy', amount: '1267 kcal' },
        { label: 'Protein', amount: '50.0 g' },
        { label: 'Carbohydrates', amount: '256.0 g' },
        { label: 'Creatine Monohydrate', amount: '1000 mg' }
      ]
    },
    howToUse: 'Blend 2 scoops with 700ml water or full-fat milk for 45-60 seconds. Drink 1/2 to 1 serving between meals.',
    inStock: true,
    featured: true
  },
  {
    id: 'tp-muscle-garage-dna-gainer',
    name: 'Muscle Garage Nutrition DNA Anabolic Mass Gainer',
    category: 'gainers',
    categoryLabel: 'Gainer Options',
    subType: 'bulk-gainer',
    subTypeLabel: 'Bulk Gainer',
    goal: 'mass-gain',
    goalLabel: 'Anabolic Muscle Recovery',
    tagline: 'High-Protein anabolic formula with 494 kcal, 21g protein and 6g BCAAs in military-grade pouch.',
    price: 2199,
    mrp: 3199,
    rating: 4.86,
    reviewsCount: 155,
    image: muscleGarageGainerImg,
    sizes: ['2.7 kg (6 lbs)', '5 kg (11 lbs)'],
    flavours: ['Chocolate Caramel', 'Choco Fudge', 'Almond Kulfi'],
    servings: 20,
    proteinPerServing: '21g',
    bcaaPerServing: '6g',
    keyHighlights: [
      'High Protein Mass Gainer matrix delivering sustained anabolic muscular recovery',
      '494 Calories with 60g Complex Carbohydrates and 6g branched-chain aminos',
      'Digestive enzyme complex for rapid GI tolerance and zero bloating',
      'Heavy duty resealable zip-lock stand-up bag with verified importer QR code'
    ],
    description:
      'Muscle Garage DNA Anabolic Mass Gainer combines rapid and slow-digesting proteins with complex carbs, supporting sustained nitrogen balance and muscle mass buildup.',
    nutritionFacts: {
      servingSize: '2 Scoops (100g)',
      servingsPerTub: 20,
      nutrients: [
        { label: 'Energy', amount: '494 kcal' },
        { label: 'Protein', amount: '21.0 g' },
        { label: 'Carbohydrates', amount: '60.0 g' },
        { label: 'BCAAs', amount: '6.0 g' }
      ]
    },
    howToUse: 'Mix 2 scoops with 300ml cold water or milk. Consume twice daily for rapid scale gains.',
    inStock: true,
    featured: false
  },
  {
    id: 'tp-labrada-muscle-mass',
    name: 'Labrada Muscle Mass Gainer',
    category: 'gainers',
    categoryLabel: 'Gainer Options',
    subType: 'weight-gainer',
    subTypeLabel: 'Weight Gainer',
    goal: 'mass-gain',
    goalLabel: 'Calorie-Dense Weight Gain',
    tagline: '1272 kcal & 53g protein powerhouse engineered for hardgainers struggling to gain body weight.',
    price: 3899,
    mrp: 5499,
    rating: 4.95,
    reviewsCount: 380,
    image: labradaMassGainerImg,
    sizes: ['3 kg (6.61 lbs)', '5.4 kg (12 lbs)'],
    flavours: ['Mocha', 'Chocolate', 'Strawberry', 'Vanilla'],
    servings: 18,
    proteinPerServing: '53g',
    bcaaPerServing: '12g',
    keyHighlights: [
      '1,272 Calories & 53g Muscle-Building Protein per full serving',
      'Delicious gourmet milk-shake taste formulated by IFBB Hall of Famer Lee Labrada',
      'No dextrose, sucrose, or corn syrup solids—100% clean complex carbohydrate sources',
      'Official tamper-evident seal and importer scratch code on every tub'
    ],
    description:
      'Labrada Muscle Mass Gainer was created by Lee Labrada to help hardgainers pack on slabs of muscle. Provides 1272 calories and 53g protein with an incredible milkshake taste.',
    nutritionFacts: {
      servingSize: '3 Scoops (341g)',
      servingsPerTub: 18,
      nutrients: [
        { label: 'Energy', amount: '1272 kcal' },
        { label: 'Protein', amount: '53.0 g' },
        { label: 'Carbohydrates', amount: '257.0 g' },
        { label: 'BCAAs', amount: '12.0 g' }
      ]
    },
    howToUse: 'Blend 3 scoops with 750ml milk or water. Divide into 2 servings throughout the day.',
    inStock: true,
    featured: true
  },

  // 4. ESSENTIALS (Creatine, Pre Workout)
  {
    id: 'tp-mb-creatine',
    name: 'MuscleBlaze Micronized Creatine Monohydrate',
    category: 'essentials',
    categoryLabel: 'Essentials',
    subType: 'creatine',
    subTypeLabel: 'Creatine',
    goal: 'strength-power',
    goalLabel: 'Explosive ATP Strength & Muscle Volumization',
    tagline: 'Ultra-pure 200 mesh micronized creatine monohydrate for savage lifting strength.',
    price: 999,
    mrp: 1499,
    rating: 4.96,
    reviewsCount: 520,
    image: mbCreatineImg,
    sizes: ['250g (83 Servings)', '100g (33 Servings)', '400g (133 Servings)'],
    flavours: ['Unflavored 100% Pure', 'Fruit Punch', 'Blue Cola'],
    servings: 83,
    keyHighlights: [
      '100% Pure Pharmaceutical Grade Micronized Creatine Monohydrate',
      'Ultra-fine 200 mesh powder with instantaneous water solubility',
      'Proven to increase heavy barbell strength and intracellular cell hydration',
      'Zero sugar, zero artificial colors, zero fillers'
    ],
    description:
      'Creatine is the gold standard for athletic power. MuscleBlaze Creatine Monohydrate accelerates cellular ATP regeneration, boosting heavy lifts.',
    nutritionFacts: {
      servingSize: '1 Scoop (3g)',
      servingsPerTub: 83,
      nutrients: [
        { label: 'Creatine Monohydrate', amount: '3000 mg' },
        { label: 'Calories', amount: '0 kcal' }
      ]
    },
    howToUse: 'Mix 1 scoop (3g) with water, fruit juice, or your post-workout protein shake.',
    inStock: true,
    featured: true
  },
  {
    id: 'tp-mb-preworkout',
    name: 'MuscleBlaze Pre Workout 200 Savage Pump Formula',
    category: 'essentials',
    categoryLabel: 'Essentials',
    subType: 'pre-workout',
    subTypeLabel: 'Pre Workout',
    goal: 'strength-power',
    goalLabel: 'Laser Focus & Muscle Vasodilation',
    tagline: '2000mg L-Citrulline + 200mg Caffeine for razor-sharp gym aggression.',
    price: 1299,
    mrp: 1899,
    rating: 4.88,
    reviewsCount: 240,
    image: mbPreworkoutImg,
    sizes: ['300g (30 Servings)'],
    flavours: ['Fruit Punch', 'Green Apple', 'Berry Blast'],
    servings: 30,
    keyHighlights: [
      '2000mg L-Citrulline Malate for intense nitric oxide pumps and vascularity',
      '1500mg Beta-Alanine to delay muscular fatigue during heavy lifting',
      '200mg Instant Caffeine for clean, focused training intensity',
      'Zero banned substances, verified importer guarantee'
    ],
    description:
      'Engineered for athletes who demand high workout volume and extreme pumps without overwhelming jitters.',
    nutritionFacts: {
      servingSize: '1 Scoop (10g)',
      servingsPerTub: 30,
      nutrients: [
        { label: 'L-Citrulline', amount: '2000 mg' },
        { label: 'Beta-Alanine', amount: '1500 mg' },
        { label: 'Caffeine', amount: '200 mg' }
      ]
    },
    howToUse: 'Mix 1 scoop with 200ml cold water 20-30 minutes before training.',
    inStock: true,
    featured: true
  },

  // 5. FAT LOSS (L-Carnitine)
  {
    id: 'tp-mb-carnitine',
    name: 'MuscleBlaze Liquid L-Carnitine 3300 Faster Fat Burn',
    category: 'fat-loss',
    categoryLabel: 'Fat Loss',
    subType: 'l-carnitine',
    subTypeLabel: 'L-Carnitine',
    goal: 'fat-loss',
    goalLabel: 'Fat Metabolism & Cardio Energy',
    tagline: '3300mg Pure Liquid L-Carnitine with Vitamin B5 for fast metabolic fat burning.',
    price: 1299,
    mrp: 1799,
    rating: 4.87,
    reviewsCount: 175,
    image: mbCarnitineImg,
    sizes: ['450ml (30 Servings)'],
    flavours: ['Lemon Lime', 'Tangy Orange'],
    servings: 30,
    keyHighlights: [
      '3300mg Clinical Strength L-Carnitine per serving',
      'Shuttles stubborn fatty acids into mitochondria to produce ATP cellular energy',
      'Liquid formulation absorbs significantly faster than capsules or tablets',
      'Zero sugar, zero stimulants—ideal for early morning cardio or lifting'
    ],
    description:
      'MuscleBlaze Liquid L-Carnitine 3300 converts stubborn fatty acids into metabolic workout energy, supporting cutting cycles without muscle loss.',
    nutritionFacts: {
      servingSize: '15ml (1 Spoon)',
      servingsPerTub: 30,
      nutrients: [
        { label: 'L-Carnitine', amount: '3300 mg' },
        { label: 'Vitamin B5', amount: '5 mg' }
      ]
    },
    howToUse: 'Take 1 serving (15ml) directly on an empty stomach before morning cardio or training.',
    inStock: true,
    featured: true
  },

  // 6. HEALTH & WELLNESS (Fish Oil, Multivitamin, Testo)
  {
    id: 'tp-mb-fishoil',
    name: 'MuscleBlaze Fish Oil Gold Triple Strength 1000mg',
    category: 'wellness',
    categoryLabel: 'Health & Wellness',
    subType: 'fish-oil',
    subTypeLabel: 'Fish Oil',
    goal: 'recovery-health',
    goalLabel: 'Joint Lubrication & Heart Health',
    tagline: 'Molecularly distilled deep-sea omega-3 with 560mg EPA & 400mg DHA.',
    price: 899,
    mrp: 1399,
    rating: 4.93,
    reviewsCount: 290,
    image: mbFishOilImg,
    sizes: ['60 Softgels', '120 Softgels'],
    flavours: ['Anti-Reflux Softgels'],
    servings: 60,
    keyHighlights: [
      '1000mg Deep Sea Fish Oil with high concentration 560mg EPA + 400mg DHA',
      'Molecularly distilled to eliminate all traces of mercury and heavy metals',
      'Enteric coated for zero fishy burps or unpleasant aftertaste',
      'Protects heavy squatting joints from wear, tear, and chronic inflammation'
    ],
    description:
      'Heavy lifting places stress on tendons and joints. MuscleBlaze Fish Oil Gold delivers clinical omega-3 fatty acids for joint mobility and cardiovascular support.',
    nutritionFacts: {
      servingSize: '1 Softgel',
      servingsPerTub: 60,
      nutrients: [
        { label: 'Fish Oil', amount: '1000 mg' },
        { label: 'EPA', amount: '560 mg' },
        { label: 'DHA', amount: '400 mg' }
      ]
    },
    howToUse: 'Take 1 softgel daily after your highest fat meal of the day.',
    inStock: true,
    featured: true
  },
  {
    id: 'tp-mb-vite',
    name: 'MuscleBlaze MB-Vite Daily Multivitamin for Athletes',
    category: 'wellness',
    categoryLabel: 'Health & Wellness',
    subType: 'multivitamin',
    subTypeLabel: 'Multivitamin',
    goal: 'recovery-health',
    goalLabel: 'Micronutrient Replenishment & Immunity',
    tagline: '24 Vital vitamins & minerals fortified with prebiotics & botanical extracts.',
    price: 699,
    mrp: 999,
    rating: 4.91,
    reviewsCount: 310,
    image: mbViteImg,
    sizes: ['60 Tablets', '120 Tablets'],
    flavours: ['Coated Tablets'],
    servings: 60,
    keyHighlights: [
      '100% RDA of essential vitamins A, C, D, E, K and B-Complex',
      'Chelated Zinc, Magnesium, and Iron to support athletic energy output',
      'Fortified with Ashwagandha and Ginseng for stress relief and vitality',
      'Replenishes micronutrients lost during heavy gym sweating'
    ],
    description:
      'MuscleBlaze MB-Vite Daily Multivitamin supplies 24 key micronutrients, protecting active athletes from immune dips and metabolic fatigue.',
    nutritionFacts: {
      servingSize: '1 Tablet',
      servingsPerTub: 60,
      nutrients: [
        { label: 'Vitamin C', amount: '80 mg' },
        { label: 'Zinc', amount: '15 mg' },
        { label: 'Vitamin D3', amount: '2000 IU' }
      ]
    },
    howToUse: 'Take 1 tablet daily with breakfast.',
    inStock: true,
    featured: true
  },
  {
    id: 'tp-mb-testo',
    name: 'MuscleBlaze Testo Pro Natural Male Vitality Booster',
    category: 'wellness',
    categoryLabel: 'Health & Wellness',
    subType: 'testo-booster',
    subTypeLabel: 'Testo Booster',
    goal: 'strength-power',
    goalLabel: 'Free Testosterone & Gym Drive',
    tagline: 'Standardized Ashwagandha, Safed Musli, Fenugreek & Boron for natural gym stamina.',
    price: 1499,
    mrp: 2199,
    rating: 4.88,
    reviewsCount: 160,
    image: mbTestoImg,
    sizes: ['60 Tablets'],
    flavours: ['Coated Tablets'],
    servings: 60,
    keyHighlights: [
      'Standardized herbal complex supporting endogenous free testosterone levels',
      'Contains Ashwagandha and Fenugreek to control cortisol and elevate strength',
      'Enhances gym stamina, barbell power, and overnight recovery',
      '100% Safe, non-hormonal, and zero PCT requirement'
    ],
    description:
      'MuscleBlaze Testo Pro optimizes natural vitality and strength output, helping serious lifters break through lifting plateaus naturally.',
    nutritionFacts: {
      servingSize: '1 Tablet',
      servingsPerTub: 60,
      nutrients: [
        { label: 'Ashwagandha Extract', amount: '300 mg' },
        { label: 'Fenugreek Extract', amount: '250 mg' },
        { label: 'Boron Proteinate', amount: '3 mg' }
      ]
    },
    howToUse: 'Take 1 tablet twice daily with water after meals.',
    inStock: true,
    featured: false
  }
];

export interface CategoryTabItem {
  id: string;
  label: string;
  category: string;
  subType?: string;
}

export const CATEGORIES: CategoryTabItem[] = [
  { id: 'all', label: 'All Products', category: 'all', subType: 'all' },
  { id: 'whey', label: 'Whey Protein', category: 'whey', subType: 'whey-protein' },
  { id: 'pea-protein', label: 'Pea Protein', category: 'whey', subType: 'pea-protein' },
  { id: 'gainers', label: 'Gainer', category: 'gainers', subType: 'all' },
  { id: 'creatine', label: 'Creatine', category: 'essentials', subType: 'creatine' },
  { id: 'l-carnitine', label: 'L-Carnitine', category: 'fat-loss', subType: 'l-carnitine' },
  { id: 'pre-workout', label: 'Pre Workout', category: 'essentials', subType: 'pre-workout' },
  { id: 'wellness', label: 'Health & Wellness', category: 'wellness', subType: 'all' }
];

export const GOALS = [
  { id: 'all', label: 'All Fitness Goals' },
  { id: 'muscle-building', label: 'Muscle Building' },
  { id: 'strength-power', label: 'Strength & Power' },
  { id: 'mass-gain', label: 'Mass Gain / Bulking' },
  { id: 'fat-loss', label: 'Fat Loss & Cutting' },
  { id: 'recovery-health', label: 'Joint & Vitality Health' }
];
