import { HiOutlineDownload } from "react-icons/hi";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import img from "../../assets/blue cap.png"

const Sec3 = () => {
  const materials = [
    {
      title: "Financial Report Analysis",
      desc:
        "A guide on how to read and interpret Statements of Financial Position and Cash Flow Statements.",
    },
    {
      title: "Investor Enlightenment Series",
      desc:
        "Materials from road shows and campaigns conducted within and outside Nigeria.",
    },
    {
      title: "AGM Participation Guide",
      desc:
        "Best practices for attending and voting at Annual General Meetings.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold">Training & Educational Materials</h2>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          Resources designed to enhance the financial literacy of our members, including young recruits from higher institutions.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {materials.map((item, i) => (
          <div
            key={i}
            className="bg-sky-500 text-white rounded-2xl p-6 shadow-md hover:shadow-lg transition"
          >
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-4">
              <HiOutlineGlobeAlt className="text-xl" />
            </div>
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-white/90 mb-6 leading-relaxed">{item.desc}</p>
            <button className="flex items-center gap-2 text-sm font-medium hover:underline">
              <HiOutlineDownload /> Access Material
            </button>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="border border-sky-400 rounded-2xl bg-sky-50 px-6 py-10 text-center">
        <div className="w-14 h-14 mx-auto mb-4  flex items-center justify-center">
          <img src={img} alt="" width={50} height={50} />
        </div>
        <h3 className="text-2xl font-semibold mb-3">Training & Educational Materials</h3>
        <p className="text-gray-600 max-w-3xl mx-auto mb-6">
          Our educational materials are specifically designed to help beginners understand financial markets, from basic concepts to advanced analysis techniques.
        </p>
        <button className="bg-sky-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-sky-600 transition">
          Start Your Learning Journey
        </button>
      </div>
    </section>
  );
};

export default Sec3;
