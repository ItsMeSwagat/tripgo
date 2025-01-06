import Slider from "./Slider";
import { SlideNextArrow, SlidePrevArrow } from "./SliderNextArrow";

const PopularDestination = () => {
  return (
    <section className=" min-w-full min-h-screen bg-bg3 pl-[8rem] py-[5rem]">
        {/* header */}
      <div className=" text-white pb-10 pr-[8rem]">
        <h2 className=" text-5xl font-semibold">Popular Destinations</h2>
        <p className=" text-lg font-thin">An enim nullam tempor gravida donec enim congue magna at pretium.</p>
      </div>

        {/* slider */}
      <div className="">
        <Slider />
      </div>
    </section>
  );
};

export default PopularDestination;
