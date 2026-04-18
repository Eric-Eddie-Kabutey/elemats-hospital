"use client";

import { Lightbulb, ShieldCheck, Users } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion_variants";

export default function AboutDifference() {
  const differences = [
    {
      icon: <Lightbulb size={48} className="text-primary" strokeWidth={1.5} />,
      title: "Clinical Excellence",
      description: "We leverage advanced medical technology and clinical expertise to solve real health challenges. Finding better, faster, and smarter ways to enhance patient care and recovery."
    },
    {
      icon: <ShieldCheck size={48} className="text-primary" strokeWidth={1.5} />,
      title: "Integrity You Can Count On",
      description: "We believe in doing the right thing, always. That means being honest, accountable, and transparent in how we operate and deliver healthcare services."
    },
    {
      icon: <Users size={48} className="text-primary" strokeWidth={1.5} />,
      title: "Putting Patients First",
      description: "Our patients come first. We listen, adapt, and evolve—because true medical impact starts with understanding the unique individuals we serve and the challenges they face."
    }
  ];

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto space-y-4 mb-20"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-normal text-slate-800 tracking-tight leading-tight">
            The Elemats Difference
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-500 font-light leading-relaxed">
            At Elemats Specialist Hospital, our core values guide how we work, serve, and grow—with our patients and for our community.
          </motion.p>
        </motion.div>

        {/* Info Cards Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16"
        >
          {differences.map((diff, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp}
              className="flex flex-col items-center text-center space-y-6 group"
            >
              {/* Icon Container */}
              <div className="flex items-center justify-center p-2 transition-transform duration-500 group-hover:scale-110">
                {diff.icon}
              </div>

              {/* Text Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-normal text-slate-700 tracking-tight">
                  {diff.title}
                </h3>
                <p className="text-slate-500 leading-relaxed font-light text-base md:text-[15px] lg:text-base px-2">
                  {diff.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
