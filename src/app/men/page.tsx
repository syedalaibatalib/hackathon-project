import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Men = () => {
  return (
    <div className='mb-[100px] '> 
    <section className=' body-font rounded-half overflow-hidden'>
{ /*1st row*/}
<section className="text-gray-600 body-font ">
  <div className="container px-5 py-10  mt-[50px] mx-auto">
    <div className="flex flex-wrap -m-4">
      {/*pic 1 */}
      <div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
         {/*LINK*/}
         <Link href={"/m1"}>
         <Image 
          src ={require('../../../public/picture/mc1.webp')}
          alt= "logo"
          width={500}
          height={200}>

          </Image>
          </Link>
          <div className="mt-4">
  <h3 className="text-black   capitalize tracking-widest title-font text-1xl ml-1  mb-1">
    formal-wear
  </h3>
  <h2 className="text-gray-900 text-1xl capitalize  ml-1 font-medium">
    black self printed kurta
  </h2>
  <p className="mt-1 text-xl ml-1 font-semibold text-black">Rs:8k</p>
</div>

        </div>
      </div>
       {/*pic 2 */}
       <div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <Link href={"/m2"}>
          <Image 
          src ={require('../../../public/picture/mc2.webp')}
          alt= "logo"
          width={500}
          height={200}>

          </Image>
          </Link>
          <div className="mt-4">
  <h3 className="text-black   capitalize tracking-widest title-font text-1xl   ml-1 mb-1">
    kurta(1-peice)
  </h3>
  <h2 className="text-gray-900 text-1xl capitalize  ml-1 font-medium">
    dull-golden self embroided kurta 
  </h2>
  <p className="mt-1 text-xl ml-1 font-semibold text-black">Rs:6k</p>
</div>

        </div>
      </div>
      {/*pic 3 */}
      <div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <Link href={"/m3"}>
          <Image 
          src ={require('../../../public/picture/mc3.webp')}
          alt= "logo"
          width={500}
          height={200}>

          </Image>
          </Link>
          <div className="mt-4">
  <h3 className="text-black  ml-1 capitalize tracking-widest title-font text-1xl  mb-1">
    casual_wearing
  </h3>
  <h2 className="text-gray-900 ml-1 text-1xl capitalize  font-medium">
    plane cotton kurta set
  </h2>
  <p className="mt-1 text-xl  ml-1 font-semibold text-black">Rs:4k</p>
</div>

        </div>
      </div>

{/*pic 4 */}
<div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
         {/*LINK*/}
         <Link href={"/m4"}>
          <Image 
          src ={require('../../../public/picture/mc12.webp')}
          alt= "logo"
          width={500}
          height={200}>

          </Image>
          </Link>
          <div className="mt-4">
  <h3 className="text-black ml-1  capitalize tracking-widest title-font text-1xl  mb-1">
    gam-mens wear
  </h3>
  <h2 className="text-gray-900 ml-1 text-1xl capitalize  font-medium">
    casual coat
  </h2>
  <p className="mt-1 text-xl  ml-1 font-semibold text-black">Rs:6500</p>
</div>

        </div>
      </div>

    </div>
  </div>
</section>


{ /*2nd row*/}
<section className="text-gray-600 body-font ">
  <div className="container px-5 py-10  mt-[50px] mx-auto">
    <div className="flex flex-wrap -m-4">
      {/*pic 1 */}
      <div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          {/*LINK*/}
         <Link href={"/m5"}>
          <Image 
          src ={require('../../../public/picture/mc4.webp')}
          alt= "logo"
          width={500}
          height={200}>

          </Image>
          </Link>
          <div className="mt-4">
  <h3 className="text-black ml-1  capitalize tracking-widest title-font text-1xl  mb-1">
    formal-wear
  </h3>
  <h2 className="text-gray-900 ml-1 text-1xl capitalize  font-medium">
    flake golden prince-coat
  </h2>
  <p className="mt-1 text-xl  ml-1 font-semibold text-black">Rs:6549</p>
</div>

        </div>
      </div>
       {/*pic 2 */}
       <div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          {/*LINK*/}
         <Link href={"/m6"}>
          <Image 
          src ={require('../../../public/picture/mc5.webp')}
          alt= "logo"
          width={500}
          height={200}>

          </Image>
          </Link>
          <div className="mt-4">
  <h3 className="text-black ml-1  capitalize tracking-widest title-font text-1xl  mb-1">
    kurta(2-peice)set
  </h3>
  <h2 className="text-gray-900  ml-1 text-1xl capitalize  font-medium">
    snow forest set with blue wasket
  </h2>
  <p className="mt-1 text-xl ml-1 font-semibold text-black">Rs:10200</p>
</div>

        </div>
      </div>
      {/*pic 3 */}
      <div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
         {/*LINK*/}
         <Link href={"/m7"}>
          <Image
          src ={require('../../../public/picture/mc6.webp')}
          alt= "logo"
          width={500}
          height={200}>

          </Image>
          </Link>
          <div className="mt-4">
  <h3 className="text-black ml-1   capitalize tracking-widest title-font text-1xl  mb-1">
    casual_wearing
  </h3>
  <h2 className="text-gray-900 ml-1 text-1xl capitalize  font-medium">
    bargandi shalwar kameez
  </h2>
  <p className="mt-1 text-xl ml-1 font-semibold text-black">Rs:7899</p>
</div>

        </div>
      </div>


{/*pic 4 */}
<div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          {/*LINK*/}
         <Link href={"/m8"}>
          <Image 
          src ={require('../../../public/picture/mc13.webp')}
          alt= "logo"
          width={500}
          height={200}>

          </Image>
          </Link>
          <div className="mt-4">
  <h3 className="text-black ml-1  capitalize tracking-widest title-font text-1xl  mb-1">
    gam-mens wear
  </h3>
  <h2 className="text-gray-900 ml-1 text-1xl capitalize  font-medium">
    kurta set
  </h2>
  <p className="mt-1 text-xl  ml-1 font-semibold text-black">Rs:7800</p>
</div>

        </div>
      </div>

    </div>
  </div>
</section>

{ /*3rd  row*/}
<section className="text-gray-600 body-font ">
  <div className="container px-5 py-10  mt-[50px] mx-auto">
    <div className="flex flex-wrap -m-4">
      {/*pic 1 */}
      <div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          {/*LINK*/}
         <Link href={"/m9"}>
          <Image 
          src ={require('../../../public/picture/mc7.webp')}
          alt= "logo"
          width={500}
          height={200}>

          </Image>
          </Link>
          <div className="mt-4">
  <h3 className="text-black ml-1  capitalize tracking-widest title-font text-1xl  mb-1">
    prince coat 
  </h3>
  <h2 className="text-gray-900 ml-1 text-1xl capitalize  font-medium">
  Sequence Green Prince Coat 
  </h2>
  <p className="mt-1 text-xl ml-1 font-semibold text-black">Rs:14600</p>
</div>

        </div>
      </div>
       {/*pic 2 */}
       <div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
         {/*LINK*/}
         <Link href={"/m10"}>
          <Image 
          src ={require('../../../public/picture/mc10.webp')}
          alt= "logo"
          width={500}
          height={200}>

          </Image>
          </Link>
          <div className="mt-4">
  <h3 className="text-black  ml-1 capitalize tracking-widest title-font text-1xl  mb-1">
    wasket
  </h3>
  <h2 className="text-gray-900 ml-1 text-1xl capitalize  font-medium">
    mehroon embroided tradition set
  </h2>
  <p className="mt-1 text-xl ml-1 font-semibold text-black">Rs:4599</p>
</div>

        </div>
      </div>
      {/*pic 3 */}
      <div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
         {/*LINK*/}
         <Link href={"/m11"}>
          <Image 
          src ={require('../../../public/picture/mc11.webp')}
          alt= "logo"
          width={500}
          height={200}>

          </Image>
          </Link>
          <div className="mt-4">
  <h3 className="text-black  ml-1 capitalize tracking-widest title-font text-1xl  mb-1">
    formal-wear
  </h3>
  <h2 className="text-gray-900 ml-1 text-1xl capitalize  font-medium">
    green gray prince suit
  </h2>
  <p className="mt-1 text-xl  ml-1 font-semibold text-black">Rs:18999</p>
</div>

        </div>
      </div>


{/*pic 4 */}
<div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
         {/*LINK*/}
         <Link href={"/m12"}>
          <Image 
          src ={require('../../../public/picture/mc14.webp')}
          alt= "logo"
          width={500}
          height={200}>

          </Image>
          </Link>
          <div className="mt-4">
  <h3 className="text-black ml-1  capitalize tracking-widest title-font text-1xl  mb-1">
    gam-mens wear
  </h3>
  <h2 className="text-gray-900 ml-1 text-1xl capitalize  font-medium">
    kurta set
  </h2>
  <p className="mt-1 text-xl  ml-1 font-semibold text-black">Rs:6k</p>
</div>

        </div>
      </div>

    </div>
  </div>
</section>
</section>

    </div>
  )
}

export default Men