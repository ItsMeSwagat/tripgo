import Image from "next/image";
import user from "../assets/icons/profile-2user.png";
import routing from "../assets/icons/routing.png";
import likesicon from "../assets/icons/Exceeds.png";
import staricon from "../assets/icons/star.png";

const SocialComp = () => {
  return (
    <section className="home_section py-[5rem] bg-secondary grid grid-cols-2 md:grid-cols-4 gap-10 md:grid-flow-col justify-between">
      <div className=" grid gap-4 justify-center items-center">
        <div className="bgpolygon">
          <img src={user.src} alt="" width={60} className="p-2" />
        </div>
        <div>
          <h1 className=" heading">28K</h1>
          <span>Total User</span>
        </div>
      </div>
      <div className=" grid gap-4 justify-center items-center">
        <div className=" bgpolygon">
          <img src={routing.src} alt="" width={60} className=" p-2" />
        </div>
        <div>
          <h1 className=" heading">55K</h1>
          <span>Total Tours</span>
        </div>
      </div>
      <div className=" grid gap-4 justify-center items-center">
        <div className=" bgpolygon">
          <img src={likesicon.src} alt="" width={60} className=" p-2" />
        </div>
        <div>
          <h1 className=" heading">18K</h1>
          <span>Social Likes</span>
        </div>
      </div>
      <div className=" grid gap-4 justify-center items-center">
        <div className=" bgpolygon">
          <img src={staricon.src} alt="" width={60} className=" p-2" />
        </div>
        <div>
          <h1 className=" heading">28K</h1>
          <span>5 Star Ratings</span>
        </div>
      </div>
    </section>
  );
};

export default SocialComp;
