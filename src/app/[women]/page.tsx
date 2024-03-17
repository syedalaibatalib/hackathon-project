import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Women = () => {
  return (
    <div className='mb-[100px] '>
{/*1st row*/}
<section className="text-gray-600 body-font ">
  <div className="container px-5 py-10  mt-[50px] mx-auto">
    <div className="flex flex-wrap -m-4">
      {/*pic 1 */}
      <div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
         {/*LINK*/}
          <Link href={"/p1"}>
          <Image 
          src ={require('../../../public/picture/fc7.webp')}
          alt= "logo"
          width={500}
          height={200}>
          </Image>
          </Link>
          <div className="mt-4">
  <h3 className="text-black   capitalize ml-1 tracking-widest title-font text-1xl  mb-1">
    frock
  </h3>
  <h2 className="text-gray-900 text-1xl  ml-1  capitalize  font-medium">
    embroided eastra open-style
  </h2>
  <p className="mt-1 text-xl  ml-1 font-semibold text-black">Rs:20k</p>
</div>

        </div>
      </div>
       {/*pic 2 */}
       <div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <Link href={"/p2"}>
          <Image 
          src ={require('../../../public/picture/fc1.webp')}
          alt= "logo"
          width={500}
          height={200}>

          </Image>
          </Link>
          <div className="mt-4">
  <h3 className="text-black   ml-1  capitalize tracking-widest title-font text-1xl  mb-1">
    frock
  </h3>
  <h2 className="text-gray-900  ml-1  text-1xl capitalize  font-medium">
    meraki silk-peshwas
  </h2>
  <p className="mt-1 text-xl  ml-1 font-semibold text-black">Rs:13k</p>
</div>

        </div>
      </div>
      {/*pic 3 */}
      <div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          {/*LINK*/}
          <Link href={"/p3"}>
          <Image 
          src ={require('../../../public/picture/fc5.webp')}
          alt= "logo"
          width={500}
          height={200}>

          </Image>
          </Link>
          <div className="mt-4">
  <h3 className="text-black  ml-1   capitalize tracking-widest title-font text-1xl  mb-1">
    frock
  </h3>
  <h2 className="text-gray-900   ml-1  text-1xl capitalize  font-medium">
    rang-e-haya
  </h2>
  <p className="mt-1 text-xl  ml-1  font-semibold text-black">Rs:5k</p>
</div>

        </div>
      </div>

{/*pic 4*/}
<div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          {/*LINK*/}
          <Link href={"/p4"}>
          <Image 
          src ={require('../../../public/picture/fc17.webp')}
          alt= "logo"
          width={500}
          height={200}>

          </Image>
          </Link>
          <div className="mt-4">
  <h3 className="text-black ml-1  capitalize tracking-widest title-font text-1xl  mb-1">
  shirt (1-peice)
  </h3>
  <h2 className="text-gray-900 ml-1 text-1xl capitalize  font-medium">
    taftan
  </h2>
  <p className="mt-1 text-xl  ml-1 font-semibold text-black">Rs:21600</p>
</div>

        </div>
      </div>

    </div>
  </div>
</section>
{/*2nd row */}
<section className="text-gray-600 body-font">
  <div className="container px-5 py-10 mx-auto">
    <div className="flex flex-wrap -m-4">
      {/*pic 1 */}
      <div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
         {/*LINK*/}
         <Link href={"/p5"}>
          <Image 
          src ={require('../../../public/picture/fc8.webp')}
          alt= "logo"
          width={500}
          height={200}>

          </Image>
          </Link>
          <div className="mt-4">
  <h3 className="text-black   ml-1  capitalize tracking-widest title-font text-1xl  mb-1">
  shirt (1-peice)
  </h3>
  <h2 className="text-gray-900 text-1xl   ml-1  capitalize  font-medium">
    embroided cotton-shirt
  </h2>
  <p className="mt-1 text-xl  ml-1  font-semibold text-black">Rs:3k</p>
</div>

        </div>
      </div>
       {/*pic 2 */}
       <div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          {/*LINK*/}
          <Link href={"/p6"}>
          <Image 
          src ={require('../../../public/picture/fc9.webp')}
          alt= "logo"
          width={500}
          height={200}>

          </Image>
          </Link>
          <div className="mt-4">
  <h3 className="text-black   capitalize tracking-widest title-font text-1xl ml-1 mb-1">
shirt (1-peice)
  </h3>
  <h2 className="text-gray-900 text-1xl ml-1  capitalize  font-medium">
    gramimun shaifoon-shirt
  </h2>
  <p className="mt-1 text-xl ml-1 font-semibold text-black">Rs:5699</p>
</div>

        </div>
      </div>
      {/*pic 3 */}
      <div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          {/*LINK*/}
          <Link href={"/p7"}>
          <Image 
          src ={require('../../../public/picture/fc10.webp')}
          alt= "logo"
          width={500}
          height={200}>

          </Image>
          </Link>
          <div className="mt-4">
  <h3 className="text-black ml-1  capitalize tracking-widest title-font text-1xl  mb-1">
  shirt (1-peice)
  </h3>
  <h2 className="text-gray-900 ml-1 text-1xl capitalize  font-medium">
    silk-long-shirt 
  </h2>
  <p className="mt-1 text-xl  ml-1 font-semibold text-black">Rs:6700</p>
</div>

        </div>
      </div>

{/*pic 4*/}
<div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
         {/*LINK*/}
         <Link href={"/p8"}>
         <Image 
          src ={require('../../../public/picture/fc16.webp')}
          alt= "logo"
          width={500}
          height={200}>

          </Image>
          </Link>
          <div className="mt-4">
  <h3 className="text-black ml-1  capitalize tracking-widest title-font text-1xl  mb-1">
  shirt (1-peice)
  </h3>
  <h2 className="text-gray-900 ml-1 text-1xl capitalize  font-medium">
    side open-long-shirt 
  </h2>
  <p className="mt-1 text-xl  ml-1 font-semibold text-black">Rs:12000</p>
</div>

        </div>
      </div>


    </div>
  </div>
</section>

{/*3nd row */}

<section className="text-gray-600 body-font">
  <div className="container px-5 py-10 mx-auto">
    <div className="flex flex-wrap -m-4">
      {/*pic 1 */}
      <div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          {/*LINK*/}
          <Link href={"/p9"}>
          <Image 
          src ={require('../../../public/picture/fc12.webp')}
          alt= "logo"
          width={500}
          height={200}>

          </Image>
          </Link>
          <div className="mt-4">
  <h3 className="text-black  ml-1 capitalize tracking-widest title-font text-1xl  mb-1">
  abaya(modest_wear)
  </h3>
  <h2 className="text-gray-900 ml-1 text-1xl capitalize  font-medium">
    brown-camel
  </h2>
  <p className="mt-1 text-xl ml-1 font-semibold text-black">Rs:4k</p>
</div>

        </div>
      </div>
       {/*pic 2 */}
       <div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <Link href={"/p10"}>
          <Image 
          src ={require('../../../public/picture/fc13.webp')}
          alt= "logo"
          width={500}
          height={200}>

          </Image>
          </Link>
          <div className="mt-4">
  <h3 className="text-black  ml-1  capitalize tracking-widest title-font text-1xl  mb-1">
    abaya(modest_wear)
  </h3>
  <h2 className="text-gray-900 ml-1 text-1xl capitalize  font-medium">
    purple-lawish
  </h2>
  <p className="mt-1 text-xl ml-1 font-semibold text-black">Rs:4560</p>
</div>

        </div>
      </div>
      {/*pic 3 */}
      <div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <Link href={"/p11"}>
          <Image 
          src ={require('../../../public/picture/fc14.webp')}
          alt= "logo"
          width={500}
          height={200}>

          </Image>
          </Link>
          <div className="mt-4">
  <h3 className="text-black  ml-1 capitalize tracking-widest title-font text-1xl  mb-1">
  abaya(modest_wear)
  </h3>
  <h2 className="text-gray-900 ml-1 text-1xl capitalize  font-medium">
    hareer-cayan
  </h2>
  <p className="mt-1 text-xl ml-1 font-semibold text-black">Rs:6k</p>
</div>

        </div>
      </div>


      {/*pic 4*/}
<div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <Link href={"/p12"}>
          <Image 
          src ={require('../../../public/picture/fc15.webp')}
          alt= "logo"
          width={500}
          height={200}>

          </Image>
          </Link>
          <div className="mt-4">
  <h3 className="text-black ml-1  capitalize tracking-widest title-font text-1xl  mb-1">
  abaya (modest_wear)
  </h3>
  <h2 className="text-gray-900 ml-1 text-1xl capitalize  font-medium">
    flowery print double set 
  </h2>
  <p className="mt-1 text-xl  ml-1 font-semibold text-black">Rs:9900</p>
</div>

        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Women