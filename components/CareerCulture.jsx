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

const CareerCulture = () => {
  return (
    <section className="w-full p-2 md:p-4 bg-white">
      <div className="bg-gray-50 rounded-3xl">
        <div className="w-full max-w-7xl mx-auto py-24 px-6 md:px-12">
          {/* Culture Carousel Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-normal text-slate-900 leading-[1.1] tracking-tight">
              Why you&apos;ll love working here
            </h2>
          </div>

          <div className="w-full py-6">
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
                  <CarouselItem key={data.id} className="pl-4 md:basis-1/2 lg:basis-1/2">
                    <Card className="h-full flex flex-col md:flex-row gap-4 bg-white border-none shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group">
                      <div className="flex-1 flex flex-col gap-4 p-8">
                        <CardHeader className="p-0">
                          <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                            {data.icon && <data.icon className="w-6 h-6 text-primary" />}
                          </div>
                        </CardHeader>
                        <CardContent className="p-0 space-y-4">
                          <Typography
                            typo="header-6-semibold"
                            className="text-2xl text-slate-900"
                          >
                            {data.title}
                          </Typography>
                          <Typography
                            typo="body-small-regular"
                            className="text-lg leading-snug text-slate-500 font-light"
                          >
                            {data.description}
                          </Typography>
                        </CardContent>
                      </div>

                      <div className="flex-1 min-h-[300px] relative overflow-hidden">
                        <Image
                          src={data.img}
                          alt={`Working ${index + 1}`}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-1000"
                        />
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* Nav Arrows */}
              <div className="hidden md:block">
                <CarouselPrevious className="absolute -left-16 " />
                <CarouselNext className="absolute -right-16" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerCulture;
