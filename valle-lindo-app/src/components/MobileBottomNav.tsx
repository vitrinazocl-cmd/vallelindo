"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Grid, FileText, ShoppingCart, MessageCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function MobileBottomNav() {
  const pathname = usePathname();
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 py-1.5 px-2 flex justify-around items-center shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
      <Link
        href="/"
        className={`flex flex-col items-center py-1 px-2 ${
          pathname === "/" ? "text-[#B71C1C]" : "text-gray-600 hover:text-[#B71C1C]"
        }`}
      >
        <Home className="w-5 h-5" />
        <span className="text-[10px] font-bold mt-0.5">Inicio</span>
      </Link>

      <Link
        href="/catalogo"
        className={`flex flex-col items-center py-1 px-2 ${
          pathname.startsWith("/catalogo") ? "text-[#B71C1C]" : "text-gray-600 hover:text-[#B71C1C]"
        }`}
      >
        <Grid className="w-5 h-5" />
        <span className="text-[10px] font-bold mt-0.5">Catálogo</span>
      </Link>

      <Link
        href="/cotizacion"
        className={`flex flex-col items-center py-1 px-2 ${
          pathname === "/cotizacion" ? "text-[#B71C1C]" : "text-gray-600 hover:text-[#B71C1C]"
        }`}
      >
        <FileText className="w-5 h-5" />
        <span className="text-[10px] font-bold mt-0.5">Cotizar</span>
      </Link>

      <button
        onClick={() => setIsCartOpen(true)}
        className="flex flex-col items-center py-1 px-2 text-gray-600 hover:text-[#B71C1C] relative"
      >
        <div className="relative">
          <ShoppingCart className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-2 bg-emerald-500 text-white text-[9px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
              {cartCount}
            </span>
          )}
        </div>
        <span className="text-[10px] font-bold mt-0.5">Mi Carro</span>
      </button>

      <a
        href="https://wa.me/56987654321?text=Hola%20Valle%20Lindo,%20deseo%20atenci%C3%B3n%20para%20mi%20local"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center py-1 px-2 text-emerald-600 hover:text-emerald-700"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-[10px] font-bold mt-0.5">WhatsApp</span>
      </a>
    </nav>
  );
}
