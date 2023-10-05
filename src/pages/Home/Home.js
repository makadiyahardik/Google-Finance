import React from "react";
import { BsArrowUpShort } from "react-icons/bs";
const Home = () => {
  const iconColor = "rgb(19, 115, 51)";
  return (
    <div className="relative " id="homes">
      <div className="w-full md:max-w-[1440px]  mx-auto mt-[4rem] md:mt-[5rem] ">
        {/* <div className="md:flex ">
        
        <div className="flex flex-col justify-center items-center mx-auto text-primary relative px-5">
          <h1 className="font-semibold  text-gray-900 text-[48px] leading-[60px] tracking-tightest">
        Graph Stack
          </h1>
          <p className="text-gray-600 mt-[2rem] text-[20px] font-normal leading-[30px] md:text-center items-center justify-center flex mx-auto  w-full md:w-[768px]">
          “Develop your senses. Especially learn to view​things. Realise that everything connects to everything else” ​​– da Vinci, 1512
          </p>
       
        </div>
      </div> */}
        <div className="w-full  mt-[6rem] md:px-[32px ]flex flex-col justify-start ">
          <div className="md:max-w-[1440xp] w-full pb-10  md:pt-[20px] md:pb-[140px] md:px-[32px] px-5 pt-10">
            <div className="flex flex-wrap justify-center items-center gap-[32px]">
              <div className="flex flex-col justify-start  items-center text-center md:max-w-[400px] p-2 bg-white border-[#DADCE0] border-[1px] rounded-md shadow-md">
                <div className="flex justify-between items-center ">
                  <div className="flex justify-center items-center">
                    <div className="bg-[#E6F4EA]  rounded-[8px] p-1">
                      <BsArrowUpShort size={24} style={{ color: iconColor }} />
                    </div>
                    <div className="flex flex-col justify-start items-start ml-2">
                      <h3 className="uppercase font-semibold text-primary text-[0.75rem] leading-[1rem] tracking-wide">
                        NIFTY 50
                      </h3>
                      <p className="leading-[1rem] tracking-wide text-[0.75rem]">
                        20,180.35
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col ml-4">
                    <div>
                      <p className="text-[#137333] font-semibold   text-[0.75rem] leading-[1rem] tracking-wide">
                        + 0.48%
                      </p>
                    </div>
                    <div>
                      <p className="text-[#137333] font-normal text-[0.75rem] leading-[1rem] tracking-wide   ">
                        + 94.75
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start  items-center text-center md:max-w-[400px] p-2 bg-white border-[#DADCE0] border-[1px] rounded-md shadow-md">
                <div className="flex justify-between items-center ">
                  <div className="flex justify-center items-center">
                    <div className="bg-[#E6F4EA]  rounded-[8px] p-1">
                      <BsArrowUpShort size={24} style={{ color: iconColor }} />
                    </div>
                    <div className="flex flex-col justify-start items-start ml-2">
                      <h3 className="uppercase font-semibold text-primary text-[0.75rem] leading-[1rem] tracking-wide">
                        sensex
                      </h3>
                      <p className=" leading-[1rem] tracking-wide text-[0.75rem]">
                        20,180.35
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col ml-4">
                    <div>
                      <p className="text-[#137333] font-semibold   text-[0.75rem] leading-[1rem] tracking-wide">
                        + 0.48%
                      </p>
                    </div>
                    <div>
                      <p className="text-[#137333] font-normal text-[0.75rem] leading-[1rem] tracking-wide   ">
                        + 94.75
                      </p>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="flex flex-col justify-start  items-center text-center md:max-w-[400px] p-2 bg-white border-[#DADCE0] border-[1px] rounded-md shadow-md">
                <div className="flex justify-between items-center ">
                  <div className="flex justify-center items-center">
                    <div className="bg-[#E6F4EA]  rounded-[8px] p-1">
                      <BsArrowUpShort size={24} style={{ color: iconColor }} />
                    </div>
                    <div className="flex flex-col justify-start items-start ml-2">
                      <h3 className=" font-semibold text-primary text-[0.75rem] leading-[1rem] tracking-wide">
                        Nifty Bank{" "}
                      </h3>
                      <p className=" leading-[1rem] tracking-wide text-[0.75rem]">
                        20,180.35
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col ml-4">
                    <div>
                      <p className="text-[#137333] font-semibold   text-[0.75rem] leading-[1rem] tracking-wide">
                        + 0.48%
                      </p>
                    </div>
                    <div>
                      <p className="text-[#137333] font-normal text-[0.75rem] leading-[1rem] tracking-wide   ">
                        + 94.75
                      </p>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="flex flex-col justify-start  items-center text-center md:max-w-[400px] p-2 bg-white border-[#DADCE0] border-[1px] rounded-md shadow-md">
                <div className="flex justify-between items-center ">
                  <div className="flex justify-center items-center">
                    <div className="bg-[#E6F4EA]  rounded-[8px] p-1">
                      <BsArrowUpShort size={24} style={{ color: iconColor }} />
                    </div>
                    <div className="flex flex-col justify-start items-start ml-2">
                      <h3 className=" font-semibold text-primary text-[0.75rem] leading-[1rem] tracking-wide">
                        Nifty IT
                      </h3>
                      <p className="leading-[1rem] tracking-wide text-[0.75rem] leading-[1rem] tracking-wide text-[0.75rem]">
                        20,180.35
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col ml-4">
                    <div>
                      <p className="text-[#137333] font-semibold   text-[0.75rem] leading-[1rem] tracking-wide">
                        + 0.48%
                      </p>
                    </div>
                    <div>
                      <p className="text-[#137333] font-normal text-[0.75rem] leading-[1rem] tracking-wide   ">
                        + 94.75
                      </p>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="flex flex-col justify-start  items-center text-center md:max-w-[400px] p-2 bg-white border-[#DADCE0] border-[1px] rounded-md shadow-md">
                <div className="flex justify-between items-center ">
                  <div className="flex justify-center items-center">
                    <div className="bg-[#E6F4EA]  rounded-[8px] p-1">
                      <BsArrowUpShort size={24} style={{ color: iconColor }} />
                    </div>
                    <div className="flex flex-col justify-start items-start ml-2">
                      <h3 className="uppercase font-semibold text-primary  text-[0.75rem] leading-[1rem] tracking-wide">
                        S&P BSE SmallCap
                      </h3>
                      <p className="leading-[1rem] tracking-wide text-[0.75rem]">
                        20,180.35
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col ml-4">
                    <div>
                      <p className="text-[#137333] font-semibold  text-[0.75rem]  leading-[1rem] tracking-wide">
                        + 0.48%
                      </p>
                    </div>
                    <div>
                      <p className="text-[#137333] font-normal text-[0.75rem] leading-[1rem] tracking-wide   ">
                        + 94.75
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
