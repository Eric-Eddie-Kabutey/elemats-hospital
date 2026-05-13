"use client";

import { ArrowRight, Truck, Store } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const RefillForm = () => {
  const [method, setMethod] = useState("pickup");

  return (
    <section className="w-full section-padding bg-white">
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 z-20">

          {/* Left Column: Text & Info */}
          <div className="lg:w-1/3 space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-normal text-slate-900 leading-[1.1] tracking-tight">
                Quick Refill <br /> Request
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed font-light">
                Running low on your essential medications? Our pharmacy team is ready to assist. Submit your request below, and we&apos;ll have it ready for you.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex flex-col items-start gap-2">
                <h4 className="font-normal text-slate-900">Expert Review</h4>
                <p className="text-slate-500 font-light text-sm">Every refill is cross-checked by our clinical pharmacists for safety.</p>
              </div>
              <div className="flex flex-col items-start gap-2">
                <h4 className="font-normal text-slate-900">Home Delivery</h4>
                <p className="text-slate-500 font-light text-sm">Enjoy the convenience of medications delivered straight to your door.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:w-2/3">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-lg font-normal text-slate-700 ml-1">Patient Full Name*</label>
                <input
                  type="text"
                  required
                  className="mt-2 w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-1 focus:ring-primary/20 transition-all outline-none text-slate-900"
                  placeholder="e.g. John Doe"
                />
              </div>

              {/* Prescription Number */}
              <div className="space-y-2">
                <label className="text-lg font-normal text-slate-700 ml-1">Prescription Number (if known)</label>
                <input
                  type="text"
                  className="mt-2 w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-1 focus:ring-primary/20 transition-all outline-none text-slate-900"
                  placeholder="e.g. RX-12345"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-lg font-normal text-slate-700 ml-1">Email Address*</label>
                <input
                  type="email"
                  required
                  className="mt-2 w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-1 focus:ring-primary/20 transition-all outline-none text-slate-900"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label className="text-lg font-normal text-slate-700 ml-1">Phone Number*</label>
                <input
                  type="tel"
                  required
                  className="mt-2 w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-1 focus:ring-primary/20 transition-all outline-none text-slate-900"
                  placeholder="+220 ..."
                />
              </div>

              {/* Medication Details */}
              <div className="col-span-1 md:col-span-2 space-y-2">
                <label className="text-lg font-normal text-slate-700 ml-1">Medication Name & Dosage*</label>
                <textarea
                  rows={3}
                  required
                  className="mt-2 w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-1 focus:ring-primary/20 transition-all outline-none text-slate-900 resize-none"
                  placeholder="List the medications you need refilled..."
                />
              </div>

              {/* Fulfillment Method */}
              <div className="col-span-1 md:col-span-2 space-y-4">
                <label className="text-lg font-normal text-slate-700 ml-1">Fulfillment Method*</label>
                <div className="grid grid-cols-2 gap-4">
                  <div
                    onClick={() => setMethod("pickup")}
                    className={`cursor-pointer p-4 rounded-2xl border-2 transition-all flex items-center gap-3 ${method === "pickup" ? "border-primary bg-primary/5" : "border-slate-100 bg-slate-50"
                      }`}
                  >
                    <Store className={method === "pickup" ? "text-primary" : "text-slate-400"} />
                    <div>
                      <p className="font-bold text-slate-900 text-sm">Pick Up</p>
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider">At Hospital Pharmacy</p>
                    </div>
                  </div>
                  <div
                    onClick={() => setMethod("delivery")}
                    className={`cursor-pointer p-4 rounded-2xl border-2 transition-all flex items-center gap-3 ${method === "delivery" ? "border-primary bg-primary/5" : "border-slate-100 bg-slate-50"
                      }`}
                  >
                    <Truck className={method === "delivery" ? "text-primary" : "text-slate-400"} />
                    <div>
                      <p className="font-bold text-slate-900 text-sm">Home Delivery</p>
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider">Standard charges apply</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Delivery Address (Conditional) */}
              {method === "delivery" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="col-span-1 md:col-span-2 space-y-2"
                >
                  <label className="text-lg font-normal text-slate-700 ml-1">Delivery Address*</label>
                  <input
                    type="text"
                    required
                    className="mt-2 w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-1 focus:ring-primary/20 transition-all outline-none text-slate-900"
                    placeholder="Enter your full street address..."
                  />
                </motion.div>
              )}

              {/* Submit Button */}
              <div className="group col-span-1 md:col-span-2 pt-4">
                <button
                  type="submit"
                  className="flex items-center gap-2 text-white px-10 py-4 rounded-full text-sm font-normal bg-primary/90 hover:bg-primary shadow-lg shadow-primary/20 transition-all"
                >
                  Submit Refill Request
                  <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform inline-block ml-2" />
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RefillForm;
