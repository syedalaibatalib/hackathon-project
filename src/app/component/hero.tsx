import React from 'react'
import Image from 'next/image'
export const Hero = () => {
  return (
   
  <div className="container  mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1  className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-black">Adopt the Eastern Style With Glam Look
        
      </h1>
      <p className="text-xl text-muted-foreground m-3 text-white" >
      A tapestry of tradition woven with threads of elegance. Each garment whispers tales of cultural grace, 
      adorned with colors that dance like poetry and patterns that echo centuries of craftsmanship. In the folds 
      of these fabrics, the soul of the East finds expression, a timeless journey through the artistry of attire.</p>
      
    </div>
    <div className=" hero lg:max-w-lg lg:w-full md:w-1/2 w-5/6 custom-img">
    <Image className="object-cover object-center rounded" alt="hero"
     src={"/picture/Pepperland-New-Kids-Sale-50-Off-4.webp"}
     width={720}
     height={600}
     >
      </Image>
    </div>
  </div>

  )
}
export default Hero