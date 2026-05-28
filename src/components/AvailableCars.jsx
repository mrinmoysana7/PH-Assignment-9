"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AvailableCarCard from "@/components/AvailableCarCard";
import Link from "next/link";
import { CarFront } from "lucide-react";

const AvailableCars = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    const fetchCars = async () => {
      const res = await fetch("http://localhost:5000/available-cars");

      const data = await res.json();

      setCars(data);
    };

    fetchCars();
  }, []);

  return (
    <section className="py-20 px-5 md:px-0 bg-linear-to-b">
      <div className="container mx-auto">
        {/* TOP CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14"
        >
          <div>
            <p className="text-[#15A1BF] font-semibold uppercase tracking-widest mb-3">
              Luxury Collection
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Available Premium Cars
            </h2>

            <p className="text-gray-500 mt-4 max-w-2xl">
              Explore our exclusive collection of luxury and high-performance
              vehicles for your next journey.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-[#15A1BF]/10 text-[#15A1BF] px-5 py-2 rounded-full font-semibold text-sm mb-6"
        >
          <CarFront size={16} />
          <Link href="/explore-cars">See Luxury Collections</Link>
        </motion.div>

        {/* CARDS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          variants={{
            hidden: {},
            visible: {},
          }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {cars.slice(8, 16).map((car) => (
            <motion.div
              key={car?._id}
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <AvailableCarCard car={car} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AvailableCars;
