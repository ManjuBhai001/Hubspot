'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';
import Image from "next/image";
import Script from 'next/script';

// Define type explicitly
const socialLinks: { icon: React.ElementType; link: string; name: string; hoverColor: string }[] = [
  { icon: FaInstagram, link: "https://instagram.com", name: "Instagram", hoverColor: "group-hover:text-pink-500" },
  { icon: FaFacebookF, link: "https://facebook.com", name: "Facebook", hoverColor: "group-hover:text-blue-600" },
  { icon: FaTwitter, link: "https://twitter.com", name: "Twitter", hoverColor: "group-hover:text-sky-500" },
  { icon: FaLinkedinIn, link: "https://linkedin.com", name: "LinkedIn", hoverColor: "group-hover:text-blue-700" },
  { icon: FaYoutube, link: "https://youtube.com", name: "YouTube", hoverColor: "group-hover:text-red-500" }
];

// Reusable Social Icon Component
const SocialIcon: React.FC<{ Icon: React.ElementType; link: string; name: string; hoverColor: string }> = ({
  Icon,
  link,
  name,
  hoverColor
}) => (
  <Link
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white p-2 rounded-full shadow-md text-[#0B3D61] group hover:scale-110 transition-transform"
    aria-label={`Visit our ${name} page`}
  >
    <Icon size={18} className={`transition-colors ${hoverColor}`} aria-hidden="true" />
  </Link>
);

const Header: React.FC = () => {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `document.createElement('link').rel = 'preload';`
        }}
      />

      <header className="bg-[#0B3D61] shadow-lg text-white w-full">
        {/* Top Navigation Bar */}
        <div className="flex bg-opacity-90 justify-between backdrop-blur-md items-center px-8 py-2">
          
          {/* Social Media Icons */}
          <div className="gap-4 hidden md:flex">
            {socialLinks.map(({ icon, link, name, hoverColor }) => (
              <SocialIcon key={name} Icon={icon} link={link} name={name} hoverColor={hoverColor} />
            ))}
          </div>

          {/* Optimized Logo for Performance */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="p-1 rounded-full shadow-md"
          >
            <Image
              src="/images/Logoa.JPG"
              alt="BA Doc Official Logo"
              width={50}
              height={50}
              priority
              decoding="async"
              fetchPriority="high"
              className="rounded-full object-cover"
            />
          </motion.div>
        </div>
      </header>
    </>
  );
};

export default Header;
