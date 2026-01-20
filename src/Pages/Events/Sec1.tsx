import {  FaArrowRight, FaCalendarDay } from "react-icons/fa";

const Sec1 = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Icon */}
        <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-sky-500 text-white">
          <FaCalendarDay size={22} />
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Upcoming Annual General Meetings (AGM)
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-base md:text-lg mb-14">
          Stay updated with the schedule of company AGMs to exercise your rights
          as a shareholder.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Card 1 */}
          <div className="border border-sky-400 rounded-2xl p-6">
            <span className="inline-block text-sm text-sky-600 bg-sky-50 px-3 py-1 rounded-full mb-4">
              March 2025
            </span>
            <h3 className="font-semibold text-lg text-gray-900 mb-3">
              ISAN 3rd Annual General Meeting
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Held alongside the 8th Triennial Delegate Conference at the NECA
              Building, Alausa, Ikeja.
            </p>
            <button className="inline-flex items-center gap-2 text-red-500 font-medium hover:underline">
              Register to Attend <FaArrowRight />
            </button>
          </div>

          {/* Card 2 */}
          <div className="border border-sky-400 rounded-2xl p-6">
            <span className="inline-block text-sm text-sky-600 bg-sky-50 px-3 py-1 rounded-full mb-4">
              April 2025
            </span>
            <h3 className="font-semibold text-lg text-gray-900 mb-3">
              WEMA Bank Plc
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Audit Committee activities led by Zonal Coordinator Sir Joe
              Anosikeh.
            </p>
            <button className="inline-flex items-center gap-2 text-red-500 font-medium hover:underline">
              Register to Attend <FaArrowRight />
            </button>
          </div>

          {/* Card 3 */}
          <div className="border border-sky-400 rounded-2xl p-6">
            <span className="inline-block text-sm text-sky-600 bg-sky-50 px-3 py-1 rounded-full mb-4">
              May 2025
            </span>
            <h3 className="font-semibold text-lg text-gray-900 mb-3">
              ABC Transport Plc &amp; Berger Paints
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Board and Audit Committee sessions featuring General Secretary Mr.
              Eke Chibuzor Emmanuel.
            </p>
            <button className="inline-flex items-center gap-2 text-red-500 font-medium hover:underline">
              Register to Attend <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec1;
