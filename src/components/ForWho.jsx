import React, { useState } from "react";

const ForWho = () => {
  const [hoveredCard, setHoveredCard] = useState(2);

  const handleCardHover = (index) => {
    setHoveredCard(index);
  };

  const handleCardLeave = () => {
    setHoveredCard(2);
  };

  return (
    <div
      className="h-screen flex md:flex-col  bg-[#F0F7EB] md:items-center  justify-start  md:gap-20"
      style={{
        backgroundImage: "url('/assets/patterns.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col justify-center items-center mt-20">
        <h1
          className="text-[#11453B] md:text-[50px] font-black"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          For Individuals and Businesses
        </h1>
        <p>Join 200+ businesses using Eazipay's easy solution.</p>
      </div>
      <div className="flex absolute -left-20 -bottom-[350px]">
        {/* InfoCard 3 */}
        <div
          className={`bg-[#b9c77f] w-[550px] h-[240px] rounded-lg text-white flex md:flex-col items-start justify-center md:gap-5 absolute md:left-[800px] ${
            hoveredCard === 2 ? "z-[2] scale-[1.02]" : "z-[1] scale-[1]"
          } transition-all duration-500`}
          onMouseEnter={() => handleCardHover(2)}
          onMouseLeave={handleCardLeave}
        >
          <h1 className="md:ml-10 font-bold">Payroll in Seconds</h1>
          <div
            style={{ fontFamily: "Poppins, sans-serif" }}
            className="font-serif font-thin text-sm md:ml-10 flex flex-col gap-2"
          >
            <p>Never again will you spend more than 2 minutes on payroll.</p>
            <p>Just click on your staff and bulk-pay them at once.</p>
            <p>Payment is done permanently.</p>
          </div>
        </div>

        {/* InfoCard 1 */}
        <div
          className={`bg-red-500 w-[550px] h-[240px] rounded-lg text-white flex md:flex-col items-start justify-center md:gap-5 md:left-36 absolute ${
            hoveredCard === 0 ? "z-[2] scale-[1.02]" : "z-[1] scale-[1]"
          } transition-all duration-500`}
          onMouseEnter={() => handleCardHover(0)}
          onMouseLeave={handleCardLeave}
        >
          <h1 className="md:ml-10 font-bold">Tamper-proof Payroll for Life</h1>
          <div
            style={{ fontFamily: "Poppins, sans-serif" }}
            className="font-serif font-thin text-sm md:ml-10 flex flex-col gap-2"
          >
            <p>Your staff payroll history is kept in one place forever.</p>
            <p>No more excel sheet or manual records.</p>
            <p>Download your payroll history anytime you need it.</p>
          </div>
        </div>

        {/* InfoCard 2 */}
        <div
          className={`bg-[#11453B] w-[550px] h-[240px] rounded-lg text-white flex md:flex-col items-start justify-center md:gap-5 absolute md:left-[480px] ${
            hoveredCard === 1 ? "z-[2] scale-[1.02]" : "z-[1] scale-[1]"
          } transition-all duration-500`}
          onMouseEnter={() => handleCardHover(1)}
          onMouseLeave={handleCardLeave}
        >
          <h1 className="md:ml-10 font-bold">All Payroll, Anytime Anywhere</h1>
          <div
            style={{ fontFamily: "Poppins, sans-serif" }}
            className="font-serif font-thin text-sm md:ml-10 flex flex-col gap-2"
          >
            <p>
              Wherever you are Eazipay has got you covered on ALL your Payroll
              tasks.
            </p>
            <p>
              Whether it is Taxes, Pension insurances HMOs, trustfunds, Eazipay
              handle all your compliances in one place and easily, in seconds!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForWho;
