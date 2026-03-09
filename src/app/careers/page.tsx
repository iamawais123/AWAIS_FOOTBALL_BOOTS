"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const positions = [
  {
    title: "Senior Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time"
  },
  {
    title: "Marketing Manager",
    department: "Marketing",
    location: "New York, NY",
    type: "Full-time"
  },
  {
    title: "Customer Support Specialist",
    department: "Customer Service",
    location: "Remote",
    type: "Full-time"
  },
  {
    title: "Supply Chain Analyst",
    department: "Operations",
    location: "Los Angeles, CA",
    type: "Full-time"
  },
  {
    title: "Social Media Coordinator",
    department: "Marketing",
    location: "Remote",
    type: "Part-time"
  },
  {
    title: "Software Engineer",
    department: "Technology",
    location: "Remote",
    type: "Full-time"
  }
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-primary-black py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
            Join Our Team
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Be part of a team that's passionate about football and committed to excellence. We're looking for talented individuals who share our vision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-primary-dark rounded-lg">
              <h3 className="font-bold text-secondary-green mb-2">Competitive Benefits</h3>
              <p className="text-gray-400 text-sm">
                Health insurance, retirement plans, and generous paid time off
              </p>
            </div>
            <div className="p-6 bg-primary-dark rounded-lg">
              <h3 className="font-bold text-secondary-green mb-2">Growth Opportunities</h3>
              <p className="text-gray-400 text-sm">
                Professional development programs and career advancement paths
              </p>
            </div>
            <div className="p-6 bg-primary-dark rounded-lg">
              <h3 className="font-bold text-secondary-green mb-2">Flexible Work</h3>
              <p className="text-gray-400 text-sm">
                Remote options and flexible scheduling for work-life balance
              </p>
            </div>
            <div className="p-6 bg-primary-dark rounded-lg">
              <h3 className="font-bold text-secondary-green mb-2">Product Perks</h3>
              <p className="text-gray-400 text-sm">
                Employee discounts on all AWAIS products
              </p>
            </div>
            <div className="p-6 bg-primary-dark rounded-lg">
              <h3 className="font-bold text-secondary-green mb-2">Inclusive Culture</h3>
              <p className="text-gray-400 text-sm">
                Diverse and supportive team environment
              </p>
            </div>
            <div className="p-6 bg-primary-dark rounded-lg">
              <h3 className="font-bold text-secondary-green mb-2">Impact</h3>
              <p className="text-gray-400 text-sm">
                Make a real difference in the football community
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-8">Open Positions</h2>
          <div className="space-y-4">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="p-6 bg-primary-dark rounded-lg hover:border-secondary-green border border-transparent transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-lg mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                      <span>{position.department}</span>
                      <span>•</span>
                      <span>{position.location}</span>
                      <span>•</span>
                      <span>{position.type}</span>
                    </div>
                  </div>
                  <button className="px-6 py-2 bg-secondary-green text-primary-black font-bold rounded-full hover:bg-white transition-colors whitespace-nowrap">
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-primary-dark rounded-lg text-center">
            <h3 className="font-bold text-xl mb-2">Don't see a role that fits?</h3>
            <p className="text-gray-400 mb-4">
              We're always looking for talented individuals. Send us your resume and tell us how you can contribute to our team.
            </p>
            <a
              href="mailto:careers@awaisfootball.com"
              className="inline-block px-6 py-2 border-2 border-secondary-green text-secondary-green font-bold rounded-full hover:bg-secondary-green hover:text-primary-black transition-colors"
            >
              Send Resume
            </a>
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}
