import Image from "next/image";
import Link from "next/link";
import { 
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, 
  FaFacebookF, FaInstagram, FaLinkedinIn 
} from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#0B1A2A] text-white py-12">
      <div className="lg:px-12 max-w-7xl mx-auto px-6">
        
        {/* Upper Section */}
        <div className="grid grid-cols-1 border-b border-gray-700 gap-8 md:grid-cols-3 pb-8">
          
          {/* Logo Section */}
          <div className="flex flex-col text-center items-center md:items-center">
            <h2 className="flex text-[#18A0FB] text-4xl font-bold items-center tracking-wide">
              <span className="mr-2">MBBS WALLAH</span>
            </h2>

            {/* Logo Image */}
            <Image
              src="/images/LOGGO.jpg"
              alt="MBBS official Logo"
              width={100} 
              height={100}
              priority
              className="h-16 rounded-full w-16 hover:scale-105 lg:h-24 lg:w-24 mt-3 mx-auto object-cover transition-transform"
            />

            <p className="text-center text-gray-400 text-sm md:text-left mt-3">
              Your trusted guide to a career in medicine.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-[#18A0FB] text-xl font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 text-left gap-x-6 gap-y-3">
              {[
                { name: "Home", link: "/" },
                { name: "Login", link: "/login" },
                { name: "Testimonial", link: "/testimonial" },
                { name: "FAQs", link: "/faqs" },
                { name: "Career", link: "/career" },
                { name: "Blogs", link: "/blogs" },
                { name: "State", link: "/state" },
                { name: "Counseling", link: "/counseling" },
                { name: "Privacy Policy", link: "/privacy-policy" },
              ].map(({ name, link }) => (
                <Link 
                  key={link} 
                  href={link} 
                  className="flex text-gray-400 duration-300 hover:text-[#18A0FB] items-center transition"
                >
                  <span className="mr-2">➤</span> {name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-[#18A0FB] text-xl font-semibold mb-4">Contact Details</h3>
            <p className="flex text-gray-300 items-center">
              <FaPhoneAlt className="text-green-400 mr-2" /> +91 1234 656 789
            </p>
            <p className="flex text-gray-300 items-center mt-2">
              <FaEnvelope className="text-yellow-400 mr-2" /> info@BADOC.com
            </p>
            <p className="flex text-gray-300 items-start mt-2">
              <FaMapMarkerAlt className="text-red-400 mr-2 mt-1" />
              01/A Best Place, Bhagwanpur, Dehradun
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col justify-between items-center md:flex-row mt-6">
          
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            {[
              { icon: FaFacebookF, link: "https://facebook.com" },
              { icon: FaInstagram, link: "https://instagram.com" },
              { icon: FaLinkedinIn, link: "https://linkedin.com" }
            ].map(({ icon: Icon, link }) => (
              <Link 
                key={link} 
                href={link} 
                className="p-3 rounded-full text-gray-300 duration-300 hover:shadow-lg transition"
                aria-label={`Visit our page on ${Icon.name}`}
              >
                <Icon size={20} />
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm md:mt-0 mt-4">
            © {new Date().getFullYear()} MBBS WALLAH. All Rights Reserved. Designed By{" "}
            <span className="text-green-400 font-semibold">DIGIWAVE</span>
          </p>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="flex flex-col bottom-6 fixed right-6 space-y-3">
        <Link 
          href="https://wa.me/91123456789"
          className="bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600"
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={28} className="text-white" />
        </Link>
      </div>
    </footer>
  );
}
