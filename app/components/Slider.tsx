"use client";

import { images } from "@/utils/constants";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PopularDestinationCard from "./PopularDestinationCard";
import { SlideNextArrow, SlidePrevArrow } from "./SliderNextArrow";

const mainSlider = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    initialSlide: 0,
    nextArrow: <SlideNextArrow />,
    prevArrow: <SlidePrevArrow />,
    responsive: [
      {
        breakpoint: 1439,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
