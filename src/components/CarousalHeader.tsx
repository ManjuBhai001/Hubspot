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
    <div>
    <div className="h-screen w-full lg:h-[600px] max-h-[calc(100vh-80px)] md:h-[500px] overflow-hidden sm:h-[400px]">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        className="h-full w-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <div className="h-full w-full relative">
              <Image
                src={img}
                alt={`Slide ${index + 1}`}
                fill
                className="object-contain" // Ensures full image visibility
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
}
