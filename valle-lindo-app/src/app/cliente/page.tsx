"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  User, 
  Package, 
  MapPin, 
  Clock, 
  RotateCw, 
  Heart, 
  FileText, 
  Truck, 
  CheckCircle2, 
  AlertCircle,
  Building2,
  ChevronRight,
  ShoppingCart
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/data/products";

export default function ClientDashboardPage() {
  const { wishlist, addToCart, setIsCartOpen } = useCart();
  const [activeTab, setActiveTab] = useState<"pedidos" | "seguimiento" | "direcciones" | "favoritos" | "cotizaciones">("pedidos");

  // Pedidos de muestra con recompra
  const sampleOrders = [
    {
      id: "VL-849201",
      date: "14 de Noviembre, 2026",
      status: "Entregado",
      statusColor: "emerald",
      total: 124970,
      doc: "Factura Electrónica #4829",
      items: [
        { name: "Queso Palmita Río Grande 10 kg", qty: 2, price: 54990, slug: "queso-palmita-rio-grande-10kg" },
        { name: "Salsa de Tomate Pizza Sauce 3 kg", qty: 2, price: 6490, slug: "salsa-tomate-pizza-sauce-3kg" },
        { name: "Pepperoni Laminado 1 kg", qty: 1, price: 8990, slug: "pepperoni-laminado-pizza-1kg" }
      ]
    },
    {
      id: "VL-794012",
      date: "04 de Noviembre, 2026",
      status: "Entregado",
      statusColor: "emerald",
      total: 98450,
      doc: "Factura Electrónica #4711",
      items: [
        { name: "Queso Mozzarella en Barra 3 kg", qty: 4, price: 18490, slug: "queso-mozzarella-barra-colun-3kg" },
        { name: "Papas Fritas Prefritas 2.5 kg", qty: 4, price: 4390, slug: "papas-fritas-prefritas-2-5kg" },
        { name: "Salchichas Vienesas 1 kg", qty: 2, price: 3490, slug: "salchicha-vienesa-tradicional-1kg" }
      ]
    }
  ];

  // Pedido activo en seguimiento
  const activeShipment = {
    orderId: "VL-910482",
    date: "Hoy, 18 de Noviembre",
    estimatedDelivery: "Hoy entre 14:00 y 17:00 hrs",
    driver: "Rodrigo Morales (Móvil Refrigerado #4)",
    destination: "Av. Providencia 1450, Local 3, Providencia",
    steps: [
      { title: "Orden Confirmada y Facturada", done: true, time: "08:30 hrs" },
      { title: "Preparado en Frigorífico Central", done: true, time: "10:15 hrs" },
      { title: "En Ruta con Cadena de Frío", done: true, time: "11:45 hrs" },
      { title: "Entregado en Local", done: false, time: "Pendiente" }
    ]
  };

  const handleReorder = (order: typeof sampleOrders[0]) => {
    order.items.forEach((item) => {
      const prod = PRODUCTS.find((p) => p.slug === item.slug);
      if (prod) {
        addToCart(prod, item.qty);
      }
    });
    setIsCartOpen(true);
  };

  const favoriteProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Header Cliente */}
      <div className="bg-[#121212] text-white p-6 sm:p-8 rounded-3xl border border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-[#B71C1C] flex items-center justify-center text-white font-black text-2xl shadow-lg">
            P
          </div>
          <div>
            <div className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-400 bg-amber-950/60 px-2.5 py-0.5 rounded-full mb-1">
              <Building2 className="w-3 h-3" /> Cliente Empresa B2B Verificado
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-white">
              Pizzería & Ristorante Napoli
            </h1>
            <p className="text-xs text-gray-400">
              RUT: 76.543.210-K • Contacto: donluigi@napoli.cl • +56 9 9876 5432
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <Link
            href="/cotizacion"
            className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl border border-white/20 transition-colors"
          >
            Nueva Cotización
          </Link>
          <button
            onClick={() => handleReorder(sampleOrders[0])}
            className="px-4 py-2 bg-[#B71C1C] hover:bg-[#8E0000] text-white text-xs font-bold rounded-xl shadow transition-colors flex items-center gap-1.5"
          >
            <RotateCw className="w-3.5 h-3.5" /> Recomprar Último Pedido
          </button>
        </div>
      </div>

      {/* Tabs del Panel */}
      <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-2 text-xs sm:text-sm font-bold">
        <button
          onClick={() => setActiveTab("pedidos")}
          className={`px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5 ${
            activeTab === "pedidos" ? "bg-[#B71C1C] text-white shadow-xs" : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <Package className="w-4 h-4" /> Historial de Compras
        </button>

        <button
          onClick={() => setActiveTab("seguimiento")}
          className={`px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5 ${
            activeTab === "seguimiento" ? "bg-[#B71C1C] text-white shadow-xs" : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <Truck className="w-4 h-4" /> Seguimiento en Vivo
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        </button>

        <button
          onClick={() => setActiveTab("favoritos")}
          className={`px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5 ${
            activeTab === "favoritos" ? "bg-[#B71C1C] text-white shadow-xs" : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <Heart className="w-4 h-4" /> Mis Favoritos ({wishlist.length})
        </button>

        <button
          onClick={() => setActiveTab("direcciones")}
          className={`px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5 ${
            activeTab === "direcciones" ? "bg-[#B71C1C] text-white shadow-xs" : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <MapPin className="w-4 h-4" /> Direcciones Guardadas
        </button>
      </div>

      {/* Contenido de Tab: Historial */}
      {activeTab === "pedidos" && (
        <div className="space-y-4">
          <h2 className="text-base font-extrabold text-gray-900">Tus Compras Recientes</h2>
          <div className="space-y-4">
            {sampleOrders.map((order) => (
              <div key={order.id} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-100 gap-2">
                  <div className="flex items-center gap-3">
                    <span className="font-black text-sm text-gray-900">Orden #{order.id}</span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-500">{order.date}</span>
                    <span className="text-xs bg-emerald-50 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full">
                      ✅ {order.status}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 font-mono">
                    {order.doc}
                  </div>
                </div>

                <div className="divide-y divide-gray-50 text-xs text-gray-700">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="py-2 flex justify-between items-center">
                      <span>{item.qty}x {item.name}</span>
                      <span className="font-semibold">${(item.price * item.qty).toLocaleString("es-CL")}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-sm font-extrabold text-gray-900">
                    Total: <span className="text-[#B71C1C]">${order.total.toLocaleString("es-CL")}</span>
                  </div>

                  <button
                    onClick={() => handleReorder(order)}
                    className="w-full sm:w-auto px-5 py-2.5 bg-gray-900 hover:bg-black text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    <RotateCw className="w-3.5 h-3.5" /> Recomprar este pedido con 1 Clic
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Contenido de Tab: Seguimiento en Vivo */}
      {activeTab === "seguimiento" && (
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-6 max-w-3xl">
          <div className="flex items-center justify-between pb-4 border-b border-gray-100">
            <div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                🚚 Despacho en Curso
              </span>
              <h3 className="text-lg font-black text-gray-900 mt-1">
                Orden #{activeShipment.orderId}
              </h3>
            </div>
            <div className="text-right text-xs">
              <span className="text-gray-400 block">Llegada estimada:</span>
              <strong className="text-gray-900 font-bold">{activeShipment.estimatedDelivery}</strong>
            </div>
          </div>

          <div className="space-y-4 text-xs text-gray-600 bg-gray-50 p-4 rounded-xl border border-gray-200">
            <div><strong>Destino:</strong> {activeShipment.destination}</div>
            <div><strong>Chofer Asignado:</strong> {activeShipment.driver}</div>
          </div>

          {/* Stepper de entrega */}
          <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-200">
            {activeShipment.steps.map((st, i) => (
              <div key={i} className="relative flex items-start gap-3">
                <span
                  className={`absolute -left-6 mt-0.5 w-4 h-4 rounded-full border-2 bg-white flex items-center justify-center ${
                    st.done ? "border-emerald-600 bg-emerald-600 text-white" : "border-gray-300"
                  }`}
                >
                  {st.done && <CheckCircle2 className="w-3 h-3 text-white" />}
                </span>
                <div>
                  <div className={`font-bold text-xs ${st.done ? "text-gray-900" : "text-gray-400"}`}>
                    {st.title}
                  </div>
                  <span className="text-[11px] text-gray-400 font-mono">{st.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Contenido de Tab: Favoritos */}
      {activeTab === "favoritos" && (
        <div className="space-y-4">
          <h2 className="text-base font-extrabold text-gray-900">
            Tus Insumos Frecuentes Guardados
          </h2>
          {favoriteProducts.length === 0 ? (
            <div className="p-8 bg-white rounded-2xl border border-gray-200 text-center text-xs text-gray-500">
              No tienes insumos en tu lista de favoritos. Explora el catálogo y marca con un corazón los que usas con frecuencia.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {favoriteProducts.map((p) => (
                <div key={p.id} className="bg-white p-4 rounded-xl border border-gray-200 flex flex-col justify-between">
                  <div className="relative aspect-square rounded-lg bg-gray-50 overflow-hidden mb-2">
                    <Image src={p.image} alt={p.name} fill className="object-contain p-2" />
                  </div>
                  <h4 className="text-xs font-bold text-gray-900 line-clamp-2">{p.name}</h4>
                  <div className="text-sm font-extrabold text-[#B71C1C] my-2">
                    ${p.price.toLocaleString("es-CL")}
                  </div>
                  <button
                    onClick={() => addToCart(p, 1)}
                    className="w-full py-2 bg-[#B71C1C] text-white text-xs font-bold rounded-lg shadow hover:bg-[#8E0000]"
                  >
                    Añadir al Carro
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Contenido de Tab: Direcciones */}
      {activeTab === "direcciones" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
          <div className="p-4 bg-white rounded-2xl border-2 border-[#B71C1C] shadow-xs space-y-2 text-xs">
            <span className="bg-red-50 text-[#B71C1C] font-bold px-2 py-0.5 rounded text-[10px] uppercase">
              Principal (Cocina Central)
            </span>
            <h4 className="font-extrabold text-sm text-gray-900">Pizzería Napoli Providencia</h4>
            <p className="text-gray-600">Av. Providencia 1450, Local 3</p>
            <p className="text-gray-500">Providencia, Región Metropolitana</p>
            <span className="text-[11px] text-gray-400 block pt-1">Horario recepción: 08:30 a 11:30 hrs</span>
          </div>

          <div className="p-4 bg-white rounded-2xl border border-gray-200 shadow-xs space-y-2 text-xs">
            <span className="bg-gray-100 text-gray-600 font-bold px-2 py-0.5 rounded text-[10px] uppercase">
              Sucursal 2 (Ñuñoa)
            </span>
            <h4 className="font-extrabold text-sm text-gray-900">Napoli Express Plaza Ñuñoa</h4>
            <p className="text-gray-600">Av. Irarrázaval 3210</p>
            <p className="text-gray-500">Ñuñoa, Región Metropolitana</p>
            <span className="text-[11px] text-gray-400 block pt-1">Horario recepción: 10:00 a 13:00 hrs</span>
          </div>
        </div>
      )}
    </div>
  );
}
