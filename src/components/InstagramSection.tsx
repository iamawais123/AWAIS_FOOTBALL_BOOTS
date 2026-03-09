"use client";

import { motion } from "framer-motion";

const images = [
  { id: 1, image: "/assets/images/AURORA_DJ5961-146_PHSLH000-2000.jpg.jpeg" },
  { id: 2, image: "/assets/images/AURORA_DV4337-401_PHCFH001-2000.jpg.jpeg" },
  { id: 3, image: "/assets/images/AURORA_DV4342-402_PHCBH000-2000.jpg.jpeg" },
  { id: 4, image: "/assets/images/AURORA_FD6723-800_PHCFH001-2000.jpg.jpeg" },
  { id: 5, image: "/assets/images/AURORA_FJ2577-800_PHCFH001-2000.jpg.jpeg" },
  { id: 6, image: "/assets/images/AURORA_FQ1456-001_PHSLH001-2000.jpg.jpeg" },
];

export default function InstagramSection() {
  return (
    <section className="py-20 bg-primary-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-secondary-green text-lg font-medium tracking-widest uppercase mb-4">
            Follow Us
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-4">
            @AWAISFOOTBALL
          </h2>
          <p className="text-gray-400 text-lg">Join our community of champions</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative aspect-square bg-gradient-to-br from-primary-dark to-primary-black rounded-xl overflow-hidden cursor-pointer group"
            >
              <img
                src={image.image}
                alt={`Instagram post ${image.id}`}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-secondary-green/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-primary-black font-bold">View Post</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 text-white font-bold text-lg rounded-full hover:opacity-90 transition-opacity"
          >
            Follow @AwaisFootball
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
