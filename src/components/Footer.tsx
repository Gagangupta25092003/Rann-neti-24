import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center text-xl">
          <p>&copy; 2024 Rann-neti' Sports Fest. All rights reserved.</p>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-red-600">Facebook</a>
            <a href="#" className="hover:text-red-600">Twitter</a>
            <a href="#" className="hover:text-red-600">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  )
}