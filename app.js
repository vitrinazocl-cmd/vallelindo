// ========================================================
// COMERCIALIZADORA VALLE LINDO - CORE ENGINE & DATA
// ========================================================

const PRODUCTS_DATA = [
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
    image: "assets/products/named/queso-llanero-artesanal-bloque.jpeg",
    video: "assets/videos/oferta-queso-llanero.mp4",
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
    image: "assets/products/named/queso-palmita-rio-grande-10kg.jpeg",
    gallery: [
      "assets/products/named/queso-palmita-rio-grande-10kg.jpeg",
      "extracted_catalog/pizzerias/page_2.png",
      "extracted_catalog/pizzerias/page_3.png"
    ],
    shortDescription: "El auténtico queso Palmita Río Grande, ideal para locales gastronómicos, tequeñerías, cachaperas y pizzerías. Punto de sal equilibrado y textura inigualable.",
    description: "Queso Palmita Río Grande seleccionado bajo los más estrictos estándares de calidad higiénica y alimentaria. Su textura compacta con pequeños agujeros (ojos) y su toque tradicional de sal lo convierten en el insumo preferido por restaurantes y negocios de comida rápida en todo Chile.",
    ingredients: "Leche pasteurizada entera, fermentos lácticos seleccionados, cuajo natural, cloruro de sodio.",
    storage: "Mantener refrigerado entre 2°C y 6°C. Consumir dentro de los 30 días posteriores a la apertura.",
    nutrition: { calories: "320 kcal/100g", protein: "22g", fat: "25g", sodium: "580mg" },
    wholesaleTiers: [
      { minQty: 1, price: 54990, label: "1 a 2 unidades" },
      { minQty: 3, price: 52990, label: "3 a 9 unidades (-4%)" },
      { minQty: 10, price: 49990, label: "10+ unidades (-9%)" }
    ],
    isFeatured: true,
    isBestSeller: true,
    isOffer: true,
    tags: ["queso palmita", "rio grande", "pizzerias", "mayorista", "oferta"]
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
    image: "assets/products/named/queso-mozzarella-barra-colun-3kg.jpeg",
    gallery: [
      "assets/products/named/queso-mozzarella-barra-colun-3kg.jpeg",
      "extracted_catalog/pizzerias/page_4.png"
    ],
    shortDescription: "Mozzarella de alto rendimiento para hornos a leña, gas o eléctricos. Fundido elástico parejo, dorado crocante y cero desprendimiento de grasa.",
    description: "Diseñado especialmente para maestros pizzeros. Posee la humedad exacta para no humedecer la masa de pizza, logrando una hebra larga y un gratinado brillante uniforme.",
    ingredients: "Leche pasteurizada de vaca, cultivos lácticos, enzimas coagulantes, sal.",
    storage: "Refrigerar de 2° a 4°C.",
    nutrition: { calories: "295 kcal/100g", protein: "24g", fat: "21g", sodium: "460mg" },
    wholesaleTiers: [
      { minQty: 1, price: 19990, label: "1 a 3 barras" },
      { minQty: 4, price: 18490, label: "4 a 11 barras (Caja)" },
      { minQty: 12, price: 16990, label: "12+ barras (-15%)" }
    ],
    isFeatured: true,
    isBestSeller: true,
    isOffer: true,
    tags: ["mozzarella", "queso pizza", "horno", "gratinado"]
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
    image: "assets/products/named/queso-mozzarella-rallado-pizza-2-5kg.jpeg",
    gallery: ["assets/products/named/queso-mozzarella-rallado-pizza-2-5kg.jpeg"],
    shortDescription: "Ahorra tiempo y mermas en tu cocina. Mozzarella rallada en hebras sueltas, lista para colocar en la pizza sin apelmazar.",
    description: "Producto con tecnología IQF antiaglomerante libre de féculas excesivas. Facilita el porcionado rápido en turnos de alta demanda.",
    storage: "Mantener a -18°C congelado o 4°C descongelado.",
    wholesaleTiers: [
      { minQty: 1, price: 17490, label: "1 a 3 bolsas" },
      { minQty: 4, price: 15990, label: "4 a 9 bolsas" },
      { minQty: 10, price: 14490, label: "10+ bolsas (-17%)" }
    ],
    isFeatured: true,
    isBestSeller: false,
    tags: ["queso rallado", "mozzarella pizza", "ahorro tiempo"]
  },
  {
    id: "prod-4",
    slug: "lomo-vetado-vacuno-premium",
    name: "Lomo Vetado Vacuno Premium Importado (Por Kilo)",
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
    weight: "1 kg",
    origin: "Paraguay / Brasil Calidad Premium",
    rating: 5.0,
    reviewCount: 162,
    image: "assets/products/named/lomo-vetado-vacuno-premium.jpeg",
    gallery: ["assets/products/named/lomo-vetado-vacuno-premium.jpeg"],
    shortDescription: "Corte noble con infiltración de grasa perfecta que otorga terneza, jugosidad y sabor superior. Ideal para restaurantes y parrilladas.",
    description: "Lomo vetado madurado, seleccionado de animales criados bajo pastoreo natural. Envasado al vacío en origen para garantizar máxima vida útil y frescura.",
    ingredients: "Carne bovina 100% natural sin inyecciones.",
    storage: "Refrigerado 0°C a 2°C o congelar a -18°C.",
    wholesaleTiers: [
      { minQty: 1, price: 11990, label: "Precio por kilo (Pieza)" },
      { minQty: 15, price: 10990, label: "Caja cerrada (+15 kg)" },
      { minQty: 50, price: 9990, label: "Volumen Restaurante (+50 kg)" }
    ],
    isFeatured: true,
    isBestSeller: true,
    isOffer: true,
    tags: ["carne vacuno", "lomo vetado", "parrilla", "restaurante"]
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
    image: "assets/products/named/lomo-liso-vacuno-seleccionado.jpeg",
    gallery: ["assets/products/named/lomo-liso-vacuno-seleccionado.jpeg"],
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
    tags: ["lomo liso", "vacuno", "churrasco"]
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
    image: "assets/products/named/costillar-cerdo-super-cerdo.jpeg",
    gallery: ["assets/products/named/costillar-cerdo-super-cerdo.jpeg"],
    shortDescription: "Costillas de cerdo anchas con abundante cobertura de carne magra. Ideal para asados y platos al horno.",
    description: "Seleccionado con hueso parejo para un asado homogéneo y presentación estética en mesa.",
    storage: "-18°C o refrigerado 4°C.",
    wholesaleTiers: [
      { minQty: 1, price: 6990, label: "Por kilo" },
      { minQty: 10, price: 6290, label: "Caja 10 kg" },
      { minQty: 30, price: 5790, label: "Mayorista 30+ kg" }
    ],
    isFeatured: true,
    tags: ["cerdo", "costillar", "parrilla"]
  },
  {
    id: "prod-7",
    slug: "pechuga-pollo-deshuesada-iqf",
    name: "Pechuga de Pollo Deshuesada IQF Caja 15 kg",
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
    image: "assets/products/named/pechuga-pollo-deshuesada-iqf.jpeg",
    gallery: ["assets/products/named/pechuga-pollo-deshuesada-iqf.jpeg"],
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
    tags: ["pollo", "pechuga", "iqf", "cero merma"]
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
    image: "assets/products/named/pepperoni-laminado-pizza-1kg.jpeg",
    gallery: ["assets/products/named/pepperoni-laminado-pizza-1kg.jpeg"],
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
    tags: ["pepperoni", "topping pizza", "horno"]
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
    image: "assets/products/named/salsa-tomate-pizza-sauce-3kg.jpeg",
    gallery: ["assets/products/named/salsa-tomate-pizza-sauce-3kg.jpeg"],
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
    tags: ["salsa pizza", "tomate italiano", "pouch"]
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
    image: "assets/products/named/jamon-sandwich-barra-3kg.jpeg",
    gallery: ["assets/products/named/jamon-sandwich-barra-3kg.jpeg"],
    shortDescription: "Fácil de fiambrar y laminar. Excelente porcentaje de humedad para pizza de jamón y champiñón o sándwiches calientes.",
    description: "Corte rectangular perfecto para cortadoras de fiambre sin desperdicio de esquinas.",
    storage: "Refrigerar 2° a 4°C.",
    wholesaleTiers: [
      { minQty: 1, price: 11490, label: "1 a 2 barras" },
      { minQty: 3, price: 10490, label: "3 a 7 barras" },
      { minQty: 8, price: 9590, label: "Caja (+8 barras)" }
    ],
    isFeatured: false,
    tags: ["jamon", "sandwich", "fiambreria"]
  },
  {
    id: "prod-11",
    slug: "oregano-seleccionado-bolsa-1kg",
    name: "Orégano Entero Seleccionado Valle Lindo 1 kg",
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
    image: "assets/products/named/oregano-seleccionado-bolsa-1kg.jpeg",
    gallery: ["assets/products/named/oregano-seleccionado-bolsa-1kg.jpeg"],
    shortDescription: "Hojas secas limpias y de aroma intenso. Máxima concentración de aceites esenciales sin tallos ni polvo.",
    description: "Indispensable para el toque final de pizzas, salsas rojas, carnes y empanadas.",
    storage: "Almacenar en lugar seco.",
    wholesaleTiers: [
      { minQty: 1, price: 5990, label: "1 bolsa" },
      { minQty: 5, price: 4990, label: "5 bolsas" },
      { minQty: 20, price: 4290, label: "Saco 20 kg (-28%)" }
    ],
    isFeatured: false,
    tags: ["oregano", "especias", "aroma"]
  },
  {
    id: "prod-12",
    slug: "papas-fritas-prefritas-2-5kg",
    name: "Papas Fritas Prefritas Corte Tradicional 9x9 mm 2.5 kg",
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
    image: "assets/products/named/papas-fritas-prefritas-2-5kg.jpeg",
    gallery: ["assets/products/named/papas-fritas-prefritas-2-5kg.jpeg"],
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
    tags: ["papas fritas", "congelados", "food truck"]
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
    image: "assets/products/named/nuggets-pollo-crujientes-1kg.jpeg",
    gallery: ["assets/products/named/nuggets-pollo-crujientes-1kg.jpeg"],
    shortDescription: "Elaborados con carne de pechuga de pollo y rebozado dorado crocante. Cocción en freidora en solo 3 minutos.",
    description: "Ideal para menús infantiles, promociones combinadas y platos de picoteo.",
    storage: "Congelado a -18°C.",
    wholesaleTiers: [
      { minQty: 1, price: 4690, label: "1 a 4 bolsas" },
      { minQty: 5, price: 4190, label: "5 a 14 bolsas" },
      { minQty: 15, price: 3690, label: "Caja 15 kg (-21%)" }
    ],
    isFeatured: false,
    tags: ["nuggets", "pollo", "frituras"]
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
    image: "assets/products/named/empanadas-queso-coctel-congeladas.jpeg",
    gallery: ["assets/products/named/empanadas-queso-coctel-congeladas.jpeg"],
    shortDescription: "Masa hojaldrada que no revienta en el aceite caliente. Relleno cremoso de queso fundente de primera calidad.",
    description: "Solución express para eventos de banquetería, catering, bares y restaurantes.",
    storage: "-18°C.",
    wholesaleTiers: [
      { minQty: 1, price: 10990, label: "1 a 2 bolsas" },
      { minQty: 3, price: 9990, label: "3 a 9 bolsas" },
      { minQty: 10, price: 8990, label: "10+ bolsas (500 uds)" }
    ],
    isFeatured: false,
    tags: ["empanadas", "coctel", "catering"]
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
    image: "assets/products/named/salchicha-vienesa-tradicional-1kg.jpeg",
    gallery: ["assets/products/named/salchicha-vienesa-tradicional-1kg.jpeg"],
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
    tags: ["vienesa", "completos", "fuente de soda"]
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
    image: "assets/products/named/longaniza-artesanal-parrillera-1kg.jpeg",
    gallery: ["assets/products/named/longaniza-artesanal-parrillera-1kg.jpeg"],
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
    tags: ["longaniza", "chillan", "parrilla"]
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
    image: "assets/products/named/queso-gouda-bloque-cal-5kg.jpeg",
    gallery: ["assets/products/named/queso-gouda-bloque-cal-5kg.jpeg"],
    shortDescription: "Queso de pasta semidura, textura suave y maduración controlada. Ideal para fundir en sándwiches calientes, quesadillas y hamburguesas.",
    description: "Excelente corte tanto en máquina laminadora como en cubos para picoteo.",
    storage: "Refrigerar de 2° a 6°C.",
    wholesaleTiers: [
      { minQty: 1, price: 31990, label: "1 a 2 bloques" },
      { minQty: 3, price: 29990, label: "3 a 5 bloques" },
      { minQty: 6, price: 27990, label: "6+ bloques (-12%)" }
    ],
    isFeatured: false,
    tags: ["gouda", "sandwich", "quesos"]
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
    image: "assets/products/named/queso-mantecoso-valdivia-bloque.jpeg",
    gallery: ["assets/products/named/queso-mantecoso-valdivia-bloque.jpeg"],
    shortDescription: "Cremosidad absoluta y sabor láctico profundo. El clásico queso mantecoso chileno para empanadas fritas y tablas gourmet.",
    description: "Funde a menor temperatura aportando una suavidad mantecosa inconfundible.",
    storage: "2° a 6°C.",
    wholesaleTiers: [
      { minQty: 1, price: 27990, label: "1 a 2 piezas" },
      { minQty: 3, price: 25990, label: "3 a 5 piezas" },
      { minQty: 6, price: 23990, label: "6+ piezas (-14%)" }
    ],
    isFeatured: false,
    tags: ["mantecoso", "sur de chile", "cremoso"]
  }
];

