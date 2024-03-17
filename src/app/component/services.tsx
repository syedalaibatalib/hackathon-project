import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { FcCustomerSupport } from "react-icons/fc";
import { TbMoneybag } from "react-icons/tb"
export const Services = () => {
  return (
    <div className="container px-5 mb-[100px]">
      <div className="text-center mb-20">
        <h1 className="title-font capitalize text-green-900 mb-0scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl">
          Services
        </h1>
        <p className="text-xl  mt-2 text-white leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto ">
        "Providing exceptional services is paramount in fostering customer satisfaction, building trust, and ensuring long-term success in  business."
           .</p>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-green-900 inline-flex" />
        </div>
      </div>
      <div className="flex justify-center items-center marker:flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div className=" group p-4 md:w-1/3 flex flex-col text-center items-center">
    
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div >
          <TbTruckDelivery className='w-[60px] h-[70px] bg-green-900'/>
          </div>
          <div className="flex-grow">
            <h2 className="text-green-900 group-hover:text-green-400 duration-3000 font-bold text-lg scroll-m-20 tracking-tight title-font  mb-2 capitalize">
              free delivery
            </h2>
            
          </div>
        </div>
        
          
          
        </div>
        </div>
        
        <div className=" group flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        <div className="p-4 md:w-1/3 flex flex-col  justify-between">
          <div >
          <FcCustomerSupport className='w-[60px] h-[70px] '/>
          </div>
          <div className="flex-grow">
            <h2 className="text-green-900 group-hover:text-green-400 duration-3000 font-bold text-lg title-font  mb-3 capitalize">
             24/7 coustomer services
            </h2> 
            
          </div>
        </div>   
        </div>

       
      
    </div>
    </div>

  )
}
