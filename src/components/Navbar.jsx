import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">

        <Link to="/" className="text-xl font-bold text-blue-600 mr-8">
          Snap News
        </Link>

        <div className="hidden md:flex gap-4 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600 mx-[10px]">Home</Link>
          <Link to="/entertainment" className="hover:text-blue-600 mx-[15px]">Entertainment</Link>
          <Link to="/business" className="hover:text-blue-600 mx-[15px]">Business</Link>
          <Link to="/general" className="hover:text-blue-600 mx-[15px]">General</Link>
          <Link to="/health" className="hover:text-blue-600 mx-[15px]">Health</Link>
          <Link to="/science" className="hover:text-blue-600 mx-[15px]">Science</Link>
          <Link to="/sports" className="hover:text-blue-600 mx-[15px]">Sports</Link>
          <Link to="/technology" className="hover:text-blue-600 mx-[15px]">Technology</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
