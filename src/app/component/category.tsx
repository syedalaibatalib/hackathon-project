import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Category = () => {
  return (
    <div className='mb-[100px] ml-[100px] mr-[100px]' >
        {/*HEADING */}
        <div className="text-center ">
    <h1 className="  title-font capitalize  text-green-900
     mb-0scroll-m-20 mb-5 text-3xl font-extrabold tracking-tight lg:text-5xl">
      categories
    </h1>
     <div className=" w-16 h-1 mb-5 rounded-full bg-green-900 inline-flex" />
    </div>

 {/*category1 */}

<div className='grid grid-cols-1 md:grid-col-2 lg:grid-cols-4 gap-4'>

<div className='mb-7 lg:mb-0 overflow-hidden z-10 max-auto group relative'>
  <Link href={"/women"}>
<Image 
src={require('../../../public/picture/pic2.jpg')}
alt='logo'
width={400}
height={800}
className='rounded-xl duration-500 group-hover:scale-125'>
</Image>
<div className='absolute -bottom-24 group-hover:bottom-0 duration-500 scroll-m-20 text-3xl font-extrabold tracking-tight bg-grey-200/70
text-center w-full text-black'>
    <h1 className='uppercase'> frocks</h1>
</div>
</Link>
 
</div>

{/*category2 */}
<div className='mb-7 lg:mb-0 overflow-hidden z-10 max-auto group relative'>
<Link href={"/kids"}>
<Image 
src={require('../../../public/picture/Untitled.jpg')}
alt='logo'
width={350}
height={350}
className='rounded-xl duration-500 group-hover:scale-125'>
</Image>
<div className='absolute -bottom-24 group-hover:bottom-0 duration-500 scroll-m-20 text-3xl font-extrabold tracking-tight bg-grey-200/70
text-center w-full text-black'>
    <h1 className='uppercase'> kids</h1>
</div>
</Link>
 
</div>


{/* category3 */}
<div className='mb-7 lg:mb-0 overflow-hidden z-10 max-auto group relative'>
<Link href={"/men"}>
<Image 
src={require('../../../public/picture/m5.jpg')}
alt='logo'
width={350}
height={350}
className='rounded-xl duration-500 group-hover:scale-125'>
</Image>
<div className='absolute -bottom-24 group-hover:bottom-0 duration-500 scroll-m-20 text-2xl font-extrabold tracking-tight bg-grey-200/70
text-center w-full text-black'>
    <h1 className='uppercase'> mens_formal</h1>
</div>
</Link>
 
</div>
{/* category4 */}

<div className='mb-7 lg:mb-0 overflow-hidden z-10 max-auto group relative'>
<Link href={"/women"}>
<Image 
src={require('../../../public/picture/abaya.webp')}
alt='logo'
width={300}
height={280}
className='rounded-xl duration-500 group-hover:scale-125'>
</Image>
<div className='absolute -bottom-24 group-hover:bottom-0 duration-500 scroll-m-20 text-2xl font-extrabold tracking-tight bg-grey-200/70
text-center w-full text-black'>
    <h1 className='uppercase'> modest_wear</h1>
</div>
</Link>
 
</div>




</div>










 
    </div>
  )
}

export default Category