import {
  FaEnvelope,
} from "react-icons/fa";
import img from "../../assets/location.png"
import { HiMiniHome } from "react-icons/hi2";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0b1f2d] text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* TOP GRID */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* ABOUT ISAN */}
          <div>
            <h3 className="text-white font-semibold mb-4">About ISAN</h3>

            <ul className="space-y-4 text-sm">
              <li>
                <span className="text-sky-400">Our Mission</span>
                <p className="mt-1 text-gray-300">
                  To be a proactive shareholders’ group that investors are
                  proud to associate with.
                </p>
              </li>

              <li>
                <span className="text-sky-400">Our Profile</span>
                <p className="mt-1 text-gray-300">
                  Formally inaugurated in 1998 to focus on the interests of
                  minority shareholders.
                </p>
              </li>

              <li>
                <span className="text-sky-400">Our Governance</span>
                <p className="mt-1 text-gray-300">
                  Led by National Coordinator Moses Okeoghene Igburude
                  and a team of Executive Management professionals.
                </p>
              </li>

              <li>
                <span className="text-sky-400">Gallery</span>
                <p className="mt-1 text-gray-300">
                  Visual records of our AGMs, roadshows, and advocacy activities.
                </p>
              </li>
            </ul>
          </div>

          {/* CONTACT US */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>

            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex flex-col gap-3">
                <img src={img} alt="location" width={22} height={22} />
                {/* <FaUserTie className="mt-1 text-white" /> */}
                <span>
                  <span className="block text-sky-400">Lagos Secretariat</span>
                  Plot 6 Ziatech Road (Formerly Ikosi Road),
                  Oregun-Ikeja, Lagos.
                </span>
              </li>

              <li className="flex flex-col gap-3">
                
                <HiMiniHome  className="mt-1 text-white text-[22px] " />
                <span>
                  <span className="block text-sky-400">Zonal Offices</span>
                  Abuja, Ibadan, Jos, Kaduna, Port-Harcourt,
                  and international contacts in the USA and UK.
                </span>
              </li>

              <li className="flex flex-col gap-3">
                <FaEnvelope className="mt-1 text-white text-[20px]" />
                <span>
                  <span className="block text-sky-400">Email</span>
                  isan.isan@yahoo.com
                </span>
              </li>
            </ul>
          </div>

          {/* RENT SPACE */}
          <div>
            <h3 className="text-white font-semibold mb-4">Rent Space</h3>

            <p className="text-sm text-gray-300 mb-4">
              Inquire about booking the Sir Sunday Nwosu Hall for your meetings.
            </p>

            <button className="mb-6 px-6 py-3 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition">
              Contact Us for Booking
            </button>

            <div>
              <h4 className=" font-semibold mb-3 text-sky-400 ">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <a href="/events"><li className="hover:text-sky-400 cursor-pointer">Events</li></a>
                <a href=""><li className="hover:text-sky-400 cursor-pointer">AGM Calendar</li></a>
                <a href=""><li className="hover:text-sky-400 cursor-pointer">Library</li></a>
                <a href=""><li className="hover:text-sky-400 cursor-pointer">Membership</li></a>
                <a href=""><li className="hover:text-sky-400 cursor-pointer">Gallery</li></a>
              </ul>
            </div>
          </div>

        </div>

        {/* FOOTER BOTTOM */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-xs text-gray-400">
          © 2026 Independent Shareholders Association of Nigeria (ISAN).
          All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
