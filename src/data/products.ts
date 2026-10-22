import { Product } from '../types';

import wheyImg from '../assets/images/one_science_whey.jpg';
import muscleblazeWheyImg from '../assets/images/mb_biozyme_whey.jpg';
import asitisAtomWheyImg from '../assets/images/asitis_atom_whey.jpg';
import gncProWheyImg from '../assets/images/gnc_pro_whey.jpg';
import gxnArmourWheyImg from '../assets/images/gxn_armour_whey.jpg';
import nutrabayPeaProteinImg from '../assets/images/nutrabay_pea_protein.jpg';
import gncBulkGainerImg from '../assets/images/gnc_bulk_gainer_1792427121370.jpg';
import kevinAnabolicMassImg from '../assets/images/kevin_anabolic_mass_1792427122230.jpg';
import onSeriousMassImg from '../assets/images/on_serious_mass_1792427122673.jpg';
import labradaMassGainerImg from '../assets/images/labrada_mass_gainer_1792427123236.jpg';
import muscleGarageGainerImg from '../assets/images/muscle_garage_gainer_1792427122645.jpg';
import creatineImg from '../assets/images/mb_creatine.jpg';
import preworkoutImg from '../assets/images/mb_preworkout.jpg';
import massGainerImg from '../assets/images/mb_mass_gainer.jpg';
import omegaImg from '../assets/images/mb_fishoil.jpg';
import plantImg from '../assets/images/nutrabay_pea_protein.jpg';
import carnitineImg from '../assets/images/mb_carnitine.jpg';
import testoImg from '../assets/images/mb_testo.jpg';
import bcaaImg from '../assets/images/bcaa_amino_tub_1792317868984.jpg';
import fatBurnerImg from '../assets/images/fatburner_bottle_1792317884977.jpg';
import multivitaminImg from '../assets/images/mb_vite.jpg';
import jointFlexImg from '../assets/images/joint_flex_bottle_1792317885718.jpg';

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
      { id: 'isolate', label: 'Whey Isolate' },
      { id: 'pea-protein', label: 'Pea Protein' },
      { id: 'yeast-protein', label: 'Yeast Protein' }
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
    label: 'Essentials',
    subItems: [
      { id: 'pre-workout', label: 'Pre Workout' },
      { id: 'creatine', label: 'Creatine' },
      { id: 'bcaa', label: 'BCAA' },
      { id: 'eaa', label: 'EAA' }
    ]
  },
  {
    id: 'fat-loss',
    label: 'Fat Loss',
    subItems: [
      { id: 'l-carnitine', label: 'L-Carnitine' },
      { id: 'fat-burner', label: 'Fat Burner' },
      { id: 'cla', label: 'CLA 1000mg' }
    ]
  },
  {
    id: 'wellness',
    label: 'Health & Wellness',
    subItems: [
      { id: 'multivitamin', label: 'Multivitamin' },
      { id: 'fish-oil', label: 'Fish Oil' },
      { id: 'testo-booster', label: 'Testo Booster' },
      { id: 'joint-health', label: 'Health Joints' }
    ]
  }
];

