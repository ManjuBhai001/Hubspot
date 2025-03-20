'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Mail, MessageCircle, Calendar, LogIn, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils'; // For class merging

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <nav className="bg-blue-900 shadow-lg text-white w-full px-6 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold hover:text-gray-200 tracking-wide">
          MBBS&nbsp;WALLAH
        </Link>

        {/* Desktop Navigation */}
        <div className="text-lg font-medium gap-8 hidden items-center md:flex">
          <Dropdown title="Home">
            <DropdownItem href="#" icon={PhoneCall} text="Live Counselling" />
            <DropdownItem href="#" icon={PhoneCall} text="Call Us" />
            <DropdownItem href="#" icon={Mail} text="Email" />
            <DropdownItem href="#" icon={MessageCircle} text="WhatsApp" />
          </Dropdown>

          <Dropdown title="Login">
            <DropdownItem href="#" icon={Calendar} text="Request Callback" />
            <DropdownItem href="#" icon={LogIn} text="Book Appointment" />
          </Dropdown>

          <Link href="/about" className="font-semibold hover:text-gray-300 transition">About</Link>
          <Link href="/courses" className="font-semibold hover:text-gray-300 transition">Courses</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="outline" className={cn("bg-blue-950 text-white hover:shadow-lg transition-shadow")} onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-blue-800 rounded-lg shadow-lg text-white md:hidden mt-2 px-6 py-4 space-y-4"
        >
          <MobileDropdown title="Home">
            <DropdownItem href="#" icon={PhoneCall} text="Live Counselling" />
            <DropdownItem href="#" icon={PhoneCall} text="Call Us" />
            <DropdownItem href="#" icon={Mail} text="Email" />
            <DropdownItem href="#" icon={MessageCircle} text="WhatsApp" />
          </MobileDropdown>

          <MobileDropdown title="Login">
            <DropdownItem href="#" icon={Calendar} text="Request Callback" />
            <DropdownItem href="#" icon={LogIn} text="Book Appointment" />
          </MobileDropdown>

          <Link href="/about" className="block font-semibold hover:text-gray-400 py-2 transition">About</Link>
          <Link href="/courses" className="block font-semibold hover:text-gray-400 py-2 transition">Courses</Link>
        </motion.div>
      )}
    </nav>
  );
}

/* ✅ Fixed Mobile Dropdown Component */
const MobileDropdown = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const toggleDropdown = useCallback(() => setOpen((prev) => !prev), []);

  return (
    <div className="border-b border-gray-600">
      <button onClick={toggleDropdown} className="flex justify-between text-white w-full font-semibold items-center py-2">
        {title} <ChevronDown size={18} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        {children}
      </motion.div>
    </div>
  );
};

/* ✅ Desktop Dropdown Component */
const Dropdown = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setTimeout(() => setShowDropdown(false), 200)} className="relative">
      <button className="flex text-white font-semibold gap-2 hover:text-orange-300 items-center transition">
        {title} <ChevronDown size={18} />
      </button>
      {showDropdown && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="bg-blue-800 rounded-lg shadow-lg text-white w-48 absolute mt-2 py-2 z-20">
          {children}
        </motion.div>
      )}
    </div>
  );
};

/* ✅ Dropdown Item */
const DropdownItem = ({ href, icon: Icon, text }: { href: string; icon: React.ElementType; text: string }) => (
  <Link href={href} className="flex rounded-lg text-white gap-3 hover:bg-blue-700 items-center px-4 py-2 transition">
    <Icon size={18} className="text-orange-300" />
    {text}
  </Link>
);
