import AvailableCars from "@/components/AvailableCars";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <div className="px-10">
      <Banner></Banner>
      <AvailableCars></AvailableCars>
    </div>
  );
}
