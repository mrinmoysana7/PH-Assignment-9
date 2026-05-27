import AvailableCarCard from "@/components/AvailableCarCard";
import { CarFront } from "lucide-react";
import Link from "next/link";

const ExploreCarsPage = async () => {
  const res = await fetch("http://localhost:5000/available-cars", {
    cache: "no-store",
  });
  const cars = await res.json();

  return (
    <div className="container mx-auto px-5 md:px-0 py-5 md:py-10 ">
      <section className="bg-linear-to-b from-white to-gray-50 ">
        <div className="space-y-10">
          {/* <h2 className="text-2xl md:text-4xl mb-5 font-bold leading-tight">
            Explore <span className="text-cyan-500">Cars</span>
          </h2> */}
          <div className="inline-flex items-center gap-2 bg-[#15A1BF]/10 text-[#15A1BF] px-5 py-2 rounded-full font-semibold text-sm">
            <CarFront size={16} />
            Luxury Collection
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            {cars.map((car) => (
              <AvailableCarCard key={car?._id} car={car}></AvailableCarCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExploreCarsPage;
