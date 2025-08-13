'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-600 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Smart Connect Network Ltd.</h3>
          <p className="leading-relaxed">
            Canada &apos;s leading trusted experts in CCTV, access control, and network solutions. 
            We secure homes and businesses with smart, scalable technology.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="#home" className="hover:underline">Home</Link></li>
            <li><Link href="#services" className="hover:underline">Services</Link></li>
            <li><Link href="#about" className="hover:underline">About</Link></li>
            <li><Link href="#contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4">What We Do</h4>
          <ul className="space-y-2">
            <li><Link href="#services" className="hover:underline">CCTV Installations</Link></li>
            <li><Link href="#services" className="hover:underline">Access Control</Link></li>
            <li><Link href="#services" className="hover:underline">Network Cabling</Link></li>
            <li><Link href="#services" className="hover:underline">Commercial Security</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <Mail size={16} />
              <a href="mailto:info@scnltd.com" className="underline break-all">
                info@scnltd.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} />
              <a href="tel:+16472627460" className="underline">
                +1587-573-0100
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} />
              <span>Serving GTA (Ontario) & Calgary</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="h-[1px] bg-white/20 w-full"></div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 text-center text-xs py-4 px-4 tracking-wide">
        © 2025 Smart Connect Network Ltd. | All Rights Reserved
      </div>
    </footer>
  );
}
