"use client"

import MultiRowSlider from "./MultiRowSlider";
import { productData } from "@/utils/constants";
import ProductCard from "./ProductCard";

const ProductSlider = () => {
  return (
    <MultiRowSlider
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

export default ProductSlider;
