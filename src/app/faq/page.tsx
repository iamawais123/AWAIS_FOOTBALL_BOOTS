"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const faqs = [
  {
    question: "What sizes do you offer?",
    answer: "We offer a wide range of sizes from US 6 to US 14, including half sizes. Our boots are designed to fit true to size, but we recommend checking our size guide for the perfect fit."
  },
  {
    question: "How do I care for my football boots?",
    answer: "Clean your boots after each use with a soft brush or cloth. Remove dirt and mud while still fresh. Allow them to air dry naturally, away from direct heat sources. Use specialized boot cleaners for best results."
  },
  {
    question: "Can I use these boots for indoor football?",
    answer: "We offer specific indoor versions of our boots with non-marking soles. Please check the product description to ensure you're selecting the right type for your playing surface."
  },
  {
    question: "Do you offer custom fittings?",
    answer: "Yes, we offer custom fittings at select locations. Contact our customer service team to schedule an appointment with one of our fitting specialists."
  },
  {
    question: "What is your warranty policy?",
    answer: "All our boots come with a 6-month warranty against manufacturing defects. This does not cover normal wear and tear or damage from improper use."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order ships, you'll receive a tracking number via email. You can also track your order using our order tracking page with your order number and email address."
  },
  {
    question: "Do you offer team discounts?",
    answer: "Yes, we offer special pricing for team orders. Contact our sales team with your team details and requirements for a custom quote."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay. All transactions are secure and encrypted."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
          <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-400 mb-12">
            Find answers to common questions about our products and services.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-primary-dark rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-primary-dark transition-colors"
                >
                  <span className="text-lg font-semibold">{faq.question}</span>
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-4 text-gray-400"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
