import img from "../../assets/Screenshot 2026-01-09 135436.png";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <a href="/">
            <img
  src={img}
  alt="ISAN Logo"
  className="h-[40px] sm:h-[45px] md:h-[50px] w-auto object-contain"
/>
          </a>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-800">
          <a href="/events" className="hover:text-sky-500">Events</a>
          <a href="/agmcalender" className="hover:text-sky-500">AGM Calendar</a>
          <a href="/membership" className="hover:text-sky-500">Membership</a>
          <a href="/libary" className="hover:text-sky-500">Library</a>
          <a href="/rentspace" className="hover:text-sky-500">Rent Space</a>
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="hidden lg:flex items-center gap-3">
          <button className="px-4 py-2 text-sm bg-sky-500 text-white rounded-sm">
            Login
          </button>
          <button className="px-4 py-2 text-sm bg-red-600 text-white rounded-sm">
            Join ISAN
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden text-2xl text-gray-800"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <nav className="flex flex-col px-4 py-6 gap-4 text-sm font-medium text-gray-800">
            <a href="/events" className="hover:text-sky-500">Events</a>
            <a href="/agmcalender" className="hover:text-sky-500">AGM Calendar</a>
            <a href="/membership" className="hover:text-sky-500">Membership</a>
            <a href="/libary" className="hover:text-sky-500">Library</a>
            <a href="/rentspace" className="hover:text-sky-500">Rent Space</a>

            <div className="pt-4 flex flex-col gap-3">
              <button className="w-full py-2 bg-sky-500 text-white rounded-sm">
                Login
              </button>
              <button className="w-full py-2 bg-red-600 text-white rounded-sm">
                Join ISAN
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
