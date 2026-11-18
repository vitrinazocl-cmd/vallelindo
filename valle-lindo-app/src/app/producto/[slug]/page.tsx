"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  Star, 
  ShoppingCart, 
  Heart, 
  MessageCircle, 
  Truck, 
  ShieldCheck, 
  RefreshCw, 
  FileCheck, 
  Check, 
  Minus, 
  Plus, 
  ArrowLeft, 
  ChevronRight,
  TrendingDown,
  Building2,
  Share2,
  AlertCircle
} from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const { addToCart, isInWishlist, toggleWishlist, setIsCartOpen } = useCart();
  const [selectedImage, setSelectedImage] = useState<string>(product.image);
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<"descripcion" | "ingredientes" | "conservacion" | "nutricion" | "opiniones">("descripcion");
  const [isAddedFeedback, setIsAddedFeedback] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const isFavorite = isInWishlist(product.id);

  // Calcular precio según tramo
  const getCurrentUnitPrice = (qty: number) => {
    if (!product.wholesaleTiers || product.wholesaleTiers.length === 0) {
      return product.price;
    }
    const tiers = [...product.wholesaleTiers].sort((a, b) => b.minQty - a.minQty);
    for (const t of tiers) {
      if (qty >= t.minQty) return t.price;
    }
    return product.price;
  };

  const currentUnitPrice = getCurrentUnitPrice(quantity);
  const currentTotal = currentUnitPrice * quantity;
  const totalSavings = Math.max(0, (product.originalPrice - currentUnitPrice) * quantity);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsAddedFeedback(true);
    setTimeout(() => setIsAddedFeedback(false), 1500);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    setIsCartOpen(true);
  };

  // WhatsApp dinámico con SKU y Precio
  const whatsappUrl = `https://wa.me/56987654321?text=${encodeURIComponent(
    `Hola Comercializadora Valle Lindo! Deseo cotizar/comprar:\n\n*Producto:* ${product.name}\n*SKU:* ${product.sku}\n*Precio Base:* $${product.price.toLocaleString("es-CL")}\n*Cantidad deseada:* ${quantity} unidades\n*Total estimado:* $${currentTotal.toLocaleString("es-CL")}\n\n¿Tienen despacho para mi comuna y factura inmediata?`
  )}`;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Mira ${product.name} en Comercializadora Valle Lindo`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  // Productos relacionados de la misma categoría o rubro
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-10">
      {/* Breadcrumb de navegación */}
      <nav className="flex items-center gap-2 text-xs text-gray-500">
        <Link href="/" className="hover:text-black">Inicio</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href="/catalogo" className="hover:text-black">Catálogo</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href={`/catalogo?cat=${product.category}`} className="hover:text-[#B71C1C] font-semibold">
          {product.categoryName}
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-gray-900 font-bold truncate max-w-xs">{product.name}</span>
      </nav>

      {/* BLOQUE PRINCIPAL FICHA ESTILO AMAZON / MERCADO LIBRE EMPRESAS */}
      <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* COLUMNA 1: GALERÍA DE FOTOS CON ZOOM (5 Columnas) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Imagen principal con efecto zoom */}
          <div className="relative aspect-square w-full rounded-2xl bg-gray-50 border border-gray-200 overflow-hidden group">
            <Image
              src={selectedImage}
              alt={product.name}
              fill
              className="object-contain p-6 group-hover:scale-110 transition-transform duration-300"
              priority
            />
            {product.discountPercent && (
              <span className="absolute top-4 left-4 bg-[#2E7D32] text-white text-xs font-black px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                <TrendingDown className="w-3.5 h-3.5" /> -{product.discountPercent}% OFF
              </span>
            )}
            <button
              onClick={() => toggleWishlist(product.id)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/90 shadow hover:bg-white text-gray-400 hover:text-[#B71C1C] transition-colors"
              title="Guardar en favoritos"
            >
              <Heart className={`w-5 h-5 ${isFavorite ? "fill-[#B71C1C] text-[#B71C1C]" : ""}`} />
            </button>
          </div>

          {/* Miniaturas de la galería */}
          <div className="flex gap-2.5 overflow-x-auto pb-1">
            {product.galleryImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(img)}
                className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 bg-gray-50 shrink-0 transition-all ${
                  selectedImage === img ? "border-[#B71C1C] ring-2 ring-red-100" : "border-gray-200 opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={img}
                  alt={`${product.name} - miniatura ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>

          {/* Compartir producto */}
          <div className="flex items-center justify-between pt-2 text-xs text-gray-500 border-t border-gray-100">
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 hover:text-black font-semibold transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{isCopied ? "¡Enlace copiado!" : "Compartir este producto"}</span>
            </button>
            <span className="text-gray-400">Origen: {product.origin}</span>
          </div>
        </div>

        {/* COLUMNA 2: DETALLES, PRECIOS, ESCALA MAYORISTA (7 Columnas) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Header Producto */}
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 mb-1">
              <span className="font-extrabold text-[#B71C1C] uppercase tracking-wider">{product.brand}</span>
              <span>•</span>
              <span className="font-mono bg-gray-100 px-2 py-0.5 rounded font-bold text-gray-700">
                SKU: {product.sku}
              </span>
              <span>•</span>
              <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">
                ✅ Stock Disponible ({product.stock} unidades)
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight leading-tight">
              {product.name}
            </h1>

            {/* Opiniones y valoración */}
            <div className="flex items-center gap-3 mt-2 text-xs">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500" />
                ))}
                <span className="font-extrabold text-gray-900 ml-1.5">{product.rating}</span>
              </div>
              <span className="text-gray-400">|</span>
              <a href="#opiniones" onClick={() => setActiveTab("opiniones")} className="text-gray-600 hover:text-[#B71C1C] underline font-medium">
                {product.reviewCount} opiniones de clientes B2B
              </a>
            </div>
          </div>

          {/* Ficha técnica compacta */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-200 text-xs">
            <div>
              <span className="text-gray-400 block text-[10px] uppercase font-bold">Contenido</span>
              <span className="font-bold text-gray-800">{product.unit}</span>
            </div>
            <div>
              <span className="text-gray-400 block text-[10px] uppercase font-bold">Peso Neto</span>
              <span className="font-bold text-gray-800">{product.weight}</span>
            </div>
            <div>
              <span className="text-gray-400 block text-[10px] uppercase font-bold">Procedencia</span>
              <span className="font-bold text-gray-800">{product.origin}</span>
            </div>
            <div>
              <span className="text-gray-400 block text-[10px] uppercase font-bold">Tipo Venta</span>
              <span className="font-bold text-[#B71C1C]">Mayorista / Detal</span>
            </div>
          </div>

          {/* PRECIO ACTUAL Y DESCUENTO */}
          <div className="p-4 rounded-2xl bg-red-50/50 border border-red-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                Precio Unitario Base (1 unidad):
              </div>
              <div className="flex items-baseline gap-3 mt-0.5">
                <span className="text-3xl font-black text-[#B71C1C]">
                  ${product.price.toLocaleString("es-CL")}
                </span>
                {product.originalPrice > product.price && (
                  <span className="text-sm text-gray-400 line-through">
                    ${product.originalPrice.toLocaleString("es-CL")}
                  </span>
                )}
                {product.discountPercent && (
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                    Ahorras ${(product.originalPrice - product.price).toLocaleString("es-CL")}
                  </span>
                )}
              </div>
              <span className="text-[11px] text-gray-500 mt-1 block">
                Valores con IVA incluido • Emitimos Factura y Boleta Electrónica
              </span>
            </div>

            <div className="text-right sm:border-l sm:border-red-200 sm:pl-4">
              <span className="text-[11px] font-bold text-emerald-800 block">
                🚚 Despacho Inmediato
              </span>
              <span className="text-[11px] text-gray-600">
                Entrega en 24 a 48 hrs en RM y Regiones
              </span>
            </div>
          </div>

          {/* TABLA DE PRECIOS POR CANTIDAD (ESCALA MAYORISTA SOLICITADA) */}
          {product.wholesaleTiers && product.wholesaleTiers.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-gray-800">
                <span className="flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-[#B71C1C]" />
                  Tabla de Precios por Cantidad (Escala Mayorista):
                </span>
                <span className="text-[11px] text-emerald-700 font-semibold">
                  ¡Ahorro automático al subir cantidad!
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {product.wholesaleTiers.map((tier, idx) => {
                  const isCurrentActiveTier =
                    quantity >= tier.minQty &&
                    (idx === product.wholesaleTiers.length - 1 || quantity < product.wholesaleTiers[idx + 1].minQty);

                  return (
                    <div
                      key={idx}
                      onClick={() => setQuantity(tier.minQty)}
                      className={`p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                        isCurrentActiveTier
                          ? "bg-red-50 border-[#B71C1C] ring-2 ring-red-200"
                          : "bg-white border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex justify-between items-center text-gray-500 text-[11px] font-semibold">
                        <span>{tier.label}</span>
                        {isCurrentActiveTier && (
                          <span className="w-2 h-2 rounded-full bg-[#B71C1C]" />
                        )}
                      </div>
                      <div className="text-base font-black text-gray-900 mt-1">
                        ${tier.price.toLocaleString("es-CL")} <span className="text-[10px] text-gray-400 font-normal">c/u</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* SELECTOR DE CANTIDAD Y SUB-TOTAL CALCULADO */}
          <div className="space-y-3 pt-2 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-gray-700">Seleccionar Cantidad:</span>
              <div className="text-xs text-right">
                <span className="text-gray-500">Total calculado: </span>
                <strong className="text-base text-gray-900 font-black">
                  ${currentTotal.toLocaleString("es-CL")}
                </strong>
                {totalSavings > 0 && (
                  <span className="text-emerald-700 block text-[11px] font-bold">
                    (Estás ahorrando ${totalSavings.toLocaleString("es-CL")})
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              {/* Contador */}
              <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden bg-white shadow-xs shrink-0 self-start">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-gray-100 text-gray-700 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <input
                  type="number"
                  min="1"
                  max="500"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-14 text-center font-black text-sm text-gray-900 focus:outline-none"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-gray-100 text-gray-700 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Botón Agregar al Carrito */}
              <button
                onClick={handleAddToCart}
                className={`flex-1 py-3 px-5 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-all active:scale-[0.99] ${
                  isAddedFeedback
                    ? "bg-emerald-600 text-white"
                    : "bg-[#B71C1C] hover:bg-[#8E0000] text-white"
                }`}
              >
                {isAddedFeedback ? (
                  <>
                    <Check className="w-5 h-5" /> ¡Agregado al Carro!
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5" /> Agregar al Carrito
                  </>
                )}
              </button>

              {/* Botón Comprar Ahora */}
              <button
                onClick={handleBuyNow}
                className="py-3 px-5 bg-gray-900 hover:bg-black text-white font-extrabold text-sm rounded-xl shadow transition-colors active:scale-[0.99]"
              >
                Comprar Ahora
              </button>
            </div>

            {/* BOTÓN WHATSAPP CON MENSAJE AUTOMÁTICO */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Cotizar o Pedir este producto por WhatsApp</span>
            </a>
          </div>

          {/* Garantías de confianza */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 border-t border-gray-100 text-[11px] text-gray-500">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#B71C1C]" />
              <span>Envíos a todo Chile</span>
            </div>
            <div className="flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-[#B71C1C]" />
              <span>Factura Electrónica con RUT</span>
            </div>
            <div className="flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-[#B71C1C]" />
              <span>Garantía de Cadena de Frío</span>
            </div>
          </div>
        </div>
      </div>

      {/* INFORMACIÓN AMPLIADA (TABS) */}
      <section className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-sm">
        {/* Encabezados de Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-3 text-xs sm:text-sm font-bold">
          <button
            onClick={() => setActiveTab("descripcion")}
            className={`px-4 py-2.5 rounded-xl transition-all ${
              activeTab === "descripcion"
                ? "bg-[#B71C1C] text-white shadow-sm"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Descripción del Producto
          </button>
          <button
            onClick={() => setActiveTab("ingredientes")}
            className={`px-4 py-2.5 rounded-xl transition-all ${
              activeTab === "ingredientes"
                ? "bg-[#B71C1C] text-white shadow-sm"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Ingredientes y Ficha Técnica
          </button>
          <button
            onClick={() => setActiveTab("conservacion")}
            className={`px-4 py-2.5 rounded-xl transition-all ${
              activeTab === "conservacion"
                ? "bg-[#B71C1C] text-white shadow-sm"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Conservación y Caducidad
          </button>
          <button
            onClick={() => setActiveTab("nutricion")}
            className={`px-4 py-2.5 rounded-xl transition-all ${
              activeTab === "nutricion"
                ? "bg-[#B71C1C] text-white shadow-sm"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Información Nutricional
          </button>
          <button
            onClick={() => setActiveTab("opiniones")}
            id="opiniones"
            className={`px-4 py-2.5 rounded-xl transition-all ${
              activeTab === "opiniones"
                ? "bg-[#B71C1C] text-white shadow-sm"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Opiniones ({product.reviewCount})
          </button>
        </div>

        {/* Contenido dinámico de Tabs */}
        <div className="pt-6 text-xs sm:text-sm text-gray-700 leading-relaxed">
          {activeTab === "descripcion" && (
            <div className="space-y-4 max-w-3xl">
              <h3 className="text-base font-extrabold text-gray-900">
                Detalles de Rendimiento Gastronómico
              </h3>
              <p>{product.description}</p>
              <p>{product.shortDescription}</p>

              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 mt-4">
                <h4 className="font-bold text-gray-900 mb-2">Recomendaciones para Locales:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Formato optimizado para reducir mermas en turnos de alta demanda.</li>
                  <li>Estandarización de porciones para control exacto del costo de menú (food cost).</li>
                  <li>Compatible con hornos pizzeros a leña, gas convección y hornos cinta continua.</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === "ingredientes" && (
            <div className="space-y-3 max-w-2xl">
              <h3 className="text-base font-extrabold text-gray-900">Ingredientes</h3>
              <p className="bg-gray-50 p-4 rounded-xl border border-gray-200 font-mono text-xs">
                {product.ingredients || "Ingredientes 100% de origen natural seleccionados sin aditivos artificiales innecesarios."}
              </p>
              <div className="text-xs text-gray-500">
                <strong>Alérgenos:</strong> Puede contener derivados lácteos o trazas según línea de producción especificada en la etiqueta.
              </div>
            </div>
          )}

          {activeTab === "conservacion" && (
            <div className="space-y-3 max-w-2xl">
              <h3 className="text-base font-extrabold text-gray-900">Guía de Conservación</h3>
              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-blue-900">
                <strong>Temperatura y Cuidados:</strong>
                <p className="mt-1">{product.storage}</p>
              </div>
              <p className="text-xs text-gray-500">
                Valle Lindo garantiza la trazabilidad continua de la cadena de frío desde nuestros frigoríficos hasta la puerta de su local.
              </p>
            </div>
          )}

          {activeTab === "nutricion" && (
            <div className="space-y-4 max-w-md">
              <h3 className="text-base font-extrabold text-gray-900">Tabla Nutricional Referencial</h3>
              {product.nutrition ? (
                <div className="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-200 text-xs">
                  <div className="flex justify-between p-2.5 bg-gray-50 font-bold">
                    <span>Parámetro</span>
                    <span>Valor por 100g</span>
                  </div>
                  <div className="flex justify-between p-2.5">
                    <span>Energía / Calorías</span>
                    <span className="font-semibold">{product.nutrition.calories}</span>
                  </div>
                  <div className="flex justify-between p-2.5">
                    <span>Proteínas</span>
                    <span className="font-semibold">{product.nutrition.protein}</span>
                  </div>
                  <div className="flex justify-between p-2.5">
                    <span>Grasas Totales</span>
                    <span className="font-semibold">{product.nutrition.fat}</span>
                  </div>
                  <div className="flex justify-between p-2.5">
                    <span>Sodio</span>
                    <span className="font-semibold">{product.nutrition.sodium}</span>
                  </div>
                </div>
              ) : (
                <p className="text-xs text-gray-500">
                  Consulte la etiqueta técnica impresa en el envase al momento de la entrega para información bromatológica específica.
                </p>
              )}
            </div>
          )}

          {activeTab === "opiniones" && (
            <div className="space-y-6 max-w-3xl">
              <div className="flex items-center gap-6 p-4 bg-gray-50 rounded-2xl border border-gray-200">
                <div className="text-center">
                  <div className="text-4xl font-black text-gray-900">{product.rating}</div>
                  <div className="flex items-center text-amber-500 justify-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                    ))}
                  </div>
                  <div className="text-[10px] text-gray-500 mt-0.5">{product.reviewCount} opiniones</div>
                </div>

                <div className="flex-1 text-xs text-gray-600">
                  El 98% de los locales gastronómicos que adquieren este producto vuelven a comprarlo dentro de los siguientes 30 días.
                </div>
              </div>

              {/* Reseñas de muestra */}
              <div className="space-y-3">
                <div className="p-4 rounded-xl border border-gray-200 bg-white space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-gray-900">Pizzería Don Luigi (Providencia)</span>
                    <span className="text-gray-400">Hace 3 días</span>
                  </div>
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-600">
                    Excelente rendimiento y sabor. Nos llega puntual antes de las 11:00 am y la factura se emite en el mismo minuto.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-gray-200 bg-white space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-gray-900">Restaurant & Carnes El Fogón (Santiago Centro)</span>
                    <span className="text-gray-400">Hace 1 semana</span>
                  </div>
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-600">
                    Compramos por volumen cada martes. La calidad de la carne y los quesos es constante, nunca hemos tenido problemas de merma.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CROSS-SELLING / PRODUCTOS RELACIONADOS */}
      {relatedProducts.length > 0 && (
        <section className="space-y-4 pt-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-[#B71C1C] uppercase tracking-wider">
                Completa tu Pedido Gastronómico
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 mt-0.5">
                Insumos Relacionados para tu Negocio
              </h2>
            </div>
            <Link
              href={`/catalogo?cat=${product.category}`}
              className="text-xs font-bold text-[#B71C1C] hover:underline flex items-center gap-1"
            >
              Ver más en {product.categoryName} <ChevronRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {relatedProducts.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
