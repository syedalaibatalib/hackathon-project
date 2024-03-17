



import Image from 'next/image'
import React from 'react'
import { ImHeart } from "react-icons/im";
import { MdOutlineExpandMore } from "react-icons/md";
const K8 = () => {
  return (

        <section className='bg-black'>
        <section className="text-black  bg-green-400 body-font rounded-full overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex  justify-center flex-wrap">
      <Image
        className="lg:w-1/3 w-full lg:h-auto h-70 object-cover object-center rounded-full"
        src ={require('../../../public/picture/kc8.webp')}
          alt= "logo"
          width={500}
          height={200}>

          </Image>
    
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6  mt-6 lg:mt-0">
        <h2 className="text-xl capitalize title-font mb-1 text-black tracking-widest">
        kaneez pret-collection
        </h2>
        <h1 className="text-black text-3xl title-font mb-1  capitalize font-bold">
        
        black prince suit

        </h1>
        
        <p className="leading-relaxed capitalize">
        kidz-wear    
        </p> 
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div className="flex">
            <span className="mr-3">Color</span>
            <button className="border-2 border-red-800   bg-red-700 rounded-full w-6 h-6 focus:outline-none" />
            <button className="border-2 border-rose-700 ml-1 bg-rose-700 rounded-full w-6 h-6 focus:outline-none" />
            <button className="border-2 border-blue-700 ml-1 bg-blue-700 rounded-full w-6 h-6 focus:outline-none" />
            <button className="border-2 border-purple-700 ml-1 bg-purple-700 rounded-full w-6 h-6 focus:outline-none" />
          </div>
          <div className="flex ml-6 items-center">
            <span className="mr-3">Size </span>
            <div className="relative ">
              <select className="rounded border appearance-none  bg-green-900 border-green-300 py-2 focus:outline-none focus:ring-2 focus:ring-green-900
               focus:border-green-500 text-base pl-3 pr-10">
                <option>SM <MdOutlineExpandMore/></option>
                <option>M <MdOutlineExpandMore /></option>
                <option>L <MdOutlineExpandMore /></option>
                <option>XL <MdOutlineExpandMore /></option>
              </select>
              
            </div>
          </div>
        </div>
        <div className="flex">
          <span className="title-font font-bold  text-3xl text-gray-900">
            Rs: 6k
          </span>
          <button className="flex ml-auto text-xl font-semibold text-black capitalize bg-green-900 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">
            add to cart
          </button>
          
        </div>
        <button className="flex items-center justify-center w-full mt-10 rounded-full text-xl font-semibold text-black capitalize
         bg-green-800 border-0 py-2 px-6  focus:outline-none hover:bg-green-600">
            buy me   <ImHeart className='text-red-900 justify-item'  />
          </button>
          

      </div>
    </div>
  </div>
</section>

</section>
        
         

  )
}

export default K8