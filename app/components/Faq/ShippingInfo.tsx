"use client";

import React, { useState } from "react";
import AccordianItem from "./AccordianItem";
import { ShippingInfoFaQ } from "@/utils/faq";

type Props = {};

export default function ShippingInfo({}: Props) {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: any) => {
    if (open === i) {
      return setOpen(null);
    }

    setOpen(i);
  };

  return (
    <section className=" faq_section box-shadow p-10 flex flex-col justify-center">
      <p className=" text-[24px] font-semibold text-black pb-10">Shipping Information</p>

      <div className=" w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-2">
        {ShippingInfoFaQ.map((data, i) => {
          return (
            <AccordianItem
              key={i}
              open={open === i}
              toggle={() => toggle(i)}
              title={data.title}
              answer={data.answer}
            />
          );
        })}
      </div>
    </section>
  );
}
