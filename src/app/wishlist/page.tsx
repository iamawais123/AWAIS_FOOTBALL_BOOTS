"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useShop } from "@/context/ShopContext";
import { useRouter } from "next/navigation";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, addToCart } = useShop();
  const router = useRouter();

  const clearWishlist = () => {
    wishlist.forEach(item => removeFromWishlist(item.id));
  };

  const handleAddToCart = (item: any) => {
    addToCart(item, "US 10");
    removeFromWishlist(item.id);
  };

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary-black py-12 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <Heart className="mx-auto text-gray-600 mb-6" size={64} />
          <h2 className="text-3xl font-heading font-bold mb-4">Your Wishlist is Empty</h2>
          <p className="text-gray-400 mb-8">Save your favorite items for later!</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/")}
            className="px-8 py-4 bg-secondary-green text-primary-black font-bold text-lg rounded-full hover:bg-white transition-colors"
          >
            Start Shopping
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary-black py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h1 className="text-4xl font-heading font-bold">My Wishlist</h1>
            <p className="text-gray-400 mt-2">{wishlist.length} {wishlist.length === 1 ? "item" : "items"}</p>
          </div>
          {wishlist.length > 0 && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={clearWishlist}
              className="px-6 py-3 border-2 border-red-500 text-red-500 font-bold rounded-lg hover:bg-red-500 hover:text-white transition-colors"
            >
              Clear All
            </motion.button>
          )}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlist.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-primary-dark rounded-2xl overflow-hidden group"
            >
              <div className="relative aspect-square bg-gradient-to-br from-primary-black to-primary-dark flex items-center justify-center">
                <span className="text-6xl">⚽</span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Trash2 size={18} />
                </motion.button>
              </div>

              <div className="p-4">
                <p className="text-sm text-gray-400 mb-1">{item.category}</p>
                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                <p className="text-xl font-bold text-secondary-green mb-4">${item.price}</p>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAddToCart(item)}
                  className="w-full py-3 bg-secondary-green text-primary-black font-bold rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingBag size={18} />
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
