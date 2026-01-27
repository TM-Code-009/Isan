import { FaUsers } from "react-icons/fa";

const Sec1 = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Our Featured Venue: Sir Sunday Nwosu Hall
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Named after our founder, HRM Sir Sunday N. Nwosu, this facility is
            the central hub for our most significant deliberations, including
            our Annual General Meetings.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Image placeholder */}
          <div className="w-full h-80 bg-gray-200 rounded-xl shadow-sm" />

          {/* Info Cards */}
          <div className="space-y-6">

            {[
              {
                title: "Location",
                text: "National Secretariat, No. 6 Ziatech Road (formerly Ikosi Road), Oregun, Ikeja, Lagos.",
              },
              {
                title: "Capacity",
                text: "Configurable seating to accommodate both small executive sessions and larger delegate conferences.",
              },
              {
                title: "Suitability",
                text: "Ideal for corporate AGMs, board meetings, strategy retreats, and professional workshops.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-6 border-2 border-sky-400 bg-sky-50 rounded-xl"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-400 flex items-center justify-center shrink-0">
                  <FaUsers className="text-white text-sm" />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec1;
