import { TESTIMONIALS } from "@/constants/constants";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="w-full mt-12 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal text-slate-800 tracking-tight leading-tight">Patient Transformations</h2>
          <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed">
            See what our patients say about their experience at Elemats Specialist Hospital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div 
              key={index} 
              className="premium-card p-10 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-500"
            >
              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-8 text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
                <p className="text-lg text-slate-700 italic leading-relaxed mb-8">
                  &quot;{testimonial.feedback}&quot;
                </p>
              </div>
              
              <div className="flex items-center gap-4 pt-0 border-t border-neutral-50">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gray-300">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-xs text-slate-500 font-medium capitalize tracking-wider">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
