import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import img from "../../assets/Screenshot 2026-01-09 135436.png";

type TickerItem = {
  symbol: string;
  price: number;
  change: number;
};

const mockData: TickerItem[] = [
  { symbol: "EURUSD", price: 1.0821, change: -0.9 },
  { symbol: "GBPUSD", price: 1.271, change: +10.02 },
  { symbol: "USDJPY", price: 148.2, change: -0.45 },
  { symbol: "BTCUSD", price: 42150, change: +2.18 },
];

const Header = () => {
  const [tickers, setTickers] = useState<TickerItem[]>(mockData);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTickers((prev) =>
        prev.map((item) => ({
          ...item,
          price: +(item.price + (Math.random() - 0.5) * 0.02).toFixed(4),
        }))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full relative">
      {/* TOP NAV */}
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 bg-white border-b">
        {/* LEFT */}
        <div className="flex items-center gap-6">
          <img
            src={img}
            alt="ISAN Logo"
            className="h-[40px] sm:h-[45px] md:h-[50px] w-auto object-contain"
          />

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex gap-8 text-sm text-gray-700">
            <a className="hover:text-sky-500" href="#">About Us</a>
            <a className="hover:text-sky-500" href="#">Management Team</a>
            <a className="hover:text-sky-500" href="#">Membership</a>
            <a className="hover:text-sky-500" href="#">Capital Market</a>
            <a className="hover:text-sky-500" href="#">Event</a>
            <a className="hover:text-sky-500" href="#">Gallery</a>
          </nav>
        </div>

        {/* DESKTOP CTA */}
        <button className="hidden lg:block bg-sky-400 hover:bg-sky-500 text-white px-6 py-2 rounded-md text-sm font-medium">
          Join ISAN
        </button>

        {/* MOBILE HAMBURGER */}
        <button
          className="lg:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen(true)}
        >
          <FiMenu />
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[80%] max-w-sm bg-white shadow-xl transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* CLOSE */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <span className="font-semibold text-gray-700">Menu</span>
          <button
            className="text-2xl"
            onClick={() => setMenuOpen(false)}
          >
            <FiX />
          </button>
        </div>

        {/* LINKS */}
        <nav className="flex flex-col gap-6 px-6 py-8 text-gray-700">
          <a href="#" className="hover:text-sky-500">About Us</a>
          <a href="#" className="hover:text-sky-500">Management Team</a>
          <a href="#" className="hover:text-sky-500">Membership</a>
          <a href="#" className="hover:text-sky-500">Capital Market</a>
          <a href="#" className="hover:text-sky-500">Event</a>
          <a href="#" className="hover:text-sky-500">Gallery</a>

          {/* CTA */}
          <button className="mt-6 bg-sky-400 hover:bg-sky-500 text-white py-3 rounded-md text-sm font-medium">
            Join ISAN
          </button>
        </nav>
      </div>

      {/* TICKER BAR */}
      <div className="bg-black overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee gap-8 sm:gap-12 py-2 px-4">
          {tickers.concat(tickers).map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-xs sm:text-sm">
              <span
                className={`font-semibold ${
                  item.change >= 0 ? "text-green-400" : "text-red-500"
                }`}
              >
                {item.symbol}
              </span>
              <span className="text-white">{item.price}</span>
              <span
                className={`${
                  item.change >= 0 ? "text-green-400" : "text-red-500"
                }`}
              >
                {item.change > 0 ? "+" : ""}
                {item.change}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
