"use client";

import { motion } from "framer-motion";
import { Instagram, Twitter, Youtube, Facebook } from "lucide-react";
import Link from "next/link";

const shopLinks = [
  { name: "Football Boots", href: "/" },
  { name: "New Arrivals", href: "/" },
  { name: "Accessories", href: "/" },
  { name: "Collections", href: "/" },
];

const supportLinks = [
  { name: "Shipping", href: "/shipping" },
  { name: "Returns", href: "/returns" },
  { name: "FAQs", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-black border-t border-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-heading font-bold">AWAIS</h3>
            <p className="text-gray-400 leading-relaxed">
              Premium football boots engineered for speed, precision, and control. Control the Game with AWAIS Football.
            </p>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -3 }}
                href="https://instagram.com/awaisfootball"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="p-2 bg-primary-dark rounded-full hover:bg-secondary-green hover:text-primary-black transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -3 }}
                href="https://twitter.com/awaisfootball"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter"
                className="p-2 bg-primary-dark rounded-full hover:bg-secondary-green hover:text-primary-black transition-colors"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -3 }}
                href="https://youtube.com/awaisfootball"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subscribe on YouTube"
                className="p-2 bg-primary-dark rounded-full hover:bg-secondary-green hover:text-primary-black transition-colors"
              >
                <Youtube size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -3 }}
                href="https://facebook.com/awaisfootball"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="p-2 bg-primary-dark rounded-full hover:bg-secondary-green hover:text-primary-black transition-colors"
              >
                <Facebook size={20} />
              </motion.a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-secondary-green transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-secondary-green transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-secondary-green transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-dark mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 AWAIS Football. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/privacy-policy" className="hover:text-secondary-green transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-secondary-green transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="hover:text-secondary-green transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
