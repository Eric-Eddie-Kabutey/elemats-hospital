"use client";

import { HERO_CONTENT } from "@/constants/constants";
import Image from "next/image";
import Navbar from "./Navbar";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, slideInRight, staggerContainer } from "@/lib/motion_variants";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen p-2 md:p-4 bg-white">
      {/* Main Rounded Box */}
      <div className="relative w-full min-h-[95vh] flex flex-col justify-center lg:justify-end rounded-3xl overflow-hidden shadow-sm">

        {/* Background Image */}
        <div className="absolute inset-0 rounded-b-3xl">
          <motion.div 
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image
              src="/stock/loc-2.jpeg"
              alt="LifePath Dental Care"
              fill
              sizes="100vw"
              className="object-cover"
              priority
              loading="eager"
            />
          </motion.div>
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-black/30"></div>
        </div>

        {/* Global Navbar - Inside the rounded box for that 'embedded' look */}
        <Navbar />

        {/* Hero Content */}
        <div className="relative h-auto flex flex-col justify-center text-white z-10 pt-48 lg:pt-0">
          <div className="h-full w-full max-w-[1800px] mx-auto pr-6 md:pr-0 pl-6 md:pl-12 flex flex-col lg:flex-row justify-between lg:items-end gap-12 lg:gap-12 pb-16 lg:pb-0">

            {/* Left Main Content */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="w-full lg:max-w-4xl pb-16 lg:pb-24"
            >
              <motion.h1 
                variants={fadeInUp}
                className="text-6xl md:text-7xl lg:text-[100px] font-bold leading-tight md:leading-none tracking-tight mb-6 md:mb-8"
              >
                Elemats<br />
                <span className="flex items-center gap-6">Specialist Hospital</span>
              </motion.h1>

              <motion.p 
                variants={fadeInUp}
                className="text-xl md:text-2xl text-white/90 max-w-2xl font-light leading-relaxed mb-8 md:mb-10"
              >
                At Elemats Specialist Hospital, our main goal is to make Couples a Family. We run Infertility Programmes and make your worries fade out.
              </motion.p>

              <motion.div variants={fadeInUp}>
                <button className="flex items-center gap-3 bg-white text-black px-6 py-3.5 md:px-10 md:py-5 rounded-full text-xl font-normal hover:bg-zinc-100 transition-all shadow-2xl group/btn">
                  Book Appointment
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover/btn:translate-x-2 transition-transform duration-300" />
                </button>
              </motion.div>
            </motion.div>

            {/* Right: Refill Medication Card - Compressed for Mobile */}
            <motion.div 
              variants={slideInRight}
              initial="hidden"
              animate="visible"
              custom={0.5}
              className="hidden lg:block cursor-pointer mr-2 md:mr-4 mb-2 md:mb-4 max-w-[290px] bg-white/95 backdrop-blur-md rounded-[16px] p-2 sm:p-4 text-slate-900 shadow-2xl border border-white/20 transform hover:-translate-y-2 transition-all duration-500"
            >
              <div className="relative h-28 sm:h-40 rounded-[16px] overflow-hidden mb-2 sm:mb-4">
                <Image
                  src="/stock/fac-2.jpeg"
                  alt="Refill Medication"
                  fill
                  sizes="(max-width: 768px) 100vw, 340px"
                  className="object-cover"
                />
              </div>
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-xl md:text-2xl font-normal text-slate-800 tracking-tight leading-tight mb-1">Refill Medication</h3>
                <p className="text-md text-slate-500 font-light leading-tight mb-6">
                  Easily request refills for your prescriptions online and pick them up at your convenience.
                </p>
                <div className="flex justify-start">
                  <button className="flex items-center gap-2 bg-black text-white px-8 py-3.5 rounded-full text-sm font-normal hover:bg-zinc-800 transition-all shadow-lg group">
                    Request Refill
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
