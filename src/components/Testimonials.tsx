"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Johnson",
    role: "Professional Footballer",
    image: "/assets/images/AURORA_FJ2577-800_PHCFH001-2000.jpg.jpeg",
    rating: 5,
    text: "These boots changed my game completely. The grip and control are unmatched. I've never felt more confident on pitch.",
  },
  {
    name: "Sarah Williams",
    role: "Semi-Pro Player",
    image: "/assets/images/AURORA_FQ1456-001_PHSLH001-2000.jpg.jpeg",
    rating: 5,
    text: "Best investment I've made for my football career. The lightweight design and speed technology are game-changing.",
  },
  {
    name: "David Chen",
    role: "Youth Academy Coach",
    image: "/assets/images/AURORA_FQ8286-600_PHSLH000-2000.jpg.jpeg",
    rating: 5,
    text: "I recommend AWAIS boots to all my players. The quality and performance are professional-grade at an affordable price.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-secondary-green text-lg font-medium tracking-widest uppercase mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold">
            WHAT PLAYERS SAY
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-primary-black/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-primary-dark"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-secondary-green"
                  />
                </div>

                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-3 sm:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${i < testimonials[currentIndex].rating ? "text-secondary-green fill-current" : "text-gray-600"}`}
                      />
                    ))}
                  </div>

                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-4 sm:mb-6">
                    "{testimonials[currentIndex].text}"
                  </p>

                  <div>
                    <h4 className="text-lg sm:text-xl font-bold">{testimonials[currentIndex].name}</h4>
                    <p className="text-secondary-green text-sm sm:text-base">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevTestimonial}
              className="p-3 bg-primary-dark rounded-full hover:bg-secondary-green hover:text-primary-black transition-colors"
            >
              <ChevronLeft size={24} />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-secondary-green w-8" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextTestimonial}
              className="p-3 bg-primary-dark rounded-full hover:bg-secondary-green hover:text-primary-black transition-colors"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
