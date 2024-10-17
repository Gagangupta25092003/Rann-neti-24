import React from 'react'

export default function About() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">About Rann-neti' 2024</h1>
      <p className="text-lg mb-6">
        Rann-neti' 2024 is an exciting sports fest held at IIT Mandi from October 26-28, 2024. 
        It brings together athletes from various institutions to compete in a wide range of sports.
      </p>
      <p className="text-lg mb-6">
        Our mission is to promote sportsmanship, teamwork, and healthy competition among students 
        while providing a platform for them to showcase their athletic talents.
      </p>
      <h2 className="text-2xl font-bold mt-8 mb-4">Event Details</h2>
      <ul className="list-disc list-inside text-lg">
        <li>Date: October 26-28, 2024</li>
        <li>Venue: IIT Mandi Campus</li>
        <li>Participants: College students from across the country</li>
      </ul>
    </div>
  )
}