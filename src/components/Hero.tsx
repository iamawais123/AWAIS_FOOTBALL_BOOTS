"use client";

import { motion } from "framer-motion";
import { ArrowRight, MousePointer2, Sparkles, Star } from "lucide-react";

export default function Hero() {

  const textVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.9,
        ease: [0.32, 0.72, 0, 1],
      },
    }),
  };

  const floatVariants = {
    animate: {
      y: [0, -12, 0],
      rotate: [0, 3, -3, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: [0.45, 0, 0.55, 1],
      },
    },
  };

  const glowVariants = {
    animate: {
      opacity: [0.25, 0.45, 0.25],
      scale: [1, 1.1, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: [0.45, 0, 0.55, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen sm:min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 lg:pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-black via-primary-dark to-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IjMwMEZGODgiLz48L3N2Zz4=')] opacity-30" />
        </div>
        <motion.div
          variants={glowVariants}
          animate="animate"
          className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-secondary-green/10 rounded-full blur-2xl sm:blur-3xl"
        />
        <motion.div
          variants={glowVariants}
          animate="animate"
          transition={{ delay: 1.5 }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-secondary-green/5 rounded-full blur-2xl sm:blur-3xl"
        />
        <motion.div
          variants={glowVariants}
          animate="animate"
          transition={{ delay: 0.75 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-secondary-green/5 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0],
              y: [0, -80, -160],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 1,
              ease: [0.45, 0, 0.55, 1],
            }}
            className="absolute"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
          >
            <Star className="w-2 h-2 sm:w-3 sm:h-3 text-secondary-green fill-secondary-green" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            className="space-y-4 sm:space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              variants={textVariants}
              custom={0}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-green/10 border border-secondary-green/20 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-secondary-green" />
              <span className="text-secondary-green text-sm sm:text-base md:text-lg font-medium tracking-widest uppercase">
                Control The Game
              </span>
            </motion.div>

            <motion.h1
              variants={textVariants}
              custom={1}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold tracking-tight leading-tight sm:leading-tight"
            >
              DOMINATE
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-green via-green-400 to-secondary-green animate-gradient">
                THE PITCH
              </span>
            </motion.h1>

            <motion.p
              variants={textVariants}
              custom={2}
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto lg:mx-0 leading-relaxed"
            >
              High-performance football boots engineered for speed, precision, and control.
            </motion.p>

            <motion.div
              variants={textVariants}
              custom={3}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 pt-4 sm:pt-6 md:pt-8 w-full justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(34, 197, 94, 0.5)", transition: { duration: 0.3, ease: [0.32, 0.72, 0, 1] } }}
                whileTap={{ scale: 0.98, transition: { duration: 0.15 } }}
                className="group relative px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-secondary-green to-green-500 text-primary-black font-bold text-sm sm:text-base md:text-lg rounded-full overflow-hidden whitespace-nowrap w-full sm:w-auto"
                onClick={() => document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Shop Now
                  <ArrowRight size={16} className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-400" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800"
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.1)", transition: { duration: 0.3, ease: [0.32, 0.72, 0, 1] } }}
                whileTap={{ scale: 0.98, transition: { duration: 0.15 } }}
                className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 border-2 border-white/50 text-white font-bold text-sm sm:text-base md:text-lg rounded-full hover:bg-white hover:text-primary-black transition-all duration-300 whitespace-nowrap w-full sm:w-auto backdrop-blur-sm"
                onClick={() => document.getElementById("collections")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore Collection
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="relative flex justify-center items-center order-1 lg:order-2 py-4 sm:py-6 lg:py-0"
          >
            <motion.div
              variants={floatVariants}
              animate="animate"
              className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
            >
              <motion.div
                className="absolute -inset-4 sm:-inset-6 md:-inset-8 bg-gradient-to-br from-secondary-green/20 via-transparent to-secondary-green/10 rounded-3xl sm:rounded-[2rem] blur-2xl sm:blur-3xl -z-10"
                animate={{
                  scale: [1, 1.03, 1],
                  rotate: [0, 1.5, -1.5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: [0.45, 0, 0.55, 1],
                }}
              />
              <motion.img
                src="/assets/hero/ronaldo.jpg"
                alt="Football Player"
                className="w-full h-auto object-contain rounded-2xl sm:rounded-3xl drop-shadow-2xl sm:drop-shadow-3xl"
                initial={{ scale: 0.85, rotate: -3, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.6, ease: [0.32, 0.72, 0, 1] }}
                whileHover={{ scale: 1.015, rotate: 0.5, transition: { duration: 0.4, ease: [0.32, 0.72, 0, 1] } }}
              />
              <motion.div
                className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-secondary-green text-primary-black rounded-full p-2 sm:p-3 shadow-lg shadow-secondary-green/50"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 8, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: [0.45, 0, 0.55, 1],
                }}
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-2 sm:p-3"
                animate={{
                  scale: [1, 1.05, 1],
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: [0.45, 0, 0.55, 1],
                  delay: 0.75,
                }}
              >
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-green fill-secondary-green" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden sm:block"
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: [0.45, 0, 0.55, 1],
        }}
      >
        <MousePointer2 className="w-6 h-6 text-secondary-green/50" />
      </motion.div>
    </section>
  );
}
