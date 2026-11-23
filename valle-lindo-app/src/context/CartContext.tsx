"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "@/data/products";

export interface CartItem {
  product: Product;
  quantity: number;
  unitPrice: number; // Precio con descuento por escala mayorista si aplica
  originalPrice: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  subtotal: number;
  savingsTotal: number;
  shippingCost: number;
  freeShippingThreshold: number;
  minOrderAmount: number;
  shippingType: 'radio_8km' | 'mas_8km';
  setShippingType: (type: 'radio_8km' | 'mas_8km') => void;
  total: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  // Wishlist
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  // Cupones
  couponCode: string;
  discountRate: number;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [couponCode, setCouponCode] = useState("");
  const [discountRate, setDiscountRate] = useState(0);
  const [shippingType, setShippingTypeState] = useState<'radio_8km' | 'mas_8km'>('radio_8km');

  // Cargar de localStorage
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("valle_lindo_cart");
      if (savedCart) setCart(JSON.parse(savedCart));

      const savedWishlist = localStorage.getItem("valle_lindo_wishlist");
      if (savedWishlist) setWishlist(JSON.parse(savedWishlist));

      const savedShipping = localStorage.getItem("valle_shipping_type");
      if (savedShipping === 'mas_8km' || savedShipping === 'radio_8km') {
        setShippingTypeState(savedShipping);
      }
    } catch (e) {
      console.error("Error loading cart from storage", e);
    }
  }, []);

  const setShippingType = (type: 'radio_8km' | 'mas_8km') => {
    setShippingTypeState(type);
    try {
      localStorage.setItem("valle_shipping_type", type);
    } catch (e) {
      console.error("Error saving shipping type", e);
    }
  };

  // Guardar en localStorage
  useEffect(() => {
    try {
      localStorage.setItem("valle_lindo_cart", JSON.stringify(cart));
    } catch (e) {
      console.error("Error saving cart", e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem("valle_lindo_wishlist", JSON.stringify(wishlist));
    } catch (e) {
      console.error("Error saving wishlist", e);
    }
  }, [wishlist]);

  // Función para calcular precio unitario dinámico según escala por cantidad
  const calculateUnitPrice = (product: Product, qty: number): number => {
    if (!product.wholesaleTiers || product.wholesaleTiers.length === 0) {
      return product.price;
    }
    // Buscar el tramo mayorista correspondiente más alto alcanzado
    const sortedTiers = [...product.wholesaleTiers].sort((a, b) => b.minQty - a.minQty);
    for (const tier of sortedTiers) {
      if (qty >= tier.minQty) {
        return tier.price;
      }
    }
    return product.price;
  };

  const addToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      let newQty = quantity;
      if (existing) {
        newQty = existing.quantity + quantity;
      }

      const unitPrice = calculateUnitPrice(product, newQty);

      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: newQty, unitPrice }
            : item
        );
      } else {
        return [
          ...prev,
          {
            product,
            quantity: newQty,
            unitPrice,
            originalPrice: product.originalPrice || product.price,
          },
        ];
      }
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart((prev) =>
      prev.map((item) => {
        if (item.product.id === productId) {
          const unitPrice = calculateUnitPrice(item.product, quantity);
          return { ...item, quantity, unitPrice };
        }
        return item;
      })
    );
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  const applyCoupon = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === "BIENVENIDO10") {
      setCouponCode(clean);
      setDiscountRate(0.10);
      return { success: true, message: "¡Cupón del 10% aplicado con éxito!" };
    }
    if (clean === "MAYORISTAPRO") {
      setCouponCode(clean);
      setDiscountRate(0.15);
      return { success: true, message: "¡Cupón Mayorista 15% aplicado!" };
    }
    if (clean === "PIZZA5") {
      setCouponCode(clean);
      setDiscountRate(0.05);
      return { success: true, message: "¡Cupón 5% aplicado!" };
    }
    return { success: false, message: "Cupón no válido o vencido." };
  };

  const removeCoupon = () => {
    setCouponCode("");
    setDiscountRate(0);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const rawSubtotal = cart.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0
  );

  const discountAmount = rawSubtotal * discountRate;
  const subtotal = Math.max(0, rawSubtotal - discountAmount);

  const rawOriginalTotal = cart.reduce(
    (sum, item) => sum + item.originalPrice * item.quantity,
    0
  );
  const savingsTotal = Math.max(0, rawOriginalTotal - subtotal);

  const freeShippingThreshold = 299990;
  const minOrderAmount = 50000;

  let shippingCost = 0;
  if (subtotal === 0) {
    shippingCost = 0;
  } else if (subtotal > freeShippingThreshold) {
    shippingCost = 0;
  } else {
    shippingCost = shippingType === 'mas_8km' ? 4000 : 3000;
  }

  const total = subtotal + shippingCost;

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        subtotal,
        savingsTotal,
        shippingCost,
        freeShippingThreshold,
        minOrderAmount,
        shippingType,
        setShippingType,
        total,
        isCartOpen,
        setIsCartOpen,
        wishlist,
        toggleWishlist,
        isInWishlist,
        couponCode,
        discountRate,
        applyCoupon,
        removeCoupon,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
