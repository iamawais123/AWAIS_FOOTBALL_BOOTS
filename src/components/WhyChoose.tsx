"use client";

import { motion } from "framer-motion";
import { Zap, Footprints, Wind, CloudRain, Flame } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Speed Performance",
    description: "Explosive acceleration and maximum velocity for game-changing plays.",
  },
  {
    icon: Footprints,
    title: "Ultimate Grip Control",
    description: "Advanced traction system for superior stability in all conditions.",
  },
  {
    icon: Wind,
    title: "Lightweight Comfort",
    description: "Ultra-light materials that feel like a second skin.",
  },
  {
    icon: CloudRain,
    title: "Weather Resistant",
    description: "Engineered to perform in rain, mud, or shine.",
  },
  {
    icon: Flame,
    title: "Pro-Level Design",
    description: "Trusted by professional athletes worldwide.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 bg-gradient-to-b from-primary-black to-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-secondary-green text-lg font-medium tracking-widest uppercase mb-4">
            Why Choose AWAIS
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold">
            BUILT TO WIN
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="bg-primary-black/50 backdrop-blur-sm p-8 rounded-2xl border border-primary-dark hover:border-secondary-green/50 transition-all duration-300 group"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                className="w-16 h-16 bg-secondary-green/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary-green/30 transition-colors"
              >
                <feature.icon className="text-secondary-green" size={32} />
              </motion.div>

              <h3 className="text-2xl font-heading font-bold mb-3 group-hover:text-secondary-green transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-secondary-green text-primary-black font-bold text-lg rounded-full hover:bg-white transition-colors"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
