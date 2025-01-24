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
    <div className={`${open ? " border border-border rounded-[10px]" : ""} p-2 lg:p-4 cursor-pointer`}>
      <div className=" flex items-center gap-3" onClick={toggle}>
        <div>
          {open ? (
            <Image src={minus} alt="minus" />
          ) : (
            <Image src={plus} alt="minus" />
          )}
        </div>
        <span className=" font-medium text-black">{title}</span>
      </div>

      <Collapse isOpened={open}>
        <div className=" p-4">
          <span className=" text-text">{answer}</span>
        </div>
      </Collapse>
    </div>
  );
}
