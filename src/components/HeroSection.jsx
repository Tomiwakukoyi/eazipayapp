import React from "react";

const HeroSection = () => {
  return (
    <div
      className=" flex md:mx-24 md:gap-3 h-screen
    "
    >
      {/* hero info */}
      <div className="md:w-[40%] mt-14">
        <p
          className=" font-black md:text-6xl"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Run your <span className="text-[#11453B]">payroll</span>
          <span className="text-[#B4A572]"> easily</span> in
          <span className="text-[#EA4E4B]"> seconds</span>
        </p>
        <p
          className="md:w-[380px] md:mt-10"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          We’ve built an all-inclusive simple solution for individual and
          businesses to manage staff, pay salaries, bills, and relevant taxes
          all at once.
        </p>
        <button className="bg-[#11453B] hover:bg-white font-light cursor-pointer md:mt-5  transition-all duration-300 ease-in-out transform  hover:border-[#11453B] hover:border-[1px] hover:text-[#11453B] text-white  md:w-[270px] md:h-14 rounded-3xl">
          Start using free, forever
        </button>
        <div className=" mt-20 ml-2">
          <span
            className=" font-black "
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Download the Eazipay App
          </span>
          <div className="flex items-center -ml-12 -mt-5 ">
            <img
              src="/assets/appstore.png"
              alt="Apple Store"
              className="cursor-pointer  "
            />
            <img
              src="/assets/googleplay.png"
              alt="Google Play Store"
              className="-ml-20 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* hero right */}
      <div className=" absolute">
        <img
          src="/assets/heropics.png"
          alt=""
          className=" w-[58%] ml-[42%] mt-3"
        />
      </div>
    </div>
  );
};

export default HeroSection;
