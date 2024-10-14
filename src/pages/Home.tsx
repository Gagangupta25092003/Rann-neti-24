import React from 'react'
import { Link } from 'react-router-dom'
import Sponsors from './Sponsors.tsx'
import '../global.css';

export default function Home() {
  return (
    <div >
      <div className="container mt-8 px-6 p-auto w-4/12 h-screen flex flex-col items-center justify-center">
        <h1  className="text-7xl font-bold text-center mb-8">Welcome to Rann-neti' 2024</h1>
        <p className="text-xl text-center mb-12">
          Join us for an exhilarating sports fest at IIT Mandi from October 26-28, 2024!
        </p>
        <div className="flex justify-center">
          <Link to="/about" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </Link>
        </div>
      </div>
      <Sponsors />
    </div>
  )
}