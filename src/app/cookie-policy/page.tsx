"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function CookiePolicyPage() {
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
              Cookie Policy
            </h1>

            <div className="text-gray-400 mb-8">
              <p>Last updated: March 2024</p>
            </div>

            <div className="space-y-8 text-gray-300">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies?</h2>
                <p>
                  Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Types of Cookies We Use</h2>

                <h3 className="text-lg font-semibold mb-2 mt-4">Essential Cookies</h3>
                <p className="mb-4">
                  These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and shopping cart functionality.
                </p>

                <h3 className="text-lg font-semibold mb-2">Performance Cookies</h3>
                <p className="mb-4">
                  These cookies collect information about how visitors use our website, such as which pages are visited most often. This helps us improve the performance and design of our site.
                </p>

                <h3 className="text-lg font-semibold mb-2">Functionality Cookies</h3>
                <p className="mb-4">
                  These cookies remember your choices and preferences to provide enhanced features, such as remembering your language preference or login information.
                </p>

                <h3 className="text-lg font-semibold mb-2">Targeting/Advertising Cookies</h3>
                <p>
                  These cookies are used to deliver advertisements that are relevant to you and your interests. They may also be used to limit the number of times you see an advertisement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">How We Use Cookies</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Remember your login credentials</li>
                  <li>Keep items in your shopping cart</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Personalize your browsing experience</li>
                  <li>Provide relevant product recommendations</li>
                  <li>Track the effectiveness of our marketing campaigns</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Third-Party Cookies</h2>
                <p>
                  We may use third-party services that set cookies on your device, including:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>Google Analytics for website analytics</li>
                  <li>Payment processors for secure transactions</li>
                  <li>Social media platforms for sharing functionality</li>
                  <li>Advertising networks for targeted ads</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Managing Cookies</h2>
                <p>
                  You can control and manage cookies through your browser settings. Most browsers allow you to:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>View what cookies are stored</li>
                  <li>Delete existing cookies</li>
                  <li>Block cookies from specific websites</li>
                  <li>Block all cookies</li>
                  <li>Delete cookies when you close your browser</li>
                </ul>
                <p className="mt-4">
                  Please note that blocking or deleting cookies may affect your browsing experience and some features of our website may not function properly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Cookie Consent</h2>
                <p>
                  When you first visit our website, you will see a cookie banner where you can choose which types of cookies you consent to. You can change your preferences at any time by visiting our Cookie Settings page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Updates to This Policy</h2>
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p>
                  If you have any questions about our use of cookies, please contact us at:
                </p>
                <p className="mt-2 text-secondary-green">
                  privacy@awaisfootball.com
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
