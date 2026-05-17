import { useState, useEffect } from "react";
import Link from "next/link";
import { SERVICES_TABS, SERVICE_CARDS } from "@/constants/constants";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion_variants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const ServiceCard = ({ service }) => (
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="group relative aspect-square overflow-hidden bg-slate-100 cursor-pointer rounded-xl w-full"
  >
    <Link href={`/services/${service.id}`} className="block w-full h-full">
      {/* Image Container with matching rounding */}
      <div className="w-full h-full overflow-hidden rounded-xl">
        <Image
          src={service.image}
          alt={service.label}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-95"></div>

      {/* Top-right Arrow Icon */}
      <div className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 transition-all duration-500 group-hover:bg-white group-hover:scale-110 group-hover:-rotate-45">
        <ArrowUpRight className="w-5 h-5 text-white group-hover:text-primary transition-colors" />
      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-6 left-6 right-6 text-left">
        <h3 className="text-xl md:text-2xl font-normal text-white tracking-tight leading-tight">
          {service.label}
        </h3>
      </div>
    </Link>
  </motion.div>
);

const Services = () => {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section id="services" className="relative section-padding bg-white pt-12 pb-24">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-left"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-normal text-slate-800 tracking-tight leading-tight">
              Our Specialist Services
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-primary text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 group shadow-sm "
            >
              See All
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Desktop Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {SERVICES_TABS.slice(0, 4).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>

        {/* Mobile Carousel */}
        <div className="block sm:hidden">
          <Carousel
            setApi={setApi}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {SERVICES_TABS.slice(0, 4).map((service) => (
                <CarouselItem key={service.id} className="pl-4 basis-full">
                  <ServiceCard service={service} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  current === i ? "w-8 bg-primary" : "w-2 bg-slate-200"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
