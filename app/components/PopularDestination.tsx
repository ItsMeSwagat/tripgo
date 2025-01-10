
import PopularDestinationSlider from "./PopularDestinationSlider";
import { SlideNextArrow, SlidePrevArrow } from "./SliderNextArrow";

const PopularDestination = () => {
  return (
    <section className=" home_section min-w-full h-full bg-bg3  py-[5rem]  xl:py-[8rem]">
        {/* header */}
      <div className=" text-white pb-10 pl-[1rem] sm:px-[3rem] lg:pl-0 ">
        <h2 className=" subheading">Popular Destinations</h2>
        <span className="">An enim nullam temspanor gravida donec enim congue magna at pretium.</span>
      </div>

        {/* slider */}
      <center className=" lg:hidden">
        <PopularDestinationSlider />
      </center>

      <div className="hidden lg:block">
        <PopularDestinationSlider />
      </div>
    </section>
  );
};

export default PopularDestination;
