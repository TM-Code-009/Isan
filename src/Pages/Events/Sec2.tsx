import {
  FaArrowRight,
} from "react-icons/fa";
import img from "../../assets/Discord Other (Unnamed)-1.png"
import img1 from "../../assets/Server Settings.png"
import img2 from "../../assets/Chat.png"
import img3 from "../../assets/1.png"

const Sec2 = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center justify-center p-3 bg-sky-400 rounded-full mb-4">
            <img src={img} alt="" width={35} height={35} />
          </div>

          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
            Educational Workshops & Training
          </h2>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            ISAN is committed to the continuous enlightenment of its members.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* CARD 1 */}
          <div className="bg-white border border-sky-100 rounded-xl p-8 shadow-sm hover:shadow-md transition">
            <div className="mb-5 w-12 h-12 flex items-center justify-center bg-sky-400 rounded-lg text-sky-400">
              <img src={img1} alt="" width={22} height={22} />
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Financial Literacy Series
            </h3>

            <p className="text-sm text-gray-600 mb-5 leading-relaxed">
              Quarterly sessions focused on analyzing and interpreting financial
              reports and instruments.
            </p>

            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-sky-400 hover:underline"
            >
              Learn more
              <FaArrowRight className="ml-2 text-xs" />
            </a>
          </div>

          {/* CARD 2 */}
          <div className="bg-white border border-sky-100 rounded-xl p-8 shadow-sm hover:shadow-md transition">
            <div className="mb-5 w-12 h-12 flex items-center justify-center bg-sky-400 rounded-lg text-sky-400">
              <img src={img2} alt="" width={22} height={22} />
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Youth Mobilization Drive
            </h3>

            <p className="text-sm text-gray-600 mb-5 leading-relaxed">
              Outreach programs designed to recruit and train students from
              universities and higher institutions.
            </p>

            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-sky-400 hover:underline"
            >
              Learn more
              <FaArrowRight className="ml-2 text-xs" />
            </a>
          </div>

          {/* CARD 3 */}
          <div className="bg-white border border-sky-100 rounded-xl p-8 shadow-sm hover:shadow-md transition">
            <div className="mb-5 w-12 h-12 flex items-center justify-center bg-sky-400 rounded-lg text-sky-400">
              <img src={img3} alt="" width={22} height={22} />
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Digital Integration Training
            </h3>

            <p className="text-sm text-gray-600 mb-5 leading-relaxed">
              Training on virtual meeting tools to support diaspora and distant
              members through digital participation.
            </p>

            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-sky-400 hover:underline"
            >
              Learn more
              <FaArrowRight className="ml-2 text-xs" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Sec2;
