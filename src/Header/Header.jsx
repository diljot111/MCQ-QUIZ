import React from "react";

export default function Header() {
  return (
    <header className="bg-white text-black shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        {/* Logo and Team Name */}
        <div className="flex items-center space-x-4">
          <img
            src="/path-to-logo.png" // Replace with your image path or URL
            alt="Team Logo"
            className="w-12 h-12"
          />
          <h1 className="text-lg font-bold flex justify-center pl-10">PCTE Placement Quiz </h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
           
          </li>
          <li>
            <a href="#about" className="hover:text-blue-500">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-500">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}  