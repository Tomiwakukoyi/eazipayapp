import React from "react";

const Form = () => {
  return (
    <div className=" h-screen">
      <img src="/assets/dots2.png" alt="" className=" w-[10%] mt-24" />
      <img
        src="/assets/circlebg.png"
        alt=""
        className="absolute -mt-[201px] right-0 z-[2]]"
      />

      <div className="flex gap-60">
        <div
          className=" flex flex-col mt-14 ml-36"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          <h1 className=" font-black text-6xl w-[450px] text-[#11453B]">
            Get an Exclusive Demo of Eazipay
          </h1>
          <p className=" w-[420px] text-2xl">
            Our greatest priority is to put you and your business first. Let’s
            show you how we can help.
          </p>
        </div>
        {/* Form */}
        <div
          className=" w-[480px] h-[650px] shadow-lg bg-white -ml-20 rounded-[32px] -mt-[65px] shadow-black z-10"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <div className=" flex flex-col items-center justify-center mt-10">
            <h1 className=" font-black  text-2xl">First things first</h1>
            <p className=" font-medium text-sm w-[300px] text-center">
              We want to serve you better. Tell us a bit about yourself or
              company
            </p>
          </div>
          <div className=" flex items-center justify-between mt-7 border-2 w-[430px] mx-auto rounded-lg h-[50px]">
            <button className=" w-[180px]  h-[33px] bg-[#11453B] mx-auto rounded-lg text-white">
              Individual
            </button>
            <button className=" w-[180px] h-[33px]  bg-[#F2F1F1] mx-auto rounded-lg font-semibold">
              Company
            </button>
          </div>
          <div className=" flex flex-col justify-center items-center gap-5 mt-8">
            <input
              className=" border-[#B5B6B5] p-3 border-[1px] w-[430px] rounded-lg"
              type="text"
              placeholder="First Name"
            />
            <input
              className=" border-[#B5B6B5] p-3 border-[1px] w-[430px] rounded-lg"
              type="text"
              placeholder="Last Name"
            />
            <input
              className=" border-[#B5B6B5] p-3 border-[1px] w-[430px] rounded-lg"
              type="text"
              placeholder="Email"
            />
            <input
              className=" border-[#B5B6B5] p-3 border-[1px] w-[430px] rounded-lg"
              type="text"
              placeholder="Job Title"
            />
            <input
              className=" border-[#B5B6B5] p-3 border-[1px] w-[430px] rounded-lg"
              type="text"
              placeholder="Company Size"
            />
            <button className=" w-[430px] mt-5 bg-[#11453B] h-[50px] text-white font-semibold rounded-3xl">
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
