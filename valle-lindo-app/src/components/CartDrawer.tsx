"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  Truck, 
  Sparkles, 
  Tag, 
  Check, 
  MessageCircle, 
  AlertCircle,
  ShieldCheck 
} from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    savingsTotal,
    shippingCost,
    freeShippingThreshold,
    minOrderAmount,
    shippingType,
    setShippingType,
    total,
    couponCode,
    applyCoupon,
    removeCoupon,
  } = useCart();

  const [inputCoupon, setInputCoupon] = useState("");
  const [couponError, setCouponError] = useState("");
  const [couponSuccess, setCouponSuccess] = useState("");

  if (!isCartOpen) return null;

  // Cálculo de progreso para envío gratis
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const missingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError("");
    setCouponSuccess("");
    const res = applyCoupon(inputCoupon);
    if (res.success) {
      setCouponSuccess(res.message);
      setInputCoupon("");
    } else {
      setCouponError(res.message);
    }
  };

  // Crear mensaje para pedir por WhatsApp
  const generateWhatsAppOrderLink = () => {
    let msg = `Hola Comercializadora Valle Lindo, deseo confirmar el siguiente pedido:\n\n`;
    cart.forEach((item, idx) => {
      msg += `${idx + 1}. ${item.product.name} (SKU: ${item.product.sku}) - Cantidad: ${item.quantity} x $${item.unitPrice.toLocaleString("es-CL")}\n`;
    });
    msg += `\nSubtotal: $${subtotal.toLocaleString("es-CL")}\n`;
    const shipLabel = subtotal > freeShippingThreshold 
      ? "GRATIS (Pedido sobre $299.990)" 
      : `$${shippingCost.toLocaleString("es-CL")} (${shippingType === 'mas_8km' ? 'Más de 8 km' : 'Radio hasta 8 km'})`;
    msg += `Despacho: ${shipLabel}\n`;
    msg += `TOTAL: $${total.toLocaleString("es-CL")}\n\n`;
    msg += `Por favor coordinar facturación y fecha de entrega. ¡Gracias!`;
    return `https://wa.me/56987907981?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header Carrito */}
          <div className="p-4 bg-gray-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#B71C1C]" />
              <h2 className="font-bold text-base">Tu Carro de Compras</h2>
              <span className="text-xs bg-gray-800 text-gray-300 px-2 py-0.5 rounded-full font-mono">
                {cart.length} {cart.length === 1 ? "ítem" : "ítems"}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Barra de progreso Envío Gratis */}
          <div className="bg-emerald-50 border-b border-emerald-100 p-3 text-xs">
            <div className="flex items-center justify-between font-semibold text-emerald-900 mb-1.5">
              <span className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-emerald-600" />
                {missingForFreeShipping === 0 ? (
                  <span className="text-emerald-700 font-bold">¡Felicidades! Tienes Despacho GRATIS 🚚</span>
                ) : (
                  <span>
                    Te faltan <strong className="text-emerald-700">${missingForFreeShipping.toLocaleString("es-CL")}</strong> para Despacho Gratis
                  </span>
                )}
              </span>
              <span className="font-mono text-emerald-700">{progressPercent}%</span>
            </div>
            <div className="w-full bg-emerald-200 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-emerald-600 h-full rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            {subtotal > 0 && subtotal < minOrderAmount && (
              <div className="flex items-center gap-1.5 text-[11px] text-amber-900 bg-amber-50 border border-amber-200 px-2 py-1 rounded-md font-semibold mt-2">
                <AlertCircle className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                <span>Pedido mínimo: <strong>$50.000</strong> (Faltan <strong>${(minOrderAmount - subtotal).toLocaleString("es-CL")}</strong>)</span>
              </div>
            )}
          </div>

          {/* Lista de Productos en el Carro */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 divide-y divide-gray-100">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-gray-500">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                  <ShoppingBag className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-base font-bold text-gray-900">Tu carro está vacío</h3>
                <p className="text-xs text-gray-500 mt-1 max-w-xs">
                  Explora nuestro catálogo mayorista de carnes, quesos para pizzerías y congelados.
                </p>
                <Link
                  href="/catalogo"
                  onClick={() => setIsCartOpen(false)}
                  className="mt-5 px-5 py-2.5 bg-[#B71C1C] hover:bg-[#8E0000] text-white text-xs font-bold rounded-lg shadow transition-colors"
                >
                  Explorar Catálogo
                </Link>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.product.id} className="pt-3 first:pt-0 flex gap-3">
                  <div className="w-16 h-16 rounded-lg bg-gray-100 shrink-0 overflow-hidden border border-gray-200">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <Link
                        href={`/producto/${item.product.slug}`}
                        onClick={() => setIsCartOpen(false)}
                        className="text-xs font-bold text-gray-900 hover:text-[#B71C1C] line-clamp-2"
                      >
                        {item.product.name}
                      </Link>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-gray-400 hover:text-red-600 p-1 transition-colors ml-1"
                        title="Eliminar"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-[11px] text-gray-500 mt-0.5">
                      {item.product.unit} • SKU: {item.product.sku}
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      {/* Controles de cantidad */}
                      <div className="flex items-center border border-gray-300 rounded-md overflow-hidden bg-white">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2 py-1 hover:bg-gray-100 text-gray-600 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-gray-800 font-mono">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-1 hover:bg-gray-100 text-gray-600 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-right">
                        <div className="text-xs font-extrabold text-[#B71C1C]">
                          ${(item.unitPrice * item.quantity).toLocaleString("es-CL")}
                        </div>
                        {item.unitPrice < item.originalPrice && (
                          <div className="text-[10px] text-emerald-600 font-semibold">
                            Precio tramo mayorista (${item.unitPrice.toLocaleString("es-CL")} c/u)
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cupón y Resumen de Totales */}
          {cart.length > 0 && (
            <div className="p-4 bg-gray-50 border-t border-gray-200 space-y-3">
              {/* Formulario Cupón */}
              <div>
                {couponCode ? (
                  <div className="flex items-center justify-between p-2 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-800">
                    <span className="flex items-center gap-1.5 font-bold">
                      <Tag className="w-3.5 h-3.5 text-emerald-600" /> Cupón: {couponCode} aplicado
                    </span>
                    <button
                      onClick={removeCoupon}
                      className="text-red-600 hover:underline font-semibold text-[11px]"
                    >
                      Quitar
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="flex gap-1.5">
                    <input
                      type="text"
                      placeholder="Código cupón (ej: BIENVENIDO10)"
                      value={inputCoupon}
                      onChange={(e) => setInputCoupon(e.target.value)}
                      className="flex-1 px-3 py-1.5 text-xs border border-gray-300 rounded-lg focus:outline-none focus:border-[#B71C1C] bg-white uppercase font-mono"
                    />
                    <button
                      type="submit"
                      className="px-3 py-1.5 bg-gray-800 hover:bg-black text-white text-xs font-bold rounded-lg transition-colors"
                    >
                      Aplicar
                    </button>
                  </form>
                )}
                {couponError && <p className="text-[11px] text-red-600 mt-1">{couponError}</p>}
                {couponSuccess && <p className="text-[11px] text-emerald-600 mt-1">{couponSuccess}</p>}
              </div>

              {/* Desglose de totales */}
              <div className="space-y-1.5 text-xs text-gray-600 pt-2 border-t border-gray-200">
                <div className="flex justify-between">
                  <span>Subtotal Neto:</span>
                  <span className="font-semibold text-gray-900">${subtotal.toLocaleString("es-CL")}</span>
                </div>

                {savingsTotal > 0 && (
                  <div className="flex justify-between text-emerald-700 font-bold">
                    <span>Ahorro Mayorista / Promocional:</span>
                    <span>-${savingsTotal.toLocaleString("es-CL")}</span>
                  </div>
                )}

                {/* Selector de distancia de despacho */}
                <div className="py-2 border-y border-gray-200">
                  <div className="flex justify-between items-center text-[11px] font-bold text-gray-700 mb-1.5">
                    <span>Distancia de Despacho:</span>
                    {subtotal > freeShippingThreshold && (
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">
                        ¡Despacho GRATIS!
                      </span>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 text-xs">
                    <button
                      type="button"
                      onClick={() => setShippingType('radio_8km')}
                      className={`p-1.5 rounded-lg border text-left transition-all ${
                        shippingType === 'radio_8km'
                          ? 'border-[#B71C1C] bg-red-50 text-[#B71C1C] font-bold'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[11px]">Hasta 8 km</span>
                        <span className={`font-bold ${subtotal > freeShippingThreshold ? 'text-emerald-700 line-through text-[10px]' : ''}`}>
                          $3.000
                        </span>
                      </div>
                      {subtotal > freeShippingThreshold && (
                        <span className="text-[10px] text-emerald-700 font-bold block">GRATIS</span>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShippingType('mas_8km')}
                      className={`p-1.5 rounded-lg border text-left transition-all ${
                        shippingType === 'mas_8km'
                          ? 'border-[#B71C1C] bg-red-50 text-[#B71C1C] font-bold'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[11px]">Más de 8 km</span>
                        <span className={`font-bold ${subtotal > freeShippingThreshold ? 'text-emerald-700 line-through text-[10px]' : ''}`}>
                          $4.000
                        </span>
                      </div>
                      {subtotal > freeShippingThreshold && (
                        <span className="text-[10px] text-emerald-700 font-bold block">GRATIS</span>
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex justify-between">
                  <span>Despacho ({shippingType === 'mas_8km' ? 'Más de 8 km' : 'Hasta 8 km'}):</span>
                  <span>
                    {shippingCost === 0 ? (
                      <strong className="text-emerald-700 font-bold">GRATIS</strong>
                    ) : (
                      `$${shippingCost.toLocaleString("es-CL")}`
                    )}
                  </span>
                </div>

                <div className="flex justify-between text-sm font-extrabold text-gray-900 pt-2 border-t border-gray-200">
                  <span>Total a Pagar (IVA inc.):</span>
                  <span className="text-[#B71C1C] text-base">${total.toLocaleString("es-CL")}</span>
                </div>
              </div>

              {/* Botones de acción */}
              <div className="space-y-2 pt-1">
                {subtotal < minOrderAmount ? (
                  <button
                    type="button"
                    onClick={() => alert(`El pedido mínimo para despacho es de $50.000. Te faltan $${(minOrderAmount - subtotal).toLocaleString("es-CL")} para completar tu pedido.`)}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-gray-400 hover:bg-gray-500 text-white font-extrabold text-xs rounded-xl shadow cursor-pointer transition-colors"
                  >
                    <AlertCircle className="w-4 h-4" />
                    <span>Pedido Mínimo $50.000 (Faltan ${(minOrderAmount - subtotal).toLocaleString("es-CL")})</span>
                  </button>
                ) : (
                  <Link
                    href="/checkout"
                    onClick={() => setIsCartOpen(false)}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-[#B71C1C] hover:bg-[#8E0000] text-white font-extrabold text-sm rounded-xl shadow-lg transition-all active:scale-[0.99]"
                  >
                    <span>Continuar al Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}

                <a
                  href={generateWhatsAppOrderLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Pedir y Facturar vía WhatsApp</span>
                </a>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-gray-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Compra protegida • Factura o Boleta Electrónica Inmediata</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
