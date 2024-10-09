// "use client"

// import localFont from "next/font/local";
// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import HeroSection from "@/components/HeroSection"
// import Footer from "@/components/Footer";

// import Image from "next/image";
// import ServiceCard from "@/components/ServicesCard";
// import SpecializedCard from "@/components/SpecailizedCard";
// import CTA from "@/components/CTA";
// import DestinationCard, { DestinationProps } from '../components/DestinationCard';
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });


// const transportModes = [
//   { mode: 'Shivenari Bus', imageSrc: '/shivenri.jpg', description:"Oneways Cabs are a revolutionary concept in the transportation industry that allows you to book a one-way journey." },
//   { mode: 'Taxi', imageSrc: '/taxi.jpg', description:"Oneways Cabs are a revolutionary concept in the transportation industry that allows you to book a one-way journey." },
//   { mode: 'Rickshaw', imageSrc: '/rickshaw.jpg', description:"Oneways Cabs are a revolutionary concept in the transportation industry that allows you to book a one-way journey." },
//   { mode: 'ST Buses', imageSrc: '/st-bus.jpg' , description:"Oneways Cabs are a revolutionary concept in the transportation industry that allows you to book a one-way journey."},
// ];


// type Destination = {
//   title: string;
//   image: string;
// };

// // Example data of destinations
// const destinations: Destination[] = [
//   {
//     title: 'Mumbai',
//     image: '/mumbai-city.jpg',
//   },
//   {
//     title: 'Mumbai',
//     image: '/mumbai-city.jpg',
//   },
//   {
//     title: 'Mumbai',
//     image: '/mumbai-city.jpg',
//   },
//   {
//     title: 'Mumbai',
//     image: '/mumbai-city.jpg',
//   },
//   {
//     title: 'Mumbai',
//     image: '/mumbai-city.jpg',
//   },
//   {
//     title: 'Mumbai',
//     image: '/mumbai-city.jpg',
//   },
// ];
// const locations = [
//   {
//     title: "Gateway of India, Mumbai",
//     description: "A famous monument in Mumbai, built during the 20th century.",
//     imageUrl: "/gatewayofindia.jpg",
//     buttonText: "Learn More",
//   },
//   {
//     title: "Ajanta Caves, Aurangabad",
//     description: "Ancient Buddhist cave monuments dating back to the 2nd century BCE.",
//     imageUrl: "/ajantacaves.jpg",
//     buttonText: "Learn More",
//   },
//   {
//     title: "Mahabaleshwar",
//     description: "A hill station famous for its beautiful viewpoints and strawberries.",
//     imageUrl: "/mahabaleshwar2.jpg",
//     buttonText: "Learn More",
//   },
//   {
//     title: "Tadoba National Park",
//     description: "A large wildlife sanctuary in Chandrapur, known for its tiger reserve.",
//     imageUrl: "/tadoba.jpg",
//     buttonText: "Learn More",
//   },
//   {
//     title: "Shaniwar Wada, Pune",
//     description: "A historical fortification in the city of Pune.",
//     imageUrl: "/shaniwar.jpg",
//     buttonText: "Learn More",
//   },
//   {
//     title: "Sinhagad Fort, Pune",
//     description: "A historical fort near Pune, known for its scenic trekking routes.",
//     imageUrl: "/singhagad.jpg",
//     buttonText: "Learn More",
//   },
// ];

// export default function Layout({ children }: { children: React.ReactNode }) {{
//   return (
  
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <Navbar/>
//       <HeroSection />
//         {children}
//        {/* <DestinationCard title={title} image={image || "/herocab-banner.jpg"}/> */}
//        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
//   {/* Uncomment the header if needed */}
//   {/* <h1 className="text-center text-2xl font-bold text-black">Popular Destinations</h1> */}
//   {destinations.map((destination, index) => (
//   <div key={index} className="m-4">
//     <DestinationCard title={destination.title} image={destination.image} />
//   </div>
// ))}

