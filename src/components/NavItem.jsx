import React from 'react';

export default function NavItem({ href, children }) {
  return (
    <li>
      <a href={href}
        className="text-white hover:text-[#d9d9d9] transition-colors duration-200 font-medium px-3 py-2"
      >
        {children}
      </a>
    </li>
  );
}
