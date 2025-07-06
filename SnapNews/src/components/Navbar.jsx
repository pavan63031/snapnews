import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = (
    <>
      <Link to="/" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
      <Link to="/entertainment" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Entertainment</Link>
      <Link to="/business" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Business</Link>
      <Link to="/general" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>General</Link>
      <Link to="/health" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Health</Link>
      <Link to="/science" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Science</Link>
      <Link to="/sports" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Sports</Link>
      <Link to="/technology"  className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Technology</Link>
    </>
  );

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">
          Snap News
        </Link>


        <div className="hidden md:flex gap-4 text-gray-700 font-medium">
          {menuItems}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-6 py-3 space-y-2 flex flex-col shadow-md text-gray-700 font-medium">
          {menuItems}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
