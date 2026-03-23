import { CARE_FOR_ITEMS } from "@/constants/constants";
import Image from "next/image";

const CareFor = () => {
  return (
    <section id="care" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl mb-4 leading-tight">
              Get Specialized Care For <br className="hidden md:block" />
              Your Family’s Smile
            </h2>
            <p className="text-slate-500 text-lg">
              We provide a wide range of dental services to ensure your teeth 
              and gums stay healthy and beautiful.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARE_FOR_ITEMS.map((item, index) => (
            <div 
              key={index} 
              className="group relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-lg cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-white/80 line-clamp-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {item.description}
                </p>
                <div className="mt-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <span className="text-lg">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareFor;
