"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion_variants";

const StatCard = ({ color, number, text, subtext }) => (
  <motion.div
    variants={fadeInUp}
    className={`p-4 md:p-6 rounded-xl flex flex-col justify-between h-full min-h-[160px] md:min-h-[220px] lg:min-h-[260px] ${color}`}
  >
    <div className="space-y-1.5 md:space-y-4">
      <h3 className="text-xl md:text-2xl lg:text-5xl font-bold text-white tracking-tighter leading-none">{number}</h3>
      <p className="text-white/90 text-[9px] md:text-[11px] lg:text-lg font-medium leading-tight max-w-[180px]">
        {text}
      </p>
    </div>
    {subtext && (
      <p className="text-white/70 text-[7px] md:text-[9px] lg:text-sm font-medium tracking-wide">
        {subtext}
      </p>
    )}
  </motion.div>
);

const ServiceCard = ({ image, title, description, aspect = "aspect-[4/5]" }) => (
  <motion.div
    variants={fadeInUp}
    className={`relative rounded-xl overflow-hidden group ${aspect}`}
  >
    <Image
      src={image}
      alt={title}
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
    <div className="absolute bottom-0 left-0 p-2 md:p-4 lg:p-6 text-white translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
      <p className="text-[10px] md:text-[13px] lg:text-xl font-bold mb-0.5 md:mb-1 tracking-tight leading-tight">{title}</p>
      <p className="text-[8px] md:text-[10px] lg:text-sm font-medium text-white/70 leading-tight md:leading-relaxed max-w-[240px] line-clamp-2 md:line-clamp-none">{description}</p>
    </div>
  </motion.div>
);

const CareFor2 = () => {
  const items = [
    { type: 'service', image: "/WhatWeOffer/Surgery.jpg", title: "General Medical", description: "Expert primary care and advanced surgical solutions for your family.", aspect: "aspect-[4/7]" },
    { type: 'stat', color: "bg-indigo-500", number: "15k+", text: "Successful surgeries performed annually.", subtext: "Excellence in every procedure" },
    { type: 'service', image: "/WhatWeOffer/Specialist Services.jpg", title: "Fertility & IVF", description: "Advanced reproductive health and assisted conception services.", aspect: "aspect-square md:aspect-[4/5]" },
    { type: 'service', image: "/WhatWeOffer/OB-GYN Services.jpg", title: "Women's Health", description: "Comprehensive obstetric and gynecological care for every stage of life.", aspect: "aspect-[4/5]" },
    { type: 'stat', color: "bg-emerald-500", number: "24/7", text: "Emergency medical support available.", subtext: "Always here when it matters" },
    { type: 'service', image: "/WhatWeOffer/Radio Diagnostics.jpg", title: "Diagnostics", description: "High-precision laboratory testing and specialized medical imaging.", aspect: "aspect-square md:aspect-[4/5]" },
    { type: 'stat', color: "bg-primary", number: "500+", text: "World-class medical professionals.", subtext: "Expertise you can trust" },
    { type: 'service', image: "/WhatWeOffer/PrimaryCare.jpg", title: "Pediatrics", description: "Dedicated medical care for infants, children, and adolescents.", aspect: "aspect-[4/6]" },
  ];

  return (
    <section className="bg-white overflow-hidden pb-12 md:pb-24">
      <div className="max-w-[1400px] mx-auto px-2 md:px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="columns-3 lg:columns-4 gap-1.5 md:gap-4 lg:gap-6 space-y-1.5 md:space-y-4 lg:space-y-6"
        >
          {items.map((item, idx) => (
            <div key={idx} className="break-inside-avoid">
              {item.type === 'stat' ? (
                <StatCard {...item} />
              ) : (
                <ServiceCard {...item} />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CareFor2;
