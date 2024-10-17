import React from "react";

export default function About() {
  return (
    <div className="px-6 md:py-12 bg-black  text-center md:text-left items-center flex flex-col  ">
      <div className="w-72 flex items-center">
        <img src="./logo.jpg" className="w-72" />
      </div>
      <div>
        <h1 className="text-4xl font-bold mb-8" style={{ color: "#f0f0f0", textShadow: "2px 2px 5px #b22222" }}>About Rann-Neeti' 2024</h1>
        <p className="text-lg mb-6">
          Rann-neti' 2024 is an exciting sports fest held at IIT Mandi from
          October 26 to 28, 2024 . It brings together athletes from various
          institutions to compete in a wide range of sports.
        </p>
        <p className="text-lg mb-6">
          Our mission is to promote sportsmanship, teamwork, and healthy
          competition among students while providing a platform for them to
          showcase their athletic talents.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Event Details</h2>
        <ul className="list-disc list-inside text-lg">
          <li>Date: October 26-to 28, 2024</li>
          <li>Venue: IIT Mandi Campus</li>
          <li>Participants: College students from across the country</li>
        </ul>
        <p className="mt-4 text-xl">
                Rann-neeti, over the years, has proved to be a fierce
                battleground for various colleges to show their might in the
                field of sports. With over 1000 participants, Rann-neeti is just
                the perfect event to catch a glimpse of the immense sporting
                potential that we possess as a nation.
              </p>
              <h2 className="text-2xl font-bold mt-8 mb-4">
              What you take back?
              </h2>
              <p className="mt-4 text-xl">
              It is that time of the year when champions rise from the ashes on the hallowed grounds of IIT Mandi. An exciting sports fest is about forgetting the busy and tedious lifestyle and adding some fun to the normal dull life. We provide you with surreal options to have a bucket full of joyous memories. Don't miss out on anything, this Rann-neeti.
              </p>
      </div>
      
    </div>
  );
}
