"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Product } from "@/data/products";
import { ShoppingCart, Heart } from "lucide-react";
import { useShop } from "@/context/ShopContext";

interface CollectionsProps {
    products: Product[];
}

const collections = [
  {
    name: "Speed Series",
    description: "Built for explosive acceleration",
    image: "/assets/images/AURORA_DJ5961-146_PHSLH000-2000.jpg.jpeg",
    color: "from-blue-600/80 to-purple-600/80",
    category: "Speed Series",
  },
  {
    name: "Control Series",
    description: "Precision at your fingertips",
    image: "/assets/images/AURORA_DV4337-401_PHCFH001-2000.jpg.jpeg",
    color: "from-green-600/80 to-teal-600/80",
    category: "Control Series",
  },
  {
    name: "Power Series",
    description: "Power when you need it most",
    image: "/assets/images/AURORA_DV4342-402_PHCBH000-2000.jpg.jpeg",
    color: "from-red-600/80 to-orange-600/80",
    category: "Power Series",
  },
  {
    name: "Street Series",
    description: "Dominate concrete jungle",
    image: "/assets/images/AURORA_FD6723-800_PHCFH001-2000.jpg.jpeg",
    color: "from-yellow-600/80 to-amber-600/80",
    category: "Street Series",
  },
];

function ProductCard({ product }: { product: Product }) {
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
        >
            <div className="relative bg-primary-dark rounded-2xl overflow-hidden">
                <motion.div
                    className="aspect-square bg-gradient-to-br from-primary-black to-primary-dark flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleToggleWishlist}
                        className={`p-3 rounded-full transition-colors ${inWishlist || isAddedToWishlist
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
                        className={`p-3 rounded-full transition-colors ${isAddedToCart
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
                <h3 className="text-lg font-semibold group-hover:text-secondary-green transition-colors truncate">
                    {product.name}
                </h3>
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

export default function Collections({ products }: CollectionsProps) {
    const [selectedCollection, setSelectedCollection] = useState<string | null>(null);

    const filteredProducts = selectedCollection
        ? products.filter(p => p.category === selectedCollection)
        : [];

    return (
        <section id="collections" className="py-20 bg-primary-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-secondary-green text-lg font-medium tracking-widest uppercase mb-4">
                        Collections
                    </p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold">
                        FIND YOUR STYLE
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
                    {collections.map((collection, index) => (
                        <motion.div
                            key={collection.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group relative h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden cursor-pointer"
                            onClick={() => setSelectedCollection(selectedCollection === collection.category ? null : collection.category)}
                        >
                            <div className="absolute inset-0">
                                <img
                                    src={collection.image}
                                    alt={collection.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className={`absolute inset-0 bg-gradient-to-br ${collection.color} opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
                                className="absolute bottom-0 left-0 right-0 p-8"
                            >
                                <h3 className="text-3xl font-heading font-bold mb-2 group-hover:text-secondary-green transition-colors">
                                    {collection.name}
                                </h3>
                                <p className="text-gray-300 mb-4">{collection.description}</p>
                                <motion.button
                                    whileHover={{ x: 10 }}
                                    className="text-secondary-green font-semibold flex items-center gap-2"
                                >
                                    {selectedCollection === collection.category ? "View All" : "Explore Collection"}
                                    <span>→</span>
                                </motion.button>
                            </motion.div>

                            <motion.div
                                initial={{ scale: 1 }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 bg-secondary-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            />
                        </motion.div>
                    ))}
                </div>

                {selectedCollection && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-16"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-3xl font-heading font-bold">
                                {selectedCollection} Products
                            </h3>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedCollection(null)}
                                className="px-6 py-2 border-2 border-secondary-green text-secondary-green font-bold rounded-full hover:bg-secondary-green hover:text-primary-black transition-all"
                            >
                                View All Collections
                            </motion.button>
                        </div>

                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                {filteredProducts.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <p className="text-gray-400 text-lg">No products found in this collection.</p>
                            </div>
                        )}
                    </motion.div>
                )}
            </div>
        </section>
    );
}
