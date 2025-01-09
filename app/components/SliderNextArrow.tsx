import Image from "next/image";
import angleleft from "../assets/icons/angle-left.svg";
import angleright from "../assets/icons/angle-right.svg";

export function SlideNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      <Image
        className=" hidden md:block absolute -top-28 right-[6rem] xl:right-[10rem] ddxl:right-[20rem] border-2 p-1 border-light rounded-full"
        src={angleright}
        alt="angle right"
        width={35}
        height={35}
      />
    </div>
  );
}

export function SlidePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      <Image
        className=" hidden md:block absolute -top-28 right-[8.5rem] xl:right-[12.5rem] ddxl:right-[22.5rem] border-2 p-1 border-light rounded-full"
        src={angleleft}
        alt="angle left"
        width={35}
        height={35}
      />
    </div>
  );
}

export function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      <Image
        className=" hidden md:block absolute -top-28 right-0 border-2 p-1 border-light rounded-full"
        src={angleright}
        alt="angle right"
        width={35}
        height={35}
      />
    </div>
  );
}

export function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      <Image
        className=" hidden md:block absolute -top-28 right-[2.5rem] border-2 p-1 border-light rounded-full"
        src={angleleft}
        alt="angle left"
        width={35}
        height={35}
      />
    </div>
  );
}
