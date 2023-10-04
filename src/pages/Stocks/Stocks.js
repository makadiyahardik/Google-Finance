import React, { useState } from "react";
import { BsArrowUpShort } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineBars } from "react-icons/ai";


import Modal from "@/component/Modal/Modal";

const Stocks = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenPortfolio, setIsOpenPortfolio] = useState(false)
  const [isOpenWatchlist, setIsOpenWatchlist] = useState(false)



  const openModalforPortfolio = ()=>{
    setIsOpen(true)
    setIsOpenPortfolio(true)
    setIsOpenWatchlist(false)
  }
  const closeModal = ()=>{
    setIsOpen(false)
  }
  const openModalforWatchlist = ()=>{
    setIsOpen(true)
    setIsOpenPortfolio(false)
    setIsOpenWatchlist(true)
  }
  
  const iconColor = "rgb(19, 115, 51)";
  return (
    <div className="relative " id="homes">
      <div className="w-full md:max-w-[1440px]  mx-auto mt-[4rem] md:mt-[5rem] ">
        {/* <div className="md:flex ">
        
        <div className="flex flex-col justify-center items-center mx-auto text-primary relative px-5">
    SEARCH ICONS HERE
        </div>
      </div> */}

        <div className="flex justify-center   px-3 md:px-[32px]">
          <div className="  w-full ">
            <section className="flex flex-col justify-center antialiased bg-gray-100 text-gray-600 ">
              <div className="h-full">
                {/* Table */}
                <div className="w-full max-w-2xl mx-auto bg-white ">
                  <header className="px-5 ">
                    <h2 className="font-semibold text-gray-800">
                      You may be interested in
                    </h2>
                  </header>
                  <div className="p-3 ">

                    <div className="overflow-x-auto">
                      <table className="table-auto w-full">
                        <tbody className="text-sm px-10">
                          <tr className="border-b-[1px] border-[#DADCE0] ">
                            <td className="p-2 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 mr-2 sm:mr-3">
                                  {/* <img
                          className="rounded-full"
                          src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                          width={40}
                          height={40}
                          alt="Alex Shatov"
                        /> */}
                                  <div className="bg-[#2962ff] text-white p-2  font-normal text-[0.75rem] leading-[1rem] tracking-wide ">
                                    Yes Bank{" "}
                                  </div>
                                </div>
                                <div className="font-medium text-gray-800">
                                  Alex Shatov
                                </div>
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-left">
                                alexshatov@gmail.com
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-left font-medium text-green-500">
                                $2,890.66
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-lg text-center">🇺🇸</div>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-2 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 mr-2 sm:mr-3">
                                  {/* <img
                          className="rounded-full"
                          src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                          width={40}
                          height={40}
                          alt="Alex Shatov"
                        /> */}
                                  <div className="bg-[#2962ff] text-white p-2  font-normal text-[0.75rem] leading-[1rem] tracking-wide ">
                                    Yes Bank{" "}
                                  </div>
                                </div>
                                <div className="font-medium text-gray-800">
                                  Alex Shatov
                                </div>
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-left">
                                alexshatov@gmail.com
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-left font-medium text-green-500">
                                $2,890.66
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-lg text-center">🇺🇸</div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="flex justify-start items-center">  
                  </div>
                  <div className="mt-3 ml-3"><p>YOUR LISTS</p></div>
                  <div className="flex justify-start items-center"> 


                     <div className="rounded-md mx-4 hover:shadow-lg flex justify-start cuorser-pointer items-center mt-3 text-[#202124 ]  w-[190px] p-2 bg-white border-[#DADCE0] border-[1px]" onClick={()=>openModal()}>
              <AiOutlineBars size={24}  />   <button className="mx-2 text-[0.875rem]  font-medium leading-[1.25rem] text-[#202124]">Watchlist</button> <span className="ml-10">0</span>
              </div>
              <div className="rounded-full flex justify-center cuorser-pointer items-center mt-3 text-[#0043ee]  p-2 bg-white " onClick={()=>openModalforWatchlist()}>
              <AiOutlinePlus size={24}  />   <button className="mx-2">New List</button>
              </div>
              </div>
           
              </div>
                </div>
              </div>
            </section>
          </div>
          <div className="w-full md:w-3/5 lg:2/5 mt-4  bg-white">
            <div className="flex flex-col justify-center  items-center text-center md:max-w-[400px] p-2 bg-white border-[#DADCE0] border-[1px] rounded-md ">
              <div className="flex flex-col justify-start items-start">
                <div className="flex justify-start items-center">
                  <div className="bg-[#E6F4EA]  rounded-[8px] p-1">
                    <BsArrowUpShort size={24} style={{ color: iconColor }} />
                  </div>
                  <div className="mx-4">
                    {" "}
                    <p className=" leading-[1rem] tracking-wide text-[0.75rem]">
                    Create a portfolio to view your investments in one place
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-full flex justify-center cuorser-pointer items-center mt-3 text-[#0043ee] w-full p-2 bg-white border-[#DADCE0] border-[1px]" onClick={()=>openModalforPortfolio()}>
              <AiOutlinePlus size={24}  />   <button className="mx-2">New portfolio</button>
              </div>
            </div>{" "}
          </div>
         
        </div>
      </div>

      {isOpen &&   <Modal closeModal={closeModal} isOpenPortfolio={isOpenPortfolio}/>}
    
    </div>
  );
};

export default Stocks;
