import Image from "next/image";
import React from "react";
import frame3 from "@/public/Frame3.png";

type Props = {};

export default function Header({}: Props) {
  return (
    <section className="home_section flex flex-col justify-center items-center gap-10 py-[5rem]">
      <Image src={frame3} alt="frame3" />
      <div className=" text-center">
        <h2 className="subheading text-accent">Do You Have Some Questions?</h2>
        <p className=" text-text font-normal">
          Welcome to your new go-to source for aftermarket auto parts and
          accessories.
        </p>
      </div>
    </section>
  );
}
