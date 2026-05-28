import AvailableCars from "@/components/AvailableCars";
import Banner from "@/components/Banner";
import FeatureSection from "@/components/FeatureSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-white to-gray-500">
      <Banner></Banner>
      <AvailableCars></AvailableCars>
      <FeatureSection></FeatureSection>
    </div>
  );
}
