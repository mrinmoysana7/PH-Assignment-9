import AddedCarCard from "@/components/AddedCarCard";

const MyAddedCarsPage = async () => {
  const res = await fetch("http://localhost:5000/added-cars");

  const addedCars = await res.json();

  return (
    <section className="min-h-screen bg-[#F7F5F2] py-20">
      <div className="container mx-auto px-4">
        {/* TOP HEADER */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-[#B88E5A] font-semibold mb-4">
            Luxury Collection
          </p>

          <h1 className="text-5xl md:text-6xl font-black text-[#111111]">
            My Added Cars
          </h1>

          <p className="text-gray-500 text-lg mt-5 max-w-2xl mx-auto">
            Manage your premium vehicles and maintain your luxury rental
            collection professionally.
          </p>
        </div>

        {/* CAR GRID */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {addedCars.map((car) => (
            <AddedCarCard car={car} key={car._id}></AddedCarCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyAddedCarsPage;
