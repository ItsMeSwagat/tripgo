import Slider from "./Slider";
import { SlideNextArrow, SlidePrevArrow } from "./SliderNextArrow";

const PopularDestination = () => {
  return (
    <section className=" min-w-full h-full bg-bg3 lg:pl-[5rem] py-[5rem] xl:pl-[10rem] xl:py-[8rem]">
        {/* header */}
      <div className=" text-white pb-10 pl-[1rem] sm:px-[3rem] lg:pl-0">
        <h2 className=" subheading">Popular Destinations</h2>
        <span className="">An enim nullam temspanor gravida donec enim congue magna at pretium.</span>
      </div>

        {/* slider */}
      <center className=" lg:hidden">
        <Slider />
      </center>

      <div className="hidden lg:block">
        <Slider />
      </div>
    </section>
  );
};

export default PopularDestination;
