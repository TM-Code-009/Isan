import { FaProjectDiagram } from "react-icons/fa";

const Sec3 = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Amenities & Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            To ensure your event runs smoothly, we provide a range of essential
            support services.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            {
              title: "Audio-Visual Support",
              desc: "Modern sound systems and projection capabilities for presentations.",
            },
            {
              title: "Hybrid Meeting Technology",
              desc: "Integration with Zoom technology to allow for remote participation by distant or offshore stakeholders.",
            },
            {
              title: "Safety & Security",
              desc: "The facility is equipped with fire extinguishers and first aid kits, with 24/7 security services provided.",
            },
            {
              title: "Accessibility",
              desc: "Situated in a central business district of Lagos with easy access for local and visiting dignitaries.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-sky-50 border-t-4 border-sky-400 rounded-xl p-6 text-center shadow-sm"
            >
              <FaProjectDiagram className="text-sky-400 text-2xl mx-auto mb-4" />

              <h4 className="font-semibold text-gray-900 mb-2">
                {item.title}
              </h4>

              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Sec3;
