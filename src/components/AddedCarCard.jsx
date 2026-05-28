import Image from "next/image";
import { Button } from "@heroui/react";
import { Fuel, Users, MapPin, Star, Trash2, ShieldCheck } from "lucide-react";
import UpdateCarModal from "./UpdateCarModal";
import DeleteCarModal from "./DeleteCarModal";

const AddedCarCard = ({ car }) => {
  const {
    carName,
    _id,
    dailyRentPrice,
    carType,
    image,
    seatCapacity,
    pickupLocation,
    available,
    description,
  } = car;
  return (
    <div className="bg-white rounded-[35px] overflow-hidden border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500">
      {/* IMAGE */}
      <div className="relative h-80 overflow-hidden">
        <Image
          src={image}
          alt={carName}
          fill
          className="object-cover hover:scale-110 transition-transform duration-700"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

        {/* STATUS */}
        <div className="absolute top-5 left-5">
          <span
            className={`px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-md ${
              available
                ? "bg-green-500/20 text-green-100 border border-green-400/30"
                : "bg-red-500/20 text-red-100 border border-red-400/30"
            }`}
          >
            {available ? "Available" : "Unavailable"}
          </span>
        </div>

        {/* PRICE */}
        <div className="absolute bottom-5 left-5">
          <h2 className="text-white text-4xl font-black">${dailyRentPrice}</h2>

          <p className="text-gray-300 text-sm">per day</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-8">
        {/* TITLE */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-3xl font-black text-[#111111]">{carName}</h2>

            <p className="text-[#B88E5A] font-semibold mt-2">{carType}</p>
          </div>

          <div className="bg-[#F7F5F2] rounded-2xl px-4 py-2 flex items-center gap-2">
            <Star size={18} className="fill-yellow-400 text-yellow-400" />

            <span className="font-bold">4.9</span>
          </div>
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="bg-[#F7F5F2] rounded-2xl p-4 border border-gray-200">
            <div className="flex items-center gap-3">
              <Users size={20} className="text-[#B88E5A]" />

              <div>
                <p className="text-xs text-gray-500">Seats</p>

                <h4 className="font-bold text-[#111111]">{seatCapacity}</h4>
              </div>
            </div>
          </div>

          <div className="bg-[#F7F5F2] rounded-2xl p-4 border border-gray-200">
            <div className="flex items-center gap-3">
              <Fuel size={20} className="text-[#B88E5A]" />

              <div>
                <p className="text-xs text-gray-500">Fuel</p>

                <h4 className="font-bold text-[#111111]">Petrol</h4>
              </div>
            </div>
          </div>

          <div className="bg-[#F7F5F2] rounded-2xl p-4 border border-gray-200">
            <div className="flex items-center gap-3">
              <MapPin size={20} className="text-[#B88E5A]" />

              <div>
                <p className="text-xs text-gray-500">Location</p>

                <h4 className="font-bold text-[#111111]">{pickupLocation}</h4>
              </div>
            </div>
          </div>

          <div className="bg-[#F7F5F2] rounded-2xl p-4 border border-gray-200">
            <div className="flex items-center gap-3">
              <ShieldCheck size={20} className="text-[#B88E5A]" />

              <div>
                <p className="text-xs text-gray-500">Status</p>

                <h4 className="font-bold text-[#111111]">Premium</h4>
              </div>
            </div>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="mt-8 bg-[#F7F5F2] rounded-3xl p-5 border border-gray-200">
          <h4 className="font-bold text-lg text-[#111111] mb-3">Description</h4>

          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-5 mt-8">
          {/* EDIT */}
          <UpdateCarModal car={car}></UpdateCarModal>
          <DeleteCarModal car={car}></DeleteCarModal>
        </div>
      </div>
    </div>
  );
};

export default AddedCarCard;
