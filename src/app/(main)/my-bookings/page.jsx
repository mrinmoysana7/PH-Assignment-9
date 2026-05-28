import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import {
  CalendarDays,
  CarFront,
  CircleDollarSign,
  Fuel,
  MapPin,
  ShieldCheck,
  Star,
  User,
} from "lucide-react";

const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const res = await fetch(`http://localhost:5000/booking/${user?.id}`, {
    cache: "no-store",
  });

  const bookings = await res.json();
  return (
    <section className="min-h-screen bg-[#F5F5F3] py-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* TOP CONTENT */}
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.4em] text-[#B88E5A] text-sm font-semibold">
            Luxury Reservations
          </p>

          <h1 className="text-4xl md:text-6xl font-black text-[#111111] mt-4">
            My Bookings
          </h1>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto leading-relaxed">
            Manage your premium vehicle reservations and enjoy a seamless luxury
            rental experience with DriveFleet.
          </p>
        </div>

        {/* EMPTY STATE */}
        {bookings.length === 0 && (
          <div className="bg-white rounded-[40px] p-16 text-center shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold text-[#111111]">
              No Bookings Found
            </h2>

            <p className="text-gray-500 mt-4">
              You haven’t booked any luxury vehicle yet.
            </p>
          </div>
        )}

        {/* BOOKINGS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="
                bg-white
                rounded-[35px]
                overflow-hidden
                shadow-xl
                border
                border-gray-100
                hover:-translate-y-2
                transition-all
                duration-500
              "
            >
              {/* IMAGE */}
              <div className="relative h-70 overflow-hidden">
                <Image
                  src={booking.image}
                  alt={booking.name}
                  fill
                  loading="eager"
                  className="object-cover w-full hover:scale-110 transition-transform duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

                {/* PRICE */}
                <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-xl px-5 py-2 rounded-full shadow-lg">
                  <h3 className="text-[#111111] font-bold text-lg">
                    ${booking.pricePerDay}/day
                  </h3>
                </div>

                {/* NAME */}
                <div className="absolute bottom-6 left-6">
                  <h2 className="text-white text-3xl font-black">
                    {booking.name}
                  </h2>

                  <p className="text-gray-200 mt-1">
                    {booking.brand} • {booking.type}
                  </p>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-8">
                {/* INFO GRID */}
                <div className="grid grid-cols-2 gap-5">
                  {/* SEATS */}
                  <div className="bg-[#F9F9F7] rounded-2xl p-4">
                    <div className="flex items-center gap-3">
                      <User className="text-[#B88E5A]" size={20} />

                      <div>
                        <p className="text-gray-500 text-sm">Seats</p>

                        <h4 className="font-bold text-[#111111]">
                          {booking.seats} Passengers
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* FUEL */}
                  <div className="bg-[#F9F9F7] rounded-2xl p-4">
                    <div className="flex items-center gap-3">
                      <Fuel className="text-[#B88E5A]" size={20} />

                      <div>
                        <p className="text-gray-500 text-sm">Fuel Type</p>

                        <h4 className="font-bold text-[#111111]">
                          {booking.fuelType}
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* BOOKING DATE */}
                  <div className="bg-[#F9F9F7] rounded-2xl p-4">
                    <div className="flex items-center gap-3">
                      <CalendarDays className="text-[#B88E5A]" size={20} />

                      <div>
                        <p className="text-gray-500 text-sm">Booking Date</p>

                        <h4 className="font-bold text-[#111111]">
                          {booking.bookingDate}
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* STATUS */}
                  <div className="bg-[#F9F9F7] rounded-2xl p-4">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="text-[#22C55E]" size={20} />

                      <div>
                        <p className="text-gray-500 text-sm">Status</p>

                        <h4 className="font-bold text-[#22C55E]">Confirmed</h4>
                      </div>
                    </div>
                  </div>
                </div>

                {/* BOTTOM */}
                <div className="mt-8 flex items-center justify-between">
                  {/* RATING */}
                  <div className="flex items-center gap-2">
                    <Star
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    <span className="font-semibold text-[#111111]">
                      {booking.rating}
                    </span>
                  </div>

                  {/* TYPE */}
                  <div className="flex items-center gap-2 bg-[#111111] text-white px-5 py-2 rounded-full">
                    <CarFront size={18} />

                    <span className="text-sm font-medium">
                      {booking.transmission}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyBookingPage;
