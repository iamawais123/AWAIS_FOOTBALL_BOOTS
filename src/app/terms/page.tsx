"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-primary-black py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-8">
            Terms of Service
          </h1>

          <div className="text-gray-400 mb-8">
            <p>Last updated: March 2024</p>
          </div>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>
              <p>
                By accessing and using AWAIS Football's website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Products and Services</h2>
              <p>
                We strive to provide accurate product descriptions and images. However, we do not warrant that descriptions are error-free. Colors may vary slightly due to monitor settings. We reserve the right to modify product specifications at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Pricing and Payment</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>All prices are in USD unless otherwise stated</li>
                <li>We reserve the right to change prices without notice</li>
                <li>Payment is due at time of purchase</li>
                <li>We accept major credit cards, PayPal, and other payment methods</li>
                <li>Your payment information is securely processed</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Orders and Fulfillment</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>We reserve the right to cancel or limit orders</li>
                <li>Order confirmation does not guarantee product availability</li>
                <li>We will notify you if any items are unavailable</li>
                <li>Shipping times are estimates and not guaranteed</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Returns and Refunds</h2>
              <p>
                Please refer to our Returns & Exchanges policy for detailed information about return eligibility, procedures, and refund processing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">User Accounts</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>You are responsible for maintaining account security</li>
                <li>Provide accurate and complete information</li>
                <li>Notify us immediately of unauthorized access</li>
                <li>You are responsible for all activity under your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
              <p>
                All content on this website, including text, images, logos, and designs, is the property of AWAIS Football and protected by copyright laws. You may not use, reproduce, or distribute our content without prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
              <p>
                AWAIS Football shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our products or services. Our liability is limited to the purchase price of the product.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless AWAIS Football from any claims, damages, or expenses arising from your use of our website or violation of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
              <p>
                These terms are governed by the laws of the United States. Any disputes shall be resolved in the courts of the United States.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of the website constitutes acceptance of any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
              <p>
                For questions about these Terms of Service, please contact us at:
              </p>
              <p className="mt-2 text-secondary-green">
                legal@awaisfootball.com
              </p>
            </section>
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}
