import { FaArrowDown } from "react-icons/fa";

const Sec6 = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-3xl mx-auto px-4 text-center">

        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center">
            <FaArrowDown className="text-white" />
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">
          Ready to Host Your Event?
        </h2>

        <p className="text-gray-300 text-sm mb-8">
          Experience the professionalism and prestige of hosting your next
          meeting at the ISAN Secretariat.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700 transition">
            Book Now
          </button>

          <button className="px-6 py-3 border border-sky-400 text-sky-400 rounded-md text-sm font-medium hover:bg-sky-400 hover:text-white transition">
            Schedule a Viewing
          </button>
        </div>

      </div>
    </section>
  );
};

export default Sec6;
