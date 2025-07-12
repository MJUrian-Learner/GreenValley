"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PROMOS } from "@/constants";
import { ArrowRight } from "lucide-react";
import { FreeMode, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

function Promos() {
  return (
    <section className="min-h-fit bg-gradient-to-r from-accent/10 via-primary/10 to-primary/12">
      <div className="container pt-20 pb-10 flex flex-col gap-12">
        {/* Section Title */}
        <div className="text-center w-4/12 mx-auto space-y-4">
          <h2 className="text-3xl font-bold text-primary tracking-wide font-serif">
            Upcoming Events &amp; Promos
          </h2>
          <p>Discover what&apos;s happening in your community</p>
        </div>

        {/* Swiper Container */}
        <div>
          <Swiper
            autoHeight={true}
            freeMode={{
              enabled: true,
            }}
            grabCursor={true}
            scrollbar={{
              hide: false,
            }}
            modules={[Scrollbar, FreeMode]}
            slidesPerView={3}
          >
            {PROMOS.map((item) => (
              <SwiperSlide key={item.id} className="px-2 pt-2 pb-8 ">
                <Card className="flex flex-col hover:shadow-lg hover:-translate-y-1 duration-300 group transition-all">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      {/* Event Type Badge */}
                      <CardTitle className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 text-primary font-semibold text-sm">
                          <item.icon className="w-4 h-4" />
                          {item.type}
                        </span>
                      </CardTitle>
                      {/* Date */}
                      <span className="font-medium bg-muted px-3 py-1 rounded-md text-muted-foreground text-sm">
                        {item.date}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-1">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold group-hover:text-accent transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="ghost"
                      className="p-0! hover:bg-transparent! hover:text-accent text-primary"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </Button>
                  </CardFooter>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Promos;
