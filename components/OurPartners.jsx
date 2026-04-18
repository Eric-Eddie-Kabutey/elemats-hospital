"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion_variants";

export default function OurPartners() {
  const partners = [
    { name: "ChildFund Alliance", src: "/partners/CFA-Logo_RGB_hi-res.png" },
    { name: "IOM", src: "/partners/IOM.png" },
    { name: "NEA", src: "/partners/NEA.png" },
    { name: "The Gambia Red Cross", src: "/partners/Red_Cross.jpg" },
  ];

  return (
    <section id="partners" className="flex flex-row justify-center section-padding items-center bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Content */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-3xl space-y-4 mb-20 text-center mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-normal text-slate-800 tracking-tight leading-tight">
            Our Partners & HMOs
          </h2>
        </motion.div>

        {/* Logos Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="flex flex-wrap items-center justify-center gap-12 md:gap-16 lg:gap-20"
        >
          {partners.map((partner, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp}
              className="relative w-32 h-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                fill
                sizes="(max-width: 768px) 128px, 160px"
                className="object-contain"
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
