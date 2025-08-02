import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="flex flex-wrap justify-between items-center max-w-6xl mx-auto p-4 text-white">
        {/* Logo */}
        <Link to="/">
          <h1 className="font-bold text-xl sm:text-2xl">
            <span className="text-indigo-400">HANGMAN GAME</span>{' '}
            <span className="text-slate-300 text-sm sm:text-base">
              Make coding fun
            </span>
          </h1>
        </Link>

        {/* Search */}
        <form className="flex items-center bg-gray-700 p-2 rounded-md mt-3 sm:mt-0">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded-md bg-gray-800 text-white w-24 sm:w-48 placeholder-slate-400 focus:outline-none"
          />
          <FaSearch className="ml-2 text-slate-400 hover:text-white cursor-pointer" />
        </form>

        {/* Navigation Links */}
        <ul className="flex gap-4 mt-3 sm:mt-0 text-sm sm:text-base">
          <li>
            <Link
              to="/"
              className="text-slate-400 hover:text-white transition duration-150"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-slate-400 hover:text-white transition duration-150"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/signin"
              className="text-slate-400 hover:text-white transition duration-150"
            >
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
