"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Heart, Eye } from "lucide-react";
import { useState } from "react";
import { Product } from "@/data/products";
import { useShop } from "@/context/ShopContext";

interface FeaturedProductsProps {
    products: Product[];
    onQuickViewOpen?: (productId: number) => void;
}

function ProductCard({ product, onQuickViewOpen }: { product: Product; onQuickViewOpen?: () => void }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);
    const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useShop();

    const inWishlist = isInWishlist(product.id);

    const handleAddToCart = () => {
        addToCart(product, product.sizes[0]);
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
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative bg-primary-dark rounded-2xl overflow-hidden">
                <motion.div
                    className="aspect-square bg-gradient-to-br from-primary-black to-primary-dark flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    <img
                        src={isHovered ? product.hoverImage : product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4"
                >
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onQuickViewOpen}
                        className="p-2 sm:p-3 bg-white rounded-full hover:bg-secondary-green hover:text-primary-black transition-colors"
                    >
                        <Eye size={16} className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleToggleWishlist}
                        className={`p-2 sm:p-3 rounded-full transition-colors ${inWishlist || isAddedToWishlist
                            ? "bg-secondary-green text-primary-black"
                            : "bg-white hover:bg-secondary-green hover:text-primary-black"
                            }`}
                    >
                        <Heart size={16} className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleAddToCart}
                        className={`p-2 sm:p-3 rounded-full transition-colors ${isAddedToCart
                            ? "bg-secondary-green text-primary-black"
                            : "bg-secondary-green text-primary-black hover:bg-white"
                            }`}
                    >
                        <ShoppingCart size={16} className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.button>
                </motion.div>

                {product.isNew && (
                    <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-secondary-green text-primary-black px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-bold">
                        NEW
                    </div>
                )}

                {product.isSale && (
                    <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-red-500 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-bold">
                        SALE
                    </div>
                )}
            </div>

            <div className="mt-3 sm:mt-4 space-y-1 sm:space-y-2">
                <p className="text-xs sm:text-sm text-gray-400">{product.category}</p>
                <h3 className="text-base sm:text-lg font-semibold group-hover:text-secondary-green transition-colors truncate">
                    {product.name}
                </h3>
                <div className="flex items-center gap-2">
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <span
                                key={i}
                                className={`w-3 h-3 sm:w-4 sm:h-4 ${i < product.rating ? "text-secondary-green" : "text-gray-600"}`}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                    <span className="text-xs sm:text-sm text-gray-400">({product.rating}.0)</span>
                </div>
                <div className="flex items-center gap-2">
                    {product.isSale && product.salePrice ? (
                        <>
                            <p className="text-lg sm:text-xl font-bold text-secondary-green">${product.salePrice}</p>
                            <p className="text-xs sm:text-sm text-gray-500 line-through">${product.price}</p>
                        </>
                    ) : (
                        <p className="text-lg sm:text-xl font-bold text-secondary-green">${product.price}</p>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default function FeaturedProducts({ products, onQuickViewOpen }: FeaturedProductsProps) {
    const featuredProducts = products.slice(0, 8);

    return (
        <section id="shop" className="py-20 bg-primary-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-secondary-green text-lg font-medium tracking-widest uppercase mb-4">
                        Featured Products
                    </p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold">
                        DOMINATE THE GAME
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onQuickViewOpen={() => onQuickViewOpen?.(product.id)}
                        />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 border-2 border-secondary-green text-secondary-green font-bold text-lg rounded-full hover:bg-secondary-green hover:text-primary-black transition-all duration-300"
                        onClick={() => document.getElementById("collections")?.scrollIntoView({ behavior: "smooth" })}
                    >
                        View All {products.length} Products
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
