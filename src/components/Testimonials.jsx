import Marquee from "react-fast-marquee";
import TestimonialCard from "./TestimonialCard";

const Testimonials = async () => {
  const res = await fetch("http://localhost:5000/testimonials");
  const testimonials = await res.json();

  console.log(testimonials);

  return (
    <div>
      <section className="relative overflow-hidden bg-[#0A0A0A] py-24">
        {/* BACKGROUND EFFECT */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(184,142,90,0.18),transparent_45%)]" />

        <div className="relative container mx-auto px-4">
          {/* TOP CONTENT */}
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-[#B88E5A] text-sm font-semibold">
              Testimonials
            </p>

            <h2 className="mt-5 text-4xl md:text-6xl font-black text-white leading-tight">
              What Our Clients Say
            </h2>

            <p className="mt-6 text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Discover why thousands of customers trust DriveFleet for luxury
              rentals, premium experiences, and world-class customer support.
            </p>
          </div>

          {/* CARDS */}
          <Marquee pauseOnHover speed={60} direction="right">
          <div className="flex gap-10">
            {testimonials.map((testimonial) => (
              
                <TestimonialCard
                  testimonial={testimonial}
                  key={testimonial._id}
                ></TestimonialCard>
              
            ))}
          </div>
          </Marquee>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
