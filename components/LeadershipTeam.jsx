"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion_variants";
import { User } from "lucide-react";

export default function LeadershipTeam() {
  const [activeTab, setActiveTab] = useState("all");

  const teamData = {
    all: [
      {
        name: "Prof Matthew Anyanwu",
        role: "CEO",
        image: "/staff33.jpg"
      },
      {
        name: "Awa Bah",
        role: "Matron",
        image: "/staff2.jpg"
      },
      {
        name: "Babou Jatta",
        role: "Head of Pharmacy",
        image: "/staff11.jpg"
      },
      {
        name: "Isatou Joof",
        role: "Head of Finance",
        image: "/staff4.jpg"
      },
      {
        name: "Fatou Dibba",
        role: "Head of Domestics"
      }
    ]
  };

  const currentTeam = teamData[activeTab];

  return (
    <section id="team" className="section-padding bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header & Tabs */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16"
        >
          <div className="max-w-3xl space-y-6">
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl font-normal text-slate-900 tracking-tight leading-[1.1]">
              Leadership & Executive Management
            </motion.h2>
            <motion.p variants={fadeInUp} className="hidden md:block text-lg md:text-xl text-slate-500 font-light leading-relaxed">
              Meet the experts behind our clinical success—a diverse team of medical professionals dedicated to delivering the best healthcare for our patients.
            </motion.p>
          </div>
        </motion.div>

        {/* Team Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {currentTeam.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-xl overflow-hidden shadow-xs transition-all duration-500 group border border-slate-100"
            >
              {/* Image Container */}
              <div className="relative aspect-4/4 bg-slate-200 w-full overflow-hidden flex items-center justify-center">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 text-slate-300 group-hover:bg-slate-200 transition-colors duration-500">
                    <User size={120} strokeWidth={1} />
                  </div>
                )}
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/50 to-primary/10 transition-opacity duration-500" />
              </div>

              {/* Text Info */}
              <div className="p-8 bg-primary">
                <h3 className="text-xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-white line-clamp-1">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
