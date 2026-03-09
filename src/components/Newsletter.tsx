"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-dark via-primary-black to-primary-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMwMEZGODgiLz48L3N2Zz4=')] opacity-30" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary-green/20 rounded-full mb-6">
            <Mail className="text-secondary-green" size={40} />
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold">
            JOIN THE AWAIS TEAM
          </h2>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Subscribe to our newsletter and get <span className="text-secondary-green font-bold">10% OFF</span> your first order, plus exclusive access to new releases and special offers.
          </p>

          <form
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for subscribing! You'll receive 10% OFF your first order.");
            }}
          >
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              placeholder="Enter your email address"
              required
              className="flex-1 px-6 py-4 bg-primary-dark border-2 border-primary-dark rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-secondary-green transition-colors"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-8 py-4 bg-secondary-green text-primary-black font-bold text-lg rounded-full hover:bg-white transition-colors flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight size={20} />
            </motion.button>
          </form>

          <p className="text-sm text-gray-500">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
