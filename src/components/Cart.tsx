"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Heart, Eye } from "lucide-react";
import { useShop } from "@/context/ShopContext";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Cart({ isOpen, onClose }: CartProps) {
  const { cart, updateCartQuantity, removeFromCart, clearCart, cartTotal, wishlist, addToWishlist, removeFromWishlist } = useShop();

  const moveToWishlist = (item: any) => {
    addToWishlist({
      id: item.id,
      name: item.name,
      brand: item.brand || 'AWAIS',
      price: item.price,
      rating: item.rating || 5,
      image: item.image,
      hoverImage: item.hoverImage || item.image,
      category: item.category,
      sizes: item.sizes || ['US 10'],
      description: item.description || '',
      color: item.color || 'Black',
      isNew: item.isNew || false,
      isSale: item.isSale || false,
    });
    removeFromCart(item.id);
  };

  const shipping = cartTotal > 200 ? 0 : 9.99;
  const total = cartTotal + shipping;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-primary-dark z-50 shadow-2xl"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b border-primary-dark">
                <div className="flex items-center gap-3">
                  <ShoppingCart className="text-secondary-green" size={24} />
                  <h2 className="text-2xl font-heading font-bold">Your Cart</h2>
                  <span className="bg-secondary-green text-primary-black px-2 py-1 rounded-full text-sm font-bold">
                    {cart.length}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="p-2 hover:bg-primary-black rounded-full transition-colors"
                >
                  <Eye size={24} />
                </motion.button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cart.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingCart className="mx-auto text-gray-600 mb-4" size={64} />
                    <p className="text-gray-400 text-lg">Your cart is empty</p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <motion.div
                      key={`${item.id}-${item.size}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex gap-4 bg-primary-black/50 p-4 rounded-xl"
                    >
                      <div className="w-24 h-24 bg-gradient-to-br from-primary-dark to-primary-black rounded-lg flex items-center justify-center">
                        <span className="text-4xl">⚽</span>
                      </div>

                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{item.name}</h3>
                        <p className="text-sm text-gray-400 mb-2">Size: {item.size}</p>
                        <p className="text-secondary-green font-bold">${item.price}</p>

                        <div className="flex items-center gap-2 mt-3">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                            className="p-1 bg-primary-dark rounded hover:bg-secondary-green hover:text-primary-black transition-colors"
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M5 12h14" />
                            </svg>
                          </motion.button>
                          <span className="w-8 text-center font-bold">{item.quantity}</span>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                            className="p-1 bg-primary-dark rounded hover:bg-secondary-green hover:text-primary-black transition-colors"
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M12 5v14M5 12h14" />
                            </svg>
                          </motion.button>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => moveToWishlist(item)}
                          className="p-2 text-red-500 hover:bg-red-500/20 rounded-full transition-colors"
                          title="Move to Wishlist"
                        >
                          <Heart size={18} />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-red-500 hover:bg-red-500/20 rounded-full transition-colors"
                          title="Remove"
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                          </svg>
                        </motion.button>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="border-t border-primary-dark p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-gray-400">
                      <span>Subtotal</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Shipping</span>
                      <span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    {cartTotal < 200 && (
                      <p className="text-sm text-secondary-green">
                        Add ${(200 - cartTotal).toFixed(2)} more for free shipping!
                      </p>
                    )}
                    <div className="flex justify-between text-xl font-bold pt-2 border-t border-primary-dark">
                      <span>Total</span>
                      <span className="text-secondary-green">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      onClose();
                      window.location.href = "/checkout";
                    }}
                    className="w-full py-4 bg-secondary-green text-primary-black font-bold text-lg rounded-full hover:bg-white transition-colors"
                  >
                    Proceed to Checkout
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      onClose();
                      window.location.href = "/products";
                    }}
                    className="w-full py-4 border-2 border-primary-dark text-gray-400 font-bold rounded-full hover:border-secondary-green hover:text-secondary-green transition-colors"
                  >
                    Continue Shopping
                  </motion.button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
