"use client";
import { motion } from "framer-motion";
const HowItsWorks = () => {
  return (
    <div className="space-y-20 px-5 md:px-0">
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full py-10 sm:py-16"
      >
        <div className="mx-auto container grid-cols-1 gap-10 lg:flex lg:items-start lg:justify-between lg:gap-20">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#9c9488]">
              3 Steps — And The Revs Key Works
            </p>

            <h2 className="mt-4 text-5xl font-black uppercase tracking-tight text-[#111111] sm:text-6xl">
              HOW IT WORKS
            </h2>

            <p className="mt-5 max-w-md mb-7 text-sm leading-7 text-[#7b7b7b]">
              No complicated booking process. Choose your car, sign the deal,
              and enjoy premium driving comfort with our luxury rental service.
            </p>
          </motion.div>

          {/* RIGHT CARDS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.25,
                },
              },
            }}
            className="space-y-6"
          >
            {/* CARD 1 */}
            <div
              className="relative md:w-3xl overflow-hidden rounded-[28px] p-7 text-white shadow-[0_16px_55px_rgba(0,0,0,0.18)]"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/reserve/wi9yf7kTQxCNeY72cCY6_Images%20of%20Jenny%20Lace%20Plasticity%20Publish%20%284%20of%2025%29.jpg?q=80&w=1170&auto=format&fit=crop')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-linear-to-r from-black/80 to-black/10" />

              <div className="relative z-10 h-40">
                <div className="mb-5 h-4 w-4 rounded-full bg-white/70" />

                <h3 className="text-4xl font-black tracking-tight">Choose</h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-white/80">
                  Choose a car that fits your class and luxury driving needs.
                </p>
              </div>
            </div>
            {/* CARD 2 */}
            <div
              className="relative overflow-hidden rounded-[28px] p-7 text-white shadow-[0_16px_55px_rgba(0,0,0,0.18)]"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1654588831193-0285dab84d5a?q=80&w=1408&auto=format&fit=crop')",
                // backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-linear-to-r from-[#3d1d0f]/90 via-[#6f371d]/70 to-black/30" />

              <div className="relative z-10 h-40">
                <div className="mb-5 h-4 w-4 rounded-full bg-white/70" />

                <h3 className="text-4xl font-black tracking-tight">Sign Up</h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-white/80">
                  Complete the booking process with secure online signing.
                </p>
              </div>
            </div>
            {/* CARD 3 */}
            <div
              className="relative overflow-hidden rounded-[28px] p-7 text-white shadow-[0_16px_55px_rgba(0,0,0,0.18)]"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-linear-to-r from-black/50  to-black/10" />

              <div className="relative z-10 h-40">
                <div className="mb-5 h-4 w-4 rounded-full bg-white/70" />

                <h3 className="text-4xl font-black tracking-tight">
                  We deliver
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-white/80">
                  Enjoy your luxury ride delivered directly to your preferred
                  destination.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HowItsWorks;
