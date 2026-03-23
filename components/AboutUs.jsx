import { ABOUT_US } from "@/constants/constants";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section id="about" className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Image Composition */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative aspect-square md:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl z-10 animate-bounce-slow">
            <Image
              src={ABOUT_US.images[0]}
              alt="Our Facility"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Overlapping secondary images */}
          <div className="absolute -bottom-12 -right-12 hidden md:block w-3/5 aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white z-20 hover:scale-105 transition-transform duration-500">
            <Image
              src={ABOUT_US.images[1]}
              alt="Treatment Room"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute -top-8 -left-8 hidden xl:block w-2/5 aspect-square rounded-[2rem] overflow-hidden shadow-xl border-4 border-white z-0 opacity-50">
            <Image
              src={ABOUT_US.images[2]}
              alt="Medical Staff"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <span className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-600 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            {ABOUT_US.subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            {ABOUT_US.title}
          </h2>
          <p className="text-slate-500 text-lg md:text-xl leading-relaxed mb-12">
            {ABOUT_US.description}
          </p>

          <div className="grid grid-cols-2 gap-12 pt-8 border-t border-neutral-100">
            <div>
              <p className="text-5xl font-bold text-slate-900 mb-2">98%</p>
              <p className="text-slate-500 text-sm">Patient Satisfaction Rate in 2024</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-slate-900 mb-2">15+</p>
              <p className="text-slate-500 text-sm">Years of Dental Excellence</p>
            </div>
          </div>

          <button className="btn-primary mt-12 px-10">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
