import { FaUser, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Sec5 = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">
            Booking & Enquiries
          </h2>
          <p className="text-gray-600 mt-2">
            To request a quote or view the hall, please reach out to our administration team.
          </p>
        </div>

        {/* Contact Info Header */}
        <div className="bg-sky-500 text-white font-medium px-6 py-3 rounded-md mb-6">
          Contact Information
        </div>

        {/* Info Cards */}
        <div className="space-y-4">

          <div className="flex items-start gap-4 bg-sky-50 p-5 rounded-lg">
            <FaUser className="text-sky-400 text-xl mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900">Contact Officer</h4>
              <p className="text-sm text-gray-600">
                Receiving/Verifying Officer at the Secretariat
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-sky-50 p-5 rounded-lg">
            <FaMapMarkerAlt className="text-sky-400 text-xl mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900">In-Person Visit</h4>
              <p className="text-sm text-gray-600">
                No. 6 Ziatech Road (formerly Ikosi Road), Oregun, Ikeja, Lagos.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-sky-50 p-5 rounded-lg">
            <FaPhone className="text-sky-400 text-xl mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900">Phone</h4>
              <p className="text-sm text-gray-600">+234 803 304 7212</p>
              <p className="text-sm text-gray-600">+234 802 321 6065</p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-sky-50 p-5 rounded-lg">
            <FaEnvelope className="text-sky-400 text-xl mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900">Email</h4>
              <p className="text-sm text-gray-600">isan.isan@yahoo.com</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <button className="px-6 py-3 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700 transition">
            Request a Quote
          </button>
        </div>

      </div>
    </section>
  );
};

export default Sec5;
