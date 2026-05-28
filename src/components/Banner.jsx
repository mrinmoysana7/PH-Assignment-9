"use client";

import Link from "next/link";
import Image from "next/image";

import { Button } from "@heroui/react";

import { ArrowUpRight, Star } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const bannerCars = [
  {
    id: 1,
    title: "Drive Beyond Luxury",
    subtitle: "Premium Collection",
    description:
      "Experience elite performance, unmatched comfort, and luxury rentals crafted for modern journeys.",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600&auto=format&fit=crop",
  },

  {
    id: 2,
    title: "Elegance Meets Performance",
    subtitle: "Executive Sedans",
    description:
      "Travel in style with world-class premium sedans designed for prestige and comfort.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop",
  },

  {
    id: 3,
    title: "Own The Road",
    subtitle: "Luxury SUVs",
    description:
      "Conquer every journey with powerful SUVs engineered for excellence and adventure.",
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1600&auto=format&fit=crop",
  },
];

const Banner = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <section className="relative overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        loop={true}
        speed={1200}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="h-screen"
      >
        {bannerCars.map((car) => (
          <SwiperSlide key={car.id}>
            <div className="relative h-screen w-full">
              {/* BACKGROUND IMAGE */}
              <Image
                src={car.image}
                alt={car.title}
                fill
                priority
                className="object-cover"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/60" />

              {/* GRADIENT */}
              <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-black/20" />

              {/* CONTENT */}
              <div className="container mx-auto h-full px-5 md:px-10 relative z-20">
                <div className="flex items-center h-full">
                  <motion.div
                    initial={{ opacity: 0, y: 70 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 1,
                    }}
                    className="max-w-3xl"
                  >
                    {/* TOP BADGE */}
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/10 px-5 py-2 rounded-full mb-7">
                      <Star
                        className="text-[#15A1BF] fill-[#15A1BF]"
                        size={16}
                      />

                      <p className="text-white tracking-[0.3em] uppercase text-xs font-semibold">
                        {car.subtitle}
                      </p>
                    </div>

                    {/* TITLE */}
                    <motion.h1
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.2,
                        duration: 1,
                      }}
                      className="
                        text-5xl
                        sm:text-6xl
                        md:text-7xl
                        lg:text-8xl
                        font-black
                        text-white
                        leading-[0.95]
                      "
                    >
                      <div className="text-4xl md:text-6xl font-bold">
                        <h1>Drive your Way.</h1>
                        <h1>Anytime.</h1>
                        <h1>Anywhere.</h1>
                      </div>
                    </motion.h1>

                    {/* DESCRIPTION */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: 0.5,
                        duration: 1,
                      }}
                      className="
                        text-gray-300
                        text-base
                        md:text-lg
                        mt-8
                        leading-relaxed
                        max-w-2xl
                      "
                    >
                      {car.description}
                    </motion.p>

                    {/* BUTTONS */}
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.8,
                        duration: 1,
                      }}
                      className="flex flex-wrap items-center gap-5 mt-10"
                    >
                      <Link href="/explore-cars">
                        <Button
                          radius="full"
                          className="
                            bg-[#15A1BF]
                            text-white
                            h-14
                            px-8
                            text-base
                            font-semibold
                            hover:scale-105
                            transition-all
                          "
                        >
                          Explore Cars
                          <ArrowUpRight size={20} />
                        </Button>
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
