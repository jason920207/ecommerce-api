'use strict'

const products = {
  "products": [
    {
      "imagePath": "https://i.imgur.com/lnR1YSI.jpg",
      "title": "REDESS Beanie Hat for Men and Women Winter Warm Hats Knit Slouchy Thick Skull Cap",
      "description": "COMFORTABLE TO WEAR: This winter warm hat for men is made of high quality materials and well designed to fit men. With adjustable rubber band built inside perfect adjustability is available.",
      "price": "19.99"
    },
    {
      "imagePath": "https://i.imgur.com/WoyMZUw.jpg",
      "title": "Lisianthus Women Belt Buckle Fedora Hat",
      "description": "Breathable, lightweight and comfortable for all-day wear",
      "price": "16.45"
    },
    {
      "imagePath": "https://i.imgur.com/jrsvwuZ.jpg",
      "title": "KBETHOS Lit Patch Finesse Self Made Dad Hat Baseball Cap Polo Style Unconstructed Cotton Adjustable",
      "description": "ADJUSTABLE BUCKLE CLOSURE: One Size Fits Most, Comfortable Everyday Fit. Use the convenient metal closure to custom fit the baseball cap to your head and ensure maximum comfort and a secure fit at all times. The unisex design makes it suitably perfect for both men and women.",
      "price": "13.99"
    },
    {
      "imagePath": "https://i.imgur.com/GZYVYsi.jpg",
      "title": "Prevue Pet Products Stainless Steel Playtop Bird Cage",
      "description": "ADVANCED TECHNOLOGY: Columbia Unisex Bora Bora Booney fishing hat features our signature wicking fabric with sweat-wicking capabilities and UPF 50 sun protection technology that helps shield you from harmful UVA and UVB rays.",
      "price": "24.45"
    },
    {
      "imagePath": "https://i.imgur.com/VaHKJH2.jpg",
      "title": "2 Pack Men's Cotton Flat Cap Ivy Gatsby Newsboy Hunting Hat",
      "description": "Great Material: This newboys hat is made of 100% cotton, and it is more breathable and comfortable, this flat ivy gatsby newsboy hat is very easy to fix. You never should worry it fall on the ground easily.",
      "price": "14.99"
    },
    {
      "imagePath": "https://i.imgur.com/yTlYpub.jpg",
      "title": "Pococina Upgraded 4.2 Bluetooth Beanie Music Hat Winter Knit Hat Cap Wireless Headphone Musical Speaker Beanie Hat as Christmas Birthday Gifts for Men Women Teen Girls Boys, Built-in Mic - 012 Gray",
      "description": "🎁 BUILT-IN WIRELESS HEADPHONES WITH MIC: Equipped with built-in wireless headphones. Thanks to the V4.2 BT technology, you can easily and quickly connect the wireless headset to your BT devices. 3-button control panel makes the wireless earphones easy to switch the songs and control the volume",
      "price": "14.99"
    },
    {
      "imagePath": "https://i.imgur.com/GNkWDOG.jpg",
      "title": "adidas Women's Originals Relaxed Fit Strapback Cap",
      "description": "68% Acrylic/20% Cotton/12% Wool",
      "price": "26.94"
    },
    {
      "imagePath": "https://i.imgur.com/6BRA4M0.jpg",
      "title": "Jemis Skullies Beanies Thin Bonnet Cap Autumn Casual Beanies Hat",
      "description": "The Grid Turban Hats is the perfect cold weather anf Fall companion.The Women Scarves Beanie generates a feeling of coziness and warmth.",
      "price": "12.99"
    },
    {
      "imagePath": "https://i.imgur.com/j5sfCmP.jpg",
      "title": "Tommy Hilfiger Men's Ardin Dad Hat",
      "description": "Tommy Hilfiger hat featuring our iconic flag logo",
      "price": "19.99"
    },
    {
      "imagePath": "https://i.imgur.com/MZZoQ7I.jpg",
      "title": "City Hunter W300 Premium Wool Solid Trapper Hats - Multi Colors",
      "description": "Premium Wool and Faux fur",
      "price": "14.99"
    },
    {
      "imagePath": "https://i.imgur.com/DLlJacy.jpg",
      "title": "Bellady Women Solid Color Winter Hat 100% Wool Cloche Bucket with Bow Accent",
      "description": "100% wool vintage felt hat, normally wool felt has these features: highly resilient, cuts with a clean edge, does not ravel or fray, very nice feel in your hand",
      "price": "23.99"
    },
    {
      "imagePath": "https://i.imgur.com/lz2BUx8.jpg",
      "title": "Cap-sac Fanny pack hat for your Head - Nylon Cap with Zipper Pocket and Adjustable Closure - Mens Hats/Womens Hats",
      "description": "Be the life of any 80s or 90s party!",
      "price": "19.99"
    },
    {
      "imagePath": "https://i.imgur.com/sx1AnGN.jpg",
      "title": "VECRY Lady French Beret 100% Wool Beret Floral Dress Beanie Winter Hat",
      "description": "DESIGN: This Knitted French Beret. Simple and cozy, Wool and Angora surface knitting brim cuffed, soft fur lined.decorated floral,bow and Liffle fur.",
      "price": "21.87"
    },
    {
      "imagePath": "https://i.imgur.com/0pZ4kBG.jpg",
      "title": "OTS NFL Adult Men's NFL Challenger Adjustable Hat",
      "description": "100% garment washed cotton twill for a soft, worn-in look and feel to go with the raised embroidered team graphics",
      "price": "22.00"
    },
    {
      "imagePath": "https://i.imgur.com/u0Lk93C.jpg",
      "title": "Headache Hat - The Original Wearable Ice Pack for Migraine Headaches and Tension Relief - Regular Size",
      "description": "SOOTHING COMPRESSION - Experience instant and long-lasting cooling therapy for migraine headaches, head and neck tension, stress relief and more",
      "price": "39.99"
    },
    {
      "imagePath": "https://i.imgur.com/uFrw870.jpg",
      "title": "e4Hats.com NASA Insignia Embroidered Pigment Dyed Cap - Navy OSFM",
      "description": "One size fits most with an adjustable buckle strap closure, fitting up to 7 1/2.",
      "price": "8.94"
    },
    {
      "imagePath": "https://i.imgur.com/pb0Ux8w.jpg",
      "title": "MSA 475407 Natural Tan Skullgard Hard Hat with Fas-Trac Suspension",
      "description": "ANSI/ISEA Z89.1-2014 (Class G) Compliant, provides dielectric protection up to 2,200 volts.",
      "price": "79.25"
    },
    {
      "imagePath": "https://i.imgur.com/yUlsVuk.jpg",
      "title": "i play. Flap Sun Protection Hat",
      "description": "100% Polyester; lining:100% Polyester",
      "price": "14.99"
    },
    {
      "imagePath": "https://i.imgur.com/efwkgWi.jpg",
      "title": "Masters golf Hat green caddy style augusta national new 2019 masters pga",
      "description": "Authentic PGA collectible from American Needle",
      "price": "51.95"
    },
    {
      "imagePath": "https://i.imgur.com/RZ2URoT.jpg",
      "title": "Custom Hat, Embroidered. Your Own Text. Adjustable Back. Curved Bill Many Colors",
      "description": "Curved Bill , Adjustable Back Closure Comfortable Fit,",
      "price": "19.95"
    }
  ]
}

module.exports = products.products
