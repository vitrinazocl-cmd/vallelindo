"use client";

import React from "react";
import Link from "next/link";
import { Heart, ArrowLeft, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function WishlistPage() {
  const { wishlist } = useCart();
  const favoriteProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-gray-200">
        <div>
          <Link href="/catalogo" className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-black mb-1">
            <ArrowLeft className="w-3.5 h-3.5" /> Volver al Catálogo
          </Link>
          <h1 className="text-2xl font-black text-gray-900 flex items-center gap-2">
            <Heart className="w-6 h-6 text-[#B71C1C] fill-[#B71C1C]" />
            Mis Insumos Favoritos ({favoriteProducts.length})
          </h1>
        </div>
      </div>

      {favoriteProducts.length === 0 ? (
        <div className="bg-white rounded-3xl border border-gray-200 p-12 text-center space-y-4 max-w-lg mx-auto shadow-sm">
          <div className="w-16 h-16 rounded-full bg-red-50 text-[#B71C1C] flex items-center justify-center mx-auto">
            <Heart className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-gray-900">
            Aún no tienes productos guardados
          </h3>
          <p className="text-xs text-gray-500">
            Guarda aquí los quesos, carnes e insumos que compras habitualmente para pedirlos de forma express en cualquier momento.
          </p>
          <Link
            href="/catalogo"
            className="inline-block px-6 py-2.5 bg-[#B71C1C] text-white text-xs font-bold rounded-xl shadow hover:bg-[#8E0000] transition-colors"
          >
            Explorar Catálogo
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {favoriteProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
