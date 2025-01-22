import React from "react";
import Heading from "../components/UI/Heading";
import TravelGuideline from "../components/Aboutus/TravelGuideline";
import Section2 from "../components/Aboutus/Section2";
import SocialComp from "../components/SocialComp";
import Section3 from "../components/Aboutus/Section3";
import ReviewSection from "../components/ReviewSection";

type Props = {};

export default function page({}: Props) {
  return (
    <>
      <Heading />
      <TravelGuideline />
      <Section2 />
      <SocialComp />
      <Section3 />
      <ReviewSection />
    </>
  );
}
