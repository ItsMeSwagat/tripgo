import Image from "next/image";
import user from "../assets/icons/profile-2user.png";

const SocialComp = () => {
  return (
    <section className="home_section py-[5rem] bg-secondary grid grid-flow-col justify-between">
      <div>
        <div className="bgpolygon">
          <img src={user.src} alt="" width={60} className=" p-2" />
        </div>
        <div>
          <h1 className=" heading">28K</h1>
          <span>Total User</span>
        </div>
      </div>
      <div>
        <div className=" bgpolygon">
          <img src={user.src} alt="" width={60} className=" p-2" />
        </div>
        <div>
          <h1 className=" heading">28K</h1>
          <span>Total User</span>
        </div>
      </div>
      <div>
        <div className=" bgpolygon">
          <img src={user.src} alt="" width={60} className=" p-2" />
        </div>
        <div>
          <h1 className=" heading">28K</h1>
          <span>Total User</span>
        </div>
      </div>
      <div>
        <div className=" bgpolygon">
          <img src={user.src} alt="" width={60} className=" p-2" />
        </div>
        <div>
          <h1 className=" heading">28K</h1>
          <span>Total User</span>
        </div>
      </div>
    </section>
  );
};

export default SocialComp;
