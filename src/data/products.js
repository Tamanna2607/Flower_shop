const products = [
  // Flowers
  {
    id: 1,
    name: "Red Rose Bouquet",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjkDFn3czLjUfez2qIOCMYiJn_o9Rz9lZowA&s",
    emoji: "🌹",
    category: "Flowers",
    price: 499,
    rating: 4.8,
    description: "A stunning bouquet of 12 freshly hand-picked red roses with lush green foliage. Perfect for expressing love and admiration.",
    options: [
      { name: "Size", values: ["Small", "Medium", "Large"] },
      { name: "Color", values: ["Red", "White", "Pink"] }
    ]
  },
  {
    id: 2,
    name: "Tropical Orchid",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSKyKXMAKRI7ENXhzUACfHXoqnV_tAgxoTRjhJf_6KgpXJzf6KsjRY8yXoLAekc87wesPBExV6KSD1KNi7g1DidenWQmxHNDMo937E4Yu_iZuoU3nyxSxKN",
    emoji: "🌺",
    category: "Flowers",
    price: 899,
    rating: 4.7,
    description: "Exquisite tropical orchid arrangement with vibrant colors and long-lasting blooms. Ideal for modern home decor.",
    options: [
      { name: "Size", values: ["Small", "Large"] },
      { name: "Color", values: ["Purple", "White", "Pink"] }
    ]
  },
  {
    id: 3,
    name: "Sunflower Bundle",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTxIFBYei7BBVT1fhBKtMkplwgOMVPu8SuSAsfBCHAck7H5gsJolbpCbBfaLOQmGVT6CTLG1XX7BBGG2YgD9DooRxQtxw44zG3ccixofoGC4tgANSUgQ3ELjg",
    emoji: "🌻",
    category: "Flowers",
    price: 399,
    rating: 4.6,
    description: "Cheerful sunflower bundle that brings warmth and happiness to any room. Perfect for brightening up your day.",
    options: [
      { name: "Size", values: ["Small", "Medium"] },
      { name: "Color", values: ["Yellow", "Mixed"] }
    ]
  },
  {
    id: 4,
    name: "Lavender Bouquet",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSQmpUN6Lsi7_QuGDBY1eSTYx9GZI_YPKRabbThxQM3oZr-wnyK7Xjrf0RUrsLmFJgaGgUa2AMszdxSngj0WQppOsqC6rauypPOsfC9L4aVjj4-8TcdlXJZ2g",
    emoji: "🌸",
    category: "Flowers",
    price: 699,
    rating: 4.9,
    description: "Delicate lavender bouquet with soothing fragrance. Ideal for creating a peaceful ambiance.",
    options: [
      { name: "Size", values: ["Small", "Large"] }
    ]
  },
  {
    id: 5,
    name: "Peony Collection",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSH7ez8Biwe_PqjbEy_0oq_kjUZ2odF4kHwOKiNCpn7ein5ViQKEg45kXh2Lstc45unNCNEaFc1x6fYrQbSBo-7jyvlxgKMx2ZDWkQaduuI",
    emoji: "🌼",
    category: "Flowers",
    price: 799,
    rating: 4.8,
    description: "Luxurious peony collection with rich, velvety petals. Perfect for special occasions.",
    options: [
      { name: "Size", values: ["Small", "Large"] },
      { name: "Color", values: ["Pink", "White"] }
    ]
  },
  {
    id: 6,
    name: "Mixed Wildflowers",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSy7Fd9B7D4R_My83CgFgwobTGGXwP1cD1yTeiHVyoa3TAcnQwm8pqxRPZz02KUxnazX0Yu8KhMaRHRPznVtIPw30xY4itV3e8tcym2I5x1FF81SnkefXPunA",
    emoji: "🌾",
    category: "Flowers",
    price: 599,
    rating: 4.5,
    description: "A beautiful bundle of colorful wildflowers. Great for casual gifting or countryside charm.",
    options: [
      { name: "Size", values: ["Medium", "Large"] }
    ]
  },
  {
    id: 7,
    name: "Tulip Trio",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTGAGtsXr8zLnO07v7Ia9kQT7NcTAO_J1GcdENDuuY6Q4z4fZuoCRXtxh5M8_IcCJwKlE_ZBqo9PiCUIiTtoEqRAU2OKFtnpcWUX_KB-DgwNY0iwFh8hPgn7w",
    emoji: "🌷",
    category: "Flowers",
    price: 549,
    rating: 4.7,
    description: "A trio of bright tulips symbolizing perfect love. Ideal for anniversaries and romantic gestures.",
    options: [
      { name: "Color", values: ["Red", "Yellow", "White"] }
    ]
  },

  // Vases
  {
    id: 8,
    name: "Crystal Glass Vase",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSyUr_Xzz3A6kxcj0YWne8oDXPgr4Kvy8Czeyo2y1G_9RcUOLnjDZPCTSSkf7S2mR0RzmSP9BkqWwPZbcNHhHwgIaAmplmhlk2pk0nSRVgs9svoKSQM4UaeXQ",
    emoji: "🏺",
    category: "Vases",
    price: 1999,
    rating: 4.9,
    description: "Elegant crystal glass vase with intricate design. Perfect for showcasing premium flower arrangements.",
    options: [
      { name: "Size", values: ["Small", "Medium", "Large"] }
    ]
  },
  {
    id: 9,
    name: "Modern Glass Vase",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQp4jIuvj23_L7rdusNXzzERP0F-XgNyVffuk8EF43QdvDAS6xAjCXq07RkvWs-ZUpytjQrmulh21fVPshjY1-0-K4UO8-RdRLms7C2g1KX6Jv2NQOd0kcMFw",
    emoji: "🏺",
    category: "Vases",
    price: 1299,
    rating: 4.5,
    description: "Minimalist glass vase with sleek design. Perfect for contemporary home decor.",
    options: [
      { name: "Size", values: ["Small", "Medium"] }
    ]
  },
  {
    id: 10,
    name: "Terracotta Pot",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRYuUpC2RBmJaCa9Nfd-kuPFtceLtkAm7XWN7q8TtE1ejx6zC5nVVSXBAkl7xJS2puSstbpK-2_G7FqHmVuGOK9reT0dFAGwBG2IMQstgYj5AMNb7X9sQp9EQ",
    emoji: "🏺",
    category: "Vases",
    price: 899,
    rating: 4.4,
    description: "Simple and elegant white ceramic vase perfect for any arrangement of flowers.",
    features: ["White Ceramic", "12\" Height", "Classic Shape", "Dishwasher Safe", "Versatile"],
    options: [
      { name: "Size", values: ["Small", "Medium", "Large"] }
    ]
  },
  {
    id: 11,
    name: "Crystal Bowl",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSAS9FL_cUoRxTVpPzVuzhRFLbGVSXuBftffRecis9YagRVXlrghmx9rT2PEIq6y6QB7cbsZGjRQUzcRSCjOLWESxSUJ_xDKqch5-UeSGE",
    emoji: "🏺",
    category: "Vases",
    price: 2499,
    rating: 5.0,
    description: "Luxurious crystal bowl with intricate cut design. Perfect for premium flower arrangements.",
    options: [
      { name: "Size", values: ["Small", "Large"] }
    ]
  },
  {
    id: 12,
    name: "Pastel Striped Vase",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQiuk-E-PY75kRxDqxIS-1BGoFw-PekUsu62k_LNyzFQv9e08ZH6euEpYR4FD837vODPDYZSVoEpNrjewqj_rfP9jF1k9YEDu-AWel9y3BAwlZpdc8QfUUGbg",
    emoji: "🏺",
    category: "Vases",
    price: 1099,
    rating: 4.3,
    description: "Charming striped vase in pastel shades. A soft visual upgrade for your blooms.",
    options: [
      { name: "Color", values: ["Pink", "Mint", "Lavender"] }
    ]
  },

  // Tools
  {
    id: 13,
    name: "Premium Gardening Shears",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQUvH3A7_UCPCtWdk4PBscCBn5-hzKB_oGAja0-oS9QwcHOMhufds_9P4uI-KE3RSnJf_qO0u3jG-U0pQ4YbnD-VQsq9Sj_QaU0f6AQ7G2MmwuaS5yIOHRo",
    emoji: "🪴",
    category: "Tools",
    price: 1499,
    rating: 4.7,
    description: "Professional-grade gardening shears with ergonomic design. Perfect for precise cutting and trimming.",
    options: [
      { name: "Size", values: ["Regular", "Large"] }
    ]
  },
  {
    id: 14,
    name: "Gardening Gloves",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQnXv6MS5188Ztltgg-MRrHac9iXnqL7v5jCourhh4GqBnvuqfwWTibvdRGsSCVyu65EZrycTTfpdoiHf4mpJpZAQiH-yxTstVPvejgwJ7glx_aEFw9roGx8g",
    emoji: "🧤",
    category: "Tools",
    price: 499,
    rating: 4.6,
    description: "Heavy-duty gardening gloves with excellent grip and comfort. Ideal for all gardening tasks.",
    options: [
      { name: "Size", values: ["Small", "Medium", "Large"] }
    ]
  },
  {
    id: 15,
    name: "Watering Can",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTYbfdsEMSutcoEdyGMwxH05wmOuNDYTpxsvueiywkBpuvlnHSJbNZGhxO7ZhKcyl9bUCUnvzUusykhoH_5AbSXSgYRCMbzTK4v3xkRmrjccfGnxc9oTLqcEQ",
    emoji: "💧",
    category: "Tools",
    price: 999,
    rating: 4.8,
    description: "Elegant watering can with precise water flow control. Perfect for indoor and outdoor plants.",
    options: [
      { name: "Size", values: ["Small", "Large"] },
      { name: "Color", values: ["Blue", "Green", "White"] }
    ]
  },
  {
    id: 16,
    name: "Plant Mister",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTUQVvlAA64rSn6apdGmRrlbBK_g7gTYOb_xh8Jge8JSqX1HyG9gzXIhVPoA6L_OaQSkSWC5hOnfXjYLY385vvvMMNlIDm2rHdKB-7xETm1EA76-XUeLUIfzw",
    emoji: "💧",
    category: "Tools",
    price: 799,
    rating: 4.5,
    description: "Fine mist sprayer for delicate plants and flowers. Perfect for maintaining humidity.",
    options: [
      { name: "Size", values: ["Regular"] },
      { name: "Color", values: ["Silver", "Black"] }
    ]
  },
  {
    id: 17,
    name: "Soil Tester",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSOdE_ecHayojharjp-lqqz_7tm5IKwvsOd47Zep8elhMAEnkgxLIF9yNVmY6_D4CHp5BUKCGkuJETA9rW6-Uoa0tgP927ytJMLS9VAEBtwM7eUuMLJiD1E_w",
    emoji: "🧪",
    category: "Tools",
    price: 1299,
    rating: 4.6,
    description: "Digital soil tester for pH, moisture, and light levels. Perfect for maintaining healthy plants.",
    options: [
      { name: "Type", values: ["Regular"] }
    ]
  },
  {
    id: 18,
    name: "Seed Starter Kit",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSSfXs4n_vMvb4OOZlZs1wjnL_SSRkEgXtLEPnI3FMnTgnj0jB5yZlEg-lHBqsWse0CnCr_DxM1deDDYOEhQl91xyzpPaIeaqq9OpHroBtf63KaRxxZbxWZiQ",
    emoji: "🌱",
    category: "Tools",
    price: 699,
    rating: 4.4,
    description: "Complete seed starting kit with biodegradable pots and soil pellets.",
    options: [
      { name: "Type", values: ["Herbs", "Flowers"] }
    ]
  },

  // Gifts
  {
    id: 19,
    name: "Love You Gift Card",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSklPs66HZWUHLG3keyvMWqcy3Nj9Nnm-wjmgNq0hgeV5Ptku25pYNhNhezx9Gt-N0Vj4HLPgun3RQfblrs1NbA1ZDgVUpidOCPWPKOIA5TT6sQ62KfPLRAh6A",
    emoji: "💌",
    category: "Gifts",
    price: 199,
    rating: 4.9,
    description: "A romantic message card you can personalize. Perfect for anniversaries and surprises.",
    options: [
      { name: "Design", values: ["Red Heart", "Rose", "Butterfly"] }
    ]
  },
  {
    id: 20,
    name: "Mini Teddy with Flowers",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQnxekMY3TkDZ8K4MxxKTLn9YcSZsrD9uLUgn6KaQ7bOtpPh4myuiugrel_RXxekljzeymma-0hvH_5X7NW4D0S1EWFKRejMROWHw63pXVEgZg3euFTcaRcmA",
    emoji: "🧸",
    category: "Gifts",
    price: 599,
    rating: 4.7,
    description: "Cute mini teddy included with a small flower bunch. Great for gifting!",
    options: [
      { name: "Color", values: ["Brown", "Pink"] }
    ]
  },
  {
    id: 21,
    name: "Scented Candle Set",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQnNOGUgi58QxnPgWYuD41rRnsxKlOYu3QgpO_gYrqMXsMWFlQgtdDXaD5ljTtcm4lKmAE5_kqF6GkkqqyPhtsMXyk5RIh7p-eY6JE19EufK3bMQwmze9MG",
    emoji: "🕯️",
    category: "Gifts",
    price: 899,
    rating: 4.8,
    description: "Set of 3 floral-scented candles to pair with your bouquet orders.",
    options: [
      { name: "Fragrance", values: ["Rose", "Lavender", "Peony"] }
    ]
  },
  {
    id: 22,
    name: "Greeting Card Pack",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRzD5gG-LML5DFILyL9Kj8REitRyeI0xNdVBe2mbYrDBZzEJXfrYZwKTqaIRde_dc3c8cjM_a_TvmujYMyA_rWjYDWPfkj8UU8vFDBAgJYeiyosmTq5ccQP",
    emoji: "📬",
    category: "Gifts",
    price: 299,
    rating: 4.6,
    description: "Set of 5 blank floral-themed cards for every occasion.",
    options: [
      { name: "Theme", values: ["Birthday", "Thank You", "Anniversary"] }
    ]
  },
  {
    id: 23,
    name: "Mini Flower Basket",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTkILPZp7gf9ODiwcXftYGFtvYa1CglMhxrz9vwMXKuRYGVmGEPn34gTsu8mPgkgYGFl9TOy0-gAQwq2bsa7FtGPMtxmgXVvwvPNeH7dIfQBZFWvOdI9n6O",
    emoji: "🧺",
    category: "Gifts",
    price: 699,
    rating: 4.7,
    description: "Adorable hand-woven mini basket filled with faux flowers. A lasting gift!",
    options: [
      { name: "Color", values: ["Pastel", "Bright"] }
    ]
  },
  {
    id: 24,
    name: "Essential Oil Kit",
    image : "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR8CmOtMQsTEA19HuqDPeQnPoX37q2aUaMMaY0UfDA7NFLZe3bHj_97do1FlbhVNmIjhvu5YD-GJ4Oo1u0EEKy3gq3ztQphaB-LK33VVPO4",
    emoji: "🪔",
    category: "Gifts",
    price: 1199,
    rating: 4.9,
    description: "Aromatherapy oils with floral fragrances like jasmine, rose, and lavender.",
    options: [
      { name: "Pack Size", values: ["3 Oils", "5 Oils"] }
    ]
  }
];

export default products;