// ========================================================
// SISTEMA DE ESTADO GLOBAL (LOCALSTORAGE SYNCHRONIZED)
// ========================================================
class CartManager {
  constructor() {
    this.cart = this.loadCart();
    this.wishlist = this.loadWishlist();
    this.coupon = localStorage.getItem("valle_coupon") || "";
    // Validación estricta con SecurityGuard para mitigar manipulación en LocalStorage
    const validated = typeof SecurityGuard !== 'undefined'
      ? SecurityGuard.validateCoupon(this.coupon)
      : (this.coupon === "BIENVENIDAB2B" ? { valid: true, discount: 0.10 } : { valid: false, discount: 0 });
    this.discountRate = validated.valid ? validated.discount : 0;
  }

  loadCart() {
    try {
      const data = localStorage.getItem("valle_lindo_cart");
      if (!data) return [];
      const parsed = JSON.parse(data);
      if (!Array.isArray(parsed)) return [];

      // Blindaje de integridad: Se re-valida contra el catálogo inmutable PRODUCTS_DATA
      return parsed.map(item => {
        if (!item || !item.product || !item.product.id) return null;
        const realProduct = PRODUCTS_DATA.find(p => p.id === item.product.id);
        if (!realProduct) return null;

        const qty = Math.max(1, Math.min(9999, parseInt(item.quantity, 10) || 1));
        const unitPrice = this.calculateUnitPrice(realProduct, qty);

        return {
          product: realProduct,
          quantity: qty,
          unitPrice: unitPrice,
          originalPrice: realProduct.originalPrice || realProduct.price
        };
      }).filter(Boolean);
    } catch (e) {
      if (typeof SecurityGuard !== 'undefined') {
        SecurityGuard.logAuditEvent('CART_INTEGRITY_ANOMALY', 'WARNING', { error: e.message });
      }
      return [];
    }
  }

