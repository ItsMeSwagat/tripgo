import React from "react";
import Heading from "../components/UI/Heading";
import SearchTour from "../components/Tourlist/SearchTour";
import ProductList from "../components/Tourlist/ProductList";


type Props = {};

export default function page({}: Props) {
  return (
    <>
      <Heading header="Tour List" />
      <div className=" home_section min-h-screen flex justify-between py-[5rem] gap-8">
        <ProductList />
        <SearchTour />
      </div>
    </>
  );
}
