'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';

const images = [
  '/images/home1.png',
  '/images/Home2.png',
  '/images/Home3.png',
  '/images/Home4.GIF',
];

export default function AutoSlidingCarousel() {
  return (
    <div className="w-full h-auto max-h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        className="h-full w-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <div className="relative w-full max-h-[90vh] aspect-[16/9]">
              <Image
                src={img}
                alt={`Slide ${index + 1}`}
                fill
                className="w-full h-full object-contain" // Ensures full visibility
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
