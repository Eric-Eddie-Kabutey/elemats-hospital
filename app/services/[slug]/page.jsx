"use client";

import { use } from "react";
import { SERVICE_CARDS } from "@/constants/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Clock, Shield, Star, Stethoscope, Sparkles, Activity, Camera, Zap, Leaf, ShieldCheck, Droplet, Anchor, Smile, Ruler, Layers, HeartPulse, Moon, Dna, Sun } from "lucide-react";
import Link from "next/link";

const ICON_MAP = {
  Sparkles, Activity, Stethoscope, Camera, Zap, Leaf, ShieldCheck, Droplet, 
  Anchor, Smile, Ruler, Layers, HeartPulse, Moon, Dna, Sun
};

export default function ServiceDetail({ params }) {
  const { slug } = use(params);
  
  // Find the service across all categories
  const allServices = [...SERVICE_CARDS.general, ...SERVICE_CARDS.specialized];
  const service = allServices.find(s => s.title.toLowerCase().replace(/\s+/g, '-') === slug);

  if (!service) {
    return <div>Service not found</div>;
  }

  const Icon = ICON_MAP[service.icon];

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back button */}
          <Link href="/services" className="inline-flex items-center gap-2 mb-12 text-slate-500 hover:text-emerald-500 transition-all group font-medium">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to All Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Content Side */}
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="w-20 h-20 bg-emerald-100 rounded-4xl flex items-center justify-center text-emerald-600 shadow-sm border border-emerald-200">
                  {Icon && <Icon className="w-10 h-10" />}
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1]">
                  {service.title}
                </h1>
                <p className="text-xl text-slate-500 leading-relaxed font-medium max-w-xl">
                  {service.description}
                </p>
              </div>

              {/* Quality Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <p className="font-bold text-sm text-slate-900">Efficient Care</p>
                  <p className="text-xs text-slate-400 font-medium">Streamlined clinical protocols for your convenience.</p>
                </div>
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400">
                    <Shield className="w-5 h-5" />
                  </div>
                  <p className="font-bold text-sm text-slate-900">Certified Experts</p>
                  <p className="text-xs text-slate-400 font-medium">Every procedure is performed by board-certified specialists.</p>
                </div>
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400">
                    <Star className="w-5 h-5" />
                  </div>
                  <p className="font-bold text-sm text-slate-900">Top-Rated</p>
                  <p className="text-xs text-slate-400 font-medium">A consistently five-star choice for medical excellence.</p>
                </div>
              </div>

              <div className="pt-8 border-t border-neutral-100">
                 <button className="bg-black text-white px-10 py-5 rounded-full text-lg font-normal hover:bg-emerald-600 transition-all shadow-xl hover:scale-[1.02] active:scale-95">
                    Consult an Expert
                 </button>
              </div>
            </div>

            {/* Visual Side */}
            <div className="relative group">
               <div className="aspect-4/5 bg-secondary rounded-4xl overflow-hidden relative shadow-2xl">
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute top-12 left-12 p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-4xl max-w-[240px] space-y-4">
                     <p className="text-white text-xs font-bold uppercase tracking-[0.2em] font-sans">Specialized Treatment</p>
                     <p className="text-white/80 text-sm leading-relaxed font-medium">
                        Focused on delivering aesthetic and functional medical success for every patient.
                     </p>
                  </div>
               </div>
               
               {/* Decorative Element */}
               <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-emerald-500 rounded-full blur-[100px] opacity-20 -z-10 group-hover:opacity-40 transition-opacity" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
