"use client";

import { use, Suspense } from "react";
import { SERVICE_CARDS } from "@/constants/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InnerPageHero from "@/components/InnerPageHero";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ArrowLeft, Clock, Shield, Star, Stethoscope, Sparkles, Activity, Camera, Zap, Leaf, ShieldCheck, Droplet, Anchor, Smile, Ruler, Layers, HeartPulse, Moon, Dna, Sun, Plus, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const ICON_MAP = {
   Sparkles, Activity, Stethoscope, Camera, Zap, Leaf, ShieldCheck, Droplet,
   Anchor, Smile, Ruler, Layers, HeartPulse, Moon, Dna, Sun
};

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, slideInRight } from "@/lib/motion_variants";

function ServiceDetailContent({ category, slug }) {
   const searchParams = useSearchParams();
   const serviceId = searchParams.get("id");

   const allServices = Object.values(SERVICE_CARDS).flat();
   const service = allServices.find(s =>
      (serviceId && s.title.toLowerCase().replace(/\s+/g, '-') === serviceId) ||
      (s.title.toLowerCase().replace(/\s+/g, '-') === slug)
   );

   if (!service) {
      return (
         <div className="min-h-screen flex items-center justify-center bg-white p-6">
            <div className="text-center space-y-6 max-w-sm">
               <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto text-slate-200">
                  <Stethoscope size={48} />
               </div>
               <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Service Not Found</h2>
               <p className="text-slate-500 font-medium leading-relaxed">We couldn&apos;t find the medical specialty you&apos;re looking for. It may have been moved or renamed.</p>
               <Link href="/services" className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-all">
                  Browse All Services
               </Link>
            </div>
         </div>
      );
   }

   const Icon = ICON_MAP[service.icon];

   // Categories are already in the URL
   const actualCategory = Object.keys(SERVICE_CARDS).find(key =>
      SERVICE_CARDS[key].some(s => s.title === service.title)
   ) || category;
   const relatedServices = SERVICE_CARDS[actualCategory]?.filter(s => s.title !== service.title).slice(0, 3) || [];

   return (
      <main className="bg-white min-h-screen overflow-hidden">
         <Navbar />
         <InnerPageHero
            title={service.title}
            description={service.description}
            backgroundImage={service.image}
         />

         <div className="w-full bg-white relative">
            <div className="max-w-7xl mx-auto py-16 px-6 md:px-12">

               <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                  {/* Left Column: Main Content (8 cols) */}
                  <div className="lg:col-span-8 space-y-24">

                     {/* About Section */}
                     <motion.section 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="space-y-8"
                     >
                        <motion.p variants={fadeInUp} className="text-primary capitalize tracking-widest text-[14px] font-normal">
                           Overview
                        </motion.p>
                        <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-normal text-slate-900 leading-[1.1] tracking-tight capitalize">
                           About this service.
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
                           Our {service.title} department is dedicated to providing high-precision medical solutions through a patient-first approach. We combine years of clinical expertise with the latest diagnostic technologies to ensure that every patient receives the best possible outcome.
                        </motion.p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                           <motion.div variants={fadeInUp} className="p-8 bg-slate-50 rounded-xl transition-colors group">
                              <h3 className="text-xl font-normal text-primary mb-4  transition-colors">Our Approach</h3>
                              <p className="text-slate-500 leading-relaxed font-light">We focus on minimally invasive techniques and personalized care pathways for enhanced recovery.</p>
                           </motion.div>
                           <motion.div variants={fadeInUp} className="p-8 bg-slate-50 rounded-xl transition-colors group">
                              <h3 className="text-xl font-normal text-primary mb-4 transition-colors">Expert Team</h3>
                              <p className="text-slate-500 leading-relaxed font-light">Lead by internationally trained consultants with deep roots in modern clinical practices.</p>
                           </motion.div>
                        </div>
                     </motion.section>

                     {/* The Journey Section */}
                     <motion.section 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="space-y-12"
                     >
                        <div className="space-y-4">
                           <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-normal text-slate-900 leading-[1.1] tracking-tight capitalize">The Care Journey</motion.h2>
                           <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light">Experience clinical excellence at every step of your procedure.</motion.p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                           {[
                              { step: "1", label: "Consultation", desc: "Detailed clinical assessment" },
                              { step: "2", label: "Diagnostics", desc: "High-precision 3D imaging" },
                              { step: "3", label: "Treatment", desc: "Expert medical execution" },
                              { step: "4", label: "Recovery", desc: "Post-op support & care" }
                           ].map((step, idx) => (
                              <motion.div 
                                 key={idx} 
                                 variants={fadeInUp}
                                 className="relative px-6 bg-primary/85 rounded-xl group"
                              >
                                 <div className="w-full flex justify-center items-center">
                                    <p className="block text-[12rem] font-black text-primary transition-colors mb-4">{step.step}</p>
                                 </div>
                                 <div className="rounded-3xl absolute inset-0 bg-linear-to-t from-primary/60 via-primary/50 to-primary/60"></div>
                                 <div className="rounded-3xl absolute inset-0 bg-linear-to-r from-primary/60 via-primary/50 to-primary/5"></div>
                                 <div className="flex flex-col gap-2 absolute bottom-2 -translate-y-1/2 z-100">
                                    <h3 className="text-2xl font-bold text-white transition-colors">{step.label}</h3>
                                    <p className="text-white leading-relaxed font-light">{step.desc}</p>
                                 </div>
                              </motion.div>
                           ))}
                        </div>
                     </motion.section>

                     {/* Quality Standards */}
                     <motion.section 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="flex flex-col gap-8" 
                     >
                        <motion.p variants={fadeInUp} className="text-primary capitalize tracking-widest text-[14px] font-normal">
                           Quality Standards 
                        </motion.p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                           <motion.div variants={fadeInUp} className="space-y-4 bg-slate-50 rounded-3xl p-8">
                              <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary">
                                 <Clock className="w-5 h-5" />
                              </div>
                              <h4 className="text-4xl md:text-5xl font-normal text-slate-900">Efficient Delivery</h4>
                              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">Minimizing wait times through smart digital scheduling systems.</p>
                           </motion.div>
                           <motion.div variants={fadeInUp} className="space-y-4 bg-slate-50 rounded-3xl p-8">
                              <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary">
                                 <ShieldCheck className="w-5 h-5" />
                              </div>
                              <h4 className="text-4xl md:text-5xl font-normal text-slate-900">Patient Safety</h4>
                              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">Adhering to international sterile protocols for all surgical areas.</p>
                           </motion.div>
                           <motion.div variants={fadeInUp} className="space-y-4 bg-slate-50 rounded-3xl p-8">
                              <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary">
                                 <Star className="w-5 h-5" />
                              </div>
                              <h4 className="text-4xl md:text-5xl font-normal text-slate-900">Global Standards</h4>
                              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">Using FDA/ISO approved medical equipment and supplies.</p>
                           </motion.div>
                        </div>
                     </motion.section>

                     {/* Redesigned Related Services Grid (Match Image) */}
                     {relatedServices.length > 0 && (
                        <motion.section 
                           initial="hidden"
                           whileInView="visible"
                           viewport={{ once: true }}
                           variants={staggerContainer}
                           className="pt-24 space-y-12"
                        >
                           <div className="space-y-4">
                              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-normal text-slate-900 leading-[1.1] tracking-tight capitalize">Services like this.</motion.h2>
                              <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light">Explore other related clinical specialties in our {category} department.</motion.p>
                           </div>

                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                              {relatedServices.map((rel, index) => (
                                 <motion.div
                                    key={rel.title}
                                    variants={fadeInUp}
                                 >
                                    <Link
                                       href={`/services/${actualCategory}/${rel.title.toLowerCase().replace(/\s+/g, '-')}`}
                                       className={`group relative aspect-square overflow-hidden block
                              ${index % 2 === 0
                                             ? "rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-xl rounded-bl-xl"
                                             : "rounded-tr-[4rem] rounded-bl-[4rem] rounded-tl-xl rounded-br-xl"
                                          }`}
                                    >
                                       {/* Background Image */}
                                       <Image
                                          src={rel.image}
                                          alt={rel.title}
                                          fill
                                          className="object-cover "
                                       />

                                       {/* Gradient Overlay */}
                                       <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-black/10 opacity-80" />

                                       {/* Top Arrow Icon */}
                                       <div className="absolute top-8 left-8 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary transition-all duration-300">
                                          <ArrowUpRight size={20} strokeWidth={2.5} />
                                       </div>

                                       {/* Bottom Title */}
                                       <div className="absolute bottom-8 left-8 right-8">
                                          <h3 className="text-2xl font-bold text-white tracking-tight leading-none">
                                             {rel.title}
                                          </h3>
                                       </div>
                                    </Link>
                                 </motion.div>
                              ))}
                           </div>
                        </motion.section>
                     )}
                  </div>

                  {/* Right Column: Sidebar (4 cols) */}
                  <aside className="lg:col-span-4 space-y-8">

                     {/* Contact/Booking Card */}
                     <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideInRight}
                        className="text-black space-y-8 overflow-hidden sticky top-32"
                     >
                        <div className="relative space-y-4">
                           <h3 className="text-4xl md:text-5xl font-normal text-primary leading-[1.1] tracking-tight">Ready to start your healing?</h3>
                           <p className="text-lg text-slate-500 leading-relaxed font-light">Book a session with one of our specialized consultants for a detailed clinical evaluation.</p>
                        </div>
                        <Link 
                           href="/appointment"
                           className="capitalize inline-flex items-center gap-2 bg-primary/80 text-white px-8 py-3.5 rounded-full text-sm font-normal hover:bg-primary transition-all group"
                        >
                           Book Consultant
                           <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                     </motion.div>

                  </aside>

               </div>
            </div>
         </div>

         <Footer />
      </main>
   );
}

export default function ServiceDetail({ params }) {
   const { category, slug } = use(params);
   return (
      <Suspense fallback={<div className="min-h-screen bg-white" />}>
         <ServiceDetailContent category={category} slug={slug} />
      </Suspense>
   );
}
