"use client"

import Image from "next/image";
import { WORK_CULTURE } from "@/constants/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import Autoplay from "embla-carousel-autoplay";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion_variants";

const CareerCulture = () => {
  return (
    <section className="w-full p-2 md:p-4 bg-white overflow-hidden">
      <div className="bg-gray-50 rounded-3xl">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="w-full max-w-7xl mx-auto py-24 px-6 md:px-12"
        >
          {/* Culture Carousel Section */}
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-normal text-slate-900 leading-[1.1] tracking-tight">
              Why you&apos;ll love working here
            </h2>
          </motion.div>

          <motion.div variants={fadeInUp} className="w-full py-6">
            <Carousel
              plugins={[
                Autoplay({
                  delay: 4000,
                }),
              ]}
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent className="-ml-4 flex items-stretch">
                {WORK_CULTURE.map((data, index) => (
                  <CarouselItem key={data.id} className="pl-4 basis-[90%] md:basis-1/2 lg:basis-1/2">
                    <Card className="h-full flex flex-row bg-white border border-gray-200 transition-all duration-500 overflow-hidden group">
                      {/* Text Content */}
                      <div className="flex-1 flex flex-col gap-3 p-3 sm:p-6 md:p-10">
                        <CardHeader className="p-0">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center bg-slate-50 rounded-xl mb-2">
                            {data.icon && <data.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />}
                          </div>
                        </CardHeader>
                        <CardContent className="p-0 space-y-3">
                          <Typography
                            typo="header-6-semibold"
                            className="text-sm sm:text-lg md:text-2xl text-slate-900"
                          >
                            {data.title}
                          </Typography>
                          <Typography
                            typo="body-small-regular"
                            className="text-xs sm:text-sm md:text-lg leading-relaxed text-slate-500 font-light"
                          >
                            {data.description}
                          </Typography>
                        </CardContent>
                      </div>

                      {/* Image */}
                      <div className="flex-1 relative overflow-hidden min-h-[100px] md:min-h-[200px]">
                        <Image
                          src={data.img}
                          alt={`Working ${index + 1}`}
                          fill
                          sizes="(max-width: 768px) 40vw, 30vw"
                          className="object-cover group-hover:scale-110 transition-transform duration-1000"
                        />
                        {/* Overlay to soften the image on mobile */}
                        <div className="absolute inset-0 bg-linear-to-r from-white via-transparent to-transparent md:hidden opacity-20" />
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerCulture;
