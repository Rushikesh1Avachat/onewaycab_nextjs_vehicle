// CTA.tsx
import React from 'react';
import { FaUsers,  FaClock, FaUserFriends } from 'react-icons/fa';
import { LuPackageCheck } from "react-icons/lu";
const CTA: React.FC = () => {
  return (
    <div className="bg-red-600 text-white p-6 flex flex-col items-center justify-center rounded-lg shadow-lg w-[100%] h-[400px] overflow-hidden">
      <h2 className="text-2xl font-bold mb-24">Join Us Today!</h2>
      <div className="flex space-x-8 items-center justify-center">
        <div className="flex flex-col items-center">
          <FaUsers className="text-4xl mb-2" />
          <span>12,000 Customers</span>
        </div>
        <div className="flex flex-col items-center">
          <LuPackageCheck className="text-4xl mb-2" />
          <span>15,000 Packages</span>
        </div>
        <div className="flex flex-col items-center">
          <FaClock className="text-4xl mb-2" />
          <span>6 Years Experience</span>
        </div>
        <div className="flex flex-col items-center">
          <FaUserFriends className="text-4xl mb-2" />
          <span>10 Team Members</span>
        </div>
      </div>
    </div>
  );
};

export default CTA;
