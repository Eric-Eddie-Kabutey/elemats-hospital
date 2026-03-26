import { HERO_CONTENT } from "@/constants/constants";
import Image from "next/image";
import Navbar from "./Navbar";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen p-2 md:p-4 bg-gray-50">
      {/* Main Rounded Box */}
      <div className="relative w-full h-auto min-h-screen md:h-[94vh] flex flex-col justify-center lg:justify-end rounded-b-3xl overflow-hidden shadow-sm">

        {/* Background Image */}
        <div className="absolute inset-0 rounded-b-3xl">
          <Image
            src="/images/hero.jpg"
            alt="LifePath Dental Care"
            fill
            sizes="100vw"
            className="object-cover scale-105 transition-transform duration-2000"
            priority
            loading="eager"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-black/30"></div>
        </div>

        {/* Global Navbar - Inside the rounded box for that 'embedded' look */}
        <Navbar />

        {/* Hero Content */}
        <div className="relative h-auto flex flex-col justify-center text-white z-10 pt-48 pb-20 lg:pt-0 lg:pb-24">
          <div className="h-full w-full max-w-[1800px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row justify-between lg:items-end gap-12 lg:gap-12">
            
            {/* Left Main Content */}
            <div className="w-full lg:max-w-4xl">
              <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[100px] font-bold leading-tight md:leading-none tracking-tight mb-6 md:mb-8">
                Seamless <br />
                <span className="flex items-center gap-6">Dental Care</span>
              </h1>

              <p className="text-base sm:text-lg md:text-2xl text-white/90 max-w-2xl font-light leading-relaxed mb-8 md:mb-10">
                Whether it's a routine checkup or a major dental emergency, <br className="hidden md:block" />
                our experienced professionals are just a call away
              </p>

              <div>
                <button className="flex items-center gap-3 bg-white text-black px-6 py-3.5 md:px-10 md:py-5 rounded-full text-sm md:text-xl font-normal hover:bg-zinc-100 transition-all shadow-2xl hover:scale-105 active:scale-95 group/btn">
                  Book Appointment
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover/btn:translate-x-2 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* Right: Refill Medication Card - Compressed for Mobile */}
            <div className="w-full lg:max-w-[340px] bg-white/95 backdrop-blur-md rounded-4xl p-4 sm:p-6 text-slate-900 shadow-2xl border border-white/20 transform hover:-translate-y-2 transition-all duration-500">
              <div className="relative h-28 sm:h-40 rounded-3xl overflow-hidden mb-4 sm:mb-6">
                <Image
                  src="/images/refill.jpg"
                  alt="Refill Medication"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-2xl font-bold tracking-tight">Refill Medication</h3>
                <p className="hidden lg:block text-sm text-slate-500 leading-relaxed font-medium">
                  Easily request refills for your prescriptions online and pick them up at your convenience.
                </p>
                <button className="w-full flex items-center justify-between bg-slate-900 text-white px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold hover:bg-slate-800 transition-all group/refill">
                  Request Refill
                  <ArrowRight className="w-4 h-4 group-hover/refill:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
