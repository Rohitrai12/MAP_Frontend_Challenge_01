import React from 'react';
import Logo from '../assets/Nike-Logo.png'

function Header() {
  return (
    <header className="bg-gray-200 shadow-lg py-4">
      <div className="container mx-auto flex justify-between items-center">
        <img src={Logo} alt="" className="h-[2.5rem] w-[5.5rem]" />
        <nav>
          <ul className="flex space-x-4 font-semibold">
            <li><a href="#" className="hover:text-gray-600">Home</a></li>
            <li><a href="#" className="hover:text-gray-600">About</a></li>
            <li><a href="#" className="hover:text-gray-600">Services</a></li>
            <li><a href="#" className="hover:text-gray-600">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
