import React from "react";

const Navbar = () => {
  return (
    <div className="flex md:justify-center md:gap-20  md:items-center md:mt-5">
      <img src="/assets/eazipaylogo.png" alt="Eazi Pay" />
      <div className="flex md:gap-10 font-semibold">
        <span>Indivdual</span>
        <span>Business</span>
        <span>Pricing</span>
        <span>Set your payroll</span>
      </div>
      <div className="flex md:gap-8 font-light">
        <button className="border-[1px] text-[#11453B] transition-all duration-300 ease-in-out transform  hover:text-white font-light hover:bg-[#11453B] border-[#11453B] md:w-48 md:h-12 rounded-3xl">
          Login
        </button>
        <button className="bg-[#11453B] transition-all duration-300 ease-in-out transform  hover:bg-white font-light hover:border-[#11453B] hover:border-[1px] hover:text-[#11453B] text-white  md:w-48 md:h-12 rounded-3xl">
          Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;
