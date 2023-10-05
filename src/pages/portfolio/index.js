import Header from '@/component/Header/Header';
import React, { useState } from 'react';
import { AiOutlineBars, AiOutlinePlus } from 'react-icons/ai';
const index = () => {
const [isEmpty,setIsEmty]=useState(false)

 const handelEmpty = ()=>{
  setIsEmty(true)
 }
  return (
    <div>
      <Header />
      <div className="relative " id="homes">
        <div className="w-full md:max-w-[1440px]  mx-auto mt-10">
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
          <div className="w-full m  md:px-[32px ]flex flex-col justify-start bg-[#F8F9FA] items-center">
            <div className="md:max-w-[1440xp] w-full pb-10  md:pt-[20px]  md:px-[32px] px-5 pt-10">
              <div className="flex flex-wrap justify-center items-center gap-[32px]">
                <div className="rounded-md mx-4 hover:shadow-lg flex justify-start cuorser-pointer items-center mt-3 text-[#202124 ]  w-[190px] p-2 bg-white border-[#DADCE0] border-[1px]">
                  <AiOutlineBars size={24} />{' '}
                  <button className="mx-2 text-[0.875rem]  font-medium leading-[1.25rem] text-[#202124]">
                    Watchlist
                  </button>{' '}
                  <span className="ml-10">0</span>
                </div>
                <div className="rounded-md mx-4 hover:shadow-lg flex justify-start cuorser-pointer items-center mt-3 text-[#202124 ]  w-[190px] p-2 bg-white border-[#DADCE0] border-[1px]">
                  <AiOutlineBars size={24} />{' '}
                  <button className="mx-2 text-[0.875rem]  font-medium leading-[1.25rem] text-[#202124]">
                    dummy
                  </button>{' '}
                  <span className="ml-10">0</span>
                </div>
                <div className="rounded-md mx-4 hover:shadow-lg flex justify-start cuorser-pointer items-center mt-3 text-[#202124 ]  w-[190px] p-2 bg-white border-[#DADCE0] border-[1px]">
                  <AiOutlineBars size={24} />{' '}
                  <button className="mx-2 text-[0.875rem]  font-medium leading-[1.25rem] text-[#202124]">
                    test
                  </button>{' '}
                  <span className="ml-10">0</span>
                </div>
                <div className="rounded-md mx-4 hover:shadow-lg flex justify-start cuorser-pointer items-center mt-3 text-[#202124 ]  w-[190px] p-2 bg-white
                 border-[#DADCE0] border-[1px] cursor-pointer "onClick={()=>handelEmpty()}>
                  <AiOutlineBars size={24} />{' '}
                  <button className="mx-2 text-[0.875rem]  font-medium leading-[1.25rem] text-[#202124]">
                    empty
                  </button>{' '}
                  <span className="ml-10">0</span>
                </div>
                <div className="rounded-full flex justify-center cuorser-pointer font-semibold items-center mt-3 text-[#0043ee]  p-2  ">
                  <AiOutlinePlus size={24} />{' '}
                  <button className="mx-2 ">New List</button>
                </div>
              </div>
            </div>
          </div>
          {isEmpty && <div className='flex justify-center items-center w-full mx-auto flex-col mt-[6rem]'>
            <div>   
              <img
                src="./assets/images/bundles_empty_state.svg"
                className=" "
              />
              </div>

              <div className='flex flex-col justify-center items-center mt-2'>
                <h1 className='mt-2 leading-[1.5rem] tracking-wide font-medium text-[#3C4043] text-[1rem]'>Nothing in this watchlist yet</h1>
                <h1 className='mt-2 leading-[1.5rem] tracking-wide font-medium text-[#80868B] text-[0.875rem]'>Track investments you care about here</h1>
                <div className="rounded-full text-[0.875rem] flex justify-center cuorser-pointer font-medium  items-center mt-3 text-[#0043ee]  p-2  ">
                  <AiOutlinePlus size={24} />{' '}
                  <button className="mx-2 ">Add Investments</button>
                </div>
              </div>
          </div>}
         
        </div>
      </div>
    </div>
  );
};

export default index;
