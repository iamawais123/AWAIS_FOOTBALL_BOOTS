"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search, ShoppingCart, Heart } from "lucide-react";
import { useShop } from "@/context/ShopContext";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const products = [
  { id: 1, name: "AWAIS Speed Pro X", price: 249.99, category: "boots", image: "/api/placeholder/100/100" },
  { id: 2, name: "AWAIS Control Elite", price: 229.99, category: "boots", image: "/api/placeholder/100/100" },
  { id: 3, name: "AWAIS Striker Max", price: 199.99, category: "boots", image: "/api/placeholder/100/100" },
  { id: 4, name: "AWAIS Street Legend", price: 179.99, category: "boots", image: "/api/placeholder/100/100" },
  { id: 5, name: "AWAIS Training Kit", price: 89.99, category: "accessories", image: "/api/placeholder/100/100" },
  { id: 6, name: "AWAIS Pro Socks", price: 29.99, category: "accessories", image: "/api/placeholder/100/100" },
];

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "boots", "accessories", "collections"];

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === "all" || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useShop();

  const handleAddToWishlist = (product: any) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        brand: product.brand || 'AWAIS',
        price: product.price,
        rating: product.rating || 5,
        image: product.image,
        hoverImage: product.hoverImage || product.image,
        category: product.category,
        sizes: product.sizes || ['US 10'],
        description: product.description || '',
        color: product.color || 'Black',
        isNew: product.isNew || false,
        isSale: product.isSale || false,
      });
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
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed inset-x-4 top-20 max-w-4xl mx-auto bg-primary-dark z-50 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <Search className="text-secondary-green" size={24} />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent text-2xl font-heading font-bold outline-none placeholder-gray-600"
                  autoFocus
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="p-2 hover:bg-primary-black rounded-full transition-colors"
                >
                  <X size={24} />
                </motion.button>
              </div>

              <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full font-medium capitalize transition-colors whitespace-nowrap ${selectedCategory === category
                      ? "bg-secondary-green text-primary-black"
                      : "bg-primary-black text-gray-400 hover:text-white"
                      }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>

              <div className="max-h-96 overflow-y-auto space-y-3">
                {filteredProducts.length === 0 ? (
                  <div className="text-center py-12">
                    <Search className="mx-auto text-gray-600 mb-4" size={64} />
                    <p className="text-gray-400 text-lg">No products found</p>
                  </div>
                ) : (
                  filteredProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-4 p-4 bg-primary-black/50 rounded-xl hover:bg-primary-black transition-colors cursor-pointer"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-dark to-primary-black rounded-lg flex items-center justify-center">
                        <span className="text-2xl">⚽</span>
                      </div>

                      <div className="flex-1">
                        <h3 className="font-semibold">{product.name}</h3>
                        <p className="text-sm text-gray-400 capitalize">{product.category}</p>
                      </div>

                      <p className="text-secondary-green font-bold">${product.price}</p>

                      <div className="flex gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleAddToWishlist(product)}
                          className={`p-2 rounded-full transition-colors ${isInWishlist(product.id)
                            ? "bg-red-500 text-white"
                            : "hover:bg-secondary-green hover:text-primary-black"
                            }`}
                        >
                          <Heart size={18} fill={isInWishlist(product.id) ? "currentColor" : "none"} />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            addToCart(product, "US 10");
                            onClose();
                          }}
                          className="p-2 bg-secondary-green text-primary-black rounded-full transition-colors"
                        >
                          <ShoppingCart size={18} />
                        </motion.button>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
