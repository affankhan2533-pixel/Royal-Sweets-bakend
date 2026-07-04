export interface NutritionFacts {
  calories: number;
  energy: number; // in kJ
  sugar: number; // in g
  protein: number; // in g
  fat: number; // in g
  cholesterol: number; // in mg
  fiber: number; // in g
  carbohydrates: number; // in g
  servingSize: string;
}

export interface HealthTransparency {
  sweetness: number; // 1-10 scale
  richness: number; // 1-10 scale
  protein: number; // 1-10 scale
  fitnessScore: number; // 1-10 scale
}

export interface FreshnessInfo {
  madeTime: string;
  score: number; // percentage, e.g. 98
  bestBeforeDays: number;
  prepTime: string;
}

export interface SweetProduct {
  id: string;
  name: string;
  category: "Traditional" | "Sugar-Free" | "Bakery" | "Cookies" | "Chocolates" | "Dates" | "Dry Fruits" | "Honey" | "Ayurvedic" | "Farshan" | "Chivda" | "Sev" | "Mix Namkeen" | "Bhujia" | "Boondi" | "Mathri" | "Papdi" | "Khakhra" | "Chakli" | "Dal";
  tagline: string;
  desc: string;
  pricePerPiece: number;
  pricePerKg: number;
  weightPerPiece: number;
  image: string;
  accent: string;
  availability: "In Stock" | "Limited Stock" | "Fresh Batch Preparing";
  stockCount: number;
  badges: string[];
  health: HealthTransparency;
  nutrition: NutritionFacts;
  freshness: FreshnessInfo;
  subCategory?: string;
}

