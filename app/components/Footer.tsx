import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" home_section bg-bg3">
      <div className=" grid grid-flow-col justify-between gap-20 py-[4rem]">
        <div className=" flex flex-col gap-5">
          <Image src={"/logowhite.png"} alt="" width={145} height={30} />
          <span>
            There are many variations of passages of Lorem <br /> the Ipsum
            available but it is the majority of suffered <br /> that a
            alteration in that some dummy text.
          </span>
          <div className=" flex gap-6">
            <Image src={"/twitte.png"} alt="envelop" width={20} height={20} />
            <Image src={"/facebook.png"} alt="envelop" width={20} height={20} />
            <Image
              src={"/instagram.png"}
              alt="envelop"
              width={20}
              height={20}
            />
            <Image src={"/pin.png"} alt="envelop" width={20} height={20} />
          </div>
        </div>
        <div className="">
          <p className=" pb-4">Support</p>
          <div className=" grid gap-5">
            <span>Customer Support</span>
            <span>Privacy & Policy</span>
            <span>Contact CHannels</span>
          </div>
        </div>
        <div>
          <p className="pb-4">About Us</p>
          <div className=" grid  gap-5">
            <span>Our Story</span>
            <span>Travel Blog & Tips</span>
            <span>Working With Us</span>
            <span>Be Our Partner</span>
          </div>
        </div>
        <div>
          <p className="pb-4">Contact Info</p>
          <div className=" grid gap-5">
            <span>
              455 West Orchard Street <br /> Kings Mountain, NC 280867
            </span>
            <span className=" flex gap-2">
              {" "}
              <Image
                src={"/call.png"}
                alt="envelop"
                width={25}
                height={20}
              />{" "}
              +088 (006) 992-99-10
            </span>
            <span className=" flex gap-2">
              <Image
                src={"/envelope.png"}
                alt="envelop"
                width={25}
                height={20}
              />
              example@gmail.com
            </span>
          </div>
        </div>
      </div>
      {/* copyright section */}
      <div
        className=" flex items-center justify-between border-t-[1px] border-white py-4"
      >
        <span>© 2022 Tripgo All Rights Reserved.</span>
        <Image
          src={"/creditcard-logo 1.png"}
          alt="envelop"
          width={250}
          height={30}
          className=""
        />
      </div>
    </footer>
  );
};

export default Footer;
