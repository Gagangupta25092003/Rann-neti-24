import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <p className="text-lg text-center md:text-left">
            &copy; 2024 Rann-neti' Sports Fest. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-red-600 text-xl transition-colors">Facebook</a>
            <a href="#" className="hover:text-red-600 text-xl transition-colors">Twitter</a>
            <a href="#" className="hover:text-red-600 text-xl transition-colors">Instagram</a>
          </div>
        </div>
        <div className="border-t border-gray-600 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left text-2xl">
            <p className="text-md">Contact Us: <a href="mailto:iitmandi@rann-neeti.co.in" className="text-red-600 hover:underline">iitmandi@rann-neeti.co.in</a></p>
          </div>
          <div className="flex space-x-4 mt-4 gap-5 md:mt-0 text-2xl">
            <a href="#" className="hover:text-red-600 text-md transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-red-600 text-md transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}