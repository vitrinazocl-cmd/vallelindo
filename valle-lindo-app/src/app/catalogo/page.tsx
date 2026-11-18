"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  ChevronDown, 
  X, 
  RotateCcw, 
  Check, 
  SlidersHorizontal,
  Flame,
  Truck,
  Building2,
  FileText
} from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS, CATEGORIES, Product } from "@/data/products";

function CatalogContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("cat") || "todos";
  const initialSearch = searchParams.get("q") || "";
  const initialOffers = searchParams.get("ofertas") === "true";

  // Estados de filtros
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>("todas");
  const [selectedBrand, setSelectedBrand] = useState<string>("todas");
  const [searchTerm, setSearchTerm] = useState<string>(initialSearch);
  const [onlyOffers, setOnlyOffers] = useState<boolean>(initialOffers);
  const [onlyInStock, setOnlyInStock] = useState<boolean>(false);
  const [onlyBestSellers, setOnlyBestSellers] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<"featured" | "price_asc" | "price_desc" | "rating" | "bestseller">("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [maxPrice, setMaxPrice] = useState<number>(60000);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState<boolean>(false);

  // Lista única de marcas
  const allBrands = useMemo(() => {
    const brands = new Set(PRODUCTS.map((p) => p.brand));
    return Array.from(brands);
  }, []);

  // Filtrado reactivo de productos
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Categoría
      if (selectedCategory !== "todos" && product.category !== selectedCategory) {
        return false;
      }
      // Subcategoría
      if (selectedSubCategory !== "todas" && product.subCategory !== selectedSubCategory) {
        return false;
      }
      // Marca
      if (selectedBrand !== "todas" && product.brand !== selectedBrand) {
        return false;
      }
      // Ofertas
      if (onlyOffers && !product.isOffer) {
        return false;
      }
      // Stock
      if (onlyInStock && product.stockStatus !== "in_stock") {
        return false;
      }
      // Más vendidos
      if (onlyBestSellers && !product.isBestSeller) {
        return false;
      }
      // Precio máximo
      if (product.price > maxPrice) {
        return false;
      }
      // Búsqueda de texto
      if (searchTerm.trim()) {
        const q = searchTerm.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesSku = product.sku.toLowerCase().includes(q);
        const matchesBrand = product.brand.toLowerCase().includes(q);
        const matchesCategory = product.categoryName.toLowerCase().includes(q);
        const matchesTags = product.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchesName && !matchesSku && !matchesBrand && !matchesCategory && !matchesTags) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === "price_asc") return a.price - b.price;
      if (sortBy === "price_desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "bestseller") return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
      return 0; // default featured
    });
  }, [
    selectedCategory,
    selectedSubCategory,
    selectedBrand,
    onlyOffers,
    onlyInStock,
    onlyBestSellers,
    maxPrice,
    searchTerm,
    sortBy,
  ]);

  const resetFilters = () => {
    setSelectedCategory("todos");
    setSelectedSubCategory("todas");
    setSelectedBrand("todas");
    setSearchTerm("");
    setOnlyOffers(false);
    setOnlyInStock(false);
    setOnlyBestSellers(false);
    setMaxPrice(60000);
    setSortBy("featured");
  };

  const currentCategoryData = CATEGORIES.find((c) => c.id === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
      {/* Banner / Header del Catálogo */}
      <div className="bg-[#121212] text-white rounded-2xl p-6 sm:p-8 border border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-950 text-red-300 text-xs font-bold border border-red-800">
            <Building2 className="w-3.5 h-3.5" /> Catálogo Mayorista y Minorista
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-white">
            Catálogo Gastronómico Valle Lindo
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 max-w-xl">
            Precios por unidad y tramos de descuento por volumen para locales de comida rápida, pizzerías y restaurantes.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 shrink-0">
          <Link
            href="/downloads/catalogo_pizzerias_vallelindo.pdf"
            target="_blank"
            className="px-4 py-2 bg-red-900/60 hover:bg-red-800 text-white text-xs font-bold rounded-lg border border-red-700 flex items-center gap-1.5 transition-colors"
          >
            <FileText className="w-4 h-4 text-red-400" /> PDF Pizzerías
          </Link>
          <Link
            href="/downloads/catalogo_general_2026.pdf"
            target="_blank"
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-xs font-bold rounded-lg border border-gray-700 flex items-center gap-1.5 transition-colors"
          >
            <FileText className="w-4 h-4 text-gray-300" /> PDF General 2026
          </Link>
        </div>
      </div>

      {/* Barra de Búsqueda y Controles de Vista */}
      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Buscador inteligente */}
        <div className="relative w-full md:w-96">
          <input
            type="text"
            placeholder="Buscar por nombre, SKU, marca o tipo..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-xs rounded-lg border border-gray-300 focus:outline-none focus:border-[#B71C1C] bg-gray-50/50"
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-2.5 text-gray-400 hover:text-black"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Controles de Ordenamiento y Vista */}
        <div className="flex flex-wrap items-center justify-between w-full md:w-auto gap-3 text-xs">
          {/* Botón Filtros Mobile */}
          <button
            onClick={() => setIsMobileFiltersOpen(true)}
            className="lg:hidden px-3.5 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg font-bold text-gray-800 flex items-center gap-1.5"
          >
            <SlidersHorizontal className="w-4 h-4 text-[#B71C1C]" />
            <span>Filtros</span>
          </button>

          {/* Ordenar por */}
          <div className="flex items-center gap-2">
            <span className="text-gray-500 font-medium">Ordenar:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-2 border border-gray-300 rounded-lg bg-white font-semibold text-gray-800 focus:outline-none focus:border-[#B71C1C]"
            >
              <option value="featured">Destacados Valle Lindo</option>
              <option value="bestseller">Más Vendidos</option>
              <option value="price_asc">Precio: Menor a Mayor</option>
              <option value="price_desc">Precio: Mayor a Menor</option>
              <option value="rating">Mejor Calificados</option>
            </select>
          </div>

          {/* Switch Grid / List */}
          <div className="flex items-center border border-gray-300 rounded-lg p-0.5 bg-gray-50">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-1.5 rounded-md transition-colors ${
                viewMode === "grid" ? "bg-white shadow-xs text-[#B71C1C]" : "text-gray-400 hover:text-black"
              }`}
              title="Vista Cuadrícula"
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-1.5 rounded-md transition-colors ${
                viewMode === "list" ? "bg-white shadow-xs text-[#B71C1C]" : "text-gray-400 hover:text-black"
              }`}
              title="Vista Lista"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Contenedor Principal: Filtros Laterales + Grid de Productos */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        {/* PANEL DE FILTROS LATERAL (Desktop) */}
        <aside className="hidden lg:block bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <h3 className="font-extrabold text-sm text-gray-900 flex items-center gap-2">
              <Filter className="w-4 h-4 text-[#B71C1C]" />
              Filtros Avanzados
            </h3>
            <button
              onClick={resetFilters}
              className="text-[11px] font-bold text-[#B71C1C] hover:underline flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" /> Limpiar
            </button>
          </div>

          {/* Categoría */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-800 uppercase tracking-wider block">
              Categoría
            </label>
            <div className="space-y-1">
              <button
                onClick={() => {
                  setSelectedCategory("todos");
                  setSelectedSubCategory("todas");
                }}
                className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center justify-between ${
                  selectedCategory === "todos"
                    ? "bg-[#B71C1C] text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <span>Todas las Categorías</span>
                <span className="text-[10px] opacity-80">({PRODUCTS.length})</span>
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setSelectedSubCategory("todas");
                  }}
                  className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center justify-between ${
                    selectedCategory === cat.id
                      ? "bg-[#B71C1C] text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <span>{cat.icon} {cat.name}</span>
                  <span className="text-[10px] opacity-80">
                    ({PRODUCTS.filter((p) => p.category === cat.id).length})
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Subcategorías de la categoría activa */}
          {currentCategoryData && (
            <div className="space-y-2 pt-2 border-t border-gray-100">
              <label className="text-xs font-bold text-gray-800 uppercase tracking-wider block">
                Subcategoría
              </label>
              <div className="space-y-1">
                <button
                  onClick={() => setSelectedSubCategory("todas")}
                  className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    selectedSubCategory === "todas" ? "bg-gray-900 text-white" : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  Todas en {currentCategoryData.name}
                </button>
                {currentCategoryData.subcategories.map((sub, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedSubCategory(sub)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      selectedSubCategory === sub ? "bg-gray-900 text-white" : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Marcas */}
          <div className="space-y-2 pt-2 border-t border-gray-100">
            <label className="text-xs font-bold text-gray-800 uppercase tracking-wider block">
              Marca
            </label>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-[#B71C1C]"
            >
              <option value="todas">Todas las Marcas</option>
              {allBrands.map((b, i) => (
                <option key={i} value={b}>{b}</option>
              ))}
            </select>
          </div>

          {/* Rango de Precio */}
          <div className="space-y-2 pt-2 border-t border-gray-100">
            <div className="flex justify-between items-center text-xs">
              <label className="font-bold text-gray-800 uppercase tracking-wider">Precio Máximo</label>
              <span className="font-mono font-bold text-[#B71C1C]">${maxPrice.toLocaleString("es-CL")}</span>
            </div>
            <input
              type="range"
              min="3000"
              max="65000"
              step="1000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-[#B71C1C] cursor-pointer"
            />
          </div>

          {/* Filtros booleanos rápidos */}
          <div className="space-y-2.5 pt-2 border-t border-gray-100 text-xs font-semibold text-gray-700">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={onlyOffers}
                onChange={(e) => setOnlyOffers(e.target.checked)}
                className="rounded text-[#B71C1C] focus:ring-[#B71C1C]"
              />
              <span className="text-[#2E7D32]">🔥 Solo Productos en Oferta</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={onlyInStock}
                onChange={(e) => setOnlyInStock(e.target.checked)}
                className="rounded text-[#B71C1C] focus:ring-[#B71C1C]"
              />
              <span>✅ Stock Inmediato para Despacho</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={onlyBestSellers}
                onChange={(e) => setOnlyBestSellers(e.target.checked)}
                className="rounded text-[#B71C1C] focus:ring-[#B71C1C]"
              />
              <span>⭐ Solo Más Vendidos</span>
            </label>
          </div>
        </aside>

        {/* PRODUCT LIST / GRID */}
        <main className="lg:col-span-3 space-y-4">
          {/* Header de resultados */}
          <div className="flex items-center justify-between text-xs text-gray-600 bg-white p-3 rounded-xl border border-gray-200">
            <div>
              Mostrando <strong className="text-gray-900">{filteredProducts.length}</strong> de{" "}
              {PRODUCTS.length} productos
              {searchTerm && <span> para &quot;<strong>{searchTerm}</strong>&quot;</span>}
            </div>

            {(selectedCategory !== "todos" || onlyOffers || selectedBrand !== "todas" || searchTerm) && (
              <button
                onClick={resetFilters}
                className="text-[#B71C1C] font-bold hover:underline text-[11px]"
              >
                Limpiar Filtros Activos
              </button>
            )}
          </div>

          {/* Sin resultados */}
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-red-50 text-[#B71C1C] flex items-center justify-center mx-auto">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                No se encontraron productos con estos filtros
              </h3>
              <p className="text-xs text-gray-500 max-w-sm mx-auto">
                Prueba a ajustar tus términos de búsqueda o restablecer el rango de precio y categorías.
              </p>
              <button
                onClick={resetFilters}
                className="px-6 py-2.5 bg-[#B71C1C] text-white text-xs font-bold rounded-lg shadow hover:bg-[#8E0000] transition-colors"
              >
                Restablecer todos los filtros
              </button>
            </div>
          ) : (
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
                  : "space-y-4"
              }
            >
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} viewMode={viewMode} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default function CatalogPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-sm text-gray-500">Cargando catálogo...</div>}>
      <CatalogContent />
    </Suspense>
  );
}
