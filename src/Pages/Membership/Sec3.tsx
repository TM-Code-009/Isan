import { HiOutlineDownload } from "react-icons/hi";

const steps = [
  {
    step: "Step 1",
    title: "Fill the Form",
    description:
      "Complete your personal, educational, and employment details online.",
  },
  {
    step: "Step 2",
    title: "Upload Documents",
    description:
      "Attach your recent photographs and relevant educational or professional certificates.",
  },
  {
    step: "Step 3",
    title: "Shareholder Verification",
    description:
      "Indicate if you currently hold shares and provide your reasons for joining.",
  },
  {
    step: "Step 4",
    title: "Declaration",
    description:
      "Digitally sign the undertaking to observe the articles and rules of the Association.",
  },
  {
    step: "Step 5",
    title: "Payment",
    description:
      "Complete your registration by paying the application and development fees.",
  },
];

const Sec3 = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-16 text-center">
      {/* Header */}
      <div className="max-w-3xl mx-auto mb-14">
        <h2 className="text-3xl font-semibold mb-3">
          Digital Application Process
        </h2>
        <p className="text-gray-600">
          In line with our “IT and Online Presence Development” initiative, we
          have digitized our onboarding process.
        </p>
      </div>

      {/* Steps */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 max-w-6xl mx-auto mb-12">
        {steps.map((item, index) => (
          <div key={index} className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center rounded-full bg-sky-400">
              <HiOutlineDownload className="text-white text-2xl" />
            </div>

            <span className="inline-block mb-2 px-3 py-1 text-xs text-white bg-sky-500 rounded-full">
              {item.step}
            </span>

            <h4 className="font-semibold mb-2">{item.title}</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <button className="bg-red-600 hover:bg-red-700 transition text-white px-8 py-3 rounded-md font-medium">
        Begin Application Process
      </button>
    </section>
  );
};

export default Sec3;
