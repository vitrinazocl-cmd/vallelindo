"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  FileText, 
  Building2, 
  Plus, 
  Trash2, 
  Download, 
  MessageCircle, 
  Printer, 
  ShieldCheck, 
  Check, 
  ArrowLeft 
} from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";

interface QuoteItem {
  product: Product;
  quantity: number;
}

export default function QuotePage() {
  const [selectedProductId, setSelectedProductId] = useState<string>(PRODUCTS[0].id);
  const [addQty, setAddQty] = useState<number>(5);
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([
    { product: PRODUCTS[0], quantity: 5 }, // Queso Palmita 10kg
    { product: PRODUCTS[1], quantity: 8 }, // Queso Mozzarella 3kg
    { product: PRODUCTS[7], quantity: 10 }, // Pepperoni 1kg
  ]);

  const [companyInfo, setCompanyInfo] = useState({
    businessName: "Pizzería La Tradición",
    rut: "76.456.789-1",
    contactPerson: "Carlos Henríquez",
    phone: "+56 9 8888 7777",
    email: "compras@latradicion.cl",
    address: "Av. Italia 1250, Providencia, Santiago",
    notes: "Despacho los martes y viernes antes de las 11:00 am.",
  });

  const handleAddItem = () => {
    const prod = PRODUCTS.find((p) => p.id === selectedProductId);
    if (!prod) return;

    setQuoteItems((prev) => {
      const exists = prev.find((item) => item.product.id === prod.id);
      if (exists) {
        return prev.map((item) =>
          item.product.id === prod.id
            ? { ...item, quantity: item.quantity + addQty }
            : item
        );
      }
      return [...prev, { product: prod, quantity: addQty }];
    });
  };

  const handleRemoveItem = (id: string) => {
    setQuoteItems((prev) => prev.filter((i) => i.product.id !== id));
  };

  const handleUpdateQty = (id: string, qty: number) => {
    if (qty <= 0) return handleRemoveItem(id);
    setQuoteItems((prev) =>
      prev.map((i) => (i.product.id === id ? { ...i, quantity: qty } : i))
    );
  };

  // Calcular precio según tramo mayorista
  const getItemPrice = (product: Product, qty: number) => {
    if (!product.wholesaleTiers || product.wholesaleTiers.length === 0) return product.price;
    const sorted = [...product.wholesaleTiers].sort((a, b) => b.minQty - a.minQty);
    for (const tier of sorted) {
      if (qty >= tier.minQty) return tier.price;
    }
    return product.price;
  };

  const subtotalNeto = quoteItems.reduce((sum, item) => {
    const unitP = getItemPrice(item.product, item.quantity);
    return sum + unitP * item.quantity;
  }, 0);

  const iva = Math.round(subtotalNeto * 0.19);
  const total = subtotalNeto + iva;

  // WhatsApp
  const generateWhatsAppQuote = () => {
    let msg = `Hola Comercializadora Valle Lindo! Deseo formalizar la siguiente Cotización Mayorista B2B:\n\n`;
    msg += `*Empresa:* ${companyInfo.businessName} (RUT: ${companyInfo.rut})\n`;
    msg += `*Contacto:* ${companyInfo.contactPerson} (${companyInfo.phone})\n`;
    msg += `*Dirección:* ${companyInfo.address}\n\n`;
    msg += `*Detalle de Insumos:*\n`;
    quoteItems.forEach((item, idx) => {
      const p = getItemPrice(item.product, item.quantity);
      msg += `${idx + 1}. ${item.product.name} (SKU: ${item.product.sku}) - Cantidad: ${item.quantity} x $${p.toLocaleString("es-CL")}\n`;
    });
    msg += `\n*Subtotal Neto:* $${subtotalNeto.toLocaleString("es-CL")}\n`;
    msg += `*Total con IVA:* $${total.toLocaleString("es-CL")}\n\n`;
    if (companyInfo.notes) {
      msg += `Notas: ${companyInfo.notes}\n\n`;
    }
    msg += `Quedo atento a la confirmación de disponibilidad para emitir la Orden de Compra.`;
    return `https://wa.me/56987654321?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-gray-200">
        <Link href="/catalogo" className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-black font-semibold">
          <ArrowLeft className="w-4 h-4" /> Volver al Catálogo
        </Link>
        <button
          onClick={() => window.print()}
          className="px-3.5 py-1.5 rounded-lg border border-gray-300 text-xs font-bold text-gray-700 hover:bg-gray-100 flex items-center gap-1.5"
        >
          <Printer className="w-3.5 h-3.5" /> Imprimir Cotización
        </button>
      </div>

      {/* DOCUMENTO DE COTIZACIÓN FORMAL */}
      <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-10 shadow-lg space-y-8 print:border-none print:shadow-none print:p-0">
        {/* Encabezado Membretado */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-6 border-b-2 border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-black overflow-hidden border border-gray-200 shadow-sm shrink-0">
              <Image
                src="/assets/branding/logo-valle-lindo.jpeg"
                alt="Valle Lindo Logo"
                width={56}
                height={56}
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-[#121212] tracking-tight">
                COMERCIALIZADORA VALLE LINDO SpA
              </h1>
              <p className="text-xs text-gray-500">
                Distribución Mayorista para Pizzerías, Carnes & Gastronomía
              </p>
              <div className="text-[11px] text-gray-400 mt-0.5">
                RUT: 76.987.654-3 • Santiago, Chile • ventas@comercializadoravallelindo.cl
              </div>
            </div>
          </div>

          <div className="text-left sm:text-right bg-red-50/70 p-3 rounded-xl border border-red-100 text-xs">
            <span className="text-[#B71C1C] font-extrabold uppercase tracking-wider block">
              COTIZACIÓN FORMAL B2B
            </span>
            <div className="font-mono font-bold text-gray-900 mt-0.5">N° COT-2026-0841</div>
            <div className="text-gray-500 text-[11px]">Fecha: {new Date().toLocaleDateString("es-CL")}</div>
            <div className="text-emerald-700 font-semibold text-[11px]">Validez: 15 días hábiles</div>
          </div>
        </div>

        {/* Datos de la Empresa Cliente */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-200 text-xs">
          <div>
            <span className="font-bold text-gray-400 uppercase text-[10px] block mb-1">
              Datos del Cliente / Local
            </span>
            <input
              type="text"
              value={companyInfo.businessName}
              onChange={(e) => setCompanyInfo({ ...companyInfo, businessName: e.target.value })}
              className="w-full font-bold text-gray-900 bg-transparent border-b border-gray-300 focus:border-[#B71C1C] outline-none py-0.5 mb-1 text-sm"
              placeholder="Razón Social / Nombre Local"
            />
            <input
              type="text"
              value={companyInfo.rut}
              onChange={(e) => setCompanyInfo({ ...companyInfo, rut: e.target.value })}
              className="w-full text-gray-600 bg-transparent border-b border-gray-300 focus:border-[#B71C1C] outline-none py-0.5 mb-1 font-mono text-[11px]"
              placeholder="RUT Empresa"
            />
            <input
              type="text"
              value={companyInfo.address}
              onChange={(e) => setCompanyInfo({ ...companyInfo, address: e.target.value })}
              className="w-full text-gray-600 bg-transparent border-b border-gray-300 focus:border-[#B71C1C] outline-none py-0.5 text-xs"
              placeholder="Dirección del Local"
            />
          </div>

          <div>
            <span className="font-bold text-gray-400 uppercase text-[10px] block mb-1">
              Contacto y Condiciones
            </span>
            <input
              type="text"
              value={companyInfo.contactPerson}
              onChange={(e) => setCompanyInfo({ ...companyInfo, contactPerson: e.target.value })}
              className="w-full text-gray-900 font-semibold bg-transparent border-b border-gray-300 focus:border-[#B71C1C] outline-none py-0.5 mb-1 text-xs"
              placeholder="Persona de Contacto"
            />
            <input
              type="text"
              value={companyInfo.phone}
              onChange={(e) => setCompanyInfo({ ...companyInfo, phone: e.target.value })}
              className="w-full text-gray-600 bg-transparent border-b border-gray-300 focus:border-[#B71C1C] outline-none py-0.5 mb-1 text-xs"
              placeholder="Teléfono Móvil"
            />
            <input
              type="text"
              value={companyInfo.email}
              onChange={(e) => setCompanyInfo({ ...companyInfo, email: e.target.value })}
              className="w-full text-gray-600 bg-transparent border-b border-gray-300 focus:border-[#B71C1C] outline-none py-0.5 text-xs"
              placeholder="Correo Electrónico"
            />
          </div>
        </div>

        {/* Selector para agregar insumos a la cotización */}
        <div className="p-4 bg-red-50/40 rounded-2xl border border-red-100 space-y-3 print:hidden">
          <span className="text-xs font-extrabold text-[#B71C1C] uppercase tracking-wider block">
            + Agregar Insumo al Presupuesto:
          </span>
          <div className="flex flex-col sm:flex-row gap-2">
            <select
              value={selectedProductId}
              onChange={(e) => setSelectedProductId(e.target.value)}
              className="flex-1 px-3 py-2 text-xs border border-gray-300 rounded-lg bg-white font-medium"
            >
              {PRODUCTS.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} ({p.unit}) - Base: ${p.price.toLocaleString("es-CL")}
                </option>
              ))}
            </select>

            <div className="flex items-center gap-2">
              <input
                type="number"
                min="1"
                value={addQty}
                onChange={(e) => setAddQty(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-20 px-2 py-2 text-xs border border-gray-300 rounded-lg text-center font-bold"
                placeholder="Cant."
              />
              <button
                type="button"
                onClick={handleAddItem}
                className="px-4 py-2 bg-[#B71C1C] hover:bg-[#8E0000] text-white text-xs font-bold rounded-lg shadow flex items-center gap-1 transition-colors"
              >
                <Plus className="w-4 h-4" /> Agregar
              </button>
            </div>
          </div>
        </div>

        {/* Tabla de Productos Cotizados */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-[#121212] text-white uppercase text-[10px] tracking-wider">
              <tr>
                <th className="p-3">SKU</th>
                <th className="p-3">Insumo / Descripción</th>
                <th className="p-3">Formato</th>
                <th className="p-3 text-center">Cantidad</th>
                <th className="p-3 text-right">Precio Mayorista</th>
                <th className="p-3 text-right">Total Neto</th>
                <th className="p-3 text-center print:hidden">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {quoteItems.map((item) => {
                const unitP = getItemPrice(item.product, item.quantity);
                const lineTotal = unitP * item.quantity;
                return (
                  <tr key={item.product.id} className="hover:bg-gray-50">
                    <td className="p-3 font-mono font-bold text-gray-500">{item.product.sku}</td>
                    <td className="p-3 font-bold text-gray-900">{item.product.name}</td>
                    <td className="p-3 text-gray-500">{item.product.unit}</td>
                    <td className="p-3 text-center">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => handleUpdateQty(item.product.id, parseInt(e.target.value) || 1)}
                        className="w-16 px-1 py-1 border border-gray-300 rounded text-center font-bold text-xs print:border-none"
                      />
                    </td>
                    <td className="p-3 text-right font-semibold text-gray-700">
                      ${unitP.toLocaleString("es-CL")}
                    </td>
                    <td className="p-3 text-right font-black text-gray-900">
                      ${lineTotal.toLocaleString("es-CL")}
                    </td>
                    <td className="p-3 text-center print:hidden">
                      <button
                        onClick={() => handleRemoveItem(item.product.id)}
                        className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Resumen de Totales e Impuestos */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6 pt-4 border-t border-gray-200 text-xs">
          <div className="space-y-2 max-w-sm">
            <span className="font-bold text-gray-900 block">Condiciones Generales de Abastecimiento:</span>
            <ul className="list-disc pl-4 space-y-1 text-gray-500 text-[11px]">
              <li>Despacho sin costo en pedidos superiores a $75.000 neto dentro de la Región Metropolitana.</li>
              <li>Cadena de frío controlada con certificados SEREMI.</li>
              <li>Factura electrónica emitida al momento del despacho.</li>
            </ul>
          </div>

          <div className="w-full sm:w-64 space-y-2 bg-gray-50 p-4 rounded-2xl border border-gray-200 text-xs">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal Neto:</span>
              <strong className="text-gray-900 font-bold">${subtotalNeto.toLocaleString("es-CL")}</strong>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>IVA (19%):</span>
              <strong className="text-gray-900 font-bold">${iva.toLocaleString("es-CL")}</strong>
            </div>
            <div className="flex justify-between text-base font-black text-gray-900 pt-2 border-t border-gray-200">
              <span>Total Cotizado:</span>
              <span className="text-[#B71C1C]">${total.toLocaleString("es-CL")}</span>
            </div>
          </div>
        </div>

        {/* Botones de acción final */}
        <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-end print:hidden">
          <a
            href={generateWhatsAppQuote()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Enviar Cotización a Ejecutivo B2B por WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
