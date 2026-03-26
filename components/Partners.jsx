import { PARTNERS } from "@/constants/constants";
import Image from "next/image";

const Partners = () => {
  return (
    <section className="bg-transparent p-6 md:p-12 overflow-hidden">
      <div className="max-w-7xl mx-auto p-6 md:p-12 bg-primary rounded-3xl">
        <div className="text-center mb-12">
          <p className="text-white/80 text-xs font-bold uppercase tracking-[0.2em] font-sans mb-4">Our Partners</p>
          <h2 className="text-4xl font-bold text-white tracking-tight">Trusted by Leading Organizations</h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-12  opacity-60">
          {PARTNERS.map((partner, index) => (
            <div
              key={index}
              className="relative w-32 h-16 md:w-40 md:h-20 transition-all duration-500 cursor-default opacity-80 hover:opacity-100"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
