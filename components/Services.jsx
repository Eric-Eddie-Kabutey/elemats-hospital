"use client";

import { useState } from "react";
import Link from "next/link";
import { SERVICES_TABS, SERVICE_CARDS } from "@/constants/constants";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion_variants";

const Services = () => {
  return (
    <section id="services" className="relative section-padding bg-white pt-12 pb-24">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-left"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-normal text-slate-800 tracking-tight leading-tight">
              Our Specialist Services
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-primary text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 group shadow-sm "
            >
              See All
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES_TABS.slice(0, 4).map((service, index) => {
            return (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative aspect-square overflow-hidden bg-slate-100 cursor-pointer rounded-xl "
              >
                <Link href={`/services/${service.id}`} className="block w-full h-full">
                  {/* Image Container with matching rounding */}
                  <div className="w-full h-full overflow-hidden rounded-xl">
                    <Image
                      src={service.image}
                      alt={service.label}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-95"></div>

                  {/* Top-left Arrow Icon */}
                  <div className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 transition-all duration-500 group-hover:bg-white group-hover:scale-110 group-hover:-rotate-45">
                    <ArrowUpRight className="w-5 h-5 text-white group-hover:text-primary transition-colors" />
                  </div>

                  {/* Bottom Text */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl md:text-2xl font-normal text-white tracking-tight leading-tight">
                      {service.label}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
