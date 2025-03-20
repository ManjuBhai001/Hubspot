'use client';

import Image from 'next/image';
import { CheckCircle, CalendarCheck, DollarSign, Star } from 'lucide-react';

export default function Travel4XploreSection() {
  return (
    <>
      {/* About Us Section */}
      <section className="flex flex-col bg-gray-100 gap-8 items-center lg:flex-row px-6 py-12">
        {/* Left Side: Image & Floating Logo */}
        <div className="w-full lg:w-1/2 relative">
          <Image
            src="/images/Logoa.jpg"
            alt="Get Your Doc Coat"
            width={700}
            height={500}
            className="rounded-2xl shadow-lg"
          />
          <div className="bg-white p-2 rounded-lg shadow-md absolute left-6 top-6">
            <Image
              src="/images/Logoa.jpg"
              alt="Travel4Xplore Logo"
              width={120}
              height={120}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Right Side: Text & Features */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h3 className="text-green-600 text-sm font-semibold uppercase">About Us</h3>
          <h2 className="text-4xl text-gray-900 font-bold">Be a Doc</h2>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptatibus, atque
            facere officiis nostrum vitae modi adipisci ipsa nesciunt voluptate perferendis porro
            animi accusantium a laborum, dicta maiores voluptatem sint?
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Feature icon={CheckCircle} text="We Promise to Help You Achieve Your Dreams!" />
            <Feature icon={DollarSign} text="Competitive pricing offers" />
            <Feature icon={CalendarCheck} text="Dedicated Towards the Placements" />
            <Feature icon={Star} text="Leading industry reputation" />
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="bg-gray-100 md:px-16 px-5 py-10">
        <div className="flex flex-col gap-8 items-center max-w-6xl md:flex-row mx-auto">
          <div className="bg-white border-green-600 border-l-4 p-6 rounded-lg shadow-lg w-full md:w-1/2">
            <h2 className="text-3xl text-green-700 font-bold mb-4">Our Services</h2>
            <ol className="list-decimal text-gray-700 pl-5 space-y-4">
              <li>
                <span className="font-semibold">Personalized Counseling:</span> MBBS-Wala offers
                personalized counseling sessions to understand each student’s unique aspirations,
                academic background, and career goals. Our experienced counselors provide tailored
                advice to help students make informed decisions.
              </li>
              <li>
                <span className="font-semibold">Course and College Selection:</span> With an
                extensive database of medical institutions worldwide, MBBS-Wala assists students in
                selecting the right course and college that aligns with their interests and
                qualifications. We provide detailed guidance to ensure the best fit.
              </li>
            </ol>
            <button className="bg-green-600 rounded-lg text-white hover:bg-green-700 mt-6 px-6 py-2 transition">
              Apply Now
            </button>
          </div>

          {/* Right Side: Services Image */}
          <div className="w-full md:w-1/2 relative">
            <Image
              src="/images/services.jpg"
              alt="Medical students discussing"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}

/* Reusable Feature Component */
const Feature = ({
  icon: Icon,
  text,
}: {
  icon: React.ElementType;
  text: string;
}) => (
  <div className="flex gap-3 items-center">
    <Icon className="text-green-600" size={24} />
    <span className="text-gray-800 font-semibold">{text}</span>
  </div>
);
