import { Car } from "@gravity-ui/icons";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#F8F8F8] px-6 md:px-12 lg:px-20 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* <img src="/logo.png" alt="logo" className="w-8 h-8" /> */}
              <Car className="w-10 h-10"></Car>
              <h2 className="text-2xl font-bold text-black">CarFleet</h2>
            </div>

            <p className="text-gray-500 text-sm leading-7 max-w-xs">
              One solution to easily access vehicles with options across
              unlimited and groups beyond drivers every completes.
            </p>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-black">About</h3>

            <ul className="space-y-3 text-gray-500">
              <li>
                <a href="#" className="hover:text-black transition">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-black transition">
                  Blog
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-black transition">
                  Career
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-black">Support</h3>

            <ul className="space-y-3 text-gray-500">
              <li>
                <a href="#" className="hover:text-black transition">
                  Contact Us
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-black transition">
                  Report
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-black transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-black">
              Get Updates
            </h3>

            {/* Input */}
            <div className="flex items-center bg-white rounded-xl overflow-hidden border border-gray-200">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 outline-none text-sm bg-transparent"
              />

              <button className="bg-black text-white px-5 py-3 text-sm font-medium hover:bg-gray-800 transition">
                Subscribe
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm cursor-pointer hover:bg-black hover:text-white transition">
                <FaInstagram />
              </div>

              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm cursor-pointer hover:bg-black hover:text-white transition">
                <RiTwitterXFill />
              </div>

              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm cursor-pointer hover:bg-black hover:text-white transition">
                <FaFacebook />
              </div>

              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm cursor-pointer hover:bg-black hover:text-white transition">
                <IoLogoYoutube />
              </div>

              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm cursor-pointer hover:bg-black hover:text-white transition">
                <FaLinkedin />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2024 CarFleet. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-black transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-black transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
