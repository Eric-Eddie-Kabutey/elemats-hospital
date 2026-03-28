"use client";

import { ArrowRight } from "lucide-react";

const DontDelay = () => {

    return (
        <section id="dont-delay" className="relative section-padding p-2 md:p-4 bg-white">
            <div className="bg-blue-700 w-full rounded-3xl mx-auto py-32 px-6 md:px-12 overflow-hidden relative">

                {/* Large blurred orbs - right side */}
                <div className="pointer-events-none absolute right-[-60px] top-[-60px] w-[500px] h-[500px] rounded-full bg-blue-500/60 blur-3xl" />
                <div className="pointer-events-none absolute right-[100px] bottom-[-120px] w-[380px] h-[380px] rounded-full bg-indigo-500/50 blur-3xl" />
                <div className="pointer-events-none absolute right-[300px] top-[20px] w-[220px] h-[220px] rounded-full bg-sky-300/40 blur-2xl" />

                {/* Subtle light accent left bleeding */}
                <div className="pointer-events-none absolute left-[-100px] bottom-[-80px] w-[280px] h-[280px] rounded-full bg-blue-400/20 blur-3xl" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <p className="text-blue-200 uppercase tracking-widest text-xs font-semibold mb-6">
                        Your Health, Your Priority
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white capitalize tracking-tight leading-tight max-w-2xl mb-10">
                        Don&apos;t Delay, Care for you and those you love
                    </h2>
                    <button className="flex items-center gap-3 bg-white text-blue-800 px-6 py-3.5 md:px-10 md:py-5 rounded-full text-sm md:text-lg font-semibold transition-all shadow-2xl hover:scale-105 hover:bg-blue-50 active:scale-95 group/btn">
                        Book An Appointment
                        <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default DontDelay;
