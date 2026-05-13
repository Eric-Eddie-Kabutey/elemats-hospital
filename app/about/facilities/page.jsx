"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InnerPageHero from "@/components/InnerPageHero";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HOSPITAL_FACILITIES = [
  {
    title: "Fertility & IVF Center",
    description: "Our world-class fertility clinic features state-of-the-art laboratories and comfortable recovery suites.",
    image: "/stock/fac-8.jpeg"
  },
  {
    title: "Modern Operating Theatres",
    description: "Fully equipped surgical suites designed for complex procedures with advanced life support systems.",
    image: "/stock/sur-1.jpeg"
  },
  {
    title: "Maternity & Delivery Suites",
    description: "Private, serene delivery rooms providing a safe and welcoming environment for mothers and newborns.",
    image: "/stock/fac-3.jpeg"
  },
  {
    title: "Diagnostics & Imaging Hub",
    description: "High-resolution radio-diagnostics and fully automated laboratory services for precise medical insights.",
    image: "/stock/fac-5.jpeg"
  },
  {
    title: "Intensive Care Unit (ICU)",
    description: "Specialized unit with 24/7 dedicated nursing and advanced monitoring for critical patient care.",
    image: "/stock/fac-4.jpeg"
  }
];

const PHARMACY_FACILITIES = [
  {
    title: "Main Hospital Pharmacy",
    description: "Our 24-hour in-house pharmacy ensures that all hospitalized patients have immediate access to life-saving medications.",
    image: "/stock/fac-5.jpeg"
  },
  {
    title: "Prescription Dispensing",
    description: "Fast and accurate dispensing of all essential medications with professional pharmacist oversight and guidance.",
    image: "/stock/fac-8.jpeg"
  },
  {
    title: "Specialized Medication Hub",
    description: "Access to rare and specialized drugs for fertility treatments, chronic care, and specialized medical conditions.",
    image: "/stock/fac-3.jpeg"
  },
  {
    title: "Wellness & OTC Section",
    description: "A wide selection of trusted health and wellness products, vitamins, and first-aid essentials for daily health.",
    image: "/stock/fac-4.jpeg"
  }
];

export default function FacilitiesPage() {
  const [activeTab, setActiveTab] = useState("hospital");
  const facilities = activeTab === "hospital" ? HOSPITAL_FACILITIES : PHARMACY_FACILITIES;

  return (
    <main>
      <Navbar />
      <InnerPageHero
        title="Our Facilities"
        description="Explore the advanced medical infrastructure and healing environments we've built to ensure your comfort and safety."
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Tabs Navigation */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex p-1 bg-slate-100 rounded-2xl">
              <button
                onClick={() => setActiveTab("hospital")}
                className={`px-8 py-3.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === "hospital" 
                    ? "bg-white text-primary shadow-sm" 
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                Hospital
              </button>
              <button
                onClick={() => setActiveTab("pharmacy")}
                className={`px-8 py-3.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === "pharmacy" 
                    ? "bg-white text-primary shadow-sm" 
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                Pharmacy
              </button>
            </div>
          </div>

          {/* Facilities Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {facilities.map((fac, idx) => (
                <div 
                  key={`${activeTab}-${fac.title}`} 
                  className={`group cursor-pointer flex flex-col h-full ${
                    idx === 0 ? "md:col-span-2 lg:col-span-2 lg:row-span-2" : ""
                  }`}
                >
                  <div className={`relative w-full rounded-3xl overflow-hidden mb-6 border border-slate-100 ${
                    idx === 0 ? "aspect-video lg:aspect-auto lg:flex-1 lg:min-h-[400px]" : "aspect-4/3"
                  }`}>
                    <Image
                      src={fac.image}
                      alt={fac.title}
                      fill
                      sizes={idx === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 25vw"}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="">
                    <h4 className={`${
                      idx === 0 ? "text-2xl lg:text-3xl" : "text-xl"
                    } font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors`}>
                      {fac.title}
                    </h4>
                    <p className={`${
                      idx === 0 ? "text-base lg:text-lg" : "text-sm text-slate-500"
                    } font-light leading-relaxed`}>
                      {fac.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </main>
  );
}
