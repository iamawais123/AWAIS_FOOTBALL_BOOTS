"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X, Mail, Lock, User, ArrowRight, Trophy } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { login, signup, loading } = useAuth();
  const router = useRouter();

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await signup(email, password, name);
      }
      router.push("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-black via-primary-dark to-black py-12 px-4 overflow-hidden relative">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IjMwMEZGODgiLz48L3N2Zz4=')] opacity-30" />
      </div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary-green/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-green/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 3, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative"
          >
            <div className="relative">
              {imageError ? (
                <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:max-w-[500px] lg:h-[600px] bg-gradient-to-br from-primary-dark to-primary-black flex items-center justify-center rounded-3xl mx-auto">
                  <div className="text-center">
                    <Trophy size={80} className="text-secondary-green mb-4 mx-auto" />
                    <p className="text-gray-400">Champion's Collection</p>
                  </div>
                </div>
              ) : (
                <>
                  <img
                    src="https://images.unsplash.com/photo-1551959070-0bec6439e1f8?auto=format&fit=crop&w=800&q=80"
                    alt="Professional football player"
                    className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:max-w-[500px] lg:h-[600px] object-cover rounded-3xl mx-auto"
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 rounded-3xl" />
                </>
              )}

              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(0, 255, 136, 0.4)",
                    "0 0 30px 0 rgba(0, 255, 136, 0.1)",
                    "0 0 0 0 rgba(0, 255, 136, 0.4)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-3xl border-4 border-secondary-green/50"
              />
            </div>

            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-4 sm:-bottom-6 -left-2 sm:-left-6 bg-secondary-green text-primary-black px-4 sm:px-8 py-2 sm:py-4 rounded-full font-bold text-sm sm:text-xl shadow-2xl"
            >
              RONALDO STYLE
            </motion.div>

            <motion.div
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-white text-primary-black px-3 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-xs sm:text-lg shadow-2xl"
            >
              CHAMPION
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md mx-auto"
        >
          <div className="bg-primary-dark/95 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-primary-dark">
            <div className="text-center mb-8">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <h1 className="text-5xl font-heading font-bold mb-2">AWAIS</h1>
              </motion.div>
              <p className="text-gray-400">
                {isLogin ? "Welcome back! Please login to continue." : "Join the AWAIS team!"}
              </p>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-500 text-sm"
              >
                {error}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full pl-12 pr-4 py-3 bg-primary-black border border-primary-dark rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-secondary-green transition-colors"
                      required={!isLogin}
                    />
                  </div>
                </motion.div>
              )}

              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-3 bg-primary-black border border-primary-dark rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-secondary-green transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full pl-12 pr-4 py-3 bg-primary-black border border-primary-dark rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-secondary-green transition-colors"
                    required
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-secondary-green text-primary-black font-bold text-lg rounded-lg hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {loading ? "Processing..." : isLogin ? "Login" : "Create Account"}
                  {!loading && <ArrowRight size={20} />}
                </span>
                <motion.div
                  animate={{
                    x: ["-100%", "100%"]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
              </motion.button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-secondary-green hover:underline transition-colors"
              >
                {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
              </button>
            </div>

            <div className="mt-8 pt-8 border-t border-primary-dark text-center text-sm text-gray-500">
              <p>By continuing, you agree to our Terms of Service and Privacy Policy.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
