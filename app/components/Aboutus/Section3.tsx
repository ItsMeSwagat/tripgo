import React from "react";

type Props = {};

export default function Section3({}: Props) {
  return (
    <section className=" w-full h-full flex home_section py-[5rem] xl:py-[8rem]">
      <div className=" w-full flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className=" w-[45%] grid gap-5">
          <h2 className=" subheading text-accent">Our Popular Tours</h2>
          <span className="text-text">
            Bacon ipsum dolor amet porchetta hamburger swine, ball tip bresaola
            short ribs fatback strip steak ground round rump. Alcatra shankle
            ham hock frankfurter, bacon pork loin cow salami meatball hamburger
            venison tail bresaola. Tri-tip bresaola bacon strip steak kevin
            meatball shankle ball tip tenderloin sausage beef ribs spare ribs
            tongue filet mignon. Chuck strip steak chicken meatloaf. Drumstick
            ham hamburger, shankle alcatra shoulder tenderloin ground round.
            Cupim bacon beef ribs ball tip tongue pork rump.
          </span>

          <div className=" grid gap-5">
            <div className=" grid gap-5">
              <div className=" flex justify-between">
                <span className=" font-medium text-accent">Countryside</span>
                <span className=" font-medium text-light">78%</span>
              </div>
              <progress value={78} max={100} />
            </div>
            <div className=" grid gap-5">
              <div className=" flex justify-between">
                <span className=" font-medium text-accent">Countryside</span>
                <span className=" font-medium text-light">92%</span>
              </div>
              <progress value={92} max={100} />
            </div>
            <div className=" grid gap-5">
              <div className=" flex justify-between">
                <span className=" font-medium text-accent">Countryside</span>
                <span className=" font-medium text-light">62%</span>
              </div>
              <progress value={62} max={100} />
            </div>
          </div>
        </div>

        {/* images */}
        <div className=" relative">
          <img
            src="/Bgimg.png"
            alt=""
            className=" absolute -bottom-10 -left-20 z-10 -mr-[10rem] mt-[10rem] block w-[15rem] h-[20rem] xl:w-[15rem] xl:h-[20rem] rounded-[10px] object-cover"
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
}
