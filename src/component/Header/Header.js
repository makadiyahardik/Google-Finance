// import Signup from "../Signup/Signup";
import React, { useState, useEffect } from "react";
import { PiDotsNineBold } from 'react-icons/pi';
function Header() {

  
  return (
    <>
      <div
        className={
          " pt-4"
        }
        >
        <div className="   w-full bg-white md:px-10 px-5 mx-auto ">
          <div className="flex  justify-between  md:items-center  ">
            <div className="flex md:hidden justify-start items-start">
            <img
                src="./assets/images/Vieu.png"
                className="h-[32px] w-[79px]  "
              />
            </div>
            <div className=" md:flex hidden gap-[12px] ">
            <div className=" text-[22px] font-medium leading-[24px]  cursor-pointer">
            <img
                src="./assets/images/google-logo.svg"
                className="h-[32px] w-[79px]  "
              />
              </div>
             

              <div className="text-[22px] font-medium leading-[24px]  cursor-pointer">
               <h1 className="pt-1 Workcursor-pointer opacity-1 font-mediu text-[#5f6368] animation-active  animation-hover inline-block relative hover:text-primary-600 duration-500 ease-linear">Finance</h1>
              </div>
              
            </div>
            <div className=" flex justify-center items-center gap-[12px] ">
            <div className="flex ">
            <PiDotsNineBold size={48} />
            </div>
              <div className="flex ">
            <img
                src="./assets/images/male_dummy_image.png"
                className="w-12 h-12 rounded-full "
              />
            </div>
              
           
          
            </div>

          
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
