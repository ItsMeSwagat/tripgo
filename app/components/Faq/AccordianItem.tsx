"use client";

import React from "react";
import plus from "../../assets/icons/edit plus+.svg";
import minus from "../../assets/icons/edit plus-.svg";
import Image from "next/image";
import { Collapse } from "react-collapse";

type Props = {
  open: boolean;
  toggle: any;
  title: string;
  answer: string;
};

export default function AccordianItem({ open, toggle, title, answer }: Props) {
  return (
    <div
      className={`${
        open ? " border border-border rounded-[10px]" : ""
      } p-2 lg:p-4 cursor-pointer`}
    >
      <div
        className=" flex items-center gap-3  transition-all duration-500"
        onClick={toggle}
      >
        <div className="">
          {open ? (
            <Image src={minus} alt="minus" />
          ) : (
            <Image src={plus} alt="minus" />
          )}
        </div>
        <span className=" font-medium text-black">{title}</span>
      </div>

      <Collapse
        isOpened={open}
        theme={{
          collapse: `transition-all duration-500 ease-in-out`,
          content: `overflow-hidden transition-all duration-500 ease-in-out`,
        }}
      >
        <div
          className={`p-4 ${
            open ? "opacity-100" : " opacity-0"
          } transition-all duration-500 ease-in-out`}
          style={{
            transitionDelay: open ? "0.5s" : "0.2s", 
          }}
        >
          <span className=" text-text">{answer}</span>
        </div>
      </Collapse>
    </div>
  );
}