export const PRODUCTS: Product[] = [
  // 1. WHEY & PROTEINS
  
{
  id: 'muscleblaze-biozyme-performance-whey',
  name: 'MuscleBlaze Biozyme Performance Whey',
  category: 'whey',
  categoryLabel: 'Whey & Proteins',
  subType: 'whey-protein',
  subTypeLabel: 'Whey Protein',
  goal: 'muscle-building',
  goalLabel: 'Muscle Building',
  tagline: '25g protein per serving to support your daily protein intake.',
  price: 4199,
  mrp: 4999,
  rating: 4.0,
  reviewsCount: 50,
  image: muscleblazeWheyImg,
  sizes: ['1 kg'],
  flavours: ['Rich Chocolate','Butter Cookie '],
  servings: 28,
  proteinPerServing: '25g',
  bcaaPerServing: '5.51g',
  keyHighlights: [
    '25g protein per 36g serving',
    '5.51g BCAAs per serving',
    'Contains whey protein concentrate',
    'Contains milk; check the product label for allergens'
  ],
  description:
    'MuscleBlaze Biozyme Performance Whey in Rich Chocolate flavour. Check the product packaging for the latest ingredients and nutrition information.',
  nutritionFacts: {
    servingSize: '36 g',
    servingsPerTub: 28,
    nutrients: [
      { label: 'Energy', amount: '144.08 kcal' },
      { label: 'Protein', amount: '25 g' },
      { label: 'Total Carbohydrates', amount: '6.51 g' },
      { label: 'Total Sugars', amount: '0.56 g' },
      { label: 'Added Sugars', amount: '0 g' },
      { label: 'Total Fat', amount: '2.24 g' },
      { label: 'BCAAs', amount: '5.51 g' },
      { label: 'EAAs', amount: '11.75 g' }
    ]
  },
  howToUse:
    'Follow the directions on the product label for serving size and preparation.',
  inStock: false,
  featured: true
},

 
{
  id: 'asitis-atom-pwr-whey-xl',
  name: 'AS-IT-IS ATOM PWR Whey Protein XL',
  category: 'whey',
  categoryLabel: 'Whey & Proteins',
  subType: 'whey-protein',
  subTypeLabel: 'Whey Protein',
  goal: 'muscle-building',
  goalLabel: 'Muscle Building',
  tagline: 'Whey protein supplement.',
  price: 2400,
  mrp: 3000,
  rating: 4.2,
  reviewsCount: 14,
  image: asitisAtomWheyImg,
  sizes: ['1 kg'],
  flavours: ['Dark Choclate' , 'Choco Hazel fusion ' , ' kesar kulfi', 'Cookies & Cream '],
  servings: 28,
  proteinPerServing: '27g',
  bcaaPerServing: '5.8g',
  keyHighlights: [
    '27g protein per 36g serving',
    '5.8g BCAAs per serving',
    'Contains whey protein concentrate',
    'Contains milk; check the product label for allergens'
  ],
  description:
    'Product details and nutrition information will be added after checking the product packaging.',
howToUse:
  'Add 1 heaped scoop (36 g) to 250 ml of chilled water. Mix until smooth. Follow the product label for serving and timing instructions.',

  inStock: true,
  featured: true
},


  // 2. GAINER OPTIONS (Bulk Gainer & Weight Gainer)
  {
    id: 'tp-bulk-gainer-titan',
    name: 'Titan Bulk Heavyweight Monster Mass Gainer',
    category: 'gainers',
    categoryLabel: 'Gainer Options',
    subType: 'bulk-gainer',
    subTypeLabel: 'Bulk Gainer',
    goal: 'mass-gain',
    goalLabel: 'Extreme Caloric Bulking',
    tagline: 'High-calorie bulking formula with whole-food complex carbohydrates.',
    price: 3299,
    mrp: 4499,
    rating: 4.87,
    reviewsCount: 110,
    image: massGainerImg,
    sizes: ['3 kg (6.6 lbs)', '5 kg (11 lbs)'],
    flavours: ['Vanilla Bean Bliss', 'Chocolate Brownie', 'Cookies & Cream'],
    servings: 24,
    proteinPerServing: '52g',
    bcaaPerServing: '11g',
    keyHighlights: [
      '52g Multi-Phase Protein (Whey + Casein + Egg Albumin)',
      '1,280 Dense Calories per serving with full cream milk',
      'Whole food carbs from rolled oats and sweet potato starch',
      'Enhanced with 3g Micronized Creatine & MCT healthy fats'
    ],
    description:
      'Formulated specifically for hardgainers struggling to gain thick muscle size. Clean carbohydrate matrix without cheap sugar crashes.',
    nutritionFacts: {
      servingSize: '2 Scoops (150g)',
      servingsPerTub: 24,
      nutrients: [
        { label: 'Energy (water)', amount: '620 kcal' },
        { label: 'Energy (milk)', amount: '1280 kcal' },
        { label: 'Protein', amount: '52.0 g' },
        { label: 'Complex Carbs', amount: '130.0 g' },
        { label: 'Creatine Monohydrate', amount: '3000 mg' }
      ]
    },
    howToUse: 'Consume 1-2 scoops daily blended with whole milk and peanut butter.',
    inStock: false,
    featured: false
  },
  {
    id: 'tp-weight-gainer-pro',
    name: 'Pro Weight Gainer Lean Calorie Complex',
    category: 'gainers',
    categoryLabel: 'Gainer Options',
    subType: 'weight-gainer',
    subTypeLabel: 'Weight Gainer',
    goal: 'mass-gain',
    goalLabel: 'Controlled Lean Weight Gain',
    tagline: 'Moderate calorie gainer for athletic weight increase without unwanted belly fat.',
    price: 2499,
    mrp: 3299,
    rating: 4.82,
    reviewsCount: 78,
    image: massGainerImg,
    sizes: ['2 kg (4.4 lbs)', '4 kg (8.8 lbs)'],
    flavours: ['Chocolate Hazelnut', 'Banana Shake'],
    servings: 20,
    proteinPerServing: '35g',
    bcaaPerServing: '7.5g',
    keyHighlights: [
      'Balanced 3:1 Carb-to-Protein ratio for controlled athletic mass',
      '650 nutrient-rich calories per serving',
      '22 Essential Micronutrients for metabolic energy utilization',
      'Zero refined sugar and trans-fat free'
    ],
    description:
      'Ideal for lifters who want steady scale progress without excessive water retention or subcutaneous fat accumulation.',
    nutritionFacts: {
      servingSize: '2 Scoops (100g)',
      servingsPerTub: 20,
      nutrients: [
        { label: 'Energy', amount: '420 kcal' },
        { label: 'Protein', amount: '35.0 g' },
        { label: 'Carbohydrates', amount: '70.0 g' }
      ]
    },
    howToUse: 'Take 1 serving post workout and 1 serving between meals.',
    inStock: true,
    featured: false
  },

  // 3. ESSENTIALS (Pre Workout, BCAA, EAA, Creatine)
  {
    id: 'tp-preworkout-alpha',
    name: 'Alpha Surge High-Octane Pre-Workout Formula',
    category: 'essentials',
    categoryLabel: 'Essentials',
    subType: 'pre-workout',
    subTypeLabel: 'Pre Workout',
    goal: 'strength-power',
    goalLabel: 'Tunnel-Vision Focus & Muscle Pumps',
    tagline: '4000mg L-Citrulline + 3200mg Beta-Alanine for savage gym drive.',
    price: 1899,
    mrp: 2799,
    rating: 4.9,
    reviewsCount: 145,
    image: preworkoutImg,
    sizes: ['450g (30 Servings)'],
    flavours: ['Raspberry Rush', 'Electric Blueberry', 'Tangy Orange Burst'],
    servings: 30,
    keyHighlights: [
      '4000mg Pure L-Citrulline Malate 2:1 for nitric oxide vasodilation',
      '3200mg CarnoSyn® Beta-Alanine to buffer lactic acid burn',
      '350mg Caffeine Anhydrous with L-Theanine for jitter-free drive',
      'Himalayan Pink Salt electrolytes for cell hydration'
    ],
    description:
      'Fully clinical formula with no proprietary blends. Clean explosive power designed to shatter personal lifting records.',
    nutritionFacts: {
      servingSize: '1 Scoop (15g)',
      servingsPerTub: 30,
      nutrients: [
        { label: 'L-Citrulline Malate 2:1', amount: '4000 mg' },
        { label: 'Beta-Alanine', amount: '3200 mg' },
        { label: 'Caffeine Anhydrous', amount: '350 mg' },
        { label: 'L-Tyrosine', amount: '500 mg' }
      ]
    },
    howToUse: 'Mix 1 scoop with 250ml water 20 minutes before training.',
    inStock: true,
    featured: false
  },
  {
    id: 'tp-creatine-gold',
    name: 'The Prime Pure Micronized Creatine Monohydrate',
    category: 'essentials',
    categoryLabel: 'Essentials',
    subType: 'creatine',
    subTypeLabel: 'Creatine',
    goal: 'strength-power',
    goalLabel: 'Explosive ATP Strength Resynthesis',
    tagline: '200 Mesh pharmaceutical grade micronized creatine for raw power.',
    price: 1199,
    mrp: 1699,
    rating: 4.95,
    reviewsCount: 312,
    image: creatineImg,
    sizes: ['500g (100 Servings)', '250g (50 Servings)'],
    flavours: ['Unflavored 100% Pure', 'Fruit Punch', 'Green Apple'],
    servings: 100,
    keyHighlights: [
      '100% Creapure® grade micronized creatine monohydrate',
      'Ultra-fine 200 mesh powder with instant solubility',
      'Proven to increase heavy barbell strength and intracellular volume',
      'Zero fillers, artificial colors, or additives'
    ],
    description:
      'Creatine is the most scientifically proven compound in fitness. The Prime Creatine delivers instant cellular hydration without bloating.',
    nutritionFacts: {
      servingSize: '1 Scoop (3g)',
      servingsPerTub: 100,
      nutrients: [
        { label: 'Creatine Monohydrate', amount: '3000 mg' },
        { label: 'Calories', amount: '0 kcal' }
      ]
    },
    howToUse: 'Take 1 scoop (3g) daily with your protein shake or fruit juice.',
    inStock: true,
    featured: false
  },
  {
    id: 'tp-bcaa-instant',
    name: 'IntraFuel Instant Fermented BCAA 2:1:1',
    category: 'essentials',
    categoryLabel: 'Essentials',
    subType: 'bcaa',
    subTypeLabel: 'BCAA',
    goal: 'recovery-health',
    goalLabel: 'Intra-Workout Muscle Anti-Catabolism',
    tagline: '7g Leucine-dominant branched-chain aminos with raw coconut electrolytes.',
    price: 1299,
    mrp: 1899,
    rating: 4.86,
    reviewsCount: 88,
    image: bcaaImg,
    sizes: ['300g (30 Servings)'],
    flavours: ['Watermelon Frost', 'Tangy Orange', 'Green Apple Fizz'],
    servings: 30,
    proteinPerServing: '0g',
    bcaaPerServing: '7g',
    keyHighlights: [
      '7g Instantized Vegan Fermented BCAA in 2:1:1 Ratio',
      'Preserves muscle tissue during intense lifting sets',
      'Coconut Water Powder for continuous electrolyte rehydration',
      'Zero sugar, zero carbohydrates'
    ],
    description:
      'Sip between heavy lifting sets to prevent muscle catabolism and keep pump volume sustained throughout your workout.',
    nutritionFacts: {
      servingSize: '1 Scoop (10g)',
      servingsPerTub: 30,
      nutrients: [
        { label: 'L-Leucine', amount: '3500 mg' },
        { label: 'L-Isoleucine', amount: '1750 mg' },
        { label: 'L-Valine', amount: '1750 mg' }
      ]
    },
    howToUse: 'Sip 1 scoop mixed in 400ml water during gym workouts.',
    inStock: true,
    featured: false
  },
  {
    id: 'tp-eaa-matrix',
    name: 'Complete EAA 9 Essential Amino Acid Matrix',
    category: 'essentials',
    categoryLabel: 'Essentials',
    subType: 'eaa',
    subTypeLabel: 'EAA',
    goal: 'recovery-health',
    goalLabel: 'Full Spectrum Muscle Repair',
    tagline: 'All 9 essential amino acids the human body cannot produce on its own.',
    price: 1499,
    mrp: 2199,
    rating: 4.89,
    reviewsCount: 75,
    image: bcaaImg,
    sizes: ['350g (30 Servings)'],
    flavours: ['Blueberry Razz', 'Lemon Lime Splash'],
    servings: 30,
    keyHighlights: [
      '8g Full-Spectrum EAA complex triggers complete protein synthesis',
      'Accelerates muscular repair faster than regular BCAAs alone',
      'AstraGin® enhanced for 30% higher amino acid absorption',
      'Clean vegan fermented source'
    ],
    description:
      'Contains all 9 building blocks of muscle protein synthesis, speeding up recovery and preventing delayed onset muscle soreness (DOMS).',
    nutritionFacts: {
      servingSize: '1 Scoop (11.5g)',
      servingsPerTub: 30,
      nutrients: [
        { label: 'Total Essential Amino Acids', amount: '8000 mg' },
        { label: 'AstraGin® Extract', amount: '50 mg' }
      ]
    },
    howToUse: 'Drink 1 scoop daily during training or between meals.',
    inStock: true,
    featured: false
  },

  // 4. FAT LOSS (L-Carnitine, Fat Burner, CLA)
  {
    id: 'tp-carnitine-liquid',
    name: 'Elite Burn Liquid L-Carnitine 3200mg',
    category: 'fat-loss',
    categoryLabel: 'Fat Loss',
    subType: 'l-carnitine',
    subTypeLabel: 'L-Carnitine',
    goal: 'fat-loss',
    goalLabel: 'Fat Metabolism & Cardio Energy',
    tagline: 'High-absorption liquid carnitine shuttles long-chain fatty acids into mitochondria.',
    price: 1399,
    mrp: 1999,
    rating: 4.87,
    reviewsCount: 96,
    image: carnitineImg,
    sizes: ['473ml (31 Servings)'],
    flavours: ['Citrus Rush', 'Green Apple Blast'],
    servings: 31,
    keyHighlights: [
      '3200mg Pure L-Carnitine per tablespoon dose',
      'Transports stubborn stored fat into cellular furnaces for ATP energy',
      'Liquid fast-acting absorption with zero waiting time',
      'Zero sugar, zero stimulants, perfect for morning cardio'
    ],
    description:
      'Liquid L-Carnitine speeds the burning of fatty acids during cardio and weight training while reducing post-workout oxidative muscle damage.',
    nutritionFacts: {
      servingSize: '1 Tablespoon (15ml)',
      servingsPerTub: 31,
      nutrients: [
        { label: 'L-Carnitine', amount: '3200 mg' },
        { label: 'Pantothenic Acid (Vitamin B5)', amount: '10 mg' }
      ]
    },
    howToUse: 'Take 1 tablespoon (15ml) directly on an empty stomach before morning cardio or gym.',
    inStock: true,
    featured: false
  },
  {
    id: 'tp-fat-burner-thermo',
    name: 'ThermoShred High-Potency Metabolic Fat Burner',
    category: 'fat-loss',
    categoryLabel: 'Fat Loss',
    subType: 'fat-burner',
    subTypeLabel: 'Fat Burner',
    goal: 'fat-loss',
    goalLabel: 'Thermogenic Calorie Expenditure',
    tagline: 'Advanced thermogenic formula with Green Tea, Capsicum & Cayenne pepper extract.',
    price: 1599,
    mrp: 2299,
    rating: 4.84,
    reviewsCount: 82,
    image: fatBurnerImg,
    sizes: ['60 Veg Capsules'],
    flavours: ['Standard Capsules'],
    servings: 60,
    keyHighlights: [
      'Clinically dosed EGCG Green Tea Extract for natural metabolism rise',
      'Capsimax® red pepper extract suppresses cravings and burns calories',
      'Clean energy kick without jitters or nervous heartbeat',
      'Chromium Picolinate for healthy blood glucose control'
    ],
    description:
      'ThermoShred targets stubborn subcutaneous fat areas by stimulating metabolic burn rate and curbing late-night cravings.',
    nutritionFacts: {
      servingSize: '1 Capsule',
      servingsPerTub: 60,
      nutrients: [
        { label: 'Green Tea Extract (50% EGCG)', amount: '350 mg' },
        { label: 'Caffeine Anhydrous', amount: '150 mg' },
        { label: 'Capsicum Extract', amount: '50 mg' },
        { label: 'Bioperine®', amount: '5 mg' }
      ]
    },
    howToUse: 'Take 1 capsule before breakfast and 1 capsule before workout with plenty of water.',
    inStock: true,
    featured: false
  },
  {
    id: 'tp-cla-toning',
    name: 'Pure CLA 1000mg Lean Toning Softgels',
    category: 'fat-loss',
    categoryLabel: 'Fat Loss',
    subType: 'cla',
    subTypeLabel: 'CLA 1000mg',
    goal: 'fat-loss',
    goalLabel: 'Body Recomposition & Muscle Tone',
    tagline: 'Conjugated Linoleic Acid derived from pure safflower seed oil.',
    price: 1199,
    mrp: 1799,
    rating: 4.81,
    reviewsCount: 61,
    image: fatBurnerImg,
    sizes: ['90 Softgels'],
    flavours: ['Standard Softgels'],
    servings: 90,
    keyHighlights: [
      '1000mg Pure Conjugated Linoleic Acid (CLA) from cold-pressed safflower',
      'Helps body metabolize fat cells while preserving hard-earned muscle',
      '100% Stimulant-free, can be stacked safely with pre-workouts',
      'Supports healthy waistline body composition'
    ],
    description:
      'Stimulant-free body toning fatty acid that prevents fat storage and aids long-term body composition management.',
    nutritionFacts: {
      servingSize: '1 Softgel',
      servingsPerTub: 90,
      nutrients: [
        { label: 'Safflower Oil', amount: '1250 mg' },
        { label: 'Active CLA Isomers', amount: '1000 mg' }
      ]
    },
    howToUse: 'Take 1 softgel 3 times daily with meals.',
    inStock: true,
    featured: false
  },

  // 5. HEALTH & WELLNESS (Multivitamin, Fish Oil, Testo Booster, Joint Health)
  {
    id: 'tp-multivitamin-zenith',
    name: 'Zenith Ultra Complete Daily Multivitamin',
    category: 'wellness',
    categoryLabel: 'Health & Wellness',
    subType: 'multivitamin',
    subTypeLabel: 'Multivitamin',
    goal: 'recovery-health',
    goalLabel: 'Immune & Daily Athletic Vitality',
    tagline: 'High-potency formulation with 24 vitamins, chelated minerals and herbs.',
    price: 799,
    mrp: 1299,
    rating: 4.91,
    reviewsCount: 165,
    image: multivitaminImg,
    sizes: ['60 Tablets'],
    flavours: ['Standard Tablets'],
    servings: 60,
    keyHighlights: [
      '100% RDA of Essential Vitamins A, C, D3, E, K2 & B-Complex',
      'Chelated Zinc, Magnesium Bisglycinate and Chromium for max absorption',
      'Added Ginseng & Ashwagandha for vitality and stress reduction',
      'Protects against athletic micronutrient depletion'
    ],
    description:
      'Intense gym workouts deplete trace micronutrients. Zenith Multivitamin replenishes what heavy lifting burns away.',
    nutritionFacts: {
      servingSize: '1 Tablet',
      servingsPerTub: 60,
      nutrients: [
        { label: 'Vitamin D3', amount: '2000 IU' },
        { label: 'Zinc Glycinate', amount: '15 mg' },
        { label: 'Vitamin C', amount: '80 mg' },
        { label: 'Magnesium', amount: '100 mg' }
      ]
    },
    howToUse: 'Take 1 tablet daily with breakfast.',
    inStock: true,
    featured: false
  },
  {
    id: 'tp-fishoil-zenith',
    name: 'Zenith Triple Strength Deep-Sea Fish Oil',
    category: 'wellness',
    categoryLabel: 'Health & Wellness',
    subType: 'fish-oil',
    subTypeLabel: 'Fish Oil',
    goal: 'recovery-health',
    goalLabel: 'Cardiovascular & Joint Anti-Inflammatory',
    tagline: 'Molecularly distilled omega-3 with 600mg EPA and 400mg DHA per softgel.',
    price: 999,
    mrp: 1499,
    rating: 4.93,
    reviewsCount: 240,
    image: omegaImg,
    sizes: ['120 Softgels', '60 Softgels'],
    flavours: ['Lemon Citrus (Burp Free)'],
    servings: 60,
    keyHighlights: [
      '1000mg Pure Omega-3 with 600mg EPA & 400mg DHA',
      'Molecularly distilled to eliminate mercury and heavy metals',
      'Enteric coated with natural citrus oil—zero fishy burps',
      'Soothes heavy barbell joint pain and supports arterial health'
    ],
    description:
      'Heavy squats and bench presses place mechanical stress on joints. This ultra-pure deep sea omega-3 keeps connective tissue lubricated.',
    nutritionFacts: {
      servingSize: '2 Softgels',
      servingsPerTub: 60,
      nutrients: [
        { label: 'Fish Oil', amount: '2000 mg' },
        { label: 'EPA', amount: '600 mg' },
        { label: 'DHA', amount: '400 mg' }
      ]
    },
    howToUse: 'Take 1-2 softgels daily with meals.',
    inStock: true,
    featured: false
  },
  {
    id: 'tp-testo-booster-forge',
    name: 'Forge Alpha Herbal Natural Testo Booster',
    category: 'wellness',
    categoryLabel: 'Health & Wellness',
    subType: 'testo-booster',
    subTypeLabel: 'Testo Booster',
    goal: 'strength-power',
    goalLabel: 'Free Testosterone & Male Vitality',
    tagline: 'Standardized Ashwagandha KSM-66, Tongkat Ali, Shilajit & Tribulus formula.',
    price: 1699,
    mrp: 2399,
    rating: 4.88,
    reviewsCount: 114,
    image: testoImg,
    sizes: ['60 Veg Capsules'],
    flavours: ['Standard Capsules'],
    servings: 60,
    keyHighlights: [
      'Standardized KSM-66® Ashwagandha lowers cortisol and elevates free T',
      'Pure Himalayan Shilajit resin with 75% Fulvic Acid',
      'Tongkat Ali & Fenugreek extract for libido, drive and gym stamina',
      '100% Herbal and safe—non-hormonal & zero PCT needed'
    ],
    description:
      'Naturally optimizes endogenous hormone levels, improving gym power output, mental drive, and overnight recovery.',
    nutritionFacts: {
      servingSize: '2 Capsules',
      servingsPerTub: 30,
      nutrients: [
        { label: 'KSM-66® Ashwagandha', amount: '600 mg' },
        { label: 'Purified Shilajit Extract', amount: '300 mg' },
        { label: 'Tongkat Ali Extract', amount: '200 mg' },
        { label: 'Safed Musli Extract', amount: '200 mg' }
      ]
    },
    howToUse: 'Take 2 capsules at bedtime with lukewarm milk or water.',
    inStock: true,
    featured: false
  },
  {
    id: 'tp-joint-flex-health',
    name: 'Joint Flex Complete Cartilage & Mobility Formula',
    category: 'wellness',
    categoryLabel: 'Health & Wellness',
    subType: 'joint-health',
    subTypeLabel: 'Health Joints',
    goal: 'recovery-health',
    goalLabel: 'Knee, Shoulder & Elbow Cartilage Support',
    tagline: 'Glucosamine Sulfate + Chondroitin + MSM + Boswellia serrata for lifters.',
    price: 1299,
    mrp: 1899,
    rating: 4.85,
    reviewsCount: 68,
    image: jointFlexImg,
    sizes: ['60 Tablets'],
    flavours: ['Standard Tablets'],
    servings: 60,
    keyHighlights: [
      '1500mg Glucosamine Sulfate regenerates joint cushioning cartilage',
      'Chondroitin + MSM reduces joint inflammation after heavy lifts',
      'Boswellia & Turmeric Curcumin for natural pain relief',
      'Crucial for heavy squatters and bench press lifters'
    ],
    description:
      'Engineered for lifters dealing with knee cracking or shoulder stiffness. Protects and rebuilds cartilage tissue.',
    nutritionFacts: {
      servingSize: '2 Tablets',
      servingsPerTub: 30,
      nutrients: [
        { label: 'Glucosamine Sulfate', amount: '1500 mg' },
        { label: 'Chondroitin Sulfate', amount: '500 mg' },
        { label: 'MSM', amount: '500 mg' },
        { label: 'Boswellia Extract', amount: '200 mg' }
      ]
    },
    howToUse: 'Take 2 tablets daily after lunch or dinner.',
    inStock: true,
    featured: false
  },
{
  id: 'gnc-pro-performance-whey',
  name: 'GNC Pro Performance 100% Whey',
  category: 'whey',
  categoryLabel: 'Whey & Proteins',
  subType: 'whey-protein',
  subTypeLabel: 'Whey Protein',
  goal: 'muscle-building',
  goalLabel: 'Muscle Building',
  tagline: 'Whey protein supplement.',
  price: 5000,
  mrp: 6500,
  rating: 4.0,
  reviewsCount: 20,
  image: gncProWheyImg,
  sizes: ['1.81 kg'],
  flavours: ['Chocolate fudge', ' Cafe Mocha ' ],
  servings: 51,
  proteinPerServing: '24gm',
  bcaaPerServing: '5.5gm',
  keyHighlights: ['24g High-Quality Whey Protein - supports lean muscle growth'
                  '5.7g BCAAs - helps reduce muscle fatigue and improve endurance'
                  '12.3g EAAs - aids faster recovery and muscle repair '
                  'Leucine-rich profile - supports muscle protein synthesis '
                  'DigeZyme® Enzyme Blend - for easy digestion and reduced bloating '],
  description:
    'Product details and nutrition information will be added after checking the product packaging.',
  howToUse:[
  "Mix 1 scoop with 200–250 ml of water or milk.",
  "Water: Light texture and convenient mixing.",
  "Milk: Creamier texture and additional calories."
],
  inStock: false,
  featured: false
},

{
  id: 'gxn-armour-whey-anabolic',
  name: 'GXN Armour Whey Anabolic Protein Fuel',
  category: 'whey',
  categoryLabel: 'Whey & Proteins',
  subType: 'whey-protein',
  subTypeLabel: 'Whey Protein',
  goal: 'muscle-building',
  goalLabel: 'Muscle Building',
  tagline: 'Whey protein supplement.',
  price: 4500,
  mrp: 8000,
  rating: 3.8,
  reviewsCount: 50,
  image: gxnArmourWheyImg,
  sizes: [42],
  flavours: ['Rose Milk' , 'Fruity Pebbles '],
  servings: 43,
  proteinPerServing: '24g',
  EAACreatine: '3g',
  keyHighlights: [],
  description: "GXN Beast Whey is built for people who train hard and expect more from their daily nutrition. It combines whey protein and fermented yeast protein with added creatine and a digestive enzyme blend to support daily protein intake and an active lifestyle.\n\nWith 24 g protein and 9.5 g naturally occurring Essential Amino Acids (EAAs) per serving, the formulation also provides 3 g Creatine Monohydrate and a 420 mg Digestive Enzyme Blend containing Lactase and Papain.",
  howToUse:
   'Mix 1 scoop, approximately 42 g, with 250–300 mL water or milk. Consume one serving per day. Do not exceed the recommended daily usage. .',
  inStock: false,
  featured: true
},

{
  id: 'nutrabay-gold-hydrolyzed-pea-protein',
  name: 'Nutrabay Gold Hydrolyzed 100% Pea Protein',
  category: 'whey',
  categoryLabel: 'Whey & Proteins',
  subType: 'plant-protein',
  subTypeLabel: 'Plant Protein',
  goal: 'muscle-building',
  goalLabel: 'Muscle Building',
  tagline: 'Plant-based protein supplement.',
  price: 1500,
  mrp: 1800,
  rating: 4.0,
  reviewsCount: 40,
  image: nutrabayPeaProteinImg,
  sizes: [' 1kg'],
  flavours: ['Cold Coffee ' , ' Rich Chocolate creme '],
  servings: '40 g ',
  proteinPerServing: ' 25 g ',
  bcaaPerServing: ' 4.6 g ',
  keyHighlights: [],
  description:
    'Product details and nutrition information will be added after checking the product packaging.',
  howToUse:
    'Follow the directions on the product label.',
  inStock: true,
  featured: true
},

{
  id: 'gnc-pro-performance-bulk-1340',
  name: 'GNC Pro Performance Bulk 1340 High-Calorie Mass Gainer',
  category: 'mass-gainer',
  categoryLabel: 'Mass Gainers',
  subType: 'mass-gainer',
  subTypeLabel: 'Mass Gainer',
  goal: 'weight-gain',
  goalLabel: 'Weight Gain',
  tagline: 'Mass gainer supplement.',
  price: 2500,
  mrp: 2650,
  rating: 4.0,
  reviewsCount: 40,
  image: gncBulkGainerImg,
  sizes: ['3 kg'],
  flavours: [' Double Chocolate '],
  servings: 6,
  proteinPerServing: '50 g',
  bcaaPerServing: '',
  keyHighlights: [],
  description:
    'Product details and nutrition information will be added after checking the product packaging.',
  howToUse:
    'Follow the directions on the product label.',
  inStock: false,
  featured: false
},

{
  id: 'kevin-levrone-black-line-anabolic-mass',
  name: 'Kevin Levrone Signature Series Black Line Anabolic Mass',
  category: 'mass-gainer',
  categoryLabel: 'Mass Gainers',
  subType: 'mass-gainer',
  subTypeLabel: 'Mass Gainer',
  goal: 'weight-gain',
  goalLabel: 'Weight Gain',
  tagline: 'Mass gainer supplement.',
  price: 0,
  mrp: 0,
  rating: 0,
  reviewsCount: 0,
  image: kevinAnabolicMassImg,
  sizes: [],
  flavours: [],
  servings: 0,
  proteinPerServing: '',
  bcaaPerServing: '',
  keyHighlights: [],
  description:
    'Product details and nutrition information will be added after checking the product packaging.',
  howToUse:
    'Follow the directions on the product label.',
  inStock: false,
  featured: false
},

{
  id: 'on-serious-mass-weight-gainer',
  name: 'Optimum Nutrition (ON) Serious Mass High Protein Weight Gainer',
  category: 'mass-gainer',
  categoryLabel: 'Mass Gainers',
  subType: 'mass-gainer',
  subTypeLabel: 'Mass Gainer',
  goal: 'weight-gain',
  goalLabel: 'Weight Gain',
  tagline: 'Weight gainer supplement.',
  price: 0,
  mrp: 0,
  rating: 0,
  reviewsCount: 0,
  image: onSeriousMassImg,
  sizes: [],
  flavours: [],
  servings: 0,
  proteinPerServing: '',
  bcaaPerServing: '',
  keyHighlights: [],
  description:
    'Product details and nutrition information will be added after checking the product packaging.',
  howToUse:
    'Follow the directions on the product label.',
  inStock: false,
  featured: false
},

{
  id: 'labrada-muscle-mass-gainer',
  name: 'Labrada Muscle Mass Gainer',
  category: 'mass-gainer',
  categoryLabel: 'Mass Gainers',
  subType: 'mass-gainer',
  subTypeLabel: 'Mass Gainer',
  goal: 'weight-gain',
  goalLabel: 'Weight Gain',
  tagline: 'Mass gainer supplement.',
  price: 0,
  mrp: 0,
  rating: 0,
  reviewsCount: 0,
  image: labradaMassGainerImg,
  sizes: [],
  flavours: [],
  servings: 0,
  proteinPerServing: '',
  bcaaPerServing: '',
  keyHighlights: [],
  description:
    'Product details and nutrition information will be added after checking the product packaging.',
  howToUse:
    'Follow the directions on the product label.',
  inStock: false,
  featured: false
},

{
  id: 'muscle-garage-dna-anabolic-mass',
  name: 'Muscle Garage Nutrition DNA Anabolic Mass Gainer',
  category: 'mass-gainer',
  categoryLabel: 'Mass Gainers',
  subType: 'mass-gainer',
  subTypeLabel: 'Mass Gainer',
  goal: 'weight-gain',
  goalLabel: 'Weight Gain',
  tagline: 'Mass gainer supplement.',
  price: 0,
  mrp: 0,
  rating: 0,
  reviewsCount: 0,
  image: muscleGarageGainerImg,
  sizes: [],
  flavours: [],
  servings: 0,
  proteinPerServing: '',
  bcaaPerServing: '',
  keyHighlights: [],
  description:
    'Product details and nutrition information will be added after checking the product packaging.',
  howToUse:
    'Follow the directions on the product label.',
  inStock: false,
  featured: false
},

];

export const CATEGORIES = [
  { id: 'all', label: 'All Products' },
  { id: 'whey', label: 'Whey & Proteins' },
  { id: 'gainers', label: 'Gainer Options' },
  { id: 'essentials', label: 'Essentials' },
  { id: 'fat-loss', label: 'Fat Loss' },
  { id: 'wellness', label: 'Health & Wellness' }
];

export const GOALS = [
  { id: 'all', label: 'All Fitness Goals' },
  { id: 'muscle-building', label: 'Muscle Building' },
  { id: 'strength-power', label: 'Strength & Power' },
  { id: 'mass-gain', label: 'Mass Gain / Bulking' },
  { id: 'fat-loss', label: 'Fat Loss & Cutting' },
  { id: 'recovery-health', label: 'Joint & Vitality Health' }
];
