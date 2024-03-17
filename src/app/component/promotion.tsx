import React from 'react'

export const Promotion = () => {
  return (
    <div className='mb-[100px] ml-[100px] mr-[100px]'>
        {/*heading */}
        <div className="text-center ">
    <h1 className=" title-font capitalize text-green-900 mb-0scroll-m-20  font-extrabold tracking-tight lg:text-5xl">
      promotions
    </h1>
    
      <div className="w-16 h-1 rounded-full bg-green-900 inline-flex" />
    </div>


{/*promotiion start here */}
<div>
<section className="text-black body-font">
  <div className="container h-[25rem]  border-spacing-1 px-5 py-12 mx-auto">
    <div className="flex flex-wrap -m-4">
        {/*first pic */}
      <div className="p-4 lg:w-1/3 promo-1">
        <div className=" px-8 pt-16 pb-24 bg-opacity-60 rounded-lg overflow-hidden text-center relative">
          
          <h1 className="title-font sm:text-2xl text-xl font-bold uppercase text-gray-900 mb-3">
            get upto  <span className='text-emerald-900'>40%</span> off
          </h1>
          <p className="leading-relaxed text-pretty text-xl  capitalize mb-3">
            Flash sale, get upto 40% off on the season varient
          </p>
         
            
          
        </div>
      </div>
      {/*2nd pic */}
      <div className="p-4 lg:w-1/3 c1">
        <div className=" px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
        
          <h1 className="title-font uppercase sm:text-2xl text-2xl font-bold text-gray-900 mb-3">
          get upto  <span className='text-amber-400'>60%</span> off
          </h1>
          <p className="leading-relaxed  text-xl capitalize mb-3">
          Flash sale, get upto 60% off on the season varient
          </p>
         
          
        </div>
      </div>
      {/*3rd pic */}
      <div className="p-4 lg:w-1/3 m1">
        <div className="h-full px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          
          <h1 className="title-font uppercase sm:text-2xl text-2xl font-bold  text-gray-900 mb-3">
          get upto  <span className='text-emerald-800'>50%</span> off
          </h1>
          <p className="leading-relaxed capitalize text-xl  mb-3">
          Flash sale, get upto 50% off on the season varient
          </p>
          
          
        </div>
      </div>
    </div>
  </div>
</section>


</div>








  </div>
  )
}
