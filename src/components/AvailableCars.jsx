import { Button } from "@heroui/react";
import { ArrowUpRight } from "@gravity-ui/icons";
import AvailableCarCard from "@/components/AvailableCarCard";
import Link from "next/link";
import { CarFront } from "lucide-react";

const AvailableCars = async () => {
  const res = await fetch("http://localhost:5000/available-cars", {
    cache: "no-store",
  });
  const cars = await res.json();

  return (
    <section className="py-20 bg-linear-to-b from-white to-gray-50">
      <div className="container mx-auto">
        {/* TOP CONTENT */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
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
        </div>
        <div className="inline-flex items-center gap-2 bg-[#15A1BF]/10 text-[#15A1BF] px-5 py-2 rounded-full font-semibold text-sm mb-6">
          <CarFront size={16} />
          <Link href="/explore-cars">See Luxury Collections</Link>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {cars.slice(0, 8).map((car) => (
            <AvailableCarCard key={car?._id} car={car}></AvailableCarCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvailableCars;
