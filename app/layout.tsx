"use client"

import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection"
import Footer from "@/components/Footer";
import DestinationCard from "@/components/DestinationCard";

import Image from "next/image";
import ServiceCard from "@/components/ServicesCard";
import SpecializedCard from "@/components/SpecailizedCard";
import CTA from "@/components/CTA";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


const transportModes = [
  { mode: 'Shivenari Bus', imageSrc: '/shivenri.jpg', description:"Oneways Cabs are a revolutionary concept in the transportation industry that allows you to book a one-way journey." },
  { mode: 'Taxi', imageSrc: '/taxi.jpg', description:"Oneways Cabs are a revolutionary concept in the transportation industry that allows you to book a one-way journey." },
  { mode: 'Rickshaw', imageSrc: '/rickshaw.jpg', description:"Oneways Cabs are a revolutionary concept in the transportation industry that allows you to book a one-way journey." },
  { mode: 'ST Buses', imageSrc: '/st-bus.jpg' , description:"Oneways Cabs are a revolutionary concept in the transportation industry that allows you to book a one-way journey."},
];
const destinations = [
  {
    name: 'Mumbai',
    imageUrl: '/mumbai city.jpg',
    description: 'The city that never sleeps.',
  },
  {
    name: 'Pune',
    imageUrl: '/pune.jpg',
    description: 'The cultural capital of Maharashtra.',
  },
  {
    name: 'Nashik',
    imageUrl: '/nashik.jpg',
    description: 'The Wine Capital of India.',
  },
  {
    name: 'Aurangabad',
    imageUrl: '/aurangabad.jpg',
    description: 'Famous for its historical monuments.',
  },
  {
    name: 'Mahabaleshwar',
    imageUrl: '/mahabaleshwar.jpg',
    description: 'A hill station with lush greenery.',
  },
  {
    name: 'Kolhapur',
    imageUrl: '/kolhapur.jpg',
    description: 'Known for its rich history and cuisine.',
  },
];

const locations = [
  {
    title: "Gateway of India, Mumbai",
    description: "A famous monument in Mumbai, built during the 20th century.",
    imageUrl: "/gatewayofindia.jpg",
    buttonText: "Learn More",
  },
  {
    title: "Ajanta Caves, Aurangabad",
    description: "Ancient Buddhist cave monuments dating back to the 2nd century BCE.",
    imageUrl: "/ajantacaves.jpg",
    buttonText: "Learn More",
  },
  {
    title: "Mahabaleshwar",
    description: "A hill station famous for its beautiful viewpoints and strawberries.",
    imageUrl: "/mahabaleshwar2.jpg",
    buttonText: "Learn More",
  },
  {
    title: "Tadoba National Park",
    description: "A large wildlife sanctuary in Chandrapur, known for its tiger reserve.",
    imageUrl: "/tadoba.jpg",
    buttonText: "Learn More",
  },
  {
    title: "Shaniwar Wada, Pune",
    description: "A historical fortification in the city of Pune.",
    imageUrl: "/shaniwar.jpg",
    buttonText: "Learn More",
  },
  {
    title: "Sinhagad Fort, Pune",
    description: "A historical fort near Pune, known for its scenic trekking routes.",
    imageUrl: "/singhagad.jpg",
    buttonText: "Learn More",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
      <HeroSection />
        {children}
       {/* <DestinationCard title={title} image={image || "/herocab-banner.jpg"}/> */}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {/* <h1 className="text-center text-2xl font-bold text-black">Popular Destination</h1> */}
      {destinations.map((destination, index) => (
        <DestinationCard
          key={index}
          name={destination.name}
          imageUrl={destination.imageUrl}
          description={destination.description}
        />
      ))}
    </div>
    <div className="container mx-auto py-12">
      {/* Transport Cards Section */}
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {transportModes.map((transport, index) => (
          <ServiceCard key={index} mode={transport.mode} imageSrc={transport.imageSrc} description={transport.description} />
        ))}
      </div>
      </div>
      <h1 className="text-2xl text-center text-black font-bold mt-10">Our Specialization</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
     
      {locations.map((location, index) => (
        <SpecializedCard
          key={index}
          title={location.title}
          description={location.description}
          imageUrl={location.imageUrl}
          buttonText={location.buttonText}
          onButtonClick={() => alert(`Navigating to ${location.title}`)}
        />
      ))}
      </div>
      <CTA/>
       <Footer/>
      
      </body>
    </html>
  );
}
