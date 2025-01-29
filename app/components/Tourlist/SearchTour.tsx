"use client";

import React, { useState } from "react";
import locationIcon from "../../assets/icons/location.svg";
import planeicon from "../../assets/icons/plane-r.svg";
import calandericon from "../../assets/icons/calander.svg";
import usericon from "../../assets/icons/user-r.svg";
import Image from "next/image";
import Slider from "@mui/material/Slider";
import Checkbox from "@mui/material/Checkbox";
import star5 from "../../assets/icons/star5.png";
import star4 from "../../assets/icons/star4.png";
import star3 from "../../assets/icons/star3.png";
import star2 from "../../assets/icons/star2.png";
import star1 from "../../assets/icons/star1.png";
import searchicon from "../../assets/icons/search-r.svg";

type Props = {
 
};

export default function SearchTour({}: Props) {
  const [price, setPrice] = useState([0, 1000]);

  const priceRangeHandler = (e: Event, value: number | number[]) => {
    if (Array.isArray(value)) {
      setPrice(value);
    }
  };

  return (
    <section className=" w-80 h-full border border-border grid gap-5 rounded-[10px]">
      <div className=" border-border border-b py-4">
        <p className="  border-l-4 border-primary text-accent pl-2">
          Search Tours
        </p>
      </div>

      <div>
        <div className=" grid gap-4 pb-4 mx-4 border-b border-border">
          <div className=" flex gap-3 p-4 border rounded-[5px]">
            <Image src={locationIcon} alt="locationicon" width={25} />
            <input
              type="text"
              placeholder="Destinations"
              className=" outline-none"
            />
          </div>
          <div className=" flex gap-3 p-4 border rounded-[5px]">
            <Image src={planeicon} alt="planeicon" width={25} />
            <input
              type="text"
              placeholder="Activity"
              className=" outline-none"
            />
          </div>
          <div className=" flex gap-3 p-4 border rounded-[5px]">
            <Image src={calandericon} alt="calandericon" width={25} />
            <input type="date" placeholder="Dates" className=" outline-none" />
          </div>
          <div className=" flex gap-3 p-4 border rounded-[5px]">
            <Image src={usericon} alt="usericon" width={25} />
            <input type="text" placeholder="Guest" className=" outline-none" />
          </div>
        </div>

        {/* filter price */}
        <div className=" mx-4 py-4 border-b border-border">
          <div>
            <p className=" text-accent">Filter Price</p>
          </div>
          <div className=" pt-2">
            <Slider
              value={price}
              onChange={priceRangeHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={1000}
              sx={{
                color: "#eddb8e",
                "& .MuiSlider-thumb": {
                  backgroundColor: "#FFFFFF",
                  border: "3px solid #00BB98",
                  width: "15px",
                  height: "15px",
                },
                "& .MuiSlider-track": {
                  backgroundColor: "#00BB98",
                  padding: "3px",
                },
                "& .MuiSlider-rail": {
                  backgroundColor: "#00BB98",
                  padding: "3px",
                },
              }}
            />
          </div>
          <div className=" w-full flex justify-between">
            <span className=" bg-secondary px-3  rounded-[5px] ">
              $ {price[0]}
            </span>
            <span className=" bg-secondary px-3  rounded-[5px] ">
              $ {price[1]}
            </span>
          </div>
        </div>
      </div>

      {/* Review Stars */}
      <div className=" mx-4 py-2 border-b border-border">
        <p className=" pl-2 text-accent">Review Score</p>

        <div className=" py-2">
          <div className=" flex items-center">
            <Checkbox
              sx={{
                color: "#999999",
                "&.Mui-checked": {
                  color: "#00BB98",
                },
              }}
            />
            <div className="">
              <Image src={star5} alt="" className="" />
            </div>
          </div>

          <div className=" flex items-center">
            <Checkbox
              sx={{
                color: "#999999",
                "&.Mui-checked": {
                  color: "#00BB98",
                },
              }}
            />
            <div className="">
              <Image src={star4} alt="" className="" />
            </div>
          </div>

          <div className=" flex items-center">
            <Checkbox
              sx={{
                color: "#999999",
                "&.Mui-checked": {
                  color: "#00BB98",
                },
              }}
            />
            <div className="">
              <Image src={star3} alt="" className="" />
            </div>
          </div>

          <div className=" flex items-center">
            <Checkbox
              sx={{
                color: "#999999",
                "&.Mui-checked": {
                  color: "#00BB98",
                },
              }}
            />
            <div className="">
              <Image src={star2} alt="" className="" />
            </div>
          </div>

          <div className=" flex items-center">
            <Checkbox
              sx={{
                color: "#999999",
                "&.Mui-checked": {
                  color: "#00BB98",
                },
              }}
            />
            <div className="">
              <Image src={star1} alt="" className="" />
            </div>
          </div>
        </div>
      </div>

      {/* category */}
      <div className=" mx-4">
        <p className=" pl-2 text-accent">Categories</p>

        <div className=" py-2">
          <div className=" flex items-center">
            <Checkbox
              sx={{
                color: "#999999",
                "&.Mui-checked": {
                  color: "#00BB98",
                },
              }}
            />
            <div className="">
              <span className=" text-accent">City Trips</span>
            </div>
          </div>

          <div className=" flex items-center">
            <Checkbox
              defaultChecked
              sx={{
                color: "#999999",
                "&.Mui-checked": {
                  color: "#00BB98",
                },
              }}
            />
            <div className="">
              <span className=" text-accent">Ecotourism</span>
            </div>
          </div>

          <div className=" flex items-center">
            <Checkbox
              sx={{
                color: "#999999",
                "&.Mui-checked": {
                  color: "#00BB98",
                },
              }}
            />
            <div className="">
              <span className=" text-accent">Escorted tours</span>
            </div>
          </div>

          <div className=" flex items-center">
            <Checkbox
              sx={{
                color: "#999999",
                "&.Mui-checked": {
                  color: "#00BB98",
                },
              }}
            />
            <div className="">
              <span className=" text-accent">Group tours</span>
            </div>
          </div>

          <div className=" flex items-center">
            <Checkbox
              sx={{
                color: "#999999",
                "&.Mui-checked": {
                  color: "#00BB98",
                },
              }}
            />
            <div className="">
              <span className=" text-accent">Hosted tours</span>
            </div>
          </div>

          <div className=" flex items-center">
            <Checkbox
              sx={{
                color: "#999999",
                "&.Mui-checked": {
                  color: "#00BB98",
                },
              }}
            />
            <div className="">
              <span className=" text-accent">Ligula</span>
            </div>
          </div>
        </div>
      </div>

      <div className=" mx-4 py-4">
        <button className=" w-full flex justify-center items-center gap-2 bg-primary hover:bg-primary-hover rounded-[5px] p-4 ">
          <Image src={searchicon} width={25} alt="searchicon" />
          <p>Search</p>
        </button>
      </div>
    </section>
  );
}
