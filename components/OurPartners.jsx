"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PARTNERS } from "@/constants/constants";

export default function OurPartners() {
  return (
    <section id="partners" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 lg:gap-16">
        
        {/* Header Text */}
        <div className="w-full text-center">
          <h2 className="text-4xl md:text-5xl font-normal text-slate-800 tracking-tight leading-tight">
            Our Partners
          </h2>
        </div>

        {/* Partners Grid */}
        <div className="w-full max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-x-12 gap-y-10 md:gap-x-20">
          {PARTNERS.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative w-32 md:w-40 h-16 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
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

      </div>
    </section>
  );
}
