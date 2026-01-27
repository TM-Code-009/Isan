import { FaGlobe } from "react-icons/fa";

const Sec4 = () => {
  return (
    <section className="py-20 bg-sky-400 text-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-2xl font-semibold mb-2">How to Book</h2>
          <p className="text-white/90">
            Space is available for both members and external corporate organizations.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {[
            {
              step: "Step 1",
              title: "Check Availability",
              desc: "Contact our team to confirm your preferred date and time for the venue.",
            },
            {
              step: "Step 2",
              title: "Schedule a Viewing",
              desc: "Visit our secretariat to tour the Sir Sunday Nwosu Hall and discuss your requirements.",
            },
            {
              step: "Step 3",
              title: "Confirm & Book",
              desc: "Receive your quote, complete the booking form, and secure your event date.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center shadow-md"
            >
              <FaGlobe className="text-white text-2xl mx-auto mb-3" />
              <span className="inline-block mb-3 text-xs bg-white/20 px-3 py-1 rounded-full">
                {item.step}
              </span>
              <h4 className="font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-white/90 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Sec4;
