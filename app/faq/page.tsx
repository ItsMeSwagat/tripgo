import React from "react";
import Breadcrumb from "../components/UI/Breadcrumb";
import Header from "../components/Faq/Header";
import ShippingInfo from "../components/Faq/ShippingInfo";
import Payments from "../components/Faq/Payments";
import Warranty from "../components/Faq/Warranty";
import EmailContact from "../components/Faq/EmailContact";

type Props = {};

export default function page({}: Props) {
  return (
    <>
      <Breadcrumb
        homeElement="Home"
        separator={<span className=" text-accent"> {">"} </span>}
        activeClasses=" text-secondary"
        containerClasses="flex items-center gap-4 text-accent bg-bg2 w-full h-[80px] home_section"
        capitalizeLinks
      />
      <Header />
      <ShippingInfo />
      <Payments />
      <Warranty />
      <EmailContact />
    </>
  );
}
