"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Heart, SlidersHorizontal } from "lucide-react";
import { useShop } from "@/context/ShopContext";

const products = [
    {
        id: 1,
        name: "AWAIS Speed Pro X",
        price: 249.99,
        rating: 5,
        category: "Speed Series",
        image: "/api/placeholder/400/400",
    },
    {
        id: 2,
        name: "AWAIS Control Elite",
        price: 229.99,
        rating: 4,
        category: "Control Series",
        image: "/api/placeholder/400/400",
    },
    {
        id: 3,
        name: "AWAIS Striker Max",
        price: 199.99,
        rating: 5,
        category: "Striker Series",
        image: "/api/placeholder/400/400",
    },
    {
        id: 4,
        name: "AWAIS Street Legend",
        price: 179.99,
        rating: 4,
        category: "Street Series",
        image: "/api/placeholder/400/400",
    },
    {
        id: 5,
        name: "AWAIS Training Kit",
        price: 89.99,
        rating: 5,
        category: "Accessories",
        image: "/api/placeholder/400/400",
    },
    {
        id: 6,
        name: "AWAIS Pro Socks",
        price: 29.99,
        rating: 4,
        category: "Accessories",
        image: "/api/placeholder/400/400",
    },
    {
        id: 7,
        name: "AWAIS Ultimate Pro",
        price: 279.99,
        rating: 5,
        category: "Speed Series",
        image: "/api/placeholder/400/400",
    },
    {
        id: 8,
        name: "AWAIS Precision Master",
        price: 209.99,
        rating: 4,
        category: "Control Series",
        image: "/api/placeholder/400/400",
    },
];

function ProductCard({ product }: { product: any }) {
    const [isHovered, setIsHovered] = useState(false);
    const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useShop();

    const handleAddToWishlist = () => {
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
                    <div className="text-6xl">⚽</div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4"
                >
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => addToCart(product, "US 10")}
                        className="p-3 bg-secondary-green text-primary-black rounded-full hover:bg-white transition-colors"
                    >
                        <ShoppingCart size={20} />
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleAddToWishlist}
                        className={`p-3 rounded-full transition-colors ${isInWishlist(product.id)
                            ? "bg-red-500 text-white"
                            : "bg-white hover:bg-secondary-green hover:text-primary-black"
                            }`}
                    >
                        <Heart size={20} fill={isInWishlist(product.id) ? "currentColor" : "none"} />
                    </motion.button>
                </motion.div>

                <div className="absolute top-4 left-4 bg-secondary-green text-primary-black px-3 py-1 rounded-full text-sm font-bold">
                    NEW
                </div>
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
                <p className="text-xl font-bold text-secondary-green">${product.price}</p>
            </div>
        </motion.div>
    );
}

export default function ProductsPage() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortBy, setSortBy] = useState("featured");

    const categories = ["all", "Speed Series", "Control Series", "Striker Series", "Street Series", "Accessories"];

    const filteredProducts = products.filter(
        (product) => selectedCategory === "all" || product.category === selectedCategory
    );

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortBy === "price-low") return a.price - b.price;
        if (sortBy === "price-high") return b.price - a.price;
        return 0;
    });

    return (
        <div className="min-h-screen bg-primary-black py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4">All Products</h1>
                    <p className="text-gray-400">Find your perfect football boots</p>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-6 mb-8">
                    <div className="flex-1">
                        <h3 className="font-semibold mb-3 flex items-center gap-2">
                            <SlidersHorizontal className="text-secondary-green" size={18} />
                            Categories
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <motion.button
                                    key={category}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-full font-medium capitalize transition-colors ${selectedCategory === category
                                        ? "bg-secondary-green text-primary-black"
                                        : "bg-primary-dark text-gray-400 hover:text-white"
                                        }`}
                                >
                                    {category}
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1">
                        <h3 className="font-semibold mb-3">Sort By</h3>
                        <div className="flex flex-wrap gap-2">
                            {["featured", "price-low", "price-high"].map((sort) => (
                                <motion.button
                                    key={sort}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setSortBy(sort)}
                                    className={`px-4 py-2 rounded-full font-medium capitalize transition-colors ${sortBy === sort
                                        ? "bg-secondary-green text-primary-black"
                                        : "bg-primary-dark text-gray-400 hover:text-white"
                                        }`}
                                >
                                    {sort === "featured" ? "Featured" : sort.replace("-", " ")}
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {sortedProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {sortedProducts.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-400 text-lg">No products found</p>
                    </div>
                )}
            </div>
        </div>
    );
}
