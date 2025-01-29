import React from "react";
import ProductListCard from "./ProductListCard";
import { productlistcard } from "@/utils/constants";
import { it } from "node:test";

type Props = {};

const ProductList = (props: Props) => {
  return (
    <section>
      <div className=" pb-5 mb-5 border-b border-border">
        <div className=" flex items-end gap-1">
          <h3>10 Tours found</h3>
          <span className=" text-blue font-bold">Clear Filter</span>
        </div>

        <div></div>
      </div>

      <div className=" flex flex-col gap-5">
        {productlistcard.map((item, i) => {
          return (
            <ProductListCard
              key={i}
              id={item.id}
              name={item.name}
              banner={item.banner}
              img={item.img}
              totalPeople={item.totalPeople}
              totalimages={item.totalimages}
              daysleft={item.daysleft}
              location={item.location}
              price={item.price}
              description={item.description}
              discountedPrice={item.discountedPrice}
              totalReviews= {item.totalreviews}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProductList;
