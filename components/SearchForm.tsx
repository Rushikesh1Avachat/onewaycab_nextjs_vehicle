"use client"
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const cityData = ['Pune', 'Mumbai', 'Nashik', 'Mantheran' ,'Lonavala', 'Ratanagiri','Aurangabad']; // Mock city list
const packagesData = ['Basic', 'Standard', 'Premium']; // Mock package list

// Zod schema for validation
const searchFormSchema = z.object({
  city: z.string().min(1, { message: 'Please enter your city' }).refine(
    (val) => cityData.includes(val), 
    { message: 'City not found' }
  ),
  package: z.string().min(1, { message: 'Select your Travel Package Price' }),
});

type SearchFormData = z.infer<typeof searchFormSchema>;

const SearchForm: React.FC = () => {
  const [results, setResults] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<SearchFormData>({
    resolver: zodResolver(searchFormSchema),
  });

  const onSubmit = (data: SearchFormData) => {
    // Simulate fetching results based on user input
    setResults(`You have selected ${data.package} package for ${data.city}`);
  };

  return (
    <div className="max-w-md mx-auto -mt-[320px] p-8 bg-white shadow-lg rounded-md relative top-24 -left-40">
      <h2 className="text-lg font-semibold mb-4">One Way Out Station & Rental Search</h2>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* City Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">City</label>
          <input
            type="text"
            {...register('city')}
            placeholder="Search city"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.city && (
            <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
          )}
        </div>

        {/* Package Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Package</label>
          <select
            {...register('package')}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select a package</option>
            {packagesData.map((pkg) => (
              <option key={pkg} value={pkg}>
                {pkg}
              </option>
            ))}
          </select>
          {errors.package && (
            <p className="text-red-500 text-sm mt-1">{errors.package.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium p-2 rounded-md"
        >
          Search
        </button>
      </form>

      {/* Displaying Results */}
      {results && (
        <div className="mt-6 p-4 bg-green-100 text-green-700 rounded-md">
          {results}
        </div>
      )}
    </div>
  );
};

export default SearchForm;
