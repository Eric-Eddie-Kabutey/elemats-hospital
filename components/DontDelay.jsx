"use client";

import { ArrowRight } from "lucide-react";

const DontDelay = () => {

    return (
        <section id="dont-delay" className="relative section-padding p-4 md:p-8 bg-white">
            <div className="xl:max-w-7xl w-full mx-auto overflow-hidden rounded-3xl">
                <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
                    
                    {/* Left side: Content */}
                    <div className="p-12 md:p-16 lg:p-20 flex flex-col justify-center items-start text-left bg-slate-50">
                        <div className="space-y-6 max-w-md">
                            <p className="text-primary uppercase tracking-[0.2em] text-[10px] font-bold">
                                Your Health, Your Priority
                            </p>
                            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.2]">
                                Don&apos;t Delay, Care for you and those you love
                            </h2>
                            {/* <p className="text-slate-500 font-light text-lg">
                                Schedule a virtual or presential appointment with our specialists today.
                            </p> */}
                            <button className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-full font-bold hover:bg-primary/90 transition-all shadow-xl hover:-translate-y-1 active:scale-95">
                                Book An Appointment
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Right side: Image */}
                    <div className="relative h-[400px] md:h-auto">
                        <img 
                            src="/WhatWeOffer/PrimaryCare.jpg" 
                            alt="Appointment" 
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DontDelay;
