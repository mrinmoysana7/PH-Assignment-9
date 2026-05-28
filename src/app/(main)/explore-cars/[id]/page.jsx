import Image from "next/image";

import {
  Fuel,
  Users,
  Star,
  ShieldCheck,
  MapPin,
  Clock3,
  CarFront,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import BookingModal from "@/components/BookingModal";

const CarDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/available-cars/${id}`, {
    cache: "no-store",
  });

  const car = await res.json();

  const {
    name,
    brand,
    type,
    fuelType,
    transmission,
    seats,
    pricePerDay,
    rating,
    available,
    image,
  } = car;

  return (
    <section className="min-h-screen bg-linear-to-b from-white to-gray-100 py-7 md:py-10">
      <div className="container md:mx-auto px-5 md:px-20 lg:px-0">
        {/* TOP */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* TAG */}
            <div className="inline-flex items-center gap-2 bg-[#15A1BF]/10 text-[#15A1BF] px-5 py-2 rounded-full font-semibold text-sm mb-6">
              <CarFront size={16} />
              <Link href="/explore-cars">Back to Collection</Link>
            </div>

            {/* TITLE */}
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
              {name}
            </h1>

            <p className="text-xl text-gray-500 mt-3">
              {brand} • {type}
            </p>

            {/* FEATURES */}
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 bg-white shadow-sm border border-gray-200 px-5 py-3 rounded-2xl">
                <Users size={18} className="text-[#15A1BF]" />

                <span className="font-medium text-gray-700">
                  {seats} Passengers
                </span>
              </div>

              <div className="flex items-center gap-2 bg-white shadow-sm border border-gray-200 px-5 py-3 rounded-2xl">
                <Fuel size={18} className="text-[#15A1BF]" />

                <span className="font-medium text-gray-700">{fuelType}</span>
              </div>

              <div className="flex items-center gap-2 bg-white shadow-sm border border-gray-200 px-5 py-3 rounded-2xl">
                <Star size={18} className="text-yellow-500 fill-yellow-500" />

                <span className="font-medium text-gray-700">
                  {rating} Rating
                </span>
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative mt-12">
              <div className="absolute inset-0 bg-[#15A1BF]/10 blur-3xl rounded-full" />

              <Image
                src={image}
                alt={name}
                width={800}
                height={500}
                className="relative z-10 w-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* RIGHT BOOKING CARD */}
          <div className="lg:pl-10">
            <div className="bg-white border border-gray-200 rounded-3xl shadow-2xl p-8">
              {/* HEADING */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Booking Details
                  </h2>

                  <p className="text-gray-500 mt-2">
                    Reserve your premium ride instantly.
                  </p>
                </div>

                <div
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    available
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {available ? "Available" : "Unavailable"}
                </div>
              </div>

              {/* PRICING */}
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-gray-100 pb-5">
                  <div className="flex items-center gap-3">
                    <Clock3 size={18} className="text-[#15A1BF]" />

                    <span className="text-gray-600">Hourly Rate</span>
                  </div>

                  <span className="font-bold text-xl">
                    ${Math.floor(pricePerDay / 8)}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-gray-100 pb-5">
                  <div className="flex items-center gap-3">
                    <MapPin size={18} className="text-[#15A1BF]" />

                    <span className="text-gray-600">Daily Rate</span>
                  </div>

                  <span className="font-bold text-xl">${pricePerDay}</span>
                </div>

                <div className="flex items-center justify-between border-b border-gray-100 pb-5">
                  <div className="flex items-center gap-3">
                    <ShieldCheck size={18} className="text-[#15A1BF]" />

                    <span className="text-gray-600">Transmission</span>
                  </div>

                  <span className="font-bold text-xl">{transmission}</span>
                </div>
              </div>

              {/* BUTTON */}
              <BookingModal car={car}></BookingModal>

              {/* BENEFITS */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                  <h4 className="font-semibold text-gray-900">
                    Free Cancellation
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    Cancel anytime before booking.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                  <h4 className="font-semibold text-gray-900">
                    Secure Payment
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    100% encrypted payment system.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                  <h4 className="font-semibold text-gray-900">
                    Premium Support
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    24/7 customer assistance.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                  <h4 className="font-semibold text-gray-900">
                    Luxury Experience
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    Professional luxury rides.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetailsPage;
