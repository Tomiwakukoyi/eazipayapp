import React from "react";

const How = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 relative">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1
          className="text-[#11453B] font-extrabold text-4xl"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          How Eazipay Works
        </h1>
        <span>Get started in 3 simple steps.</span>
      </div>
      <div className="relative">
        <img
          src="/assets/how.png"
          alt="Eazipay"
          className="w-[75%] ml-36 mt-14 z-[10]"
        />
        <img
          src="/assets/bg.png"
          alt="Eazipay"
          className="absolute -mt-[510px] z-[-1] w-[40%] ml-[65px]"
        />
      </div>
    </div>
  );
};

export default How;
