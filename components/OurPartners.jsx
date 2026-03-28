"use client";

import Image from "next/image";

export default function OurPartners() {
  const partners = [
    { name: "ChildFund Alliance", src: "/partners/CFA-Logo_RGB_hi-res.png" },
    { name: "IOM", src: "/partners/IOM.png" },
    { name: "NEA", src: "/partners/NEA.png" },
    { name: "The Gambia Red Cross", src: "/partners/Red_Cross.jpg" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Content */}
        <div className="max-w-3xl space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-normal text-slate-800 tracking-tight leading-tight">
            Our Partners & HMOs
          </h2>
          <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed">
            We&apos;re proud to collaborate with leading Health Management Organizations, international agencies, and corporate institutions that share our vision for medical excellence. These partnerships help us deliver extensive and accessible healthcare to communities across The Gambia and beyond.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="flex flex-wrap items-center gap-12 md:gap-16">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="relative w-32 h-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                fill
                sizes="(max-width: 768px) 128px, 160px"
                className="object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
