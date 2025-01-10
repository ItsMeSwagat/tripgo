"use client";

import React from "react";
import Slider from "react-slick";
import { SlideNextArrow, SlidePrevArrow, NextArrow, PrevArrow } from "./SliderNextArrow";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderProps<T> {
  data: T[];
  renderCard: (item: T, index: number) => React.ReactNode;
}

const MainSlider = <T,>({ data, renderCard}: SliderProps<T>) => {
  const settings = {
    centerMode:true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {data.map((item, index) => (
        <div key={index}>{renderCard(item, index)}</div>
      ))}
    </Slider>
  );
};

export default MainSlider;
