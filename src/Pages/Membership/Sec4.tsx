import { HiOutlineDownload, HiCheck } from "react-icons/hi";

const benefits = [
  "Free or discounted membership fees for verified students",
  "Access to financial literacy workshops and training sessions",
  "Mentorship from experienced investors and professionals",
  "Early exposure to AGM participation and proxy voting",
  "Network with fellow student investors nationwide",
];

const Sec4 = () => {
  return (
    <section className="bg-sky-500 py-20 px-6 md:px-16 text-white">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 items-center">
        {/* Left */}
        <div>
          <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-full bg-sky-400">
            <HiOutlineDownload className="text-white text-xl" />
          </div>

          <h3 className="text-2xl font-semibold mb-4">
            Are You a Student Investor?
          </h3>

          <p className="text-sky-100 mb-6 leading-relaxed">
            We are specifically recruiting and mobilizing members from
            Universities and Higher Institutions. Start building your
            investment legacy early with ISAN’s mentorship and resources.
          </p>

          <button className="bg-white text-sky-600 font-medium px-6 py-3 rounded-md hover:bg-gray-100 transition">
            Start Your Application
          </button>
        </div>

        {/* Right */}
        <div className="bg-sky-400 rounded-2xl p-8">
          <h4 className="text-xl font-semibold mb-6">
            Student Benefits Include:
          </h4>

          <ul className="space-y-4">
            {benefits.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-sky-500">
                  <HiCheck />
                </span>
                <span className="text-sky-50 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Sec4;
