import Image from "next/image";
import location from "../assets/icons/location.svg";
import calander from "../assets/icons/calander.svg";
import plane from "../assets/icons/plane-r.svg";
import user from "../assets/icons/user-r.svg";
import search from "../assets/icons/search-r.svg";

const HeroSection = () => {
  return (
    <section className=" w-full h-[92vh] bg-bg2 bg-[url('/Bgimg.png')] home_section">
      <div className=" flex flex-col gap-5 justify-center items-center h-full">
        <div className=" grid text-center">
          <h1 className=" heading ">Your Journey Starts Here</h1>
          <p className=" text-white">
            Discover amazing places at exclusive deals.
          </p>
        </div>

        {/* search section */}
        <div className=" w-full sm:w-[50%] lg:w-full grid lg:grid-flow-col lg:grid-cols-5 gap-10 bg-white p-4 lg:mt-10 rounded-[5px] shadow-[10px_2px_40px_0px_#00000024]">
          <div className=" grid">
            <div className=" flex gap-1">
              <Image
                src={location}
                alt=""
                width={20}
                height={20}
                className=""
              />
              <p className=" text-text">Destination</p>
            </div>
            <input
              type="text"
              name="Destination"
              placeholder=" Where are you going?"
              className=" outline-none"
            />
          </div>
          <div className=" grid">
            <div className=" flex gap-1">
              <Image src={plane} alt="" width={20} height={20} className="" />
              <p className=" text-text">Activity</p>
            </div>
            <input
              type="text"
              name="Destination"
              placeholder="All Activity"
              className=" outline-none "
            />
          </div>
          <div className=" grid">
            <div className=" flex gap-1">
              <Image
                src={calander}
                alt=""
                width={20}
                height={20}
                className=""
              />
              <p className=" text-text">Dates</p>
            </div>
            <input
              type="text"
              name="Date"
              placeholder="Add Dates"
              className=" outline-none "
            />
          </div>
          <div className=" grid items-center">
            <div className=" flex gap-1">
              <Image src={user} alt="" width={20} height={20} className="" />
              <p className=" text-text">Guest</p>
            </div>
            <input
              type="number"
              name="Guest"
              placeholder="0"
              className=" outline-none "
            />
          </div>

          <button
            type="submit"
            className="btn flex text-white items-center justify-center"
          >
            <Image src={search} alt="" width={25} height={25} className="" />
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// box-shadow: 10px 2px 40px 0px #00000024;
