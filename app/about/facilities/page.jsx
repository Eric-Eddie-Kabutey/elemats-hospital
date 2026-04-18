import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InnerPageHero from "@/components/InnerPageHero";
import Image from "next/image";
import { LOCATIONS } from "@/constants/constants";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const facilities = [
  {
    title: "Fertility & IVF Center",
    description: "Our world-class fertility clinic features state-of-the-art embryology labs and comfortable treatment suites.",
    image: "/stock/fac-8.jpeg"
  },
  {
    title: "Modern Operating Theatres",
    description: "Fully equipped surgical suites designed for both major and minimally invasive procedures with advanced monitoring systems.",
    image: "/stock/sur-1.jpeg"
  },
  {
    title: "Maternity & Delivery Suites",
    description: "Private, serene delivery rooms designed to provide a safe and comfortable environment for new mothers and their babies.",
    image: "/stock/fac-3.jpeg"
  },
  {
    title: "Diagnostics & Imaging Hub",
    description: "High-resolution radio-diagnostics and fully automated laboratory services for rapid and accurate testing.",
    image: "/stock/fac-5.jpeg"
  },
  {
    title: "Intensive Care Unit (ICU)",
    description: "Specialized unit with 24/7 dedicated nursing and life-support systems for critically ill patients.",
    image: "/stock/fac-4.jpeg"
  },
  // {
  //   title: "Emergency & Trauma Center",
  //   description: "Our rapid-response emergency unit is equipped to handle everything from minor injuries to complex medical crises.",
  //   image: "/stock/fac-3.jpeg"
  // }
];

export default function FacilitiesPage() {
  return (
    <main>
      <Navbar />
      <InnerPageHero
        title="Our Facilities"
        description="Explore the advanced medical infrastructure and healing environments we've built to ensure your comfort and safety."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="space-y-32">

            {/* Intro Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl capitalize md:text-5xl font-normal text-slate-800 tracking-tight leading-tight">
                  State of the art Healing Environments
                </h2>
                <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed">
                  Every corner of Elemats Specialist Hospital has been thoughtfully designed to foster healing and provide the highest level of medical safety. We invest continuously in the latest medical technologies and infrastructure.
                </p>
                <div className="flex gap-12">
                  <div className="space-y-1">
                    <p className="text-3xl font-bold text-primary">24/7</p>
                    <p className="text-sm font-normal text-slate-400 uppercase tracking-widest">Medical Support</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-3xl font-bold text-primary">100+</p>
                    <p className="text-sm font-normal text-slate-400 uppercase tracking-widest">Modern Beds</p>
                  </div>
                </div>
              </div>
              <div className="relative h-full rounded-3xl overflow-hidden shadow-md">
                <Image
                  src="/stock/fac-1.jpeg"
                  alt="Elemats Facility Overview"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            {/* Facilities Grid */}
            <div>
              <div className="mb-16 text-center">
                <h3 className="text-4xl md:text-5xl font-normal text-slate-800 tracking-tight leading-tight">Specialized Units</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {facilities.map((fac, idx) => (
                  <div key={fac.title} className={`group cursor-pointer flex flex-col h-full ${idx === 0 ? "md:col-span-2 lg:col-span-2 lg:row-span-2" : ""}`}>
                    <div className={`relative w-full rounded-3xl overflow-hidden mb-6 border border-slate-100 ${idx === 0 ? "aspect-video lg:aspect-auto lg:flex-1 lg:min-h-[400px]" : "aspect-4/3"}`}>
                      <Image
                        src={fac.image}
                        alt={fac.title}
                        fill
                        sizes={idx === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 25vw"}
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="">
                      <h4 className={`${idx === 0 ? "text-2xl lg:text-3xl" : "text-xl"} font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors`}>{fac.title}</h4>
                      <p className={`${idx === 0 ? "text-base lg:text-lg" : "text-slate-500"} font-light leading-relaxed`}>{fac.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Locations Section */}
            <div id="locations" className="">
              <div className="mb-16 text-center max-w-2xl mx-auto space-y-4">
                <h2 className="text-4xl md:text-5xl font-normal text-slate-800 tracking-tight leading-tight">Where to Find Us</h2>
                <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed">
                  We are conveniently located across the region to provide you with the best healthcare services.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {LOCATIONS.map((loc) => (
                  <div key={loc.id} className="overflow-hidden transition-all duration-700 group flex flex-col h-full">

                    {/* Location Image */}
                    <div className="relative h-72 md:h-80 overflow-hidden rounded-3xl mb-6">
                      <Image
                        src={loc.image}
                        alt={loc.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-6 left-8">
                        <div className="flex items-center gap-3 group/loc">
                          <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 hover:bg-white/40 transition-all duration-300 cursor-pointer"
                          >
                            <MapPin className="text-white" />
                          </a>
                          <span className="opacity-0 group-hover/loc:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover/loc:translate-x-0 bg-white/10 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-2xl border border-white/20 pointer-events-none whitespace-nowrap">
                            find location
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Location Content */}
                    <div className="flex flex-col flex-1 space-y-8">
                      <div className="space-y-4 flex-1">
                        <h3 className="text-2xl font-bold text-slate-900 leading-tight group-hover:text-primary transition-colors">
                          {loc.name}
                        </h3>

                        <div className="space-y-4 pt-2">
                          <div className="flex items-start gap-4 text-slate-500 font-light">
                            <MapPin size={20} className="text-primary shrink-0 mt-1" />
                            <p>{loc.address}</p>
                          </div>
                          <div className="flex items-center gap-4 text-slate-500 font-light">
                            <Phone size={20} className="text-primary shrink-0" />
                            <a href={`tel:${loc.phone}`} className="hover:text-primary transition-colors">{loc.phone}</a>
                          </div>
                          <div className="flex items-center gap-4 text-slate-500 font-light">
                            <Mail size={20} className="text-primary shrink-0" />
                            <a href={`mailto:${loc.email}`} className="hover:text-primary transition-colors">{loc.email}</a>
                          </div>
                          <div className="flex items-center gap-4 text-slate-500 font-light">
                            <Clock size={20} className="text-primary shrink-0" />
                            <p className="font-medium text-slate-800">{loc.hours}</p>
                          </div>
                        </div>
                      </div>


                      {/* <button className="bg-slate-50 border border-slate-100 py-5 rounded-2xl font-bold text-slate-700 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm hover:shadow-primary/25">
                        Get Directions
                      </button> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
