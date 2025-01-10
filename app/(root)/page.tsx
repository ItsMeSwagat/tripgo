import Description from "../components/Description";
import DiscoverSection from "../components/DiscoverSection";
import HeroSection from "../components/HeroSection";
import Newsletter from "../components/Newsletter";
import PopularDestination from "../components/PopularDestination";
import PopularTorus from "../components/PopularTorus";
import WeeklyTours from "../components/WeeklyTours";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Description />
      <PopularDestination />
      <DiscoverSection />
      <WeeklyTours />
      <Newsletter />
      <PopularTorus />
    </>
  );
}
