import { FaArrowRight } from "react-icons/fa";

const Sec4 = () => {
  return (
    <section className="bg-slate-50 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Gallery: ISAN in Action
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-base md:text-lg mb-12">
          This section captures the visual legacy of the Independent
          Shareholders Association of Nigeria (ISAN).
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12">
          {/* Image Placeholder 1 */}
          <div className="w-full h-40 md:h-48 bg-gray-200 rounded-2xl" />

          {/* Image Placeholder 2 */}
          <div className="w-full h-40 md:h-48 bg-gray-200 rounded-2xl" />

          {/* Image Placeholder 3 */}
          <div className="w-full h-40 md:h-48 bg-gray-200 rounded-2xl" />

          {/* Image Placeholder 4 */}
          <div className="w-full h-40 md:h-48 bg-gray-200 rounded-2xl" />
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <button className="inline-flex items-center gap-3 bg-sky-500 hover:bg-sky-600 text-white font-medium px-6 py-3 rounded-xl transition">
            Click here to see more
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sec4;
