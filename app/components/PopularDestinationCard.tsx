import React from "react";

export interface Props {
  img: string;
  tours: number;
  continent: string;
}

export default function PopularDestinationCard(props: Props) {
  return (
    <div className=" relative w-[20rem] h-[30rem] text-white rounded-[5px] overflow-hidden ">
      <img src={props.img} alt="" className=" w-full h-full object-cover " />
      <div className=" absolute bottom-8 left-5 z-10">
        <p className=" text-4xl font-semibold pb-3">{props.continent}</p>
        <span className=" bg-primary py-1 px-5 rounded-[5px]">{props.tours} Tours</span>
      </div>
    </div>
  );
}
