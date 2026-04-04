"use client"

import { useState } from "react";
import Link from "next/link";
import { OPEN_ROLES } from "@/constants/constants";
import { ArrowRight } from "lucide-react";

const CareerOpenRoles = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(OPEN_ROLES.map(role => role.category))];

  const filteredRoles = activeCategory === "All" 
    ? OPEN_ROLES 
    : OPEN_ROLES.filter(role => role.category === activeCategory);

  const getTagColor = (category) => {
    switch (category.toLowerCase()) {
      case 'full-time': return 'bg-emerald-50 text-emerald-700';
      case 'internship': return 'bg-indigo-50 text-indigo-700';
      case 'part-time': return 'bg-amber-50 text-amber-700';
      default: return 'bg-slate-50 text-slate-700';
    }
  };

  return (
    <section className="w-full section-padding bg-white ">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Column 1: Header & Filter */}
          <div className="lg:col-span-1">
            <h2 className="text-4xl md:text-5xl font-normal text-slate-900 leading-[1.1] tracking-tight">
              Ready to Join Us?
            </h2>
            
            <div className="space-y-6 mt-12">
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`py-2.5 px-6 border rounded-full text-sm font-medium transition-all duration-300 ${
                      activeCategory === category
                        ? "bg-slate-900 text-white border-slate-900 shadow-md"
                        : "bg-white text-slate-600 border-slate-200 hover:border-slate-900 hover:text-slate-900"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2 & 3: Description & Roles Grid */}
          <div className="lg:col-span-2 flex flex-col gap-12">
            <div>
              <p className="capitalize text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
                Now that you know what we stand for, why not take the next step? Join a passionate team driving Gambia’s digital future with smart, reliable tech solutions. Grow with us, make a difference, and be part of something bigger.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredRoles.map((role) => (
                <div key={role.id} className="group bg-slate-50 rounded-4xl p-8 border border-transparent hover:border-primary/20 transition-all duration-500">
                  <div className="flex justify-between items-start mb-6">
                    <span className={`px-4 py-1.5 ${getTagColor(role.category)} text-[10px] font-medium rounded-full uppercase tracking-widest`}>
                      {role.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-normal mb-4 text-slate-900 group-hover:text-primary transition-colors">
                    {role.title}
                  </h3>
                  <p className="text-slate-500 mb-8 font-light leading-relaxed text-sm">
                    {role.description}
                  </p>
                  <Link 
                    href={`/careers/${role.id}`}
                    className="flex items-center gap-2 bg-black text-white px-8 py-3.5 rounded-full text-sm font-normal hover:bg-primary transition-all shadow-lg group w-fit"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform inline-block ml-2" />
                  </Link>
                </div>
              ))}
              
              {filteredRoles.length === 0 && (
                <div className="col-span-2 py-20 text-center">
                  <p className="text-slate-400 italic">No open roles in this category at the moment.</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CareerOpenRoles;
