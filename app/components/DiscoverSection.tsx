import Image from "next/image";
import check from "../assets/icons/check.svg";

const DiscoverSection = () => {
  return (
    <section className=" w-full h-[95vh] bg-[url('/Maskgroup.png')] flex justify-center items-center px-[10rem]">
      {/* <img src="/Maskgroup.png" alt="bgimg" className=" block w-full h-full object-cover" /> */}

      <div className=" w-full flex justify-between items-center">
        <div className=" flex flex-col gap-6">
          <span className=" text-secondary">Take A Tour</span>
          <h1 className=" text-5xl font-semibold">
            Discover Our Travel <br />
            Guideline
          </h1>
          <p className=" text-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta{" "}
            <br />
            quam totam aperiam ab eum vel ratione, cumque aliquam quae. Harum{" "}
            <br />
            ducimus facere excepturi voluptatibus ratione magnam quidem, ullam{" "}
            <br />
            expedita! Aliquam.
          </p>

          <div className=" flex flex-col gap-4">
            <div className=" flex gap-2">
              <Image src={check} alt="" width={25} height={25} />
              Luctus risusd diam eget
            </div>
            <div className=" flex gap-2">
              <Image src={check} alt="" width={25} height={25} />
              Luctus risusd diam eget
            </div>
            <div className=" flex gap-2">
              <Image src={check} alt="" width={25} height={25} />
              Luctus risusd diam eget
            </div>
          </div>
        </div>

        {/* image overlap */}
        <div className=" relative flex">
          <img
            src="/Bgimg.png"
            alt=""
            className=" -mr-[10rem] mt-[10rem] block w-[22rem] h-[30rem] rounded-[10px] object-cover"
          />
          <img
            src="/Bgimg.png"
            alt=""
            className=" block w-[25rem] h-[35rem] rounded-[10px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
