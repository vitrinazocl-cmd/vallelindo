"use client";

import React, { useState } from "react";
import { MessageCircle, X, ChevronRight, Send, ShieldCheck, Clock } from "lucide-react";

export default function WhatsAppFloating() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState("");

  const quickOptions = [
    {
      title: "🧀 Quesos para Pizzerías",
      text: "Hola Valle Lindo, requiero cotización mayorista de Queso Mozzarella y Palmita para mi pizzería.",
    },
    {
      title: "🥩 Carnes y Cortes por Mayor",
      text: "Hola, me interesa conocer los precios y stock de Lomo Vetado, Vacuno y Cerdo para restaurante.",
    },
    {
      title: "🚚 Despacho y Cobertura",
      text: "Hola, me gustaría saber si tienen despacho disponible para mi comuna y tiempos de entrega.",
    },
    {
      title: "📄 Facturación y Crédito B2B",
      text: "Hola, represento a una empresa gastronómica y deseo habilitar cuenta para compra con Factura.",
    },
  ];

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (customMsg.trim()) {
      const url = `https://wa.me/56987654321?text=${encodeURIComponent(customMsg.trim())}`;
      window.open(url, "_blank");
      setCustomMsg("");
      setIsOpen(false);
    }
  };

  const handleSendOption = (text: string) => {
    const url = `https://wa.me/56987654321?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-16 sm:bottom-6 right-3 sm:right-6 z-50 flex flex-col items-end">
      {/* Ventana de Chat Rápido WhatsApp */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-in fade-in slide-in-from-bottom-6">
          {/* Header */}
          <div className="bg-[#2E7D32] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white text-emerald-800 flex items-center justify-center font-extrabold text-sm shadow">
                  VL
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-300 border-2 border-[#2E7D32] rounded-full" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm leading-tight">Valle Lindo Ejecutivo</h4>
                <div className="flex items-center gap-1 text-[11px] text-emerald-100">
                  <Clock className="w-3 h-3" /> Responde en &lt; 5 minutos
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-emerald-800 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-gray-50 max-h-96 overflow-y-auto space-y-3">
            <div className="bg-white p-3 rounded-xl rounded-tl-none border border-gray-200 text-xs text-gray-700 shadow-xs">
              <p className="font-medium">
                👋 ¡Hola! Bienvenido a <strong>Comercializadora Valle Lindo</strong>.
              </p>
              <p className="mt-1 text-gray-600">
                ¿En qué te podemos asesorar hoy para tu pizzería, restaurante o negocio gastronómico?
              </p>
            </div>

            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                Opciones frecuentes:
              </span>
              {quickOptions.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleSendOption(opt.text)}
                  className="w-full text-left p-2.5 rounded-lg bg-white hover:bg-emerald-50 border border-gray-200 hover:border-emerald-300 text-xs text-gray-800 font-semibold transition-all flex items-center justify-between group shadow-xs"
                >
                  <span>{opt.title}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-emerald-700" />
                </button>
              ))}
            </div>
          </div>

          {/* Formulario Mensaje Libre */}
          <form onSubmit={handleSendCustom} className="p-3 bg-white border-t border-gray-200 flex gap-2">
            <input
              type="text"
              placeholder="Escribe tu consulta aquí..."
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              className="flex-1 px-3 py-2 text-xs border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600 bg-gray-50"
            />
            <button
              type="submit"
              className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors flex items-center justify-center shadow"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}

      {/* Botón Principal Flotante (Compacto en móviles) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2 bg-[#2E7D32] hover:bg-[#1B5E20] text-white p-3 sm:px-4 sm:py-3.5 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 border-2 border-white"
        aria-label="Abrir WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="font-extrabold text-xs hidden sm:inline tracking-wide">
          Atención Mayorista WhatsApp
        </span>
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
        </span>
      </button>
    </div>
  );
}
