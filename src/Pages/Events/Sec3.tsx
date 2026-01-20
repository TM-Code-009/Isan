import img from "../../assets/1.png"
import img1 from "../../assets/Chat.png"

const Sec3 = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-sky-400 mb-4">
            <img src={img1} alt="" width={30} height={30} />
          </div>

          <h2 className="text-3xl font-semibold text-gray-900 mb-3">
            Zonal & Regional Meetings
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Our national structure ensures that every member has a local
            platform for engagement.
          </p>
        </div>

        {/* TOP CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-14">
          
          {/* Card 1 */}
          <div className="border-2 border-sky-400 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-900">
                Quarterly Zonal Updates
              </h3>
              <span className="text-xs px-3 py-1 rounded-full bg-sky-500 text-white">
                Quarterly
              </span>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              Regular meetings held in Abuja, Ibadan, Jos, Kaduna, and other
              zones to update members on stock and financial market trends.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border-2 border-sky-400 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-900">
                Diaspora Connect
              </h3>
              <span className="text-xs px-3 py-1 rounded-full bg-sky-500 text-white">
                Quarterly
              </span>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              Virtual town halls for members in the USA (Maryland) and the
              United Kingdom.
            </p>
          </div>
        </div>

        {/* ZONES PANEL */}
        <div className="bg-sky-500 rounded-3xl py-12 px-6 shadow-lg">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-10 gap-x-6 text-center text-white">

            {[
              "Abuja Zone",
              "Ibadan Zone",
              "Jos Zone",
              "Kaduna Zone",
              "Port Harcourt Zone",
              "USA (Maryland)",
              "United Kingdom",
              "Lagos Headquarters",
            ].map((zone) => (
              <div key={zone} className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <img src={img} alt="" width={22} height={22} />
                </div>
                <span className="text-sm font-medium">{zone}</span>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Sec3;
