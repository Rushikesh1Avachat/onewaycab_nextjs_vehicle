// pages/confirm-booking.tsx
"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
 // Import NextRouter type
//  import { NextRouter } from 'next/router'; // Import NextRouter type

// Define the schema using Zod
const schema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  phoneNumber: z.string().min(10, "Phone number is required").max(15, "Phone number must be at most 15 digits"),
  emailAddress: z.string().email("Invalid email address"),
  pickupDate: z.string().nonempty("Pickup date is required"),
  pickupTime: z.string().nonempty("Pickup time is required"),
});

type FormData = z.infer<typeof schema>;

const ConfirmBookingPage = () => {
  const router = useRouter();
  const { carId } = router as { carId?: string };
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    // Handle form submission
    console.log(data);
    // Optionally navigate to a success page
    // router.push('/success');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4 text-center bg-[#e91e63] text-white  py-2 px-4 rounded">Trip Details</h2>
      <div className="bg-white shadow-md p-4 rounded-lg mb-6 grid grid-cols-3 md:grid-cols-2 gap-4">
        <div>
          <p><strong>Source:</strong> Goa</p>
          <p><strong>Destination:</strong> Miraj</p>
        </div>
        <div>
          <p><strong>Trip Type:</strong> One-way</p>
          <p><strong>Car Type:</strong> Maruti Wagon R</p>
        </div>
        <div>
          <p><strong>KM Limit:</strong> 100 Kms</p>
          <p><strong>Fare:</strong> ₹500</p>
        </div>
      </div>

      <h3 className="text-xl font-bold mb-4 text-center bg-[#e91e63] text-white  py-2 px-4 rounded">Account Details</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md p-6 rounded-lg">
        {/* Full Name */}
        <div className="flex items-center mb-4">
          <label className="block w-1/3 mb-1" htmlFor="fullName">Full Name</label>
          <input
            {...register("fullName")}
            className={`w-2/3 p-2 border rounded ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
            type="text"
            id="fullName"
          />
              {errors.fullName && <p className="text-red-500 mb-4">{errors.fullName.message}</p>}
        </div>
    

        {/* Phone Number */}
        <div className="flex items-center mb-4">
          <label className="block w-1/3 mb-1" htmlFor="phoneNumber">Phone Number</label>
          <input
            {...register("phoneNumber")}
            className={`w-2/3 p-2 border rounded ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'}`}
            type="tel"
            id="phoneNumber"
          />
                {errors.phoneNumber && <p className="text-red-500 mb-4">{errors.phoneNumber.message}</p>}
        </div>
  

        {/* Email Address */}
        <div className="flex items-center mb-4">
          <label className="block w-1/3 mb-1" htmlFor="emailAddress">Email Address</label>
          <input
            {...register("emailAddress")}
            className={`w-2/3 p-2 border rounded ${errors.emailAddress ? 'border-red-500' : 'border-gray-300'}`}
            type="email"
            id="emailAddress"
          />
                  {errors.emailAddress && <p className="text-red-500 mb-4">{errors.emailAddress.message}</p>}

        </div>

        {/* Pickup Date */}
        <div className="flex items-center mb-4">
          <label className="block w-1/3 mb-1" htmlFor="pickupDate">Pickup Date</label>
          <input
            {...register("pickupDate")}
            className={`w-2/3 p-2 border rounded ${errors.pickupDate ? 'border-red-500' : 'border-gray-300'}`}
            type="date"
            id="pickupDate"
          />
                  {errors.pickupDate && <p className="text-red-500 mb-4">{errors.pickupDate.message}</p>}
        </div>


        {/* Pickup Time */}
        <div className="flex items-center mb-4">
          <label className="block w-1/3 mb-1" htmlFor="pickupTime">Pickup Time</label>
          <input
            {...register("pickupTime")}
            className={`w-2/3 p-2 border rounded ${errors.pickupTime ? 'border-red-500' : 'border-gray-300'}`}
            type="time"
            id="pickupTime"
          />
          {errors.pickupTime && <p className="text-red-500 mb-4">{errors.pickupTime.message}</p>}
        </div>
        
        <button type="submit" className="mt-4 text-white bg-[#e91e63] hover:bg-blue-700 py-2 px-4 rounded text-center w-full">
          Confirm Booking
        </button>
        </form>
    </div>
  );
};

export default ConfirmBookingPage;

