"use client";

import React from 'react';
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion_variants";

const CareForAbout = () => {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto text-center">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-xl sm:text-4xl md:text-5xl font-normal text-slate-800 tracking-tight leading-tight"
        >
          Offering specialized excellence in <span className="text-primary font-normal">Fertility & IVF, Women&apos;s Health, and Pediatrics, </span>
          supported by <span className="text-primary font-normal">advanced diagnostics and 24/7 emergency care</span>.
        </motion.h2>

        {/* <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-12 md:mt-16 flex justify-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-3 bg-slate-950 text-white px-10 py-4.5 rounded-full text-lg font-medium hover:bg-primary transition-all shadow-xl group"
          >
            <span>Our Services</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </motion.div> */}
      </div>
    </section>
  );
};

export default CareForAbout;