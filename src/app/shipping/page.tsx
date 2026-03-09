"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function ShippingPage() {
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
              Shipping Information
            </h1>

            <div className="space-y-8 text-gray-300">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Free Shipping</h2>
                <p>
                  We offer free standard shipping on all orders over $100. Standard shipping typically takes 5-7 business days to arrive.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Express Shipping</h2>
                <p>
                  Express shipping is available for an additional fee. Orders placed before 2 PM EST will be shipped the same day and typically arrive within 2-3 business days.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">International Shipping</h2>
                <p>
                  We currently ship to over 50 countries worldwide. International shipping rates and delivery times vary by destination. International orders may be subject to customs duties and taxes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Order Tracking</h2>
                <p>
                  Once your order ships, you will receive a confirmation email with a tracking number. You can track your order using our order tracking page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Shipping Restrictions</h2>
                <p>
                  We cannot ship to PO Boxes or APO/FPO addresses. Please provide a physical shipping address for all orders.
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
