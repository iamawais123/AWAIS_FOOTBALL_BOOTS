"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Eye, ShoppingCart, Heart, Star } from "lucide-react";
import { Product } from "@/data/products";
import { useShop } from "@/context/ShopContext";

interface QuickViewProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

export default function QuickView({ isOpen, onClose, product }: QuickViewProps) {
  const [selectedSize, setSelectedSize] = useState("");
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useShop();

  if (!product) return null;

  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    addToCart(product, selectedSize);
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 2000);
  };

  const handleToggleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
      setIsAddedToWishlist(true);
      setTimeout(() => setIsAddedToWishlist(false), 2000);
    }
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-4 md:inset-20 bg-primary-dark z-50 rounded-2xl shadow-2xl overflow-hidden"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-primary-black rounded-full hover:bg-secondary-green hover:text-primary-black transition-colors"
            >
              <X size={24} />
            </motion.button>

            <div className="grid md:grid-cols-2 h-full">
              <div className="bg-gradient-to-br from-primary-black to-primary-dark flex items-center justify-center p-8">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              </div>

              <div className="p-8 md:p-12 flex flex-col overflow-y-auto">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < product.rating ? "text-secondary-green fill-current" : "text-gray-600"}`}
                    />
                  ))}
                  <span className="text-sm text-gray-400 ml-2">({product.rating}.0)</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">{product.name}</h2>
                <div className="flex items-center gap-3 mb-6">
                  {product.isSale && product.salePrice ? (
                    <>
                      <p className="text-3xl font-bold text-secondary-green">${product.salePrice}</p>
                      <p className="text-xl text-gray-500 line-through">${product.price}</p>
                    </>
                  ) : (
                    <p className="text-3xl font-bold text-secondary-green">${product.price}</p>
                  )}
                </div>

                <p className="text-gray-400 leading-relaxed mb-8">{product.description}</p>

                <div className="mb-8">
                  <h3 className="font-semibold mb-4">Select Size</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                      <motion.button
                        key={size}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedSize(size)}
                        className={`px-6 py-3 rounded-lg font-medium transition-colors ${selectedSize === size
                          ? "bg-secondary-green text-primary-black"
                          : "bg-primary-dark text-gray-400 hover:text-white"
                          }`}
                      >
                        {size}
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 mt-auto">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAddToCart}
                    className={`flex-1 py-4 font-bold text-lg rounded-full transition-colors flex items-center justify-center gap-2 ${isAddedToCart
                        ? "bg-secondary-green text-primary-black"
                        : "bg-secondary-green text-primary-black hover:bg-white"
                      }`}
                  >
                    <ShoppingCart size={20} />
                    {isAddedToCart ? "Added!" : "Add to Cart"}
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleToggleWishlist}
                    className={`p-4 rounded-full transition-colors ${inWishlist || isAddedToWishlist
                        ? "bg-secondary-green text-primary-black"
                        : "bg-primary-dark hover:bg-red-500 hover:text-white"
                      }`}
                  >
                    <Heart size={24} />
                  </motion.button>
                </div>

                <div className="mt-6 pt-6 border-t border-primary-dark">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <span className="text-secondary-green">✓</span>
                      Free Shipping
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-secondary-green">✓</span>
                      30-Day Returns
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
