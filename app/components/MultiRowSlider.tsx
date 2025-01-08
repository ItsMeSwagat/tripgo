"use client";

import Slider from "react-slick";
import { NextArrow, PrevArrow } from "./SliderNextArrow";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderProps<T> {
  data: T[];
  renderCard: (item: T, index: number) => React.ReactNode;
}

const MultiRowSlider = <T,>({ data, renderCard }: SliderProps<T>) => {
  const settings = {
    className: "center",
    autoplay: true,
    centerMode: true,
    infinite: true,
    slidesToShow: 4,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          row: 1,
          slidesPerRow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          row: 1,
          slidesPerRow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          row: 1,
          slidesPerRow: 1,
          centerMode: false,
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

export default MultiRowSlider;
