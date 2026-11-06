'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const COUPONS = {
  VERDANT10: { code: 'VERDANT10', discountPercent: 10, label: '10% Earth Week Promo' },
  ECO20: { code: 'ECO20', discountPercent: 20, label: '20% Modular Upgrade Discount' }
};

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [toasts, setToasts] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('verdant_cart');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch (e) {
      console.error("Failed to load cart from storage", e);
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('verdant_cart', JSON.stringify(cart));
    } catch (e) {
      console.error("Failed to save cart", e);
    }
  }, [cart]);

  // Toast Helper
  const showToast = (message, type = 'success') => {
    const id = Date.now() + Math.random().toString(36).substring(2, 5);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3200);
  };

  // Add Item
  const addToCart = (item, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { ...item, quantity }];
    });
    showToast(`Added "${item.name}" to cart`);
  };

  // Remove Item
  const removeFromCart = (id) => {
    const item = cart.find((i) => i.id === id);
    setCart((prev) => prev.filter((i) => i.id !== id));
    if (item) {
      showToast(`Removed "${item.name}" from cart`, 'info');
    }
  };

  // Update Quantity
  const updateQuantity = (id, delta) => {
    setCart((prev) =>
      prev
        .map((i) => {
          if (i.id === id) {
            const newQty = i.quantity + delta;
            return newQty > 0 ? { ...i, quantity: newQty } : null;
          }
          return i;
        })
        .filter(Boolean)
    );
  };

  // Clear Cart
  const clearCart = () => {
    setCart([]);
    setAppliedCoupon(null);
    showToast("Shopping cart cleared", "info");
  };

  // Apply Coupon
  const applyCouponCode = (code) => {
    const normalized = code.trim().toUpperCase();
    if (COUPONS[normalized]) {
      setAppliedCoupon(COUPONS[normalized]);
      showToast(`Promo "${normalized}" applied (-${COUPONS[normalized].discountPercent}%)`, 'success');
      return { success: true, message: `Coupon applied: ${COUPONS[normalized].discountPercent}% off` };
    }
    return { success: false, message: 'Invalid promo code. Try VERDANT10 or ECO20' };
  };

  // Remove Coupon
  const removeCoupon = () => {
    setAppliedCoupon(null);
    showToast("Coupon removed", "info");
  };

  // Calculations
  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const discountAmount = appliedCoupon
    ? (subtotal * appliedCoupon.discountPercent) / 100
    : 0;

  const shipping = subtotal >= 75 || subtotal === 0 ? 0 : 8.50;

  const total = Math.max(0, subtotal - discountAmount + shipping);

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        quickViewProduct,
        setQuickViewProduct,
        appliedCoupon,
        toasts,
        showToast,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        applyCouponCode,
        removeCoupon,
        totalItemsCount,
        subtotal,
        discountAmount,
        shipping,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
