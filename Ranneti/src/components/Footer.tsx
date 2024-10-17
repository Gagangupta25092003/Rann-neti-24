import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center text-xl">
          {/* Copyright text visible on all screens */}
          <p className="text-center sm:text-left">
            &copy; 2024 Rann-neti' Sports Fest. All rights reserved.
          </p>

          {/* Social links hidden on small screens */}
          <div className="hidden sm:flex space-x-4 text-xl">
            <a
              href="https://www.facebook.com/Rannneetivqv"
              className="hover:text-red-600"
            >
              Facebook
            </a>
            <a href="#" className="hover:text-red-600">
              Twitter
            </a>
            <a
              href="https://www.instagram.com/rann_neeti.iitmandi/profilecard/?igsh=aGMwcWZ3Zzc1c3B4"
              className="hover:text-red-600"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
