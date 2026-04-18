import React from 'react';
import Image from 'next/image';
import { Mail, ArrowRight } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="section-padding py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="relative bg-[#0b1220] rounded-[2.5rem] overflow-hidden group border border-slate-900 shadow-2xl">
          
          {/* Very Subtle Background Glow */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] -translate-y-1/2 -translate-x-1/4" />
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center">
            
            {/* Left Content */}
            <div className="p-8 md:p-12 lg:p-16 space-y-10 z-10">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-3xl lg:text-5xl font-normal text-white tracking-tight leading-tight">
                  Join the Future of <br />
                  <span className="text-primary italic">Healthcare</span> Excellence
                </h2>
                <p className="text-base md:text-lg text-slate-400 font-light max-w-sm leading-relaxed">
                  Stay updated with medical innovations, wellness tips, and hospital news from Elemats Specialist Hospital.
                </p>
              </div>

              {/* Form */}
              <div className="space-y-4">
                <form className="flex flex-col sm:flex-row gap-3 max-w-lg">
                  <div className="relative flex-1 group/input">
                    <div className="absolute left-5 top-1/2 -translate-y-1/2">
                      <Mail className="w-4 h-4 text-slate-500 group-focus-within/input:text-primary transition-colors" />
                    </div>
                    <input
                      type="email"
                      placeholder="Email address"
                      className="w-full bg-slate-900/50 border border-slate-800 text-white pl-12 pr-6 py-4 rounded-xl outline-none focus:border-primary/50 transition-all font-light text-sm"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-white text-slate-950 px-8 py-4 rounded-xl font-bold hover:bg-primary hover:text-white transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 group/btn text-sm whitespace-nowrap"
                  >
                    Subscribe Now
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </form>
                <p className="text-[11px] uppercase tracking-widest text-slate-600 font-medium">
                  SECURE & PRIVACY-FIRST UPDATES
                </p>
              </div>
            </div>

            {/* Right Mockup Branded */}
            <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center bg-[#0b1220]">
              <div className="relative w-full h-full scale-125 lg:scale-150 lg:translate-x-12 translate-y-4">
                <Image
                  src="/images/mockup.jpg"
                  alt="Elemats Specialist Hospital Mockup"
                  fill
                  className="object-contain lg:object-right transition-transform duration-1000 group-hover:scale-[1.05]"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
