// ========================================================
// COMERCIALIZADORA VALLE LINDO - CORE ENGINE & DATA
// ========================================================

const PRODUCTS_DATA = [
  {
    "id": "prod-combo-pura-carne",
    "slug": "combo-pura-carne-valle-lindo",
    "name": "Combo Pura Carne Vacuno Selección (4 kg)",
    "brand": "Valle Lindo Carnes",
    "sku": "CAR-COMBO-PURA-4K",
    "category": "carnes",
    "categoryName": "Carnes",
    "subCategory": "Combos Vacuno",
    "price": 48990,
    "originalPrice": 56990,
    "discountPercent": 14,
    "stock": 45,
    "stockStatus": "in_stock",
    "unit": "Pack 4 kg surtido al vacío",
    "weight": "4 kg",
    "origin": "Chile / Selección Premium",
    "rating": 5.0,
    "reviewCount": 68,
    "image": "productos/WhatsApp Image 2026-11-18 at 10.42.07 (3).jpeg",
    "shortDescription": "Todo por $48.990. Incluye 1 kg Bistec carne magra, 1 kg Carne para mechar, 1 kg Carne para el horno o guisar y 1 kg Carne molida especial.",
    "description": "La mejor selección de carnes para compartir en familia o con amigos. Carne 100% magra, fresca y garantizada, ideal para todas tus recetas cotidianas. Calidad asegurada con despacho refrigerado.",
    "storage": "Mantener refrigerado entre 0°C y 4°C o congelado a -18°C.",
    "wholesaleTiers": [
      {
        "minQty": 1,
        "price": 48990,
        "label": "1 a 2 combos"
      },
      {
        "minQty": 3,
        "price": 46990,
        "label": "3+ combos mayorista"
      }
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isOffer": true,
    "tags": [
      "carnes",
      "combo",
      "pura carne",
      "vacuno",
      "bistec",
      "molida",
      "mechar"
    ]
  },
  {
    "id": "prod-combo-medio-kilates",
    "slug": "combo-medio-kilates-surtido",
    "name": "Combo Medio Kilates Surtido Esencial (2.5 kg)",
    "brand": "Valle Lindo Carnes",
    "sku": "CAR-COMBO-MEDIO-25K",
    "category": "carnes",
    "categoryName": "Carnes",
    "subCategory": "Combos Surtidos",
    "price": 26990,
    "originalPrice": 31990,
    "discountPercent": 16,
    "stock": 50,
    "stockStatus": "in_stock",
    "unit": "Pack 2.5 kg surtido",
    "weight": "2.5 kg",
    "origin": "Chile / Nacional",
    "rating": 4.9,
    "reviewCount": 54,
    "image": "productos/WhatsApp Image 2026-11-18 at 10.42.07 (4).jpeg",
    "shortDescription": "Todo por $26.990. Incluye 1/2 kg Bistec (Lomo Liso o Asiento), 1/2 kg Carne para mechar, 1/2 kg Carne molida especial, 1/2 kg Pechuga deshuesada y 1/2 kg Bistec de pulpa de cerdo.",
    "description": "Todo lo que necesitas para disfrutar en familia o con amigos. Porciones perfectas de vacuno, ave y cerdo listas para la semana o una parrillada express con frescura inigualable.",
    "storage": "Refrigerado 0°C a 4°C.",
    "wholesaleTiers": [
      {
        "minQty": 1,
        "price": 26990,
        "label": "Precio unitario"
      },
      {
        "minQty": 4,
        "price": 24990,
        "label": "4+ combos"
      }
    ],
    "isFeatured": true,
    "isBestSeller": false,
    "isOffer": true,
    "tags": [
      "carnes",
      "combo medio kilates",
      "lomo liso",
      "pollo",
      "cerdo"
    ]
  },
  {
    "id": "prod-super-combo-parrillero",
    "slug": "super-combo-parrillero-valle-lindo",
    "name": "Súper Combo Parrillero Premium (6 kg + Prietas)",
    "brand": "Valle Lindo Carnes",
    "sku": "CAR-COMBO-PARR-SUP",
    "category": "carnes",
    "categoryName": "Carnes",
    "subCategory": "Combos Parrilleros",
    "price": 53990,
    "originalPrice": 62990,
    "discountPercent": 14,
    "stock": 40,
    "stockStatus": "in_stock",
    "unit": "Pack parrillero familiar 6 kg aprox.",
    "weight": "6 kg",
    "origin": "Chile / Selección Parrillera",
    "rating": 5.0,
    "reviewCount": 92,
    "image": "productos/WhatsApp Image 2026-11-18 at 10.42.08 (1).jpeg",
    "shortDescription": "Todo por $53.990. Incluye 2 kg Lomo Liso o Vetado, 1 kg Trutro de pollo, 1 kg Costillar de cerdo, 1 kg Chorizo de la casa y 1 paquete Morcilla / Prieta.",
    "description": "El combo definitivo para los amantes del asado. Cortes nobles seleccionados para lograr la máxima terneza y jugosidad al carbón o leña. Calidad, frescura y sabor incomparables.",
    "storage": "Refrigerado 0°C a 4°C o congelado -18°C.",
    "wholesaleTiers": [
      {
        "minQty": 1,
        "price": 53990,
        "label": "Por combo"
      },
      {
        "minQty": 3,
        "price": 50990,
        "label": "3+ combos asado"
      }
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isOffer": true,
    "tags": [
      "carnes",
      "combo parrillero",
      "lomo vetado",
      "costillar",
      "chorizo",
      "prietas"
    ]
  },
  {
    "id": "prod-combo-fitness",
    "slug": "combo-fitness-proteina-limpia",
    "name": "Combo Fitness Proteico Saludable (5.5 kg)",
    "brand": "Valle Lindo Carnes",
    "sku": "CAR-COMBO-FIT-55K",
    "category": "carnes",
    "categoryName": "Carnes",
    "subCategory": "Combos Saludables",
    "price": 34990,
    "originalPrice": 41990,
    "discountPercent": 17,
    "stock": 35,
    "stockStatus": "in_stock",
    "unit": "Pack 5.5 kg magro al vacío",
    "weight": "5.5 kg",
    "origin": "Chile / Selección Magra",
    "rating": 4.9,
    "reviewCount": 47,
    "image": "productos/WhatsApp Image 2026-11-18 at 10.42.08 (2).jpeg",
    "shortDescription": "Todo por $34.990. Incluye 1/2 kg Carne molida especial magra, 2 kg Trutro entero sin piel, 2 kg Pechuga deshuesada y 1 kg Pollo molido.",
    "description": "Todo lo que necesitas para tu mejor versión. Máxima proteína magra con bajo contenido graso, ideal para atletas, deportistas y alimentación balanceada familiar.",
    "storage": "Refrigerado 0°C a 4°C.",
    "wholesaleTiers": [
      {
        "minQty": 1,
        "price": 34990,
        "label": "Precio normal"
      },
      {
        "minQty": 3,
        "price": 32990,
        "label": "3+ unidades"
      }
    ],
    "isFeatured": true,
    "isBestSeller": false,
    "isOffer": true,
    "tags": [
      "carnes",
      "combo fitness",
      "pechuga deshuesada",
      "trutro",
      "proteina"
    ]
  },
  {
    "id": "prod-combo-familiar-mega",
    "slug": "combo-familiar-mega-seleccion",
    "name": "Combo Familiar Mega Selección Completa (7 kg)",
    "brand": "Valle Lindo Carnes",
    "sku": "CAR-COMBO-FAM-7K",
    "category": "carnes",
    "categoryName": "Carnes",
    "subCategory": "Combos Familiares",
    "price": 62990,
    "originalPrice": 72990,
    "discountPercent": 14,
    "stock": 30,
    "stockStatus": "in_stock",
    "unit": "Mega Pack 7 kg surtido",
    "weight": "7 kg",
    "origin": "Chile",
    "rating": 5.0,
    "reviewCount": 61,
    "image": "productos/WhatsApp Image 2026-11-18 at 10.42.08 (3).jpeg",
    "shortDescription": "Todo por $62.990. Incluye 1 kg Molida especial, 1 kg Bistec, 1 kg Carne picada o para mechar, 1 kg Chuleta centro, 1 kg Chuleta ahumada, 1 kg Truto entero y 1 kg Pechuga deshuesada.",
    "description": "El pack más completo para toda la familia. 7 kilos de carnes seleccionadas que resuelven los almuerzos y cenas de todo el mes con cortes premium y frescura absoluta.",
    "storage": "Mantener refrigerado entre 0°C y 4°C.",
    "wholesaleTiers": [
      {
        "minQty": 1,
        "price": 62990,
        "label": "Por combo"
      },
      {
        "minQty": 2,
        "price": 59990,
        "label": "2+ combos familiares"
      }
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isOffer": false,
    "tags": [
      "carnes",
      "combo familiar",
      "chuleta centro",
      "bistec",
      "pechuga"
    ]
  },
  {
    "id": "prod-combo-familiar-20",
    "slug": "combo-familiar-2-0-economico",
    "name": "Combo Familiar 2.0 Ahorro Inteligente (5.5 kg)",
    "brand": "Valle Lindo Carnes",
    "sku": "CAR-COMBO-FAM2-55K",
    "category": "carnes",
    "categoryName": "Carnes",
    "subCategory": "Combos Familiares",
    "price": 54990,
    "originalPrice": 61990,
    "discountPercent": 11,
    "stock": 38,
    "stockStatus": "in_stock",
    "unit": "Pack 5.5 kg cortes nobles",
    "weight": "5.5 kg",
    "origin": "Chile",
    "rating": 4.9,
    "reviewCount": 39,
    "image": "productos/WhatsApp Image 2026-11-18 at 10.42.08 (4).jpeg",
    "shortDescription": "Todo por $54.990. Incluye 1 kg Molida especial, 1/2 kg Carne picada, 1/2 kg Carne para mechar, 1 kg Lomo liso bistec, 1.5 kg Pechuga deshuesada y 1 kg Truto entero.",
    "description": "Excelente balance entre carnes rojas y blancas de primera calidad. Variedad para guisar, asar a la plancha o preparar al horno con rendimiento superior.",
    "storage": "Refrigerado 0°C a 4°C.",
    "wholesaleTiers": [
      {
        "minQty": 1,
        "price": 54990,
        "label": "Precio normal"
      },
      {
        "minQty": 3,
        "price": 51990,
        "label": "3+ combos"
      }
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isOffer": true,
    "tags": [
      "carnes",
      "combo familiar 2.0",
      "lomo liso",
      "mechar",
      "pechuga"
    ]
  },
  {
    "id": "prod-combo-parrillero-clasico",
    "slug": "combo-parrillero-clasico-4-5kg",
    "name": "Combo Parrillero Clásico Fin de Semana (4.5 kg)",
    "brand": "Valle Lindo Carnes",
    "sku": "CAR-COMBO-PARR-45K",
    "category": "carnes",
    "categoryName": "Carnes",
    "subCategory": "Combos Parrilleros",
    "price": 39990,
    "originalPrice": 46990,
    "discountPercent": 15,
    "stock": 42,
    "stockStatus": "in_stock",
    "unit": "Pack 4.5 kg para asado",
    "weight": "4.5 kg",
    "origin": "Chile",
    "rating": 4.8,
    "reviewCount": 41,
    "image": "productos/WhatsApp Image 2026-11-18 at 10.42.08 (5).jpeg",
    "shortDescription": "Todo por $39.990. Incluye 1.5 kg Lomo liso, 1 kg Chuleta parrillera de cerdo, 1 kg Truto entero y 1 kg Chorizo artesanal de la casa.",
    "description": "El asado perfecto en un solo paquete. Cortes seleccionados listos para la parrilla con sabor criollo tradicional.",
    "storage": "Refrigerado 0°C a 4°C.",
    "wholesaleTiers": [
      {
        "minQty": 1,
        "price": 39990,
        "label": "Precio normal"
      },
      {
        "minQty": 3,
        "price": 37990,
        "label": "3+ combos"
      }
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isOffer": true,
    "tags": [
      "carnes",
      "combo parrillero",
      "lomo liso",
      "chuleta",
      "chorizo"
    ]
  },
  {
    "id": "prod-combo-kilate-completo",
    "slug": "combo-kilate-completo-5kg",
    "name": "Combo Kilate Completo Multicortes (5 kg)",
    "brand": "Valle Lindo Carnes",
    "sku": "CAR-COMBO-KIL-5K",
    "category": "carnes",
    "categoryName": "Carnes",
    "subCategory": "Combos Surtidos",
    "price": 52990,
    "originalPrice": 59990,
    "discountPercent": 12,
    "stock": 35,
    "stockStatus": "in_stock",
    "unit": "Pack 5 kg surtido al vacío",
    "weight": "5 kg",
    "origin": "Chile",
    "rating": 4.9,
    "reviewCount": 58,
    "image": "productos/WhatsApp Image 2026-11-18 at 10.42.08.jpeg",
    "shortDescription": "Todo por $52.990. Incluye 1 kg Bistec (Lomo Liso o Asiento), 1 kg Carne para mechar, 1 kg Carne molida especial, 1 kg Pechuga deshuesada y 1 kg Bistec de pulpa de cerdo.",
    "description": "5 kilos de carne de primera calidad. Todo lo necesario para disfrutar en familia o abastecer el menú semanal con terneza y rendimiento garantizados.",
    "storage": "Refrigerado 0°C a 4°C.",
    "wholesaleTiers": [
      {
        "minQty": 1,
        "price": 52990,
        "label": "Precio normal"
      },
      {
        "minQty": 3,
        "price": 49990,
        "label": "3+ combos mayorista"
      }
    ],
    "isFeatured": true,
    "isBestSeller": false,
    "isOffer": true,
    "tags": [
      "carnes",
      "combo kilate",
      "bistec",
      "asiento",
      "pulpa de cerdo"
    ]
  },
  {
    "id": "prod-chuleta-ahumada-premium",
    "slug": "chuleta-ahumada-premium-cerdo",
    "name": "Chuleta Ahumada Premium de Cerdo Seleccionada (Por Kilo)",
    "brand": "Valle Lindo Ahumados",
    "sku": "CAR-CHUL-AHUM-KG",
    "category": "carnes",
    "categoryName": "Carnes",
    "subCategory": "Ahumados",
    "price": 5990,
    "originalPrice": 6990,
    "discountPercent": 14,
    "stock": 120,
    "stockStatus": "in_stock",
    "unit": "Kilo (Con Hueso $5.990 / Sin Hueso $6.390)",
    "weight": "1 kg",
    "origin": "Chile",
    "rating": 4.9,
    "reviewCount": 73,
    "image": "productos/WhatsApp Image 2026-11-19 at 09.16.39.jpeg",
    "shortDescription": "Ahumado natural a leña. Con hueso $5.990 el kilo | Sin hueso $6.390 el kilo. 100% carne de cerdo seleccionada con sabor único que realza cada momento.",
    "description": "Chuletas de cerdo seleccionadas ahumadas lentamente al calor de maderas nobles. Jugosas, tiernas y con el punto justo de sal, ideales para asar, hornear o sellar a la plancha.",
    "storage": "Mantener refrigerado entre 2°C y 6°C.",
    "wholesaleTiers": [
      {
        "minQty": 1,
        "price": 5990,
        "label": "Con Hueso ($5.990/kg)"
      },
      {
        "minQty": 10,
        "price": 5690,
        "label": "10+ kg Con Hueso ($5.690/kg)"
      },
      {
        "minQty": 1,
        "price": 6390,
        "label": "Sin Hueso ($6.390/kg)"
      },
      {
        "minQty": 10,
        "price": 5990,
        "label": "10+ kg Sin Hueso ($5.990/kg)"
      }
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isOffer": true,
    "tags": [
      "carnes",
      "chuleta ahumada",
      "cerdo",
      "ahumados",
      "parrilla"
    ]
  },
  {
    "id": "prod-tocino-ahumado-laminado",
    "slug": "tocino-ahumado-laminado-premium",
    "name": "Tocino Ahumado Laminado Selección Premium (Por Kilo)",
    "brand": "Santa Bárbara / Valle Lindo",
    "sku": "CAR-TOC-LAM-KG",
    "category": "carnes",
    "categoryName": "Carnes",
    "subCategory": "Ahumados",
    "price": 8990,
    "originalPrice": 9990,
    "discountPercent": 10,
    "stock": 80,
    "stockStatus": "in_stock",
    "unit": "Kilo laminado al vacío",
    "weight": "1 kg",
    "origin": "Chile / Venezuela",
    "rating": 5.0,
    "reviewCount": 65,
    "image": "productos/WhatsApp Image 2026-11-19 at 09.17.15.jpeg",
    "shortDescription": "Ahumado lentamente para un sabor único e irresistible. $8.990 el kilo. 100% carne de cerdo premium seleccionada.",
    "description": "Tocino de panceta curada y ahumada con maderas seleccionadas. Láminas homogéneas de dorado crujiente y aroma inconfundible, indispensables en hamburguesas, desayunos y platos gourmet.",
    "storage": "Mantener refrigerado entre 2°C y 5°C.",
    "wholesaleTiers": [
      {
        "minQty": 1,
        "price": 8990,
        "label": "1 a 4 kg ($8.990)"
      },
      {
        "minQty": 5,
        "price": 8490,
        "label": "5+ kg ($8.490)"
      }
    ],
    "isFeatured": true,
    "isBestSeller": false,
    "isOffer": false,
    "tags": [
      "carnes",
      "tocino ahumado",
      "panceta",
      "bacon",
      "ahumados"
    ]
  },
  {
    "id": "prod-tocino-ahumado-tipo-molde-kg",
    "slug": "tocino-ahumado-tipo-molde-barra",
    "name": "Tocino Ahumado Tipo Molde en Bloque / Barra (Por Kilo)",
    "brand": "Santa Bárbara R&C",
    "sku": "CAR-TOC-MOLDE-KG",
    "category": "carnes",
    "categoryName": "Carnes",
    "subCategory": "Ahumados",
    "price": 6990,
    "originalPrice": 7990,
    "discountPercent": 13,
    "stock": 95,
    "stockStatus": "in_stock",
    "unit": "Bloque / Kilo ($6.990 el kilo)",
    "weight": "1 kg",
    "origin": "Chile / Venezuela",
    "rating": 4.9,
    "reviewCount": 42,
    "image": "productos/WhatsApp Image 2026-11-19 at 09.18.28.jpeg",
    "shortDescription": "Precio por kilo $6.990 | A partir de 20 kilos $6.390 el kilo. Ahumado natural lentamente para un sabor único y rendimiento profesional.",
    "description": "Tocino tipo molde con alto rendimiento en máquina rebanadora o para corte en cubos. Perfecto para restaurantes, locales de comida rápida y cecinas.",
    "storage": "Mantener refrigerado entre 2°C y 6°C.",
    "wholesaleTiers": [
      {
        "minQty": 1,
        "price": 6990,
        "label": "1 a 19 kg ($6.990/kg)"
      },
      {
        "minQty": 20,
        "price": 6390,
        "label": "Desde 20 kg ($6.390/kg)"
      }
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isOffer": true,
    "tags": [
      "carnes",
      "tocino",
      "tipo molde",
      "ahumado",
      "mayorista"
    ]
  },
  {
    "id": "prod-combos-familia-personalizado",
    "slug": "pack-combos-familia-carnes-seleccionadas",
    "name": "Pack Selección Carnes Familiares & Asesoría a Medida",
    "brand": "Valle Lindo Especial",
    "sku": "CAR-PACK-CUSTOM",
    "category": "carnes",
    "categoryName": "Carnes",
    "subCategory": "Combos Especiales",
    "price": 45990,
    "originalPrice": 52990,
    "discountPercent": 13,
    "stock": 25,
    "stockStatus": "in_stock",
    "unit": "Pack personalizado según requerimiento",
    "weight": "4 a 6 kg",
    "origin": "Chile",
    "rating": 5.0,
    "reviewCount": 33,
    "image": "productos/WhatsApp Image 2026-11-19 at 09.22.26.jpeg",
    "shortDescription": "Prácticos, completos y económicos. Combos de carne pensados para tu familia con calidad premium y compras por volumen garantizadas.",
    "description": "Arma el combo a la medida de tu hogar o negocio con nuestros maestros carniceros. Cotiza vacuno, cerdo y ave con el mejor precio por kilo y despacho a domicilio.",
    "storage": "Refrigerado 0°C a 4°C.",
    "wholesaleTiers": [
      {
        "minQty": 1,
        "price": 45990,
        "label": "Pack estándar sugerido"
      },
      {
        "minQty": 5,
        "price": 42990,
        "label": "5+ packs a medida"
      }
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isOffer": true,
    "tags": [
      "carnes",
      "combos de carne",
      "familia",
      "ahorro",
      "personalizado"
    ]
  },
  {
    "id": "prod-catalogo-general-muestrario",
    "slug": "catalogo-oficial-valle-lindo-muestrario",
    "name": "Catálogo General Valle Lindo & Degustación Mayorista",
    "brand": "Valle Lindo Comercializadora",
    "sku": "CAT-OFICIAL-VL",
    "category": "quesos",
    "categoryName": "Quesos",
    "subCategory": "Institucional",
    "price": 0,
    "originalPrice": 0,
    "discountPercent": 0,
    "stock": 999,
    "stockStatus": "in_stock",
    "unit": "Catálogo digital & Muestrario comercial B2B",
    "weight": "Digital / Físico",
    "origin": "Chile / Venezuela",
    "rating": 5.0,
    "reviewCount": 115,
    "image": "productos/WhatsApp Image 2026-11-19 at 09.02.40.jpeg",
    "shortDescription": "¡Calidad que se siente, sabor que se recuerda! Carnes de primera calidad, quesos seleccionados y ahumados con despachos rápidos y confiables a todo Chile.",
    "description": "Accede a la lista de precios mayoristas completa y solicita asesoría comercial personalizada para tu negocio, restaurante, pizzería o tequeñería.",
    "storage": "Disponible en línea o vía WhatsApp.",
    "wholesaleTiers": [
      {
        "minQty": 1,
        "price": 0,
        "label": "Cotización Gratuita"
      }
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isOffer": false,
    "tags": [
      "catalogo",
      "valle lindo",
      "mayorista",
      "degustacion",
      "precios"
    ]
  },
  {
    "id": "prod-queso-llanero-barra",
    "slug": "queso-llanero-por-barra-santa-barbara",
    "name": "Queso Llanero Artesanal por Barra (Santa Bárbara R&C)",
    "brand": "Santa Bárbara R&C",
    "sku": "QUE-LLAN-BARRA",
    "category": "quesos",
    "categoryName": "Quesos",
    "subCategory": "Llanero",
    "price": 7990,
    "originalPrice": 8990,
    "discountPercent": 11,
    "stock": 250,
    "stockStatus": "in_stock",
    "unit": "Barra sellada (Precio por Kilo)",
    "weight": "Por Kilo",
    "origin": "Venezuela / Elaboración Certificada",
    "rating": 5.0,
    "reviewCount": 184,
    "image": "productos/WhatsApp Image 2026-11-19 at 09.03.29.jpeg",
    "shortDescription": "Precio por barra $7.990/kg | Desde 20 kg $7.690/kg | Desde 60 kg $7.390/kg. 100% Leche bovina, sabor auténtico que hace la diferencia.",
    "description": "Auténtico queso llanero blanco tradicional, con consistencia firme, textura ideal para rallar fino o freír en la plancha sin desarmarse. Excelente punto de sal para tequeños, empanadas, arepas y cachapas.",
    "storage": "Mantener refrigerado entre 2°C y 5°C.",
    "wholesaleTiers": [
      {
        "minQty": 1,
        "price": 7990,
        "label": "1 a 19 kg ($7.990/kg)"
      },
      {
        "minQty": 20,
        "price": 7690,
        "label": "20 a 59 kg ($7.690/kg)"
      },
      {
        "minQty": 60,
        "price": 7390,
        "label": "Desde 60 kg ($7.390/kg)"
      }
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isOffer": true,
    "tags": [
      "quesos",
      "queso llanero",
      "santa barbara",
      "arepas",
      "tequeños",
      "mayorista"
    ]
  },
  {
    "id": "prod-queso-llanero-kilo",
    "slug": "queso-llanero-presentacion-kilo-santa-barbara",
    "name": "Queso Llanero Formato Kilo Sellado (Santa Bárbara R&C)",
    "brand": "Santa Bárbara R&C",
    "sku": "QUE-LLAN-1K",
    "category": "quesos",
    "categoryName": "Quesos",
    "subCategory": "Llanero",
    "price": 7990,
    "originalPrice": 8990,
    "discountPercent": 11,
    "stock": 200,
    "stockStatus": "in_stock",
    "unit": "Pieza sellada al vacío 1 kg",
    "weight": "1 kg",
    "origin": "Venezuela / Santa Bárbara",
    "rating": 4.9,
    "reviewCount": 97,
    "image": "productos/WhatsApp Image 2026-11-19 at 09.04.08.jpeg",
    "shortDescription": "Desde 1 caja $7.990 el kilo | Desde 2 cajas $7.590 el kilo. 100% Leche Bovina. Ingredientes: Leche de vaca pasteurizada, sal, cuajo, cloruro de calcio.",
    "description": "Presentación individual de 1 kilo envasado higiénicamente al vacío. Perfecto para negocios gastronómicos que requieren control exacto de porciones y rotación continua.",
    "storage": "Conservar refrigerado entre 2°C y 6°C.",
    "wholesaleTiers": [
      {
        "minQty": 1,
        "price": 7990,
        "label": "1 caja ($7.990/kg)"
      },
      {
        "minQty": 2,
        "price": 7590,
        "label": "2+ cajas ($7.590/kg)"
      }
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isOffer": false,
    "tags": [
      "quesos",
      "queso llanero",
      "formato kilo",
      "caja",
      "santa barbara"
    ]
  },
  {
    "id": "prod-queso-guayanes",
    "slug": "queso-guayanes-artesanal-santa-barbara",
    "name": "Queso Guayanés Artesanal Cremoso (Santa Bárbara R&C)",
    "brand": "Santa Bárbara R&C",
    "sku": "QUE-GUAY-KG",
    "category": "quesos",
    "categoryName": "Quesos",
    "subCategory": "Guayanés",
    "price": 7590,
    "originalPrice": 8590,
    "discountPercent": 12,
    "stock": 110,
    "stockStatus": "in_stock",
    "unit": "Por Kilo",
    "weight": "1 kg",
    "origin": "Venezuela",
    "rating": 5.0,
    "reviewCount": 112,
    "image": "productos/WhatsApp Image 2026-11-19 at 09.04.55.jpeg",
    "shortDescription": "100% Leche bovina. $7.590 el kilo. Sabor auténtico que hace la diferencia, textura suave y untuosa inigualable.",
    "description": "El tradicional queso Guayanés venezolano, de textura elástica, blanda y cremosa, con un suave toque salino. Se derrite sutilmente con el calor de la cachapa o la arepa recién salida del budare.",
    "storage": "Mantener refrigerado entre 2°C y 6°C.",
    "wholesaleTiers": [
      {
        "minQty": 1,
        "price": 7590,
        "label": "1 a 9 kg ($7.590)"
      },
      {
        "minQty": 10,
        "price": 7190,
        "label": "10+ kg ($7.190)"
      }
    ],
    "isFeatured": true,
    "isBestSeller": false,
    "isOffer": true,
    "tags": [
      "quesos",
      "queso guayanes",
      "cachapas",
      "arepas",
      "santa barbara"
    ]
  },
  {
    "id": "prod-queso-mano-arepero",
    "slug": "queso-de-mano-arepero-santa-barbara",
    "name": "Queso de Mano Arepero Artesanal (Santa Bárbara R&C)",
    "brand": "Santa Bárbara R&C",
    "sku": "QUE-MANO-AREP",
    "category": "quesos",
    "categoryName": "Quesos",
    "subCategory": "Queso de Mano",
    "price": 7590,
    "originalPrice": 8590,
    "discountPercent": 12,
    "stock": 90,
    "stockStatus": "in_stock",
    "unit": "Por Kilo (Ruedas tamaño arepa)",
    "weight": "1 kg",
    "origin": "Venezuela",
    "rating": 4.9,
    "reviewCount": 84,
    "image": "productos/WhatsApp Image 2026-11-19 at 09.05.48.jpeg",
    "shortDescription": "100% Leche bovina. Libre de gluten. $7.590 el kilo. Tamaño perfecto para rellenar arepas con capas suaves e hiladas.",
    "description": "Queso hilado en capas concéntricas con la técnica ancestral de los llanos. Textura jugosa que al morder desprende toda la frescura de la leche entera pasteurizada.",
    "storage": "Conservar refrigerado entre 2°C y 6°C.",
    "wholesaleTiers": [
      {
        "minQty": 1,
        "price": 7590,
        "label": "1 a 9 kg ($7.590)"
      },
      {
        "minQty": 10,
        "price": 7190,
        "label": "10+ kg mayorista"
      }
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isOffer": false,
    "tags": [
      "quesos",
      "queso de mano",
      "arepero",
      "venezolano",
      "hilado"
    ]
  },
  {
    "id": "prod-queso-mano-cachapero",
    "slug": "queso-de-mano-cachapero-santa-barbara",
    "name": "Queso de Mano Cachapero Rueda Grande (Santa Bárbara R&C)",
    "brand": "Santa Bárbara R&C",
    "sku": "QUE-MANO-CACH",
    "category": "quesos",
    "categoryName": "Quesos",
    "subCategory": "Queso de Mano",
    "price": 7590,
    "originalPrice": 8590,
    "discountPercent": 12,
    "stock": 95,
    "stockStatus": "in_stock",
    "unit": "Por Kilo (Ruedas grandes para cachapas)",
    "weight": "1 kg",
    "origin": "Venezuela",
    "rating": 5.0,
    "reviewCount": 105,
    "image": "productos/WhatsApp Image 2026-11-19 at 09.07.02.jpeg",
    "shortDescription": "100% Leche bovina natural. $7.590 el kilo. Diámetro amplio especial para abrazar la cachapa con fundido suave.",
    "description": "La estrella de las cachaperas. Ruedas grandes de queso hilado artesanal que cubren por completo la cachapa caliente. Sabor lácteo fresco y punto de sal exacto.",
    "storage": "Conservar refrigerado entre 2°C y 6°C.",
    "wholesaleTiers": [
      {
        "minQty": 1,
        "price": 7590,
        "label": "1 a 9 kg ($7.590)"
      },
      {
        "minQty": 10,
        "price": 7190,
        "label": "10+ kg mayorista"
      }
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isOffer": false,
    "tags": [
      "quesos",
      "queso de mano",
      "cachapero",
      "cachapas",
      "rueda grande"
    ]
  },
  {
    "id": "prod-queso-de-ano",
    "slug": "queso-de-ano-madurado-santa-barbara",
    "name": "Queso de Año Madurado Intenso (Santa Bárbara R&C)",
    "brand": "Santa Bárbara R&C",
    "sku": "QUE-ANO-MAD",
    "category": "quesos",
    "categoryName": "Quesos",
    "subCategory": "Madurados",
    "price": 2790,
    "originalPrice": 3290,
    "discountPercent": 15,
    "stock": 140,
    "stockStatus": "in_stock",
    "unit": "200g ($2.790) / 400g ($4.290)",
    "weight": "200g / 400g",
    "origin": "Venezuela",
    "rating": 4.9,
    "reviewCount": 78,
    "image": "productos/WhatsApp Image 2026-11-19 at 09.07.54.jpeg",
    "shortDescription": "Presentación 200g $2.790 | Presentación 400g $4.290. 100% natural, sabor fuerte, seco y salado ideal para rallar sobre arepas y pastas.",
    "description": "Queso madurado por meses hasta alcanzar una pasta dura, seca y quebradiza. Su sabor punzante y aromático rinde el doble al rallarse en hebras finas.",
    "storage": "Refrigerado 2°C a 6°C.",
    "wholesaleTiers": [
      {
        "minQty": 1,
        "price": 2790,
        "label": "Formato 200g ($2.790)"
      },
      {
        "minQty": 1,
        "price": 4290,
        "label": "Formato 400g ($4.290)"
      },
      {
        "minQty": 10,
        "price": 3890,
        "label": "10+ unidades 400g ($3.890 c/u)"
      }
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isOffer": true,
    "tags": [
      "quesos",
      "queso de año",
      "rallar",
      "madurado",
      "arepas"
    ]
  },
  {
    "id": "prod-queso-madurado-premium",
    "slug": "queso-madurado-premium-santa-barbara",
    "name": "Queso Madurado Selección Especial (Santa Bárbara R&C)",
    "brand": "Santa Bárbara R&C",
    "sku": "QUE-MAD-ESP-KG",
    "category": "quesos",
    "categoryName": "Quesos",
    "subCategory": "Madurados",
    "price": 8490,
    "originalPrice": 9490,
    "discountPercent": 11,
    "stock": 75,
    "stockStatus": "in_stock",
    "unit": "Por Kilo",
    "weight": "1 kg",
    "origin": "Venezuela",
    "rating": 5.0,
    "reviewCount": 62,
    "image": "productos/WhatsApp Image 2026-11-19 at 09.08.56.jpeg",
    "shortDescription": "Precio por kilo $8.490. 100% Leche bovina. Maduración premium, sabor intenso y consistencia firme perfecta para picar o rallar.",
    "description": "Queso de curación controlada con textura firme y notas lácteas concentradas. Ideal para tablas de degustación, acompañamiento con vinos o recetas de alta gastronomía.",
    "storage": "Mantener refrigerado entre 2°C y 6°C.",
    "wholesaleTiers": [
      {
        "minQty": 1,
        "price": 8490,
        "label": "1 a 9 kg ($8.490)"
      },
      {
        "minQty": 10,
        "price": 7990,
        "label": "10+ kg mayorista"
      }
    ],
    "isFeatured": true,
    "isBestSeller": false,
    "isOffer": false,
    "tags": [
      "quesos",
      "queso madurado",
      "tabla de quesos",
      "santa barbara"
    ]
  },
  {
    "id": "prod-queso-gouda-santa-barbara",
    "slug": "queso-gouda-barra-santa-barbara",
    "name": "Queso Gouda Barra Tradicional (Santa Bárbara R&C)",
    "brand": "Santa Bárbara R&C",
    "sku": "QUE-GOUDA-BARRA",
    "category": "quesos",
    "categoryName": "Quesos",
    "subCategory": "Gouda",
    "price": 7290,
    "originalPrice": 8190,
    "discountPercent": 11,
    "stock": 130,
    "stockStatus": "in_stock",
    "unit": "Kilo (Caja de 20 kg aprox)",
    "weight": "Por Kilo",
    "origin": "Venezuela / Chile",
    "rating": 4.9,
    "reviewCount": 77,
    "image": "productos/WhatsApp Image 2026-11-19 at 09.09.43.jpeg",
    "shortDescription": "Desde 1 caja $7.290 el kilo | Desde 60 kilos $6.990 el kilo. Sabor suave y cremoso, 100% leche bovina sin gluten, ideal para toda ocasión.",
    "description": "Queso Gouda madurado con ojos pequeños y pasta semidura dorada. Se funde con facilidad sin quemarse, brindando excelente color y sabor en sándwiches, hamburguesas y gratinados.",
    "storage": "Mantener refrigerado entre 2°C y 6°C.",
    "wholesaleTiers": [
      {
        "minQty": 1,
        "price": 7290,
        "label": "Caja 20 kg ($7.290/kg)"
      },
      {
        "minQty": 60,
        "price": 6990,
        "label": "Desde 60 kg ($6.990/kg)"
      }
    ],
    "isFeatured": true,
    "isBestSeller": false,
    "isOffer": true,
    "tags": [
      "quesos",
      "queso gouda",
      "gouda barra",
      "sandwiches",
      "gratinar"
    ]
  },
  {
    "id": "prod-queso-mantecoso-valdivia",
    "slug": "queso-mantecoso-el-orgullo-de-valdivia",
    "name": "Queso Mantecoso Tradicional (El Orgullo de Valdivia)",
    "brand": "El Orgullo de Valdivia",
    "sku": "QUE-MANT-VALD",
    "category": "quesos",
    "categoryName": "Quesos",
    "subCategory": "Mantecoso",
    "price": 8790,
    "originalPrice": 9690,
    "discountPercent": 9,
    "stock": 115,
    "stockStatus": "in_stock",
    "unit": "Kilo (Caja 20 kg aprox)",
    "weight": "Por Kilo",
    "origin": "Chile - Valdivia",
    "rating": 5.0,
    "reviewCount": 134,
    "image": "productos/WhatsApp Image 2026-11-19 at 09.10.28.jpeg",
    "shortDescription": "Desde 1 caja $8.790 el kilo | Desde 60 kilos $8.290 el kilo. Sabor suave y cremoso que nos representa, libre de gluten.",
    "description": "El auténtico queso mantecoso del sur de Chile. Textura tierna, elástica y cremosa que se funde en boca con notas a mantequilla fresca. El favorito para empanadas de queso, sándwiches de campo y picoteos.",
    "storage": "Mantener refrigerado entre 2°C y 6°C.",
    "wholesaleTiers": [
      {
        "minQty": 1,
        "price": 8790,
        "label": "Caja 20 kg ($8.790/kg)"
      },
      {
        "minQty": 60,
        "price": 8290,
        "label": "Desde 60 kg ($8.290/kg)"
      }
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isOffer": false,
    "tags": [
      "quesos",
      "queso mantecoso",
      "valdivia",
      "sur de chile",
      "empanadas"
    ]
  },
  {
    "id": "prod-queso-mozzarella-barra-pampa",
    "slug": "queso-mozzarella-barra-pampa-cheese-kg",
    "name": "Queso Mozzarella en Barra Pampa Cheese (Por Kilo)",
    "brand": "Pampa Cheese",
    "sku": "QUE-MOZZ-PAMPA-KG",
    "category": "quesos",
    "categoryName": "Quesos",
    "subCategory": "Mozzarella",
    "price": 6790,
    "originalPrice": 7590,
    "discountPercent": 11,
    "stock": 160,
    "stockStatus": "in_stock",
    "unit": "Kilo (Caja 20 kg aprox)",
    "weight": "Por Kilo",
    "origin": "Chile / Argentina",
    "rating": 4.9,
    "reviewCount": 89,
    "image": "productos/WhatsApp Image 2026-11-19 at 09.11.11.jpeg",
    "shortDescription": "Desde 1 caja $6.790 el kilo | Desde 60 kilos $6.490 el kilo. Sabor suave y elástico, fundido uniforme ideal para derretir.",
    "description": "Mozzarella de primera calidad gastronómica. Hebra elástica larga, dorado perfecto sin aceitar y aroma lácteo suave que realza cualquier preparación caliente.",
    "storage": "Mantener refrigerado entre 2°C y 6°C.",
    "wholesaleTiers": [
      {
        "minQty": 1,
        "price": 6790,
        "label": "Caja 20 kg ($6.790/kg)"
      },
      {
        "minQty": 60,
        "price": 6490,
        "label": "Desde 60 kg ($6.490/kg)"
      }
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isOffer": true,
    "tags": [
      "quesos",
      "mozzarella",
      "pampa cheese",
      "barra",
      "fundido"
    ]
  },
  {
    "id": "prod-queso-mozzarella-barra-1k",
    "slug": "queso-mozzarella-barra-1kg-sellada",
    "name": "Queso Mozzarella Barra Formato 1 kg (Caja 4 kg)",
    "brand": "Valle Lindo Select",
    "sku": "QUE-MOZZ-1K-CJ4",
    "category": "quesos",
    "categoryName": "Quesos",
    "subCategory": "Mozzarella",
    "price": 7990,
    "originalPrice": 8890,
    "discountPercent": 10,
    "stock": 120,
    "stockStatus": "in_stock",
    "unit": "Pieza 1 kg ($7.990) / Caja 4 kg ($31.160)",
    "weight": "1 kg / 4 kg",
    "origin": "Chile / 100% Leche Bovina",
    "rating": 4.8,
    "reviewCount": 64,
    "image": "productos/WhatsApp Image 2026-11-19 at 09.12.04.jpeg",
    "shortDescription": "Desde 1 kilo $7.990 | Caja de 4 kilos por $31.160 ($7.790/kg). 100% Leche bovina, libre de gluten, elasticidad superior.",
    "description": "Formato práctico de 1 kilo diseñado para rotación rápida sin mermas. Ideal para cafeterías, restaurantes medianos y preparaciones caseras de alto nivel.",
    "storage": "Refrigerado 2°C a 6°C.",
    "wholesaleTiers": [
      {
        "minQty": 1,
        "price": 7990,
        "label": "1 Kilo ($7.990)"
      },
      {
        "minQty": 4,
        "price": 7790,
        "label": "Caja 4 kg ($31.160 total)"
      }
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isOffer": false,
    "tags": [
      "quesos",
      "mozzarella 1kg",
      "caja 4kg",
      "derretir",
      "pizzas"
    ]
  },
  {
    "id": "prod-queso-granulado-2k",
    "slug": "queso-granulado-pampa-cheese-bolsa-2kg",
    "name": "Queso Granulado Hebras Bolsa 2 kg (Pampa Cheese)",
    "brand": "Pampa Cheese",
    "sku": "QUE-GRAN-2K",
    "category": "pizzeria",
    "categoryName": "Productos para Pizzería",
    "subCategory": "Mozzarella",
    "price": 6690,
    "originalPrice": 7490,
    "discountPercent": 11,
    "stock": 140,
    "stockStatus": "in_stock",
    "unit": "Kilo (Bolsa de 2 kg a $13.380)",
    "weight": "2 kg",
    "origin": "Chile / Argentina",
    "rating": 5.0,
    "reviewCount": 96,
    "image": "productos/WhatsApp Image 2026-11-19 at 09.12.53.jpeg",
    "shortDescription": "Por bolsa 2 kg: $6.690/kg | Caja 20 kg: $5.990/kg | Desde 80 kg: $5.690/kg. Más sabor y mejor rendimiento para hornos.",
    "description": "Queso granulado suelto IQF. Ahorra mano de obra y tiempo en cocina: se esparce de forma pareja sobre pizzas, lasañas y gratinados sin aglomerarse.",
    "storage": "Mantener refrigerado o congelado.",
    "wholesaleTiers": [
      {
        "minQty": 2,
        "price": 6690,
        "label": "Bolsa 2 kg ($6.690/kg)"
      },
      {
        "minQty": 20,
        "price": 5990,
        "label": "Caja 20 kg (10 bolsas a $5.990/kg)"
      },
      {
        "minQty": 80,
        "price": 5690,
        "label": "Desde 4 cajas / 80 kg ($5.690/kg)"
      }
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isOffer": true,
    "tags": [
      "quesos",
      "granulado",
      "rallado",
      "pizzas",
      "pampa cheese"
    ]
  },
  {
    "id": "prod-queso-gouda-sucedaneo-barra",
    "slug": "queso-gouda-sucedaneo-la-gogaive-barra",
    "name": "Queso Gouda Sucedáneo Económico (La Gogaive Barra 3.2 kg)",
    "brand": "La Gogaive",
    "sku": "QUE-GOUDA-SUC-32K",
    "category": "quesos",
    "categoryName": "Quesos",
    "subCategory": "Sucedáneos",
    "price": 5490,
    "originalPrice": 6290,
    "discountPercent": 13,
    "stock": 110,
    "stockStatus": "in_stock",
    "unit": "Kilo (Barra aprox 3.2 kg)",
    "weight": "3.2 kg aprox.",
    "origin": "Chile",
    "rating": 4.8,
    "reviewCount": 51,
    "image": "productos/WhatsApp Image 2026-11-19 at 09.13.51.jpeg",
    "shortDescription": "Precio desde 1 kilo $5.490 el kilo. Barra de aprox 3.2 kg. Sabor suave y cremoso, sin colorantes artificiales, ideal para maximizar margen.",
    "description": "Producto lácteo sabor Gouda de óptimo rendimiento culinario. Funde rápido y homogéneo con un costo por kilo sumamente competitivo para locales de alto volumen.",
    "storage": "Mantener refrigerado entre 2°C y 6°C.",
    "wholesaleTiers": [
      {
        "minQty": 1,
        "price": 5490,
        "label": "Por Kilo ($5.490)"
      },
      {
        "minQty": 20,
        "price": 5190,
        "label": "20+ kg ($5.190)"
      }
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isOffer": true,
    "tags": [
      "quesos",
      "gouda sucedaneo",
      "economico",
      "la gogaive",
      "barra"
    ]
  },
  {
    "id": "prod-natillas-santa-barbara",
    "slug": "natillas-cremosas-dulce-santa-barbara",
    "name": "Natillas Tradicionales Venezolanas (Santa Bárbara R&C)",
    "brand": "Santa Bárbara R&C",
    "sku": "LAC-NAT-SB",
    "category": "quesos",
    "categoryName": "Quesos",
    "subCategory": "Lácteos Dulces",
    "price": 1990,
    "originalPrice": 2490,
    "discountPercent": 20,
    "stock": 160,
    "stockStatus": "in_stock",
    "unit": "250g ($1.990) / 500g ($3.190)",
    "weight": "250g / 500g",
    "origin": "Venezuela",
    "rating": 5.0,
    "reviewCount": 82,
    "image": "productos/WhatsApp Image 2026-11-19 at 09.14.39.jpeg",
    "shortDescription": "Presentación 250g $1.990 | Presentación 500g $3.190. 100% Leche bovina, suave, cremosa y deliciosa, libre de gluten. ¡El postre que todos aman!",
    "description": "Postre lácteo artesanal tradicional elaborado con pura leche entera de vaca. Su textura aterciopelada y sabor dulce natural lo convierten en el complemento favorito de niños y adultos.",
    "storage": "Mantener refrigerado 2°C a 6°C.",
    "wholesaleTiers": [
      {
        "minQty": 1,
        "price": 1990,
        "label": "Pote 250g ($1.990)"
      },
      {
        "minQty": 1,
        "price": 3190,
        "label": "Pote 500g ($3.190)"
      },
      {
        "minQty": 12,
        "price": 2890,
        "label": "Docena 500g ($2.890 c/u)"
      }
    ],
    "isFeatured": true,
    "isBestSeller": false,
    "isOffer": true,
    "tags": [
      "lacteos",
      "natillas",
      "postre",
      "venezolano",
      "dulce de leche"
    ]
  },
  {
    "id": "prod-suero-criollo-santa-barbara",
    "slug": "suero-criollo-cremoso-santa-barbara",
    "name": "Suero Criollo Cremoso Llanero (Santa Bárbara R&C 500ml)",
    "brand": "Santa Bárbara R&C",
    "sku": "LAC-SUERO-500",
    "category": "quesos",
    "categoryName": "Quesos",
    "subCategory": "Sueros",
    "price": 2190,
    "originalPrice": 2690,
    "discountPercent": 19,
    "stock": 180,
    "stockStatus": "in_stock",
    "unit": "Normal 500ml ($2.190) / Picante 500ml ($2.390)",
    "weight": "500 ml",
    "origin": "Venezuela",
    "rating": 5.0,
    "reviewCount": 129,
    "image": "productos/WhatsApp Image 2026-11-19 at 09.15.05.jpeg",
    "shortDescription": "Suero Normal Cremoso 500ml: $2.190 | Suero Picante Cremoso 500ml: $2.390. 100% leche bovina, libre de gluten, textura cremosa ideal para arepas.",
    "description": "El auténtico suero de leche llanero pasteurizado. De acidez equilibrada y cuerpo espeso, perfecto para acompañar arepas calientes, empanadas, yuca frita y tostones.",
    "storage": "Conservar refrigerado 2°C a 6°C.",
    "wholesaleTiers": [
      {
        "minQty": 1,
        "price": 2190,
        "label": "Normal 500ml ($2.190)"
      },
      {
        "minQty": 1,
        "price": 2390,
        "label": "Picante 500ml ($2.390)"
      },
      {
        "minQty": 12,
        "price": 1950,
        "label": "Caja 12 un. ($1.950 c/u)"
      }
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isOffer": false,
    "tags": [
      "lacteos",
      "suero",
      "suero criollo",
      "picante",
      "arepas"
    ]
  },
  {
    "id": "prod-mantequilla-santa-barbara",
    "slug": "mantequilla-con-sal-100-leche-santa-barbara",
    "name": "Mantequilla con Sal 100% Leche Bovina (Santa Bárbara 250g)",
    "brand": "Santa Bárbara R&C",
    "sku": "LAC-MANT-250",
    "category": "quesos",
    "categoryName": "Quesos",
    "subCategory": "Lácteos",
    "price": 2390,
    "originalPrice": 2890,
    "discountPercent": 17,
    "stock": 150,
    "stockStatus": "in_stock",
    "unit": "Pote 250g ($2.390 la unidad)",
    "weight": "250g",
    "origin": "Venezuela / Santa Bárbara",
    "rating": 4.9,
    "reviewCount": 71,
    "image": "productos/WhatsApp Image 2026-11-19 at 09.15.36.jpeg",
    "shortDescription": "Presentación 250 gramos $2.390 la unidad. 100% leche bovina, con sal, libre de gluten. Sabor auténtico que realza cada receta.",
    "description": "Mantequilla cremosa pura de leche entera con el toque exacto de sal. Textura suavemente untable a temperatura ambiente y aroma lácteo inigualable para panes, arepas y repostería.",
    "storage": "Mantener refrigerado 2°C a 6°C.",
    "wholesaleTiers": [
      {
        "minQty": 1,
        "price": 2390,
        "label": "Unidad 250g ($2.390)"
      },
      {
        "minQty": 12,
        "price": 2100,
        "label": "Pack 12 un. ($2.100 c/u)"
      }
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isOffer": true,
    "tags": [
      "lacteos",
      "mantequilla",
      "con sal",
      "santa barbara",
      "untable"
    ]
  },
  {
    "id": "prod-tequenos-artesanales-20u",
    "slug": "tequenos-queso-artesanales-20-unidades",
    "name": "Tequeños Artesanales de Queso (Bandeja 20 Unidades)",
    "brand": "Santa Bárbara R&C",
    "sku": "QUE-TEQ-20U",
    "category": "quesos",
    "categoryName": "Quesos",
    "subCategory": "Tequeños",
    "price": 6890,
    "originalPrice": 7990,
    "discountPercent": 14,
    "stock": 130,
    "stockStatus": "in_stock",
    "unit": "Paquete 20 unidades congeladas",
    "weight": "700g aprox.",
    "origin": "Venezuela / Chile",
    "rating": 5.0,
    "reviewCount": 160,
    "image": "productos/WhatsApp Image 2026-11-19 at 09.20.20.jpeg",
    "shortDescription": "Presentación 20 unidades por $6.890 el paquete. Crujientes por fuera, cremosos por dentro con generoso relleno de queso llanero. Listos para freír u hornear.",
    "description": "Los auténticos tequeños venezolanos elaborados con masa fina hojaldrada y un bloque entero de queso llanero fundente. Ideales para fiestas, cócteles, eventos y venta rápida en locales gastronómicos.",
    "storage": "Mantener congelado a -18°C.",
    "wholesaleTiers": [
      {
        "minQty": 1,
        "price": 6890,
        "label": "1 a 4 paquetes ($6.890)"
      },
      {
        "minQty": 5,
        "price": 6490,
        "label": "5 a 19 paq. ($6.490 c/u)"
      },
      {
        "minQty": 20,
        "price": 5990,
        "label": "20+ paq. mayorista ($5.990 c/u)"
      }
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isOffer": true,
    "tags": [
      "tequeños",
      "pasapalos",
      "queso llanero",
      "congelados",
      "fiesta"
    ]
  },
  {
    "id": "prod-convenio-comercial-spa",
    "slug": "convenio-comercial-b2b-distribucion",
    "name": "Convenio Comercial B2B & Despacho a Todo Chile SpA",
    "brand": "Comercializadora Valle Lindo SpA",
    "sku": "B2B-CONVENIO-NAC",
    "category": "quesos",
    "categoryName": "Quesos",
    "subCategory": "Institucional",
    "price": 0,
    "originalPrice": 0,
    "discountPercent": 0,
    "stock": 999,
    "stockStatus": "in_stock",
    "unit": "Línea de crédito mayorista y factura electrónica",
    "weight": "Servicio Corporativo",
    "origin": "Chile / Banco Santander SpA",
    "rating": 5.0,
    "reviewCount": 95,
    "image": "productos/WhatsApp Image 2026-11-19 at 09.31.56.jpeg",
    "shortDescription": "Comercializadora Valle Lindo SpA (RUT 77.891.571-5). Cuenta corriente Banco Santander, facturación inmediata y logística refrigerada con envíos a todo Chile.",
    "description": "Inscribe tu empresa, restaurante o minimarket para obtener tarifas preferenciales por volumen, convenios de pago y abastecimiento calendarizado semanal.",
    "storage": "Atención personalizada vía WhatsApp +56 9 8790 7981.",
    "wholesaleTiers": [
      {
        "minQty": 1,
        "price": 0,
        "label": "Apertura Gratuita"
      }
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isOffer": false,
    "tags": [
      "b2b",
      "facturacion",
      "convenio",
      "valle lindo spa",
      "santander"
    ]
  },
  {
    "id": "prod-salame-preferida-16k",
    "slug": "salame-premium-la-preferida-1-6kg",
    "name": "Salame Premium Curación Natural (La Preferida 1.6 kg)",
    "brand": "La Preferida",
    "sku": "PIZ-SALAME-16K",
    "category": "pizzeria",
    "categoryName": "Productos para Pizzería",
    "subCategory": "Fiambres Pizza",
    "price": 15990,
    "originalPrice": 17990,
    "discountPercent": 11,
    "stock": 70,
    "stockStatus": "in_stock",
    "unit": "Paquete 1.6 kg ($15.990 c/u)",
    "weight": "1.6 kg",
    "origin": "Chile / La Preferida",
    "rating": 5.0,
    "reviewCount": 59,
    "image": "productos/WhatsApp Image 2026-11-19 at 09.19.03.jpeg",
    "shortDescription": "Presentación 1.6 kilos $15.990 el paquete | Desde 5 paquetes $15.490 c/u. Carne de cerdo seleccionada con curación natural, sabor intenso y especiado.",
    "description": "Salame madurado de perfil gourmet. Su condimentación tradicional y textura compacta permiten un laminado perfecto sin roturas, otorgando un aroma cautivador en pizzas horneadas.",
    "storage": "Mantener refrigerado entre 2°C y 6°C.",
    "wholesaleTiers": [
      {
        "minQty": 1,
        "price": 15990,
        "label": "1 a 4 paquetes ($15.990)"
      },
      {
        "minQty": 5,
        "price": 15490,
        "label": "5+ paquetes ($15.490 c/u)"
      }
    ],
    "isFeatured": true,
    "isBestSeller": false,
    "isOffer": true,
    "tags": [
      "pizzeria",
      "salame",
      "la preferida",
      "embutidos",
      "pizza gourmet"
    ]
  },
  {
    "id": "prod-pepperoni-premium-850g",
    "slug": "pepperoni-artesanal-madurado-850g",
    "name": "Pepperoni Maduro Artesanal Pizza Especial (850 g)",
    "brand": "Valle Lindo Select",
    "sku": "PIZ-PEPP-ART-850",
    "category": "pizzeria",
    "categoryName": "Productos para Pizzería",
    "subCategory": "Fiambres Pizza",
    "price": 10990,
    "originalPrice": 12490,
    "discountPercent": 12,
    "stock": 85,
    "stockStatus": "in_stock",
    "unit": "Bolsa 850 gramos",
    "weight": "850 g",
    "origin": "Chile",
    "rating": 4.9,
    "reviewCount": 77,
    "image": "productos/WhatsApp Image 2026-11-19 at 09.19.42.jpeg",
    "shortDescription": "Presentación 850 gramos $10.990 el paquete. Carne de cerdo premium seleccionada, naturalmente madurado con sabor intenso y ligeramente picante.",
    "description": "El ingrediente insignia para pizzerías americanas y artesanales. Al hornearse forma el clásico tostado en los bordes con un desprendimiento controlado de aceites aromáticos.",
    "storage": "Mantener refrigerado entre 2°C y 6°C.",
    "wholesaleTiers": [
      {
        "minQty": 1,
        "price": 10990,
        "label": "1 a 2 bolsas ($10.990)"
      },
      {
        "minQty": 3,
        "price": 10290,
        "label": "Desde 3 bolsas ($10.290)"
      }
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isOffer": false,
    "tags": [
      "pizzeria",
      "pepperoni",
      "pizza",
      "insumos pizza",
      "picante"
    ]
  },
  {
    "id": "prod-kit-pizzerias-asesoria",
    "slug": "kit-especial-abastecimiento-pizzerias",
    "name": "Catálogo & Asesoría Especial para Pizzerías y Emprendedores",
    "brand": "Valle Lindo Pizzerías",
    "sku": "PIZ-KIT-ASESOR",
    "category": "pizzeria",
    "categoryName": "Productos para Pizzería",
    "subCategory": "Institucional",
    "price": 0,
    "originalPrice": 0,
    "discountPercent": 0,
    "stock": 999,
    "stockStatus": "in_stock",
    "unit": "Catálogo especializado pizzerías & degustación técnica",
    "weight": "Digital / Presencial",
    "origin": "Chile",
    "rating": 5.0,
    "reviewCount": 88,
    "image": "productos/WhatsApp Image 2026-11-19 at 09.27.04.jpeg",
    "shortDescription": "¡Los mejores ingredientes para el sabor que tus clientes merecen! Distribución especializada para pizzerías, restaurantes y emprendedores con abastecimiento confiable.",
    "description": "Solicita cotizaciones por volumen de queso mozzarella, salsas base, harinas, fiambres y condimentos con despacho programado directo a tu local.",
    "storage": "Contacto directo vía WhatsApp +56 9 8790 7981.",
    "wholesaleTiers": [
      {
        "minQty": 1,
        "price": 0,
        "label": "Asesoría Gratuita"
      }
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isOffer": false,
    "tags": [
      "pizzeria",
      "asesoria",
      "abastecimiento",
      "mozzarella",
      "restaurantes"
    ]
  },
  {
    "id": "prod-mozzarella-pampa-cheese-pizza",
    "slug": "queso-mozzarella-pampa-cheese-especial-pizza",
    "name": "Queso Mozzarella Pampa Cheese Especial Pizzería (Por Kilo)",
    "brand": "Pampa Cheese",
    "sku": "PIZ-MOZZ-PAMPA",
    "category": "pizzeria",
    "categoryName": "Productos para Pizzería",
    "subCategory": "Quesos Pizza",
    "price": 6790,
    "originalPrice": 7590,
    "discountPercent": 11,
    "stock": 220,
    "stockStatus": "in_stock",
    "unit": "Kilo (Precio por kilo en barra)",
    "weight": "Por Kilo",
    "origin": "Chile / Formato Gastronómico",
    "rating": 5.0,
    "reviewCount": 145,
    "image": "productos/WhatsApp Image 2026-11-19 at 09.27.39.jpeg",
    "shortDescription": "Precio por kilo $6.790 | Desde 40 kilos $6.490/kg. Excelente fundido, sabor suave y textura elástica ideal para pizzas artesanales.",
    "description": "La mozzarella preferida por maestros pizzeros. Logra un hilo elástico largo y continuo, soporta temperaturas sobre 350°C en hornos a leña o piedra y dora de manera uniforme sin quemarse ni secarse.",
    "storage": "Mantener refrigerado entre 2°C y 6°C.",
    "wholesaleTiers": [
      {
        "minQty": 1,
        "price": 6790,
        "label": "1 a 39 kg ($6.790/kg)"
      },
      {
        "minQty": 40,
        "price": 6490,
        "label": "Desde 40 kg ($6.490/kg)"
      }
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isOffer": true,
    "tags": [
      "pizzeria",
      "mozzarella pizza",
      "pampa cheese",
      "fundido",
      "horno leña"
    ]
  },
  {
    "id": "prod-mozzarella-president-pizza",
    "slug": "queso-mozzarella-president-gourmet-pizza",
    "name": "Queso Mozzarella Président Gourmet Especial Pizzería (Por Kilo)",
    "brand": "Président",
    "sku": "PIZ-MOZZ-PRESID",
    "category": "pizzeria",
    "categoryName": "Productos para Pizzería",
    "subCategory": "Quesos Pizza",
    "price": 6980,
    "originalPrice": 7790,
    "discountPercent": 10,
    "stock": 190,
    "stockStatus": "in_stock",
    "unit": "Kilo en barra gastronómica",
    "weight": "Por Kilo",
    "origin": "Lactalis / Francia - Chile",
    "rating": 5.0,
    "reviewCount": 118,
    "image": "productos/WhatsApp Image 2026-11-19 at 09.28.08.jpeg",
    "shortDescription": "Precio por kilo $6.980 | Desde 40 kilos $6.680/kg. Calidad europea superior, fundido cremoso de elasticidad legendaria para pizzas gourmet.",
    "description": "Elaborada bajo estándares internacionales de Président. Proporciona una cobertura lechosa sedosa con un dorado apetitoso y cero desprendimiento acuoso sobre la masa.",
    "storage": "Mantener refrigerado entre 2°C y 6°C.",
    "wholesaleTiers": [
      {
        "minQty": 1,
        "price": 6980,
        "label": "1 a 39 kg ($6.980/kg)"
      },
      {
        "minQty": 40,
        "price": 6680,
        "label": "Desde 40 kg ($6.680/kg)"
      }
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isOffer": false,
    "tags": [
      "pizzeria",
      "mozzarella president",
      "president",
      "gourmet",
      "pizzas artesanales"
    ]
  },
  {
    "id": "prod-queso-granulado-pizza-2k",
    "slug": "queso-granulado-especial-pizza-bolsa-2kg",
    "name": "Queso Granulado Especial Pizzería (Bolsa 2 kg / Caja 20 kg)",
    "brand": "Valle Lindo Select",
    "sku": "PIZ-GRAN-2K",
    "category": "pizzeria",
    "categoryName": "Productos para Pizzería",
    "subCategory": "Quesos Pizza",
    "price": 6690,
    "originalPrice": 7490,
    "discountPercent": 11,
    "stock": 170,
    "stockStatus": "in_stock",
    "unit": "Kilo (Bolsa 2 kg a $13.380)",
    "weight": "2 kg",
    "origin": "Chile",
    "rating": 4.9,
    "reviewCount": 94,
    "image": "productos/WhatsApp Image 2026-11-19 at 09.28.32.jpeg",
    "shortDescription": "Por bolsa 2 kg: $6.690/kg | Caja 20 kg (10 bolsas de 2 kg): $5.990/kg | Desde 80 kg (4 cajas): $5.690/kg. Formato gastronómico de máximo rendimiento.",
    "description": "Granulado fino libre de apelmazamiento. Agiliza el armado de pizzas en hora punta garantizando una distribución exacta por porción y reduciendo drásticamente las mermas.",
    "storage": "Mantener refrigerado 2°C a 6°C.",
    "wholesaleTiers": [
      {
        "minQty": 2,
        "price": 6690,
        "label": "Bolsa 2 kg ($6.690/kg)"
      },
      {
        "minQty": 20,
        "price": 5990,
        "label": "Caja 20 kg (10 bolsas a $5.990/kg)"
      },
      {
        "minQty": 80,
        "price": 5690,
        "label": "Desde 80 kg / 4 cajas ($5.690/kg)"
      }
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isOffer": true,
    "tags": [
      "pizzeria",
      "granulado",
      "queso pizza",
      "escala mayorista",
      "2kg"
    ]
  },
  {
    "id": "prod-gouda-sucedaneo-pizzeria",
    "slug": "queso-gouda-sucedaneo-especial-pizzerias",
    "name": "Queso Gouda Sucedáneo Especial Pizzerías (La Gogaive)",
    "brand": "La Gogaive",
    "sku": "PIZ-GOUDA-SUC",
    "category": "pizzeria",
    "categoryName": "Productos para Pizzería",
    "subCategory": "Quesos Pizza",
    "price": 5490,
    "originalPrice": 6190,
    "discountPercent": 11,
    "stock": 130,
    "stockStatus": "in_stock",
    "unit": "Por Kilo",
    "weight": "1 kg",
    "origin": "Chile",
    "rating": 4.8,
    "reviewCount": 44,
    "image": "productos/WhatsApp Image 2026-11-19 at 09.28.58.jpeg",
    "shortDescription": "Precio por kilo $5.490. Excelente rendimiento para pizzas económicas, empanadas y preparaciones de alto flujo gastronómico.",
    "description": "Alternativa de alta rentabilidad que asegura una textura fundida atractiva y buen dorado con el precio más accesible del mercado.",
    "storage": "Mantener refrigerado entre 2°C y 6°C.",
    "wholesaleTiers": [
      {
        "minQty": 1,
        "price": 5490,
        "label": "1 a 19 kg ($5.490)"
      },
      {
        "minQty": 20,
        "price": 5190,
        "label": "20+ kg ($5.190)"
      }
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isOffer": true,
    "tags": [
      "pizzeria",
      "gouda sucedaneo",
      "pizza economica",
      "la gogaive"
    ]
  },
  {
    "id": "prod-pepperoni-pf-850g",
    "slug": "pepperoni-pf-laminado-pizzeria-850g",
    "name": "Pepperoni Laminado Pizza Sabor Intenso (PF 850 g)",
    "brand": "PF Alimentos",
    "sku": "PIZ-PEPP-PF-850",
    "category": "pizzeria",
    "categoryName": "Productos para Pizzería",
    "subCategory": "Fiambres Pizza",
    "price": 10990,
    "originalPrice": 12490,
    "discountPercent": 12,
    "stock": 115,
    "stockStatus": "in_stock",
    "unit": "Bolsa 850 gramos sellada",
    "weight": "850 g",
    "origin": "Chile / PF Alimentos",
    "rating": 5.0,
    "reviewCount": 132,
    "image": "productos/WhatsApp Image 2026-11-19 at 09.29.35.jpeg",
    "shortDescription": "Precio por bolsa $10.990 | Desde 3 bolsas precio especial. Sabor ahumado irresistible, textura perfecta para pizzas gourmet.",
    "description": "El pepperoni más vendido en Chile de la marca PF. Rodajas calibradas listas para aplicar sobre el queso. No se encoge en exceso ni despide exceso de grasa.",
    "storage": "Mantener refrigerado 2°C a 5°C.",
    "wholesaleTiers": [
      {
        "minQty": 1,
        "price": 10990,
        "label": "1 a 2 bolsas ($10.990)"
      },
      {
        "minQty": 3,
        "price": 10490,
        "label": "Desde 3 bolsas ($10.490 c/u)"
      }
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isOffer": true,
    "tags": [
      "pizzeria",
      "pepperoni pf",
      "pf alimentos",
      "pizza pepperoni",
      "850g"
    ]
  },
  {
    "id": "prod-tocino-ahumado-molde-pizza",
    "slug": "tocino-ahumado-tipo-molde-pizzeria-kg",
    "name": "Tocino Ahumado Tipo Molde para Pizzería (Por Kilo)",
    "brand": "Valle Lindo Ahumados",
    "sku": "PIZ-TOC-MOLDE",
    "category": "pizzeria",
    "categoryName": "Productos para Pizzería",
    "subCategory": "Fiambres Pizza",
    "price": 6990,
    "originalPrice": 7990,
    "discountPercent": 13,
    "stock": 105,
    "stockStatus": "in_stock",
    "unit": "Kilo en barra molde ($6.990 el kilo)",
    "weight": "Por Kilo",
    "origin": "Chile",
    "rating": 4.9,
    "reviewCount": 68,
    "image": "productos/WhatsApp Image 2026-11-19 at 09.30.10.jpeg",
    "shortDescription": "Precio por kilo $6.990 | A partir de 5 kilos $6.590/kg. Ahumado natural, sabor intenso y delicioso, ideal para pizzas carbonara, fugazzetas y calzones.",
    "description": "Tocino de estructura compacta que rinde al máximo cortado en bastones o cuadritos crocantes sobre la masa. Alto contenido cárnico.",
    "storage": "Mantener refrigerado entre 2°C y 6°C.",
    "wholesaleTiers": [
      {
        "minQty": 1,
        "price": 6990,
        "label": "1 a 4 kg ($6.990/kg)"
      },
      {
        "minQty": 5,
        "price": 6590,
        "label": "Desde 5 kg ($6.590/kg)"
      }
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isOffer": true,
    "tags": [
      "pizzeria",
      "tocino pizza",
      "ahumado",
      "tipo molde",
      "topping"
    ]
  },
  {
    "id": "prod-salsa-tomate-pomarola-pizza",
    "slug": "salsa-tomate-pomarola-pizza-sauce-3kg-1kg",
    "name": "Salsa de Tomate Pomarola Pizza Sauce Lista (1 kg / 3 kg)",
    "brand": "Pomarola / Carozzi",
    "sku": "PIZ-SALSA-POM",
    "category": "pizzeria",
    "categoryName": "Productos para Pizzería",
    "subCategory": "Salsas Pizza",
    "price": 2990,
    "originalPrice": 3490,
    "discountPercent": 14,
    "stock": 210,
    "stockStatus": "in_stock",
    "unit": "Bolsa 1 kg ($2.990) / Bolsa 3 kg ($6.690)",
    "weight": "1 kg / 3 kg",
    "origin": "Chile / Carozzi",
    "rating": 5.0,
    "reviewCount": 160,
    "image": "productos/WhatsApp Image 2026-11-19 at 09.30.56.jpeg",
    "shortDescription": "Bolsa 1 kg: $2.990 | Bolsa 3 kg: $6.690 ($2.230/kg). Sabor casero y natural, lista para usar, textura y acidez calibrada para pizzas artesanales.",
    "description": "Salsa espesa elaborada con tomates maduros seleccionados, sin exceso de agua para evitar humedecer la masa en el horno. Se esparce con una sola pasada de cucharón.",
    "storage": "Conservar en lugar fresco y seco; una vez abierto, refrigerar.",
    "wholesaleTiers": [
      {
        "minQty": 1,
        "price": 2990,
        "label": "Bolsa 1 kg ($2.990)"
      },
      {
        "minQty": 1,
        "price": 6690,
        "label": "Bolsa 3 kg ($6.690 total / $2.230/kg)"
      },
      {
        "minQty": 5,
        "price": 6290,
        "label": "5+ bolsas 3 kg ($6.290 c/u)"
      }
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isOffer": true,
    "tags": [
      "pizzeria",
      "salsa de tomate",
      "pomarola",
      "pizza sauce",
      "3kg"
    ]
  },
  {
    "id": "prod-oregano-premium-bolsa",
    "slug": "oregano-seleccionado-premium-pizzerias",
    "name": "Orégano Seleccionado Premium Aromático (500 g / 1 kg)",
    "brand": "Valle Lindo Especias",
    "sku": "PIZ-OREG-PREM",
    "category": "pizzeria",
    "categoryName": "Productos para Pizzería",
    "subCategory": "Especias Pizza",
    "price": 3990,
    "originalPrice": 4690,
    "discountPercent": 15,
    "stock": 175,
    "stockStatus": "in_stock",
    "unit": "Bolsa 500g ($3.990) / Bolsa 1 kg ($6.990)",
    "weight": "500g / 1 kg",
    "origin": "Chile - Norte / Arica",
    "rating": 5.0,
    "reviewCount": 85,
    "image": "productos/WhatsApp Image 2026-11-19 at 09.31.19.jpeg",
    "shortDescription": "Presentación 500 gramos: $3.990 | Presentación 1 Kilo: $6.990. 100% natural, sin aditivos ni conservantes, calidad premium e intenso aroma.",
    "description": "Hojas seleccionadas secadas a la sombra para preservar sus aceites esenciales volátiles. Un aroma potente que despierta al contacto con el queso caliente de la pizza.",
    "storage": "Almacenar en lugar seco y oscuro bien cerrado.",
    "wholesaleTiers": [
      {
        "minQty": 1,
        "price": 3990,
        "label": "Bolsa 500g ($3.990)"
      },
      {
        "minQty": 1,
        "price": 6990,
        "label": "Bolsa 1 kg ($6.990)"
      },
      {
        "minQty": 5,
        "price": 6490,
        "label": "5+ kg ($6.490 c/u)"
      }
    ],
    "isFeatured": true,
    "isBestSeller": false,
    "isOffer": true,
    "tags": [
      "pizzeria",
      "oregano",
      "especias",
      "aromatico",
      "100% natural"
    ]
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
  if (val === 0) return "Cotizar";
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
  return `https://wa.me/56987907981?text=${encodeURIComponent(msg)}`;
}

// Renderizar tarjeta de producto (Alta Jerarquía Visual, Accesibilidad y Rendimiento)
function renderProductCard(p, isGrid = true) {
  const isFav = Cart.isWishlisted(p.id);
  const isFreeOrQuote = !p.price || p.price === 0;
  const tiersText = p.wholesaleTiers && p.wholesaleTiers.length > 1 && !isFreeOrQuote
    ? `<div class="mt-1.5 text-[10px] sm:text-[11px] text-emerald-900 bg-emerald-50/90 px-2 py-0.5 rounded-lg border border-emerald-200/80 flex items-center justify-between">
         <span class="truncate font-medium">Mayorista (${p.wholesaleTiers[1].minQty}+):</span>
         <strong class="text-emerald-700 ml-1 shrink-0 font-extrabold">${formatCLP(p.wholesaleTiers[1].price)}</strong>
       </div>`
    : '';

  const safeImg = encodeURI(p.image);

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
          src="${safeImg}" 
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
              ${isFreeOrQuote ? `
                <span class="text-base sm:text-xl font-black text-emerald-700 tracking-tight">Cotización Mayorista</span>
                <span class="text-[10px] text-gray-400 font-semibold">Atención B2B</span>
              ` : `
                <span class="text-lg sm:text-2xl font-black text-[#B71C1C] tracking-tight">${formatCLP(p.price)}</span>
                ${p.originalPrice > p.price ? `<span class="text-[11px] sm:text-xs text-neutral-400 line-through font-semibold">${formatCLP(p.originalPrice)}</span>` : ''}
              `}
            </div>
            ${tiersText}
          </div>
        </div>

        <div class="mt-3 space-y-1.5">
          ${isFreeOrQuote ? `
            <a 
              href="cotizacion.html?prod=${p.id}" 
              class="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white text-[11px] sm:text-xs font-black flex items-center justify-center gap-1.5 shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.97]"
              aria-label="Solicitar Cotización de ${p.name}"
            >
              <i data-lucide="file-text" class="w-3.5 h-3.5 shrink-0"></i>
              <span class="truncate">Solicitar Asesoría B2B</span>
            </a>
          ` : `
            <button 
              onclick="Cart.addItem('${p.id}', 1)" 
              class="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#B71C1C] to-[#991515] hover:from-[#A01818] hover:to-[#801010] text-white text-[11px] sm:text-xs font-black flex items-center justify-center gap-1.5 shadow-sm hover:shadow-md hover:shadow-red-900/20 transition-all duration-200 active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-[#B71C1C]"
              aria-label="Añadir ${p.name} al Carrito"
            >
              <i data-lucide="shopping-cart" class="w-3.5 h-3.5 shrink-0"></i>
              <span class="truncate">Añadir al Carrito</span>
            </button>
          `}

          <div class="grid grid-cols-2 gap-1.5">
            ${isFreeOrQuote ? `
              <a 
                href="catalogo_pizzerias_vallelindo.pdf" 
                target="_blank" 
                class="py-1.5 px-2 bg-neutral-900 hover:bg-black text-white text-[10px] sm:text-[11px] font-bold rounded-lg flex items-center justify-center gap-0.5 transition-all active:scale-[0.97] truncate shadow-xs" 
                title="Ver Catálogo PDF"
              >
                📄 PDF Oficial
              </a>
            ` : `
              <button 
                onclick="Cart.addItem('${p.id}', 1); window.location.href='checkout.html';" 
                class="py-1.5 px-2 bg-neutral-900 hover:bg-black text-white text-[10px] sm:text-[11px] font-bold rounded-lg flex items-center justify-center gap-0.5 transition-all active:scale-[0.97] truncate shadow-xs focus-visible:ring-2 focus-visible:ring-black" 
                title="Compra Rápida"
                aria-label="Compra rápida de ${p.name}"
              >
                ⚡ <span class="hidden sm:inline">Compra </span>Rápida
              </button>
            `}
            <a 
              href="https://wa.me/56987907981?text=${encodeURIComponent(`Hola Valle Lindo! Deseo consultar información y precio mayorista de: ${p.name} (SKU: ${p.sku})`)}" 
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
