import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import MobileBottomNav from "@/components/MobileBottomNav";

export const metadata: Metadata = {
  title: "Comercializadora Valle Lindo | Distribución Mayorista para Pizzerías, Carnes y Gastronomía",
  description: "Distribuidora mayorista y minorista especializada en quesos para pizzerías (Mozzarella, Palmita Río Grande), carnes premium de vacuno y cerdo, insumos gastronómicos y productos congelados con despacho rápido en todo Chile.",
  keywords: [
    "queso mozzarella para pizza",
    "insumos para pizzerias",
    "distribuidora de quesos",
    "carne al por mayor",
    "ingredientes para pizza",
    "distribuidor gastronomico chile",
    "queso palmita rio grande",
    "lomo vetado vacuno",
    "papas fritas congeladas por mayor",
    "pepperoni para pizza",
    "comercializadora valle lindo"
  ],
  authors: [{ name: "Comercializadora Valle Lindo SpA" }],
  creator: "Comercializadora Valle Lindo",
  openGraph: {
    title: "Comercializadora Valle Lindo | Quesos para Pizzerías y Carnes Mayoristas",
    description: "Todo lo que tu restaurante o pizzería necesita: Mozzarella, Palmita Río Grande, Carnes y Congelados con precios mayoristas y despacho express.",
    url: "https://comercializadoravallelindo.cl",
    siteName: "Comercializadora Valle Lindo",
    images: [
      {
        url: "/assets/branding/logo-valle-lindo.jpeg",
        width: 800,
        height: 800,
        alt: "Comercializadora Valle Lindo",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Comercializadora Valle Lindo | Distribuidora Mayorista Gastronómica",
    description: "Precios mayoristas directos en quesos, carnes y congelados con despacho en 24/48 hrs en Chile.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WholesaleStore",
    "name": "Comercializadora Valle Lindo",
    "description": "Distribuidora mayorista de carnes, quesos para pizzerías, insumos gastronómicos y congelados en Chile.",
    "url": "https://comercializadoravallelindo.cl",
    "telephone": "+56987654321",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Santiago",
      "addressRegion": "Región Metropolitana",
      "addressCountry": "CL"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "19:00"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Catálogo Mayorista Gastronómico",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Queso Palmita Río Grande 10 kg",
            "description": "Queso Palmita mayorista especial para locales de comida rápida y pizzerías."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Queso Mozzarella en Barra 3 kg",
            "description": "Queso mozzarella de alto rendimiento y elasticidad para pizzas al horno."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Lomo Vetado Vacuno Importado",
            "description": "Corte de carne de vacuno premium para restaurantes y parrilladas."
          }
        }
      ]
    }
  };

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F8F9FA] text-[#121212] antialiased">
        <CartProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <CartDrawer />
          <WhatsAppFloating />
          <MobileBottomNav />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
