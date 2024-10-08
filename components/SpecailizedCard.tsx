// components/Card.tsx
"use client"
import React from "react";

type SpecialCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  onButtonClick:()=>void
};

const SpecializedCard: React.FC<SpecialCardProps> = ({ title, description, imageUrl, buttonText, onButtonClick }) => {
  return (
    <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg group">

      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white text-2xl mb-2">{title}</h3>
        <p className="text-white mb-4">{description}</p>
        <button
          className="bg-white text-black py-2 px-4 rounded hover:bg-gray-200"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default SpecializedCard;
