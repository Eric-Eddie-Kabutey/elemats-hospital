"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion_variants";
import { PARTNERS } from "@/constants/constants";

export default function OurPartners() {
  return (
    <section id="partners" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 lg:gap-16">
        
        {/* Header Text */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="w-full text-center"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-normal text-slate-800 tracking-tight leading-tight">
            Our Partners
          </motion.h2>
        </motion.div>

        {/* Partners Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="w-full max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-x-12 gap-y-10 md:gap-x-20"
        >
          {PARTNERS.map((partner, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative w-32 md:w-40 h-16 opacity-40 hover:opacity-100 transition-all duration-500"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
