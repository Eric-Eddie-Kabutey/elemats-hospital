"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PARTNERS } from "@/constants/constants";

export default function OurPartners() {
  // Triple the partners array for a seamless loop
  const duplicatedPartners = [...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section id="partners" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
        {/* Left Side: Static Text */}
        <div className="w-full lg:w-1/3 flex-none text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-normal text-slate-800 tracking-tight leading-tight">
            Our Partners
          </h2>
          <p className="mt-4 text-lg md:text-xl text-slate-500 font-light leading-relaxed max-w-md mx-auto lg:mx-0">
            Collaborating with world-class institutions to deliver excellence in specialized healthcare.
          </p>
        </div>

        {/* Right Side: Infinite Carousel */}
        <div className="w-full lg:flex-1 relative overflow-hidden group py-4">
          {/* Gradient Fades for depth */}
          <div className="absolute left-0 top-0 bottom-0 w-14 bg-linear-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-14 bg-linear-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
          
          <motion.div 
            className="flex items-center gap-12 md:gap-14 w-max"
            animate={{
              x: ["0%", "-33.33%"]
            }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div 
                key={`${partner.name}-${index}`}
                className="relative w-32 md:w-40 h-20 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
