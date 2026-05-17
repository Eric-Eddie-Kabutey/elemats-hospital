"use client"

import { useState } from "react";
import Link from "next/link";
import { OPEN_ROLES } from "@/constants/constants";
import { ArrowRight } from "lucide-react";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion_variants";

const CareerOpenRoles = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(OPEN_ROLES.map(role => role.category))];

  const filteredRoles = activeCategory === "All"
    ? OPEN_ROLES
    : OPEN_ROLES.filter(role => role.category === activeCategory);

  const getTagColor = (category) => {
    switch (category.toLowerCase()) {
      case 'full-time': return 'bg-emerald-50/50 text-emerald-700';
      case 'internship': return 'bg-indigo-50/50 text-indigo-700';
      case 'part-time': return 'bg-cyan-50/50 text-cyan-700';
      default: return 'bg-slate-50/50 text-slate-700';
    }
  };

  return (
    <section className="w-full section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Column 1: Header & Filter */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="lg:col-span-1"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-normal text-slate-900 leading-[1.1] tracking-tight">
              Ready to Join Us?
            </motion.h2>

            <div className="space-y-6 mt-12">
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <motion.button
                    variants={fadeInUp}
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-8 py-3 rounded-full text-sm font-normal transition-all duration-300 bg-primary/5 ${activeCategory === category
                        ? "bg-primary/90 hover:bg-primary text-white shadow-md"
                        : "text-primary hover:bg-primary/10"
                      }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Column 2 & 3: Description & Roles Grid */}
          <div className="lg:col-span-2 flex flex-col gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <p className="hidden sm:block capitalize text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
                Now that you know what we stand for, why not take the next step? Join a passionate team driving Gambia’s digital future with smart, reliable tech solutions. Grow with us, make a difference, and be part of something bigger.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {filteredRoles.map((role) => (
                <motion.div 
                  key={role.id} 
                  variants={fadeInUp}
                  className="group flex flex-col justify-between bg-slate-50 rounded-xl p-8 transition-all duration-500"
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <span className={`px-4 py-1.5 ${getTagColor(role.category)} text-[12px] font-medium rounded-full uppercase tracking-widest`}>
                        {role.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-normal mb-4 text-slate-900 transition-colors">
                      {role.title}
                    </h3>
                    <p className="text-slate-500 mb-8 font-light leading-relaxed text-sm">
                      {role.description}
                    </p>
                  </div>
                  <Link
                    href={`/careers/${role.id}`}
                    className="flex items-center gap-2 bg-primary/90 text-white px-8 py-3.5 rounded-full text-sm font-normal hover:bg-primary transition-all shadow-lg group w-fit"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform inline-block ml-2" />
                  </Link>
                </motion.div>
              ))}

              {filteredRoles.length === 0 && (
                <div className="col-span-2 py-20 text-center">
                  <p className="text-slate-400 italic">No open roles in this category at the moment.</p>
                </div>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CareerOpenRoles;
