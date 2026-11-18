"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { 
  Search, 
  ShoppingCart, 
  Heart, 
  Menu, 
  X, 
  PhoneCall, 
  FileText, 
  ChevronDown, 
  ShieldCheck, 
  Truck, 
  Flame, 
  Sparkles,
  Building2,
  ArrowRight
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { PRODUCTS, CATEGORIES } from "@/data/products";

export default function Navbar() {
  const router = useRouter();
  const { cartCount, setIsCartOpen, wishlist } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<typeof PRODUCTS>([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isB2BMode, setIsB2BMode] = useState(true);
  const searchRef = useRef<HTMLDivElement>(null);

  // Buscador inteligente en tiempo real
  useEffect(() => {
    if (searchTerm.trim().length > 1) {
      const term = searchTerm.toLowerCase();
      const filtered = PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.brand.toLowerCase().includes(term) ||
          p.sku.toLowerCase().includes(term) ||
          p.categoryName.toLowerCase().includes(term) ||
          p.tags.some((tag) => tag.toLowerCase().includes(term))
      ).slice(0, 6);
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setIsSearchFocused(false);
      router.push(`/catalogo?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm border-b border-gray-200">
      {/* Top Banner de beneficios B2B */}
      <div className="bg-[#121212] text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <Truck className="w-3.5 h-3.5" /> Despacho GRATIS sobre $75.000 en Santiago
            </span>
            <span className="hidden lg:inline text-gray-400">|</span>
            <span className="hidden lg:inline text-gray-300">
              🥩 Carnes y Quesos de Alto Rendimiento para Pizzerías y Gastronomía
            </span>
          </div>

          <div className="flex items-center space-x-5 text-gray-300">
            <Link 
              href="/downloads/catalogo_pizzerias_vallelindo.pdf" 
              target="_blank" 
              className="hover:text-white flex items-center gap-1 underline transition-colors"
            >
              <FileText className="w-3 h-3 text-[#B71C1C]" /> Catálogo Pizzerías PDF
            </Link>
            <Link 
              href="/downloads/catalogo_general_2026.pdf" 
              target="_blank" 
              className="hover:text-white flex items-center gap-1 underline transition-colors"
            >
              <FileText className="w-3 h-3 text-[#B71C1C]" /> Catálogo General PDF
            </Link>
            <a 
              href="https://wa.me/56987654321?text=Hola%20Valle%20Lindo,%20deseo%20atenci%C3%B3n%20para%20mi%20local" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-emerald-400 flex items-center gap-1 font-medium transition-colors"
            >
              <PhoneCall className="w-3 h-3 text-emerald-400" /> WhatsApp Ventas: +56 9 8765 4321
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-3.5 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="relative w-11 h-11 rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-black flex items-center justify-center">
            <Image
              src="/assets/branding/logo-valle-lindo.jpeg"
              alt="Comercializadora Valle Lindo Logo"
              width={44}
              height={44}
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-tight text-[#121212] group-hover:text-[#B71C1C] transition-colors leading-none">
              VALLE LINDO
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#B71C1C] mt-0.5">
              Distribuidora Gastronómica & Carnes
            </span>
          </div>
        </Link>

        {/* Toggle Mayorista / Minorista */}
        <div className="hidden xl:flex items-center bg-gray-100 p-1 rounded-full border border-gray-200 text-xs font-semibold">
          <button
            onClick={() => setIsB2BMode(true)}
            className={`px-3 py-1 rounded-full flex items-center gap-1.5 transition-all ${
              isB2BMode
                ? "bg-[#B71C1C] text-white shadow-sm"
                : "text-gray-600 hover:text-black"
            }`}
          >
            <Building2 className="w-3.5 h-3.5" /> Mayorista B2B
          </button>
          <button
            onClick={() => setIsB2BMode(false)}
            className={`px-3 py-1 rounded-full transition-all ${
              !isB2BMode
                ? "bg-black text-white shadow-sm"
                : "text-gray-600 hover:text-black"
            }`}
          >
            Minorista
          </button>
        </div>

        {/* Buscador inteligente */}
        <div ref={searchRef} className="relative flex-1 max-w-xl hidden md:block">
          <form onSubmit={handleSearchSubmit} className="relative flex items-center">
            <input
              type="text"
              placeholder="Buscar queso mozzarella, carne lomo, pepperoni, papas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              className="w-full pl-11 pr-24 py-2.5 text-sm rounded-lg border border-gray-300 focus:border-[#B71C1C] focus:ring-2 focus:ring-[#B71C1C]/20 outline-none transition-all shadow-inner bg-gray-50/60"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5" />
            <button
              type="submit"
              className="absolute right-1.5 px-4 py-1.5 bg-[#B71C1C] hover:bg-[#8E0000] text-white text-xs font-semibold rounded-md transition-colors"
            >
              Buscar
            </button>
          </form>

          {/* Resultados predictivos */}
          {isSearchFocused && searchResults.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50">
              <div className="p-2 bg-gray-50 border-b border-gray-100 flex justify-between items-center text-xs text-gray-500 font-medium">
                <span>Productos sugeridos ({searchResults.length})</span>
                <span className="text-[#B71C1C] font-semibold">Precios mayoristas disponibles</span>
              </div>
              <div className="divide-y divide-gray-100 max-h-96 overflow-y-auto">
                {searchResults.map((product) => (
                  <Link
                    key={product.id}
                    href={`/producto/${product.slug}`}
                    onClick={() => setIsSearchFocused(false)}
                    className="p-3 flex items-center gap-3 hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gray-100 overflow-hidden shrink-0 border border-gray-200">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-gray-900 truncate">
                        {product.name}
                      </h4>
                      <div className="flex items-center gap-2 text-[11px] text-gray-500 mt-0.5">
                        <span className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-600 font-mono">
                          SKU: {product.sku}
                        </span>
                        <span>•</span>
                        <span className="text-[#2E7D32] font-medium">
                          {product.stockStatus === "in_stock" ? "En Stock" : "Consultar"}
                        </span>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-sm font-extrabold text-[#B71C1C]">
                        ${product.price.toLocaleString("es-CL")}
                      </div>
                      {product.originalPrice > product.price && (
                        <div className="text-[10px] text-gray-400 line-through">
                          ${product.originalPrice.toLocaleString("es-CL")}
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
              <div className="p-2.5 bg-gray-50 text-center border-t border-gray-100">
                <Link
                  href={`/catalogo?q=${encodeURIComponent(searchTerm)}`}
                  onClick={() => setIsSearchFocused(false)}
                  className="text-xs font-bold text-[#B71C1C] hover:underline flex items-center justify-center gap-1"
                >
                  Ver todos los resultados para &quot;{searchTerm}&quot; <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Acciones de usuario */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <Link
            href="/cotizacion"
            className="hidden lg:flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-gray-700 hover:text-[#B71C1C] border border-gray-300 hover:border-[#B71C1C] rounded-lg transition-colors"
          >
            <FileText className="w-4 h-4 text-[#B71C1C]" />
            <span>Cotizador B2B</span>
          </Link>

          <Link
            href="/favoritos"
            className="relative p-2 text-gray-600 hover:text-[#B71C1C] transition-colors rounded-full hover:bg-gray-100"
            title="Favoritos"
          >
            <Heart className="w-5 h-5" />
            {wishlist.length > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#B71C1C] text-white text-[10px] font-bold flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </Link>

          {/* Carrito Lateral Trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2 bg-[#B71C1C] hover:bg-[#8E0000] text-white px-3.5 py-2 rounded-lg font-bold text-sm shadow-md transition-all active:scale-95"
            aria-label="Abrir carrito"
          >
            <div className="relative">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center border-2 border-[#B71C1C]">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="hidden sm:inline">Mi Carro</span>
          </button>

          {/* Botón Menú Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-black rounded-lg hover:bg-gray-100"
            aria-label="Abrir menú"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Sub-Header con categorías principales */}
      <nav className="hidden md:block bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between overflow-x-auto text-xs font-semibold text-gray-700">
          <div className="flex items-center space-x-1 py-1">
            <Link
              href="/catalogo"
              className="px-3 py-2 rounded-md hover:bg-gray-200 hover:text-black transition-colors flex items-center gap-1.5 text-[#B71C1C] font-bold"
            >
              <Menu className="w-3.5 h-3.5" /> Todo el Catálogo
            </Link>

            <Link
              href="/catalogo?cat=quesos"
              className="px-3 py-2 rounded-md hover:bg-gray-200 hover:text-black transition-colors flex items-center gap-1"
            >
              🧀 Quesos para Pizzerías
            </Link>

            <Link
              href="/catalogo?cat=carnes"
              className="px-3 py-2 rounded-md hover:bg-gray-200 hover:text-black transition-colors flex items-center gap-1"
            >
              🥩 Carnes al por Mayor
            </Link>

            <Link
              href="/catalogo?cat=pizza"
              className="px-3 py-2 rounded-md hover:bg-gray-200 hover:text-black transition-colors flex items-center gap-1"
            >
              🍕 Insumos de Pizzería
            </Link>

            <Link
              href="/catalogo?cat=congelados"
              className="px-3 py-2 rounded-md hover:bg-gray-200 hover:text-black transition-colors flex items-center gap-1"
            >
              ❄️ Papas & Congelados
            </Link>

            <Link
              href="/catalogo?cat=embutidos"
              className="px-3 py-2 rounded-md hover:bg-gray-200 hover:text-black transition-colors flex items-center gap-1"
            >
              🌭 Embutidos & Cecinas
            </Link>

            <Link
              href="/catalogo?ofertas=true"
              className="px-3 py-2 rounded-md text-[#2E7D32] hover:bg-emerald-50 transition-colors flex items-center gap-1 font-bold"
            >
              <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500" /> Ofertas Mayoristas
            </Link>
          </div>

          <div className="flex items-center space-x-3 py-1">
            <Link
              href="/admin"
              className="text-gray-500 hover:text-gray-900 text-[11px] font-medium"
            >
              Panel Admin
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="/cliente"
              className="text-gray-500 hover:text-gray-900 text-[11px] font-medium"
            >
              Mi Cuenta
            </Link>
          </div>
        </div>
      </nav>

      {/* Menú Mobile Desplegable */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 pt-3 pb-6 space-y-4 shadow-xl">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="Buscar productos, carnes, quesos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#B71C1C]"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
          </form>

          <div className="grid grid-cols-2 gap-2 text-xs font-medium">
            <Link
              href="/catalogo?cat=quesos"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-gray-50 hover:bg-gray-100 flex items-center gap-2"
            >
              🧀 Quesos Pizzería
            </Link>
            <Link
              href="/catalogo?cat=carnes"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-gray-50 hover:bg-gray-100 flex items-center gap-2"
            >
              🥩 Carnes Mayorista
            </Link>
            <Link
              href="/catalogo?cat=pizza"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-gray-50 hover:bg-gray-100 flex items-center gap-2"
            >
              🍕 Insumos Pizza
            </Link>
            <Link
              href="/catalogo?cat=congelados"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-gray-50 hover:bg-gray-100 flex items-center gap-2"
            >
              ❄️ Congelados
            </Link>
            <Link
              href="/catalogo?cat=embutidos"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-gray-50 hover:bg-gray-100 flex items-center gap-2"
            >
              🌭 Embutidos
            </Link>
            <Link
              href="/catalogo?ofertas=true"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-emerald-50 text-[#2E7D32] font-bold flex items-center gap-2"
            >
              🔥 Ofertas Especiales
            </Link>
          </div>

          <div className="border-t border-gray-200 pt-3 space-y-2 text-xs">
            <Link
              href="/cotizacion"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-gray-700 font-bold hover:text-[#B71C1C]"
            >
              📄 Solicitar Cotización B2B
            </Link>
            <Link
              href="/cliente"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-gray-700 hover:text-[#B71C1C]"
            >
              👤 Mi Panel de Cliente
            </Link>
            <Link
              href="/admin"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-gray-700 hover:text-[#B71C1C]"
            >
              ⚙️ Panel Administrativo
            </Link>
            <Link
              href="/downloads/catalogo_pizzerias_vallelindo.pdf"
              target="_blank"
              className="block py-2 text-[#B71C1C] font-semibold"
            >
              📥 Descargar Catálogo Pizzerías PDF
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
