"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import ProductShowcase from "@/components/ProductShowcase";
import Collections from "@/components/Collections";
import WhyChoose from "@/components/WhyChoose";
import FootballLifestyle from "@/components/FootballLifestyle";
import Testimonials from "@/components/Testimonials";
import InstagramSection from "@/components/InstagramSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";
import Wishlist from "@/components/Wishlist";
import SearchModal from "@/components/SearchModal";
import QuickView from "@/components/QuickView";
import { Product } from "@/data/products";
import { api } from "@/lib/api";

export default function Home() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isWishlistOpen, setIsWishlistOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        try {
            const response = await api.products.getAll();
            if (response.success && response.data) {
                setProducts(response.data as Product[]);
            } else {
                setProducts([]);
            }
        } catch (error) {
            console.error('Failed to load products:', error);
            setProducts([]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleQuickViewOpen = (productId: number) => {
        const product = products.find(p => p.id === productId);
        if (product) {
            setSelectedProduct(product);
            setIsQuickViewOpen(true);
        }
    };

    if (isLoading) {
        return (
            <main className="min-h-screen flex items-center justify-center">
                <div className="text-2xl font-bold">Loading...</div>
            </main>
        );
    }

    return (
        <main className="min-h-screen">
            <Navbar
                onCartOpen={() => setIsCartOpen(true)}
                onWishlistOpen={() => setIsWishlistOpen(true)}
                onSearchOpen={() => setIsSearchOpen(true)}
            />
            <Hero />
            <FeaturedProducts products={products} onQuickViewOpen={handleQuickViewOpen} />
            <ProductShowcase />
            <Collections products={products} />
            <WhyChoose />
            <FootballLifestyle />
            <Testimonials />
            <InstagramSection />
            <Newsletter />
            <Footer />
            <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
            <Wishlist isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} />
            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
            <QuickView
                isOpen={isQuickViewOpen}
                onClose={() => setIsQuickViewOpen(false)}
                product={selectedProduct}
            />
        </main>
    );
}
