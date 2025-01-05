// change header border and smoodth hamburger menu also add transition effect on hover

import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-transparent text-white" style={{ fontFamily: 'Consolas, monospace' }}>
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link 
          to="/" 
          className="text-3xl font-bold tracking-wide text-white relative group"
          style={{ 
            fontFamily: 'Montserrat, sans-serif',
            padding: '0.5rem 1rem',
          }}
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-red-500">
            TRISHAL
          </span>
          <span className="absolute inset-0 border-2 border-red-500 -skew-x-12 z-0 transition-colors duration-300 group-hover:border-white"></span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) => 
              `${isActive ? 'text-red-500' : 'text-white'} hover:text-red-500 transition text-lg`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/aboutme"
            className={({ isActive }) => 
              `${isActive ? 'text-red-500' : 'text-white'} hover:text-red-500 transition text-lg`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => 
              `${isActive ? 'text-red-500' : 'text-white'} hover:text-red-500 transition text-lg`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contactme"
            className={({ isActive }) => 
              `${isActive ? 'text-red-500' : 'text-white'} hover:text-red-500 transition text-lg`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/work-experience"
            className={({ isActive }) => 
              `${isActive ? 'text-red-500' : 'text-white'} hover:text-red-500 transition text-lg`
            }
          >
            Work Experience
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black text-white space-y-4 px-4 py-6">
          <NavLink
            to="/"
            className={({ isActive }) => 
              `block hover:text-red-500 transition ${isActive ? 'text-red-500' : ''}`
            }
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/aboutme"
            className={({ isActive }) => 
              `block hover:text-red-500 transition ${isActive ? 'text-red-500' : ''}`
            }
            onClick={toggleMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => 
              `block hover:text-red-500 transition ${isActive ? 'text-red-500' : ''}`
            }
            onClick={toggleMenu}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contactme"
            className={({ isActive }) => 
              `block hover:text-red-500 transition ${isActive ? 'text-red-500' : ''}`
            }
            onClick={toggleMenu}
          >
            Contact
          </NavLink>
          <NavLink
            to="/work-experience"
            className={({ isActive }) => 
              `block hover:text-red-500 transition ${isActive ? 'text-red-500' : ''}`
            }
            onClick={toggleMenu}
          >
            Work Experience
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;