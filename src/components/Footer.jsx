import React from "react";

const Footer = () => {
  return (
    <div className=" border-t-[1px] border-t-black  mt-56 h-[250px] flex items-center justify-center gap-24 ">
      <div className=" flex flex-col gap-10 mt-6 ">
        <img
          src="/assets/logo2.png"
          alt=""
          className=" w-[60%] cursor-pointer"
        />
        <div className=" flex flex-col gap-2">
          <p>Copyright © 2023 Eazipay.</p>
          <p>All rights reserved</p>
        </div>
        <div className="flex gap-3">
          <img src="/assets/instagram.png" alt="" className=" cursor-pointer" />
          <img src="/assets/twitter.png" alt="" className=" cursor-pointer" />
          <img src="/assets/linkedin.png" alt="" className=" cursor-pointer" />
          <img src="/assets/facebook.png" alt="" className=" cursor-pointer" />
        </div>
      </div>
      <div>
        <h1 className=" text-lg font-extrabold">Product</h1>
        <div className=" text-[#7C7C7C] mt-4 flex flex-col gap-2">
          <p>Individual</p>
          <p>Businesses</p>
          <p>Request Demo</p>
          <p>pricing</p>
        </div>
      </div>
      <div>
        <h1 className=" text-lg font-extrabold">Legal</h1>
        <div className=" text-[#7C7C7C] mt-4 flex flex-col gap-2">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
      <div>
        <h1 className=" text-lg font-extrabold">Resources</h1>
        <div className=" text-[#7C7C7C] mt-4 flex flex-col gap-2">
          <p>FAQs</p>
          <p>Blog</p>
          <p>Career</p>
          <p>Customer Stories</p>
        </div>
      </div>
      <div>
        <h1 className=" text-lg font-extrabold">Contact Us</h1>
        <div className=" text-[#7C7C7C] mt-4 flex flex-col gap-5">
          <div className="flex flex-col gap-2 ">
            <p>eazipay@gmail.com</p>
            <p>+234 816 878 9518</p>
          </div>
          <input
            type="text"
            placeholder="Your email address"
            className=" w-[260px] bg-[#F2F1F1] p-2 rounded-3xl px-2 placeholder:text-black placeholder:text-sm placeholder:pl-3"
          />
          <img
            src="/assets/sendicon.png"
            alt=""
            className="absolute mt-[76px] ml-[210px] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
