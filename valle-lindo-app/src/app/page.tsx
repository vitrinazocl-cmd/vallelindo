"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  Flame, 
  Building2, 
  FileText, 
  Truck, 
  ShieldCheck, 
  RefreshCw, 
  MessageCircle, 
  Zap, 
  Download, 
  Star, 
  ChevronRight,
  TrendingUp,
  Percent,
  Sparkles
} from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS, CATEGORIES, WHOLESALE_BENEFITS, CLIENT_SEGMENTS } from "@/data/products";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<"todos" | "quesos" | "carnes" | "pizza">("todos");

  // Filtrar productos según tab
  const featuredProducts = PRODUCTS.filter((p) => {
    if (activeTab === "todos") return p.isFeatured;
    return (p.categories || [p.category]).includes(activeTab);
  });

  return (
    <div className="space-y-16 pb-16">
      {/* 1. HERO PRINCIPAL FULLSCREEN IMPACTANTE */}
      <section className="relative bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-[#250808] text-white overflow-hidden py-16 lg:py-24 border-b border-red-950">
        {/* Glow de fondo */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#B71C1C]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Textos del Hero */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-950/80 border border-red-800 text-red-300 text-xs font-bold tracking-wide animate-pulse">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Distribución Especializada • Venta Mayorista & Minorista</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
              Distribución Mayorista para{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-[#B71C1C] to-amber-500">
                Pizzerías y Gastronomía
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
              Todo lo que tu negocio necesita en un solo lugar. Quesos, carnes, embutidos, congelados e insumos con despacho rápido a todo Chile.
            </p>

            {/* Badges de atributos rápidos */}
            <div className="flex flex-wrap gap-4 text-xs font-semibold text-gray-300 pt-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Quesos Mozzarella & Palmita
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Carnes al por Mayor
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Factura Inmediata
              </div>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-3.5 pt-4">
              <Link
                href="/catalogo"
                className="px-8 py-4 bg-[#B71C1C] hover:bg-[#8E0000] text-white font-extrabold text-sm sm:text-base rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 hover:gap-3 group active:scale-95"
              >
                <span>Ver Catálogo Completo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/cotizacion"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm sm:text-base rounded-xl backdrop-blur-xs transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <FileText className="w-5 h-5 text-amber-400" />
                <span>Solicitar Cotización</span>
              </Link>
            </div>

            {/* Garantía */}
            <div className="pt-4 flex items-center gap-6 text-xs text-gray-400 border-t border-gray-800">
              <div className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-[#B71C1C]" />
                <span>Despacho 24/48 hrs</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Resolución Sanitaria</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>+500 Locales Clientes</span>
              </div>
            </div>
          </div>

          {/* Banner visual Card destacada con Video Oferta Relámpago */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-red-700/80 bg-[#1A1A1A] p-4 group">
              <div className="relative h-80 sm:h-[420px] w-full rounded-2xl overflow-hidden bg-black flex items-center justify-center">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  preload="auto"
                  poster="/assets/products/named/queso-llanero-artesanal-bloque.jpeg"
                  className="w-full h-full object-cover sm:object-contain rounded-2xl"
                  title="Oferta Relámpago Queso Llanero"
                >
                  <source src="/assets/videos/oferta-queso-llanero.mp4" type="video/mp4" />
                </video>
                <div className="absolute top-3 left-3 flex flex-col gap-1.5 pointer-events-none">
                  <span className="bg-[#B71C1C] text-white text-[11px] font-black px-3 py-1 rounded-full shadow-lg animate-pulse">
                    🌩️ OFERTA RELÁMPAGO
                  </span>
                </div>
              </div>

              {/* Mini card con precio mayorista oferta */}
              <div className="mt-4 p-4 rounded-xl bg-black/80 border border-gray-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-amber-400 font-extrabold uppercase tracking-wider block">
                    ¡Promoción Exclusiva Gastronomía!
                  </span>
                  <h3 className="text-sm font-black text-white">
                    Queso Llanero Artesanal
                  </h3>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-2xl font-black text-[#B71C1C]">
                      $7.990
                    </span>
                    <span className="text-xs text-gray-400 font-bold">el kilo</span>
                    <span className="text-xs text-gray-500 line-through">
                      $8.990
                    </span>
                  </div>
                  <div className="text-[11px] font-black text-amber-300 mt-0.5">
                    🧀 Pieza completa barra (~5 kg): $39.950
                  </div>
                </div>

                <a
                  href="https://wa.me/56987907981?text=Hola%20Valle%20Lindo!%20Deseo%20aprovechar%20la%20OFERTA%20REL%C3%81MPAGO%20del%20Queso%20Llanero%20a%20$7.990%20el%20kilo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-[#B71C1C] hover:bg-[#8E0000] text-white text-xs font-black rounded-xl shadow transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Pedir Oferta</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORÍAS DESTACADAS (TARJETAS VISUALES GRANDES) */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#B71C1C] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#B71C1C]" />
              Catálogo de Especialidad
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">
              Categorías Destacadas
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Selecciona el rubro de tu negocio para acceder a precios por volumen y formatos gastronómicos.
            </p>
          </div>

          <Link
            href="/catalogo"
            className="text-xs font-extrabold text-[#B71C1C] hover:underline flex items-center gap-1 self-start md:self-auto"
          >
            Ver todas las categorías <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/catalogo?cat=${cat.id}`}
              className="group bg-white rounded-2xl border border-gray-200 p-4 hover:border-[#B71C1C] hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-center"
            >
              <div className="relative w-full aspect-square rounded-xl bg-gray-50 overflow-hidden mb-3 border border-gray-100 flex items-center justify-center">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-contain p-2 group-hover:scale-110 transition-transform duration-300"
                />
                <span className="absolute top-2 right-2 text-lg drop-shadow">
                  {cat.icon}
                </span>
              </div>

              <div>
                <h3 className="text-sm font-extrabold text-gray-900 group-hover:text-[#B71C1C] transition-colors">
                  {cat.name}
                </h3>
                <p className="text-[11px] text-gray-400 mt-0.5 line-clamp-1">
                  {cat.subcategories.slice(0, 2).join(", ")}...
                </p>
              </div>

              <span className="mt-3 inline-flex items-center justify-center text-[11px] font-bold text-gray-600 group-hover:text-[#B71C1C]">
                Explorar <ChevronRight className="w-3 h-3 ml-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. PRODUCTOS DESTACADOS (CUADRÍCULA MODERNA CON BOTÓN AGREGAR Y COMPRA RÁPIDA) */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full mb-1">
              <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
              Más Pedidos por Pizzerías y Restaurantes
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
              Productos Destacados & Precios por Volumen
            </h2>
          </div>

          {/* Tabs filtros rápidos */}
          <div className="flex flex-wrap gap-1.5 bg-gray-100 p-1 rounded-xl text-xs font-semibold">
            <button
              onClick={() => setActiveTab("todos")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === "todos"
                  ? "bg-[#B71C1C] text-white shadow-xs"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              Todos los Destacados
            </button>
            <button
              onClick={() => setActiveTab("quesos")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === "quesos"
                  ? "bg-[#B71C1C] text-white shadow-xs"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              🧀 Quesos Pizzería
            </button>
            <button
              onClick={() => setActiveTab("pizza")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === "pizza"
                  ? "bg-[#B71C1C] text-white shadow-xs"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              🍕 Insumos Pizza
            </button>
            <button
              onClick={() => setActiveTab("carnes")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === "carnes"
                  ? "bg-[#B71C1C] text-white shadow-xs"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              🥩 Carnes
            </button>
          </div>
        </div>

        {/* Grid de productos (2 Columnas en móvil para máxima usabilidad) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-5">
          {featuredProducts.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/catalogo"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gray-900 hover:bg-black text-white text-xs sm:text-sm font-extrabold rounded-xl shadow-md transition-all active:scale-95"
          >
            <span>Ver Catálogo Completo con Filtros y Buscador</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 4. VENTAJAS COMPETITIVAS (SECCIÓN CON ICONOS) */}
      <section className="bg-white py-14 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#B71C1C] uppercase tracking-wider">
              ¿Por qué elegir Valle Lindo?
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">
              Ventajas Competitivas para tu Cocina
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Nos convertimos en el socio estratégico de abastecimiento para que tu negocio crezca con margen y puntualidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHOLESALE_BENEFITS.map((benefit, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-gray-50 hover:bg-white border border-gray-200 hover:border-[#B71C1C]/40 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-red-50 text-[#B71C1C] group-hover:bg-[#B71C1C] group-hover:text-white transition-colors flex items-center justify-center font-bold mb-4 shadow-xs">
                  {i === 0 && <Truck className="w-6 h-6" />}
                  {i === 1 && <Building2 className="w-6 h-6" />}
                  {i === 2 && <RefreshCw className="w-6 h-6" />}
                  {i === 3 && <FileText className="w-6 h-6" />}
                  {i === 4 && <MessageCircle className="w-6 h-6" />}
                  {i === 5 && <Zap className="w-6 h-6" />}
                </div>
                <h3 className="text-base font-extrabold text-gray-900 mb-1">
                  ✅ {benefit.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SECCIÓN EMPRESAS ORIENTADA A PIZZERÍAS, RESTAURANTES, CASINOS, FOOD TRUCKS */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="rounded-3xl bg-gradient-to-r from-gray-900 via-[#1E1E1E] to-[#250808] text-white p-8 sm:p-12 border border-gray-800 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950 text-red-300 text-xs font-bold border border-red-800">
                <Building2 className="w-3.5 h-3.5" /> Canal Empresas y Locales Gastronómicos
              </span>

              <h2 className="text-2xl sm:text-4xl font-black leading-tight text-white">
                ¿Tienes una Pizzería, Restaurante, Casino o Food Truck?
              </h2>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Accede a tarifas por volumen cerrado, cuenta corriente comercial para clientes frecuentes, facturación electrónica automática y despachos en horarios previos a la apertura de tu local.
              </p>

              {/* Segmentos */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {CLIENT_SEGMENTS.map((seg, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-[10px] font-bold text-amber-400">{seg.badge}</div>
                    <div className="text-xs font-extrabold text-white mt-0.5">{seg.title}</div>
                    <div className="text-[11px] text-gray-300 mt-0.5">{seg.discount}</div>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/cotizacion"
                  className="px-6 py-3.5 bg-[#B71C1C] hover:bg-[#8E0000] text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>Solicitar precio mayorista</span>
                </Link>

                <a
                  href="https://wa.me/56987907981?text=Hola%20Valle%20Lindo,%20tengo%20un%20local%20gastron%C3%B3mico%20y%20deseo%20solicitar%20precios%20mayoristas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Hablar con Ejecutivo B2B</span>
                </a>
              </div>
            </div>

            {/* Preview visual del Catálogo descargable */}
            <div className="lg:col-span-5 bg-black/60 rounded-2xl p-6 border border-white/10 space-y-4">
              <h3 className="font-extrabold text-base text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#B71C1C]" />
                Catálogos Oficiales 2026
              </h3>
              <p className="text-xs text-gray-300">
                Descarga nuestras guías completas con especificaciones técnicas, rendimientos por kilo y tablas de gramaje.
              </p>

              <div className="space-y-2.5">
                <Link
                  href="/downloads/catalogo_pizzerias_vallelindo.pdf"
                  target="_blank"
                  className="w-full p-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 flex items-center justify-between text-xs font-bold transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-red-900/50 flex items-center justify-center text-red-400">
                      PDF
                    </div>
                    <div>
                      <div className="text-white">Catálogo Pizzerías Valle Lindo</div>
                      <div className="text-[10px] text-gray-400 font-normal">10 páginas de insumos especializados</div>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-gray-400 group-hover:text-white" />
                </Link>

                <Link
                  href="/downloads/catalogo_general_2026.pdf"
                  target="_blank"
                  className="w-full p-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 flex items-center justify-between text-xs font-bold transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-red-900/50 flex items-center justify-center text-red-400">
                      PDF
                    </div>
                    <div>
                      <div className="text-white">Catálogo Carnes y General 2026</div>
                      <div className="text-[10px] text-gray-400 font-normal">15 páginas con cortes y congelados</div>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-gray-400 group-hover:text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
