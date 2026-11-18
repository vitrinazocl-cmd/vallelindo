export interface TierPrice {
  minQty: number;
  price: number;
  label: string;
}

export interface Review {
  id: string;
  author: string;
  businessName?: string;
  rating: number;
  date: string;
  comment: string;
  verifiedPurchase: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  sku: string;
  category: "carnes" | "quesos" | "pizza" | "congelados" | "embutidos" | "bebidas";
  categoryName: string;
  subCategory: string;
  price: number; // Precio minorista o base
  originalPrice: number;
  discountPercent?: number;
  stock: number;
  stockStatus: "in_stock" | "low_stock" | "out_of_stock";
  unit: string; // ej: "Pieza 10 kg", "Barra 3 kg", "Caja 15 kg"
  weight: string;
  origin: string; // ej: "Chile", "Venezuela", "Brasil", "Uruguay"
  rating: number;
  reviewCount: number;
  image: string;
  galleryImages: string[];
  description: string;
  shortDescription: string;
  ingredients?: string;
  storage: string;
  nutrition?: {
    calories: string;
    protein: string;
    fat: string;
    sodium: string;
  };
  wholesaleTiers: TierPrice[];
  isFeatured?: boolean;
  isBestSeller?: boolean;
  isOffer?: boolean;
  tags: string[];
}

