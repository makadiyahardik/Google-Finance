import React from 'react'

const Modal = ({closeModal,isOpenPortfolio}) => {
  return (
    <div>
{" "}
<div className="bg-black bg-opacity-50 fixed inset-0 z-50  w-full h-full  flex justify-center items-center px-1">
  <div className="bg-white max-w-sm md:max-w-md py-6 px-8 w-full rounded-2xl shadow-xl text-gray-800">
    <div className="flex justify-between items-center">
      <h4 className="text-lg font-semibold  text-primaryblack-900 flex items-center justify-center text-center" > {isOpenPortfolio ? "Create a new portfolio":"Create a new list"}</h4>
    
    </div>
    <div className="relative mt-10">
  <input
    type="text"
    id="floating_outlined"
    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-300 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#0043ee] peer"
    placeholder=" "
  />
  <label
    htmlFor="floating_outlined"
    className="absolute text-sm text-gray-500 dark:text-[#0043ee] text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-[#0043ee] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
  >
   {isOpenPortfolio ? "Portfolio Name":"List Name"}
  </label>
</div>



    <div className='flex justify-end mt-4 space-x-2'>
<div>    <button className='text-[#0043ee]  rounded-md font-medium text-[0.87rem] p-4 'onClick={closeModal}>Cancel</button></div>
<div>    <button className='p-4 bg-[#3C404331] font-medium rounded-md'>Save</button></div>

  </div>
  </div>

  
</div>
</div>
  )
}

export default Modal