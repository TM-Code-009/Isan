

import { FaClock } from "react-icons/fa";

const Sec1 = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Featured ISAN Association Events
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-base md:text-lg">
            Our own meetings serve as the blueprint for good corporate
            governance.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl shadow-sm border border-gray-200">
          <table className="w-full border-collapse">
            <thead className="bg-sky-500 text-white">
              <tr>
                <th className="text-left px-6 py-4 font-medium">Date &amp; Time</th>
                <th className="text-left px-6 py-4 font-medium">Event Title</th>
                <th className="text-left px-6 py-4 font-medium">Venue</th>
                <th className="text-left px-6 py-4 font-medium">Agenda Highlights</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {/* Row 1 */}
              <tr className="border-t">
                <td className="px-6 py-5 flex items-start gap-3">
                  <span className="text-sky-500 mt-1">
                    <FaClock />
                  </span>
                  <span className="text-sm text-gray-700">
                    Thursday, 5th Dec 2024 @ 11am
                  </span>
                </td>
                <td className="px-6 py-5 text-sm text-gray-700">
                  3rd Annual General Meeting
                </td>
                <td className="px-6 py-5 text-sm text-gray-700">
                  Sir Sunday Nwosu Hall, National Secretariat, Oregun, Lagos
                </td>
                <td className="px-6 py-5 text-sm text-gray-700">
                  Approve Financials (18 months ending June 2024), Elect
                  Audit/Compliance Committee
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="border-t">
                <td className="px-6 py-5 flex items-start gap-3">
                  <span className="text-sky-500 mt-1">
                    <FaClock />
                  </span>
                  <span className="text-sm text-gray-700">
                    Thursday, 5th Dec 2024
                  </span>
                </td>
                <td className="px-6 py-5 text-sm text-gray-700">
                  8th Triennial Delegate Conference
                </td>
                <td className="px-6 py-5 text-sm text-gray-700">
                  NECA Building, Alausa, Ikeja, Lagos
                </td>
                <td className="px-6 py-5 text-sm text-gray-700">
                  National leadership elections and future strategic planning
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-10">
          <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-3 rounded-xl transition">
            Add to My Calendar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sec1;
