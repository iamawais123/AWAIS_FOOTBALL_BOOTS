"use client";

import { motion } from "framer-motion";

export default function FootballLifestyle() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-black via-primary-dark to-primary-black" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMwMEZGODgiLz48L3N2Zz4=')] opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-2xl mx-auto"
          >
            <img
              src="/assets/images/AURORA_FQ8313-600_PHCTH001-2000.jpg.jpeg"
              alt="Football Lifestyle"
              className="w-full h-[300px] object-cover rounded-3xl shadow-2xl"
            />
          </motion.div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold leading-tight">
            BUILT FOR PLAYERS
            <br />
            <span className="text-secondary-green">WHO REFUSE TO LOSE</span>
          </h2>

          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Every pair of AWAIS boots is engineered with one purpose: to help you dominate the pitch and leave your mark on the game.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-secondary-green text-primary-black font-bold text-lg rounded-full hover:bg-white transition-colors inline-flex items-center gap-2"
          >
            Explore Performance
            <span>→</span>
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-black to-transparent"
      />
    </section>
  );
}
