"use client";

import { images } from "@/utils/constants";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PopularDestinationCard from "./PopularDestinationCard";
import Image from "next/image";
import { SlideNextArrow, SlidePrevArrow } from "./SliderNextArrow";

const mainSlider = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SlideNextArrow />,
    prevArrow: <SlidePrevArrow />,
  };
  return (
    <Slider {...settings}>
      {images.map((img, i) => (
        <PopularDestinationCard
          key={img.id}
          img={img.src}
          tours={img.tours}
          continent={img.continent}
        />
      ))}
    </Slider>
  );
};

export default mainSlider;
