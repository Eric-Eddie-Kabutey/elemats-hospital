"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion_variants";

const DontDelay = () => {

    return (
        <section id="dont-delay" className="relative section-padding bg-slate-50 overflow-hidden">
            <div className="xl:max-w-7xl w-full mx-auto rounded-3xl">
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-2"
                >
                    
                    {/* Left side: Content */}
                    <div className="flex flex-col justify-center items-start text-left ">
                        <div className="space-y-6 max-w-xl">
                            <motion.p variants={fadeInUp} className="text-primary capitalize tracking-widest text-[14px] font-normal">
                                Your Health, Our Priority
                            </motion.p>
                            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-normal text-slate-800 tracking-tight leading-tight">
                                Don&apos;t Delay, Care for you and those you love
                            </motion.h2>
                        </div>
                    </div>

                    {/* Right side*/}
                    <div className="relative h-full">
                        <div className="flex items-center justify-end">
                            <div className="text-left md:text-center mt-6 md:mt-0 md:max-w-xl">
                                <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-500 font-light leading-relaxed mb-8">
                                    Your health is our priority. Schedule an appointment with our team of dedicated specialists today.
                                </motion.p>
                                <motion.div variants={fadeInUp}>
                                    <Link href="/appointment">
                                        <button className="capitalize inline-flex items-center gap-2 bg-primary/80 text-white px-8 py-3.5 rounded-full text-sm font-normal hover:bg-primary transition-all shadow-lg group">
                                            Book an Appointment
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default DontDelay;
