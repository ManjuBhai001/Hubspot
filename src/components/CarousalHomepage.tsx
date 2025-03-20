'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const logos = [
  '/images/King.jpg',
  '/images/Banaras Hindu University.png',
  '/images/Amrita.jpg',
  '/images/AIIMS Delhi.png',
  '/images/NIMHANS.jpg',
  '/images/PGIMER.jpg',
  '/images/CMC.jpg',
];

const loga = [
  '/images/Kingwr.png',
  '/images/BHU.png',
  '/images/AIIMS TEXT.png',
  '/images/NIIMS LOGO.png',
  '/images/pgimer logo.png',
  '/images/CMC.jpg',
];

export default function LogoCarousel() {
  return (
    <div className="bg-gradient-to-r from-gray-100 py-6 relative to-white">
      {/* Subtle Overlay for Better UI */}
      <div className="bg-gradient-to-r absolute from-white inset-0 opacity-70 pointer-events-none to-white via-transparent"></div>

      {/* First Row (Normal Direction) */}
      <div className="w-full overflow-hidden relative">
        <motion.div
          className="flex w-[200%] space-x-8" // Ensures the loop effect
          animate={{ x: ['0%', '-50%'] }}
          transition={{ ease: 'linear', duration: 30, repeat: Infinity }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex flex-shrink-0 bg-white h-[5rem] justify-center rounded-xl shadow-lg w-[10rem] duration-500 hover:shadow-2xl items-center transition-all"
            >
              <Image
                src={logo}
                alt="Logo"
                width={100}
                height={50}
                className="p-2 object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Second Row (Reverse Direction) */}
      <div className="w-full mt-6 overflow-hidden relative">
        <motion.div
          className="flex w-[200%] space-x-8" // Fix: Double width ensures seamless loop
          animate={{ x: ['-50%', '0%'] }}
          transition={{ ease: 'linear', duration: 30, repeat: Infinity, delay: 0 }}
        >
          {[...loga, ...loga].map((logo, index) => (
            <div
              key={index}
              className="flex flex-shrink-0 bg-white h-[5rem] justify-center rounded-xl shadow-lg w-[10rem] duration-500 hover:shadow-2xl items-center transition-all"
            >
              <Image
                src={logo}
                alt="Logo"
                width={100}
                height={50}
                className="p-2 object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
