"use client"
import Image from 'next/image'
import React from 'react'
import { Carousel } from "flowbite-react";

import TripleForm from './TripleForm';
interface Props {
  
}

const HeroSection = (props: Props) => {
  return (
    <>
      
      <div className="h-full w-full ">
      <Carousel  indicators={true} className="h-full">
        <div className="relative h-full bg-white  md:h-[600px] w-full overflow-hidden z-50 ">
        <Image  src="/herocab-banner.jpg" alt='hero cab ' fill  className='object-cover cursor-pointer'/>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold">
          Welcome to  My Oneway Cab</h1>
          <p className="text-lg mt-4">No.1 Car Rental Company. 6+ Year Trusted Service</p>
        
        </div>
      </div>
        </div>

        <div className="relative h-full bg-white  md:h-[600px] w-full overflow-hidden z-50">
        <Image  src="/herocab-banner2.jpg" alt='hero cab ' fill  className='object-cover cursor-pointer'/>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold">
          Welcome to  My Oneway Cab</h1>
          <p className="text-lg mt-4">No.1 Car Rental Company. 6+ Year Trusted Service</p>
        
        </div>
      </div>
        </div>

        <div className="relative h-full bg-white  md:h-[600px] w-full overflow-hidden z-50">
        <Image  src="/herocab-banner2.jpg" alt='hero cab ' fill  className='object-cover cursor-pointer'/>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold">
          Welcome to  My Oneway Cab</h1>
          <p className="text-lg mt-4">No.1 Car Rental Company. 6+ Year Trusted Service</p>
        
        </div>
      </div>
      </div>
     
      </Carousel>
      <div className='  '>
      <TripleForm/>
    </div>

    </div>
    
   
   
    </>
  )
}

export default HeroSection


