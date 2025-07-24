import { Phone } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-xl font-semibold flex items-center gap-2">
          <img src="/logo.svg" alt="logo" className="w-6 h-6" />
          <span>Link Secure</span>
        </div>
        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <li><Link href="/">Home</Link></li>
          <li><Link href="#services">Our Services</Link></li>
          <li><Link href="#areas">Service Areas</Link></li>
          <li><Link href="#about">About Us</Link></li>
          <li><Link href="#contact">Contact Us</Link></li>
        </ul>
        <a
          href="tel:+16472627460"
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700"
        >
          <Phone size={16} /> +1 (647) 262-7460
        </a>
      </nav>
    </header>
  );
}