// </div>
//     <div className="container mx-auto py-12">
//       {/* Transport Cards Section */}
//       <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
//         {transportModes.map((transport, index) => (
//           <ServiceCard key={index} mode={transport.mode} imageSrc={transport.imageSrc} description={transport.description} />
//         ))}
//       </div>
//       <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-6 text-center">Explore One-Way Travel Destinations</h1>
//       <div className="flex flex-wrap justify-center">
//         {destinations.map((destination, index) => (
//           <div key={index} className="m-4">
//             <DestinationCard title={destination.title} image={destination.image} />
//           </div>
//         ))}
//       </div>
//     </div>
//       <h1 className="text-2xl text-center text-black font-bold mt-10">Our Specialization</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
     
//       {locations.map((location, index) => (
//         <SpecializedCard
//           key={index}
//           title={location.title}
//           description={location.description}
//           imageUrl={location.imageUrl}
//           buttonText={location.buttonText}
//           onButtonClick={() => alert(`Navigating to ${location.title}`)}
//         />
//       ))}
//       </div>
//       <CTA/>
//        <Footer/>
      
//       </body>
//     </html>
//   );
// }
// "use client";

// import localFont from "next/font/local";
// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import HeroSection from "@/components/HeroSection";
// import Footer from "@/components/Footer";

// import Image from "next/image";
// import ServiceCard from "@/components/ServicesCard";
// import SpecializedCard from "@/components/SpecailizedCard";
// import CTA from "@/components/CTA";
// import DestinationCard, { DestinationProps } from '../components/DestinationCard';

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// const transportModes = [
//   { mode: 'Shivenari Bus', imageSrc: '/shivenri.jpg', description: "Oneways Cabs are a revolutionary concept in the transportation industry that allows you to book a one-way journey." },
//   { mode: 'Taxi', imageSrc: '/taxi.jpg', description: "Oneways Cabs are a revolutionary concept in the transportation industry that allows you to book a one-way journey." },
//   { mode: 'Rickshaw', imageSrc: '/rickshaw.jpg', description: "Oneways Cabs are a revolutionary concept in the transportation industry that allows you to book a one-way journey." },
//   { mode: 'ST Buses', imageSrc: '/st-bus.jpg', description: "Oneways Cabs are a revolutionary concept in the transportation industry that allows you to book a one-way journey." },
// ];

// type Destination = {
//   title: string;
//   image: string;
// };

// const destinations: Destination[] = [
//   {
//     title: 'Mumbai',
//     image: '/mumbai-city.jpg',
//   },
//   {
//     title: 'Mumbai',
//     image: '/mumbai-city.jpg',
//   },
//   {
//     title: 'Mumbai',
//     image: '/mumbai-city.jpg',
//   },
//   {
//     title: 'Mumbai',
//     image: '/mumbai-city.jpg',
//   },
//   {
//     title: 'Mumbai',
//     image: '/mumbai-city.jpg',
//   },
//   {
//     title: 'Mumbai',
//     image: '/mumbai-city.jpg',
//   },
// ];

