'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="backdrop-blur-md bg-white/40 dark:bg-black/40 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16">

          {/* Logo on the left */}
          <div className="flex items-center space-x-2 z-10">
            <Image
              src="/SCN/Logo/3FC924BE-2FAD-4329-8E56-0865A236653F.png"
              alt="SCN"
              width={32}
              height={32}
            />
            <span className="text-xl font-semibold text-black dark:text-white">Smart Connect Network Ltd.</span>
          </div>

          {/* Nav Links Centered */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-6 text-sm font-medium z-0 dark:text-white">
            <NavLink href="/">Home</NavLink>

            <HoverDropdown label="Our Services">
              <NavLink href="/Services">Consulting</NavLink>
              <NavLink href="/Services">Security</NavLink>
              <NavLink href="/Services">Networking</NavLink>
            </HoverDropdown>

            <HoverDropdown label="Service Areas">
              <NavLink href="/ServingAreas">Ontario</NavLink>
              <NavLink href="/ServingAreas">Alberta</NavLink>
            </HoverDropdown>

            <NavLink href="/AboutUs">About Us</NavLink>
            <NavLink href="/Contact">Contact Us</NavLink>
          </div>

          {/* Phone on the right */}
          <div className="hidden md:flex z-10">
            <a
              href="tel:+16472627460"
              className="flex items-center gap-2 bg-[#002ECC] text-white px-4 py-2 rounded-full shadow hover:bg-blue-700 transition"
            >
              <Phone size={16} /> +1 (647) 262-7460
            </a>
          </div>

          {/* Hamburger for mobile */}
          <div className="md:hidden z-10">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-sm font-medium">
          <NavLink href="/">Home</NavLink>

          <MobileDropdown title="Our Services">
            <NavLink href="/Services">Consulting</NavLink>
            <NavLink href="/Services">Security</NavLink>
            <NavLink href="/Services">Networking</NavLink>
          </MobileDropdown>

          <MobileDropdown title="Service Areas">
            <NavLink href="/ServingAreas">GTA (ON)</NavLink>
            <NavLink href="/ServingAreas">Calgary (AB)</NavLink>
          </MobileDropdown>

          <NavLink href="/AboutUs">About Us</NavLink>
          <NavLink href="/Contact">Contact Us</NavLink>

          <a
            href="tel:+16472627460"
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700 transition"
          >
            <Phone size={16} /> +1587-573-0100
          </a>
        </div>
      )}
    </nav>
  );
};

// Uniform styled link
const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <Link
    href={href}
    className="text-gray-800 dark:text-white hover:text-blue-600 hover:underline underline-offset-4 transition-colors block px-2 py-1"
  >
    {children}
  </Link>
);


// Hover dropdown for desktop
const HoverDropdown: React.FC<{ label: string; children: React.ReactNode }> = ({
  label,
  children,
}) => (
  <div className="relative group">
    <button className="text-gray-800 dark:text-white  hover:text-blue-600 py-1 hover:underline underline-offset-4">
      {label}  
    </button>
    <div className="absolute hidden group-hover:block text-gray-800 dark:text-white  bg-white/40 dark:bg-black/40 shadow-md mt-2 rounded-md z-20 min-w-[10rem]">
      <div className="flex flex-col p-2 space-y-1">{children}</div>
    </div>
  </div>
);

// Mobile dropdown
const MobileDropdown: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="text-gray-800 dark:text-white hover:text-blue-600  py-1 hover:underline underline-offset-4 w-full text-left"
      >
        {title}  
      </button>
      {open && <div className="text-gray-800 dark:text-white bg-white/40 dark:bg-black/40 ml-4 space-y-1 mt-1">{children}</div>}
    </div>
  );
};

export default Navbar;
