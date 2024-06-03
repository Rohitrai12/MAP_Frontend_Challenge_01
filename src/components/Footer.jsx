import React from 'react';
import Logo from '../assets/Nike-Logo.png';

function Footer() {
  return (
    <footer className="bg-gray-200 py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img src={Logo} alt="Logo" className="h-[2.5rem] w-[5.5rem]" />
          <p className="text-sm text-gray-600 mt-2">© 2024 Your Company</p>
        </div>
        <nav>
          <ul className="flex space-x-4 font-semibold">
            <li><a href="#" className="hover:text-gray-600">Home</a></li>
            <li><a href="#" className="hover:text-gray-600">About</a></li>
            <li><a href="#" className="hover:text-gray-600">Services</a></li>
            <li><a href="#" className="hover:text-gray-600">Contact</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
