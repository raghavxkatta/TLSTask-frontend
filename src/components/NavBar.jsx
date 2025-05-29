// src/NavBar.jsx
import React, { useState, useEffect } from 'react';
import NavItem from './NavItem';
import { Link, useNavigate } from 'react-router-dom';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'Tech Prep', href: '#techprep' },
  { name: 'Design Lab', href: '#designlab' },
  { name: 'Internship', href: '#summerintern' },
  { name: 'Mini Projects', href: '#miniprojects' },
  { name: 'Contact', href: '#contact' },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const userName = localStorage.getItem('tls_name');
    setIsLoggedIn(!!userName);
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('tls_name');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#070054]">
      <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 justify-between">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0" >
            <div className="bg-white border rounded-lg p-1">
              <img src="/TLSlogo.png" alt="TechLearn Logo" className="h-8" />
            </div>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-6 text-white">
            {links.map(link => (
              <NavItem key={link.href} href={link.href}>
                {link.name}
              </NavItem>
            ))}
            {isLoggedIn && (
              <NavItem href="/dashboard">Dashboard</NavItem>
            )}
          </ul>

          {/* Desktop Sign Up/Sign Out */}
          <div className="hidden md:flex">
            {isLoggedIn ? (
              <button
                onClick={handleSignOut}
                className="px-4 py-2 bg-white text-[#070054] rounded-md font-medium hover:bg-gray-100 transition duration-200"
              >
                Sign Out
              </button>
            ) : (
              <Link
                to="/signup"
                className="px-4 py-2 bg-white text-[#070054] rounded-md font-medium hover:bg-gray-100 transition duration-200"
              >
                Sign Up
              </Link>
            )}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(o => !o)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {open ? (
                /* X icon */ 
                <svg className="w-6 h-6" /* ... */ />
              ) : (
                /* ☰ icon */
                <svg className="w-6 h-6" /* ... */ />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#070054] text-white">
          <ul className="px-4 pt-2 pb-4 space-y-1">
            {links.map(link => (
              <NavItem key={link.href} href={link.href}>
                {link.name}
              </NavItem>
            ))}
            {isLoggedIn && (
              <NavItem href="/dashboard">Dashboard</NavItem>
            )}
          </ul>

          {/* Mobile Sign Up/Sign Out */}
          <div className="px-4 pb-4">
            {isLoggedIn ? (
              <button
                onClick={handleSignOut}
                className="block w-full text-center px-4 py-2 bg-white text-[#070054] rounded-md font-medium hover:bg-gray-100 transition duration-200"
              >
                Sign Out
              </button>
            ) : (
              <Link
                to="/signup"
                className="block text-center px-4 py-2 bg-white text-[#070054] rounded-md font-medium hover:bg-gray-100 transition duration-200"
              >
                Sign Up
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
