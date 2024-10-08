"use client"
import React from "react";
import { useRouter } from 'next/navigation';
import Link from "next/link";
const CabServiceCard= () => {
  const cars = [
    {
        id:1,
      name: "Maruti Wagnor",
      model: "Sedan",
      price: "$50/day",
      description: "Comfortable sedan",
      imageUrl: "/wagonr-shiv-img.png",
    },
    {
        id:2,
      name: "Swift Dezire",
      model: "SUV",
      price: "$70/day",
      description: "Luxury SUV",
      imageUrl: "/dzire-shiv-img.png",
    },
    {
        id:3,
      name: "Ertiga",
      model: "Hatchback",
      price: "$30/day",
      description: "Economy hatchback",
      imageUrl: "/etiga-shiv-img.png",
    },
    {
        id:4,
      name: "Innova",
      model: "Premium Sedan",
      price: "$90/day",
      description: "Premium sedan",
      imageUrl: "/innova-shiv-img.png",
    },
    {
        id:5,
      name: "Innova Crysta",
      model: "Compact SUV",
      price: "$60/day",
      description: "Compact SUV",
      imageUrl: "/innovacrysta-shiv-img.png",
    },
  ];
  const router = useRouter();

  const handleBookNow = (carId: number) => {
    router.push(`/confirm-booking?carId=${carId}`); // Navigate to the dynamic route
  };
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">Available Cars</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div key={car.id} className="bg-white shadow-md p-4 rounded-lg">
            <img
              src={car.imageUrl}
              alt={car.name}
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-bold">{car.name}</h3>
            <p className="text-gray-700">{car.model}</p>
            <p>{car.description}</p>
            <p className="text-gray-700 font-bold">{car.price}</p>
            <button
              onClick={() => handleBookNow(car.id)} // Pass car.id correctly
              className="mt-4 text-white bg-[#e91e63] hover:bg-blue-700 py-2 px-4 rounded"
            >
            <Link href="/confirm-booking"> Book Now</Link>  
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CabServiceCard

  