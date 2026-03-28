import Image from "next/image";
import { ArrowRight } from "lucide-react";

const CareFor = () => {
  return (
    <section id="care" className="relative py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Responsive Grid - 1 col mobile, 2 col tablet (md), 3 col desktop (lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">

          {/* 1. Header Column (Centered at top for mobile/tablet, middle for desktop) */}
          <div className="order-first md:col-span-2 lg:col-span-1 lg:order-2 flex flex-col md:flex-row lg:flex-col gap-12">
            {/* Header Content */}
            <div className="text-center space-y-6 md:space-y-8">
              <div className="flex items-center justify-center mb-4">
                <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Who we are</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-normal text-slate-800 tracking-tight leading-tight">
                Get care today for a variety of needs
              </h2>

              <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed">
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
                src="/careFor/cramps.jpg"
                alt="Dental Care Center"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-95"></div>
            </div>
          </div>

          {/* 2. Left Imagery Block */}
          <div className="order-2 lg:order-1 flex flex-col gap-8 lg:pt-32">
            <div className="aspect-4/5 md:aspect-3/4 rounded-2xl overflow-hidden shadow-sm relative w-full">
              <Image
                src="/careFor/headache.jpg"
                alt="Dental Care Left"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-95"></div>
            </div>

            {/* Secondary Stat - Visible on Tablet/Mobile to fill gap */}
            <div className=" flex flex-col text-center">
              <span className="text-4xl md:text-5xl font-normal text-slate-800 tracking-tight leading-tight capitalize">service quality</span>
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] font-sans">Dedicated to your well-being</span>
            </div>
          </div>

          {/* 3. Right Imagery & Main Stats */}
          <div className="order-3 lg:order-3 flex flex-col gap-8">
            <div className="aspect-4/5 md:aspect-3/4 rounded-2xl overflow-hidden shadow-sm relative w-full">
              <Image
                src="/careFor/nausea.jpg"
                alt="Dental Care Right"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-95"></div>
            </div>

            {/* Stats block - Aligned with visuals */}
            <div className="flex flex-col justify-end items-end space-y-2 text-right px-2 border-r border-neutral-200 pr-6 ">
              <div className="space-y-1">
                <p className="text-4xl md:text-5xl font-normal text-slate-800 tracking-tight leading-tight">98%</p>
                <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed uppercase">
                  Client satisfaction rate
                </p>
              </div>
              <p className="hidden md:block text-slate-500 leading-relaxed font-light text-base md:text-[15px] lg:text-base px-2 max-w-[260px]">
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