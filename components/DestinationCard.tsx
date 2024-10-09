// components/DestinationCard.tsx
"use client"
import React from 'react';
import Image from "next/image"
// Define the props type for the DestinationCard component
export type DestinationProps = {
  title: string;
  image: string;
};

const DestinationCard: React.FC<DestinationProps> = ({ title, image }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <Image src={image} alt={title} fill className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="font-bold text-lg">{title}</h2>
      </div>
    </div>
  );
};

export default DestinationCard;