export const INITIAL_SWEETS: SweetProduct[] = [
  {
    "id": "premium-butter-cookie",
    "name": "Handcrafted Premium Butter Cookie",
    "category": "Cookies",
    "tagline": "Pure Golden Butter Melting Cookie",
    "desc": "Large, rich, handcrafted melting butter cookie wrapped in clear wrap. Perfect golden color with standard crispy texture.",
    "pricePerPiece": 20,
    "pricePerKg": 800,
    "weightPerPiece": 40,
    "image": "/images/products/cookies/premium-butter-cookie.webp",
    "accent": "#E28743",
    "availability": "In Stock",
    "stockCount": 100,
    "badges": [
      "Handcrafted",
      "Pure Ghee Butter"
    ],
    "health": {
      "sweetness": 6,
      "richness": 8,
      "protein": 3,
      "fitnessScore": 7
    },
    "nutrition": {
      "calories": 180,
      "energy": 753,
      "sugar": 9.8,
      "protein": 2.8,
      "fat": 10.5,
      "cholesterol": 15,
      "fiber": 0.8,
      "carbohydrates": 18.5,
      "servingSize": "1 cookie (40g)"
    },
    "freshness": {
      "madeTime": "Yesterday",
      "score": 97,
      "bestBeforeDays": 21,
      "prepTime": "20 mins"
    }
  },
  {
    "id": "ajwa-special-kaju-katli",
    "name": "Kaju Katli",
    "category": "Traditional",
    "tagline": "Premium Diamond Cut Cashew Delight",
    "desc": "Traditional silver-vark coated diamond-shaped cashew fudge made with premium grade cashews and organic sugar. Perfectly smooth, melt-in-mouth texture.",
    "pricePerPiece": 25,
    "pricePerKg": 950,
    "weightPerPiece": 25,
    "image": "/images/products/traditional-sweets/kaju-katli.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 200,
    "badges": [
      "Premium Grade",
      "Silver Leaf",
      "Ajwa Special"
    ],
    "health": {
      "sweetness": 6,
      "richness": 8,
      "protein": 6,
      "fitnessScore": 7
    },
    "nutrition": {
      "calories": 150,
      "energy": 628,
      "sugar": 12,
      "protein": 3.8,
      "fat": 8.5,
      "cholesterol": 0,
      "fiber": 1.2,
      "carbohydrates": 16.5,
      "servingSize": "1 piece (25g)"
    },
    "freshness": {
      "madeTime": "8:30 AM today",
      "score": 99,
      "bestBeforeDays": 20,
      "prepTime": "25 mins"
    }
  },
  {
    "id": "sunder-coconut-cookies",
    "name": "Sunder Super Coconut Cookies",
    "category": "Cookies",
    "tagline": "Crunchy Sweet Coconut Bite",
    "desc": "High-quality packaged sweet coconut cookies from Sunder. Extra crispy, sweet, and bursting with rich coconut aroma.",
    "pricePerPiece": 8,
    "pricePerKg": 320,
    "weightPerPiece": 25,
    "image": "/images/products/cookies/sunder-coconut-cookies.webp",
    "accent": "#4E85C5",
    "availability": "In Stock",
    "stockCount": 130,
    "badges": [
      "Packaged Cookies",
      "Crunchy Sweet"
    ],
    "health": {
      "sweetness": 7,
      "richness": 6,
      "protein": 2,
      "fitnessScore": 6
    },
    "nutrition": {
      "calories": 110,
      "energy": 460,
      "sugar": 8.2,
      "protein": 1.5,
      "fat": 5.8,
      "cholesterol": 5,
      "fiber": 1.2,
      "carbohydrates": 12.8,
      "servingSize": "1 piece (25g)"
    },
    "freshness": {
      "madeTime": "Packaged",
      "score": 98,
      "bestBeforeDays": 90,
      "prepTime": "10 mins"
    }
  },
  {
    "id": "yellow-saffron-cookies",
    "name": "Premium Yellow Saffron Cookies",
    "category": "Cookies",
    "tagline": "Saffron & Butter Luxury",
    "desc": "Golden bakery-style saffron cookies. Enriched with real saffron threads, premium butter, and decorated with colorful sugar sprinkles.",
    "pricePerPiece": 15,
    "pricePerKg": 600,
    "weightPerPiece": 25,
    "image": "/images/products/cookies/yellow-saffron-cookies.webp",
    "accent": "#FFC000",
    "availability": "In Stock",
    "stockCount": 160,
    "badges": [
      "Saffron Butter",
      "Colorful Sprinkles"
    ],
    "health": {
      "sweetness": 6,
      "richness": 7,
      "protein": 3,
      "fitnessScore": 6
    },
    "nutrition": {
      "calories": 120,
      "energy": 502,
      "sugar": 8.5,
      "protein": 1.9,
      "fat": 6.5,
      "cholesterol": 12,
      "fiber": 0.5,
      "carbohydrates": 14.2,
      "servingSize": "1 piece (25g)"
    },
    "freshness": {
      "madeTime": "9:00 AM today",
      "score": 99,
      "bestBeforeDays": 40,
      "prepTime": "25 mins"
    }
  },
  {
    "id": "ajwa-nankhatai",
    "name": "Ajwa Cardamom Nankhatai",
    "category": "Cookies",
    "tagline": "Traditional Cardamom Shortbread",
    "desc": "Melt-in-your-mouth traditional shortbread cookies flavored with freshly ground green cardamom. Packed in individual silver foils.",
    "pricePerPiece": 12,
    "pricePerKg": 480,
    "weightPerPiece": 25,
    "image": "/images/products/cookies/ajwa-nankhatai.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 250,
    "badges": [
      "Cardamom Rich",
      "Individual Wraps",
      "Ajwa Special"
    ],
    "health": {
      "sweetness": 5,
      "richness": 7,
      "protein": 3,
      "fitnessScore": 6
    },
    "nutrition": {
      "calories": 115,
      "energy": 481,
      "sugar": 7.2,
      "protein": 1.8,
      "fat": 6.2,
      "cholesterol": 10,
      "fiber": 0.6,
      "carbohydrates": 13.5,
      "servingSize": "1 piece (25g)"
    },
    "freshness": {
      "madeTime": "8:00 AM today",
      "score": 98,
      "bestBeforeDays": 45,
      "prepTime": "30 mins"
    }
  },
  {
    "id": "assorted-cookies",
    "name": "Ajwa Assorted Biscuits Pack",
    "category": "Cookies",
    "tagline": "Classic Bakery Selection",
    "desc": "Stacked packaging of assorted classic bakery biscuits including chocolate swirl, salt/jeera, and fruit butter cookies.",
    "pricePerPiece": 60,
    "pricePerKg": 300,
    "weightPerPiece": 200,
    "image": "/images/products/cookies/assorted-biscuits.webp",
    "accent": "#8B5A2B",
    "availability": "In Stock",
    "stockCount": 110,
    "badges": [
      "Assorted Pack",
      "Bakery Fresh"
    ],
    "health": {
      "sweetness": 6,
      "richness": 6,
      "protein": 4,
      "fitnessScore": 6
    },
    "nutrition": {
      "calories": 960,
      "energy": 4016,
      "sugar": 48,
      "protein": 18,
      "fat": 42,
      "cholesterol": 40,
      "fiber": 6,
      "carbohydrates": 128,
      "servingSize": "1 pack (200g)"
    },
    "freshness": {
      "madeTime": "Yesterday",
      "score": 97,
      "bestBeforeDays": 60,
      "prepTime": "20 mins"
    }
  },
  {
    "id": "lukman-e-hayat-tel",
    "name": "Lukman E Hayat Ayurvedic Tel",
    "category": "Ayurvedic",
    "tagline": "Multipurpose Active Oil",
    "desc": "Time-tested active ayurvedic formula for burns, cuts, wounds, sprains, and generic body pain. An absolute household must-have.",
    "pricePerPiece": 120,
    "pricePerKg": 1200,
    "weightPerPiece": 100,
    "image": "/images/products/health/lukman-e-hayat-tel.webp",
    "accent": "#008000",
    "availability": "In Stock",
    "stockCount": 150,
    "badges": [
      "Multipurpose Tel",
      "First Aid",
      "100% Ayurvedic"
    ],
    "health": {
      "sweetness": 1,
      "richness": 2,
      "protein": 1,
      "fitnessScore": 10
    },
    "nutrition": {
      "calories": 0,
      "energy": 0,
      "sugar": 0,
      "protein": 0,
      "fat": 0,
      "cholesterol": 0,
      "fiber": 0,
      "carbohydrates": 0,
      "servingSize": "1 bottle (100ml)"
    },
    "freshness": {
      "madeTime": "Direct Pack",
      "score": 100,
      "bestBeforeDays": 730,
      "prepTime": "5 mins"
    }
  },
  {
    "id": "dry-fruit-honey",
    "name": "Natural Nectar Dry Fruit Honey",
    "category": "Honey",
    "tagline": "Honey Loaded with Nuts",
    "desc": "Pure organic raw honey infused and packed with selected premium almonds, cashews, and raisins. A true wellness nectar.",
    "pricePerPiece": 250,
    "pricePerKg": 1000,
    "weightPerPiece": 250,
    "image": "/images/products/honey/dry-fruit-honey.webp",
    "accent": "#D4A843",
    "availability": "In Stock",
    "stockCount": 70,
    "badges": [
      "100% Organic",
      "Honey & Nuts",
      "Energy Booster"
    ],
    "health": {
      "sweetness": 8,
      "richness": 7,
      "protein": 5,
      "fitnessScore": 8
    },
    "nutrition": {
      "calories": 850,
      "energy": 3556,
      "sugar": 145,
      "protein": 12.5,
      "fat": 28,
      "cholesterol": 0,
      "fiber": 3.5,
      "carbohydrates": 165,
      "servingSize": "1 jar (250g)"
    },
    "freshness": {
      "madeTime": "Direct Pack",
      "score": 99,
      "bestBeforeDays": 365,
      "prepTime": "10 mins"
    }
  },
  {
    "id": "roghan-sukoon-oil",
    "name": "Roghan Sukoon Massage Oil",
    "category": "Ayurvedic",
    "tagline": "Herbal Pain Relief Blend",
    "desc": "Traditional active ayurvedic oil formulated with natural herbs and extracts for quick relief from muscle aches, joint pain, and stress.",
    "pricePerPiece": 95,
    "pricePerKg": 950,
    "weightPerPiece": 100,
    "image": "/images/products/health/roghan-sukoon-oil.webp",
    "accent": "#E04F5F",
    "availability": "In Stock",
    "stockCount": 160,
    "badges": [
      "Ayurvedic Oil",
      "Pain Relief",
      "Natural Herbs"
    ],
    "health": {
      "sweetness": 1,
      "richness": 3,
      "protein": 1,
      "fitnessScore": 9
    },
    "nutrition": {
      "calories": 0,
      "energy": 0,
      "sugar": 0,
      "protein": 0,
      "fat": 0,
      "cholesterol": 0,
      "fiber": 0,
      "carbohydrates": 0,
      "servingSize": "1 bottle (100ml)"
    },
    "freshness": {
      "madeTime": "Direct Pack",
      "score": 100,
      "bestBeforeDays": 730,
      "prepTime": "5 mins"
    }
  },
  {
    "id": "kimia-dates",
    "name": "Aliza Kimia Dates",
    "category": "Dates",
    "tagline": "Iranian Soft Black Dates",
    "desc": "Imported premium Iranian Kimia dates. Naturally soft, sweet, dark and moist. Packed in 500g boxes.",
    "pricePerPiece": 10,
    "pricePerKg": 400,
    "weightPerPiece": 12,
    "image": "/images/products/dates/kimia-dates.webp",
    "accent": "#2F2320",
    "availability": "In Stock",
    "stockCount": 140,
    "badges": [
      "Imported Dates",
      "No Added Sugar",
      "Energy Booster"
    ],
    "health": {
      "sweetness": 5,
      "richness": 3,
      "protein": 2,
      "fitnessScore": 8
    },
    "nutrition": {
      "calories": 34,
      "energy": 142,
      "sugar": 7.8,
      "protein": 0.3,
      "fat": 0.1,
      "cholesterol": 0,
      "fiber": 1,
      "carbohydrates": 8.5,
      "servingSize": "1 piece (12g)"
    },
    "freshness": {
      "madeTime": "Direct Import",
      "score": 100,
      "bestBeforeDays": 180,
      "prepTime": "5 mins"
    }
  },
  {
    "id": "berry-dor-blueberry",
    "name": "Berry Dor Blueberry Truffles",
    "category": "Chocolates",
    "tagline": "Fruit Cream Center Truffles",
    "desc": "Luxurious milk chocolate truffles filled with a velvety, aromatic organic blueberry cream center.",
    "pricePerPiece": 40,
    "pricePerKg": 1200,
    "weightPerPiece": 30,
    "image": "/images/products/chocolates/berry-dor-blueberry.webp",
    "accent": "#4E2F6C",
    "availability": "In Stock",
    "stockCount": 90,
    "badges": [
      "Blueberry Cream",
      "Luxury Truffle"
    ],
    "health": {
      "sweetness": 7,
      "richness": 8,
      "protein": 3,
      "fitnessScore": 6
    },
    "nutrition": {
      "calories": 140,
      "energy": 585,
      "sugar": 11.5,
      "protein": 1.8,
      "fat": 8.8,
      "cholesterol": 6,
      "fiber": 0.9,
      "carbohydrates": 15.5,
      "servingSize": "1 truffle (30g)"
    },
    "freshness": {
      "madeTime": "Yesterday",
      "score": 96,
      "bestBeforeDays": 90,
      "prepTime": "20 mins"
    }
  },
  {
    "id": "mamco-chocole-dark",
    "name": "Mamco Dark Chocolate Log",
    "category": "Chocolates",
    "tagline": "Silky Smooth Dark Cocoa",
    "desc": "Premium dark chocolate bar crafted with 55% rich cocoa solids, delivering a balanced sweet and bitter luxury taste.",
    "pricePerPiece": 80,
    "pricePerKg": 1000,
    "weightPerPiece": 80,
    "image": "/images/products/chocolates/mamco-chocole-dark.webp",
    "accent": "#2F1C12",
    "availability": "In Stock",
    "stockCount": 120,
    "badges": [
      "55% Cocoa",
      "Silky Smooth"
    ],
    "health": {
      "sweetness": 5,
      "richness": 8,
      "protein": 4,
      "fitnessScore": 7
    },
    "nutrition": {
      "calories": 420,
      "energy": 1757,
      "sugar": 28,
      "protein": 5.2,
      "fat": 26.5,
      "cholesterol": 0,
      "fiber": 5.6,
      "carbohydrates": 44.2,
      "servingSize": "1 bar (80g)"
    },
    "freshness": {
      "madeTime": "Packaged",
      "score": 98,
      "bestBeforeDays": 240,
      "prepTime": "15 mins"
    }
  },
  {
    "id": "mamco-minis-chocolate",
    "name": "Mamco Minis Milk Chocolate",
    "category": "Chocolates",
    "tagline": "Mini Milk Chocolate Delights",
    "desc": "Creamy, smooth milk chocolate bite-sized minis packed in a purple luxury box. A perfect sweet companion.",
    "pricePerPiece": 15,
    "pricePerKg": 600,
    "weightPerPiece": 20,
    "image": "/images/products/packaged/mamco-minis-chocolate.webp",
    "accent": "#7030A0",
    "availability": "In Stock",
    "stockCount": 180,
    "badges": [
      "Creamy Cocoa",
      "Gift Pack"
    ],
    "health": {
      "sweetness": 7,
      "richness": 8,
      "protein": 3,
      "fitnessScore": 5
    },
    "nutrition": {
      "calories": 110,
      "energy": 460,
      "sugar": 9.5,
      "protein": 1.8,
      "fat": 6.8,
      "cholesterol": 8,
      "fiber": 0.8,
      "carbohydrates": 11.2,
      "servingSize": "1 piece (20g)"
    },
    "freshness": {
      "madeTime": "Packaged",
      "score": 97,
      "bestBeforeDays": 150,
      "prepTime": "10 mins"
    }
  },
  {
    "id": "kesaria-peda",
    "name": "Kesaria Peda Royale",
    "category": "Traditional",
    "tagline": "Saffron Infused Milk Roundels",
    "desc": "Creamy condensed milk solids kneaded with premium saffron, hand-shaped and decorated with authentic saffron and orange stripes.",
    "pricePerPiece": 26,
    "pricePerKg": 650,
    "weightPerPiece": 35,
    "image": "/images/products/sweets/kesaria-peda.webp",
    "accent": "#FFC000",
    "availability": "In Stock",
    "stockCount": 160,
    "badges": [
      "Saffron Infused",
      "Festival Favorite"
    ],
    "health": {
      "sweetness": 7,
      "richness": 8,
      "protein": 4,
      "fitnessScore": 6
    },
    "nutrition": {
      "calories": 135,
      "energy": 564,
      "sugar": 10.8,
      "protein": 3.5,
      "fat": 6.8,
      "cholesterol": 16,
      "fiber": 0.3,
      "carbohydrates": 14.5,
      "servingSize": "1 piece (35g)"
    },
    "freshness": {
      "madeTime": "6:30 AM today",
      "score": 98,
      "bestBeforeDays": 14,
      "prepTime": "20 mins"
    }
  },
  {
    "id": "malai-peda",
    "name": "White Malai Peda",
    "category": "Traditional",
    "tagline": "Velvety Milk Cream Classic",
    "desc": "Ultra-soft and velvety peda made from condensed fresh milk cream (malai), sweetened lightly, and decorated with a sliver of pistachio.",
    "pricePerPiece": 26,
    "pricePerKg": 650,
    "weightPerPiece": 35,
    "image": "/images/products/sweets/malai-peda.webp",
    "accent": "#F2F2F2",
    "availability": "In Stock",
    "stockCount": 150,
    "badges": [
      "Rich Malai",
      "Kids Favorite"
    ],
    "health": {
      "sweetness": 6,
      "richness": 8,
      "protein": 5,
      "fitnessScore": 6
    },
    "nutrition": {
      "calories": 130,
      "energy": 543,
      "sugar": 9.8,
      "protein": 3.8,
      "fat": 7.2,
      "cholesterol": 18,
      "fiber": 0.2,
      "carbohydrates": 13.8,
      "servingSize": "1 piece (35g)"
    },
    "freshness": {
      "madeTime": "7:00 AM today",
      "score": 99,
      "bestBeforeDays": 12,
      "prepTime": "20 mins"
    }
  },
  {
    "id": "coconut-macaroons",
    "name": "Traditional Coconut Macaroons",
    "category": "Cookies",
    "tagline": "Double-Baked Golden Crunch",
    "desc": "Crispy and golden double-baked cookies made with rich, sweetened shredded coconut, toasted to absolute crispy perfection.",
    "pricePerPiece": 10,
    "pricePerKg": 400,
    "weightPerPiece": 25,
    "image": "/images/products/bakery/coconut-macaroons.webp",
    "accent": "#E28743",
    "availability": "In Stock",
    "stockCount": 140,
    "badges": [
      "Gluten Free",
      "Crunchy Coconut",
      "Tea Partner"
    ],
    "health": {
      "sweetness": 6,
      "richness": 7,
      "protein": 3,
      "fitnessScore": 7
    },
    "nutrition": {
      "calories": 95,
      "energy": 397,
      "sugar": 6.8,
      "protein": 1.2,
      "fat": 5.5,
      "cholesterol": 2,
      "fiber": 1.8,
      "carbohydrates": 11.2,
      "servingSize": "1 piece (25g)"
    },
    "freshness": {
      "madeTime": "7:00 AM today",
      "score": 99,
      "bestBeforeDays": 30,
      "prepTime": "25 mins"
    }
  },
  {
    "id": "kaju-katli-premium",
    "name": "Ajwa Premium Kaju Katli",
    "category": "Traditional",
    "tagline": "Royale Cashew Diamond",
    "desc": "The signature crown jewel sweet of Ajwa. Premium selected cashews ground to a smooth paste, cooked with pure ghee, and set under a layer of real silver leaf.",
    "pricePerPiece": 30,
    "pricePerKg": 1100,
    "weightPerPiece": 25,
    "image": "/images/products/sweets/kaju-katli-premium.webp",
    "accent": "#D4A843",
    "availability": "In Stock",
    "stockCount": 200,
    "badges": [
      "Silver Leaf",
      "Wedding Collection",
      "Corporate Gift"
    ],
    "health": {
      "sweetness": 6,
      "richness": 9,
      "protein": 5,
      "fitnessScore": 6
    },
    "nutrition": {
      "calories": 120,
      "energy": 502,
      "sugar": 9.5,
      "protein": 3,
      "fat": 7.2,
      "cholesterol": 0,
      "fiber": 0.9,
      "carbohydrates": 11.8,
      "servingSize": "1 piece (25g)"
    },
    "freshness": {
      "madeTime": "8:00 AM today",
      "score": 99,
      "bestBeforeDays": 20,
      "prepTime": "20 mins"
    }
  },
  {
    "id": "chocolate-kaju-katli",
    "name": "Chocolate Kaju Katli Fudge",
    "category": "Chocolates",
    "tagline": "Belgian Chocolate & Cashew Fusion",
    "desc": "A premium diamond fusion sweet. Rich Belgian cocoa blend cooked together with our signature cashew paste, yielding a smooth chocolatey fudge.",
    "pricePerPiece": 35,
    "pricePerKg": 1200,
    "weightPerPiece": 30,
    "image": "/images/products/sweets/chocolate-kaju-katli.webp",
    "accent": "#5C4033",
    "availability": "In Stock",
    "stockCount": 140,
    "badges": [
      "Luxury Fusion",
      "Choco Special"
    ],
    "health": {
      "sweetness": 7,
      "richness": 9,
      "protein": 4,
      "fitnessScore": 6
    },
    "nutrition": {
      "calories": 145,
      "energy": 606,
      "sugar": 11.2,
      "protein": 3.2,
      "fat": 8.5,
      "cholesterol": 5,
      "fiber": 1.4,
      "carbohydrates": 16.2,
      "servingSize": "1 piece (30g)"
    },
    "freshness": {
      "madeTime": "9:00 AM today",
      "score": 97,
      "bestBeforeDays": 15,
      "prepTime": "25 mins"
    }
  },
  {
    "id": "royal-pista-katli",
    "name": "Royal Pista Katli",
    "category": "Traditional",
    "tagline": "Premium Pistachio Diamond Delicacy",
    "desc": "Luxurious diamond-shaped katli made exclusively from premium ground green pistachios and sugar, cooked to a delicate melt-in-the-mouth consistency.",
    "pricePerPiece": 40,
    "pricePerKg": 1400,
    "weightPerPiece": 25,
    "image": "/images/products/sweets/royal-pista-katli.webp",
    "accent": "#70AD47",
    "availability": "In Stock",
    "stockCount": 120,
    "badges": [
      "100% Pistachio",
      "Luxury Diamond",
      "Royal Selection"
    ],
    "health": {
      "sweetness": 6,
      "richness": 8,
      "protein": 6,
      "fitnessScore": 7
    },
    "nutrition": {
      "calories": 130,
      "energy": 543,
      "sugar": 9.2,
      "protein": 4,
      "fat": 8,
      "cholesterol": 0,
      "fiber": 1.5,
      "carbohydrates": 11.5,
      "servingSize": "1 piece (25g)"
    },
    "freshness": {
      "madeTime": "9:00 AM today",
      "score": 98,
      "bestBeforeDays": 20,
      "prepTime": "30 mins"
    }
  },
  {
    "id": "pista-barfi",
    "name": "Double Decker Pista Barfi",
    "category": "Traditional",
    "tagline": "Emerald Cream Layer",
    "desc": "A stunning double-layered barfi featuring a rich green pistachio paste layer combined with a classic white cardamom mawa layer.",
    "pricePerPiece": 32,
    "pricePerKg": 900,
    "weightPerPiece": 35,
    "image": "/images/products/sweets/pista-barfi.webp",
    "accent": "#86A96B",
    "availability": "In Stock",
    "stockCount": 95,
    "badges": [
      "Pistachio Real",
      "Aesthetic Delight"
    ],
    "health": {
      "sweetness": 7,
      "richness": 8,
      "protein": 5,
      "fitnessScore": 6
    },
    "nutrition": {
      "calories": 155,
      "energy": 648,
      "sugar": 11.2,
      "protein": 3.9,
      "fat": 9.2,
      "cholesterol": 12,
      "fiber": 1,
      "carbohydrates": 14.8,
      "servingSize": "1 piece (35g)"
    },
    "freshness": {
      "madeTime": "7:00 AM today",
      "score": 98,
      "bestBeforeDays": 12,
      "prepTime": "30 mins"
    }
  },
  {
    "id": "haldiram-rasgulla",
    "name": "Haldiram's Rasgulla Tin",
    "category": "Traditional",
    "tagline": "Bengal's Spongy White Syrup",
    "desc": "Spongy, light chhena (cottage cheese) balls simmered in clear sugar syrup. Sealed in a 1kg premium gift tin.",
    "pricePerPiece": 20,
    "pricePerKg": 225,
    "weightPerPiece": 62,
    "image": "/images/products/sweets/rasgulla.webp",
    "accent": "#E8A3B0",
    "availability": "In Stock",
    "stockCount": 60,
    "badges": [
      "Packaged Tin",
      "100% Veg",
      "Low Fat"
    ],
    "health": {
      "sweetness": 7,
      "richness": 4,
      "protein": 6,
      "fitnessScore": 7
    },
    "nutrition": {
      "calories": 125,
      "energy": 523,
      "sugar": 15,
      "protein": 5.5,
      "fat": 1.8,
      "cholesterol": 5,
      "fiber": 0,
      "carbohydrates": 22,
      "servingSize": "1 piece (62g)"
    },
    "freshness": {
      "madeTime": "Factory Pack",
      "score": 95,
      "bestBeforeDays": 120,
      "prepTime": "10 mins"
    }
  },
  {
    "id": "rainbow-eclairs",
    "name": "Rainbow Gold Eclairs",
    "category": "Chocolates",
    "tagline": "Chewy Centerfill Candies",
    "desc": "Premium assorted center-filled eclairs package including Choco Eclairs, Kulfi Eclairs, Coconut Eclairs, and Twister Mango.",
    "pricePerPiece": 5,
    "pricePerKg": 400,
    "weightPerPiece": 10,
    "image": "/images/products/packaged/rainbow-eclairs.webp",
    "accent": "#FFD700",
    "availability": "In Stock",
    "stockCount": 300,
    "badges": [
      "Assorted Candies",
      "Kids Favorite"
    ],
    "health": {
      "sweetness": 9,
      "richness": 7,
      "protein": 2,
      "fitnessScore": 4
    },
    "nutrition": {
      "calories": 45,
      "energy": 188,
      "sugar": 6.5,
      "protein": 0.5,
      "fat": 1.8,
      "cholesterol": 2,
      "fiber": 0.1,
      "carbohydrates": 7.2,
      "servingSize": "1 piece (10g)"
    },
    "freshness": {
      "madeTime": "Packaged",
      "score": 98,
      "bestBeforeDays": 180,
      "prepTime": "5 mins"
    }
  },
  {
    "id": "ajwa-gift-box",
    "name": "Royal Sweets Sweet Gift Box",
    "category": "Traditional",
    "tagline": "Palace Assortment Box",
    "desc": "A beautifully curated premium gift box containing our finest kaju katli, mawa pedas, dry fruit rolls, and assorted baked sweets.",
    "pricePerPiece": 500,
    "pricePerKg": 1000,
    "weightPerPiece": 500,
    "image": "/images/products/gift-boxes/ajwa-gift-box.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 90,
    "badges": [
      "Corporate Gift",
      "Festival Special",
      "Luxury Assortment"
    ],
    "health": {
      "sweetness": 7,
      "richness": 8,
      "protein": 5,
      "fitnessScore": 6
    },
    "nutrition": {
      "calories": 2100,
      "energy": 8786,
      "sugar": 180,
      "protein": 48,
      "fat": 120,
      "cholesterol": 150,
      "fiber": 12,
      "carbohydrates": 260,
      "servingSize": "1 box (500g)"
    },
    "freshness": {
      "madeTime": "Packaged Today",
      "score": 98,
      "bestBeforeDays": 14,
      "prepTime": "40 mins"
    }
  },
  {
    "id": "aflatoon-green",
    "name": "Ajwa Aflatoon (Green Pack)",
    "category": "Traditional",
    "tagline": "Baked Richness & Pistachio",
    "desc": "A luxury green-wrapped variation of our baked mawa sweet, packed with crushed roasted pistachios for an aromatic crunch.",
    "pricePerPiece": 40,
    "pricePerKg": 950,
    "weightPerPiece": 50,
    "image": "/images/products/sweets/aflatoon-green.webp",
    "accent": "#385723",
    "availability": "In Stock",
    "stockCount": 120,
    "badges": [
      "Pistachio Loaded",
      "Ajwa Special"
    ],
    "health": {
      "sweetness": 8,
      "richness": 9,
      "protein": 4,
      "fitnessScore": 5
    },
    "nutrition": {
      "calories": 215,
      "energy": 899,
      "sugar": 16.5,
      "protein": 3.8,
      "fat": 12.2,
      "cholesterol": 15,
      "fiber": 1.2,
      "carbohydrates": 24.5,
      "servingSize": "1 piece (50g)"
    },
    "freshness": {
      "madeTime": "Yesterday",
      "score": 96,
      "bestBeforeDays": 30,
      "prepTime": "40 mins"
    }
  },
  {
    "id": "aflatoon-red",
    "name": "Ajwa Aflatoon (Red Pack)",
    "category": "Traditional",
    "tagline": "Baked Richness & Saffron",
    "desc": "A variation of our famous baked semolina and mawa sweet, enriched with real saffron strands and wrapped in red foil.",
    "pricePerPiece": 40,
    "pricePerKg": 950,
    "weightPerPiece": 50,
    "image": "/images/products/sweets/aflatoon-red.webp",
    "accent": "#C00000",
    "availability": "In Stock",
    "stockCount": 150,
    "badges": [
      "Saffron Rich",
      "Ajwa Special"
    ],
    "health": {
      "sweetness": 8,
      "richness": 9,
      "protein": 4,
      "fitnessScore": 5
    },
    "nutrition": {
      "calories": 215,
      "energy": 899,
      "sugar": 16.5,
      "protein": 3.8,
      "fat": 12.2,
      "cholesterol": 15,
      "fiber": 1.2,
      "carbohydrates": 24.5,
      "servingSize": "1 piece (50g)"
    },
    "freshness": {
      "madeTime": "Yesterday",
      "score": 96,
      "bestBeforeDays": 30,
      "prepTime": "40 mins"
    }
  },
  {
    "id": "aflatoon-blue",
    "name": "Ajwa Aflatoon (Blue Pack)",
    "category": "Traditional",
    "tagline": "Baked Richness & Semolina",
    "desc": "The ultimate traditional baked sweet made from full-cream mawa, ghee, semolina, sugar, and rich dry fruit assortment.",
    "pricePerPiece": 40,
    "pricePerKg": 950,
    "weightPerPiece": 50,
    "image": "/images/products/sweets/aflatoon-blue.webp",
    "accent": "#2F5597",
    "availability": "In Stock",
    "stockCount": 130,
    "badges": [
      "Heritage Recipe",
      "Ajwa Special"
    ],
    "health": {
      "sweetness": 8,
      "richness": 9,
      "protein": 4,
      "fitnessScore": 5
    },
    "nutrition": {
      "calories": 215,
      "energy": 899,
      "sugar": 16.5,
      "protein": 3.8,
      "fat": 12.2,
      "cholesterol": 15,
      "fiber": 1.2,
      "carbohydrates": 24.5,
      "servingSize": "1 piece (50g)"
    },
    "freshness": {
      "madeTime": "Yesterday",
      "score": 96,
      "bestBeforeDays": 30,
      "prepTime": "40 mins"
    }
  },
  {
    "id": "kalakand",
    "name": "Granular Kalakand",
    "category": "Traditional",
    "tagline": "Cardamom Reduction Classic",
    "desc": "Granular milk fudge sweetened perfectly, flavored with cardamom, and cooked slowly to a moist and delicate texture.",
    "pricePerPiece": 28,
    "pricePerKg": 800,
    "weightPerPiece": 40,
    "image": "/images/products/sweets/kalakand.webp",
    "accent": "#FAF9F6",
    "availability": "In Stock",
    "stockCount": 85,
    "badges": [
      "Fresh Milk",
      "Melt In Mouth"
    ],
    "health": {
      "sweetness": 7,
      "richness": 8,
      "protein": 5,
      "fitnessScore": 6
    },
    "nutrition": {
      "calories": 150,
      "energy": 627,
      "sugar": 12.8,
      "protein": 4.5,
      "fat": 8.5,
      "cholesterol": 20,
      "fiber": 0,
      "carbohydrates": 14.5,
      "servingSize": "1 piece (40g)"
    },
    "freshness": {
      "madeTime": "6:45 AM today",
      "score": 99,
      "bestBeforeDays": 5,
      "prepTime": "35 mins"
    }
  },
  {
    "id": "anjeer-barfi",
    "name": "Anjeer Dry Fruit Barfi",
    "category": "Traditional",
    "tagline": "Premium Fig & Almond Confection",
    "desc": "Handcrafted square barfi made from rich, organic dried figs (anjeer), loaded with roasted cashews and topped with premium sliced almonds.",
    "pricePerPiece": 35,
    "pricePerKg": 1100,
    "weightPerPiece": 30,
    "image": "/images/products/sweets/anjeer-barfi.webp",
    "accent": "#8B5A2B",
    "availability": "In Stock",
    "stockCount": 90,
    "badges": [
      "High Fiber",
      "Premium Quality",
      "Festival Special"
    ],
    "health": {
      "sweetness": 5,
      "richness": 8,
      "protein": 4,
      "fitnessScore": 7
    },
    "nutrition": {
      "calories": 140,
      "energy": 585,
      "sugar": 10.5,
      "protein": 3.2,
      "fat": 7.8,
      "cholesterol": 0,
      "fiber": 2.5,
      "carbohydrates": 16.8,
      "servingSize": "1 piece (30g)"
    },
    "freshness": {
      "madeTime": "7:30 AM today",
      "score": 97,
      "bestBeforeDays": 14,
      "prepTime": "25 mins"
    }
  },
  {
    "id": "almond-mawa-barfi",
    "name": "Almond Mawa Barfi",
    "category": "Traditional",
    "tagline": "Granular Mawa Luxury",
    "desc": "Creamy condensed milk solids slow-reduced over low flame, enriched with pure ghee, and topped generously with sliced almonds.",
    "pricePerPiece": 30,
    "pricePerKg": 900,
    "weightPerPiece": 35,
    "image": "/images/products/sweets/almond-mawa-barfi.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 110,
    "badges": [
      "Rich Creamy",
      "Traditional Ghee"
    ],
    "health": {
      "sweetness": 8,
      "richness": 9,
      "protein": 5,
      "fitnessScore": 5
    },
    "nutrition": {
      "calories": 160,
      "energy": 669,
      "sugar": 14.2,
      "protein": 4.1,
      "fat": 9.8,
      "cholesterol": 18,
      "fiber": 0.5,
      "carbohydrates": 15.6,
      "servingSize": "1 piece (35g)"
    },
    "freshness": {
      "madeTime": "8:00 AM today",
      "score": 98,
      "bestBeforeDays": 10,
      "prepTime": "30 mins"
    }
  },
  {
    "id": "motichoor-ladoo",
    "name": "Motichoor Ladoo",
    "category": "Traditional",
    "tagline": "A Symphony of Saffron",
    "desc": "Delicate chickpea flour droplets, fried golden in pure cow ghee and bound with aromatic sugar syrup, garnished with pistachios and saffron.",
    "pricePerPiece": 20,
    "pricePerKg": 400,
    "weightPerPiece": 50,
    "image": "/images/products/sweets/motichoor-ladoo.webp",
    "accent": "#FF9933",
    "availability": "In Stock",
    "stockCount": 120,
    "badges": [
      "Kids Friendly",
      "Festival Special"
    ],
    "health": {
      "sweetness": 9,
      "richness": 8,
      "protein": 4,
      "fitnessScore": 5
    },
    "nutrition": {
      "calories": 185,
      "energy": 774,
      "sugar": 18,
      "protein": 3.2,
      "fat": 9.5,
      "cholesterol": 12,
      "fiber": 1.2,
      "carbohydrates": 22.5,
      "servingSize": "1 piece (50g)"
    },
    "freshness": {
      "madeTime": "6:30 AM today",
      "score": 98,
      "bestBeforeDays": 7,
      "prepTime": "25 mins"
    }
  },
  {
    "id": "kaju-katli",
    "name": "Kaju Katli",
    "category": "Traditional",
    "tagline": "Silver Leaf Elegance",
    "desc": "Premium Goan cashews ground to a silky paste, slow-cooked with cardamom and adorned with pure silver leaf. The crown jewel of Indian craftsmanship.",
    "pricePerPiece": 25,
    "pricePerKg": 1000,
    "weightPerPiece": 25,
    "image": "/images/products/sweets/kaju-katli.webp",
    "accent": "#D4A843",
    "availability": "In Stock",
    "stockCount": 250,
    "badges": [
      "Gluten Free",
      "Wedding Collection",
      "Corporate Gifting"
    ],
    "health": {
      "sweetness": 6,
      "richness": 9,
      "protein": 5,
      "fitnessScore": 6
    },
    "nutrition": {
      "calories": 115,
      "energy": 481,
      "sugar": 9.2,
      "protein": 2.8,
      "fat": 6.8,
      "cholesterol": 0,
      "fiber": 0.8,
      "carbohydrates": 11.2,
      "servingSize": "1 piece (25g)"
    },
    "freshness": {
      "madeTime": "7:00 AM today",
      "score": 96,
      "bestBeforeDays": 15,
      "prepTime": "20 mins"
    }
  },
  {
    "id": "gulab-jamun",
    "name": "Gulab Jamun",
    "category": "Traditional",
    "tagline": "Dipped in Rose Syrup",
    "desc": "Soft evaporated milk (khoya) spheres fried lightly and soaked in rose-cardamom sugar syrup, served warm and garnished with rose petals.",
    "pricePerPiece": 27,
    "pricePerKg": 450,
    "weightPerPiece": 60,
    "image": "/images/products/sweets/gulab-jamun.webp",
    "accent": "#E8889A",
    "availability": "Limited Stock",
    "stockCount": 45,
    "badges": [
      "Kids Favourite",
      "Festival Special"
    ],
    "health": {
      "sweetness": 10,
      "richness": 9,
      "protein": 3,
      "fitnessScore": 4
    },
    "nutrition": {
      "calories": 220,
      "energy": 920,
      "sugar": 24,
      "protein": 4,
      "fat": 10.2,
      "cholesterol": 25,
      "fiber": 0.5,
      "carbohydrates": 28.5,
      "servingSize": "1 piece (60g)"
    },
    "freshness": {
      "madeTime": "7:30 AM today",
      "score": 99,
      "bestBeforeDays": 5,
      "prepTime": "30 mins"
    }
  },
  {
    "id": "rasgulla",
    "name": "Rasgulla",
    "category": "Traditional",
    "tagline": "Bengal's White Pearl",
    "desc": "Spongy, light-as-air chhena spheres simmered in organic sugar syrup. Exceedingly delicate, airy, and refreshing.",
    "pricePerPiece": 24,
    "pricePerKg": 400,
    "weightPerPiece": 60,
    "image": "/images/products/sweets/rasgulla.webp",
    "accent": "#86A96B",
    "availability": "In Stock",
    "stockCount": 150,
    "badges": [
      "Low Fat",
      "Senior Citizen Friendly",
      "Kids Favourite"
    ],
    "health": {
      "sweetness": 7,
      "richness": 5,
      "protein": 6,
      "fitnessScore": 7
    },
    "nutrition": {
      "calories": 125,
      "energy": 523,
      "sugar": 15,
      "protein": 5.5,
      "fat": 1.8,
      "cholesterol": 5,
      "fiber": 0,
      "carbohydrates": 22,
      "servingSize": "1 piece (60g)"
    },
    "freshness": {
      "madeTime": "6:00 AM today",
      "score": 97,
      "bestBeforeDays": 3,
      "prepTime": "15 mins"
    }
  },
  {
    "id": "milk-cake",
    "name": "Milk Cake",
    "category": "Traditional",
    "tagline": "Caramelised Heritage",
    "desc": "Slow-cooked milk reduced over heavy flame to dual golden-brown caramelised layers. Indulgently granular and aromatic.",
    "pricePerPiece": 35,
    "pricePerKg": 700,
    "weightPerPiece": 50,
    "image": "/images/products/sweets/milk-cake.webp",
    "accent": "#E6BF65",
    "availability": "In Stock",
    "stockCount": 80,
    "badges": [
      "High Protein",
      "Wedding Collection"
    ],
    "health": {
      "sweetness": 8,
      "richness": 9,
      "protein": 7,
      "fitnessScore": 5
    },
    "nutrition": {
      "calories": 210,
      "energy": 878,
      "sugar": 16,
      "protein": 6.8,
      "fat": 11.5,
      "cholesterol": 28,
      "fiber": 0.2,
      "carbohydrates": 19.8,
      "servingSize": "1 piece (50g)"
    },
    "freshness": {
      "madeTime": "6:15 AM today",
      "score": 95,
      "bestBeforeDays": 10,
      "prepTime": "40 mins"
    }
  },
  {
    "id": "peda",
    "name": "Kesar Peda",
    "category": "Traditional",
    "tagline": "Mathura's Finest Classic",
    "desc": "Thick condensed milk solids (khoya) kneaded with kesar (saffron), cardamom powder, and hand-stamped with our royal seal.",
    "pricePerPiece": 24,
    "pricePerKg": 600,
    "weightPerPiece": 40,
    "image": "/images/products/sweets/peda.webp",
    "accent": "#FFBB77",
    "availability": "In Stock",
    "stockCount": 160,
    "badges": [
      "Senior Citizen Friendly",
      "Festival Special"
    ],
    "health": {
      "sweetness": 7,
      "richness": 8,
      "protein": 5,
      "fitnessScore": 6
    },
    "nutrition": {
      "calories": 145,
      "energy": 606,
      "sugar": 11.5,
      "protein": 3.8,
      "fat": 7.2,
      "cholesterol": 18,
      "fiber": 0.4,
      "carbohydrates": 15.6,
      "servingSize": "1 piece (40g)"
    },
    "freshness": {
      "madeTime": "8:00 AM today",
      "score": 99,
      "bestBeforeDays": 12,
      "prepTime": "15 mins"
    }
  },
  {
    "id": "barfi",
    "name": "Almond Barfi",
    "category": "Traditional",
    "tagline": "Rich Almond Fudge",
    "desc": "Premium ground almonds and pure condensed milk solids, slow-stirred to absolute smooth perfection, finished with sliced pistachios.",
    "pricePerPiece": 43,
    "pricePerKg": 950,
    "weightPerPiece": 45,
    "image": "/images/products/sweets/barfi.webp",
    "accent": "#E8889A",
    "availability": "Limited Stock",
    "stockCount": 30,
    "badges": [
      "Gluten Free",
      "Corporate Gifting",
      "High Protein"
    ],
    "health": {
      "sweetness": 7,
      "richness": 9,
      "protein": 7,
      "fitnessScore": 6
    },
    "nutrition": {
      "calories": 175,
      "energy": 732,
      "sugar": 12,
      "protein": 5.2,
      "fat": 11.8,
      "cholesterol": 8,
      "fiber": 1.8,
      "carbohydrates": 14.5,
      "servingSize": "1 piece (45g)"
    },
    "freshness": {
      "madeTime": "7:15 AM today",
      "score": 94,
      "bestBeforeDays": 14,
      "prepTime": "25 mins"
    }
  },
  {
    "id": "jalebi",
    "name": "Shahi Jalebi",
    "category": "Traditional",
    "tagline": "Crispy Saffron Spirals",
    "desc": "Intricately spun loops of fermented wheat batter fried crisp in ghee, immediately plunged into bubbling saffron sugar syrup.",
    "pricePerPiece": 14,
    "pricePerKg": 350,
    "weightPerPiece": 40,
    "image": "/images/products/sweets/jalebi.webp",
    "accent": "#FF9933",
    "availability": "Fresh Batch Preparing",
    "stockCount": 0,
    "badges": [
      "Kids Favourite",
      "Festival Special"
    ],
    "health": {
      "sweetness": 10,
      "richness": 7,
      "protein": 2,
      "fitnessScore": 4
    },
    "nutrition": {
      "calories": 150,
      "energy": 627,
      "sugar": 19.5,
      "protein": 1.5,
      "fat": 5.5,
      "cholesterol": 10,
      "fiber": 0.3,
      "carbohydrates": 23.5,
      "servingSize": "1 piece (40g)"
    },
    "freshness": {
      "madeTime": "10 mins ago",
      "score": 100,
      "bestBeforeDays": 2,
      "prepTime": "10 mins"
    }
  },
  {
    "id": "sf-kaju-katli",
    "name": "Sugar Free Kaju Katli",
    "category": "Sugar-Free",
    "tagline": "Guilt-Free Splendor",
    "desc": "Luxury cashews sweetened naturally with organic stevia and erythritol. Retains the exact premium texture and pure silver leaf shine.",
    "pricePerPiece": 28,
    "pricePerKg": 1100,
    "weightPerPiece": 25,
    "image": "/images/products/sweets/sf-kaju-katli.webp",
    "accent": "#e3b549ff",
    "availability": "In Stock",
    "stockCount": 180,
    "badges": [
      "Sugar Free",
      "Diabetic Friendly",
      "Low Sugar",
      "No Added Sugar",
      "Senior Citizen Friendly",
      "Weight Conscious"
    ],
    "health": {
      "sweetness": 4,
      "richness": 9,
      "protein": 6,
      "fitnessScore": 9
    },
    "nutrition": {
      "calories": 82,
      "energy": 343,
      "sugar": 0.1,
      "protein": 3,
      "fat": 6.9,
      "cholesterol": 0,
      "fiber": 0.9,
      "carbohydrates": 4.1,
      "servingSize": "1 piece (25g)"
    },
    "freshness": {
      "madeTime": "7:45 AM today",
      "score": 97,
      "bestBeforeDays": 15,
      "prepTime": "25 mins"
    }
  },
  {
    "id": "sf-ladoo",
    "name": "Sugar Free Motichoor Ladoo",
    "category": "Sugar-Free",
    "tagline": "Natural Stevia Sweetness",
    "desc": "Fine besan flour droplets fried and bound with a natural stevia-saffron reduction, delivering the full traditional taste guilt-free.",
    "pricePerPiece": 24,
    "pricePerKg": 480,
    "weightPerPiece": 50,
    "image": "/images/products/sweets/sf-ladoo.webp",
    "accent": "#FF9933",
    "availability": "In Stock",
    "stockCount": 95,
    "badges": [
      "Sugar Free",
      "Diabetic Friendly",
      "No Added Sugar",
      "Low Sugar",
      "Weight Conscious",
      "Senior Citizen Friendly"
    ],
    "health": {
      "sweetness": 5,
      "richness": 7,
      "protein": 4,
      "fitnessScore": 8
    },
    "nutrition": {
      "calories": 120,
      "energy": 502,
      "sugar": 0.2,
      "protein": 3.5,
      "fat": 9,
      "cholesterol": 10,
      "fiber": 1.5,
      "carbohydrates": 8.5,
      "servingSize": "1 piece (50g)"
    },
    "freshness": {
      "madeTime": "6:30 AM today",
      "score": 98,
      "bestBeforeDays": 7,
      "prepTime": "30 mins"
    }
  },
  {
    "id": "sf-barfi",
    "name": "Sugar Free Almond Barfi",
    "category": "Sugar-Free",
    "tagline": "Keto Almond Perfection",
    "desc": "Rich blanched almonds ground and kneaded with milk solids, sweetened with monk fruit. High protein, gluten-free, and keto-friendly.",
    "pricePerPiece": 47,
    "pricePerKg": 1050,
    "weightPerPiece": 45,
    "image": "/images/products/sweets/sf-barfi.webp",
    "accent": "#E8889A",
    "availability": "In Stock",
    "stockCount": 60,
    "badges": [
      "Sugar Free",
      "Diabetic Friendly",
      "Low Sugar",
      "No Added Sugar",
      "High Protein",
      "Weight Conscious"
    ],
    "health": {
      "sweetness": 4,
      "richness": 9,
      "protein": 8,
      "fitnessScore": 9
    },
    "nutrition": {
      "calories": 130,
      "energy": 543,
      "sugar": 0.3,
      "protein": 6,
      "fat": 11.2,
      "cholesterol": 5,
      "fiber": 2,
      "carbohydrates": 3.8,
      "servingSize": "1 piece (45g)"
    },
    "freshness": {
      "madeTime": "8:30 AM today",
      "score": 96,
      "bestBeforeDays": 14,
      "prepTime": "35 mins"
    }
  },
  {
    "id": "sf-peda",
    "name": "Sugar Free Kesar Peda",
    "category": "Sugar-Free",
    "tagline": "Royal Saffron Without Sugar",
    "desc": "Creamy cardamom and saffron khoya pedas slow-set without added sugar. Perfect for dietary restriction and mindful indulgence.",
    "pricePerPiece": 26,
    "pricePerKg": 650,
    "weightPerPiece": 40,
    "image": "/images/products/sweets/sf-peda.webp",
    "accent": "#FFBB77",
    "availability": "Limited Stock",
    "stockCount": 20,
    "badges": [
      "Sugar Free",
      "Diabetic Friendly",
      "Low Sugar",
      "No Added Sugar",
      "Senior Citizen Friendly",
      "Weight Conscious"
    ],
    "health": {
      "sweetness": 3,
      "richness": 8,
      "protein": 5,
      "fitnessScore": 8
    },
    "nutrition": {
      "calories": 98,
      "energy": 410,
      "sugar": 0.1,
      "protein": 4.2,
      "fat": 7,
      "cholesterol": 15,
      "fiber": 0.5,
      "carbohydrates": 5.2,
      "servingSize": "1 piece (40g)"
    },
    "freshness": {
      "madeTime": "9:00 AM today",
      "score": 98,
      "bestBeforeDays": 12,
      "prepTime": "20 mins"
    }
  },
  {
    "id": "aflatoon",
    "name": "Aflatoon",
    "category": "Traditional",
    "tagline": "The Royal Mumbai Classic",
    "desc": "A rich, slow-cooked delicacy made with premium mawa (milk solids), ghee, semolina, sugar, and generously loaded with almonds, pistachios, and saffron.",
    "pricePerPiece": 24,
    "pricePerKg": 480,
    "weightPerPiece": 50,
    "image": "/images/products/sweets/aflatoon.webp",
    "accent": "#8B4513",
    "availability": "In Stock",
    "stockCount": 150,
    "badges": [
      "Signature Sweet",
      "Mumbai Special",
      "Premium Quality"
    ],
    "health": {
      "sweetness": 8,
      "richness": 9,
      "protein": 5,
      "fitnessScore": 5
    },
    "nutrition": {
      "calories": 220,
      "energy": 920,
      "sugar": 15,
      "protein": 4.5,
      "fat": 12,
      "cholesterol": 25,
      "fiber": 1,
      "carbohydrates": 20,
      "servingSize": "1 piece (50g)"
    },
    "freshness": {
      "madeTime": "7:00 AM today",
      "score": 98,
      "bestBeforeDays": 20,
      "prepTime": "30 mins"
    }
  },
  {
    "id": "naan-khatai",
    "name": "Naan Khatai",
    "category": "Cookies",
    "tagline": "Rich Cardamom Shortbread",
    "desc": "Traditional rich cardamom-spiced melt-in-the-mouth Indian shortbread cookies baked with pure cow ghee and garnished with premium pistachios.",
    "pricePerPiece": 5,
    "pricePerKg": 200,
    "weightPerPiece": 25,
    "image": "/images/products/cookies/naan-khatai.webp",
    "accent": "#D2B48C",
    "availability": "In Stock",
    "stockCount": 300,
    "badges": [
      "Eggless",
      "Signature Biscuit",
      "Kids Favourite"
    ],
    "health": {
      "sweetness": 6,
      "richness": 8,
      "protein": 4,
      "fitnessScore": 6
    },
    "nutrition": {
      "calories": 110,
      "energy": 460,
      "sugar": 6,
      "protein": 1.8,
      "fat": 6.2,
      "cholesterol": 8,
      "fiber": 0.5,
      "carbohydrates": 12,
      "servingSize": "1 piece (25g)"
    },
    "freshness": {
      "madeTime": "8:00 AM today",
      "score": 99,
      "bestBeforeDays": 30,
      "prepTime": "20 mins"
    }
  },
  {
    "id": "coconut-biscuit",
    "name": "Coconut Biscuit",
    "category": "Cookies",
    "tagline": "Toasted Coconut Crunch",
    "desc": "Crispy golden cookies packed with rich desiccated coconut, pure butter, and finished with a crispy toasted coconut crust on top.",
    "pricePerPiece": 6,
    "pricePerKg": 300,
    "weightPerPiece": 20,
    "image": "/images/products/cookies/coconut-biscuit.webp",
    "accent": "#EAE6DF",
    "availability": "In Stock",
    "stockCount": 250,
    "badges": [
      "Signature Biscuit",
      "High Fiber",
      "Kids Favourite"
    ],
    "health": {
      "sweetness": 7,
      "richness": 7,
      "protein": 3,
      "fitnessScore": 7
    },
    "nutrition": {
      "calories": 95,
      "energy": 397,
      "sugar": 5,
      "protein": 1.2,
      "fat": 5.2,
      "cholesterol": 5,
      "fiber": 1.2,
      "carbohydrates": 11,
      "servingSize": "1 piece (20g)"
    },
    "freshness": {
      "madeTime": "8:30 AM today",
      "score": 98,
      "bestBeforeDays": 45,
      "prepTime": "15 mins"
    }
  },
  {
    "id": "saffron-cake-rusk",
    "name": "Saffron Cake Rusk",
    "category": "Bakery",
    "tagline": "Double-Baked Crispy Perfection",
    "desc": "Premium double-baked cardamom cake slices infused with real saffron strands, perfect for pairing with hot tea.",
    "pricePerPiece": 8,
    "pricePerKg": 380,
    "weightPerPiece": 30,
    "image": "/images/products/bakery/saffron-cake-rusk.webp",
    "accent": "#E6BF65",
    "availability": "In Stock",
    "stockCount": 140,
    "badges": [
      "Premium Quality",
      "Tea Companion"
    ],
    "health": {
      "sweetness": 6,
      "richness": 6,
      "protein": 4,
      "fitnessScore": 6
    },
    "nutrition": {
      "calories": 120,
      "energy": 502,
      "sugar": 6.8,
      "protein": 2.1,
      "fat": 4.8,
      "cholesterol": 10,
      "fiber": 0.8,
      "carbohydrates": 16.5,
      "servingSize": "1 piece (30g)"
    },
    "freshness": {
      "madeTime": "7:00 AM today",
      "score": 98,
      "bestBeforeDays": 60,
      "prepTime": "25 mins"
    }
  },
  {
    "id": "pistachio-croissant",
    "name": "Pistachio Baklava Croissant",
    "category": "Bakery",
    "tagline": "Flaky Fusion Pastry",
    "desc": "Multi-layered butter croissant filled with a sweet, aromatic honey-pistachio paste, inspired by traditional baklava.",
    "pricePerPiece": 45,
    "pricePerKg": 900,
    "weightPerPiece": 80,
    "image": "/images/products/bakery/pistachio-croissant-ai.webp",
    "accent": "#86A96B",
    "availability": "In Stock",
    "stockCount": 50,
    "badges": [
      "Fresh Baked",
      "Signature Creation"
    ],
    "health": {
      "sweetness": 7,
      "richness": 9,
      "protein": 5,
      "fitnessScore": 5
    },
    "nutrition": {
      "calories": 310,
      "energy": 1297,
      "sugar": 12,
      "protein": 6.5,
      "fat": 18.2,
      "cholesterol": 35,
      "fiber": 2.1,
      "carbohydrates": 34.5,
      "servingSize": "1 piece (80g)"
    },
    "freshness": {
      "madeTime": "5:30 AM today",
      "score": 99,
      "bestBeforeDays": 3,
      "prepTime": "40 mins"
    }
  },
  {
    "id": "dark-chocolate-pedas",
    "name": "Dark Chocolate Peda Truffles",
    "category": "Chocolates",
    "tagline": "70% Cocoa Luxury Fusion",
    "desc": "Creamy traditional mawa peda center rolled in premium 70% dark Belgian chocolate and dusted with unsweetened cocoa powder.",
    "pricePerPiece": 30,
    "pricePerKg": 1200,
    "weightPerPiece": 35,
    "image": "/images/products/chocolates/dark-chocolate-pedas.webp",
    "accent": "#8B4513",
    "availability": "In Stock",
    "stockCount": 180,
    "badges": [
      "Luxury Fusion",
      "Choco Special"
    ],
    "health": {
      "sweetness": 6,
      "richness": 8,
      "protein": 4,
      "fitnessScore": 7
    },
    "nutrition": {
      "calories": 135,
      "energy": 564,
      "sugar": 9.8,
      "protein": 3.2,
      "fat": 6.9,
      "cholesterol": 12,
      "fiber": 1.5,
      "carbohydrates": 14.2,
      "servingSize": "1 piece (35g)"
    },
    "freshness": {
      "madeTime": "9:00 AM today",
      "score": 97,
      "bestBeforeDays": 14,
      "prepTime": "30 mins"
    }
  },
  {
    "id": "saffron-almond-bark",
    "name": "Saffron Almond Chocolate Bark",
    "category": "Chocolates",
    "tagline": "Premium Gold-Flustered Bark",
    "desc": "Stretched sheets of dark and milk chocolate studded with toasted Goan almonds, saffron strands, and edible gold leaf flake.",
    "pricePerPiece": 50,
    "pricePerKg": 1500,
    "weightPerPiece": 40,
    "image": "/images/products/chocolates/saffron-almond-bark.webp",
    "accent": "#D4A843",
    "availability": "In Stock",
    "stockCount": 100,
    "badges": [
      "Luxury Fusion",
      "Edible Gold Leaf"
    ],
    "health": {
      "sweetness": 6,
      "richness": 9,
      "protein": 5,
      "fitnessScore": 6
    },
    "nutrition": {
      "calories": 195,
      "energy": 815,
      "sugar": 14.5,
      "protein": 4.1,
      "fat": 13.8,
      "cholesterol": 8,
      "fiber": 2.2,
      "carbohydrates": 17.5,
      "servingSize": "1 bark piece (40g)"
    },
    "freshness": {
      "madeTime": "Yesterday",
      "score": 95,
      "bestBeforeDays": 30,
      "prepTime": "20 mins"
    }
  },
  {
    "id": "stuffed-medjool-dates",
    "name": "Stuffed Medjool Dates Royale",
    "category": "Dates",
    "tagline": "Filled with Almond & Orange Peel",
    "desc": "Imported premium Medjool dates pit-removed and stuffed with a hand-roasted almond and glazed orange rind mix.",
    "pricePerPiece": 40,
    "pricePerKg": 1600,
    "weightPerPiece": 25,
    "image": "/images/products/dates/stuffed-medjool-dates.webp",
    "accent": "#D4A843",
    "availability": "In Stock",
    "stockCount": 120,
    "badges": [
      "Imported Dates",
      "High Fiber"
    ],
    "health": {
      "sweetness": 5,
      "richness": 4,
      "protein": 3,
      "fitnessScore": 8
    },
    "nutrition": {
      "calories": 95,
      "energy": 397,
      "sugar": 16,
      "protein": 1.5,
      "fat": 2.1,
      "cholesterol": 0,
      "fiber": 3.2,
      "carbohydrates": 19.5,
      "servingSize": "1 date (25g)"
    },
    "freshness": {
      "madeTime": "Yesterday",
      "score": 96,
      "bestBeforeDays": 45,
      "prepTime": "15 mins"
    }
  },
  {
    "id": "spiced-cashews",
    "name": "Rose-Petal Glazed Cashews",
    "category": "Dry Fruits",
    "tagline": "Premium Goan Cashews Roast",
    "desc": "Selected large Goan cashews roasted in pure cow ghee and glazed with an aromatic organic rose petal sugar-syrup shell.",
    "pricePerPiece": 60,
    "pricePerKg": 1800,
    "weightPerPiece": 30,
    "image": "/images/products/dry-fruits/spiced-cashews-ai.webp",
    "accent": "#E8889A",
    "availability": "In Stock",
    "stockCount": 150,
    "badges": [
      "Luxury Dry Fruits",
      "Gift Favorite"
    ],
    "health": {
      "sweetness": 6,
      "richness": 8,
      "protein": 5,
      "fitnessScore": 7
    },
    "nutrition": {
      "calories": 155,
      "energy": 648,
      "sugar": 6.2,
      "protein": 4.8,
      "fat": 11.2,
      "cholesterol": 0,
      "fiber": 1.1,
      "carbohydrates": 10.5,
      "servingSize": "1 scoop (30g)"
    },
    "freshness": {
      "madeTime": "Yesterday",
      "score": 98,
      "bestBeforeDays": 90,
      "prepTime": "15 mins"
    }
  },
  {
    "id": "saffron-infused-honey",
    "name": "Saffron Infused Kashmiri Honey",
    "category": "Honey",
    "tagline": "Pure Sidr Honey Infusion",
    "desc": "Single-origin raw organic Sidr honey harvested from Himalayan valleys, infused with premium Kashmiri saffron filaments.",
    "pricePerPiece": 150,
    "pricePerKg": 3000,
    "weightPerPiece": 50,
    "image": "/images/products/honey/saffron-infused-honey.webp",
    "accent": "#FF9933",
    "availability": "In Stock",
    "stockCount": 80,
    "badges": [
      "Raw Organic",
      "Kashmiri Origin"
    ],
    "health": {
      "sweetness": 9,
      "richness": 5,
      "protein": 1,
      "fitnessScore": 8
    },
    "nutrition": {
      "calories": 160,
      "energy": 669,
      "sugar": 38,
      "protein": 0.2,
      "fat": 0,
      "cholesterol": 0,
      "fiber": 0,
      "carbohydrates": 40,
      "servingSize": "1 jar portion (50g)"
    },
    "freshness": {
      "madeTime": "Direct Harvest",
      "score": 100,
      "bestBeforeDays": 365,
      "prepTime": "5 mins"
    }
  },
  {
    "id": "ashwagandha-ladoo",
    "name": "Ashwagandha Wellness Ladoo",
    "category": "Ayurvedic",
    "tagline": "Immunity & Vitality Sweet",
    "desc": "Medicinal grade ashwagandha root extract kneaded with wholesome wheat flour, cow ghee, edible gum (gond), and sweet organic jaggery.",
    "pricePerPiece": 40,
    "pricePerKg": 950,
    "weightPerPiece": 50,
    "image": "/images/products/health/ashwagandha-ladoo-ai.webp",
    "accent": "#86A96B",
    "availability": "In Stock",
    "stockCount": 90,
    "badges": [
      "Wellness Special",
      "Immunity Boost",
      "No Refined Sugar"
    ],
    "health": {
      "sweetness": 5,
      "richness": 8,
      "protein": 6,
      "fitnessScore": 9
    },
    "nutrition": {
      "calories": 175,
      "energy": 732,
      "sugar": 8.5,
      "protein": 4.1,
      "fat": 10.5,
      "cholesterol": 12,
      "fiber": 2.5,
      "carbohydrates": 18.2,
      "servingSize": "1 piece (50g)"
    },
    "freshness": {
      "madeTime": "6:30 AM today",
      "score": 99,
      "bestBeforeDays": 21,
      "prepTime": "35 mins"
    }
  },
  {
    "id": "premium-california-almonds",
    "name": "Premium California Almonds",
    "category": "Dry Fruits",
    "tagline": "Golden Extra Large Crunch",
    "desc": "Handpicked extra-large California almonds, crisp, nutritious, and rich in natural Vitamin E.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 250,
    "image": "/images/products/dry-fruits/almonds-v2.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 120,
    "badges": [
      "Natural",
      "Premium",
      "Fresh Stock"
    ],
    "health": {
      "sweetness": 1,
      "richness": 6,
      "protein": 9,
      "fitnessScore": 9
    },
    "nutrition": {
      "calories": 160,
      "energy": 669,
      "sugar": 1.2,
      "protein": 6,
      "fat": 14,
      "cholesterol": 0,
      "fiber": 3.5,
      "carbohydrates": 6,
      "servingSize": "1 serving (30g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 99,
      "bestBeforeDays": 90,
      "prepTime": "10 mins"
    }
  },
  {
    "id": "whole-w320-cashews",
    "name": "Whole W320 Cashews",
    "category": "Dry Fruits",
    "tagline": "Creamy Ivory Kernels",
    "desc": "Super-premium whole cashews, with a rich buttery texture and perfect natural shape.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 250,
    "image": "/images/products/dry-fruits/cashews-v2.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 100,
    "badges": [
      "Natural",
      "Premium",
      "Fresh Stock"
    ],
    "health": {
      "sweetness": 1,
      "richness": 7,
      "protein": 8,
      "fitnessScore": 8
    },
    "nutrition": {
      "calories": 155,
      "energy": 648,
      "sugar": 1.5,
      "protein": 5,
      "fat": 12,
      "cholesterol": 0,
      "fiber": 1,
      "carbohydrates": 9,
      "servingSize": "1 serving (30g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 98,
      "bestBeforeDays": 60,
      "prepTime": "10 mins"
    }
  },
  {
    "id": "iranian-pistachios",
    "name": "Iranian Pistachios",
    "category": "Dry Fruits",
    "tagline": "Emerald Saffron Roasted",
    "desc": "Exquisite roasted and salted Iranian pistachios, offering a rich, crunchy, and savory bite.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 250,
    "image": "/images/products/dry-fruits/pistachios-v2.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 150,
    "badges": [
      "Natural",
      "Premium",
      "Fresh Stock"
    ],
    "health": {
      "sweetness": 1,
      "richness": 6,
      "protein": 8,
      "fitnessScore": 8
    },
    "nutrition": {
      "calories": 160,
      "energy": 669,
      "sugar": 2,
      "protein": 6,
      "fat": 13,
      "cholesterol": 0,
      "fiber": 3,
      "carbohydrates": 8,
      "servingSize": "1 serving (30g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 99,
      "bestBeforeDays": 90,
      "prepTime": "10 mins"
    }
  },
  {
    "id": "premium-walnut-kernels",
    "name": "Premium Walnut Kernels",
    "category": "Dry Fruits",
    "tagline": "Golden Brain Booster Halves",
    "desc": "Extra light Chilean walnut halves, rich in Omega-3 fatty acids and hand-shelled.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 250,
    "image": "/images/products/dry-fruits/walnuts-v2.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 80,
    "badges": [
      "Natural",
      "Premium",
      "Fresh Stock"
    ],
    "health": {
      "sweetness": 1,
      "richness": 6,
      "protein": 7,
      "fitnessScore": 9
    },
    "nutrition": {
      "calories": 185,
      "energy": 774,
      "sugar": 0.7,
      "protein": 4.3,
      "fat": 18.5,
      "cholesterol": 0,
      "fiber": 2,
      "carbohydrates": 3.9,
      "servingSize": "1 serving (30g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 97,
      "bestBeforeDays": 45,
      "prepTime": "10 mins"
    }
  },
  {
    "id": "medjool-dates",
    "name": "Medjool Dates",
    "category": "Dates",
    "tagline": "King of Jordan Dates",
    "desc": "Large, naturally sweet, and caramel-soft Medjool dates imported from local Jordanian valley farms.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 250,
    "image": "/images/products/dry-fruits/medjool-dates-v2.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 90,
    "badges": [
      "Natural",
      "Premium",
      "Fresh Stock"
    ],
    "health": {
      "sweetness": 8,
      "richness": 4,
      "protein": 2,
      "fitnessScore": 7
    },
    "nutrition": {
      "calories": 110,
      "energy": 460,
      "sugar": 24,
      "protein": 1,
      "fat": 0.2,
      "cholesterol": 0,
      "fiber": 3,
      "carbohydrates": 28,
      "servingSize": "1 serving (40g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 98,
      "bestBeforeDays": 120,
      "prepTime": "10 mins"
    }
  },
  {
    "id": "ajwa-dates",
    "name": "Ajwa Dates",
    "category": "Dates",
    "tagline": "Madinah Sacred Black Dates",
    "desc": "Fine dark Ajwa dates from Madinah, known for a soft, fine texture and healthy properties.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 250,
    "image": "/images/products/dry-fruits/ajwa-dates-v2.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 140,
    "badges": [
      "Natural",
      "Premium",
      "Fresh Stock"
    ],
    "health": {
      "sweetness": 7,
      "richness": 4,
      "protein": 2,
      "fitnessScore": 8
    },
    "nutrition": {
      "calories": 105,
      "energy": 439,
      "sugar": 22,
      "protein": 1.2,
      "fat": 0.1,
      "cholesterol": 0,
      "fiber": 2.8,
      "carbohydrates": 26.5,
      "servingSize": "1 serving (40g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 99,
      "bestBeforeDays": 180,
      "prepTime": "10 mins"
    }
  },
  {
    "id": "anjeer",
    "name": "Anjeer",
    "category": "Dry Fruits",
    "tagline": "Soft Afghan Dried Figs",
    "desc": "Premium soft dried figs, sweet and chewy, loaded with natural dietary fiber and iron.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 250,
    "image": "/images/products/dry-fruits/anjeer-v2.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 110,
    "badges": [
      "Natural",
      "Premium",
      "Fresh Stock"
    ],
    "health": {
      "sweetness": 6,
      "richness": 5,
      "protein": 3,
      "fitnessScore": 8
    },
    "nutrition": {
      "calories": 120,
      "energy": 502,
      "sugar": 20,
      "protein": 1.5,
      "fat": 0.4,
      "cholesterol": 0,
      "fiber": 4,
      "carbohydrates": 27,
      "servingSize": "1 serving (50g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 98,
      "bestBeforeDays": 90,
      "prepTime": "10 mins"
    }
  },
  {
    "id": "golden-raisins",
    "name": "Golden Raisins",
    "category": "Dry Fruits",
    "tagline": "Sun-Dried Sweet Drops",
    "desc": "Plump, sweet golden raisins, carefully sun-dried to lock in maximum sweetness.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 250,
    "image": "/images/products/dry-fruits/golden-raisins-v2.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 130,
    "badges": [
      "Natural",
      "Premium",
      "Fresh Stock"
    ],
    "health": {
      "sweetness": 8,
      "richness": 3,
      "protein": 1,
      "fitnessScore": 7
    },
    "nutrition": {
      "calories": 90,
      "energy": 377,
      "sugar": 18,
      "protein": 0.8,
      "fat": 0.1,
      "cholesterol": 0,
      "fiber": 1.2,
      "carbohydrates": 22,
      "servingSize": "1 serving (30g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 98,
      "bestBeforeDays": 120,
      "prepTime": "10 mins"
    }
  },
  {
    "id": "black-raisins",
    "name": "Black Raisins",
    "category": "Dry Fruits",
    "tagline": "Seedless Antioxidant Rich",
    "desc": "Dark seedless black raisins, rich in natural antioxidants and iron with a tangy bite.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 250,
    "image": "/images/products/dry-fruits/black-raisins-v2.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 160,
    "badges": [
      "Natural",
      "Premium",
      "Fresh Stock"
    ],
    "health": {
      "sweetness": 7,
      "richness": 3,
      "protein": 1,
      "fitnessScore": 8
    },
    "nutrition": {
      "calories": 85,
      "energy": 356,
      "sugar": 16.5,
      "protein": 0.9,
      "fat": 0.1,
      "cholesterol": 0,
      "fiber": 1.5,
      "carbohydrates": 21,
      "servingSize": "1 serving (30g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 99,
      "bestBeforeDays": 120,
      "prepTime": "10 mins"
    }
  },
  {
    "id": "mixed-nuts",
    "name": "Mixed Nuts",
    "category": "Dry Fruits",
    "tagline": "Assorted Luxury Platter",
    "desc": "A premium luxury blend of roasted almonds, cashews, pistachios, walnuts, and hazelnuts.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 250,
    "image": "/images/products/dry-fruits/mixed-nuts-v2.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 140,
    "badges": [
      "Natural",
      "Premium",
      "Fresh Stock"
    ],
    "health": {
      "sweetness": 1,
      "richness": 7,
      "protein": 8,
      "fitnessScore": 8
    },
    "nutrition": {
      "calories": 170,
      "energy": 711,
      "sugar": 1.3,
      "protein": 5.5,
      "fat": 14.5,
      "cholesterol": 0,
      "fiber": 2.8,
      "carbohydrates": 6.5,
      "servingSize": "1 serving (30g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 99,
      "bestBeforeDays": 90,
      "prepTime": "10 mins"
    }
  },
  {
    "id": "hazelnuts",
    "name": "Hazelnuts",
    "category": "Dry Fruits",
    "tagline": "Toasted Buttery Roundels",
    "desc": "Gently toasted hazelnuts, rich in nutrients with a sweet, distinct woody flavor.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 250,
    "image": "/images/products/dry-fruits/hazelnuts-v2.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 95,
    "badges": [
      "Natural",
      "Premium",
      "Fresh Stock"
    ],
    "health": {
      "sweetness": 1,
      "richness": 6,
      "protein": 7,
      "fitnessScore": 8
    },
    "nutrition": {
      "calories": 178,
      "energy": 745,
      "sugar": 1.1,
      "protein": 4.2,
      "fat": 17,
      "cholesterol": 0,
      "fiber": 2.7,
      "carbohydrates": 4.7,
      "servingSize": "1 serving (30g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 98,
      "bestBeforeDays": 90,
      "prepTime": "10 mins"
    }
  },
  {
    "id": "macadamia",
    "name": "Macadamia",
    "category": "Dry Fruits",
    "tagline": "Velvety Buttery Macadamia",
    "desc": "Ultra-premium buttery macadamia nuts, raw and smooth with a delicate crunch.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 250,
    "image": "/images/products/dry-fruits/macadamia-v2.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 70,
    "badges": [
      "Natural",
      "Premium",
      "Fresh Stock"
    ],
    "health": {
      "sweetness": 1,
      "richness": 8,
      "protein": 4,
      "fitnessScore": 7
    },
    "nutrition": {
      "calories": 200,
      "energy": 837,
      "sugar": 1.2,
      "protein": 2.2,
      "fat": 21,
      "cholesterol": 0,
      "fiber": 2.4,
      "carbohydrates": 3.9,
      "servingSize": "1 serving (30g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 97,
      "bestBeforeDays": 60,
      "prepTime": "10 mins"
    }
  },
  {
    "id": "brazil-nuts",
    "name": "Brazil Nuts",
    "category": "Dry Fruits",
    "tagline": "Wild Amazonian Selenium Boost",
    "desc": "Large wild-harvested Brazil nuts, containing high levels of healthy selenium.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 250,
    "image": "/images/products/dry-fruits/brazil-nuts-v2.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 65,
    "badges": [
      "Natural",
      "Premium",
      "Fresh Stock"
    ],
    "health": {
      "sweetness": 1,
      "richness": 7,
      "protein": 6,
      "fitnessScore": 8
    },
    "nutrition": {
      "calories": 185,
      "energy": 774,
      "sugar": 0.7,
      "protein": 4,
      "fat": 19,
      "cholesterol": 0,
      "fiber": 2.1,
      "carbohydrates": 3.5,
      "servingSize": "1 serving (30g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 98,
      "bestBeforeDays": 90,
      "prepTime": "10 mins"
    }
  },
  {
    "id": "pine-nuts",
    "name": "Pine Nuts",
    "category": "Dry Fruits",
    "tagline": "Creamy Gourmet Chilgoza",
    "desc": "Delicate and aromatic pine nuts (chilgoza), ideal for fine cooking or straight snacking.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 250,
    "image": "/images/products/dry-fruits/pine-nuts-v2.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 50,
    "badges": [
      "Natural",
      "Premium",
      "Fresh Stock"
    ],
    "health": {
      "sweetness": 1,
      "richness": 6,
      "protein": 7,
      "fitnessScore": 8
    },
    "nutrition": {
      "calories": 190,
      "energy": 795,
      "sugar": 1,
      "protein": 6.8,
      "fat": 19,
      "cholesterol": 0,
      "fiber": 1.1,
      "carbohydrates": 3.7,
      "servingSize": "1 serving (30g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 99,
      "bestBeforeDays": 90,
      "prepTime": "10 mins"
    }
  },
  {
    "id": "pecan",
    "name": "Pecan",
    "category": "Dry Fruits",
    "tagline": "Crisp Southern Pecans",
    "desc": "Premium raw pecan halves, crisp texture with a sweet woody flavor profile.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 250,
    "image": "/images/products/dry-fruits/pecan-v2.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 85,
    "badges": [
      "Natural",
      "Premium",
      "Fresh Stock"
    ],
    "health": {
      "sweetness": 1,
      "richness": 6,
      "protein": 3,
      "fitnessScore": 8
    },
    "nutrition": {
      "calories": 195,
      "energy": 816,
      "sugar": 1.2,
      "protein": 2.6,
      "fat": 20,
      "cholesterol": 0,
      "fiber": 2.9,
      "carbohydrates": 4.1,
      "servingSize": "1 serving (30g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 98,
      "bestBeforeDays": 90,
      "prepTime": "10 mins"
    }
  },
  {
    "id": "dry-apricot",
    "name": "Dry Apricot",
    "category": "Dry Fruits",
    "tagline": "Tangy Mediterranean Apricots",
    "desc": "Sun-dried whole apricots, sweet and tangy with a soft chewy texture.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 250,
    "image": "/images/products/dry-fruits/dry-apricot-v2.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 90,
    "badges": [
      "Natural",
      "Premium",
      "Fresh Stock"
    ],
    "health": {
      "sweetness": 5,
      "richness": 2,
      "protein": 2,
      "fitnessScore": 9
    },
    "nutrition": {
      "calories": 120,
      "energy": 502,
      "sugar": 25,
      "protein": 1.4,
      "fat": 0.2,
      "cholesterol": 0,
      "fiber": 3.7,
      "carbohydrates": 31,
      "servingSize": "1 serving (50g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 99,
      "bestBeforeDays": 120,
      "prepTime": "10 mins"
    }
  },
  {
    "id": "prunes",
    "name": "Prunes",
    "category": "Dry Fruits",
    "tagline": "Pitted Sweet Plums",
    "desc": "Premium pitted dried prunes, moist texture and rich in natural antioxidants.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 250,
    "image": "/images/products/dry-fruits/prunes-v2.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 110,
    "badges": [
      "Natural",
      "Premium",
      "Fresh Stock"
    ],
    "health": {
      "sweetness": 6,
      "richness": 2,
      "protein": 1,
      "fitnessScore": 9
    },
    "nutrition": {
      "calories": 100,
      "energy": 418,
      "sugar": 19,
      "protein": 0.9,
      "fat": 0.1,
      "cholesterol": 0,
      "fiber": 3,
      "carbohydrates": 26,
      "servingSize": "1 serving (40g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 98,
      "bestBeforeDays": 120,
      "prepTime": "10 mins"
    }
  },
  {
    "id": "fox-nuts",
    "name": "Fox Nuts (Makhana)",
    "category": "Dry Fruits",
    "tagline": "Popped Lotus Wellness",
    "desc": "Crispy and light popped lotus seeds, a perfect healthy luxury snack.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 100,
    "image": "/images/products/dry-fruits/fox-nuts-v2.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 150,
    "badges": [
      "Natural",
      "Premium",
      "Fresh Stock"
    ],
    "health": {
      "sweetness": 0,
      "richness": 2,
      "protein": 5,
      "fitnessScore": 10
    },
    "nutrition": {
      "calories": 100,
      "energy": 418,
      "sugar": 0,
      "protein": 3,
      "fat": 0.1,
      "cholesterol": 0,
      "fiber": 1.5,
      "carbohydrates": 21,
      "servingSize": "1 serving (28g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 99,
      "bestBeforeDays": 90,
      "prepTime": "10 mins"
    }
  },
  {
    "id": "garlic-chivda",
    "name": "Garlic Chivda",
    "category": "Chivda",
    "tagline": "Crispy Garlic Roasted Flakes",
    "desc": "Light, crunchy and irresistible golden chivda with a bold roasted garlic flavor.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 250,
    "image": "/images/products/farshan/garlic-chivda.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 150,
    "badges": [
      "Natural",
      "Premium",
      "Fresh Stock"
    ],
    "health": {
      "sweetness": 0,
      "richness": 5,
      "protein": 4,
      "fitnessScore": 7
    },
    "nutrition": {
      "calories": 145,
      "energy": 607,
      "sugar": 1,
      "protein": 4.2,
      "fat": 6.5,
      "cholesterol": 0,
      "fiber": 2.1,
      "carbohydrates": 19,
      "servingSize": "1 serving (30g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 98,
      "bestBeforeDays": 45,
      "prepTime": "5 mins"
    }
  },
  {
    "id": "poha-chivda",
    "name": "Chivda (Poha Mix)",
    "category": "Chivda",
    "tagline": "Thin Poha with Peanuts & Spice",
    "desc": "Thin poha mix with peanuts, curry leaves and a perfectly balanced spice blend.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 250,
    "image": "/images/products/farshan/poha-chivda.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 140,
    "badges": [
      "Natural",
      "Premium",
      "Fresh Stock"
    ],
    "health": {
      "sweetness": 1,
      "richness": 4,
      "protein": 4,
      "fitnessScore": 7
    },
    "nutrition": {
      "calories": 138,
      "energy": 578,
      "sugar": 1.5,
      "protein": 3.8,
      "fat": 5.8,
      "cholesterol": 0,
      "fiber": 2,
      "carbohydrates": 20,
      "servingSize": "1 serving (30g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 97,
      "bestBeforeDays": 45,
      "prepTime": "5 mins"
    }
  },
  {
    "id": "shezwan-chivda",
    "name": "Shezwan Chivda",
    "category": "Chivda",
    "tagline": "Spicy & Tangy Schezwan Fusion",
    "desc": "Traditional chivda with a bold Indo-Chinese schezwan twist. Spicy and addictive.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 250,
    "image": "/images/products/farshan/shezwan-chivda.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 120,
    "badges": [
      "Natural",
      "Premium",
      "Fresh Stock"
    ],
    "health": {
      "sweetness": 0,
      "richness": 6,
      "protein": 4,
      "fitnessScore": 6
    },
    "nutrition": {
      "calories": 152,
      "energy": 636,
      "sugar": 1.2,
      "protein": 4,
      "fat": 7.2,
      "cholesterol": 0,
      "fiber": 2,
      "carbohydrates": 19.5,
      "servingSize": "1 serving (30g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 97,
      "bestBeforeDays": 45,
      "prepTime": "5 mins"
    }
  },
  {
    "id": "bombay-mix",
    "name": "Bombay Mix",
    "category": "Mix Namkeen",
    "tagline": "Classic Savory Mix Namkeen",
    "desc": "Classic savory mix with sev, nuts, spices and fried lentils. Mumbai street style.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 250,
    "image": "/images/products/farshan/bombay-mix.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 180,
    "badges": [
      "Natural",
      "Premium",
      "Fresh Stock"
    ],
    "health": {
      "sweetness": 0,
      "richness": 6,
      "protein": 5,
      "fitnessScore": 6
    },
    "nutrition": {
      "calories": 165,
      "energy": 690,
      "sugar": 1,
      "protein": 5.5,
      "fat": 8.5,
      "cholesterol": 0,
      "fiber": 2.5,
      "carbohydrates": 18,
      "servingSize": "1 serving (30g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 98,
      "bestBeforeDays": 45,
      "prepTime": "5 mins"
    }
  },
  {
    "id": "tandoori-mix",
    "name": "Tandoori Mix",
    "category": "Mix Namkeen",
    "tagline": "Smoky Tandoori Spice Blend",
    "desc": "Premium mix with sev, mathri, and crunchy morsels coated in tandoori masala.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 250,
    "image": "/images/products/farshan/tandoori-mix.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 110,
    "badges": [
      "Natural",
      "Premium",
      "Fresh Stock"
    ],
    "health": {
      "sweetness": 0,
      "richness": 5,
      "protein": 4,
      "fitnessScore": 6
    },
    "nutrition": {
      "calories": 158,
      "energy": 661,
      "sugar": 1.1,
      "protein": 4.5,
      "fat": 7.8,
      "cholesterol": 0,
      "fiber": 2.2,
      "carbohydrates": 19,
      "servingSize": "1 serving (30g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 97,
      "bestBeforeDays": 45,
      "prepTime": "5 mins"
    }
  },
  {
    "id": "masala-boondi",
    "name": "Masala Boondi",
    "category": "Boondi",
    "tagline": "Crispy Fried Gram Drops",
    "desc": "Tiny crispy fried gram flour drops tossed in aromatic spices. Light and moreish.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 250,
    "image": "/images/products/farshan/masala-boondi.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 160,
    "badges": [
      "Natural",
      "Premium",
      "Fresh Stock"
    ],
    "health": {
      "sweetness": 0,
      "richness": 4,
      "protein": 4,
      "fitnessScore": 7
    },
    "nutrition": {
      "calories": 142,
      "energy": 594,
      "sugar": 1,
      "protein": 4,
      "fat": 6,
      "cholesterol": 0,
      "fiber": 2.3,
      "carbohydrates": 19.5,
      "servingSize": "1 serving (30g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 98,
      "bestBeforeDays": 45,
      "prepTime": "5 mins"
    }
  },
  {
    "id": "aloo-bhujia",
    "name": "Aloo Bhujia",
    "category": "Bhujia",
    "tagline": "Crispy Potato Sev Bhujia",
    "desc": "Crispy potato and spiced sev bhujia, a Bikaner-style classic loved across India.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 250,
    "image": "/images/products/farshan/aloo-bhujia.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 200,
    "badges": [
      "Natural",
      "Premium",
      "Fresh Stock"
    ],
    "health": {
      "sweetness": 0,
      "richness": 5,
      "protein": 3,
      "fitnessScore": 6
    },
    "nutrition": {
      "calories": 148,
      "energy": 619,
      "sugar": 0.8,
      "protein": 3.5,
      "fat": 7,
      "cholesterol": 0,
      "fiber": 2,
      "carbohydrates": 18.5,
      "servingSize": "1 serving (30g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 99,
      "bestBeforeDays": 45,
      "prepTime": "5 mins"
    }
  },
  {
    "id": "moong-dal",
    "name": "Moong Dal",
    "category": "Dal",
    "tagline": "Golden Fried Moong Lentils",
    "desc": "Crunchy fried moong dal seasoned with rock salt, turmeric and mild spices.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 250,
    "image": "/images/products/farshan/moong-dal.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 130,
    "badges": [
      "Natural",
      "Premium",
      "Fresh Stock"
    ],
    "health": {
      "sweetness": 0,
      "richness": 3,
      "protein": 8,
      "fitnessScore": 8
    },
    "nutrition": {
      "calories": 132,
      "energy": 552,
      "sugar": 0.5,
      "protein": 8,
      "fat": 5.5,
      "cholesterol": 0,
      "fiber": 3.5,
      "carbohydrates": 16,
      "servingSize": "1 serving (30g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 98,
      "bestBeforeDays": 60,
      "prepTime": "5 mins"
    }
  },
  {
    "id": "chakli-rice",
    "name": "Rice Chakli",
    "category": "Chakli",
    "tagline": "Traditional Spiral Rice Chakli",
    "desc": "Traditional spiral rice flour chakli, crispy with a subtle spiced buttery flavor.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 250,
    "image": "/images/products/farshan/chakli-rice.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 100,
    "badges": [
      "Natural",
      "Premium",
      "Fresh Stock"
    ],
    "health": {
      "sweetness": 0,
      "richness": 5,
      "protein": 3,
      "fitnessScore": 7
    },
    "nutrition": {
      "calories": 155,
      "energy": 648,
      "sugar": 0.5,
      "protein": 3,
      "fat": 7.5,
      "cholesterol": 0,
      "fiber": 1.5,
      "carbohydrates": 20,
      "servingSize": "1 serving (30g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 98,
      "bestBeforeDays": 30,
      "prepTime": "5 mins"
    }
  },
  {
    "id": "butter-chakli",
    "name": "Butter Chakli",
    "category": "Chakli",
    "tagline": "Buttery Rich Spiral Snack",
    "desc": "Buttery, crispy and melt-in-mouth chakli made with pure butter and traditional spiced chakli.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 250,
    "image": "/images/products/farshan/butter-chakli.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 90,
    "badges": [
      "Natural",
      "Premium",
      "Fresh Stock"
    ],
    "health": {
      "sweetness": 0,
      "richness": 7,
      "protein": 3,
      "fitnessScore": 6
    },
    "nutrition": {
      "calories": 168,
      "energy": 703,
      "sugar": 0.6,
      "protein": 3.2,
      "fat": 9,
      "cholesterol": 12,
      "fiber": 1.2,
      "carbohydrates": 19.5,
      "servingSize": "1 serving (30g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 99,
      "bestBeforeDays": 30,
      "prepTime": "5 mins"
    }
  },
  {
    "id": "jeera-mathri",
    "name": "Jeera Mathri",
    "category": "Mathri",
    "tagline": "Flaky Cumin Mathri Crackers",
    "desc": "Flaky, layered mathri crackers loaded with cumin seeds. Perfect chai-time snack.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 250,
    "image": "/images/products/farshan/jeera-mathri.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 120,
    "badges": [
      "Natural",
      "Premium",
      "Fresh Stock"
    ],
    "health": {
      "sweetness": 0,
      "richness": 5,
      "protein": 4,
      "fitnessScore": 7
    },
    "nutrition": {
      "calories": 150,
      "energy": 628,
      "sugar": 0.3,
      "protein": 4.5,
      "fat": 7.2,
      "cholesterol": 0,
      "fiber": 1.8,
      "carbohydrates": 18.5,
      "servingSize": "1 serving (30g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 98,
      "bestBeforeDays": 30,
      "prepTime": "5 mins"
    }
  },
  {
    "id": "masala-mathri",
    "name": "Masala Mathri",
    "category": "Mathri",
    "tagline": "Spiced Flaky Wheat Crackers",
    "desc": "Flaky wheat crackers with whole spices, ajwain and black pepper. Deeply savory.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 250,
    "image": "/images/products/farshan/masala-mathri.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 115,
    "badges": [
      "Natural",
      "Premium",
      "Fresh Stock"
    ],
    "health": {
      "sweetness": 0,
      "richness": 5,
      "protein": 4,
      "fitnessScore": 7
    },
    "nutrition": {
      "calories": 152,
      "energy": 636,
      "sugar": 0.4,
      "protein": 4.2,
      "fat": 7.5,
      "cholesterol": 0,
      "fiber": 1.9,
      "carbohydrates": 18.8,
      "servingSize": "1 serving (30g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 98,
      "bestBeforeDays": 30,
      "prepTime": "5 mins"
    }
  },
  {
    "id": "namkeen-mix",
    "name": "Namkeen Mix",
    "category": "Mix Namkeen",
    "tagline": "House Special Namkeen Blend",
    "desc": "Royal Sweets signature namkeen mix with dried fruits, nuts, and savory lentils.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 250,
    "image": "/images/products/farshan/namkeen-mix.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 170,
    "badges": [
      "Natural",
      "Premium",
      "Fresh Stock"
    ],
    "health": {
      "sweetness": 0,
      "richness": 6,
      "protein": 5,
      "fitnessScore": 7
    },
    "nutrition": {
      "calories": 162,
      "energy": 678,
      "sugar": 1.5,
      "protein": 5,
      "fat": 8,
      "cholesterol": 0,
      "fiber": 2.4,
      "carbohydrates": 18.5,
      "servingSize": "1 serving (30g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 99,
      "bestBeforeDays": 45,
      "prepTime": "5 mins"
    }
  },
  {
    "id": "khakhra-masala",
    "name": "Khakhra Masala",
    "category": "Khakhra",
    "tagline": "Thin Roasted Gujarati Wafers",
    "desc": "Super thin, light and roasted wheat khakhra with spiced masala coating.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 200,
    "image": "/images/products/farshan/khakhra-masala.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 95,
    "badges": [
      "Natural",
      "Premium",
      "Fresh Stock"
    ],
    "health": {
      "sweetness": 0,
      "richness": 3,
      "protein": 5,
      "fitnessScore": 9
    },
    "nutrition": {
      "calories": 105,
      "energy": 439,
      "sugar": 0.5,
      "protein": 5,
      "fat": 2.5,
      "cholesterol": 0,
      "fiber": 3.5,
      "carbohydrates": 17.5,
      "servingSize": "1 serving (30g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 99,
      "bestBeforeDays": 60,
      "prepTime": "5 mins"
    }
  },
  {
    "id": "papdi-gathiya",
    "name": "Papdi Gathiya",
    "category": "Papdi",
    "tagline": "Golden Crunchy Gathiya Strips",
    "desc": "Gram flour gathiya strips, crispy with a hint of pepper and carom seeds.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 250,
    "image": "/images/products/farshan/papdi-gathiya.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 130,
    "badges": [
      "Natural",
      "Premium",
      "Fresh Stock"
    ],
    "health": {
      "sweetness": 0,
      "richness": 5,
      "protein": 5,
      "fitnessScore": 7
    },
    "nutrition": {
      "calories": 148,
      "energy": 619,
      "sugar": 0.5,
      "protein": 5.5,
      "fat": 6.8,
      "cholesterol": 0,
      "fiber": 2,
      "carbohydrates": 18,
      "servingSize": "1 serving (30g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 97,
      "bestBeforeDays": 45,
      "prepTime": "5 mins"
    }
  },
  {
    "id": "cornflakes-mixture",
    "name": "Cornflakes Mixture",
    "category": "Mix Namkeen",
    "tagline": "Crunchy Corn & Nut Fusion",
    "desc": "Crunchy roasted cornflakes tossed with nuts, curry leaves and chaat masala.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 250,
    "image": "/images/products/farshan/cornflakes-mixture.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 110,
    "badges": [
      "Natural",
      "Premium",
      "Fresh Stock"
    ],
    "health": {
      "sweetness": 2,
      "richness": 4,
      "protein": 4,
      "fitnessScore": 7
    },
    "nutrition": {
      "calories": 138,
      "energy": 578,
      "sugar": 2,
      "protein": 4,
      "fat": 5.5,
      "cholesterol": 0,
      "fiber": 2,
      "carbohydrates": 20,
      "servingSize": "1 serving (30g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 98,
      "bestBeforeDays": 45,
      "prepTime": "5 mins"
    }
  },
  {
    "id": "dal-moth",
    "name": "Dal Moth",
    "category": "Dal",
    "tagline": "Classic Rajasthani Dal Moth",
    "desc": "Traditional Rajasthani dal moth with moth beans, sev, and aromatic whole spices.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 250,
    "image": "/images/products/farshan/dal-moth.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 125,
    "badges": [
      "Natural",
      "Premium",
      "Fresh Stock"
    ],
    "health": {
      "sweetness": 0,
      "richness": 5,
      "protein": 7,
      "fitnessScore": 8
    },
    "nutrition": {
      "calories": 140,
      "energy": 586,
      "sugar": 0.8,
      "protein": 7,
      "fat": 5.8,
      "cholesterol": 0,
      "fiber": 3.2,
      "carbohydrates": 17.5,
      "servingSize": "1 serving (30g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 97,
      "bestBeforeDays": 60,
      "prepTime": "5 mins"
    }
  },
  {
    "id": "peanut-masala",
    "name": "Peanut Masala",
    "category": "Sev",
    "tagline": "Roasted Masala Coated Peanuts",
    "desc": "Crunchy roasted peanuts coated in authentic masala spice mix. Perfectly addictive.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 250,
    "image": "/images/products/farshan/peanut-masala.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 190,
    "badges": [
      "Natural",
      "Premium",
      "Fresh Stock"
    ],
    "health": {
      "sweetness": 0,
      "richness": 6,
      "protein": 9,
      "fitnessScore": 8
    },
    "nutrition": {
      "calories": 170,
      "energy": 711,
      "sugar": 0.8,
      "protein": 8.5,
      "fat": 10.5,
      "cholesterol": 0,
      "fiber": 2.8,
      "carbohydrates": 12,
      "servingSize": "1 serving (30g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 98,
      "bestBeforeDays": 60,
      "prepTime": "5 mins"
    }
  },
  {
    "id": "chocolate-eclairs",
    "name": "Chocolate Eclairs",
    "category": "Chocolates",
    "subCategory": "Eclairs",
    "tagline": "Rich Chocolate Filled Caramel Eclairs",
    "desc": "Decadent chewy caramel exterior filled with a rich, smooth chocolate center.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 250,
    "image": "/images/products/chocolates/chocolate-eclairs.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 200,
    "badges": [
      "Milk Chocolate",
      "Chewy Caramel",
      "Classic Taste"
    ],
    "health": {
      "sweetness": 8,
      "richness": 6,
      "protein": 2,
      "fitnessScore": 4
    },
    "nutrition": {
      "calories": 120,
      "energy": 502,
      "sugar": 14.5,
      "protein": 1.5,
      "fat": 4.2,
      "cholesterol": 2,
      "fiber": 0.5,
      "carbohydrates": 19.5,
      "servingSize": "3 pieces (25g)"
    },
    "freshness": {
      "madeTime": "Freshly Prepared",
      "score": 96,
      "bestBeforeDays": 180,
      "prepTime": "1 min"
    }
  },
  {
    "id": "melody",
    "name": "Melody",
    "category": "Chocolates",
    "subCategory": "Toffees",
    "tagline": "Smooth Chocolaty Toffee Candy",
    "desc": "Melody is double chocolaty - a rich chocolate core wrapped in a thick chocolaty shell.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 250,
    "image": "/images/products/chocolates/melody.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 250,
    "badges": [
      "Double Chocolate",
      "Toffee Classic",
      "Bite Size"
    ],
    "health": {
      "sweetness": 9,
      "richness": 5,
      "protein": 1,
      "fitnessScore": 4
    },
    "nutrition": {
      "calories": 115,
      "energy": 481,
      "sugar": 15,
      "protein": 1,
      "fat": 3.8,
      "cholesterol": 1,
      "fiber": 0.4,
      "carbohydrates": 20,
      "servingSize": "4 pieces (25g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 95,
      "bestBeforeDays": 180,
      "prepTime": "1 min"
    }
  },
  {
    "id": "coconut-eclairs",
    "name": "Coconut Eclairs",
    "category": "Chocolates",
    "subCategory": "Eclairs",
    "tagline": "Coconut Filled Caramel Eclairs",
    "desc": "Vibrant coconut-infused chocolate core surrounded by a rich golden caramel chew.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 250,
    "image": "/images/products/chocolates/coconut-eclairs.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 180,
    "badges": [
      "Coconut Infused",
      "Fresh Batch",
      "Imported Recipe"
    ],
    "health": {
      "sweetness": 8,
      "richness": 6,
      "protein": 1,
      "fitnessScore": 4
    },
    "nutrition": {
      "calories": 122,
      "energy": 510,
      "sugar": 13.8,
      "protein": 1.2,
      "fat": 4.8,
      "cholesterol": 2,
      "fiber": 0.8,
      "carbohydrates": 18.5,
      "servingSize": "3 pieces (25g)"
    },
    "freshness": {
      "madeTime": "Imported Batch",
      "score": 97,
      "bestBeforeDays": 180,
      "prepTime": "1 min"
    }
  },
  {
    "id": "coffee-bite",
    "name": "Coffee Bite",
    "category": "Chocolates",
    "subCategory": "Toffees",
    "tagline": "Rich Coffee Flavored Toffee",
    "desc": "A perfect blend of rich roasted coffee and sweet caramel in a firm chewy bite.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 250,
    "image": "/images/products/chocolates/coffee-bite.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 150,
    "badges": [
      "Real Coffee Extract",
      "Caramel Blend",
      "Classic"
    ],
    "health": {
      "sweetness": 7,
      "richness": 5,
      "protein": 1,
      "fitnessScore": 5
    },
    "nutrition": {
      "calories": 110,
      "energy": 460,
      "sugar": 12.5,
      "protein": 1,
      "fat": 3.5,
      "cholesterol": 1,
      "fiber": 0.3,
      "carbohydrates": 19,
      "servingSize": "4 pieces (25g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 96,
      "bestBeforeDays": 180,
      "prepTime": "1 min"
    }
  },
  {
    "id": "five-star",
    "name": "5 Star",
    "category": "Chocolates",
    "subCategory": "Bars",
    "tagline": "Caramel & Nougat Chocolate Bar",
    "desc": "Indulgent bar loaded with smooth caramel and soft nougat covered in milk chocolate.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 200,
    "image": "/images/products/chocolates/five-star.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 130,
    "badges": [
      "Milk Chocolate",
      "Caramel Flow",
      "Soft Nougat"
    ],
    "health": {
      "sweetness": 8,
      "richness": 7,
      "protein": 3,
      "fitnessScore": 4
    },
    "nutrition": {
      "calories": 148,
      "energy": 619,
      "sugar": 17.2,
      "protein": 2.5,
      "fat": 6.8,
      "cholesterol": 3,
      "fiber": 0.6,
      "carbohydrates": 22,
      "servingSize": "1 bar (30g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 98,
      "bestBeforeDays": 120,
      "prepTime": "1 min"
    }
  },
  {
    "id": "kitkat",
    "name": "KitKat",
    "category": "Chocolates",
    "subCategory": "Bars",
    "tagline": "Crispy Wafer Fingers in Milk Chocolate",
    "desc": "Classic crisp wafer fingers covered in smooth, rich milk chocolate. Perfect for breaks.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 200,
    "image": "/images/products/chocolates/kitkat.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 170,
    "badges": [
      "Crispy Wafer",
      "Milk Chocolate",
      "Iconic Break"
    ],
    "health": {
      "sweetness": 7,
      "richness": 6,
      "protein": 3,
      "fitnessScore": 5
    },
    "nutrition": {
      "calories": 135,
      "energy": 565,
      "sugar": 15,
      "protein": 2.8,
      "fat": 6.2,
      "cholesterol": 2,
      "fiber": 0.7,
      "carbohydrates": 20.5,
      "servingSize": "1 piece (28g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 97,
      "bestBeforeDays": 120,
      "prepTime": "1 min"
    }
  },
  {
    "id": "perk",
    "name": "Perk",
    "category": "Chocolates",
    "subCategory": "Bars",
    "tagline": "Light & Crispy Wafer Bar",
    "desc": "A light, delicious chocolate-covered wafer bar packed with crisp layers.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 200,
    "image": "/images/products/chocolates/perk.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 160,
    "badges": [
      "Light & Crispy",
      "Milk Chocolate",
      "Value Pack"
    ],
    "health": {
      "sweetness": 7,
      "richness": 5,
      "protein": 2,
      "fitnessScore": 5
    },
    "nutrition": {
      "calories": 125,
      "energy": 523,
      "sugar": 13.5,
      "protein": 2,
      "fat": 5.5,
      "cholesterol": 1,
      "fiber": 0.5,
      "carbohydrates": 19.8,
      "servingSize": "1 bar (25g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 96,
      "bestBeforeDays": 120,
      "prepTime": "1 min"
    }
  },
  {
    "id": "munch",
    "name": "Munch",
    "category": "Chocolates",
    "subCategory": "Bars",
    "tagline": "Ultra Crunchy Wafer Bar",
    "desc": "An incredibly crunchy wafer bar covered in a delicious chocolaty coating.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 200,
    "image": "/images/products/chocolates/munch.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 140,
    "badges": [
      "Extra Crunchy",
      "Light Chocolate",
      "Crispy Layers"
    ],
    "health": {
      "sweetness": 6,
      "richness": 4,
      "protein": 2,
      "fitnessScore": 6
    },
    "nutrition": {
      "calories": 118,
      "energy": 494,
      "sugar": 12,
      "protein": 2.2,
      "fat": 4.8,
      "cholesterol": 1,
      "fiber": 0.6,
      "carbohydrates": 18.2,
      "servingSize": "1 bar (24g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 97,
      "bestBeforeDays": 120,
      "prepTime": "1 min"
    }
  },
  {
    "id": "cadbury-dairy-milk",
    "name": "Cadbury Dairy Milk",
    "category": "Chocolates",
    "subCategory": "Bars",
    "tagline": "Classic Smooth Milk Chocolate",
    "desc": "The classic smooth, rich milk chocolate bar that defines the Cadbury signature taste.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 200,
    "image": "/images/products/chocolates/cadbury-dairy-milk.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 220,
    "badges": [
      "Milk Chocolate",
      "Smooth Texture",
      "Family Favorite"
    ],
    "health": {
      "sweetness": 8,
      "richness": 6,
      "protein": 3,
      "fitnessScore": 5
    },
    "nutrition": {
      "calories": 155,
      "energy": 648,
      "sugar": 16.5,
      "protein": 3,
      "fat": 7.2,
      "cholesterol": 3,
      "fiber": 0.8,
      "carbohydrates": 21,
      "servingSize": "1 bar (30g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 99,
      "bestBeforeDays": 120,
      "prepTime": "1 min"
    }
  },
  {
    "id": "cadbury-silk",
    "name": "Cadbury Silk",
    "category": "Chocolates",
    "subCategory": "Bars",
    "tagline": "Velvety & Creamy Silk Chocolate",
    "desc": "An extra smooth, velvety, and creamy milk chocolate bar for an ultra-luxury melt.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 200,
    "image": "/images/products/chocolates/cadbury-silk.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 150,
    "badges": [
      "Premium Silk",
      "Extra Creamy",
      "Melt-In-Mouth"
    ],
    "health": {
      "sweetness": 8,
      "richness": 8,
      "protein": 3,
      "fitnessScore": 4
    },
    "nutrition": {
      "calories": 168,
      "energy": 703,
      "sugar": 18,
      "protein": 3.2,
      "fat": 8.5,
      "cholesterol": 4,
      "fiber": 0.9,
      "carbohydrates": 22.5,
      "servingSize": "1 bar (32g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 98,
      "bestBeforeDays": 120,
      "prepTime": "1 min"
    }
  },
  {
    "id": "celebrations",
    "name": "Celebrations Gift Box",
    "category": "Chocolates",
    "subCategory": "Gift Boxes",
    "tagline": "Vibrant Festive Chocolate Pack",
    "desc": "An assortment of Cadbury favorite bars packaged in a premium colorful gifting box.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 400,
    "image": "/images/products/chocolates/celebrations.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 300,
    "badges": [
      "Assorted Pack",
      "Festive Edition",
      "Perfect Gift"
    ],
    "health": {
      "sweetness": 8,
      "richness": 7,
      "protein": 3,
      "fitnessScore": 4
    },
    "nutrition": {
      "calories": 145,
      "energy": 607,
      "sugar": 16,
      "protein": 2.8,
      "fat": 6.8,
      "cholesterol": 3,
      "fiber": 0.7,
      "carbohydrates": 20,
      "servingSize": "1 box serving (30g)"
    },
    "freshness": {
      "madeTime": "Gifting Batch",
      "score": 99,
      "bestBeforeDays": 150,
      "prepTime": "1 min"
    }
  },
  {
    "id": "ferrero-rocher",
    "name": "Ferrero Rocher",
    "category": "Chocolates",
    "subCategory": "Imported",
    "tagline": "Golden Hazelnut Chocolate Pralines",
    "desc": "Crisp hazelnut pralines covered in milk chocolate and crushed hazelnuts in gold foil.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 300,
    "image": "/images/products/chocolates/ferrero-rocher.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 110,
    "badges": [
      "Hazelnut Center",
      "Gold Wrapped",
      "Premium Imported"
    ],
    "health": {
      "sweetness": 7,
      "richness": 8,
      "protein": 4,
      "fitnessScore": 5
    },
    "nutrition": {
      "calories": 175,
      "energy": 732,
      "sugar": 14.5,
      "protein": 4.2,
      "fat": 9.8,
      "cholesterol": 4,
      "fiber": 1.2,
      "carbohydrates": 18,
      "servingSize": "2 pralines (25g)"
    },
    "freshness": {
      "madeTime": "Imported Fresh",
      "score": 98,
      "bestBeforeDays": 180,
      "prepTime": "1 min"
    }
  },
  {
    "id": "lindt",
    "name": "Lindt Excellence",
    "category": "Chocolates",
    "subCategory": "Dark",
    "tagline": "Luxury Smooth Dark Chocolate Bar",
    "desc": "Lindt Excellence dark chocolate, smooth, rich and perfectly balanced with high cocoa.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 200,
    "image": "/images/products/chocolates/lindt.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 120,
    "badges": [
      "70% Cocoa",
      "Smooth Dark",
      "Swiss Imported"
    ],
    "health": {
      "sweetness": 4,
      "richness": 7,
      "protein": 4,
      "fitnessScore": 7
    },
    "nutrition": {
      "calories": 160,
      "energy": 669,
      "sugar": 8.5,
      "protein": 4,
      "fat": 9.2,
      "cholesterol": 1,
      "fiber": 2.8,
      "carbohydrates": 14,
      "servingSize": "1 bar (28g)"
    },
    "freshness": {
      "madeTime": "Swiss Crafted",
      "score": 97,
      "bestBeforeDays": 240,
      "prepTime": "1 min"
    }
  },
  {
    "id": "bounty",
    "name": "Bounty",
    "category": "Chocolates",
    "subCategory": "Imported",
    "tagline": "Moist Coconut in Milk Chocolate",
    "desc": "Moist, sweet shredded coconut core covered in a thick layer of smooth milk chocolate.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 200,
    "image": "/images/products/chocolates/bounty.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 140,
    "badges": [
      "Moist Coconut",
      "Milk Coating",
      "Imported Classic"
    ],
    "health": {
      "sweetness": 8,
      "richness": 7,
      "protein": 2,
      "fitnessScore": 5
    },
    "nutrition": {
      "calories": 139,
      "energy": 581,
      "sugar": 15.2,
      "protein": 1.8,
      "fat": 6.5,
      "cholesterol": 2,
      "fiber": 1.1,
      "carbohydrates": 19.2,
      "servingSize": "1 bar (28.5g)"
    },
    "freshness": {
      "madeTime": "Fresh Stock",
      "score": 96,
      "bestBeforeDays": 150,
      "prepTime": "1 min"
    }
  },
  {
    "id": "snickers",
    "name": "Snickers",
    "category": "Chocolates",
    "subCategory": "Imported",
    "tagline": "Peanut, Caramel & Nougat Bar",
    "desc": "Satisfying milk chocolate bar packed with roasted peanuts, rich caramel and chewy nougat.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 200,
    "image": "/images/products/chocolates/snickers.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 160,
    "badges": [
      "Roasted Peanuts",
      "Caramel Flow",
      "Energy Pack"
    ],
    "health": {
      "sweetness": 7,
      "richness": 7,
      "protein": 4,
      "fitnessScore": 5
    },
    "nutrition": {
      "calories": 150,
      "energy": 627,
      "sugar": 14.8,
      "protein": 3.5,
      "fat": 7.2,
      "cholesterol": 2,
      "fiber": 1,
      "carbohydrates": 18.5,
      "servingSize": "1 bar (30g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 98,
      "bestBeforeDays": 150,
      "prepTime": "1 min"
    }
  },
  {
    "id": "mars",
    "name": "Mars",
    "category": "Chocolates",
    "subCategory": "Imported",
    "tagline": "Rich Chocolate, Caramel & Nougat",
    "desc": "A rich milk chocolate bar filled with soft nougat and a layer of creamy, flowing caramel.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 200,
    "image": "/images/products/chocolates/mars.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 110,
    "badges": [
      "Caramel Nougat",
      "Classic Taste",
      "Imported"
    ],
    "health": {
      "sweetness": 8,
      "richness": 6,
      "protein": 2,
      "fitnessScore": 4
    },
    "nutrition": {
      "calories": 145,
      "energy": 607,
      "sugar": 16,
      "protein": 2.2,
      "fat": 5.8,
      "cholesterol": 2,
      "fiber": 0.6,
      "carbohydrates": 20.8,
      "servingSize": "1 bar (30g)"
    },
    "freshness": {
      "madeTime": "Imported",
      "score": 95,
      "bestBeforeDays": 150,
      "prepTime": "1 min"
    }
  },
  {
    "id": "milky-bar",
    "name": "Milky Bar",
    "category": "Chocolates",
    "subCategory": "Milk",
    "tagline": "Sweet Creamy White Chocolate",
    "desc": "Vibrant creamy white chocolate bar that melts instantly into sweet dairy richness.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 200,
    "image": "/images/products/chocolates/milky-bar.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 160,
    "badges": [
      "White Chocolate",
      "High Calcium",
      "Creamy Melt"
    ],
    "health": {
      "sweetness": 9,
      "richness": 6,
      "protein": 3,
      "fitnessScore": 4
    },
    "nutrition": {
      "calories": 138,
      "energy": 578,
      "sugar": 15,
      "protein": 2.8,
      "fat": 6.2,
      "cholesterol": 4,
      "fiber": 0,
      "carbohydrates": 18,
      "servingSize": "1 bar (25g)"
    },
    "freshness": {
      "madeTime": "Fresh Stock",
      "score": 97,
      "bestBeforeDays": 120,
      "prepTime": "1 min"
    }
  },
  {
    "id": "galaxy",
    "name": "Galaxy Chocolate",
    "category": "Chocolates",
    "subCategory": "Bars",
    "tagline": "Silky Smooth Milk Chocolate",
    "desc": "Silky, smooth milk chocolate bar crafted with precision to deliver a premium melt.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 200,
    "image": "/images/products/chocolates/galaxy.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 120,
    "badges": [
      "Silky Smooth",
      "Milk Chocolate",
      "Luxury Melt"
    ],
    "health": {
      "sweetness": 8,
      "richness": 7,
      "protein": 3,
      "fitnessScore": 5
    },
    "nutrition": {
      "calories": 152,
      "energy": 636,
      "sugar": 15.8,
      "protein": 2.9,
      "fat": 7,
      "cholesterol": 3,
      "fiber": 0.7,
      "carbohydrates": 19.5,
      "servingSize": "1 bar (28g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 96,
      "bestBeforeDays": 150,
      "prepTime": "1 min"
    }
  },
  {
    "id": "toblerone",
    "name": "Toblerone",
    "category": "Chocolates",
    "subCategory": "Imported",
    "tagline": "Triangular Honey & Almond Nougat",
    "desc": "Swiss milk chocolate with honey and almond nougat in the iconic triangular peaks.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 200,
    "image": "/images/products/chocolates/toblerone.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 90,
    "badges": [
      "Swiss Chocolate",
      "Triangular Shape",
      "Honey Nougat"
    ],
    "health": {
      "sweetness": 8,
      "richness": 7,
      "protein": 3,
      "fitnessScore": 5
    },
    "nutrition": {
      "calories": 156,
      "energy": 653,
      "sugar": 15.5,
      "protein": 2.7,
      "fat": 7.4,
      "cholesterol": 2,
      "fiber": 0.9,
      "carbohydrates": 20,
      "servingSize": "1 bar (28g)"
    },
    "freshness": {
      "madeTime": "Swiss Crafted",
      "score": 98,
      "bestBeforeDays": 200,
      "prepTime": "1 min"
    }
  },
  {
    "id": "kinder-bueno",
    "name": "Kinder Bueno",
    "category": "Chocolates",
    "subCategory": "Imported",
    "tagline": "Crispy Hazelnut Filled Wafer",
    "desc": "Crispy wafer bar filled with creamy hazelnut filling and covered in milk chocolate.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 200,
    "image": "/images/products/chocolates/kinder-bueno.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 110,
    "badges": [
      "Hazelnut Cream",
      "Crispy Wafer",
      "Imported Delight"
    ],
    "health": {
      "sweetness": 7,
      "richness": 6,
      "protein": 4,
      "fitnessScore": 5
    },
    "nutrition": {
      "calories": 122,
      "energy": 510,
      "sugar": 11.8,
      "protein": 3.5,
      "fat": 6.2,
      "cholesterol": 2,
      "fiber": 0.5,
      "carbohydrates": 14.5,
      "servingSize": "1 finger (21.5g)"
    },
    "freshness": {
      "madeTime": "Fresh Imported",
      "score": 97,
      "bestBeforeDays": 120,
      "prepTime": "1 min"
    }
  },
  {
    "id": "hersheys-milk",
    "name": "Hershey's Milk",
    "category": "Chocolates",
    "subCategory": "Bars",
    "tagline": "Classic Hershey's Milk Chocolate",
    "desc": "The classic, smooth Hershey's milk chocolate bar crafted to melt beautifully.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 200,
    "image": "/images/products/chocolates/hersheys-milk.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 140,
    "badges": [
      "American Recipe",
      "Milk Chocolate",
      "Smooth Melt"
    ],
    "health": {
      "sweetness": 8,
      "richness": 6,
      "protein": 3,
      "fitnessScore": 5
    },
    "nutrition": {
      "calories": 142,
      "energy": 594,
      "sugar": 15,
      "protein": 2.8,
      "fat": 6,
      "cholesterol": 2,
      "fiber": 0.7,
      "carbohydrates": 19.5,
      "servingSize": "1 bar (28g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 96,
      "bestBeforeDays": 180,
      "prepTime": "1 min"
    }
  },
  {
    "id": "hersheys-cookies",
    "name": "Hershey's Cookies & Cream",
    "category": "Chocolates",
    "subCategory": "Bars",
    "tagline": "Creamy White Chocolate with Cookies",
    "desc": "Creamy white chocolate bar packed with crunchy chocolate cookie bits.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 200,
    "image": "/images/products/chocolates/hersheys-cookies.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 130,
    "badges": [
      "White Chocolate",
      "Cookie Bits",
      "Sweet Crunch"
    ],
    "health": {
      "sweetness": 9,
      "richness": 6,
      "protein": 3,
      "fitnessScore": 4
    },
    "nutrition": {
      "calories": 145,
      "energy": 607,
      "sugar": 15.8,
      "protein": 2.6,
      "fat": 6.4,
      "cholesterol": 3,
      "fiber": 0.4,
      "carbohydrates": 19.2,
      "servingSize": "1 bar (28g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 95,
      "bestBeforeDays": 180,
      "prepTime": "1 min"
    }
  },
  {
    "id": "twix",
    "name": "Twix",
    "category": "Chocolates",
    "subCategory": "Imported",
    "tagline": "Caramel & Biscuit Milk Chocolate",
    "desc": "Crispy biscuit finger topped with a rich layer of caramel and covered in milk chocolate.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 200,
    "image": "/images/products/chocolates/twix.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 120,
    "badges": [
      "Biscuit Crunch",
      "Sweet Caramel",
      "Imported"
    ],
    "health": {
      "sweetness": 8,
      "richness": 6,
      "protein": 2,
      "fitnessScore": 4
    },
    "nutrition": {
      "calories": 138,
      "energy": 578,
      "sugar": 14.2,
      "protein": 2,
      "fat": 5.8,
      "cholesterol": 2,
      "fiber": 0.6,
      "carbohydrates": 19.8,
      "servingSize": "1 finger (25g)"
    },
    "freshness": {
      "madeTime": "Fresh Stock",
      "score": 96,
      "bestBeforeDays": 150,
      "prepTime": "1 min"
    }
  },
  {
    "id": "milky-way",
    "name": "Milky Way",
    "category": "Chocolates",
    "subCategory": "Imported",
    "tagline": "Light Nougat & Caramel Bar",
    "desc": "A light, fluffy whipped nougat center topped with caramel and covered in milk chocolate.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 200,
    "image": "/images/products/chocolates/milky-way.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 100,
    "badges": [
      "Light Nougat",
      "Caramel Layer",
      "Sweet Melt"
    ],
    "health": {
      "sweetness": 8,
      "richness": 5,
      "protein": 2,
      "fitnessScore": 4
    },
    "nutrition": {
      "calories": 132,
      "energy": 552,
      "sugar": 14.8,
      "protein": 1.8,
      "fat": 5,
      "cholesterol": 2,
      "fiber": 0.5,
      "carbohydrates": 20,
      "servingSize": "1 bar (26g)"
    },
    "freshness": {
      "madeTime": "Imported",
      "score": 94,
      "bestBeforeDays": 150,
      "prepTime": "1 min"
    }
  },
  {
    "id": "dark-chocolate-almond",
    "name": "Dark Almond Bar",
    "category": "Chocolates",
    "subCategory": "Dark",
    "tagline": "Roasted Almonds in Dark Chocolate",
    "desc": "Silky premium dark chocolate bar loaded with roasted California almonds.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 250,
    "image": "/images/products/chocolates/dark-chocolate-almond.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 110,
    "badges": [
      "Roasted Almonds",
      "70% Dark",
      "Handmade Look"
    ],
    "health": {
      "sweetness": 4,
      "richness": 8,
      "protein": 5,
      "fitnessScore": 8
    },
    "nutrition": {
      "calories": 165,
      "energy": 690,
      "sugar": 7.2,
      "protein": 4.8,
      "fat": 10.2,
      "cholesterol": 0,
      "fiber": 3.1,
      "carbohydrates": 13,
      "servingSize": "1 serving (30g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 98,
      "bestBeforeDays": 180,
      "prepTime": "1 min"
    }
  },
  {
    "id": "dark-chocolate-hazelnut",
    "name": "Dark Hazelnut Bar",
    "category": "Chocolates",
    "subCategory": "Dark",
    "tagline": "Roasted Hazelnuts in Dark Chocolate",
    "desc": "Exquisite dark chocolate bar embedded with crunchy roasted Italian hazelnuts.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 250,
    "image": "/images/products/chocolates/dark-chocolate-hazelnut.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 95,
    "badges": [
      "Whole Hazelnuts",
      "Premium Dark",
      "Luxury Cocoa"
    ],
    "health": {
      "sweetness": 4,
      "richness": 8,
      "protein": 4,
      "fitnessScore": 8
    },
    "nutrition": {
      "calories": 168,
      "energy": 703,
      "sugar": 7,
      "protein": 4.2,
      "fat": 10.8,
      "cholesterol": 0,
      "fiber": 2.9,
      "carbohydrates": 13.5,
      "servingSize": "1 serving (30g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 97,
      "bestBeforeDays": 180,
      "prepTime": "1 min"
    }
  },
  {
    "id": "truffle-box",
    "name": "Premium Truffle Box",
    "category": "Chocolates",
    "subCategory": "Gift Boxes",
    "tagline": "Handcrafted Luxury Chocolate Truffles",
    "desc": "A luxury array of hand-rolled dark, milk, and white chocolate ganache truffles.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 500,
    "image": "/images/products/chocolates/truffle-box.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 80,
    "badges": [
      "Luxury Ganache",
      "Assorted Truffles",
      "Artisanal"
    ],
    "health": {
      "sweetness": 6,
      "richness": 9,
      "protein": 4,
      "fitnessScore": 5
    },
    "nutrition": {
      "calories": 180,
      "energy": 753,
      "sugar": 12,
      "protein": 3.5,
      "fat": 12,
      "cholesterol": 5,
      "fiber": 1.5,
      "carbohydrates": 15,
      "servingSize": "2 pieces (25g)"
    },
    "freshness": {
      "madeTime": "Fresh Atelier Batch",
      "score": 99,
      "bestBeforeDays": 60,
      "prepTime": "1 min"
    }
  },
  {
    "id": "luxury-hamper",
    "name": "Luxury Chocolate Gift Hamper",
    "category": "Chocolates",
    "subCategory": "Gift Boxes",
    "tagline": "Ultimate Chocolate Connoisseur Gift Hamper",
    "desc": "A massive luxury collection containing bars, truffles, eclairs, and premium nuts.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 1000,
    "image": "/images/products/chocolates/luxury-hamper.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 50,
    "badges": [
      "Connoisseur Assortment",
      "Massive Hamper",
      "Prestige Gifting"
    ],
    "health": {
      "sweetness": 7,
      "richness": 8,
      "protein": 4,
      "fitnessScore": 5
    },
    "nutrition": {
      "calories": 158,
      "energy": 661,
      "sugar": 14.5,
      "protein": 3.2,
      "fat": 8.8,
      "cholesterol": 4,
      "fiber": 1.2,
      "carbohydrates": 18,
      "servingSize": "1 serving (30g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 99,
      "bestBeforeDays": 90,
      "prepTime": "1 min"
    }
  },
  {
    "id": "belgian-chocolate",
    "name": "Belgian Chocolate Assortment",
    "category": "Chocolates",
    "subCategory": "Premium",
    "tagline": "Exquisite Belgian Chocolate Box",
    "desc": "Assortment of authentic Belgian pralines, shells, and milk chocolate treats.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 500,
    "image": "/images/products/chocolates/belgian-chocolate.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 75,
    "badges": [
      "Belgian Pralines",
      "Exquisite Artistry",
      "Premium Imported"
    ],
    "health": {
      "sweetness": 6,
      "richness": 9,
      "protein": 3,
      "fitnessScore": 5
    },
    "nutrition": {
      "calories": 172,
      "energy": 720,
      "sugar": 11.2,
      "protein": 3.1,
      "fat": 11.5,
      "cholesterol": 4,
      "fiber": 1.4,
      "carbohydrates": 14.5,
      "servingSize": "2 pieces (26g)"
    },
    "freshness": {
      "madeTime": "Imported fresh",
      "score": 98,
      "bestBeforeDays": 120,
      "prepTime": "1 min"
    }
  },
  {
    "id": "imported-mix",
    "name": "Imported Chocolate Mix",
    "category": "Chocolates",
    "subCategory": "Premium",
    "tagline": "Curated Mix of World's Favorites",
    "desc": "Vibrant custom assortment of KitKat, Snickers, Kinder, Mars and Bounty minis.",
    "pricePerPiece": 0,
    "pricePerKg": 0,
    "weightPerPiece": 500,
    "image": "/images/products/chocolates/imported-mix.webp",
    "accent": "#C5A059",
    "availability": "In Stock",
    "stockCount": 130,
    "badges": [
      "World's Favorites",
      "Minis Mix",
      "Value Party Pack"
    ],
    "health": {
      "sweetness": 8,
      "richness": 7,
      "protein": 3,
      "fitnessScore": 5
    },
    "nutrition": {
      "calories": 144,
      "energy": 602,
      "sugar": 15,
      "protein": 2.9,
      "fat": 6.8,
      "cholesterol": 2,
      "fiber": 0.8,
      "carbohydrates": 19.8,
      "servingSize": "1 serving (30g)"
    },
    "freshness": {
      "madeTime": "Fresh Batch",
      "score": 97,
      "bestBeforeDays": 120,
      "prepTime": "1 min"
    }
  }
];