  saveCart() {
    localStorage.setItem("valle_lindo_cart", JSON.stringify(this.cart));
    this.notify();
  }

  loadWishlist() {
    try {
      const data = localStorage.getItem("valle_lindo_wishlist");
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  saveWishlist() {
    localStorage.setItem("valle_lindo_wishlist", JSON.stringify(this.wishlist));
    this.notify();
  }

  calculateUnitPrice(product, qty) {
    if (!product.wholesaleTiers || product.wholesaleTiers.length === 0) return product.price;
    const sorted = [...product.wholesaleTiers].sort((a, b) => b.minQty - a.minQty);
    for (const t of sorted) {
      if (qty >= t.minQty) return t.price;
    }
    return product.price;
  }

  addItem(productId, qty = 1) {
    const product = PRODUCTS_DATA.find(p => p.id === productId || p.slug === productId);
    if (!product) return;

    const safeQty = Math.max(1, Math.min(999, parseInt(qty, 10) || 1));
    const existing = this.cart.find(i => i.product.id === product.id);
    let newQty = safeQty;
    if (existing) {
      newQty = Math.min(9999, existing.quantity + safeQty);
    }
    const unitPrice = this.calculateUnitPrice(product, newQty);

    if (existing) {
      existing.quantity = newQty;
      existing.unitPrice = unitPrice;
    } else {
      this.cart.push({
        product,
        quantity: newQty,
        unitPrice,
        originalPrice: product.originalPrice || product.price
      });
    }
    this.saveCart();
    if (typeof SecurityGuard !== 'undefined') {
      SecurityGuard.logAuditEvent('CART_ITEM_ADDED', 'INFO', { productId: product.id, qty: safeQty });
    }
    openCartDrawer();
  }

  updateQuantity(productId, qty) {
    const safeQty = parseInt(qty, 10) || 0;
    if (safeQty <= 0) return this.removeItem(productId);
    const item = this.cart.find(i => i.product.id === productId);
    if (item) {
      item.quantity = Math.min(9999, safeQty);
      item.unitPrice = this.calculateUnitPrice(item.product, item.quantity);
      this.saveCart();
    }
  }

  removeItem(productId) {
    this.cart = this.cart.filter(i => i.product.id !== productId);
    this.saveCart();
  }

  clear() {
    this.cart = [];
    this.saveCart();
  }

  toggleWishlist(productId) {
    if (this.wishlist.includes(productId)) {
      this.wishlist = this.wishlist.filter(id => id !== productId);
    } else {
      this.wishlist.push(productId);
    }
    this.saveWishlist();
  }

  isWishlisted(productId) {
    return this.wishlist.includes(productId);
  }

  applyCoupon(code) {
    if (!code || typeof code !== 'string') {
      return { success: false, message: "Ingrese un cupón válido." };
    }
    if (typeof SecurityGuard !== 'undefined') {
      const res = SecurityGuard.validateCoupon(code);
      if (res.valid) {
        this.coupon = code.trim().toUpperCase();
        this.discountRate = res.discount;
        localStorage.setItem("valle_coupon", this.coupon);
        localStorage.setItem("valle_discount", this.discountRate.toString());
        this.saveCart();
        return { success: true, message: `¡${res.label} activado!` };
      } else {
        return { success: false, message: res.label };
      }
    }
    const clean = code.trim().toUpperCase();
    if (clean === "BIENVENIDAB2B") {
      this.coupon = clean;
      this.discountRate = 0.10;
      localStorage.setItem("valle_coupon", this.coupon);
      localStorage.setItem("valle_discount", this.discountRate.toString());
      this.saveCart();
      return { success: true, message: "¡Cupón 10% B2B aplicado con éxito!" };
    }
    return { success: false, message: "Cupón inválido o expirado." };
  }

  removeCoupon() {
    this.coupon = "";
    this.discountRate = 0;
    localStorage.removeItem("valle_coupon");
    localStorage.removeItem("valle_discount");
    this.saveCart();
  }

  getTotals() {
    const count = this.cart.reduce((sum, i) => sum + i.quantity, 0);
    const rawSubtotal = this.cart.reduce((sum, i) => sum + i.unitPrice * i.quantity, 0);
    const discountAmt = Math.round(rawSubtotal * this.discountRate);
    const subtotal = Math.max(0, rawSubtotal - discountAmt);
    const originalTotal = this.cart.reduce((sum, i) => sum + (i.product.originalPrice || i.unitPrice) * i.quantity, 0);
    const savings = Math.max(0, originalTotal - subtotal);
    const shipping = subtotal >= 75000 || subtotal === 0 ? 0 : 4990;
    const total = subtotal + shipping;

    return { count, subtotal, savings, shipping, total, discountAmt, coupon: this.coupon };
  }

  notify() {
    renderCartDrawer();
    updateBadges();
  }
}

const Cart = new CartManager();

// ========================================================
// RENDERIZADO DE UI & INTERACTIVIDAD
// ========================================================
function formatCLP(val) {
  return "$" + Number(val || 0).toLocaleString("es-CL");
}

function updateBadges() {
  const { count } = Cart.getTotals();
  const badges = document.querySelectorAll(".cart-count-badge");
  badges.forEach(b => {
    b.textContent = count;
    b.style.display = count > 0 ? "flex" : "none";
  });

  const favBadges = document.querySelectorAll(".fav-count-badge");
  favBadges.forEach(b => {
    b.textContent = Cart.wishlist.length;
    b.style.display = Cart.wishlist.length > 0 ? "flex" : "none";
  });
}

function openCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  if (drawer) {
    drawer.classList.remove("hidden");
    renderCartDrawer();
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  if (drawer) {
    drawer.classList.add("hidden");
  }
}

function renderCartDrawer() {
  const container = document.getElementById("cartDrawerItems");
  const totalsContainer = document.getElementById("cartDrawerTotals");
  if (!container || !totalsContainer) return;

  const { count, subtotal, savings, shipping, total, coupon } = Cart.getTotals();

  // Envío Gratis Progress
  const freeThreshold = 75000;
  const progress = Math.min(100, Math.round((subtotal / freeThreshold) * 100));
  const missing = Math.max(0, freeThreshold - subtotal);

  const progContainer = document.getElementById("freeShippingProgress");
  if (progContainer) {
    progContainer.innerHTML = `
      <div class="flex items-center justify-between font-semibold text-emerald-900 mb-1.5 text-xs">
        <span class="flex items-center gap-1.5">
          ${missing === 0 
            ? '<strong class="text-emerald-700 font-bold">¡Felicidades! Tienes Despacho GRATIS 🚚</strong>' 
            : `Te faltan <strong class="text-emerald-700">${formatCLP(missing)}</strong> para Despacho Gratis`}
        </span>
        <span class="font-mono text-emerald-700 font-bold">${progress}%</span>
      </div>
      <div class="w-full bg-emerald-200 h-2 rounded-full overflow-hidden">
        <div class="bg-emerald-600 h-full rounded-full transition-all duration-300" style="width: ${progress}%"></div>
      </div>
    `;
  }

  if (Cart.cart.length === 0) {
    container.innerHTML = `
      <div class="h-64 flex flex-col items-center justify-center text-center p-6 text-gray-500">
        <div class="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-2">
          <i data-lucide="shopping-bag" class="w-6 h-6 text-gray-400"></i>
        </div>
        <h4 class="font-bold text-gray-900 text-sm">Tu carro está vacío</h4>
        <p class="text-xs text-gray-400 mt-1 max-w-xs">Agrega carnes, quesos para pizza y productos con precios mayoristas.</p>
        <a href="catalogo.html" onclick="closeCartDrawer()" class="mt-4 px-4 py-2 bg-[#B71C1C] text-white text-xs font-bold rounded-lg shadow">Ver Catálogo</a>
      </div>
    `;
    totalsContainer.classList.add("hidden");
    if (window.lucide) lucide.createIcons();
    return;
  }

  totalsContainer.classList.remove("hidden");

  container.innerHTML = Cart.cart.map(item => `
    <div class="flex gap-3 py-3 border-b border-gray-100 items-start">
      <img src="${item.product.image}" alt="${item.product.name}" class="w-14 h-14 object-cover rounded-lg bg-gray-50 border border-gray-200 shrink-0" />
      <div class="flex-1 min-w-0">
        <div class="flex justify-between items-start">
          <a href="producto.html?slug=${item.product.slug}" class="text-xs font-bold text-gray-900 hover:text-[#B71C1C] line-clamp-2">
            ${item.product.name}
          </a>
          <button onclick="Cart.removeItem('${item.product.id}')" class="text-gray-400 hover:text-red-600 p-1 ml-1" title="Eliminar">
            <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
          </button>
        </div>
        <div class="text-[11px] text-gray-500 mt-0.5">${item.product.unit} • SKU: ${item.product.sku}</div>
        <div class="flex items-center justify-between mt-2">
          <div class="flex items-center border border-gray-300 rounded-md overflow-hidden bg-white">
            <button onclick="Cart.updateQuantity('${item.product.id}', ${item.quantity - 1})" class="px-2 py-0.5 hover:bg-gray-100 text-gray-600 text-xs font-bold">-</button>
            <span class="px-2 text-xs font-bold text-gray-800 font-mono">${item.quantity}</span>
            <button onclick="Cart.updateQuantity('${item.product.id}', ${item.quantity + 1})" class="px-2 py-0.5 hover:bg-gray-100 text-gray-600 text-xs font-bold">+</button>
          </div>
          <div class="text-right">
            <div class="text-xs font-black text-[#B71C1C]">${formatCLP(item.unitPrice * item.quantity)}</div>
            ${item.unitPrice < item.originalPrice ? `<div class="text-[10px] text-emerald-600 font-semibold">Mayorista (${formatCLP(item.unitPrice)} c/u)</div>` : ''}
          </div>
        </div>
      </div>
    </div>
  `).join("");

  // Totales
  totalsContainer.innerHTML = `
    <div class="space-y-1.5 text-xs text-gray-600 pt-2 border-t border-gray-200">
      <div class="flex justify-between"><span>Subtotal:</span><strong class="text-gray-900 font-bold">${formatCLP(subtotal)}</strong></div>
      ${savings > 0 ? `<div class="flex justify-between text-emerald-700 font-bold"><span>Ahorro Mayorista:</span><span>-${formatCLP(savings)}</span></div>` : ''}
      <div class="flex justify-between"><span>Despacho:</span><strong>${shipping === 0 ? '<span class="text-emerald-700">GRATIS</span>' : formatCLP(shipping)}</strong></div>
      <div class="flex justify-between text-sm font-black text-gray-900 pt-2 border-t border-gray-200">
        <span>Total IVA Incluido:</span>
        <span class="text-[#B71C1C] text-base">${formatCLP(total)}</span>
      </div>
    </div>

    <!-- Cupón -->
    <div class="mt-3">
      ${coupon ? `
        <div class="p-2 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-800 flex justify-between items-center">
          <span class="font-bold">Cupón: ${coupon} activo</span>
          <button onclick="Cart.removeCoupon()" class="text-red-600 hover:underline text-[11px] font-semibold">Quitar</button>
        </div>
      ` : `
        <form onsubmit="event.preventDefault(); const c = this.querySelector('input').value; const r = Cart.applyCoupon(c); alert(r.message);" class="flex gap-1.5">
          <input type="text" placeholder="Cupón (ej: BIENVENIDO10)" class="flex-1 px-3 py-1.5 text-xs border border-gray-300 rounded-lg uppercase font-mono" />
          <button type="submit" class="px-3 py-1.5 bg-gray-900 hover:bg-black text-white text-xs font-bold rounded-lg">Aplicar</button>
        </form>
      `}
    </div>

    <!-- Botones Checkout -->
    <div class="mt-4 space-y-2">
      <a href="checkout.html" class="w-full flex items-center justify-center gap-2 py-3 bg-[#B71C1C] hover:bg-[#8E0000] text-white font-black text-xs rounded-xl shadow-lg transition-all">
        <span>Ir al Checkout de 1 Paso</span>
        <i data-lucide="arrow-right" class="w-4 h-4"></i>
      </a>
      <a href="${getWhatsAppCartUrl()}" target="_blank" class="w-full flex items-center justify-center gap-2 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow transition-colors">
        <i data-lucide="message-circle" class="w-4 h-4"></i>
        <span>Pedir y Facturar vía WhatsApp</span>
      </a>
    </div>
  `;

  if (window.lucide) lucide.createIcons();
}

function getWhatsAppCartUrl() {
  const { subtotal, shipping, total } = Cart.getTotals();
  let msg = `Hola Comercializadora Valle Lindo! Deseo confirmar el siguiente pedido mayorista:\n\n`;
  Cart.cart.forEach((i, idx) => {
    msg += `${idx + 1}. ${i.product.name} (SKU: ${i.product.sku}) - Cantidad: ${i.quantity} x ${formatCLP(i.unitPrice)}\n`;
  });
  msg += `\nSubtotal: ${formatCLP(subtotal)}\n`;
  msg += `Despacho: ${shipping === 0 ? "GRATIS" : formatCLP(shipping)}\n`;
  msg += `*TOTAL A PAGAR:* ${formatCLP(total)}\n\n`;
  msg += `Por favor coordinar emisión de factura y horario de entrega. ¡Gracias!`;
  return `https://wa.me/56987654321?text=${encodeURIComponent(msg)}`;
}

// Renderizar tarjeta de producto (Alta Jerarquía Visual, Accesibilidad y Rendimiento)
function renderProductCard(p, isGrid = true) {
  const isFav = Cart.isWishlisted(p.id);
  const tiersText = p.wholesaleTiers && p.wholesaleTiers.length > 1
    ? `<div class="mt-1.5 text-[10px] sm:text-[11px] text-emerald-900 bg-emerald-50/90 px-2 py-0.5 rounded-lg border border-emerald-200/80 flex items-center justify-between">
         <span class="truncate font-medium">Mayorista (${p.wholesaleTiers[1].minQty}+):</span>
         <strong class="text-emerald-700 ml-1 shrink-0 font-extrabold">${formatCLP(p.wholesaleTiers[1].price)}</strong>
       </div>`
    : '';

  return `
    <article class="group relative bg-white rounded-2xl border border-neutral-200/90 hover:border-[#B71C1C]/40 hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      <!-- Badges Superiores -->
      <div class="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1 items-start pointer-events-none">
        ${p.discountPercent ? `<span class="bg-[#2E7D32] text-white text-[10px] sm:text-[11px] font-black px-2 py-0.5 rounded-full shadow-sm flex items-center gap-1">-${p.discountPercent}% OFF</span>` : ''}
        ${p.isBestSeller ? `<span class="bg-[#121212]/90 backdrop-blur-xs text-white text-[9px] sm:text-[10px] font-extrabold px-2 py-0.5 rounded-full shadow-xs border border-white/10">⭐ Top Ventas</span>` : ''}
      </div>

      <!-- Fav button con feedback accesible -->
      <button 
        onclick="event.preventDefault(); Cart.toggleWishlist('${p.id}'); this.querySelector('i').classList.toggle('fill-[#B71C1C]');" 
        class="absolute top-2.5 right-2.5 z-10 p-2 rounded-full bg-white/90 backdrop-blur-xs shadow-sm hover:bg-white text-gray-400 hover:text-[#B71C1C] transition-all hover:scale-110 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#B71C1C]" 
        aria-label="Guardar ${p.name} en Favoritos"
        title="Favorito"
      >
        <i data-lucide="heart" class="w-3.5 h-3.5 sm:w-4 sm:h-4 ${isFav ? 'fill-[#B71C1C] text-[#B71C1C]' : ''}"></i>
      </button>

      <!-- Contenedor Imagen con aspect-ratio fijo anti-CLS -->
      <a href="producto.html?slug=${p.slug}" class="block relative aspect-square bg-gradient-to-b from-neutral-50/80 to-white overflow-hidden" aria-label="Ver ficha de ${p.name}">
        <img 
          src="${p.image}" 
          alt="${p.name}" 
          class="w-full h-full object-contain p-3 sm:p-5 group-hover:scale-105 transition-transform duration-500 ease-out" 
          loading="lazy" 
          decoding="async" 
        />
      </a>

      <!-- Info del Producto -->
      <div class="p-3 sm:p-4 flex-1 flex flex-col justify-between border-t border-neutral-100/80">
        <div>
          <div class="flex items-center justify-between text-[10px] sm:text-[11px] text-gray-400 mb-1">
            <span class="font-extrabold text-[#B71C1C] uppercase tracking-wider truncate mr-1">${p.brand}</span>
            <span class="font-mono text-[9px] sm:text-[10px] text-gray-500 shrink-0 bg-gray-100 px-1.5 py-0.5 rounded">SKU: ${p.sku}</span>
          </div>

          <a href="producto.html?slug=${p.slug}" class="focus-visible:outline-none focus-visible:underline">
            <h3 class="text-xs sm:text-sm font-extrabold text-neutral-900 group-hover:text-[#B71C1C] transition-colors line-clamp-2 min-h-[2rem] sm:min-h-[2.5rem] leading-snug">
              ${p.name}
            </h3>
          </a>

          <div class="text-[10px] sm:text-[11px] text-gray-500 mt-1 flex items-center gap-1.5">
            <span class="truncate font-medium">${p.unit}</span>
            <span class="text-gray-300">•</span>
            <span class="inline-flex items-center gap-1 text-emerald-700 font-semibold shrink-0">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Stock Disponible
            </span>
          </div>

          <div class="flex items-center gap-1.5 mt-1.5">
            <div class="flex text-amber-500 text-[11px] sm:text-xs font-bold">
              ⭐ <span class="text-neutral-900 ml-0.5">${p.rating}</span>
            </div>
            <span class="text-[10px] sm:text-[11px] text-neutral-400">(${p.reviewCount} opiniones)</span>
          </div>

          <div class="mt-2.5 pt-2 border-t border-neutral-100">
            <div class="flex items-baseline gap-2 flex-wrap">
              <span class="text-lg sm:text-2xl font-black text-[#B71C1C] tracking-tight">${formatCLP(p.price)}</span>
              ${p.originalPrice > p.price ? `<span class="text-[11px] sm:text-xs text-neutral-400 line-through font-semibold">${formatCLP(p.originalPrice)}</span>` : ''}
            </div>
            ${tiersText}
          </div>
        </div>

        <div class="mt-3 space-y-1.5">
          <button 
            onclick="Cart.addItem('${p.id}', 1)" 
            class="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#B71C1C] to-[#991515] hover:from-[#A01818] hover:to-[#801010] text-white text-[11px] sm:text-xs font-black flex items-center justify-center gap-1.5 shadow-sm hover:shadow-md hover:shadow-red-900/20 transition-all duration-200 active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-[#B71C1C]"
            aria-label="Añadir ${p.name} al Carrito"
          >
            <i data-lucide="shopping-cart" class="w-3.5 h-3.5 shrink-0"></i>
            <span class="truncate">Añadir al Carrito</span>
          </button>

          <div class="grid grid-cols-2 gap-1.5">
            <button 
              onclick="Cart.addItem('${p.id}', 1); window.location.href='checkout.html';" 
              class="py-1.5 px-2 bg-neutral-900 hover:bg-black text-white text-[10px] sm:text-[11px] font-bold rounded-lg flex items-center justify-center gap-0.5 transition-all active:scale-[0.97] truncate shadow-xs focus-visible:ring-2 focus-visible:ring-black" 
              title="Compra Rápida"
              aria-label="Compra rápida de ${p.name}"
            >
              ⚡ <span class="hidden sm:inline">Compra </span>Rápida
            </button>
            <a 
              href="https://wa.me/56987654321?text=${encodeURIComponent(`Hola Valle Lindo! Deseo consultar precio mayorista de: ${p.name} (SKU: ${p.sku})`)}" 
              target="_blank" 
              rel="noopener noreferrer"
              class="py-1.5 px-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300/70 text-[10px] sm:text-[11px] font-bold rounded-lg flex items-center justify-center gap-0.5 truncate text-center transition-all active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-emerald-600" 
              title="Cotizar por WhatsApp"
              aria-label="Consultar precio mayorista de ${p.name} por WhatsApp"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </article>
  `;
}

// Búsqueda predictiva global
function setupGlobalSearch() {
  const inputs = document.querySelectorAll(".global-search-input");
  const dropdown = document.getElementById("searchDropdown");

  inputs.forEach(input => {
    input.addEventListener("input", (e) => {
      const q = e.target.value.trim().toLowerCase();
      if (!dropdown) return;

      if (q.length < 2) {
        dropdown.classList.add("hidden");
        return;
      }

      const results = PRODUCTS_DATA.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.categoryName.toLowerCase().includes(q)
      ).slice(0, 5);

      if (results.length === 0) {
        dropdown.innerHTML = `<div class="p-4 text-center text-xs text-gray-500">No se encontraron productos para "${q}"</div>`;
      } else {
        dropdown.innerHTML = `
          <div class="p-2 bg-gray-50 text-[11px] font-bold text-gray-500 border-b border-gray-100 flex justify-between">
            <span>Resultados sugeridos (${results.length})</span>
            <span class="text-[#B71C1C]">Precios Mayoristas</span>
          </div>
          <div class="divide-y divide-gray-100">
            ${results.map(r => `
              <a href="producto.html?slug=${r.slug}" class="p-3 flex items-center gap-3 hover:bg-gray-50 transition-colors">
                <img src="${r.image}" class="w-10 h-10 object-cover rounded-lg bg-gray-100 border border-gray-200" />
                <div class="flex-1 min-w-0">
                  <div class="text-xs font-bold text-gray-900 truncate">${r.name}</div>
                  <div class="text-[10px] text-gray-400 font-mono">SKU: ${r.sku} • ${r.unit}</div>
                </div>
                <div class="text-xs font-black text-[#B71C1C]">${formatCLP(r.price)}</div>
              </a>
            `).join("")}
          </div>
          <div class="p-2 bg-gray-50 text-center border-t border-gray-100">
            <a href="catalogo.html?q=${encodeURIComponent(q)}" class="text-xs font-bold text-[#B71C1C] hover:underline">Ver todos los resultados</a>
          </div>
        `;
      }
      dropdown.classList.remove("hidden");
      if (window.lucide) lucide.createIcons();
    });
  });

  document.addEventListener("click", (e) => {
    if (dropdown && !e.target.closest(".global-search-container")) {
      dropdown.classList.add("hidden");
    }
  });
}

// Helpers de Navegación Móvil
function toggleMobileNav() {
  const drawer = document.getElementById("mobileNavDrawer");
  if (!drawer) return;
  drawer.classList.toggle("hidden");
  if (!drawer.classList.contains("hidden")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
}

function closeMobileNav() {
  const drawer = document.getElementById("mobileNavDrawer");
  if (!drawer) return;
  drawer.classList.add("hidden");
  document.body.style.overflow = "";
}

function toggleMobileFilters() {
  const filterBox = document.getElementById("catalogFilterSidebar");
  const filterBtnText = document.getElementById("mobileFilterToggleText");
  const filterIcon = document.getElementById("mobileFilterIcon");
  if (!filterBox) return;

  filterBox.classList.toggle("hidden");
  const isHidden = filterBox.classList.contains("hidden");
  if (filterBtnText) {
    filterBtnText.textContent = isHidden ? "Mostrar Filtros" : "Ocultar Filtros";
  }
  if (filterIcon) {
    filterIcon.setAttribute("data-lucide", isHidden ? "sliders-horizontal" : "x");
    if (window.lucide) lucide.createIcons();
  }
}

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  updateBadges();
  setupGlobalSearch();
  if (window.lucide) lucide.createIcons();
});
