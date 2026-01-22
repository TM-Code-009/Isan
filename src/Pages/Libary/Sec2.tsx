import { HiOutlineDownload } from "react-icons/hi";

const Sec2 = () => {
  const items = [
    {
      title: "Market Reform Papers",
      desc:
        "Articles on the implementation of the Central Securities Clearing System (CSCS), Trade Alert, and e-transactions.",
    },
    {
      title: "Quarterly Press Releases",
      desc:
        "Authoritative assessments of the Nigerian economy and the Capital Market.",
    },
    {
      title: "Legal Advocacy",
      desc:
        "Summaries of court cases and legal battles fought to protect minority shareholder interests.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 pb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold">
          Advocacy & Research
        </h2>
        <p className="text-gray-500 mt-2">
          Explore our contributions to the Nigerian Capital Market&apos;s
          evolution.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="
              bg-white rounded-2xl p-6
              shadow-sm hover:shadow-md transition
              border-t-[5px] border-red-500
            "
          >
            <span className="inline-block text-xs px-3 py-1 rounded-full bg-red-50 text-red-500 mb-4">
              April 2025
            </span>

            <h3 className="font-semibold mb-2">
              {item.title}
            </h3>

            <p className="text-sm text-gray-600 mb-4">
              {item.desc}
            </p>

            <button className="flex items-center gap-2 text-sky-400 text-sm font-medium">
              View Collection <HiOutlineDownload />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sec2;
