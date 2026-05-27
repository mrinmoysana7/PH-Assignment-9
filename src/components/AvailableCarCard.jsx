"use client";

import Image from "next/image";
import { Button } from "@heroui/react";
import { Heart, Star } from "lucide-react";
import Link from "next/link";

const AvailableCarCard = ({ car }) => {
  const { image, name, seats, rating, brand, pricePerDay, _id } = car;
  return (
    <div className="shadow-lg rounded-b-2xl">
      {/* IMAGE */}
      <div className="relative h-64  overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-t-2xl group-hover:scale-110 transition-transform duration-700"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />

        {/* TAG */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-md text-gray-900 text-xs font-semibold px-4 py-1.5 rounded-full shadow">
            Seats: {seats}
          </span>
        </div>

        {/* HEART */}
        <button className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow hover:bg-red-500 hover:text-white transition-all">
          <Heart size={18} />
        </button>

        {/* RATING */}
        <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow">
          <Star size={15} className="fill-yellow-400 text-yellow-400" />

          <span className="text-sm font-semibold">{rating}</span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <div className="mb-5">
          <h3 className="text-2xl font-bold text-gray-900">{name}</h3>

          <p className="text-gray-500 mt-1">{brand}</p>
        </div>

        {/* PRICE + BUTTON */}
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-3xl font-bold text-gray-900">${pricePerDay}</h4>

            <p className="text-gray-400 text-sm">per day</p>
          </div>

          <Link href={`/explore-cars/${_id}`}>
            <Button
              radius="full"
              className="bg-[#111827] text-white px-6 font-semibold hover:bg-[#15A1BF] transition-all"
            >
              Explore
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AvailableCarCard;
