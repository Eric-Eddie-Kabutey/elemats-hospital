import { HERO_CONTENT } from "@/constants/constants";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-12 px-6 md:px-12 lg:px-20">
      {/* Main Rounded Container */}
      <div className="relative w-full aspect-[16/10] md:aspect-[21/9] rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl group">
        {/* Background Image */}
        <Image
          src={HERO_CONTENT.image}
          alt="Modern Dental Care"
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          priority
        />
        
        {/* Overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent"></div>

        {/* Hero Content */}
        <div className="absolute inset-y-0 left-0 w-full md:w-3/5 flex flex-col justify-center px-12 md:px-20 text-white z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 drop-shadow-sm">
            {HERO_CONTENT.title.split(' ').map((word, i) => (
              <span key={i} className={word.toLowerCase() === 'dental' ? 'inline-flex items-center gap-2' : ''}>
                {word}{' '}
                {word.toLowerCase() === 'dental' && (
                  <span className="inline-block w-8 h-8 bg-white/20 backdrop-blur-md rounded-full p-1.5 translate-y-1">
                    🦷
                  </span>
                )}
              </span>
            ))}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-lg mb-8 font-light leading-relaxed">
            {HERO_CONTENT.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="btn-primary w-full sm:w-auto px-10 py-4 text-lg">
              {HERO_CONTENT.ctaText} <span className="text-2xl">→</span>
            </button>
          </div>
        </div>

        {/* Floating Info Card */}
        <div className="absolute bottom-12 right-12 hidden lg:flex items-center gap-4 bg-white/90 backdrop-blur-md p-4 rounded-3xl shadow-xl border border-white/20 animate-bounce-slow">
           <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-inner">
              <Image 
                src={HERO_CONTENT.floatingCard.image} 
                alt="Satisfaction" 
                fill 
                className="object-cover"
              />
           </div>
           <div>
              <p className="text-2xl font-bold text-slate-900 leading-tight">
                {HERO_CONTENT.floatingCard.title}
              </p>
              <p className="text-xs text-slate-500 max-w-[120px]">
                {HERO_CONTENT.floatingCard.description}
              </p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
