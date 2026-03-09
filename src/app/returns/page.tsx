"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function ReturnsPage() {
  return (
    <main className="min-h-screen bg-primary-black">
      <Navbar />
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-8">
              Returns & Exchanges
            </h1>

            <div className="space-y-8 text-gray-300">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">30-Day Return Policy</h2>
                <p>
                  We want you to be completely satisfied with your purchase. If you're not happy with your order, you can return it within 30 days of delivery for a full refund or exchange.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Return Conditions</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Items must be unworn and in original condition</li>
                  <li>Original tags and packaging must be intact</li>
                  <li>Proof of purchase is required</li>
                  <li>Customized or personalized items cannot be returned</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">How to Return</h2>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Contact our customer service team to initiate a return</li>
                  <li>Receive a return authorization number and shipping label</li>
                  <li>Pack the item securely in original packaging</li>
                  <li>Attach the shipping label and drop off at designated carrier</li>
                  <li>Receive refund within 5-7 business days of receipt</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Exchanges</h2>
                <p>
                  Exchanges are available for different sizes or colors of the same product. If you'd like to exchange for a different item, please return the original item and place a new order.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Refund Method</h2>
                <p>
                  Refunds will be processed to the original payment method used for the purchase. Shipping costs are non-refundable unless the return is due to a defect or error on our part.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
