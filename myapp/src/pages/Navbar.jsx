import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/path/to/your/logo.png"
            alt="Logo"
            className="w-10 h-10 rounded-full border-2 border-white mr-2"
          />
          <span className="text-white text-xl font-bold">My App</span>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-white hover:text-gray-200">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-200">
            My Tests
          </a>
          <div className="relative">
            <button
              onClick={toggleMenu}
              className="flex items-center text-white hover:text-gray-200"
            >
              <img
                src="/path/to/your/profile-picture.png"
                alt="Profile"
                className="w-6 h-6 rounded-full border-2 border-white mr-2"
              />
              <span className="hidden md:block">John Doe</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 ml-1"
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                >
                  Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                >
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-gray-200 focus:outline-none focus:text-white"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3a2 2 0 012-2h16a2 2 0 110 4H2a2 2 0 01-2-2zM0 9a2 2 0 012-2h16a2 2 0 110 4H2a2 2 0 01-2-2zM0 15a2 2 0 012-2h16a2 2 0 110 4H2a2 2 0 01-2-2z" />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
              >
                Home
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
              >
                My Tests
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
              >
                Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
              >
                Settings
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
