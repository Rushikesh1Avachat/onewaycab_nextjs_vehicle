// pages/index.tsx
import React from 'react';
import DestinationCard from '@/components/DestinationCard';

const destinations = [
  {
    title: 'Bali, Indonesia',
    image: '/herocab-banner.jpg',
  },
  {
    title: 'Paris, France',
    image: '/herocab-banner.jpg',
  },
  {
    title: 'New York, USA',
    image: '/herocab-banner.jpg',
  },
  {
    title: 'Tokyo, Japan',
    image: '/herocab-banner.jpg',
  },
  {
    title: 'Sydney, Australia',
    image: '/herocab-banner.jpg',
  },
  {
    title: 'Cape Town, South Africa',
    image: '/herocab-banner.jpg',
  },
];

const Home: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center p-4">
      {destinations.map((destination, index) => (
        <div key={index} className="m-4">
          <DestinationCard title={destination.title} image={destination.image} />
        </div>
      ))}
    </div>
  );
};

export default Home;


