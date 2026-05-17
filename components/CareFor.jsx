"use client";

import React from 'react';
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion_variants";

const CareFor = () => {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-xl sm:text-4xl md:text-5xl font-normal text-slate-800 tracking-tight leading-tight"
          >
            We are a <span className="text-primary font-normal">leading private specialist</span> hospital — blending 
            <span className="text-primary font-normal">clinical precision, cutting-edge technology, and deep compassion</span> to 
            help <span className="text-primary font-normal">The Gambia’s community</span> access world-class healthcare.
          </motion.h2>

          <motion.div 
            variants={fadeInUp}
            className="mt-12 md:mt-16 flex justify-center"
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-3 bg-slate-950 text-white px-10 py-4.5 rounded-full text-lg font-medium hover:bg-primary transition-all shadow-xl group"
            >
              <span>About Us</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareFor;