import React from "react";
import { Link } from "react-router-dom";
import Sponsors from "./Sponsors.tsx";
import Timer from "../components/timer.js"; // Import Timer component
import "../global.css"; // You may still need this for global styles

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <div className="flex-grow flex flex-col md:flex-row relative">
        {/* Left Column */}
        <div className="container mt-8 px-4 md:px-6 w-full md:w-4/12 flex flex-col items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-4 md:mb-8">
            Welcome to Rann-neti' 2024
          </h1>
          <p className="text-lg md:text-xl text-center mb-6 md:mb-12">
            Join us for an exhilarating sports fest at IIT Mandi from October
            26-28, 2024!
          </p>
          <div className="flex justify-center">
            <Link
              to="/about"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-2 text-xs md:text-base md:py-2 md:px-4 rounded"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Column with Timer */}
        <div className="w-full md:w-8/12 flex items-center justify-center mt-4 md:mt-0">
          <div className="flex items-center justify-center h-20 w-full max-w-md mx-auto py-1 px-2">
            <div className="timer">
              <Timer />
            </div>
          </div>
        </div>
      </div>

      {/* Sponsors component at the bottom */}
      <div className="sponsor">
        <Sponsors />
      </div>
    </div>
  );
}