export const CATEGORIES = [
  {
    id: "carnes",
    name: "Carnes",
    icon: "🥩",
    description: "Vacuno, Cerdo y Pollo al por mayor",
    count: 28,
    image: "/assets/products/named/lomo-vetado-vacuno-premium.jpeg",
    subcategories: ["Vacuno", "Cerdo", "Pollo", "Cortes Especiales"]
  },
  {
    id: "quesos",
    name: "Quesos",
    icon: "🧀",
    description: "Mozzarella, Palmita, Gouda y Mantecoso para pizzerías",
    count: 34,
    image: "/assets/products/named/queso-palmita-rio-grande-10kg.jpeg",
    subcategories: ["Mozzarella", "Palmita", "Gouda", "Mantecoso", "Rallado"]
  },
  {
    id: "pizza",
    name: "Insumos para Pizza",
    icon: "🍕",
    description: "Salsas de tomate, Pepperoni, Jamón, Harinas y Especias",
    count: 42,
    image: "/assets/products/named/salsa-tomate-pizza-sauce-3kg.jpeg",
    subcategories: ["Salsas de Tomate", "Pepperoni", "Jamón Cocido", "Orégano y Especias", "Harinas Especiales"]
  },
  {
    id: "congelados",
    name: "Congelados",
    icon: "❄️",
    description: "Papas prefritas, Nuggets, Empanadas y Snacks",
    count: 19,
    image: "/assets/products/named/papas-fritas-prefritas-2-5kg.jpeg",
    subcategories: ["Papas Fritas", "Nuggets", "Empanadas", "Hamburguesas"]
  },
  {
    id: "embutidos",
    name: "Embutidos",
    icon: "🌭",
    description: "Vienesas, Longanizas y Chorizos parrilleros",
    count: 23,
    image: "/assets/products/named/salchicha-vienesa-tradicional-1kg.jpeg",
    subcategories: ["Vienesas", "Longanizas", "Chorizos", "Tocino"]
  },
  {
    id: "bebidas",
    name: "Bebidas",
    icon: "🥤",
    description: "Gaseosas, Jugos, Aguas y energéticas",
    count: 15,
    image: "/assets/products/named/bebidas-gaseosas-jugos-distribucion.jpeg",
    subcategories: ["Bebidas 1.5L", "Latas 350ml", "Aguas Minerales", "Jugos"]
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "prod-llanero",
    slug: "queso-llanero-oferta-relampago-marzo",
    name: "Queso Llanero Artesanal (Oferta Relámpago Marzo)",
    brand: "Valle Lindo Especial",
    sku: "Q-LLAN-MARZO",
    category: "quesos",
    categoryName: "Quesos",
    subCategory: "Llanero",
    price: 6990,
    originalPrice: 8490,
    discountPercent: 18,
    stock: 350,
    stockStatus: "in_stock",
    unit: "Kilo (Venta por Kilo o Bloque)",
    weight: "1 kg",
    origin: "Venezuela / Chile",
    rating: 5.0,
    reviewCount: 142,
    image: "/assets/products/named/queso-llanero-artesanal-bloque.jpeg",
    galleryImages: [
      "/assets/products/named/queso-llanero-artesanal-bloque.jpeg",
      "/assets/products/named/queso-palmita-rio-grande-10kg.jpeg"
    ],
    shortDescription: "¡OFERTA RELÁMPAGO SOLO POR MARZO! Auténtico queso llanero rallable y asable, consistencia firme, punto de sal ideal para tequeños, arepas y cachapas.",
    description: "Promoción imperdible por el mes de marzo. Queso llanero tradicional con el punto de sal exacto, excelente rendimiento y consistencia perfecta para rallar o freír sin desarmarse.",
    storage: "Refrigerado 2°C a 6°C.",
    wholesaleTiers: [
      { minQty: 1, price: 6990, label: "Por Kilo ($6.990)" },
      { minQty: 5, price: 6490, label: "5 a 19 kg ($6.490 c/u)" },
      { minQty: 20, price: 5990, label: "Bloque 20+ kg ($5.990 c/u)" }
    ],
    isFeatured: true,
    isBestSeller: true,
    isOffer: true,
    tags: ["queso llanero", "oferta relampago", "marzo", "tequeños", "comida rapida"]
  },
  {
    id: "prod-1",
    slug: "queso-palmita-rio-grande-10kg",
    name: "Queso Palmita Río Grande 10 kg (Original Mayorista)",
    brand: "Río Grande",
    sku: "Q-PALM-10K",
    category: "quesos",
    categoryName: "Quesos",
    subCategory: "Palmita",
    price: 54990,
    originalPrice: 63990,
    discountPercent: 14,
    stock: 85,
    stockStatus: "in_stock",
    unit: "Pieza cilíndrica 10 kg aprox.",
    weight: "10 kg",
    origin: "Venezuela / Chile",
    rating: 4.9,
    reviewCount: 128,
    image: "/assets/products/named/queso-palmita-rio-grande-10kg.jpeg",
    galleryImages: [
      "/assets/products/named/queso-palmita-rio-grande-10kg.jpeg",
      "/assets/catalog/pizzerias/page_2.png",
      "/assets/catalog/pizzerias/page_3.png"
    ],
    shortDescription: "El auténtico queso Palmita Río Grande, ideal para locales gastronómicos, tequeñerías, cachaperas y pizzerías. Punto de sal equilibrado y textura inigualable.",
    description: "Queso Palmita Río Grande seleccionado bajo los más estrictos estándares de calidad higiénica y alimentaria. Su textura compacta con pequeños agujeros (ojos) y su toque tradicional de sal lo convierten en el insumo preferido por restaurantes y negocios de comida rápida en todo Chile.",
    ingredients: "Leche pasteurizada entera, fermentos lácticos seleccionados, cuajo natural, cloruro de sodio.",
    storage: "Mantener refrigerado entre 2°C y 6°C. Consumir dentro de los 30 días posteriores a la apertura.",
    nutrition: {
      calories: "320 kcal por 100g",
      protein: "22g",
      fat: "25g",
      sodium: "580mg"
    },
    wholesaleTiers: [
      { minQty: 1, price: 54990, label: "1 a 2 unidades" },
      { minQty: 3, price: 52990, label: "3 a 9 unidades (-4%)" },
      { minQty: 10, price: 49990, label: "10+ unidades (-9%)" }
    ],
    isFeatured: true,
    isBestSeller: true,
    isOffer: true,
    tags: ["queso palmita", "rio grande", "pizzerias", "mayorista", "oferta", "comida rapida"]
  },
  {
    id: "prod-2",
    slug: "queso-mozzarella-barra-colun-3kg",
    name: "Queso Mozzarella en Barra Especial Pizza 3 kg",
    brand: "Valle Lindo Select / Colun",
    sku: "Q-MOZZ-3K",
    category: "quesos",
    categoryName: "Quesos",
    subCategory: "Mozzarella",
    price: 19990,
    originalPrice: 23500,
    discountPercent: 15,
    stock: 140,
    stockStatus: "in_stock",
    unit: "Barra sellada al vacío 3 kg",
    weight: "3 kg",
    origin: "Chile - Sur de Chile",
    rating: 4.9,
    reviewCount: 94,
    image: "/assets/products/named/queso-mozzarella-barra-colun-3kg.jpeg",
    galleryImages: [
      "/assets/products/named/queso-mozzarella-barra-colun-3kg.jpeg",
      "/assets/catalog/pizzerias/page_4.png"
    ],
    shortDescription: "Mozzarella de alto rendimiento para hornos a leña, gas o eléctricos. Fundido elástico parejo, dorado crocante y cero desprendimiento de grasa.",
    description: "Diseñado especialmente para maestros pizzeros. Posee la humedad exacta para no humedecer la masa de pizza, logrando una hebra larga y un gratinado brillante uniforme.",
    ingredients: "Leche pasteurizada de vaca, cultivos lácticos, enzimas coagulantes, sal.",
    storage: "Refrigerar de 2° a 4°C.",
    nutrition: {
      calories: "295 kcal por 100g",
      protein: "24g",
      fat: "21g",
      sodium: "460mg"
    },
    wholesaleTiers: [
      { minQty: 1, price: 19990, label: "1 a 3 barras" },
      { minQty: 4, price: 18490, label: "4 a 11 barras (Caja)" },
      { minQty: 12, price: 16990, label: "12+ barras (-15%)" }
    ],
    isFeatured: true,
    isBestSeller: true,
    isOffer: true,
    tags: ["mozzarella", "queso pizza", "horno", "gratinado", "mayorista"]
  },
  {
    id: "prod-3",
    slug: "queso-mozzarella-rallado-pizza-2-5kg",
    name: "Queso Mozzarella Rallado Hebra Fina 2.5 kg IQF",
    brand: "Pizzeria Pro",
    sku: "Q-MOZZ-RALL-25",
    category: "quesos",
    categoryName: "Quesos",
    subCategory: "Rallado",
    price: 17490,
    originalPrice: 20990,
    discountPercent: 17,
    stock: 90,
    stockStatus: "in_stock",
    unit: "Bolsa 2.5 kg",
    weight: "2.5 kg",
    origin: "Chile",
    rating: 4.8,
    reviewCount: 76,
    image: "/assets/products/named/queso-mozzarella-rallado-pizza-2-5kg.jpeg",
    galleryImages: [
      "/assets/products/named/queso-mozzarella-rallado-pizza-2-5kg.jpeg",
      "/assets/catalog/pizzerias/page_5.png"
    ],
    shortDescription: "Ahorra tiempo y mermas en tu cocina. Mozzarella rallada en hebras sueltas, lista para colocar en la pizza sin apelmazar.",
    description: "Producto con tecnología IQF antiaglomerante libre de féculas excesivas. Facilita el porcionado rápido en turnos de alta demanda.",
    storage: "Mantener a -18°C congelado o 4°C descongelado para uso inmediato.",
    wholesaleTiers: [
      { minQty: 1, price: 17490, label: "1 a 3 bolsas" },
      { minQty: 4, price: 15990, label: "4 a 9 bolsas" },
      { minQty: 10, price: 14490, label: "10+ bolsas (-17%)" }
    ],
    isFeatured: true,
    isBestSeller: false,
    tags: ["queso rallado", "mozzarella pizza", "ahorro tiempo", "pizzeria"]
  },
  {
    id: "prod-4",
    slug: "lomo-vetado-vacuno-premium",
    name: "Lomo Vetado Vacuno Premium Importado (Venta por Kilo)",
    brand: "Frigorífico Valle Lindo",
    sku: "C-LOM-VET-KG",
    category: "carnes",
    categoryName: "Carnes",
    subCategory: "Vacuno",
    price: 11990,
    originalPrice: 13990,
    discountPercent: 14,
    stock: 220,
    stockStatus: "in_stock",
    unit: "Pieza al vacío ~ 2.5 kg - 3.5 kg",
    weight: "1 kg (Pesaje exacto al despachar)",
    origin: "Paraguay / Brasil Calidad Premium",
    rating: 5.0,
    reviewCount: 162,
    image: "/assets/products/named/lomo-vetado-vacuno-premium.jpeg",
    galleryImages: [
      "/assets/products/named/lomo-vetado-vacuno-premium.jpeg",
      "/assets/catalog/general/page_2.png",
      "/assets/catalog/general/page_3.png"
    ],
    shortDescription: "Corte noble con infiltración de grasa perfecta que otorga terneza, jugosidad y sabor superior. Ideal para restaurantes y parrilladas.",
    description: "Lomo vetado madurado, seleccionado de animales criados bajo pastoreo natural. Envasado al vacío en origen para garantizar máxima vida útil y frescura organoléptica.",
    ingredients: "Carne bovina 100% natural, sin inyecciones de salmuera.",
    storage: "Refrigerado 0°C a 2°C o congelar a -18°C.",
    nutrition: {
      calories: "245 kcal por 100g",
      protein: "21g",
      fat: "18g",
      sodium: "65mg"
    },
    wholesaleTiers: [
      { minQty: 1, price: 11990, label: "Precio por kilo (Pieza)" },
      { minQty: 15, price: 10990, label: "Caja cerrada (+15 kg)" },
      { minQty: 50, price: 9990, label: "Volumen Restaurante (+50 kg)" }
    ],
    isFeatured: true,
    isBestSeller: true,
    isOffer: true,
    tags: ["carne vacuno", "lomo vetado", "parrilla", "restaurante", "mayorista"]
  },
  {
    id: "prod-5",
    slug: "lomo-liso-vacuno-seleccionado",
    name: "Lomo Liso Vacuno Selección Gastronómica",
    brand: "Frigorífico Valle Lindo",
    sku: "C-LOM-LIS-KG",
    category: "carnes",
    categoryName: "Carnes",
    subCategory: "Vacuno",
    price: 10490,
    originalPrice: 12200,
    discountPercent: 14,
    stock: 180,
    stockStatus: "in_stock",
    unit: "Pieza al vacío ~ 3 kg",
    weight: "1 kg",
    origin: "Uruguay / Chile",
    rating: 4.8,
    reviewCount: 88,
    image: "/assets/products/named/lomo-liso-vacuno-seleccionado.jpeg",
    galleryImages: [
      "/assets/products/named/lomo-liso-vacuno-seleccionado.jpeg",
      "/assets/catalog/general/page_4.png"
    ],
    shortDescription: "Corte magro y parejo con tapa de grasa blanca protectora. Excelente rendimiento en porciones gastronómicas para churrascos y bifes.",
    description: "Carne tierna y con excelente estandarización de corte para controlar el costo por plato en casinos y restaurantes.",
    storage: "0°C a 2°C.",
    wholesaleTiers: [
      { minQty: 1, price: 10490, label: "Precio x kg" },
      { minQty: 20, price: 9690, label: "Caja (+20 kg)" },
      { minQty: 60, price: 8990, label: "Mayorista (+60 kg)" }
    ],
    isFeatured: false,
    isBestSeller: true,
    tags: ["lomo liso", "vacuno", "churrasco", "restaurante"]
  },
  {
    id: "prod-6",
    slug: "costillar-cerdo-super-cerdo",
    name: "Costillar de Cerdo Carnicero Extra Carne",
    brand: "Super Cerdo / Valle Lindo",
    sku: "C-COST-CRD",
    category: "carnes",
    categoryName: "Carnes",
    subCategory: "Cerdo",
    price: 6990,
    originalPrice: 8490,
    discountPercent: 18,
    stock: 95,
    stockStatus: "in_stock",
    unit: "Pieza ~ 1.8 kg a 2.5 kg",
    weight: "1 kg",
    origin: "Chile",
    rating: 4.9,
    reviewCount: 71,
    image: "/assets/products/named/costillar-cerdo-super-cerdo.jpeg",
    galleryImages: [
      "/assets/products/named/costillar-cerdo-super-cerdo.jpeg"
    ],
    shortDescription: "Costillas de cerdo anchas con abundante cobertura de carne magra. Ideal para asados y platos al horno.",
    description: "Seleccionado con hueso parejo para un asado homogéneo y presentación estética en mesa.",
    storage: "-18°C o refrigerado 4°C.",
    wholesaleTiers: [
      { minQty: 1, price: 6990, label: "Por kilo" },
      { minQty: 10, price: 6290, label: "Caja 10 kg" },
      { minQty: 30, price: 5790, label: "Mayorista 30+ kg" }
    ],
    isFeatured: true,
    tags: ["cerdo", "costillar", "carnicero", "parrilla"]
  },
  {
    id: "prod-7",
    slug: "pechuga-pollo-deshuesada-iqf",
    name: "Pechuga de Pollo Deshuesada Fileteada IQF Caja 15 kg",
    brand: "Agrosuper / Valle Lindo",
    sku: "C-PECH-POL-15K",
    category: "carnes",
    categoryName: "Carnes",
    subCategory: "Pollo",
    price: 54900,
    originalPrice: 62500,
    discountPercent: 12,
    stock: 120,
    stockStatus: "in_stock",
    unit: "Caja 15 kg (3 bolsas de 5 kg)",
    weight: "15 kg",
    origin: "Chile",
    rating: 4.9,
    reviewCount: 110,
    image: "/assets/products/named/pechuga-pollo-deshuesada-iqf.jpeg",
    galleryImages: [
      "/assets/products/named/pechuga-pollo-deshuesada-iqf.jpeg"
    ],
    shortDescription: "Pechuga 100% limpia sin piel ni hueso, congelada individualmente IQF. Saca sólo las que necesitas sin descongelar el bloque completo.",
    description: "Cero merma. Perfecta para locales de sushi, pizzerías (pollo bbq), sándwiches y empanadas.",
    storage: "Mantener congelado a -18°C.",
    wholesaleTiers: [
      { minQty: 1, price: 54900, label: "1 a 2 cajas" },
      { minQty: 3, price: 51900, label: "3 a 9 cajas" },
      { minQty: 10, price: 47900, label: "10+ cajas (-13%)" }
    ],
    isFeatured: true,
    isBestSeller: true,
    tags: ["pollo", "pechuga deshuesada", "iqf", "cero merma", "mayorista"]
  },
  {
    id: "prod-8",
    slug: "pepperoni-laminado-pizza-1kg",
    name: "Pepperoni Laminado Curado Especial Horno 1 kg",
    brand: "Gourmet Pizza / Valle Lindo",
    sku: "P-PEPP-1K",
    category: "pizza",
    categoryName: "Insumos para Pizza",
    subCategory: "Pepperoni",
    price: 8990,
    originalPrice: 10990,
    discountPercent: 18,
    stock: 310,
    stockStatus: "in_stock",
    unit: "Paquete al vacío 1 kg (~ 120 lonchas)",
    weight: "1 kg",
    origin: "Chile",
    rating: 4.9,
    reviewCount: 145,
    image: "/assets/products/named/pepperoni-laminado-pizza-1kg.jpeg",
    galleryImages: [
      "/assets/products/named/pepperoni-laminado-pizza-1kg.jpeg",
      "/assets/catalog/pizzerias/page_6.png"
    ],
    shortDescription: "Láminas uniformes con el clásico 'cupping' (borde ondeado crocante) al hornearse. Sabor especiado auténtico con pimentón ahumado.",
    description: "No se quema en altas temperaturas de hornos napolitanos. Rendimiento estandarizado de 12 a 15 pizzas medianas por paquete.",
    storage: "Refrigerar entre 2°C y 5°C.",
    wholesaleTiers: [
      { minQty: 1, price: 8990, label: "1 a 4 paquetes" },
      { minQty: 5, price: 7990, label: "5 a 19 paquetes" },
      { minQty: 20, price: 7190, label: "Caja 20 kg (-20%)" }
    ],
    isFeatured: true,
    isBestSeller: true,
    isOffer: true,
    tags: ["pepperoni", "topping pizza", "horno leña", "insumos gastronomicos"]
  },
  {
    id: "prod-9",
    slug: "salsa-tomate-pizza-sauce-3kg",
    name: "Salsa de Tomate Pizza Sauce Italiana Pouch 3 kg",
    brand: "Pomi / Valle Lindo Special",
    sku: "P-SALS-3K",
    category: "pizza",
    categoryName: "Insumos para Pizza",
    subCategory: "Salsas de Tomate",
    price: 6490,
    originalPrice: 7990,
    discountPercent: 19,
    stock: 260,
    stockStatus: "in_stock",
    unit: "Pouch institucional 3 kg",
    weight: "3 kg",
    origin: "Italia / Chile",
    rating: 4.8,
    reviewCount: 89,
    image: "/assets/products/named/salsa-tomate-pizza-sauce-3kg.jpeg",
    galleryImages: [
      "/assets/products/named/salsa-tomate-pizza-sauce-3kg.jpeg",
      "/assets/catalog/pizzerias/page_7.png"
    ],
    shortDescription: "Tomates maduros triturados con orégano y albahaca fresca. Espesor justo para esparcir sin humedecer la masa.",
    description: "Fórmula profesional sin exceso de agua ni acidez agresiva. Ahorra horas de cocción y preparación en la pizzería.",
    storage: "Lugar fresco y seco. Refrigerar una vez abierto.",
    wholesaleTiers: [
      { minQty: 1, price: 6490, label: "1 a 3 unidades" },
      { minQty: 4, price: 5790, label: "Caja de 4 pouches" },
      { minQty: 12, price: 5190, label: "3+ cajas (-20%)" }
    ],
    isFeatured: true,
    isBestSeller: false,
    isOffer: true,
    tags: ["salsa pizza", "tomate italiano", "pouch institucional", "base pizza"]
  },
  {
    id: "prod-10",
    slug: "jamon-sandwich-barra-3kg",
    name: "Jamón Sandwich y Cocido en Barra 3 kg",
    brand: "San Jorge / Valle Lindo",
    sku: "P-JAM-SND-3K",
    category: "pizza",
    categoryName: "Insumos para Pizza",
    subCategory: "Jamón Cocido",
    price: 11490,
    originalPrice: 13200,
    discountPercent: 13,
    stock: 115,
    stockStatus: "in_stock",
    unit: "Barra 3 kg al vacío",
    weight: "3 kg",
    origin: "Chile",
    rating: 4.7,
    reviewCount: 65,
    image: "/assets/products/named/jamon-sandwich-barra-3kg.jpeg",
    galleryImages: [
      "/assets/products/named/jamon-sandwich-barra-3kg.jpeg"
    ],
    shortDescription: "Fácil de fiambrar y laminar. Excelente porcentaje de humedad para pizza de jamón y champiñón o sándwiches calientes.",
    description: "Corte rectangular perfecto para cortadoras de fiambre sin desperdicio de esquinas.",
    storage: "Refrigerar 2° a 4°C.",
    wholesaleTiers: [
      { minQty: 1, price: 11490, label: "1 a 2 barras" },
      { minQty: 3, price: 10490, label: "3 a 7 barras" },
      { minQty: 8, price: 9590, label: "Caja (+8 barras)" }
    ],
    isFeatured: false,
    tags: ["jamon", "sandwich", "pizza jamon", "fiambreria"]
  },
  {
    id: "prod-11",
    slug: "oregano-seleccionado-bolsa-1kg",
    name: "Orégano Entero Seleccionado Especias Valle Lindo 1 kg",
    brand: "Valle Lindo Especias",
    sku: "P-OREG-1K",
    category: "pizza",
    categoryName: "Insumos para Pizza",
    subCategory: "Orégano y Especias",
    price: 5990,
    originalPrice: 7500,
    discountPercent: 20,
    stock: 350,
    stockStatus: "in_stock",
    unit: "Bolsa sellada 1 kg",
    weight: "1 kg",
    origin: "Chile - Arica",
    rating: 5.0,
    reviewCount: 112,
    image: "/assets/products/named/oregano-seleccionado-bolsa-1kg.jpeg",
    galleryImages: [
      "/assets/products/named/oregano-seleccionado-bolsa-1kg.jpeg"
    ],
    shortDescription: "Hojas secas limpias y de aroma intenso. Máxima concentración de aceites esenciales sin tallos ni polvo.",
    description: "Indispensable para el toque final de pizzas, salsas rojas, carnes y empanadas.",
    storage: "Almacenar en lugar seco y oscuro.",
    wholesaleTiers: [
      { minQty: 1, price: 5990, label: "1 bolsa" },
      { minQty: 5, price: 4990, label: "5 bolsas" },
      { minQty: 20, price: 4290, label: "Saco 20 kg (-28%)" }
    ],
    isFeatured: false,
    tags: ["oregano", "especias", "aroma", "pizzerias"]
  },
  {
    id: "prod-12",
    slug: "papas-fritas-prefritas-2-5kg",
    name: "Papas Fritas Prefritas Corte Tradicional 9x9 mm Bolsa 2.5 kg",
    brand: "Lutosa / Lamb Weston",
    sku: "CG-PAP-25",
    category: "congelados",
    categoryName: "Productos Congelados",
    subCategory: "Papas Fritas",
    price: 4990,
    originalPrice: 6200,
    discountPercent: 20,
    stock: 400,
    stockStatus: "in_stock",
    unit: "Bolsa 2.5 kg (Caja contiene 4 bolsas = 10 kg)",
    weight: "2.5 kg",
    origin: "Bélgica / Holanda",
    rating: 4.9,
    reviewCount: 205,
    image: "/assets/products/named/papas-fritas-prefritas-2-5kg.jpeg",
    galleryImages: [
      "/assets/products/named/papas-fritas-prefritas-2-5kg.jpeg",
      "/assets/catalog/general/page_6.png"
    ],
    shortDescription: "Papas ultra crocantes por fuera y suaves por dentro. Bajo consumo de aceite al freír y excelente tiempo de retención de calor.",
    description: "El estándar preferido por food trucks, hamburgueserías y locales de comida rápida en Chile.",
    storage: "Mantener a -18°C.",
    wholesaleTiers: [
      { minQty: 1, price: 4990, label: "1 a 3 bolsas" },
      { minQty: 4, price: 4390, label: "Caja de 4 bolsas (10 kg)" },
      { minQty: 20, price: 3890, label: "5+ cajas (50 kg -22%)" }
    ],
    isFeatured: true,
    isBestSeller: true,
    isOffer: true,
    tags: ["papas fritas", "congelados", "food truck", "snack", "crocante"]
  },
  {
    id: "prod-13",
    slug: "nuggets-pollo-crujientes-1kg",
    name: "Nuggets de Pollo Rebozado Crujiente Bolsa 1 kg",
    brand: "Super Pollo / Valle Lindo",
    sku: "CG-NUG-1K",
    category: "congelados",
    categoryName: "Productos Congelados",
    subCategory: "Nuggets",
    price: 4690,
    originalPrice: 5800,
    discountPercent: 19,
    stock: 210,
    stockStatus: "in_stock",
    unit: "Bolsa 1 kg (~ 45 a 50 unidades)",
    weight: "1 kg",
    origin: "Chile",
    rating: 4.8,
    reviewCount: 68,
    image: "/assets/products/named/nuggets-pollo-crujientes-1kg.jpeg",
    galleryImages: [
      "/assets/products/named/nuggets-pollo-crujientes-1kg.jpeg"
    ],
    shortDescription: "Elaborados con carne de pechuga de pollo y rebozado dorado crocante. Cocción en freidora en solo 3 minutos.",
    description: "Ideal para menús infantiles, promociones combinadas y platos de picoteo.",
    storage: "Congelado a -18°C.",
    wholesaleTiers: [
      { minQty: 1, price: 4690, label: "1 a 4 bolsas" },
      { minQty: 5, price: 4190, label: "5 a 14 bolsas" },
      { minQty: 15, price: 3690, label: "Caja 15 kg (-21%)" }
    ],
    isFeatured: false,
    tags: ["nuggets", "pollo", "frituras", "menu ninos"]
  },
  {
    id: "prod-14",
    slug: "empanadas-queso-coctel-congeladas",
    name: "Empanadas de Queso Tamaño Cóctel (Bolsa 50 unidades)",
    brand: "Tradición Valle Lindo",
    sku: "CG-EMP-50U",
    category: "congelados",
    categoryName: "Productos Congelados",
    subCategory: "Empanadas",
    price: 10990,
    originalPrice: 13500,
    discountPercent: 19,
    stock: 130,
    stockStatus: "in_stock",
    unit: "Bolsa 50 unidades prearmadas",
    weight: "1.5 kg",
    origin: "Chile",
    rating: 4.9,
    reviewCount: 52,
    image: "/assets/products/named/empanadas-queso-coctel-congeladas.jpeg",
    galleryImages: [
      "/assets/products/named/empanadas-queso-coctel-congeladas.jpeg"
    ],
    shortDescription: "Masa hojaldrada que no revienta en el aceite caliente. Relleno cremoso de queso fundente de primera calidad.",
    description: "Solución express para eventos de banquetería, catering, bares y restaurantes.",
    storage: "-18°C.",
    wholesaleTiers: [
      { minQty: 1, price: 10990, label: "1 a 2 bolsas" },
      { minQty: 3, price: 9990, label: "3 a 9 bolsas" },
      { minQty: 10, price: 8990, label: "10+ bolsas (500 uds)" }
    ],
    isFeatured: false,
    tags: ["empanadas", "coctel", "queso", "catering", "eventos"]
  },
  {
    id: "prod-15",
    slug: "salchicha-vienesa-tradicional-1kg",
    name: "Salchichas Vienesas Tradicionales Sureñas Paquete 1 kg",
    brand: "Llanquihue / Valle Lindo",
    sku: "E-VIEN-1K",
    category: "embutidos",
    categoryName: "Embutidos",
    subCategory: "Vienesas",
    price: 3990,
    originalPrice: 4890,
    discountPercent: 18,
    stock: 280,
    stockStatus: "in_stock",
    unit: "Paquete al vacío 1 kg (20 vienesas)",
    weight: "1 kg",
    origin: "Chile",
    rating: 4.8,
    reviewCount: 92,
    image: "/assets/products/named/salchicha-vienesa-tradicional-1kg.jpeg",
    galleryImages: [
      "/assets/products/named/salchicha-vienesa-tradicional-1kg.jpeg"
    ],
    shortDescription: "Vienesas de receta sureña con piel crujiente. Calidad insuperable para completos italianos y carritos de comida rápida.",
    description: "Sabor ahumado suave que respeta las normas sanitarias y entrega la mejor rentabilidad a las fuentes de soda.",
    storage: "Refrigerar de 0° a 5°C.",
    wholesaleTiers: [
      { minQty: 1, price: 3990, label: "1 a 4 paquetes" },
      { minQty: 5, price: 3490, label: "5 a 19 paquetes" },
      { minQty: 20, price: 3090, label: "Caja 20 kg (-22%)" }
    ],
    isFeatured: true,
    isBestSeller: true,
    tags: ["vienesa", "completos", "fuente de soda", "embutidos"]
  },
  {
    id: "prod-16",
    slug: "longaniza-artesanal-parrillera-1kg",
    name: "Longaniza Artesanal Estilo Chillán 1 kg",
    brand: "Cecinas Chillán / Valle Lindo",
    sku: "E-LONG-1K",
    category: "embutidos",
    categoryName: "Embutidos",
    subCategory: "Longanizas",
    price: 6490,
    originalPrice: 7890,
    discountPercent: 17,
    stock: 160,
    stockStatus: "in_stock",
    unit: "Tira 1 kg",
    weight: "1 kg",
    origin: "Chile - Chillán",
    rating: 5.0,
    reviewCount: 138,
    image: "/assets/products/named/longaniza-artesanal-parrillera-1kg.jpeg",
    galleryImages: [
      "/assets/products/named/longaniza-artesanal-parrillera-1kg.jpeg"
    ],
    shortDescription: "Carne de cerdo 100% magra aliñada con comino, ajo chilote y orégano. Tripa natural y ahumado tradicional en maderas nativas.",
    description: "El sabor auténtico de la tradición campesina chilena para parrillas, choripanes y guisos.",
    storage: "0° a 4°C.",
    wholesaleTiers: [
      { minQty: 1, price: 6490, label: "1 a 4 kg" },
      { minQty: 5, price: 5890, label: "5 a 14 kg" },
      { minQty: 15, price: 5290, label: "Caja 15 kg (-18%)" }
    ],
    isFeatured: true,
    isBestSeller: true,
    tags: ["longaniza", "chillan", "choripan", "parrilla"]
  },
  {
    id: "prod-17",
    slug: "queso-gouda-bloque-cal-5kg",
    name: "Queso Gouda Bloque Gastronómico 5 kg",
    brand: "Calo / Soprole Food Professionals",
    sku: "Q-GOUD-5K",
    category: "quesos",
    categoryName: "Quesos",
    subCategory: "Gouda",
    price: 31990,
    originalPrice: 36990,
    discountPercent: 13,
    stock: 80,
    stockStatus: "in_stock",
    unit: "Bloque 5 kg",
    weight: "5 kg",
    origin: "Chile",
    rating: 4.8,
    reviewCount: 64,
    image: "/assets/products/named/queso-gouda-bloque-cal-5kg.jpeg",
    galleryImages: [
      "/assets/products/named/queso-gouda-bloque-cal-5kg.jpeg"
    ],
    shortDescription: "Queso de pasta semidura, textura suave y maduración controlada. Ideal para fundir en sándwiches calientes, quesadillas y hamburguesas.",
    description: "Excelente corte tanto en máquina laminadora como en cubos para picoteo.",
    storage: "Refrigerar de 2° a 6°C.",
    wholesaleTiers: [
      { minQty: 1, price: 31990, label: "1 a 2 bloques" },
      { minQty: 3, price: 29990, label: "3 a 5 bloques" },
      { minQty: 6, price: 27990, label: "6+ bloques (-12%)" }
    ],
    isFeatured: false,
    tags: ["gouda", "sandwich", "hamburgueseria", "quesos"]
  },
  {
    id: "prod-18",
    slug: "queso-mantecoso-valdivia-bloque",
    name: "Queso Mantecoso Tradicional del Sur Pieza 4 kg",
    brand: "Lácteos del Sur / Valle Lindo",
    sku: "Q-MANT-4K",
    category: "quesos",
    categoryName: "Quesos",
    subCategory: "Mantecoso",
    price: 27990,
    originalPrice: 32500,
    discountPercent: 14,
    stock: 75,
    stockStatus: "in_stock",
    unit: "Pieza 4 kg",
    weight: "4 kg",
    origin: "Chile - Valdivia",
    rating: 4.9,
    reviewCount: 82,
    image: "/assets/products/named/queso-mantecoso-valdivia-bloque.jpeg",
    galleryImages: [
      "/assets/products/named/queso-mantecoso-valdivia-bloque.jpeg"
    ],
    shortDescription: "Cremosidad absoluta y sabor láctico profundo. El clásico queso mantecoso chileno para empanadas fritas y tablas gourmet.",
    description: "Funde a menor temperatura aportando una suavidad mantecosa inconfundible.",
    storage: "2° a 6°C.",
    wholesaleTiers: [
      { minQty: 1, price: 27990, label: "1 a 2 piezas" },
      { minQty: 3, price: 25990, label: "3 a 5 piezas" },
      { minQty: 6, price: 23990, label: "6+ piezas (-14%)" }
    ],
    isFeatured: false,
    tags: ["mantecoso", "sur de chile", "empanadas", "cremoso"]
  }
];

