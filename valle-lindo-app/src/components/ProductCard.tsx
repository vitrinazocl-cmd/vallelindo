"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ShoppingCart, 
  Heart, 
  Star, 
  MessageCircle, 
  Zap, 
  Check, 
  Eye, 
  ShieldCheck,
  TrendingDown
} from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
  viewMode?: "grid" | "list";
}

export default function ProductCard({ product, viewMode = "grid" }: ProductCardProps) {
  const { addToCart, isInWishlist, toggleWishlist, setIsCartOpen } = useCart();
  const [isAddedAnim, setIsAddedAnim] = useState(false);
  const [selectedQty, setSelectedQty] = useState(1);

  const isFavorite = isInWishlist(product.id);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedQty);
    setIsAddedAnim(true);
    setTimeout(() => setIsAddedAnim(false), 1200);
  };

  const handleQuickBuy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedQty);
    setIsCartOpen(true);
  };

  // WhatsApp link específico con SKU y precio prellenado
  const whatsappProductUrl = `https://wa.me/56987907981?text=${encodeURIComponent(
    `Hola Comercializadora Valle Lindo! Deseo consultar precio mayorista y disponibilidad de:\n\n*${product.name}*\nSKU: ${product.sku}\nPrecio publicado: $${product.price.toLocaleString("es-CL")}\n\n¿Tienen despacho para mi comuna?`
  )}`;

  // Vista Lista
  if (viewMode === "list") {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-lg transition-all flex flex-col md:flex-row gap-5 items-center">
        {/* Imagen */}
        <div className="relative w-full md:w-48 h-48 rounded-lg overflow-hidden bg-gray-50 shrink-0 border border-gray-100 group">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.discountPercent && (
            <span className="absolute top-2 left-2 bg-[#2E7D32] text-white text-[11px] font-extrabold px-2 py-0.5 rounded-full shadow-sm">
              -{product.discountPercent}% OFF
            </span>
          )}
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleWishlist(product.id);
            }}
            className="absolute top-2 right-2 p-1.5 rounded-full bg-white/90 shadow hover:bg-white text-gray-400 hover:text-[#B71C1C] transition-colors"
          >
            <Heart className={`w-4 h-4 ${isFavorite ? "fill-[#B71C1C] text-[#B71C1C]" : ""}`} />
          </button>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
            <span className="font-semibold text-[#B71C1C] uppercase tracking-wider">{product.brand}</span>
            <span>•</span>
            <span className="font-mono bg-gray-100 px-1.5 py-0.5 rounded">SKU: {product.sku}</span>
            <span>•</span>
            <span className="text-gray-600">{product.unit}</span>
          </div>

          <Link href={`/producto/${product.slug}`}>
            <h3 className="text-base font-extrabold text-gray-900 hover:text-[#B71C1C] transition-colors">
              {product.name}
            </h3>
          </Link>

          <p className="text-xs text-gray-600 mt-1 line-clamp-2">
            {product.shortDescription}
          </p>

          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center text-amber-500">
              <Star className="w-3.5 h-3.5 fill-amber-500" />
              <span className="text-xs font-bold ml-1 text-gray-800">{product.rating}</span>
            </div>
            <span className="text-xs text-gray-400">({product.reviewCount} opiniones verificadas)</span>
            <span className="text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-semibold">
              ✅ Stock Disponible
            </span>
          </div>

          {/* Escala mayorista resumen */}
          {product.wholesaleTiers && product.wholesaleTiers.length > 1 && (
            <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
              {product.wholesaleTiers.map((t, idx) => (
                <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded border border-gray-200">
                  {t.label}: <strong className="text-gray-900">${t.price.toLocaleString("es-CL")}</strong>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Precios y Botones */}
        <div className="w-full md:w-56 shrink-0 flex flex-col justify-between items-end border-t md:border-t-0 md:border-l border-gray-100 pt-3 md:pt-0 md:pl-5">
          <div className="w-full text-left md:text-right">
            <div className="flex items-baseline md:justify-end gap-1">
              <span className="text-2xl font-black text-[#B71C1C]">
                ${product.price.toLocaleString("es-CL")}
              </span>
              {product.pricePerUnitLabel && (
                <span className="text-xs font-bold text-gray-500">{product.pricePerUnitLabel}</span>
              )}
            </div>
            {product.originalPrice > product.price && (
              <div className="text-xs text-gray-400 line-through">
                Antes: ${product.originalPrice.toLocaleString("es-CL")}
              </div>
            )}
            {product.piecePrice && product.pieceWeightKg && product.pieceWeightKg > 1 && (
              <div className="mt-1 text-[11px] font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 inline-block">
                🧀 Pieza ({product.pieceWeight}): ${product.piecePrice.toLocaleString("es-CL")}
              </div>
            )}
            <div className="text-[11px] text-gray-500 mt-0.5">IVA Incluido • Facturable</div>
          </div>

          <div className="w-full space-y-2 mt-4">
            <button
              onClick={handleAdd}
              className={`w-full py-2.5 px-3 rounded-lg text-xs font-extrabold flex items-center justify-center gap-1.5 transition-all shadow-sm ${
                isAddedAnim
                  ? "bg-emerald-600 text-white"
                  : "bg-[#B71C1C] hover:bg-[#8E0000] text-white active:scale-95"
              }`}
            >
              {isAddedAnim ? (
                <>
                  <Check className="w-4 h-4" /> ¡Agregado al Carro!
                </>
              ) : (
                <>
                  <ShoppingCart className="w-4 h-4" /> Añadir al Carrito
                </>
              )}
            </button>

            <a
              href={whatsappProductUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 rounded-lg text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 flex items-center justify-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" /> Cotizar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Vista Cuadrícula (Grid) - Diseño Amazon Fresh / Mercado Libre Empresas
  return (
    <div className="group relative bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
      {/* Badges superiores */}
      <div className="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1 items-start">
        {product.discountPercent && (
          <span className="bg-[#2E7D32] text-white text-[11px] font-extrabold px-2.5 py-0.5 rounded-full shadow-md flex items-center gap-1">
            <TrendingDown className="w-3 h-3" /> -{product.discountPercent}% OFF
          </span>
        )}
        {product.isBestSeller && (
          <span className="bg-[#121212] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
            ⭐ Más Vendido
          </span>
        )}
      </div>

      {/* Botón Favorito */}
      <button
        onClick={(e) => {
          e.preventDefault();
          toggleWishlist(product.id);
        }}
        className="absolute top-2.5 right-2.5 z-10 p-2 rounded-full bg-white/90 shadow-sm hover:bg-white text-gray-400 hover:text-[#B71C1C] transition-colors"
        title="Guardar en Favoritos"
      >
        <Heart className={`w-4 h-4 ${isFavorite ? "fill-[#B71C1C] text-[#B71C1C]" : ""}`} />
      </button>

      {/* Imagen del Producto */}
      <Link href={`/producto/${product.slug}`} className="block relative pt-[95%] bg-gray-50 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-3 group-hover:scale-108 transition-transform duration-300"
        />
      </Link>

      {/* Contenido del Producto */}
      <div className="p-2.5 sm:p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Marca y SKU */}
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-gray-400 mb-1">
            <span className="font-semibold text-gray-700 uppercase tracking-wider truncate mr-1">{product.brand}</span>
            <span className="font-mono text-[9px] sm:text-[10px] shrink-0">SKU: {product.sku}</span>
          </div>

          {/* Nombre */}
          <Link href={`/producto/${product.slug}`}>
            <h3 className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-[#B71C1C] transition-colors line-clamp-2 leading-tight min-h-[2rem] sm:min-h-[2.5rem]">
              {product.name}
            </h3>
          </Link>

          {/* Formato y Origen */}
          <div className="text-[10px] sm:text-[11px] text-gray-500 mt-1 flex items-center gap-1">
            <span className="truncate">{product.unit}</span>
            <span>•</span>
            <span className="text-gray-600 truncate">{product.origin}</span>
          </div>

          {/* Opiniones */}
          <div className="flex items-center gap-1.5 mt-1 sm:mt-2">
            <div className="flex items-center text-amber-500">
              <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-500" />
              <span className="text-[11px] sm:text-xs font-bold text-gray-800 ml-1">{product.rating}</span>
            </div>
            <span className="text-[10px] sm:text-[11px] text-gray-400">({product.reviewCount})</span>
            <span className="text-[9px] sm:text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-semibold ml-auto shrink-0">
              Disponible
            </span>
          </div>

          {/* Precios */}
          <div className="mt-2 sm:mt-3 pt-2 border-t border-gray-100">
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <span className="text-base sm:text-2xl font-black text-[#B71C1C]">
                ${product.price.toLocaleString("es-CL")}
              </span>
              {product.pricePerUnitLabel && (
                <span className="text-[11px] font-bold text-gray-500">{product.pricePerUnitLabel}</span>
              )}
              {product.originalPrice > product.price && (
                <span className="text-[10px] sm:text-xs text-gray-400 line-through">
                  ${product.originalPrice.toLocaleString("es-CL")}
                </span>
              )}
            </div>

            {/* Precio por pieza completa de quesos enteros */}
            {product.piecePrice && product.pieceWeightKg && product.pieceWeightKg > 1 && (
              <div className="mt-1 text-[10px] sm:text-[11px] font-semibold text-amber-950 bg-amber-50/95 px-2 py-0.5 rounded border border-amber-200 flex items-center justify-between">
                <span className="truncate">🧀 Pieza ({product.pieceWeight}):</span>
                <strong className="text-[#B71C1C] ml-1 shrink-0 font-black">
                  ${product.piecePrice.toLocaleString("es-CL")}
                </strong>
              </div>
            )}

            {/* Escala mayorista rápida */}
            {product.wholesaleTiers && product.wholesaleTiers.length > 1 && (
              <div className="mt-1 text-[10px] sm:text-[11px] text-gray-600 bg-gray-50 px-1.5 sm:px-2 py-0.5 rounded border border-gray-100 flex items-center justify-between">
                <span className="truncate">Mayorista ({product.wholesaleTiers[1].minQty}+):</span>
                <strong className="text-[#2E7D32] ml-1 shrink-0">
                  ${product.wholesaleTiers[1].price.toLocaleString("es-CL")}
                </strong>
              </div>
            )}
          </div>
        </div>

        {/* Acciones de compra */}
        <div className="mt-2.5 sm:mt-4 space-y-1 sm:space-y-2">
          <button
            onClick={handleAdd}
            className={`w-full py-2 sm:py-2.5 px-2 sm:px-3 rounded-lg text-[11px] sm:text-xs font-black flex items-center justify-center gap-1.5 transition-all shadow-xs ${
              isAddedAnim
                ? "bg-emerald-600 text-white"
                : "bg-[#B71C1C] hover:bg-[#8E0000] text-white active:scale-95"
            }`}
          >
            {isAddedAnim ? (
              <>
                <Check className="w-3.5 h-3.5" /> ¡Añadido!
              </>
            ) : (
              <>
                <ShoppingCart className="w-3.5 h-3.5" /> Añadir al Carrito
              </>
            )}
          </button>

          <div className="grid grid-cols-2 gap-1 sm:gap-1.5">
            <button
              onClick={handleQuickBuy}
              className="py-1.5 px-1 sm:px-2 bg-gray-900 hover:bg-black text-white text-[10px] sm:text-[11px] font-bold rounded-md flex items-center justify-center gap-0.5 truncate transition-colors"
            >
              <Zap className="w-3 h-3 text-amber-400 fill-amber-400 shrink-0" />
              <span className="truncate">Rápida</span>
            </button>

            <a
              href={whatsappProductUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-1.5 px-1 sm:px-2 text-[10px] sm:text-[11px] font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-md flex items-center justify-center gap-0.5 truncate transition-colors text-center"
            >
              <MessageCircle className="w-3 h-3 text-emerald-600 shrink-0" />
              <span className="truncate">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
              target="_blank"
              rel="noopener noreferrer"
              className="py-1.5 px-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-[11px] font-bold rounded-md flex items-center justify-center gap-1 transition-colors"
            >
              <MessageCircle className="w-3 h-3 text-emerald-600" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
