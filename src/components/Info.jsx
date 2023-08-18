import React from "react";

const Info = () => {
  return (
    <div
      className="bg-[#FFE9E7] h-screen mt-28"
      style={{
        backgroundImage: "url('/assets/patterns.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div>
        <img src="/assets/dots1.png" alt="" className=" ml-40" />
      </div>
      <div>
        <div className=" ml-52 mt-20">
          <div className=" flex flex-col gap-10 ">
            <h1
              style={{ fontFamily: "Playfair Display, serif" }}
              className=" font-extrabold text-5xl w-[320px] "
            >
              Free forever for your
              <span className=" text-[#EA4E4B]">salary payment</span>
            </h1>
            <p>Subscribe to the Eazilife today</p>
          </div>
          <div className=" flex -mt-5 -ml-14">
            <img src="/assets/appstore.png" alt="" className="cursor-pointer" />
            <img
              src="/assets/googleplay.png"
              alt=""
              className="cursor-pointer -ml-[88px]"
            />
          </div>
        </div>
        <div className=" ml-[800px] -mt-[450px]">
          <img
            src="/assets/union.png"
            alt=""
            className="absolute w-[30%] ml-2 -mt-3"
          />
          <img src="/assets/union2.png" alt="" className="absolute w-[30%]" />
          <img
            src="/assets/maskgroup.png"
            alt=""
            className="absolute w-[30%]"
          />
          <img
            src="/assets/grid.png"
            alt=""
            className="absolute w-[10%] -ml-14 mt-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Info;
