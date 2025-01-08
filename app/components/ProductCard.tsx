"use client";

import ReactStars from "react-stars";
import Image from "next/image";
import clock from "../assets/icons/watchclock.svg";
import heart from "../assets/icons/heart.svg";
import l from "../assets/icons/location.svg";

interface Props {
  id: number;
  image: string;
  name: string;
  daysleft: number;
  location: string;
  price: number;
  discountedprice: number;
}

const ProductCard = ({
  id,
  image,
  name,
  daysleft,
  location,
  price,
  discountedprice,
}: Props) => {
  return (
    <div
      key={id}
      className=" w-[20rem] h-[25rem] rounded-[10px] overflow-hidden shadow-[0px_4px_40px_0px_#2B59FF14]"
    >
      {/* card image */}
      <div className=" relative h-1/2">
        <Image
          src={image}
          alt="product image"
          width={500}
          height={500}
          className=" w-full h-full object-center object-cover"
        />

        <div className="absolute top-4 right-4 bg-white rounded-full  p-2">
          <Image src={heart} alt="heart" width={18} className=" " />
        </div>
      </div>

      {/* card content */}
      <div className=" h-1/2 flex flex-col justify-center items-start relative p-6">
        <span className=" flex gap-1 items-center bg-white -top-5 absolute text-secondary border border-secondary px-2 py-1 rounded-[5px]">
          <Image src={clock} alt="icon" width={15} height={15} />
          {daysleft} days
        </span>
        <p className=" text-text font-semibold">{name}</p>
        <div className=" flex gap-1">
          <Image src={l} alt="icon" width={20} height={20} />
          <span className=" text-text">{location}</span>
        </div>
        <ReactStars
          count={5}
          value={3}
          edit={false}
          size={24}
          color2={"#ffd700"}
        />
        <div className=" w-full flex items-center justify-between">
          <div className=" flex gap-1">
            <p className=" text-accent font-semibold">${discountedprice}</p>
            <p className=" text-light font-semibold line-through">${price}</p>
          </div>
          <button className="btn">Explore</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
