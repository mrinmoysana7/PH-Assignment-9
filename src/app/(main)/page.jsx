import AvailableCars from "@/components/AvailableCars";
import Banner from "@/components/Banner";
import FeatureSection from "@/components/FeatureSection";
import HowItsWorks from "@/components/HowItsWorks";
import Marquee from "@/components/Marquee";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <Marquee></Marquee>
      <div className="bg-[#f7f5f1]">
        <AvailableCars></AvailableCars>
        <HowItsWorks></HowItsWorks>
        <Testimonials></Testimonials>
        <FeatureSection></FeatureSection>
      </div>
    </div>
  );
}
