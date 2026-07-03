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
  category: "Traditional" | "Sugar-Free" | "Bakery" | "Cookies" | "Chocolates" | "Dates" | "Dry Fruits" | "Honey" | "Ayurvedic";
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
    "id": "ajwa-special-ladoo",
    "name": "Ajwa Special Motichoor Ladoo",
    "category": "Traditional",
    "tagline": "Golden Pearls of Traditional Joy",
    "desc": "Authentic fine-pearl motichoor ladoo made with pure cow ghee, flavored with aromatic saffron and green cardamom, and topped with chopped almonds and pistachios.",
    "pricePerPiece": 20,
    "pricePerKg": 400,
    "weightPerPiece": 50,
    "image": "/images/products/sweets/ajwa-special-ladoo.webp",
    "accent": "#FFA500",
    "availability": "In Stock",
    "stockCount": 150,
    "badges": [
      "Pure Ghee",
      "Fine Pearls",
      "Ajwa Special"
    ],
    "health": {
      "sweetness": 8,
      "richness": 9,
      "protein": 3,
      "fitnessScore": 5
    },
    "nutrition": {
      "calories": 180,
      "energy": 753,
      "sugar": 15.5,
      "protein": 2.5,
      "fat": 8.8,
      "cholesterol": 15,
      "fiber": 0.5,
      "carbohydrates": 22,
      "servingSize": "1 piece (50g)"
    },
    "freshness": {
      "madeTime": "8:30 AM today",
      "score": 99,
      "bestBeforeDays": 10,
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
    "image": "/images/products/packaged/haldiram-rasgulla.webp",
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
  }
];

