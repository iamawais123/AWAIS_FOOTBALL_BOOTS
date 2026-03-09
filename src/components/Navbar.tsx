"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingCart, User, Menu, X, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

interface NavbarProps {
    onCartOpen?: () => void;
    onWishlistOpen?: () => void;
    onSearchOpen?: () => void;
}

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/products", hasDropdown: true },
    { name: "Collections", href: "#collections" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar({ onCartOpen, onWishlistOpen, onSearchOpen }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const router = useRouter();
    const { user, isAuthenticated } = useAuth();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
                isScrolled ? "bg-primary-black/95 backdrop-blur-md shadow-lg" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <motion.a
                        href="/"
                        whileHover={{ scale: 1.05 }}
                        className="text-3xl font-heading font-bold text-white"
                    >
                        AWAIS
                    </motion.a>

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative group"
                                onMouseEnter={() => link.hasDropdown && setActiveDropdown("shop")}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <motion.a
                                    href={link.href}
                                    whileHover={{ y: -2 }}
                                    className="text-gray-300 hover:text-secondary-green transition-colors font-medium"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary-green transition-all duration-300 group-hover:w-full" />
                                </motion.a>

                                <AnimatePresence>
                                    {link.hasDropdown && activeDropdown === "shop" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute top-full left-0 mt-2 w-48 bg-primary-dark rounded-lg shadow-xl overflow-hidden"
                                        >
                                            {["Speed Series", "Control Series", "Power Series", "Street Series"].map((item) => (
                                                <motion.a
                                                    key={item}
                                                    href={`/products?category=${item.toLowerCase().replace(" ", "-")}`}
                                                    whileHover={{ x: 5 }}
                                                    className="block px-4 py-3 text-gray-300 hover:text-secondary-green hover:bg-primary-black transition-colors"
                                                >
                                                    {item}
                                                </motion.a>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center space-x-4">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onSearchOpen}
                            className="p-2 text-gray-300 hover:text-secondary-green transition-colors"
                        >
                            <Search size={20} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onWishlistOpen}
                            className="p-2 text-gray-300 hover:text-secondary-green transition-colors"
                        >
                            <Heart size={20} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onCartOpen}
                            className="p-2 text-gray-300 hover:text-secondary-green transition-colors"
                        >
                            <ShoppingCart size={20} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => isAuthenticated ? router.push("/profile") : router.push("/login")}
                            className="p-2 text-gray-300 hover:text-secondary-green transition-colors"
                        >
                            <User size={20} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-gray-300 hover:text-secondary-green transition-colors"
                        >
                            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </motion.button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-primary-dark border-t border-primary-dark"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {navLinks.map((link) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    whileHover={{ x: 5 }}
                                    className="block text-gray-300 hover:text-secondary-green transition-colors font-medium text-lg"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}