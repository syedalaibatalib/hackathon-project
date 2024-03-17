import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Kids = () => {
  return (
    <div>
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

export default Kids