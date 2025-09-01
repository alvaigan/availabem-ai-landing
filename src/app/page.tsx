import FifthSection from "@/components/home-page/fifth-section";
import FourthSection from "@/components/home-page/fourth-section";
import HeroSection from "@/components/home-page/hero-section";
import SecondSection from "@/components/home-page/second-section";
import SixthSection from "@/components/home-page/sixth-section";
import ThirdSection from "@/components/home-page/third-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
    </div>
  );
}
