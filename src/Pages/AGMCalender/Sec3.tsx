import img from "../../assets/A1.png"
import img1 from "../../assets/a2.png"
import { FaVideo} from "react-icons/fa";

const Sec3 = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          How to Participate
        </h2>
        <p className="max-w-4xl mx-auto text-gray-600 text-base md:text-lg mb-14">
          ISAN is modernizing how you engage with these meetings to ensure
          distance is no longer a barrier.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
          {/* Card 1 */}
          <div className="bg-slate-100 rounded-2xl p-6 shadow-sm">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-sky-500 text-white mb-4">
              <FaVideo size={18} />
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Hybrid Attendance
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We are integrating Zoom technology into our general meetings to
              accommodate absentee, distant zonal, and diaspora members.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-100 rounded-2xl p-6 shadow-sm">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-sky-500 text-white mb-4">
              <img src={img} alt="" width={22} height={22} />
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Proxy Voting
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              If you cannot attend, ensure you designate a proxy to vote on your
              behalf regarding critical resolutions like auditor reappointment
              or dividend approvals.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-100 rounded-2xl p-6 shadow-sm">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-sky-500 text-white mb-4">
              <img src={img1} alt="" width={22} height={22} />
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Member Training
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Attend our quarterly workshops to learn how to better analyze and
              interpret financial reports before attending your company&apos;s AGM.
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <button className="inline-flex items-center gap-3 bg-sky-500 hover:bg-sky-600 text-white font-medium px-6 py-3 rounded-xl transition">
            View Complete Event Archive
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sec3;
