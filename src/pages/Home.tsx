import React, { useState, useEffect } from "react";
import Sponsors from "./Sponsors.tsx";
import Timer from "../components/timer.js"; // Import Timer component
import CountdownTimer from "../components/CountdownTimer.tsx";

export default function Home() {
  const [x1, setX1] = useState(0);
  const [x2, setX2] = useState(0);
  const [x3, setX3] = useState(0);
  const [x4, setX4] = useState(0);

  const targets = [20, 1000, 10, 10000]; // Target values for x1, x2, x3, x4
  const duration = 5000; // Animation duration (ms)

  // Generic function to animate a number from 0 to a target value
  const animateNumber = (setValue, target) => {
    let start = 0;
    const increment = target / (duration / 100); // Increment step

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setValue(target); // Ensure we hit the exact target at the end
        clearInterval(timer);
      } else {
        setValue(Math.ceil(start)); // Update state with the current value
      }
    }, 100); // Adjust the timing for each step (100ms)
  };

  useEffect(() => {
    // Start animating each number
    animateNumber(setX1, targets[0]);
    animateNumber(setX2, targets[1]);
    animateNumber(setX3, targets[2]);
    animateNumber(setX4, targets[3]);

    // Cleanup intervals when component unmounts
    return () => {
      clearInterval(x1);
      clearInterval(x2);
      clearInterval(x3);
      clearInterval(x4);
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("aboutSection");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const targetDate = "2024-10-26T00:00:00";
  return (
    <div className="flex flex-col  bg-black">
      <div className="flex-grow flex flex-col items-center justify-center">
        {/* Left Column - now centered */}
        <img src="./logo1.png" className="w-72" />
        <div className="container mt-8 px-4 md:px-6 w-full flex flex-col items-center justify-center mb-10 text-red-600">
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-2 ">
            Rann-Neeti' 2024
          </h1>
          <p className="text-lg md:text-4xl text-center ">
            RISE FROM THE ASHES
          </p>
        </div>

        {/* Right Column with Timer - below the left column and also centered */}
        <div className="flex items-center justify-center w-full max-w-md">
          <div className="timer text-7xl ">
            {/* <Timer /> */}
            <CountdownTimer targetDate={targetDate} />
          </div>
        </div>
      </div>

      {/* Black background section for the About page with content directly added here */}
      <div
        id="aboutSection"
        className="bg-black text-white flex items-center justify-center mt-20"
        style={{ minHeight: "100vh" }}
      >
        <div className="container flex flex-col items-center justify-between w-full p-10">
          {/* Left Box - About Text */}
          <div className="w-72 md:w-1/3">
            {/* <img
              src="/logo.jpg" // Replace with your actual logo path
              alt="Rann-neti Logo"
              className="w-1000 h-1000" // Adjust width and height as necessary
            /> */}
            <img src="./logo.jpg" alt="Your Image" className="w-full" />
          </div>
          <div className=" md:w-2/3 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-4">About Rann-Neti' 2024</h2>
            <p className="text-lg mb-6">
              Rann-neti' 2024 is an exciting sports fest held at IIT Mandi from
              October 26 to 28, 2024. It brings together athletes from various
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
            <p className="mt-4 text-lg">
              Rann-neeti, over the years, has proved to be a fierce battleground
              for various colleges to show their might in the field of sports.
              With over 1000 participants, Rann-neeti is just the perfect event
              to catch a glimpse of the immense sporting potential that we
              possess as a nation.
            </p>
            <h2 className="text-2xl font-bold mt-8 mb-4">
              What you take back?
            </h2>
            <p className="mt-4 text-lg">
              It is that time of the year when champions rise from the ashes on
              the hallowed grounds of IIT Mandi. An exciting sports fest is
              about forgetting the busy and tedious lifestyle and adding some
              fun to the normal dull life. We provide you with surreal options
              to have a bucket full of joyous memories. Don't miss out on
              anything, this Rann-neeti.
            </p>
          </div>
          <div className="py-8">
            <div className="container mx-auto px-6"></div>
          </div>

          {/* Right Box - Logo */}
        </div>
      </div>
      <div className="w-full bg-red-800 py-12 flex flex-col items-center space-y-8">
        <p className="md:text-5xl text-3xl font-bold"> Some Stats About Us</p>
        <div className="flex flex-col md:flex-row text-5xl md:text-7xl font-bold">
          <div className="flex flex-col py-4 md:py-0  md:border-b-0 md:px-16  md:border-r-2">
            <p>{x1}+</p>
            <p className="text-lg">Number of Colleges</p>
          </div>
          <div className="flex flex-col  md:border-b-0 py-4 md:px-16 md:py-0 md:border-r-2">
            <p>{x2}+</p>
            <p className="text-lg">Footfall</p>
          </div>
          <div className="flex flex-col  md:border-b-0 py-4 md:px-16 md:py-0 md:border-r-2">
            <p>{x3}+</p>
            <p className="text-lg">Events</p>
          </div>
          <div className="flex flex-col  md:border-b-0 py-4 md:py-0  md:px-16 md:py-0 ">
            <p>{x4}+</p>
            <p className="text-lg">Reach</p>
          </div>
        </div>
      </div>
      <div className="p-8 text-white ">
        <p className="text-3xl md:text-5xl py-4 text-red-600 font-bold">
          Contact Team Rann-Neeti{" "}
        </p>
        <div className="flex space-x-16 md:space-x-64 text-sm">
          <div>
            <p className="text-xl md:text-2xl ">Mourya</p>
            <p>Convenor</p>
            <p>+91 7989172085</p>
          </div>
          <div>
            <p className="text-xl md:text-2xl">Gagan Gupta</p>
            <p>Co-Convenor</p>
            <p>+91 7521817169</p>
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
