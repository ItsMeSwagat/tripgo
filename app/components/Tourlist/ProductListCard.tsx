"use client";

import Image from "next/image";
import clock from "../../assets/icons/watchclock.svg";
import heart from "../../assets/icons/heart.svg";
import l from "../../assets/icons/location.svg";
import profile from "../../assets/icons/profile-circle.png";
import ReactStars from "react-stars";

type Props = {
  id: number;
  img: string;
  totalimages: number;
  name: string;
  daysleft: number;
  location: string;
  price: number;
  discountedPrice: number;
  totalPeople: number;
  banner: string;
  description: string;
  totalReviews: number;
};

export default function ProductListCard({
  id,
  img,
  totalPeople,
  totalimages,
  name,
  daysleft,
  location,
  price,
  discountedPrice,
  description,
  banner,
  totalReviews,
}: Props) {
  return (
    <div className="box-shadow w-full rounded-[10px] overflow-hidden grid grid-flow-col ">
      {/* image */}
      <div className=" relative w-80 ">
        <Image
          src={img}
          alt="img"
          width={1000}
          height={1000}
          className=" w-full h-full object-cover rounded-[10px]"
        />
        <div className="absolute top-2 right-2 bg-white rounded-full  p-2">
          <Image src={heart} alt="heart" width={18} className=" " />
        </div>
      </div>

      {/* content */}
      <div className=" m-4 p-3 flex flex-col gap-2 border-r border-border">
        <h5>{name}</h5>
        <div className=" flex gap-1">
          <Image src={l} alt="icon" width={20} height={20} />
          <span className=" text-text">{location}</span>
        </div>
        <div className=" flex gap-2">
          <ReactStars
            count={5}
            value={3}
            edit={false}
            size={24}
            color2={"#ffd700"}
          />
          <span className=" text-accent"> {totalReviews} Reviews</span>
        </div>

        <span className=" text-accent">{description}</span>
      </div>

      {/* pricing */}

      <div className=" p-5 px-8 flex flex-col justify-start gap-5">
        <div className="flex gap-2">
          <span className=" flex gap-1 items-center bg-white  text-secondary border border-secondary px-2 py-1 rounded-[5px]">
            <Image src={profile} alt="icon" width={15} height={15} />
            {totalPeople}
          </span>
          <span className=" flex gap-1 items-center bg-white text-secondary border border-secondary px-2 py-1 rounded-[5px]">
            <Image src={clock} alt="icon" width={15} height={15} />
            {daysleft} days
          </span>
        </div>
        <div className=" grid justify-end gap-2">
          <h5 className="">
            ${discountedPrice}{" "}
            <span className=" line-through text-light">${price}</span>
          </h5>
          <button className="btn">Explore</button>
        </div>
        
      </div>
    </div>
  );
}
