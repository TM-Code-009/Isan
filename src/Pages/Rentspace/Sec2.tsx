import { FaUsers } from "react-icons/fa";

const Sec2 = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Perfect For Your Event
          </h3>
          <p className="text-gray-600">
            The Sir Sunday Nwosu Hall is suitable for a wide range of
            professional and corporate events.
          </p>
        </div>

        {/* Event List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {[
            "Corporate Annual General Meetings (AGMs)",
            "Board Meetings & Executive Sessions",
            "Strategy Retreats & Planning Sessions",
            "Professional Workshops & Training",
            "Seminars & Educational Events",
            "Association Meetings",
            "Stakeholder Conferences",
          ].map((event) => (
            <div
              key={event}
              className="flex items-center gap-4 bg-white p-5 border-l-4 border-sky-400 rounded-lg shadow-sm h-[80px] "
            >
              {/* Icon */}
              <FaUsers className="text-md text-sky-400 mt-1 " />

              {/* Text */}
              <p className="text-md font-medium text-gray-800 leading-relaxed">
                {event}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Sec2;
