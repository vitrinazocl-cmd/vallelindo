"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Truck, 
  FileText, 
  CreditCard,
  Building2,
  Landmark,
  ArrowRight
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white pt-14 pb-8 border-t-4 border-[#B71C1C]">
      {/* Contenedor principal */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Newsletter / Suscripción B2B */}
        <div className="bg-[#1E1E1E] rounded-2xl p-6 sm:p-8 mb-12 border border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-md">
            <span className="text-[11px] font-bold text-[#B71C1C] uppercase tracking-wider bg-red-950/60 px-2.5 py-1 rounded-md">
              Club Gastronómico Valle Lindo
            </span>
            <h3 className="text-xl sm:text-2xl font-black mt-2">
              Recibe listas de precios mayoristas y ofertas flash
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              Descuentos directos en carnes para asado, quesos para pizza y papas prefritas en tu correo o WhatsApp.
            </p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); alert("¡Gracias por suscribirte al Club Mayorista Valle Lindo! Te enviaremos las mejores listas de precios."); }} className="flex w-full md:w-auto max-w-md gap-2">
            <input
              type="email"
              required
              placeholder="correo@pizzeria.cl o teléfono"
              className="px-4 py-3 rounded-xl bg-black/60 border border-gray-700 text-xs text-white focus:outline-none focus:border-[#B71C1C] flex-1"
            />
            <button
              type="submit"
              className="px-5 py-3 bg-[#B71C1C] hover:bg-[#8E0000] text-white text-xs font-bold rounded-xl transition-all shadow-md shrink-0 flex items-center gap-1.5"
            >
              <span>Suscribirme</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

        {/* Columnas del Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-gray-800 text-xs">
          {/* Columna 1: Info Empresa */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-black border border-gray-700 p-0.5 shrink-0 flex items-center justify-center">
                <Image
                  src="/assets/branding/logo-valle-lindo.jpeg"
                  alt="Valle Lindo Logo"
                  width={80}
                  height={80}
                  className="object-cover rounded-xl scale-110 w-full h-full"
                />
              </div>
              <div>
                <span className="font-extrabold text-base tracking-tight text-white block">
                  VALLE LINDO
                </span>
                <span className="text-[10px] text-[#B71C1C] font-bold uppercase tracking-wider">
                  Comercializadora & Carnes
                </span>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Distribución mayorista y minorista de quesos para pizzerías, cortes de carnes seleccionados, insumos gastronómicos y productos congelados con despacho rápido en todo Chile.
            </p>

            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-[11px]">
              <ShieldCheck className="w-4 h-4" /> Resolución Sanitaria SEREMI de Salud al día.
            </div>
          </div>

          {/* Columna 2: Categorías Rápidas */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider text-[#B71C1C]">
              Categorías Principales
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/catalogo?cat=quesos" className="hover:text-white transition-colors">
                  🧀 Queso Mozzarella y Palmita Río Grande
                </Link>
              </li>
              <li>
                <Link href="/catalogo?cat=carnes" className="hover:text-white transition-colors">
                  🥩 Carnes al por Mayor (Lomo Vetado, Cerdo, Pollo)
                </Link>
              </li>
              <li>
                <Link href="/catalogo?cat=pizza" className="hover:text-white transition-colors">
                  🍕 Insumos para Pizzerías (Pepperoni, Salsa, Orégano)
                </Link>
              </li>
              <li>
                <Link href="/catalogo?cat=congelados" className="hover:text-white transition-colors">
                  ❄️ Papas Prefritas y Congelados Gastronómicos
                </Link>
              </li>
              <li>
                <Link href="/catalogo?cat=embutidos" className="hover:text-white transition-colors">
                  🌭 Vienesas, Longanizas y Chorizos Parrilleros
                </Link>
              </li>
              <li>
                <Link href="/catalogo?ofertas=true" className="hover:text-emerald-400 text-[#2E7D32] font-semibold transition-colors">
                  🔥 Ofertas por Volumen Semanal
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Catálogos y Empresas */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider text-[#B71C1C]">
              Descargas y B2B
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link 
                  href="/downloads/catalogo_pizzerias_vallelindo.pdf" 
                  target="_blank" 
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-red-500" /> Descargar Catálogo Pizzerías PDF
                </Link>
              </li>
              <li>
                <Link 
                  href="/downloads/catalogo_general_2026.pdf" 
                  target="_blank" 
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-red-500" /> Descargar Catálogo General 2026 PDF
                </Link>
              </li>
              <li>
                <Link href="/cotizacion" className="hover:text-white transition-colors">
                  📄 Cotizador Express para Locales
                </Link>
              </li>
              <li>
                <Link href="/cliente" className="hover:text-white transition-colors">
                  👤 Portal Cliente / Recompra 1-Clic
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-white transition-colors">
                  ⚙️ Gestión y Dashboard de Ventas
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto & Despacho */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider text-[#B71C1C]">
              Atención y Despacho
            </h4>
            <div className="space-y-2.5 text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#B71C1C] shrink-0 mt-0.5" />
                <span>Centro de Distribución: Región Metropolitana, Santiago de Chile.</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#B71C1C] shrink-0" />
                <span>+56 9 8790 7981 / +56 2 2345 6789</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#B71C1C] shrink-0" />
                <span>ventas@comercializadoravallelindo.cl</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#B71C1C] shrink-0" />
                <span>Lunes a Sábado: 08:00 a 19:00 hrs.</span>
              </div>
            </div>

            <div className="pt-2">
              <div className="text-[11px] font-bold text-gray-300 mb-1.5">Medios de Pago:</div>
              <div className="flex flex-wrap gap-1.5 text-[10px] text-gray-400">
                <span className="bg-gray-800 px-2 py-1 rounded border border-gray-700">Webpay Plus</span>
                <span className="bg-gray-800 px-2 py-1 rounded border border-gray-700">Mercado Pago</span>
                <span className="bg-gray-800 px-2 py-1 rounded border border-gray-700">Transferencia</span>
                <span className="bg-gray-800 px-2 py-1 rounded border border-gray-700">Contra Entrega</span>
              </div>
            </div>
          </div>
        </div>

        {/* CAJA OFICIAL DE DATOS PARA TRANSFERENCIA BANCARIA B2B */}
        <div className="mt-10 pt-8 border-t border-gray-800">
          <div className="bg-gradient-to-r from-neutral-900 via-[#181818] to-neutral-900 border border-neutral-700/80 rounded-2xl p-5 sm:p-6 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#B71C1C]/20 border border-[#B71C1C]/50 flex items-center justify-center text-[#B71C1C] shrink-0">
                  <Landmark className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-black tracking-widest text-[#B71C1C] uppercase block">Medio de Pago Oficial B2B</span>
                  <h4 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                    <span>Datos para Transferencia Bancaria</span>
                    <span className="text-[10px] bg-emerald-950 text-emerald-400 font-bold px-2 py-0.5 rounded-full border border-emerald-800 hidden sm:inline-block">Facturación Inmediata</span>
                  </h4>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold bg-amber-950/40 px-3 py-1.5 rounded-xl border border-amber-800/60">
                <Truck className="w-4 h-4 shrink-0 text-amber-400" />
                <span>¡Despachos a todo Chile!</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mt-4 text-xs">
              <div className="bg-black/50 rounded-xl p-3.5 border border-neutral-800/90 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider block mb-1">Razón Social & RUT</span>
                  <strong className="text-white font-extrabold text-xs sm:text-sm block leading-snug">Comercializadora Valle Lindo SpA</strong>
                </div>
                <div className="mt-2 text-amber-400 font-mono font-bold text-xs">RUT: 77.891.571-5</div>
              </div>

              <div className="bg-black/50 rounded-xl p-3.5 border border-neutral-800/90 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider block mb-1">Banco & Tipo de Cuenta</span>
                  <strong className="text-white font-extrabold text-xs sm:text-sm block leading-snug">Banco Santander</strong>
                </div>
                <div className="mt-2 text-gray-300 font-semibold text-xs">Cuenta Corriente</div>
              </div>

              <div className="bg-black/50 rounded-xl p-3.5 border border-neutral-800/90 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider block mb-1">Número de Cuenta</span>
                  <strong className="text-emerald-400 font-mono font-black text-sm sm:text-base tracking-wide block">0-000-9363038-6</strong>
                </div>
                <div className="mt-2 text-gray-400 text-[10px]">o versión corta: 93630386</div>
              </div>

              <div className="bg-black/50 rounded-xl p-3.5 border border-neutral-800/90 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider block mb-1">Envío de Comprobantes</span>
                  <a href="mailto:vallelindocl@gmail.com" className="text-white hover:text-amber-400 font-bold text-xs sm:text-sm block truncate transition-colors">vallelindocl@gmail.com</a>
                </div>
                <div className="mt-2 flex items-center justify-between text-[11px]">
                  <a href="https://wa.me/56987907981" target="_blank" className="text-emerald-400 font-bold hover:underline flex items-center gap-1">
                    <span>WhatsApp: +56 9 8790 7981</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-4">
          <div>
            © {new Date().getFullYear()} Comercializadora Valle Lindo SpA. Todos los derechos reservados.
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/terminos" className="hover:text-gray-300">Términos y Condiciones</Link>
            <span>•</span>
            <Link href="/privacidad" className="hover:text-gray-300">Políticas de Privacidad</Link>
            <span>•</span>
            <Link href="/despacho" className="hover:text-gray-300">Tiempos de Despacho</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
