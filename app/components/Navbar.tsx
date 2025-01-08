import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className=" z-20 bg-white sticky top-0 home_section">
      <nav className=" w-full h-[8vh] grid grid-flow-col justify-between items-center">
        <div>
          <Image src="/logo black.png" alt="logo" width={145} height={30} />
        </div>

        <ul className=" hidden lg:flex gap-10 font-medium">
          <li>
            <Link href={`/`} className=" text-primary-hover">Home</Link>
          </li>
          <li>Tours</li>
          <li>Destination</li>
          <li>Blog</li>
          <li>Page</li>
          <li>Contact</li>
        </ul>

        <div className=" flex gap-5">
          <button>Login</button>
          <button className="btn">Sign Up</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
