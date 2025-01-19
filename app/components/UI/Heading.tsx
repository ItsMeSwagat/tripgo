import React from "react";
import Breadcrumb from "./Breadcrumb";

type Props = {};

export default function Heading({}: Props) {
  return (
    <div className=" w-full h-80 bg-[url('/imagebackground.png')] bg-cover flex flex-col justify-center items-center">
      <h1 className=" heading">About Us</h1>
      <Breadcrumb
        homeElement="Home"
        separator={<span className=""> {">"} </span>}
        activeClasses=" text-secondary"
        containerClasses="flex items-center gap-4 text-white"
        capitalizeLinks
      />
    </div>
  );
}
