import { FaArrowRight } from "react-icons/fa";

const Sec3 = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Placeholder */}
        <div className="w-full h-72 md:h-96 rounded-2xl bg-gray-200 flex items-center justify-center">
          {/* Replace with <img /> when ready */}
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Leadership: Driving ISAN Unity &amp; Progress
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
            ISAN is guided by a distinguished Board of Trustees and an Executive
            Management Committee committed to the core principles of
            transparency, accountability, and member protection. Our leadership
            structure extends across eight national zones and offshore contacts
            in the UK and USA to support our global network of shareholders.
          </p>

          <button className="inline-flex items-center gap-3 bg-sky-500 hover:bg-sky-600 text-white font-medium px-6 py-3 rounded-xl transition">
            Meet the Full Management &amp; Zonal Team
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sec3;