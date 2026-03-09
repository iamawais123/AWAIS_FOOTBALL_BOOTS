"use client";

import { motion } from "framer-motion";
import { Zap, Grip, Feather, Shield } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Ultra Speed Technology",
    description: "Engineered for explosive acceleration and maximum velocity on the pitch.",
  },
  {
    icon: Grip,
    title: "Maximum Grip Sole",
    description: "Advanced stud configuration for superior traction in all conditions.",
  },
  {
    icon: Feather,
    title: "Lightweight Performance",
    description: "Ultra-light materials for enhanced agility and reduced fatigue.",
  },
  {
    icon: Shield,
    title: "Professional Match Quality",
    description: "Built to withstand the demands of elite-level competition.",
  },
];

export default function ProductShowcase() {
  return (
    <section className="py-20 bg-gradient-to-b from-primary-dark to-primary-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square bg-gradient-to-br from-primary-black to-primary-dark rounded-3xl overflow-hidden">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <img
                  src="/assets/images/AURORA_FQ8287-600_PHSLH000-2000.jpg.jpeg"
                  alt="Football Boot Showcase"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary-black/80 to-transparent" />
            </div>

            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 bg-secondary-green text-primary-black px-6 py-3 rounded-full font-bold text-lg"
            >
              NEW ARRIVAL
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <p className="text-secondary-green text-lg font-medium tracking-widest uppercase mb-4">
                Product Showcase
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold leading-tight">
                ENGINEERED FOR
                <br />
                <span className="text-secondary-green">EXCELLENCE</span>
              </h2>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex gap-4 p-4 rounded-xl hover:bg-primary-dark/50 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary-green/20 rounded-lg flex items-center justify-center">
                    <feature.icon className="text-secondary-green" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 bg-secondary-green text-primary-black font-bold text-lg rounded-full hover:bg-white transition-colors"
            >
              Shop Now
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
