"use client"

import React from "react";
import SingleRowSlider from "./Slider";
import { popularDestinationData } from "@/utils/constants";
import PopularDestinationCard from "./PopularDestinationCard";

const PopularDestinationSlider = () => {
  return (
    <SingleRowSlider
      data={popularDestinationData}
      renderCard={(item) => (
        <PopularDestinationCard
          key={item.id}
          img={item.src}
          tours={item.tours}
          continent={item.continent}
        />
      )}
    />
  );
};

export default PopularDestinationSlider;
