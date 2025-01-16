"use client";

import Image from "next/image";
import React from "react";
import ReactStars from "react-stars";

const ReviewCard = () => {
  return (
    <div className=" w-[35rem] h-full p-6 rounded-[10px] grid gap-6 shadow-[0px_4px_40px_0px_#2B59FF14]">
      <span className=" text-accent">
        OMG! I cannot believe that I have got a brand new landing page after
        getting appmax. It was super easy to edit and publish.I have got a brand
        new landing page.
      </span>

      <div className=" flex justify-between items-center">
        <div className=" flex items-center gap-4">
          <img
            src="/Bgimg.png"
            alt=""
            className=" w-12 h-12 object-cover rounded-[50px] overflow-hidden"
          />
          <div>
            <p className=" text-bg3">Mila McSabbu</p>
            <span className="text-text">Freelance Designer</span>
          </div>
        </div>

        {/* rating */}
        <div>
          <ReactStars
            count={5}
            value={5}
            edit={false}
            size={30}
            color2={"#ffd700"}
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

// box-shadow: 0px 4px 40px 0px #2B59FF14;
