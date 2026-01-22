import { HiOutlineDownload } from "react-icons/hi";
import img from "../../assets/Chat.png"

const Sec1 = () => {
  const documents = [
    {
      title: "ISAN Annual Report & Accounts 2025",
      desc:
        "A comprehensive review of our financial performance, including the Statement of Income and Expenditure.",
    },
    {
      title: "Association Constitution",
      desc:
        "The governing rules and provisions that bind all members.",
    },
    {
      title: "Code of Conduct",
      desc:
        "Authoritative assessment and guidelines for Banks, Financial Institutions, and Shareholders Associations.",
    },
    {
      title: "Operational Manual",
      desc:
        "The recently developed and approved guide for association activities.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl font-semibold mb-2">
          Strategic Documents
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Access official publications that define our association&apos;s
          governance and mission.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {documents.map((item, i) => (
          <div
            key={i}
            className="
              bg-white rounded-2xl p-6
              w-[400px]
              border-l-[5px] border-sky-400
              shadow-sm hover:shadow-md
              hover:-translate-y-1
              transition-all duration-300
            "
          >
            <div className="w-11 h-11 rounded-lg bg-sky-500 text-white
                            flex items-center justify-center mb-4">
             <img src={img} alt="" width={22} height={22} />
            </div>

            <h3 className="font-semibold text-lg mb-2">
              {item.title}
            </h3>

            <p className="text-sm text-gray-600 mb-5 leading-relaxed">
              {item.desc}
            </p>

            <button
              type="button"
              className="inline-flex items-center gap-2
                         text-sky-600 text-sm font-medium
                         hover:text-sky-700 transition"
            >
              Download PDF
              <HiOutlineDownload className="text-base" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sec1;
