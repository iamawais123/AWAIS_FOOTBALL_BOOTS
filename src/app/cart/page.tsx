"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { useShop } from "@/context/ShopContext";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { cart, removeFromCart, updateCartQuantity, cartTotal } = useShop();
  const router = useRouter();
  const shipping = cartTotal > 200 ? 0 : 9.99;
  const total = cartTotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary-black py-12 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <ShoppingBag className="mx-auto text-gray-600 mb-6" size={64} />
          <h2 className="text-3xl font-heading font-bold mb-4">Your Cart is Empty</h2>
          <p className="text-gray-400 mb-8">Looks like you haven't added anything yet.</p>
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
          className="mb-8"
        >
          <h1 className="text-4xl font-heading font-bold">Shopping Cart</h1>
          <p className="text-gray-400 mt-2">{cart.length} {cart.length === 1 ? "item" : "items"} in your cart</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <motion.div
                key={`${item.id}-${item.size}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-primary-dark rounded-xl p-6 flex gap-6"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-primary-black to-primary-dark rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-5xl">⚽</span>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-400 mb-3">Size: {item.size}</p>
                  <p className="text-2xl font-bold text-secondary-green">${item.price}</p>
                </div>

                <div className="flex flex-col items-end justify-between">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-red-500 hover:bg-red-500/20 rounded-full transition-colors"
                  >
                    <Trash2 size={20} />
                  </motion.button>

                  <div className="flex items-center gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                      className="p-2 bg-primary-black rounded-full hover:bg-secondary-green hover:text-primary-black transition-colors"
                    >
                      <Minus size={18} />
                    </motion.button>
                    <span className="w-10 text-center font-bold">{item.quantity}</span>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                      className="p-2 bg-primary-black rounded-full hover:bg-secondary-green hover:text-primary-black transition-colors"
                    >
                      <Plus size={18} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-primary-dark rounded-xl p-6 sticky top-24"
            >
              <h2 className="text-2xl font-heading font-bold mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
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
                <div className="flex justify-between text-xl font-bold pt-4 border-t border-primary-dark">
                  <span>Total</span>
                  <span className="text-secondary-green">${total.toFixed(2)}</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push("/checkout")}
                className="w-full py-4 bg-secondary-green text-primary-black font-bold text-lg rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2"
              >
                Proceed to Checkout
                <ArrowRight size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push("/")}
                className="w-full py-4 border-2 border-primary-dark text-gray-400 font-bold rounded-lg hover:border-secondary-green hover:text-secondary-green transition-colors"
              >
                Continue Shopping
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
