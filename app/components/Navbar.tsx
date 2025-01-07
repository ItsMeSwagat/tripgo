import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className=" z-10 bg-white sticky top-0 home_section">
      <nav className=" w-full h-[8vh] grid grid-flow-col justify-between items-center">
        <div>
          <Image src="/logo black.png" alt="logo" width={145} height={30} />
        </div>
{/* 
        <ul className=" flex gap-10 font-medium">
          <li>
            <Link href={`/`} className=" text-primary-hover">Home</Link>
          </li>
          <li>Tours</li>
          <li>Destination</li>
          <li>Blog</li>
          <li>Page</li>
          <li>Contact</li>
        </ul> */}

        <div className=" flex gap-5">
          <button className=" font-medium">Login</button>
          <button className=" bg-primary hover:bg-primary-hover w-[119px] h-[48px] rounded-[5px] text-white font-medium">Sign Up</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
