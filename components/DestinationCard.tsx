// import React from 'react'
// import { Image } from 'react-bootstrap'
// interface Props {
  
// }

// const DestinationCard = (props: Props) => {
//   return (
//     <>
//      <div className='bg-[#f9f9f9] p-[60px] overflow-hidden z-50 pr-[15px] pl-[15px] '>
//       <div className="container">
//         <h1 className='text-center text-black font-extrabold text-2xl mt-48'>POPULAR DESTINATION</h1>
//       </div>
//       <div className="relative w-[100%] h-[100vh] mt-24">
//       <div className="relative overflow-hidden mb-16 rounded-[10px]">
//        <Image src='https://myonewaycab.com/images/places/Trimbakeshwar(1).jpg' width={320} height={280} className='rounded-md object-cover cursor-pointer'/>
//        <div>
//         <h1>Trimbakeshwar</h1>

//        </div>
//        <button></button>
//       </div>
//       </div>
//       </div> 
//     </>
//   )
// }

// export default DestinationCard
"use client"
import Image from 'next/image';
import React from 'react';

interface DestinationProps {
  name: string;
  imageUrl: string;
  description: string;
}

const DestinationCard: React.FC<DestinationProps> = ({ name, imageUrl, description }) => {
  return (
    <>
    <div className="relative overflow-hidden rounded-lg shadow-lg  z-50 mt-24 mb-24">
     <h2 className='uppercase text-center text-xl font-bold text-black'>popular card</h2>
      <img
        src={imageUrl}
        // fill
        alt={name}
        className="object-cover w-full h-96 cursor-pointer shadow translate-x-10"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-8 mt-52 ">
        <h3 className="text-white text-lg font-bold mb-2">{name}</h3>
        <p className="text-white text-sm mb-4">{description}</p>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300">
          Book Now
        </button>
      </div>
    </div>
    </>
  );
};

export default DestinationCard;

