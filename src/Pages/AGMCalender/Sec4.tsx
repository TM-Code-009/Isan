import { HiOutlineDownload } from "react-icons/hi";
import img from "../../assets/a3.png";

const downloads = [
  {
    title: "2025 Annual Report & Accounts",
    description:
      "Detailed breakdown of ISAN's income, expenditure, and statement of financial position.",
    link: "#",
  },
  {
    title: "Code of Conduct",
    description:
      "Review the authoritative assessment and code of conduct for Shareholders Associations.",
    link: "#",
  },
];

const Sec4 = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-500 rounded-full">
            <HiOutlineDownload className="text-2xl" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Archive &amp; Downloads
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Access essential documents and reports to stay informed and prepared.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {downloads.map((item, idx) => (
            <div
              key={idx}
              className="flex gap-4 bg-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              {/* Icon */}
              <div className="shrink-0">
                <img
                  src={img}
                  alt="Document icon"
                  className="w-7 h-7 mt-2 object-contain"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-300 text-sm mb-6">
                  {item.description}
                </p>

                <a
                  href={item.link}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-red-600 text-white font-medium rounded-xl hover:bg-red-700 transition"
                >
                  Download PDF
                  <HiOutlineDownload />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sec4;
