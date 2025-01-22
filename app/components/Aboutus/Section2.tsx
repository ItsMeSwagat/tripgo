import React from "react";
import group1 from "@/public/Group 457.png";
import group2 from "@/public/Group 458.png";
import group3 from "@/public/Group 460.png";
import Image from "next/image";

const Section2 = () => {
  return (
    <section className=" home_section w-full h-full py-[5rem] grid gap-10">
      <div className=" text-center grid gap-4">
        <p className=" font-la-bella text-secondary">
          3 Steps For The Perfect Trip
        </p>
        <h2 className=" subheading">Find Travel Perfection</h2>
        <span className=" text-text font-normal">
          An enim nullam tempor gravida donec enim congue magna at pretium purus
          pretium ligula <br /> rutrum luctus risusd diam eget risus varius
          blandit sit amet non magna.
        </span>
      </div>

      <div className=" w-full flex flex-col lg:flex-row justify-between gap-10">
        <div className=" w-full flex flex-col p-10 items-center justify-center text-center box-shadow rounded-[10px] gap-4 ">
          <Image src={group3} alt="group1" />
          <p className=" text-accent">Tell us what you want to do</p>
          <span className=" text-text">
            Fully layered dolor sit amet, consectetur adipisicing elit. Facere,
            nobis, id expedita dolores officiis laboriosam.
          </span>
        </div>
        <div className=" w-full flex flex-col p-10 items-center justify-center text-center box-shadow rounded-[10px] gap-4 ">
          <Image src={group1} alt="group1" />
          <p className=" text-accent">Share your travel preference</p>
          <span className=" text-text">
            Fully layered dolor sit amet, consectetur adipisicing elit. Facere,
            nobis, id expedita dolores officiis laboriosam.
          </span>
        </div>
        <div className=" w-full flex flex-col p-10 items-center justify-center text-center box-shadow rounded-[10px] gap-4 ">
          <Image src={group2} alt="group1" />
          <p className=" text-accent">We’ll give you recommendations</p>
          <span className=" text-text">
            Fully layered dolor sit amet, consectetur adipisicing elit. Facere,
            nobis, id expedita dolores officiis laboriosam.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Section2;

// box-shadow: 0px 4px 40px 0px #2B59FF14;
