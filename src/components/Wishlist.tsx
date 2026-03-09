"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, Trash2, ShoppingCart } from "lucide-react";
import { useShop } from "@/context/ShopContext";

interface WishlistProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Wishlist({ isOpen, onClose }: WishlistProps) {
  const { wishlist, removeFromWishlist, addToCart, removeFromCart, clearCart } = useShop();

  const clearWishlist = () => {
    wishlist.forEach(item => removeFromWishlist(item.id));
  };

  const handleAddToCart = (item: any) => {
    addToCart({ ...item, size: "US 10", quantity: 1 });
    removeFromWishlist(item.id);
  };

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
                  <Heart className="text-red-500" size={24} />
                  <h2 className="text-2xl font-heading font-bold">Wishlist</h2>
                  <span className="bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold">
                    {wishlist.length}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="p-2 hover:bg-primary-black rounded-full transition-colors"
                >
                  <X size={24} />
                </motion.button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {wishlist.length === 0 ? (
                  <div className="text-center py-12">
                    <Heart className="mx-auto text-gray-600 mb-4" size={64} />
                    <p className="text-gray-400 text-lg">Your wishlist is empty</p>
                  </div>
                ) : (
                  wishlist.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex gap-4 bg-primary-black/50 p-4 rounded-xl"
                    >
                      <div className="w-24 h-24 bg-gradient-to-br from-primary-dark to-primary-black rounded-lg flex items-center justify-center">
                        <span className="text-4xl">⚽</span>
                      </div>

                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{item.name}</h3>
                        <p className="text-sm text-gray-400 mb-2">{item.category}</p>
                        <p className="text-secondary-green font-bold">${item.price}</p>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleAddToCart(item)}
                          className="mt-3 px-4 py-2 bg-secondary-green text-primary-black font-bold text-sm rounded-full hover:bg-white transition-colors flex items-center gap-2"
                        >
                          <ShoppingCart size={16} />
                          Add to Cart
                        </motion.button>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => removeFromWishlist(item.id)}
                        className="p-2 text-red-500 hover:bg-red-500/20 rounded-full transition-colors"
                      >
                        <Trash2 size={18} />
                      </motion.button>
                    </motion.div>
                  ))
                )}
              </div>

              {wishlist.length > 0 && (
                <div className="border-t border-primary-dark p-6">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={clearWishlist}
                    className="w-full py-4 border-2 border-red-500 text-red-500 font-bold rounded-full hover:bg-red-500 hover:text-white transition-colors"
                  >
                    Clear Wishlist
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
