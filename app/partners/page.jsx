"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InnerPageHero from "@/components/InnerPageHero";
import OurPartners from "@/components/OurPartners";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion_variants";

export default function PartnersPage() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <InnerPageHero 
        title="Our Partners" 
        description="We collaborate with leading Health Management Organizations and international agencies to ensure accessible, high-quality healthcare for all."
      />
      
      <div className="bg-white">
        <OurPartners />
      </div>

      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-24 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.h3 variants={fadeInUp} className="text-3xl font-bold text-slate-800 mb-6">Partner With Us</motion.h3>
          <motion.p variants={fadeInUp} className="text-lg text-slate-600 max-w-2xl mx-auto mb-12 font-light">
            Are you an HMO or a corporate institution looking for a premium healthcare partner? Join our network of excellence.
          </motion.p>
          <motion.button variants={fadeInUp} className="bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-primary/90 transition-all shadow-xl">
            Become a Partner
          </motion.button>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
