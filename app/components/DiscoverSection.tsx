import Image from "next/image";
import check from "../assets/icons/check.svg";

const DiscoverSection = () => {
  return (
    <section className=" w-full h-full bg-[url('/Maskgroup.png')] flex justify-center items-center py-[5rem] xl:py-[8rem] home_section">
      {/* <img src="/Maskgroup.png" alt="bgimg" className=" block w-full h-full object-cover" /> */}

      <div className=" w-full flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className=" flex flex-col gap-3 lg:gap-6">
          <span className=" text-secondary">Take A Tour</span>
          <h1 className="subheading">
            Discover Our Travel <br />
            Guideline
          </h1>
          <span className=" text-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta{" "}
            <br />
            quam totam aperiam ab eum vel ratione, cumque aliquam quae. Harum{" "}
            <br />
            ducimus facere excepturi voluptatibus ratione magnam quidem, ullam{" "}
            <br />
            expedita! Aliquam.
          </span>

          <div className=" flex flex-col gap-4">
            <div className=" flex gap-2">
              <Image src={check} alt="" width={25} height={25} />
              <span className=" text-text">Luctus risusd diam eget</span>
            </div>
            <div className=" flex gap-2">
              <Image src={check} alt="" width={25} height={25} />
              <span className=" text-text">Luctus risusd diam eget</span>
            </div>
            <div className=" flex gap-2">
              <Image src={check} alt="" width={25} height={25} />
              <span className=" text-text">Luctus risusd diam eget</span>
            </div>
          </div>
        </div>

        {/* image overlap */}
        <div className=" relative flex">
          <img
            src="/Bgimg.png"
            alt=""
            className=" z-10 -mr-[10rem] mt-[10rem] block w-[15rem] h-[20rem] xl:w-[22rem] xl:h-[30rem] rounded-[10px] object-cover"
          />
          <img
            src="/Bgimg.png"
            alt=""
            className=" block w-[15rem] h-[20rem] xl:w-[25rem] xl:h-[35rem] rounded-[10px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
