import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Allproducts = () => {
  return (
    <div>
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











{ /*1st row*/}
<section className="text-gray-600 body-font ">
  <div className="container px-5 py-10  mt-[50px] mx-auto">
    <div className="flex flex-wrap -m-4">
      {/*pic 1 */}
      <div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
         {/*LINK*/}
         <Link href={"/k1"}>
          <Image 
          src ={require('../../../public/picture/kc1.webp')}
          alt= "logo"
          width={500}
          height={200}>

          </Image>
          </Link>
          <div className="mt-4">
  <h3 className="text-black   capitalize tracking-widest title-font text-1xl  ml-1 mb-1">
    kaneez pret-collection
  </h3>
  <h2 className="text-gray-900 text-1xl ml-1 capitalize  font-medium">
    black butterfly sleves style
  </h2>
  <p className="mt-1 text-xl font-semibold ml-1 text-black">Rs:8k</p>
</div>

        </div>
      </div>
       {/*pic 2 */}
       <div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          
          {/*LINK*/}
          <Link href={"/k2"}>
          <Image 
          src ={require('../../../public/picture/kc4.webp')}
          alt= "logo"
          width={500}
          height={200}>

          </Image>
          </Link>
          <div className="mt-4">
  <h3 className="text-black  ml-1 capitalize tracking-widest title-font text-1xl  mb-1">
    kurta(2-peice)
  </h3>
  <h2 className="text-gray-900  ml-1 text-1xl capitalize  font-medium">
    white crown suit with classy wasket 
  </h2>
  <p className="mt-1 text-xl font-semibold ml-1 text-black">Rs:6k</p>
</div>

        </div>
      </div>
      {/*pic 3 */}
      <div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          {/*LINK*/}
          <Link href={"/k3"}>
          <Image 
          src ={require('../../../public/picture/kc3.webp')}
          alt= "logo"
          width={500}
          height={200}>

          </Image>
          </Link>
          <div className="mt-4">
  <h3 className="text-black   capitalize tracking-widest title-font text-1xl  ml-1 mb-1">
    kaneez eastern wear
  </h3>
  <h2 className="text-gray-900 text-1xl capitalize ml-1  font-medium">
    printed cotton stiched peice
  </h2>
  <p className="mt-1 text-xl ml-1 font-semibold text-black">Rs:4k</p>
</div>

        </div>
      </div>

{/*pic 4 */}
<div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
           {/*LINK*/}
           <Link href={"/k4"}>
          <Image 
          src ={require('../../../public/picture/kc10.webp')}
          alt= "logo"
          width={500}
          height={200}>

          </Image>
          </Link>
          <div className="mt-4">
  <h3 className="text-black   capitalize tracking-widest title-font text-1xl  ml-1 mb-1">
    glam-collection
  </h3>
  <h2 className="text-gray-900  ml-1 text-1xl capitalize  font-medium">
    prince suit
  </h2>
  <p className="mt-1 text-xl ml-1 font-semibold text-black">Rs:6k</p>
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
















{ /*2nd row*/}
<section className="text-gray-600 body-font ">
  <div className="container px-5 py-10  mt-[50px] mx-auto">
    <div className="flex flex-wrap -m-4">
      {/*pic 1 */}
      <div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          {/*LINK*/}
          <Link href={"/k5"}>
          <Image 
          src ={require('../../../public/picture/kc5.webp')}
          alt= "logo"
          width={500}
          height={200}>

          </Image>
          </Link>
          <div className="mt-4">
  <h3 className="text-black   capitalize tracking-widest title-font text-1xl  ml-1 mb-1">
    kaneez pret-collection
  </h3>
  <h2 className="text-gray-900 text-1xl ml-1 capitalize  font-medium">
    royal sequence shaifoon set
  </h2>
  <p className="mt-1 text-xl ml-1 font-semibold text-black">Rs:8k</p>
</div>

        </div>
      </div>
       {/*pic 2 */}
       <div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          {/*LINK*/}
          <Link href={"/k6"}>
          <Image 
          src ={require('../../../public/picture/kc6.webp')}
          alt= "logo"
          width={500}
          height={200}>

          </Image>
          </Link>
          <div className="mt-4">
  <h3 className="text-black   capitalize tracking-widest title-font text-1xl  ml-1 mb-1">
    kurta(2-peice)
  </h3>
  <h2 className="text-gray-900 ml-1 text-1xl capitalize  font-medium">
    self print kurta 
  </h2>
  <p className="mt-1 text-xl  ml-1 font-semibold text-black">Rs:6k</p>
</div>

        </div>
      </div>
      {/*pic 3 */}
      <div className="p-4 md:w-1/4">
        <div className="h-100 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
           {/*LINK*/}
           <Link href={"/k7"}>
          <Image 
          src ={require('../../../public/picture/kc7.webp')}
          alt= "logo"
          width={500}
          height={200}>

          </Image>
          </Link>
          <div className="mt-2">
  <h3 className="text-black   capitalize tracking-widest title-font text-1xl  ml-1 mb-1">
    kaneez pret-collection
  </h3>
  <h2 className="text-gray-900 text-1xl capitalize  ml-1 font-medium">
    gara-style with sequnce work
  </h2>
  <p className="mt-1 text-xl  ml-1 font-semibold text-black">Rs:4k</p>
</div>

        </div>

      </div>
{/*pic 4 */}
<div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
           {/*LINK*/}
           <Link href={"/k8"}>
          <Image 
          src ={require('../../../public/picture/kc8.webp')}
          alt= "logo"
          width={500}
          height={200}>

          </Image>
          </Link>
          <div className="mt-4">
  <h3 className="text-black   capitalize tracking-widest title-font text-1xl  ml-1 mb-1">
   glam-collection
  </h3>
  <h2 className="text-gray-900 text-1xl capitalize ml-1 font-medium">
     black prince suit
  </h2>
  <p className="mt-1 text-xl ml-1 font-semibold text-black">Rs:6k</p>
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





















{ /*3rd row*/}
<section className="text-gray-600 body-font ">
  <div className="container px-5 py-10  mt-[50px] mx-auto">
    <div className="flex flex-wrap -m-4">
      {/*pic 1 */}
      <div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          
           {/*LINK*/}
           <Link href={"/k9"}>
            <Image 
          src ={require('../../../public/picture/kc11.webp')}
          alt= "logo"
          width={500}
          height={200}>

          </Image>
          </Link>
          <div className="mt-4">
  <h3 className="text-black   capitalize tracking-widest title-font text-1xl  ml-1 mb-1">
    kaneez pret-collection
  </h3>
  <h2 className="text-gray-900 text-1xl   capitalize  font-medium">
    embrioded shirt-trouser
  </h2>
  <p className="mt-1 text-xl  ml-1 font-semibold text-black">Rs:6500</p>
</div>

        </div>
      </div>
       {/*pic 2 */}
       <div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
           {/*LINK*/}
           <Link href={"/k10"}>
          <Image 
          src ={require('../../../public/picture/kc12.jpg')}
          alt= "logo"
          width={500}
          height={200}>

          </Image>
          </Link>
          <div className="mt-4">
  <h3 className="text-black   capitalize tracking-widest title-font text-1xl  ml-1 mb-1">
    kurta(2-peice)
  </h3>
  <h2 className="text-gray-900 text-1xl ml-1 capitalize  font-medium">
    royal blue cotton stuff
  </h2>
  <p className="mt-1 text-xl ml-1 font-semibold text-black">Rs:6k</p>
</div>

        </div>
      </div>
      {/*pic 3 */}
      <div className="p-4 md:w-1/4">
        <div className="h-100 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
         {/*LINK*/}
         <Link href={"/k11"}>
          <Image 
          src ={require('../../../public/picture/kc13.webp')}
          alt= "logo"
          width={500}
          height={200}>

          </Image>
          </Link>
          <div className="mt-2">
  <h3 className="text-black   capitalize tracking-widest title-font text-1xl  ml-1 mb-1">
    kaneez pret-collection
  </h3>
  <h2 className="text-gray-900 text-1xl capitalize  ml-1 font-medium">
    fairy queen tale-frock
  </h2>
  <p className="mt-1 text-xl  ml-1 font-semibold text-black">Rs:9999</p>
</div>

        </div>

      </div>
{/*pic 4 */}
<div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
           {/*LINK*/}
           <Link href={"/k12"}>
          <Image 
          src ={require('../../../public/picture/kc16.webp')}
          alt= "logo"
          width={500}
          height={200}>

          </Image>
          </Link>
          <div className="mt-4">
  <h3 className="text-black   capitalize tracking-widest title-font text-1xl  ml-1 mb-1">
    kurta(2-peice)
  </h3>
  <h2 className="text-gray-900 text-1xl ml-1 capitalize  font-medium">
    plain print kurta with floral wasket
  </h2>
  <p className="mt-1 text-xl ml-1 font-semibold text-black">Rs:7800</p>
</div>

        </div>
      </div>



      
    </div>
  </div>
</section>

























    </div>
  )
}

export default Allproducts