"use client";

import ProductCard from "./ProductCard";
import SingleRowSlider from "./Slider";
import { productData } from "@/utils/constants";

const PopularTourSlider = () => {
  return (
    <SingleRowSlider
      data={productData}
      renderCard={(item) => (
        <ProductCard
          id={item.id}
          name={item.name}
          image={item.img}
          location={item.location}
          daysleft={item.daysleft}
          price={item.price}
          discountedprice={item.discountedPrice}
        />
      )}
    />
  );
};

export default PopularTourSlider;
