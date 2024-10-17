import React from "react";
import Sponsors from "./Sponsors.tsx";
import Timer from "../components/timer.js"; // Import Timer component
import "../global.css"; // You may still need this for global styles

export default function Home() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("aboutSection");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex flex-col items-center justify-center">
        {/* Left Column - now centered */}
        <div className="container mt-8 px-4 md:px-6 w-full flex flex-col items-center justify-center mb-10">
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-4 md:mb-8">
            Welcome to Rann-neti' 2024
          </h1>
          <p className="text-lg md:text-xl text-center mb-6 md:mb-12">
            Join us for an exhilarating sports fest at IIT Mandi from October
            26-28, 2024!
          </p>
          <div className="flex justify-center">
            <button
              onClick={scrollToAbout}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-2 text-xs md:text-base md:py-2 md:px-4 rounded"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right Column with Timer - below the left column and also centered */}
        <div className="flex items-center justify-center w-full max-w-md">
          <div className="timer pl-36">
            <Timer />
          </div>
        </div>
      </div>

      {/* Black background section for the About page with content directly added here */}
      <div
        id="aboutSection"
        className="bg-black text-white flex items-center justify-center mt-20"
        style={{ minHeight: "100vh" }}
      >
        <div className="container flex flex-col md:flex-row items-center justify-between w-full p-10">
          {/* Left Box - About Text */}
          <div className="w-full md:w-6/12 text-center md:text-left mb-8 md:mb-0">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ fontFamily: "'MedievalSharp', sans-serif" }}
            >
              About Rann-neti' 2024
            </h2>
            <p className="text-lg mb-6">
              Rann-neti' 2024 is an exciting sports fest held at IIT Mandi from
              October 26-28, 2024. It brings together athletes from various
              institutions to compete in a wide range of sports.
            </p>
            <p className="text-lg mb-6">
              Our mission is to promote sportsmanship, teamwork, and healthy
              competition among students while providing a platform for them to
              showcase their athletic talents.
            </p>
            <h2 className="text-2xl font-bold mt-8 mb-4">Event Details</h2>
            <ul className="list-disc list-inside text-lg">
              <li>Date: October 26-28, 2024</li>
              <li>Venue: IIT Mandi Campus</li>
              <li>Participants: College students from across the country</li>
            </ul>
          </div>

          {/* Right Box - Logo */}
          <div className="w-full md:w-6/12 flex items-center justify-center">
            {/* <img
              src="/logo.jpg" // Replace with your actual logo path
              alt="Rann-neti Logo"
              className="w-1000 h-1000" // Adjust width and height as necessary
            /> */}
            <img
              src="./logo.jpg"
              alt="Your Image"
              style={{ width: "500px", height: "500px" }}
            />
          </div>
        </div>
      </div>

      {/* Sponsors component at the bottom */}
      <div className="sponsor mt-10">
        <Sponsors />
      </div>
    </div>
  );
}
