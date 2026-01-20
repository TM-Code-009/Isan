import { FaArrowRight, FaCalendarDay } from "react-icons/fa";

const Sec4 = () => {
  return (
    <section className="bg-slate-50 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Past Events Highlights
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-base md:text-lg mb-14">
          Celebrating our achievements and milestones in advocacy and member
          education.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="bg-sky-500 h-40 flex flex-col items-center justify-center text-white">
              <FaCalendarDay size={22} className="mb-2" />
              <span className="text-sm font-medium">2024</span>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                National Road Shows
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Participation in enlightenment campaigns across Nigeria to
                promote the Nigerian Capital Market.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="bg-sky-500 h-40 flex flex-col items-center justify-center text-white">
              <FaCalendarDay size={22} className="mb-2" />
              <span className="text-sm font-medium">2024</span>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                National Road Shows
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Major event marking the launch of the code of conduct for banks
                and Shareholders Associations.
              </p>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <button className="inline-flex items-center gap-3 bg-sky-500 hover:bg-sky-600 text-white font-medium px-6 py-3 rounded-xl transition">
            View Complete Event Archive <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sec4;
