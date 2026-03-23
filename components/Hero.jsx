import { HERO_CONTENT } from "@/constants/constants";
import Image from "next/image";
import Navbar from "./Navbar";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen p-2 md:p-4 bg-gray-50">
      {/* Main Rounded Box */}
      <div className="relative w-full h-full min-h-[80vh] md:h-[94vh] rounded-3xl overflow-hidden group shadow-sm">
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="LifePath Dental Care"
            fill
            sizes="100vw"
            className="object-cover scale-105 group-hover:scale-110 transition-transform duration-2000"
            priority
            loading="eager"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/20 to-black/10"></div>
        </div>

        {/* Global Navbar - Inside the rounded box for that 'embedded' look */}
        <Navbar />

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-end px-6 md:px-16 pb-12 md:pb-20 text-white z-10">
          <div className="max-w-4xl space-y-6 md:space-y-10">
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[100px] font-bold leading-tight md:leading-none tracking-tight">
              Seamless <br />
              <span className="flex items-center gap-6">Dental Care</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-white/90 max-w-2xl font-light leading-relaxed">
              Whether it's a routine checkup or a major dental emergency, <br className="hidden md:block" />
              our experienced professionals are just a call away
            </p>

            <div>
              <button className="flex items-center gap-3 bg-white text-black px-8 py-4 md:px-10 md:py-5 rounded-full text-lg md:text-xl font-normal hover:bg-zinc-100 transition-all shadow-2xl hover:scale-105 active:scale-95 group/btn">
                Book Appointment
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover/btn:translate-x-2 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
