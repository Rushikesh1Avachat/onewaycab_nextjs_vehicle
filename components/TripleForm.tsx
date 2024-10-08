"use client"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import Link from "next/link";

// Define the validation schema using Zod
const formSchema = z.object({
  oneWayPickup: z.string().nonempty({ message: "Pick up location is required" }),
  oneWayDrop: z.string().nonempty({ message: "Drop location is required" }),
  outstationPickup: z.string().nonempty({ message: "Pick up location is required" }),
  outstationDrop: z.string().nonempty({ message: "Drop location is required" }),
  outstationDays: z
    .number({ invalid_type_error: "Number of days is required" })
    .min(1, { message: "Must be at least 1 day" }),
  rentalCity: z.string().nonempty({ message: "City is required" }),
  rentalPackage: z.enum(["8HRS/80KMS", "12HRS/120KMS"], {
    message: "Package is required",
  }),
});

type FormSchema = z.infer<typeof formSchema>;

const TripleForm: React.FC = () => {
  // Initialize useForm with Zod resolver and proper types
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  // Submit handler
  const onSubmit = (data: FormSchema) => {
    console.log(data);
  };

  return (
  <>
  <div className="h-full top-52 left-0 absolute ml-24 z-10 overflow-hidden mr-10    ">
  <form
    onSubmit={handleSubmit(onSubmit)}
    className="w-full p-8 bg-white rounded-md flex items-center justify-center space-x-4 gap-4 mt-72 "
  >
    {/* One Way Form */}
    <h2 className="text-xl font-semibold">One Way</h2>

    <div className="flex-grow">
      <label className="block">Pick Up Location (All India City)</label>
      <input
        type="text"
        {...register("oneWayPickup")}
        className="w-full p-2 border rounded"
        placeholder="Enter pick up location"
      />
      {errors.oneWayPickup && (
        <p className="text-red-500">{errors.oneWayPickup.message}</p>
      )}
    </div>

    <div className="flex-grow">
      <label className="block">Drop Location (All India City)</label>
      <input
        type="text"
        {...register("oneWayDrop")}
        className="w-full p-2 border rounded"
        placeholder="Enter drop location"
      />
      {errors.oneWayDrop && (
        <p className="text-red-500">{errors.oneWayDrop.message}</p>
      )}
    </div>
<div className="flex items-center gap-4 ">
    <button
      type="submit"
      className="px-2 py-2 bg-[#e91e63] text-white rounded hover:bg-blue-600 cursor-pointer translate-x-4 ease-in-out inline-block"
    >
     <Link href="/test" className="flex items-center justify-center gap-4">Search</Link> 
    </button>
    </div>
  </form>
</div>

  
  </>
  );
};

export default TripleForm;





