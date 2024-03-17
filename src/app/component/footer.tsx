import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='bg-black text-white'><footer className=" font-bold">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap md:text-left text-center order-first">
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-bold  tracking-widest text-xl mb-3">COMPANEY</h2>
          <nav className="list-none mb-10">
            <li>
              <a className=" hover:text-gray-800">About</a>
            </li>
            <li>
              <a className=" hover:text-gray-800">Terms of Use</a>
            </li>
            <li>
              <a className=" hover:text-gray-800">Privacy Policy</a>
            </li>
            <li>
              <a className=" hover:text-gray-800">How it Works</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4"> 
          <h2 className="title-font font-bold tracking-widest text-xl mb-3">CATEGORIES</h2>
          <nav className="list-none mb-10">
            <li>
              <a className=" hover:text-gray-800">Women</a>
            </li>
            <li>
              <a className=" hover:text-gray-800"> Men</a>
            </li>
            <li>
              <a className=" hover:text-gray-800">Kids</a>
            </li>
            
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-bold tracking-widest text-xl mb-3">CONTACT</h2>
          <nav className="list-none mb-10">
            <li>
              <a className=" hover:text-gray-800">Whatsapp</a>
            </li>
            <li>
              <a className=" hover:text-gray-800">Support 24h</a>
            </li>
            
          </nav>
        </div>
        
      </div>
      <p className="text-base  text-white leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mt-6 border-l-2 pl-6 italic ">
        A tapestry of tradition woven with threads of elegance. Each garment whispers tales of cultural grace, 
      adorned with colors that dance like poetry and patterns that echo centuries of craftsmanship. In the folds 
      of these fabrics, the soul of the East finds expression, a timeless journey through the artistry of attire.</p>
    </div>
    
      <div className="container px-5 py-6 mx-auto flex items-center  bg-black sm:flex-row flex-col">
      <Image src ={"/picture/logo2.png"} alt ="logo"
        width={100}
        height={180}>

        </Image>
          <span className="ml-3 text-xl text-ellipsis text-emerald-900 ">Libbas</span>
        </div>

        <div className="bg-black">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-emerald-900 text-sm text-center sm:text-left"> Copyright © 2024 Libbas_
      </p>
      <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center
       text-emerald-900 text-sm">Code By: SyEda_LaiBa</span>
     
    </div>
        

      </div>

  </footer></div>
  )
  }

export default Footer