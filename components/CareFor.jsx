import Image from "next/image";
import { ArrowRight } from "lucide-react";

const CareFor = () => {
  return (
    <section id="care" className="relative py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Responsive Grid - 1 col mobile, 2 col tablet (md), 3 col desktop (lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 items-start">

          {/* 1. Header Column (Centered at top for mobile/tablet, middle for desktop) */}
          <div className="order-first md:col-span-2 lg:col-span-1 lg:order-2 flex flex-col md:flex-row lg:flex-col gap-12">
            {/* Header Content */}
            <div className="text-center space-y-6 md:space-y-8">
              <div className="flex items-center justify-center gap-4">
                <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] font-sans">Who we are</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-normal text-[#0D0D0D] leading-[1.2] tracking-tight max-w-md mx-auto">
                A Simple Way to Save on Dental Care
              </h2>

              <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-sm mx-auto">
                Our team of skilled and experienced dental professionals strives to create a comfortable and welcoming environment for each and every patient.
              </p>

              <div className="flex justify-center">
                <button className="flex items-center gap-2 bg-black text-white px-8 py-3.5 rounded-full text-sm font-normal hover:bg-zinc-800 transition-all shadow-lg group">
                  Book Appointment
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Feature Center Image - Visible on Tablet/Mobile below text, part of stack on Desktop */}
            <div className="aspect-video rounded-2xl overflow-hidden shadow-sm relative w-full lg:order-last">
              <Image
                src="/images/hero.jpg"
                alt="Dental Care Center"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* 2. Left Imagery Block */}
          <div className="order-2 lg:order-1 flex flex-col gap-8 lg:pt-32">
            <div className="aspect-4/5 md:aspect-3/4 rounded-2xl overflow-hidden shadow-sm relative w-full">
              <Image
                src="/images/hero.jpg"
                alt="Dental Care Left"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Secondary Stat - Visible on Tablet/Mobile to fill gap */}
            <div className=" flex flex-col text-center">
               <span className="text-4xl font-normal text-black capitalize">service quality</span>
               <span className="text-[10px] uppercase font-bold tracking-widest text-primary">Dedicated to your well-being</span>
            </div>
          </div>

          {/* 3. Right Imagery & Main Stats */}
          <div className="order-3 lg:order-3 flex flex-col gap-8">
            <div className="aspect-4/5 md:aspect-3/4 rounded-2xl overflow-hidden shadow-sm relative w-full">
              <Image
                src="/images/hero.jpg"
                alt="Dental Care Right"
                fill
                className="object-cover"
              />
            </div>

            {/* Stats block - Aligned with visuals */}
            <div className="space-y-2 text-center md:text-left px-2 border-l border-neutral-200 pl-6 ">
              <div className="space-y-1">
                 <p className="text-4xl lg:text-5xl font-normal text-black tracking-tighter">98%</p>
                 <p className="text-slate-500 text-[10px] md:text-xs leading-relaxed font-semibold tracking-[0.15em] uppercase">
                    Client satisfaction rate
                 </p>
              </div>
              <p className="hidden md:block text-slate-400 text-[11px] leading-relaxed max-w-[180px]">
                 Consistently recognized for medical excellence and professional care.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CareFor;
