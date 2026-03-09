"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CreditCard, MapPin, Check, ArrowRight } from "lucide-react";
import { useShop } from "@/context/ShopContext";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useShop();
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const shipping = cartTotal > 200 ? 0 : 9.99;
  const total = cartTotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const orderId = "AWAIS-" + Date.now().toString().slice(-8);
    const orderData = {
      id: orderId,
      items: cart,
      total,
      date: new Date().toISOString(),
      status: "Processing",
      ...formData,
    };
    localStorage.setItem(`order-${orderId}`, JSON.stringify(orderData));
    clearCart();
    router.push(`/order-tracking?orderId=${orderId}`);
  };

  if (cart.length === 0) {
    router.push("/cart");
    return null;
  }

  return (
    <div className="min-h-screen bg-primary-black py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-heading font-bold">Checkout</h1>
          <div className="flex items-center gap-4 mt-4">
            <div className={`flex-1 h-1 ${step >= 1 ? "bg-secondary-green" : "bg-primary-dark"}`} />
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? "bg-secondary-green text-primary-black" : "bg-primary-dark"}`}>
              {step >= 1 ? <Check size={16} /> : "1"}
            </div>
            <div className={`flex-1 h-1 ${step >= 2 ? "bg-secondary-green" : "bg-primary-dark"}`} />
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? "bg-secondary-green text-primary-black" : "bg-primary-dark"}`}>
              {step >= 2 ? <Check size={16} /> : "2"}
            </div>
            <div className={`flex-1 h-1 ${step >= 3 ? "bg-secondary-green" : "bg-primary-dark"}`} />
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? "bg-secondary-green text-primary-black" : "bg-primary-dark"}`}>
              {step >= 3 ? <Check size={16} /> : "3"}
            </div>
          </div>
        </motion.div>

        <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-primary-dark rounded-xl p-6"
            >
              <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3">
                <MapPin className="text-secondary-green" />
                Shipping Information
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 bg-primary-black border border-primary-dark rounded-lg text-white focus:outline-none focus:border-secondary-green transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 bg-primary-black border border-primary-dark rounded-lg text-white focus:outline-none focus:border-secondary-green transition-colors"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-primary-black border border-primary-dark rounded-lg text-white focus:outline-none focus:border-secondary-green transition-colors"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">Address</label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 bg-primary-black border border-primary-dark rounded-lg text-white focus:outline-none focus:border-secondary-green transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">City</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 bg-primary-black border border-primary-dark rounded-lg text-white focus:outline-none focus:border-secondary-green transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">ZIP Code</label>
                  <input
                    type="text"
                    value={formData.zipCode}
                    onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                    className="w-full px-4 py-3 bg-primary-black border border-primary-dark rounded-lg text-white focus:outline-none focus:border-secondary-green transition-colors"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">Country</label>
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-4 py-3 bg-primary-black border border-primary-dark rounded-lg text-white focus:outline-none focus:border-secondary-green transition-colors"
                    required
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-primary-dark rounded-xl p-6"
            >
              <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3">
                <CreditCard className="text-secondary-green" />
                Payment Information
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Card Number</label>
                  <input
                    type="text"
                    value={formData.cardNumber}
                    onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-3 bg-primary-black border border-primary-dark rounded-lg text-white focus:outline-none focus:border-secondary-green transition-colors"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Expiry Date</label>
                    <input
                      type="text"
                      value={formData.expiryDate}
                      onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                      placeholder="MM/YY"
                      className="w-full px-4 py-3 bg-primary-black border border-primary-dark rounded-lg text-white focus:outline-none focus:border-secondary-green transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">CVV</label>
                    <input
                      type="text"
                      value={formData.cvv}
                      onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                      placeholder="123"
                      className="w-full px-4 py-3 bg-primary-black border border-primary-dark rounded-lg text-white focus:outline-none focus:border-secondary-green transition-colors"
                      required
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-primary-dark rounded-xl p-6 sticky top-24"
            >
              <h2 className="text-2xl font-heading font-bold mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex justify-between text-sm">
                    <span className="text-gray-400">{item.name} x{item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}

                <div className="border-t border-primary-dark pt-4 space-y-2">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold pt-2">
                    <span>Total</span>
                    <span className="text-secondary-green">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-secondary-green text-primary-black font-bold text-lg rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2"
              >
                Place Order
                <ArrowRight size={20} />
              </motion.button>

              <div className="mt-4 text-xs text-gray-500 text-center">
                <p>By placing this order, you agree to our Terms of Service and Privacy Policy.</p>
              </div>
            </motion.div>
          </div>
        </form>
      </div>
    </div>
  );
}
