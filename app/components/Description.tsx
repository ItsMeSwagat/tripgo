import Image from "next/image";
import flig from "../assets/icons/flig.svg";
import tree from "../assets/icons/tree.svg";
import clock from "../assets/icons/clock.svg";

const Description = () => {
  return (
    <section className=" w-full h-52 bg-primary grid grid-flow-col justify-between items-center px-[8rem] text-white">
      <div className=" flex gap-2">
        <Image src={flig} alt="" width={50} height={50} />
        <div>
          <p className=" text-xl font-semibold">500+ Destinations</p>
          <span className=" font-thin">Etiam porta sem malesuada amgna</span>
        </div>
      </div>

      <div className=" flex gap-2">
        <Image src={clock} alt="" width={50} height={50} />
        <div>
          <p className=" text-xl font-semibold">Best Price Guarantee</p>
          <span className=" font-thin">Etiam porta sem malesuada amgna</span>
        </div>
      </div>

      <div className=" flex gap-2">
        <Image src={tree} alt="" width={50} height={50} />
        <div>
          <p className=" text-xl font-semibold">Top Notch Support</p>
          <span className=" font-thin">Etiam porta sem malesuada amgna</span>
        </div>
      </div>
    </section>
  );
};

export default Description;
