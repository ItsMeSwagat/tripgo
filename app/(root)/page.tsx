import Description from "../components/Description";
import DiscoverSection from "../components/DiscoverSection";
import HeroSection from "../components/HeroSection";
import PopularDestination from "../components/PopularDestination";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Description />
      <PopularDestination />
      <DiscoverSection />
    </>
  );
}
