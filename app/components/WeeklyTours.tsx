import ProductCard from "./ProductCard";
import ProductSlider from "./ProductSlider";

const WeeklyTours = () => {
  return (
    <section className=" home_section min-w-full h-full py-[5rem] xl:py-[8rem]">
      <div className=" pb-[3rem]">
        <h1 className="subheading">Discover Weekly</h1>
        <span className=" text-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
      </div>

      <div className=" w-full h-full hidden xl:block">
        <ProductSlider />
      </div>

      <center className=" xl:hidden">
        <ProductSlider />
      </center>

      <center className=" mt-5">
        <button className=" justify-center items-center btn-outline ">
          Get Started
        </button>
      </center>
    </section>
  );
};

export default WeeklyTours;
