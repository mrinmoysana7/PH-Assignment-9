"use client";

import { Star } from "@gravity-ui/icons";
import Image from "next/image";

const TestimonialCard = ({ testimonial }) => {
  const { image, name, designation, rating, review } = testimonial;

  return (
    <div className="bg-white px-10 max-w-lg py-7 rounded-xl">
      <div className="space-y-2">
        <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-[#B88E5A]">
          <Image
            src={image}
            alt={name}
            height={400}
            width={400}
            //   className="object-cover"
          />
        </div>

        <div>
          <h3 className="text-xl font-bold">{name}</h3>

          <p className="text-sm text-gray-500 mt-1">{designation}</p>
        </div>
      </div>

      <div className="relative flex items-center gap-1 mt-6">
        {[...Array(rating)].map((_, index) => (
          <Star
            key={index}
            size={18}
            className="fill-[#F5B041] text-[#F5B041]"
          />
        ))}
      </div>
      <div>
        <p className="mt-6 text-gray-500 leading-relaxed">{review}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
