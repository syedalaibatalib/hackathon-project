import Link from 'next/link'
import { Input } from "@/components/ui/input"
import React from 'react'
import Image from 'next/image'
import { FaCartShopping } from "react-icons/fa6";
const Page = () => {
  return (
    <div>
    
    <header className="text-gray-600 body-font">
      <div className="p-5 flex justify-between items-center bg-black text-white">
        
        <div className="md:ml-auto md:mr-auto flex flex-wrap items-center gap-5 justify-center">
        <Image src ={"/picture/logo2.png"} alt ="logo"
        width={100}
        height={180}></Image>
          <Link  href="/" className='font-bold  text-2xl mr-5 hover:text-emerald-900'>Home</Link>
          <Link  href="/men" className='font-bold text-2xl mr-5 hover:text-emerald-900'>Men</Link>
          <Link href="/women" className='font-bold text-2xl  mr-5 hover:text-emerald-900'>Women</Link>
          <Link href="/kids" className="mr-5 font-bold text-2xl hover:text-emerald-900">Kids</Link>
          <Link href="/allproduct" className="mr-5 text-2xl font-bold hover:text-emerald-900">All_Product</Link>
      
        <div> <Input placeholder='search product' className='text-emerald-900' /></div>
       
        <div className='w-10 h-10 rounded-full bg-green-950 flex justify-center   items-center relative'>
          <div className='h-4 w-4  rounded-full flex justify-center items-center absolute bg-red-600 top-0 right-0'>
            <p className='text-white text-xs'>0</p></div> <FaCartShopping /></div>
        </div>
        </div>
    </header>
    </div>
  )
}

export default Page



