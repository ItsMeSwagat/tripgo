import React from "react";
import reliableIcon from "../../assets/icons/Reliable.svg";
import experiencedIcon from "../../assets/icons/Experienced.svg";
import fligicon from "../../assets/icons/flig.svg";
import bg from "@/public/Bgimg.png";
import Image from "next/image";

type Props = {};

export default function TravelGuideline({}: Props) {
  return (
    <section className="travelguideline home_section w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center py-[5rem] xl:py-[10rem] gap-10 lg:gap-0">
      {/* content */}
      <div className=" w-full lg:w-2/3 grid justify-center items-center lg:justify-start ">
        <p className=" font-la-bella text-secondary">Welcome To Our Store</p>
        <div className=" flex flex-col xl:flex-row justify-center items-center lg:justify-start lg:items-start xl:justify-end xl:items-end gap-10">
          <div className=" w-full lg:w-[25rem] grid gap-3">
            <h1 className="subheading">Discover Our Travel Guideline</h1>
            <span className=" text-text">
              An enim nullam tempor gravida donec enim congue magna at pretium
              purus pretium ligula rutrum luctus risusd diam eget risus varius
              blandit sit amet non magna. <br />
              <br />
              An enim nullam tempor gravida donec enim congue magna at pretium
              purus pretium ligula rutrum luctus risusd diam eget risus varius
              blandit sit amet non magna.
            </span>
          </div>

          <div className=" w-80 h-full flex flex-col justify-end items-end">
            <div className=" flex gap-2">
              <Image src={reliableIcon} alt="icon" width={50} height={50} />
              <div>
                <p className=" font-medium text-black">
                  Reliable & Fully Insured
                </p>
                <span className=" text-text">
                  Ut enim ad minim veniam, quis nostrud exercitation
                </span>
              </div>
            </div>

            <div className=" flex gap-2">
              <Image
                src={experiencedIcon}
                alt="icon"
                width={50}
                height={50}
                className=""
              />
              <div>
                <p className=" font-medium text-black">
                  Reliable & Fully Insured
                </p>
                <span className=" text-text">
                  Ut enim ad minim veniam, quis nostrud exercitation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* image */}
      <div className=" relative block w-[18rem] h-[25rem] xl:w-[20rem] xl:h-[30rem] dxl:w-[25rem] dxl:h-[35rem]">
        <Image
          src={bg}
          alt="bg"
          className=" w-full h-full rounded-[10px] object-cover"
        />
        <div className=" absolute top-10 -left-14 w-40 h-48 flex flex-col justify-center items-center text-center bg-secondary rounded-[10px] ">
          <Image src={fligicon} alt="fligicon" width={50} />
          <h1 className=" heading">10M</h1>
          <span className=" font-normal">Different Parts</span>
        </div>
      </div>
    </section>
  );
}
