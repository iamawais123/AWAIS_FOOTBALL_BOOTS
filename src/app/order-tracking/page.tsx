"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Package, Truck, CheckCircle, Clock, MapPin } from "lucide-react";
import { useSearchParams } from "next/navigation";

interface Order {
  id: string;
  items: any[];
  total: number;
  date: string;
  status: string;
  address: string;
  city: string;
  zipCode: string;
  country: string;
}

export default function OrderTrackingPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (orderId) {
      const savedOrder = localStorage.getItem(`order-${orderId}`);
      if (savedOrder) {
        setOrder(JSON.parse(savedOrder));
      }
    }
    setLoading(false);
  }, [orderId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary-black">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-secondary-green mx-auto mb-4" />
          <p className="text-gray-400">Loading order details...</p>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary-black py-12 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <Package className="mx-auto text-gray-600 mb-6" size={64} />
          <h2 className="text-3xl font-heading font-bold mb-4">Order Not Found</h2>
          <p className="text-gray-400 mb-8">
            We couldn't find an order with that ID. Please check your email for the correct order number.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.history.back()}
            className="px-8 py-4 bg-secondary-green text-primary-black font-bold text-lg rounded-full hover:bg-white transition-colors"
          >
            Go Back
          </motion.button>
        </motion.div>
      </div>
    );
  }

  const steps = [
    { title: "Order Placed", icon: CheckCircle, completed: true },
    { title: "Processing", icon: Clock, completed: order.status !== "Processing" },
    { title: "Shipped", icon: Package, completed: ["Shipped", "Delivered"].includes(order.status) },
    { title: "Delivered", icon: Truck, completed: order.status === "Delivered" },
  ];

  return (
    <div className="min-h-screen bg-primary-black py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-primary-dark rounded-xl p-8 mb-8"
        >
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-3xl font-heading font-bold mb-2">Order Tracking</h1>
              <p className="text-gray-400">Order ID: {order.id}</p>
            </div>
            <div className={`px-4 py-2 rounded-full font-bold ${order.status === "Delivered" ? "bg-green-500/20 text-green-500" :
                order.status === "Shipped" ? "bg-blue-500/20 text-blue-500" :
                  "bg-yellow-500/20 text-yellow-500"
              }`}>
              {order.status}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <MapPin className="text-secondary-green" size={18} />
                Shipping Address
              </h3>
              <p className="text-gray-400">
                {order.address}<br />
                {order.city}, {order.zipCode}<br />
                {order.country}
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Order Date</h3>
              <p className="text-gray-400">
                {new Date(order.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-primary-dark rounded-xl p-8 mb-8"
        >
          <h2 className="text-2xl font-heading font-bold mb-6">Order Status</h2>

          <div className="relative">
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-primary-dark" />
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-16"
                >
                  <div className={`absolute left-0 w-12 h-12 rounded-full flex items-center justify-center ${step.completed ? "bg-secondary-green text-primary-black" : "bg-primary-dark text-gray-500"
                    }`}>
                    <step.icon size={20} />
                  </div>
                  <div>
                    <h3 className={`font-semibold ${step.completed ? "text-white" : "text-gray-500"}`}>
                      {step.title}
                    </h3>
                    {step.completed && (
                      <p className="text-sm text-secondary-green">Completed</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-primary-dark rounded-xl p-8"
        >
          <h2 className="text-2xl font-heading font-bold mb-6">Order Items</h2>

          <div className="space-y-4">
            {order.items.map((item: any, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-4 bg-primary-black rounded-lg"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-dark to-primary-black rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">⚽</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-400">Size: {item.size}</p>
                  <p className="text-sm text-gray-400">Quantity: {item.quantity}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-secondary-green">${(item.price * item.quantity).toFixed(2)}</p>
                  <p className="text-sm text-gray-400">${item.price} each</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-primary-dark">
            <div className="flex justify-between text-2xl font-bold">
              <span>Total</span>
              <span className="text-secondary-green">${order.total.toFixed(2)}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
