"use client";

import Marquee from "react-fast-marquee";
import {
  ShieldCheck,
  CarFront,
  Crown,
  BadgeCheck,
  Clock3,
  Sparkles,
} from "lucide-react";

const marqueeItems = [
  {
    icon: CarFront,
    title: "Premium Luxury Cars",
  },
  {
    icon: Crown,
    title: "VIP Experience",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured Vehicles",
  },
  {
    icon: BadgeCheck,
    title: "Trusted By 10K+ Clients",
  },
  {
    icon: Clock3,
    title: "24/7 Support",
  },
  {
    icon: Sparkles,
    title: "Professional Service",
  },
];

const MarqueePage = () => {
  return (
    <section className="py-16 bg-[#0B0B0B] overflow-hidden">
      <div className="mb-10 text-center px-4">
        <p className="uppercase tracking-[0.35em] text-[#B88E5A] text-sm font-semibold">
          Luxury Experience
        </p>

        <h2 className="mt-4 text-4xl lg:text-6xl font-black text-white">
          Why Choose DriveFleet
        </h2>

        <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
          Experience world-class luxury car rentals with premium comfort,
          exclusive collections, and trusted service.
        </p>
      </div>

      <Marquee speed={45} pauseOnHover gradient={false}>
        {marqueeItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="
                mx-4
                min-w-[320px]
                rounded-[30px]
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                p-8
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[#B88E5A]
                hover:bg-white/10
              "
            >
              <div className="flex items-center gap-5">
                <div
                  className="
                    h-16
                    w-16
                    rounded-2xl
                    bg-linear-to-br
                    from-[#B88E5A]
                    to-[#8A6538]
                    flex
                    items-center
                    justify-center
                    shadow-lg
                  "
                >
                  <Icon className="text-white" size={30} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 mt-1">
                    Luxury driving experience for premium customers.
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </Marquee>

      <div className="mt-8">
        <Marquee direction="right" speed={35} pauseOnHover gradient={false}>
          {[
            "Mercedes Benz",
            "Rolls Royce",
            "BMW",
            "Audi",
            "Lamborghini",
            "Ferrari",
            "Porsche",
            "Bentley",
          ].map((brand, index) => (
            <div
              key={index}
              className="
                mx-4
                rounded-full
                border border-white/10
                bg-white/5
                px-10
                py-5
                text-white
                text-xl
                font-semibold
                backdrop-blur-xl
                hover:border-[#B88E5A]
                hover:text-[#B88E5A]
                transition-all
                duration-300
              "
            >
              {brand}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default MarqueePage;