export const WHOLESALE_BENEFITS = [
  {
    icon: "Truck",
    title: "Envíos a Todo Chile",
    description: "Despacho express en Santiago y envíos refrigerados a regiones con seguimiento."
  },
  {
    icon: "Building2",
    title: "Compra Mayorista y Minorista",
    description: "Precios escalonados por volumen desde 1 unidad hasta pallets completos."
  },
  {
    icon: "RefreshCw",
    title: "Stock en Tiempo Real",
    description: "Inventario garantizado con fechas de caducidad óptimas para tu negocio."
  },
  {
    icon: "FileCheck",
    title: "Factura y Boleta Electrónica",
    description: "Emisión inmediata con RUT para deducir IVA empresarial de forma automática."
  },
  {
    icon: "MessageCircle",
    title: "Atención Ejecutiva WhatsApp",
    description: "Ejecutivo B2B asignado para cotizaciones personalizadas y pedidos recurrentes."
  },
  {
    icon: "Zap",
    title: "Despacho Rápido en 24/48 hrs",
    description: "Rutas diarias refrigeradas para que tu cocina nunca se quede sin insumos."
  }
];

export const CLIENT_SEGMENTS = [
  {
    title: "Pizzerías y Trattorías",
    description: "Mozzarella fundente, salsa italiana, pepperoni, harinas 00 y cajas de entrega.",
    badge: "Especialidad Valle Lindo",
    discount: "Hasta 25% OFF por volumen"
  },
  {
    title: "Restaurantes y Parrilladas",
    description: "Cortes de vacuno seleccionados, lomo vetado, costillares y guarniciones.",
    badge: "Carnes Premium",
    discount: "Precios especiales por caja"
  },
  {
    title: "Casinos e Instituciones",
    description: "Insumos por kilo y cajas cerradas con factura inmediata y crédito 30 días previa evaluación.",
    badge: "B2B Corporativo",
    discount: "Cotización a medida"
  },
  {
    title: "Food Trucks y Fuentes de Soda",
    description: "Papas prefritas congeladas, vienesas, quesos en barra y salsas institucionales.",
    badge: "Comida Rápida",
    discount: "Stock permanente"
  }
];