// const locations = [
//   {
//     title: "Gateway of India, Mumbai",
//     description: "A famous monument in Mumbai, built during the 20th century.",
//     imageUrl: "/gatewayofindia.jpg",
//     buttonText: "Learn More",
//   },
//   {
//     title: "Ajanta Caves, Aurangabad",
//     description: "Ancient Buddhist cave monuments dating back to the 2nd century BCE.",
//     imageUrl: "/ajantacaves.jpg",
//     buttonText: "Learn More",
//   },
//   {
//     title: "Mahabaleshwar",
//     description: "A hill station famous for its beautiful viewpoints and strawberries.",
//     imageUrl: "/mahabaleshwar2.jpg",
//     buttonText: "Learn More",
//   },
//   {
//     title: "Tadoba National Park",
//     description: "A large wildlife sanctuary in Chandrapur, known for its tiger reserve.",
//     imageUrl: "/tadoba.jpg",
//     buttonText: "Learn More",
//   },
//   {
//     title: "Shaniwar Wada, Pune",
//     description: "A historical fortification in the city of Pune.",
//     imageUrl: "/shaniwar.jpg",
//     buttonText: "Learn More",
//   },
//   {
//     title: "Sinhagad Fort, Pune",
//     description: "A historical fort near Pune, known for its scenic trekking routes.",
//     imageUrl: "/singhagad.jpg",
//     buttonText: "Learn More",
//   },
// ];

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <> 
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//         <Navbar />
//         {children}
//         <HeroSection />

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
//           {destinations.map((destination, index) => (
//             <div key={index} className="m-4">
//               <DestinationCard title={destination.title} image={destination.image} />
//             </div>
//           ))}
//         </div>
//         <div className="container mx-auto py-12">
//           <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
//             {transportModes.map((transport, index) => (
//               <ServiceCard key={index} mode={transport.mode} imageSrc={transport.imageSrc} description={transport.description} />
//             ))}
//           </div>
//           <div className="container mx-auto p-4">
//             <h1 className="text-2xl font-bold mb-6 text-center">Explore One-Way Travel Destinations</h1>
//             <div className="flex flex-wrap justify-center">
//               {destinations.map((destination, index) => (
//                 <div key={index} className="m-4">
//                   <DestinationCard title={destination.title} image={destination.image} />
//                 </div>
//               ))}
//             </div>
//           </div>
//           <h1 className="text-2xl text-center text-black font-bold mt-10">Our Specialization</h1>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
//             {locations.map((location, index) => (
//               <SpecializedCard
//                 key={index}
//                 title={location.title}
//                 description={location.description}
//                 imageUrl={location.imageUrl}
//                 buttonText={location.buttonText}
//                 onButtonClick={() => alert(`Navigating to ${location.title}`)}
//               />
//             ))}
//           </div>
//           <CTA />
//           <Footer />
//         </div>
//       </body>
//     </html>
//     </>
//   )
// }
// app/layout.tsx

"use client"

import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection"
import Footer from "@/components/Footer";

import Image from "next/image";
import ServiceCard from "@/components/ServicesCard";
import SpecializedCard from "@/components/SpecailizedCard";
import CTA from "@/components/CTA";
import DestinationCard, { DestinationProps } from '../components/DestinationCard';
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


type Destination = {
  title: string;
  image: string;
};

// Example data of destinations
const destinations: Destination[] = [
  {
    title: 'Mumbai',
    image: '/mumbai-city.jpg',
  },
  {
    title: 'Mumbai',
    image: '/mumbai-city.jpg',
  },
  {
    title: 'Mumbai',
    image: '/mumbai-city.jpg',
  },
  {
    title: 'Mumbai',
    image: '/mumbai-city.jpg',
  },
  {
    title: 'Mumbai',
    image: '/mumbai-city.jpg',
  },
  {
    title: 'Mumbai',
    image: '/mumbai-city.jpg',
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >

      <Navbar />
         {children}
         <HeroSection />

       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
           {destinations.map((destination, index) => (
            <div key={index} className="m-4">
              <DestinationCard title={destination.title} image={destination.image} />
            </div>
          ))}
        </div>
        <div className="container mx-auto py-12">
          <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {transportModes.map((transport, index) => (
              <ServiceCard key={index} mode={transport.mode} imageSrc={transport.imageSrc} description={transport.description} />
            ))}
          </div>
          <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6 text-center">Explore One-Way Travel Destinations</h1>
            <div className="flex flex-wrap justify-center">
              {destinations.map((destination, index) => (
                <div key={index} className="m-4">
                  <DestinationCard title={destination.title} image={destination.image} />
                </div>
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
          <CTA />
          <Footer />
        </div>
  
      </body>
    </html>
  );
}
