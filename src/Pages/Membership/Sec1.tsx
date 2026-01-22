import img from "../../assets/Chat.png"

const benefits = [
  {
    title: "Advocacy & Protection",
    description:
      "We articulate the interests of minority shareholders and insist on good corporate governance.",
  },
  {
    title: "Education",
    description:
      "Gain the skills to analyze and interpret financial reports and instruments.",
  },
  {
    title: "Welfare Packages",
    description:
      'Access the "Welfare Purse" for financial assistance during hardship and the "Life Group Insurance" scheme for family protection.',
  },
  {
    title: "Exclusive Insights",
    description:
      "Receive authoritative quarterly press releases and assessments of the Nigerian economy.",
  },
  {
    title: "Global Networking",
    description:
      "Connect with members across 8 national zones and offshore contacts in the UK and USA.",
  },
];

const Sec1 = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-3xl font-semibold mb-4">
          Membership Benefits
        </h2>
        <p className="text-gray-600">
          Select the category that best fits your investment profile. All
          payments contribute to the financial and moral support of the
          association.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition
                       border-t-4 border-sky-400"
          >
            <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-sky-500">
              <img src={img} alt="" width={22} height={22} />
            </div>

            <h3 className="text-lg font-semibold mb-2">
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sec1;
