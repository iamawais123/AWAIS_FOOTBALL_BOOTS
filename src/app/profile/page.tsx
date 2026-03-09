"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, MapPin, ShoppingBag, LogOut, Edit, Package } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("orders");

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  if (!user) {
    router.push("/login");
    return null;
  }

  const orders = Object.keys(localStorage)
    .filter((key) => key.startsWith("order-"))
    .map((key) => JSON.parse(localStorage.getItem(key) || "{}"));

  return (
    <div className="min-h-screen bg-primary-black py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-primary-dark rounded-xl p-8 mb-8"
        >
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-secondary-green to-green-600 rounded-full flex items-center justify-center text-4xl text-primary-black font-bold">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-heading font-bold">{user.name}</h1>
              <p className="text-gray-400 flex items-center gap-2 mt-1">
                <Mail size={16} />
                {user.email}
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              className="p-3 bg-red-500/20 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-colors"
            >
              <LogOut size={20} />
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-primary-dark rounded-xl overflow-hidden"
        >
          <div className="flex border-b border-primary-dark">
            {["orders", "profile"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-4 font-semibold capitalize transition-colors ${activeTab === tab
                    ? "bg-primary-black text-secondary-green border-b-2 border-secondary-green"
                    : "text-gray-400 hover:text-white"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="p-8">
            {activeTab === "orders" && (
              <div>
                <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3">
                  <Package className="text-secondary-green" />
                  Order History
                </h2>

                {orders.length === 0 ? (
                  <div className="text-center py-12">
                    <Package className="mx-auto text-gray-600 mb-4" size={48} />
                    <p className="text-gray-400">No orders yet</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {orders.map((order: any, index) => (
                      <motion.div
                        key={order.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-primary-black rounded-lg p-6 flex items-center justify-between hover:border hover:border-secondary-green transition-colors cursor-pointer"
                        onClick={() => router.push(`/order-tracking?orderId=${order.id}`)}
                      >
                        <div>
                          <p className="font-semibold">{order.id}</p>
                          <p className="text-sm text-gray-400">
                            {new Date(order.date).toLocaleDateString()}
                          </p>
                          <p className="text-sm text-gray-400">{order.items.length} items</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-secondary-green">${order.total.toFixed(2)}</p>
                          <p className={`text-sm ${order.status === "Delivered" ? "text-green-500" :
                              order.status === "Shipped" ? "text-blue-500" :
                                "text-yellow-500"
                            }`}>
                            {order.status}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === "profile" && (
              <div>
                <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3">
                  <User className="text-secondary-green" />
                  Profile Settings
                </h2>

                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-primary-black rounded-lg">
                    <div className="flex items-center gap-4">
                      <User className="text-gray-500" size={24} />
                      <div>
                        <p className="font-semibold">Full Name</p>
                        <p className="text-gray-400">{user.name}</p>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 hover:text-secondary-green transition-colors"
                    >
                      <Edit size={20} />
                    </motion.button>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-primary-black rounded-lg">
                    <div className="flex items-center gap-4">
                      <Mail className="text-gray-500" size={24} />
                      <div>
                        <p className="font-semibold">Email Address</p>
                        <p className="text-gray-400">{user.email}</p>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 hover:text-secondary-green transition-colors"
                    >
                      <Edit size={20} />
                    </motion.button>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-primary-black rounded-lg">
                    <div className="flex items-center gap-4">
                      <MapPin className="text-gray-500" size={24} />
                      <div>
                        <p className="font-semibold">Shipping Address</p>
                        <p className="text-gray-400">Not set</p>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 hover:text-secondary-green transition-colors"
                    >
                      <Edit size={20} />
                    </motion.button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
