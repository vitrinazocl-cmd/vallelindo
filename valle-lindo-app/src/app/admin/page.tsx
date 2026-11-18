"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  TrendingUp, 
  Package, 
  Users, 
  DollarSign, 
  Truck, 
  AlertTriangle, 
  Search, 
  Filter, 
  CheckCircle2, 
  Clock, 
  FileText, 
  ArrowUpRight,
  ShieldAlert,
  Download
} from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";

export default function AdminDashboardPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [stockFilter, setStockFilter] = useState<"todos" | "bajos">("todos");

  // Métricas
  const kpis = [
    { title: "Ventas Facturadas del Mes", value: "$18.420.900", change: "+18.4%", icon: DollarSign, isPositive: true },
    { title: "Ticket Promedio Mayorista", value: "$142.500", change: "+6.2%", icon: TrendingUp, isPositive: true },
    { title: "Pedidos B2B en Ruta", value: "14 móviles", change: "Activo", icon: Truck, isPositive: true },
    { title: "Locales y Pizzerías Activas", value: "528 clientes", change: "+32 este mes", icon: Users, isPositive: true },
  ];

  // Pedidos recientes en el sistema
  const [orders, setOrders] = useState([
    { id: "VL-849201", client: "Pizzería Don Luigi", amount: 124970, status: "En Ruta", time: "Hace 25 min", payment: "Factura 30d" },
    { id: "VL-849200", client: "Restaurante El Fogón", amount: 248900, status: "Preparando", time: "Hace 40 min", payment: "Webpay" },
    { id: "VL-849199", client: "Burger & Co Food Truck", amount: 68400, status: "Entregado", time: "Hace 2 hrs", payment: "Transferencia" },
    { id: "VL-849198", client: "Trattoria La Nonna", amount: 312500, status: "Entregado", time: "Hace 3 hrs", payment: "Factura Inmediata" },
    { id: "VL-849197", client: "Casino Corporativo Central", amount: 540000, status: "Entregado", time: "Hace 4 hrs", payment: "Factura 30d" },
  ]);

  const toggleOrderStatus = (orderId: string) => {
    setOrders((prev) =>
      prev.map((o) => {
        if (o.id === orderId) {
          const nextStatus = o.status === "Preparando" ? "En Ruta" : o.status === "En Ruta" ? "Entregado" : "Preparando";
          return { ...o, status: nextStatus };
        }
        return o;
      })
    );
  };

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.sku.toLowerCase().includes(searchTerm.toLowerCase());
    if (stockFilter === "bajos") return matchSearch && p.stock < 100;
    return matchSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Header Admin */}
      <div className="bg-[#121212] text-white p-6 sm:p-8 rounded-3xl border border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-950 text-red-300 text-xs font-bold border border-red-800 mb-1">
            <span>Panel de Control Administrativo B2B</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white">
            Dashboard de Ventas & Gestión de Inventario
          </h1>
          <p className="text-xs text-gray-400 mt-1">
            Supervisión en tiempo real de pedidos de pizzerías, stock en frigoríficos y facturación electrónica.
          </p>
        </div>

        <div className="flex gap-2">
          <Link
            href="/downloads/catalogo_general_2026.pdf"
            target="_blank"
            className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl border border-white/20 flex items-center gap-1.5 transition-colors"
          >
            <Download className="w-4 h-4" /> Exportar Lista de Precios
          </Link>
        </div>
      </div>

      {/* KPIS DE VENTAS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-gray-500">{kpi.title}</span>
                <div className="w-8 h-8 rounded-lg bg-red-50 text-[#B71C1C] flex items-center justify-center">
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl font-black text-gray-900">{kpi.value}</div>
              <div className="text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                <ArrowUpRight className="w-3.5 h-3.5" /> {kpi.change}
              </div>
            </div>
          );
        })}
      </div>

      {/* PEDIDOS RECIENTES Y ESTADO */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-xs p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-extrabold text-gray-900">
              Pedidos B2B Recibidos Hoy
            </h2>
            <span className="text-xs text-gray-500">Haz clic en el estado para cambiar de fase logística</span>
          </div>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
            ● Despachos en Tiempo Real
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-gray-50 text-gray-500 font-bold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="p-3">N° Orden</th>
                <th className="p-3">Cliente / Local</th>
                <th className="p-3">Hora</th>
                <th className="p-3">Total</th>
                <th className="p-3">Medio de Pago</th>
                <th className="p-3">Estado Logístico</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 font-medium text-gray-700">
              {orders.map((o) => (
                <tr key={o.id} className="hover:bg-gray-50/80 transition-colors">
                  <td className="p-3 font-mono font-bold text-gray-900">{o.id}</td>
                  <td className="p-3 font-bold text-gray-900">{o.client}</td>
                  <td className="p-3 text-gray-500">{o.time}</td>
                  <td className="p-3 font-black text-[#B71C1C]">${o.amount.toLocaleString("es-CL")}</td>
                  <td className="p-3">
                    <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-mono text-[11px]">
                      {o.payment}
                    </span>
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => toggleOrderStatus(o.id)}
                      className={`px-3 py-1 rounded-full text-[11px] font-extrabold cursor-pointer transition-colors shadow-xs ${
                        o.status === "Entregado"
                          ? "bg-emerald-100 text-emerald-800"
                          : o.status === "En Ruta"
                          ? "bg-blue-100 text-blue-800 animate-pulse"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {o.status === "Entregado" ? "✅ Entregado" : o.status === "En Ruta" ? "🚚 En Ruta" : "⏳ Preparando"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* GESTIÓN DE INVENTARIO Y STOCK */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-xs p-6 space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-base font-extrabold text-gray-900">
              Inventario & Control de Stock en Frigorífico
            </h2>
            <span className="text-xs text-gray-500">Supervisión de piezas, barras y cajas disponibles</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <input
                type="text"
                placeholder="Buscar SKU o producto..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 text-xs border border-gray-300 rounded-lg focus:outline-none focus:border-[#B71C1C]"
              />
              <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-2.5" />
            </div>

            <button
              onClick={() => setStockFilter(stockFilter === "todos" ? "bajos" : "todos")}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-colors ${
                stockFilter === "bajos"
                  ? "bg-amber-100 text-amber-900 border-amber-300"
                  : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
              }`}
            >
              ⚠️ Alerta Stock Bajo
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-gray-50 text-gray-500 font-bold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="p-3">SKU</th>
                <th className="p-3">Producto</th>
                <th className="p-3">Categoría</th>
                <th className="p-3">Formato / Peso</th>
                <th className="p-3">Precio Base</th>
                <th className="p-3">Stock Físico</th>
                <th className="p-3">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 font-medium text-gray-700">
              {filteredProducts.map((p) => (
                <tr key={p.id} className="hover:bg-gray-50/80 transition-colors">
                  <td className="p-3 font-mono font-bold text-gray-900">{p.sku}</td>
                  <td className="p-3 font-bold text-gray-900">{p.name}</td>
                  <td className="p-3">{p.categoryName}</td>
                  <td className="p-3 text-gray-500">{p.unit}</td>
                  <td className="p-3 font-extrabold text-[#B71C1C]">${p.price.toLocaleString("es-CL")}</td>
                  <td className="p-3 font-mono font-bold">{p.stock} unidades</td>
                  <td className="p-3">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                        p.stock > 100
                          ? "bg-emerald-100 text-emerald-800"
                          : p.stock > 50
                          ? "bg-blue-100 text-blue-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {p.stock > 100 ? "Óptimo" : p.stock > 50 ? "Normal" : "Reposición Urgente"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
