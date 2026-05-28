"use client";

import { ArrowRight, Gauge, Home } from "lucide-react";
const FeatureSection = () => {
  return (
    <section className="w-full py-6 sm:py-10">
      <div className="mx-auto container">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:grid-rows-2 md:h-140">
          {/* TOP LEFT CARD */}
          <div
            className="relative overflow-hidden rounded-2xl text-white shadow-[0_12px_40px_rgba(0,0,0,0.18)] md:col-span-1 md:row-span-1 min-h-55"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/55 to-transparent" />

            <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-6">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 backdrop-blur-md">
                <Home className="h-4 w-4 text-white" />
              </div>

              <div className="max-w-[18rem]">
                <h3 className="text-2xl font-semibold leading-tight tracking-tight sm:text-[2rem]">
                  Explore more to get your comfort zone
                </h3>

                <p className="mt-2 text-sm text-white/75">
                  Book your perfect stay with us.
                </p>

                <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#111111] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f3f3f3]">
                  Booking Now
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* BIG RIGHT CARD */}
          <div
            className="relative overflow-hidden rounded-2xl text-white shadow-[0_12px_40px_rgba(0,0,0,0.18)] md:col-span-2 md:row-span-2 min-h-85"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/15 to-black/10" />

            <div className="absolute inset-0 flex items-end justify-center pb-6 px-6 text-center">
              <h3 className="max-w-xl text-2xl font-medium leading-tight text-white sm:text-4xl sm:font-semibold">
                Beyond accommodation, creating memories of a lifetime.
              </h3>
            </div>
          </div>

          {/* BOTTOM LEFT CARD */}
          <div
            className="relative overflow-hidden rounded-2xl text-white shadow-[0_12px_40px_rgba(0,0,0,0.18)] md:col-span-1 md:row-span-1 min-h-55"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/35 to-transparent" />

            <div className="relative z-10 flex h-full flex-col justify-end p-5 sm:p-6">
              <div className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 backdrop-blur-md">
                <Gauge className="h-4 w-4 text-white" />
              </div>

              <p className="text-sm font-medium text-white/80">
                Vehicle Available
              </p>

              <p className="mt-1 text-4xl font-semibold tracking-tight">
                3,490
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
