"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-primary-black py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-8">
            About AWAIS Football
          </h1>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Our Story</h2>
              <p>
                Founded in 2020, AWAIS Football was born from a passion for the beautiful game and a commitment to excellence. We believe that every player deserves equipment that enhances their performance and reflects their unique style.
              </p>
              <p className="mt-4">
                Our journey began with a simple question: How can we make football boots that give players the edge they need to dominate the pitch? After years of research, development, and collaboration with professional athletes, we've created a line of boots that combines cutting-edge technology with superior craftsmanship.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p>
                To empower football players at every level with high-performance equipment that helps them control the game. We're committed to innovation, quality, and the relentless pursuit of excellence.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="p-6 bg-primary-dark rounded-lg">
                  <h3 className="font-bold text-secondary-green mb-2">Innovation</h3>
                  <p className="text-sm">
                    Constantly pushing boundaries with new technologies and designs
                  </p>
                </div>
                <div className="p-6 bg-primary-dark rounded-lg">
                  <h3 className="font-bold text-secondary-green mb-2">Quality</h3>
                  <p className="text-sm">
                    Using only the finest materials and craftsmanship
                  </p>
                </div>
                <div className="p-6 bg-primary-dark rounded-lg">
                  <h3 className="font-bold text-secondary-green mb-2">Performance</h3>
                  <p className="text-sm">
                    Designed to help players reach their full potential
                  </p>
                </div>
                <div className="p-6 bg-primary-dark rounded-lg">
                  <h3 className="font-bold text-secondary-green mb-2">Community</h3>
                  <p className="text-sm">
                    Supporting football at grassroots and professional levels
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Our Technology</h2>
              <p>
                Every AWAIS boot is engineered with precision and care. From our proprietary sole technology that provides optimal traction, to our lightweight materials that enhance speed without sacrificing durability, every feature is designed with the player in mind.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Looking Ahead</h2>
              <p>
                We're just getting started. With new products in development and partnerships forming around the world, AWAIS Football is committed to growing with the sport we love. Join us on this journey and experience the difference that quality equipment can make in your game.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}
