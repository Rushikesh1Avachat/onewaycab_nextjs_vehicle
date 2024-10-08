// components/TransportCard.tsx
"use client"
import React from 'react';
import Image from 'next/image';

interface ServiceCardProps {
  mode: string;
  imageSrc: string;
  description:string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ mode, imageSrc, description }) => {
  return (
    <div className="relative w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
      <div className="relative h-96 w-full">
        <Image 
          src={imageSrc} 
          alt={mode} 
          layout="fill" 
          objectFit="cover" 
          className="rounded-lg" 
        />
      </div>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
        <h2 className="text-2xl font-semibold text-white mb-8">{mode}</h2>
        <p className='text-xl font-bold text-gray-200'>{description}</p>
        <button className="mt-4 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-500">
          Book Now
        </button>
      </div> */}
    </div>
  );
};

export default ServiceCard;
