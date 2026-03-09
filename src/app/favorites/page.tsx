"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Heart, Eye, Trash2 } from "lucide-react";
import { Product } from "@/data/products";
import { useShop } from "@/context/ShopContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuickView from "@/components/QuickView";

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
                        className="p-3 bg-white rounded-full hover:bg-secondary-green hover:text-primary-black transition-colors"
                    >
                        <Eye size={20} />
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleToggleWishlist}
                        className={`p-3 rounded-full transition-colors ${
                            inWishlist || isAddedToWishlist
                                ? "bg-secondary-green text-primary-black"
                                : "bg-white hover:bg-secondary-green hover:text-primary-black"
                        }`}
                    >
                        <Heart size={20} />
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleAddToCart}
                        className={`p-3 rounded-full transition-colors ${
                            isAddedToCart
                                ? "bg-secondary-green text-primary-black"
                                : "bg-secondary-green text-primary-black hover:bg-white"
                        }`}
                    >
                        <ShoppingCart size={20} />
                    </motion.button>
                </motion.div>

                {product.isNew && (
                    <div className="absolute top-4 left-4 bg-secondary-green text-primary-black px-3 py-1 rounded-full text-sm font-bold">
                        NEW
                    </div>
                )}

                {product.isSale && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        SALE
                    </div>
                )}
            </div>

            <div className="mt-4 space-y-2">
                <p className="text-sm text-gray-400">{product.category}</p>
                <h3 className="text-lg font-semibold group-hover:text-secondary-green transition-colors">
                    {product.name}
                </h3>
                <div className="flex items-center gap-2">
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <span
                                key={i}
                                className={i < product.rating ? "text-secondary-green" : "text-gray-600"}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                    <span className="text-sm text-gray-400">({product.rating}.0)</span>
                </div>
                <div className="flex items-center gap-2">
                    {product.isSale && product.salePrice ? (
                        <>
                            <p className="text-xl font-bold text-secondary-green">${product.salePrice}</p>
                            <p className="text-sm text-gray-500 line-through">${product.price}</p>
                        </>
                    ) : (
                        <p className="text-xl font-bold text-secondary-green">${product.price}</p>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default function FavoritesPage() {
    const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const { wishlist, removeFromWishlist, addToCart } = useShop();

    const handleQuickViewOpen = (productId: number) => {
        const product = wishlist.find(p => p.id === productId);
        if (product) {
            setSelectedProduct(product);
            setIsQuickViewOpen(true);
        }
    };

    const handleAddToCart = (product: Product) => {
        addToCart(product, product.sizes[0]);
    };

    const handleRemoveFromWishlist = (productId: number) => {
        removeFromWishlist(productId);
    };

    const wishlistTotal = wishlist.reduce((sum, item) => sum + (item.salePrice || item.price), 0);

    return (
        <main className="min-h-screen bg-primary-black">
            <Navbar
                onCartOpen={() => {}}
                onWishlistOpen={() => {}}
                onSearchOpen={() => {}}
            />
            
            <div className="pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <Heart className="text-red-500" size={40} />
                            <div>
                                <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold">
                                    MY FAVORITES
                                </h1>
                                <p className="text-gray-400 text-lg">
                                    {wishlist.length} {wishlist.length === 1 ? "item" : "items"}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {wishlist.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center py-20"
                        >
                            <Heart className="mx-auto text-gray-600 mb-6" size={80} />
                            <h2 className="text-2xl font-bold mb-4">Your wishlist is empty</h2>
                            <p className="text-gray-400 mb-8">
                                Start adding your favorite products to your wishlist!
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => window.location.href = "/products"}
                                className="px-8 py-4 bg-secondary-green text-primary-black font-bold text-lg rounded-full hover:bg-white transition-colors"
                            >
                                Browse Products
                            </motion.button>
                        </motion.div>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
                                {wishlist.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                        onQuickViewOpen={() => handleQuickViewOpen(product.id)}
                                    />
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-primary-dark rounded-2xl p-8"
                            >
                                <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
                                    <div>
                                        <h2 className="text-2xl font-bold mb-2">Wishlist Summary</h2>
                                        <p className="text-gray-400 mb-4">
                                            Total value of your wishlist items
                                        </p>
                                        <p className="text-4xl font-bold text-secondary-green">
                                            ${wishlistTotal.toFixed(2)}
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => {
                                                wishlist.forEach(product => addToCart(product, product.sizes[0]));
                                            }}
                                            className="px-8 py-4 bg-secondary-green text-primary-black font-bold text-lg rounded-full hover:bg-white transition-colors flex items-center justify-center gap-2"
                                        >
                                            <ShoppingCart size={20} />
                                            Add All to Cart
                                        </motion.button>

                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => {
                                                if (confirm("Are you sure you want to clear your wishlist?")) {
                                                    wishlist.forEach(product => removeFromWishlist(product.id));
                                                }
                                            }}
                                            className="px-8 py-4 border-2 border-red-500 text-red-500 font-bold text-lg rounded-full hover:bg-red-500 hover:text-white transition-colors flex items-center justify-center gap-2"
                                        >
                                            <Trash2 size={20} />
                                            Clear Wishlist
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )}
                </div>
            </div>

            <Footer />

            <QuickView
                isOpen={isQuickViewOpen}
                onClose={() => setIsQuickViewOpen(false)}
                product={selectedProduct}
            />
        </main>
    );
}
