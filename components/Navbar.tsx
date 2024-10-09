import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";

import Link from 'next/link'
type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className='relative z-100 w-full duration-300 bg-white shadow-xl px-10 py-10 overflow-hidden   '>
        <div className='flex items-center justify-between  '>
         <div>
            <span className='text-3xl font-bold font-serif text-red-900'> <Link href="/">Pareshwar Cab </Link> </span>
         </div>
         <div className="hidden md:block">
          <ul className='flex items-center justify-center gap-8'>
          <li className='flex items-center text-xl text-black hover:text-red-800 ease-in-out cursor-pointer duration-200'> HOME</li>
          <li className='flex items-center text-xl text-black hover:text-red-800 ease-in-out cursor-pointer duration-200'>SERVICE</li>
          <li className='flex items-center text-xl text-black hover:text-red-800 ease-in-out cursor-pointer duration-200'>ABOUT US</li>
          <li className='flex items-center text-xl text-black hover:text-red-800 ease-in-out cursor-pointer duration-200'>CONTACT US</li>
           <div className='flex items-center justify-center flex-col cursor-pointer duration-100 '>
           <button className="py-2 px-5 bg-red-800 text-white font-semibold rounded-full flex items-center gap-4 shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75">
           <FaPhoneAlt />24 × 7
           </button>
           </div>
          </ul>
         </div>
        </div>
    </nav>
  )
}

export default Navbar
