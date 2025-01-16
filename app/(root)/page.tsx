import Description from "../components/Description";
import DiscoverSection from "../components/DiscoverSection";
import HeroSection from "../components/HeroSection";
import Newsletter from "../components/Newsletter";
import PopularDestination from "../components/PopularDestination";
import PopularTorus from "../components/PopularTorus";
import ReviewSection from "../components/ReviewSection";
import SocialComp from "../components/SocialComp";
import VIdeo from "../components/VIdeo";
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
      <SocialComp />
      <VIdeo />
      <ReviewSection />
    </>
  );
}
