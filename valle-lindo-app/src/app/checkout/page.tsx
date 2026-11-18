"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ShieldCheck, 
  CreditCard, 
  Building2, 
  Truck, 
  CheckCircle2, 
  ArrowLeft, 
  FileText, 
  Lock, 
  ChevronRight,
  AlertCircle
} from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { cart, subtotal, savingsTotal, shippingCost, total, clearCart } = useCart();

  // Tipo de documento tributario
  const [docType, setDocType] = useState<"boleta" | "factura">("factura");

  // Formulario datos cliente
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    rut: "",
    razonSocial: "",
    giro: "",
    direccion: "",
    numero: "",
    depto: "",
    comuna: "Santiago Centro",
    region: "Región Metropolitana",
    notasEntrega: "",
  });

  // Método de pago seleccionado
  const [paymentMethod, setPaymentMethod] = useState<"webpay" | "mercadopago" | "transferencia" | "contraentrega">("webpay");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState<any>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular procesamiento de orden
    setTimeout(() => {
      const orderNumber = "VL-" + Math.floor(100000 + Math.random() * 900000);
      const orderInfo = {
        orderNumber,
        date: new Date().toLocaleDateString("es-CL"),
        items: [...cart],
        total,
        docType,
        customer: formData,
        paymentMethod,
      };

      setOrderCompleted(orderInfo);
      clearCart();
      setIsSubmitting(false);
    }, 1200);
  };

  // Si la orden ya se completó, mostrar pantalla de confirmación exitosa
  if (orderCompleted) {
    const whatsappConfirmation = `https://wa.me/56987654321?text=${encodeURIComponent(
      `Hola Valle Lindo! Acabo de ingresar la orden *#${orderCompleted.orderNumber}* por un total de $${orderCompleted.total.toLocaleString("es-CL")}.\nCliente: ${orderCompleted.customer.nombre} (${orderCompleted.customer.telefono})\nMétodo: ${orderCompleted.paymentMethod.toUpperCase()}.\nPor favor confirmar recepción y despacho. ¡Gracias!`
    )}`;

    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
          <CheckCircle2 className="w-12 h-12" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full">
            ¡Pedido Recibido con Éxito!
          </span>
          <h1 className="text-3xl font-black text-gray-900">
            Gracias por tu compra en Valle Lindo
          </h1>
          <p className="text-sm text-gray-600 max-w-md mx-auto">
            Orden número <strong className="text-black font-mono font-bold">#{orderCompleted.orderNumber}</strong>. Hemos enviado el comprobante a <strong>{orderCompleted.customer.email || "tu correo"}</strong>.
          </p>
        </div>

        {/* Resumen de orden completada */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 text-left space-y-4 shadow-sm">
          <h3 className="font-extrabold text-sm text-gray-900 border-b border-gray-100 pb-2">
            Detalles de Entrega y Facturación
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-600">
            <div>
              <span className="block text-gray-400 font-semibold">Cliente:</span>
              <strong className="text-gray-900">{orderCompleted.customer.nombre} {orderCompleted.customer.apellido}</strong>
            </div>
            <div>
              <span className="block text-gray-400 font-semibold">Documento:</span>
              <strong className="text-gray-900 uppercase">{orderCompleted.docType} {orderCompleted.customer.rut && `(${orderCompleted.customer.rut})`}</strong>
            </div>
            <div>
              <span className="block text-gray-400 font-semibold">Dirección de Despacho:</span>
              <strong className="text-gray-900">{orderCompleted.customer.direccion} {orderCompleted.customer.numero}, {orderCompleted.customer.comuna}</strong>
            </div>
            <div>
              <span className="block text-gray-400 font-semibold">Total Cancelado / a Pagar:</span>
              <strong className="text-[#B71C1C] text-base">${orderCompleted.total.toLocaleString("es-CL")}</strong>
            </div>
          </div>

          {orderCompleted.paymentMethod === "transferencia" && (
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 space-y-1">
              <strong>Datos de Transferencia Bancaria:</strong>
              <div>Banco: <strong>Banco de Chile / BCI</strong></div>
              <div>Cuenta Corriente: <strong>123-45678-01</strong></div>
              <div>RUT: <strong>76.987.654-3</strong></div>
              <div>Nombre: <strong>Comercializadora Valle Lindo SpA</strong></div>
              <div>Correo comprobante: <strong>pagos@comercializadoravallelindo.cl</strong></div>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
          <a
            href={whatsappConfirmation}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow transition-colors flex items-center justify-center gap-2"
          >
            <span>Confirmar Despacho por WhatsApp</span>
          </a>

          <Link
            href="/catalogo"
            className="px-6 py-3 bg-gray-900 hover:bg-black text-white font-bold text-xs sm:text-sm rounded-xl shadow transition-colors"
          >
            Volver a la Tienda
          </Link>
        </div>
      </div>
    );
  }

  // Si el carrito está vacío al entrar al checkout
  if (cart.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-2xl font-black text-gray-900">No tienes productos en el carro</h2>
        <p className="text-xs text-gray-500">Agrega productos mayoristas o minoristas para proceder al pago.</p>
        <Link
          href="/catalogo"
          className="inline-block mt-4 px-6 py-3 bg-[#B71C1C] text-white font-bold text-xs rounded-xl shadow"
        >
          Ir al Catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
      {/* Header Checkout */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-200">
        <Link href="/catalogo" className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-black font-semibold">
          <ArrowLeft className="w-4 h-4" /> Volver al Catálogo
        </Link>
        <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full">
          <Lock className="w-3.5 h-3.5" /> Checkout Seguro SSL 256-bit
        </div>
      </div>

      <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* COLUMNA IZQUIERDA: FORMULARIO DE 1 PASO (7 Columnas) */}
        <div className="lg:col-span-7 space-y-6">
          {/* 1. DATOS DEL CLIENTE Y FACTURACIÓN */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-extrabold text-gray-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#B71C1C] text-white flex items-center justify-center text-xs">
                  1
                </span>
                Datos del Cliente y Facturación
              </h2>

              {/* Selector Boleta / Factura */}
              <div className="flex items-center bg-gray-100 p-1 rounded-lg text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setDocType("factura")}
                  className={`px-3 py-1 rounded-md transition-all ${
                    docType === "factura" ? "bg-[#B71C1C] text-white shadow-xs" : "text-gray-600"
                  }`}
                >
                  Factura con RUT
                </button>
                <button
                  type="button"
                  onClick={() => setDocType("boleta")}
                  className={`px-3 py-1 rounded-md transition-all ${
                    docType === "boleta" ? "bg-black text-white shadow-xs" : "text-gray-600"
                  }`}
                >
                  Boleta
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="block text-gray-700 font-bold mb-1">Nombre Completo *</label>
                <input
                  type="text"
                  required
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  placeholder="Ej: Marcelo"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#B71C1C]"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-1">Apellidos *</label>
                <input
                  type="text"
                  required
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleInputChange}
                  placeholder="Ej: González"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#B71C1C]"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-1">Teléfono Móvil / WhatsApp *</label>
                <input
                  type="tel"
                  required
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  placeholder="+56 9 1234 5678"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#B71C1C]"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-1">Correo Electrónico *</label>
                <input
                  type="email"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="contacto@pizzeria.cl"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#B71C1C]"
                />
              </div>
            </div>

            {/* Campos condicionales de Factura */}
            {docType === "factura" && (
              <div className="p-3 bg-red-50/60 rounded-xl border border-red-100 space-y-3 pt-3">
                <span className="text-[11px] font-bold text-[#B71C1C] uppercase tracking-wider block">
                  Información Tributaria para Facturación Inmediata
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">RUT Empresa *</label>
                    <input
                      type="text"
                      required
                      name="rut"
                      value={formData.rut}
                      onChange={handleInputChange}
                      placeholder="76.123.456-7"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#B71C1C] bg-white font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">Razón Social *</label>
                    <input
                      type="text"
                      required
                      name="razonSocial"
                      value={formData.razonSocial}
                      onChange={handleInputChange}
                      placeholder="Pizzería Napoli SpA"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#B71C1C] bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">Giro Comercial *</label>
                    <input
                      type="text"
                      required
                      name="giro"
                      value={formData.giro}
                      onChange={handleInputChange}
                      placeholder="Restaurantes y comida rápida"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#B71C1C] bg-white"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 2. DIRECCIÓN DE DESPACHO */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
            <h2 className="text-base font-extrabold text-gray-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#B71C1C] text-white flex items-center justify-center text-xs">
                2
              </span>
              Dirección de Despacho
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="block text-gray-700 font-bold mb-1">Región *</label>
                <select
                  name="region"
                  value={formData.region}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#B71C1C]"
                >
                  <option value="Región Metropolitana">Región Metropolitana de Santiago</option>
                  <option value="Región de Valparaíso">Región de Valparaíso</option>
                  <option value="Región de O'Higgins">Región de O&apos;Higgins</option>
                  <option value="Región del Maule">Región del Maule</option>
                  <option value="Otras Regiones de Chile">Otras Regiones de Chile (Envío Frío)</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-1">Comuna *</label>
                <input
                  type="text"
                  required
                  name="comuna"
                  value={formData.comuna}
                  onChange={handleInputChange}
                  placeholder="Ej: Providencia, Las Condes, Santiago..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#B71C1C]"
                />
              </div>

              <div className="sm:col-span-2 grid grid-cols-3 gap-2">
                <div className="col-span-2">
                  <label className="block text-gray-700 font-bold mb-1">Calle / Avenida *</label>
                  <input
                    type="text"
                    required
                    name="direccion"
                    value={formData.direccion}
                    onChange={handleInputChange}
                    placeholder="Av. Manuel Montt"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#B71C1C]"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-1">Número *</label>
                  <input
                    type="text"
                    required
                    name="numero"
                    value={formData.numero}
                    onChange={handleInputChange}
                    placeholder="1234"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#B71C1C]"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-gray-700 font-bold mb-1">Instrucciones para el Chofer / Repartidor (Opcional)</label>
                <input
                  type="text"
                  name="notasEntrega"
                  value={formData.notasEntrega}
                  onChange={handleInputChange}
                  placeholder="Ej: Entregar por acceso de cocina antes de las 12:00 hrs"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#B71C1C]"
                />
              </div>
            </div>
          </div>

          {/* 3. MÉTODOS DE PAGO SOLICITADOS */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
            <h2 className="text-base font-extrabold text-gray-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#B71C1C] text-white flex items-center justify-center text-xs">
                3
              </span>
              Método de Pago
            </h2>

            <div className="space-y-2.5">
              {/* Webpay Plus */}
              <label
                onClick={() => setPaymentMethod("webpay")}
                className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                  paymentMethod === "webpay"
                    ? "bg-red-50/70 border-[#B71C1C] ring-2 ring-red-200"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "webpay"}
                    onChange={() => setPaymentMethod("webpay")}
                    className="text-[#B71C1C] focus:ring-[#B71C1C]"
                  />
                  <div>
                    <span className="text-xs font-bold text-gray-900 block">Webpay Plus (Redcompra / Crédito / Débito)</span>
                    <span className="text-[11px] text-gray-500">Transbank seguro sin comisión adicional.</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold bg-gray-100 text-gray-700 px-2 py-0.5 rounded">
                  Webpay
                </span>
              </label>

              {/* Mercado Pago */}
              <label
                onClick={() => setPaymentMethod("mercadopago")}
                className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                  paymentMethod === "mercadopago"
                    ? "bg-red-50/70 border-[#B71C1C] ring-2 ring-red-200"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "mercadopago"}
                    onChange={() => setPaymentMethod("mercadopago")}
                    className="text-[#B71C1C] focus:ring-[#B71C1C]"
                  />
                  <div>
                    <span className="text-xs font-bold text-gray-900 block">Mercado Pago (Saldo / Tarjetas / Cuotas)</span>
                    <span className="text-[11px] text-gray-500">Paga con tu cuenta Mercado Pago o hasta 6 cuotas.</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold bg-blue-50 text-blue-700 px-2 py-0.5 rounded">
                  Mercado Pago
                </span>
              </label>

              {/* Transferencia Bancaria Electrónica */}
              <label
                onClick={() => setPaymentMethod("transferencia")}
                className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                  paymentMethod === "transferencia"
                    ? "bg-red-50/70 border-[#B71C1C] ring-2 ring-red-200"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "transferencia"}
                    onChange={() => setPaymentMethod("transferencia")}
                    className="text-[#B71C1C] focus:ring-[#B71C1C]"
                  />
                  <div>
                    <span className="text-xs font-bold text-gray-900 block">Transferencia Bancaria Electrónica B2B</span>
                    <span className="text-[11px] text-gray-500">Recibes los datos bancarios y envías comprobante a WhatsApp.</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded">
                  Transferencia
                </span>
              </label>

              {/* Pago Contra Entrega */}
              <label
                onClick={() => setPaymentMethod("contraentrega")}
                className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                  paymentMethod === "contraentrega"
                    ? "bg-red-50/70 border-[#B71C1C] ring-2 ring-red-200"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "contraentrega"}
                    onChange={() => setPaymentMethod("contraentrega")}
                    className="text-[#B71C1C] focus:ring-[#B71C1C]"
                  />
                  <div>
                    <span className="text-xs font-bold text-gray-900 block">Pago contra entrega (Clientes B2B Habilitados)</span>
                    <span className="text-[11px] text-gray-500">Paga en efectivo o POS móvil al recibir en tu local.</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold bg-gray-100 text-gray-700 px-2 py-0.5 rounded">
                  Contra Entrega
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: RESUMEN DE COMPRA Y BOTÓN FINAL (5 Columnas) */}
        <div className="lg:col-span-5 sticky top-24 space-y-4">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
            <h3 className="text-sm font-extrabold text-gray-900 border-b border-gray-100 pb-3">
              Resumen de tu Orden ({cart.length} productos)
            </h3>

            {/* Listado de ítems */}
            <div className="max-h-64 overflow-y-auto divide-y divide-gray-100 space-y-2 pr-1">
              {cart.map((item) => (
                <div key={item.product.id} className="pt-2 first:pt-0 flex items-center gap-3 text-xs">
                  <div className="w-12 h-12 rounded-lg bg-gray-50 shrink-0 overflow-hidden border border-gray-200">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 truncate">{item.product.name}</h4>
                    <span className="text-gray-500 text-[11px]">
                      {item.quantity} x ${item.unitPrice.toLocaleString("es-CL")}
                    </span>
                  </div>
                  <span className="font-extrabold text-gray-900">
                    ${(item.unitPrice * item.quantity).toLocaleString("es-CL")}
                  </span>
                </div>
              ))}
            </div>

            {/* Desglose */}
            <div className="pt-3 border-t border-gray-200 space-y-2 text-xs text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal Neto:</span>
                <span className="font-semibold text-gray-900">${subtotal.toLocaleString("es-CL")}</span>
              </div>

              {savingsTotal > 0 && (
                <div className="flex justify-between text-emerald-700 font-bold">
                  <span>Ahorro Mayorista:</span>
                  <span>-${savingsTotal.toLocaleString("es-CL")}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Costo de Despacho:</span>
                <span>
                  {shippingCost === 0 ? (
                    <strong className="text-emerald-700 font-bold">GRATIS</strong>
                  ) : (
                    `$${shippingCost.toLocaleString("es-CL")}`
                  )}
                </span>
              </div>

              <div className="flex justify-between text-base font-black text-gray-900 pt-2 border-t border-gray-200">
                <span>Total a Pagar:</span>
                <span className="text-[#B71C1C] text-xl">${total.toLocaleString("es-CL")}</span>
              </div>
            </div>

            {/* Botón de Confirmar Compra */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-[#B71C1C] hover:bg-[#8E0000] text-white font-black text-sm rounded-xl shadow-xl transition-all active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Procesando Pedido...</span>
              ) : (
                <>
                  <ShieldCheck className="w-5 h-5" />
                  <span>Finalizar y Confirmar Pedido</span>
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-gray-400 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Garantía de Satisfacción y Factura Electrónica con RUT</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
