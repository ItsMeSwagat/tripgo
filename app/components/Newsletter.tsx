import Image from "next/image";

const Newsletter = () => {
  return (
    <section className=" home_section w-full h-full pb-[5rem] rounded-[10px] overflow-hidden">
      <center className=" ">
        <div className=" relative w-full h-[20rem] md:h-[14rem] lg:h-[15rem] xl:h-[25rem] rounded-[30px] overflow-hidden">
          <img
            src={`/bgnewsletter.png`}
            alt="bg"
            className=" w-full h-full object-cover object-top"
          />

          <div className=" w-full absolute flex flex-col justify-center items-center gap-10 md:gap-2 xl:gap-5 top-14 lg:top-8 xl:top-24 md:top-4 sm:left-14 lg:left-20 xl:left-24">
            <h1 className=" subheading text-white text-start">
              Subscribe newsletter $ <br /> Get Company News.
            </h1>

            <div className=" bg-white p-2 rounded-[5px] flex items-center gap-2">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your email"
                className=" w-[8rem] lg:w-[10rem] xl:w-[20rem] h-full outline-none pl-2"
              />
              <button className="btn">Subscribe Now</button>
            </div>
          </div>
        </div>
      </center>
    </section>
  );
};

export default Newsletter;
