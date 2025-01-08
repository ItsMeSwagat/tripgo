import Description from "../components/Description";
import DiscoverSection from "../components/DiscoverSection";
import HeroSection from "../components/HeroSection";
import PopularDestination from "../components/PopularDestination";
import WeeklyTours from "../components/WeeklyTours";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Description />
      <PopularDestination />
      <DiscoverSection />
      <WeeklyTours />
    </>
  );
}
