"use client";

import { PARTNERS } from "@/constants/constants";
import Image from "next/image";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion_variants";

const Partners = () => {
  return (
    <section className="bg-transparent p-6 md:p-12 overflow-hidden">
      <div className="max-w-7xl mx-auto p-6 md:px-12 py-24 bg-primary rounded-3xl">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <p className="text-white/80 text-xs font-bold uppercase tracking-[0.2em] font-sans mb-4">Our Partners</p>
            <h2 className="text-4xl font-bold text-white tracking-tight">Trusted by Leading Organizations</h2>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-12 opacity-80">
            {PARTNERS.map((partner, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative w-32 h-16 md:w-40 md:h-20 transition-all duration-500 cursor-default"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
