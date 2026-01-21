

const Sec2 = () => {
  return (
    <section className="bg-slate-50 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Upcoming Corporate AGMs
        </h2>
        <p className="max-w-4xl mx-auto text-gray-600 text-base md:text-lg mb-14">
          ISAN members actively participate in the governance of Nigeria&apos;s
          leading companies. Below are the key meeting windows for organizations
          where our executive members hold leadership or audit roles.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-sm p-6 border-l-4 border-sky-500">
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Financial Sector
            </h3>
            <p className="text-sky-500 font-medium mb-3">
              Wema Bank, Cornerstone Insurance
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Typically scheduled following the release of annual reports to
              deliberate on dividend payments and board appointments.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-sm p-6 border-l-4 border-sky-500">
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Financial Sector
            </h3>
            <p className="text-sky-500 font-medium mb-3">
              Berger Paints, ABC Transport, Neimeth Pharmaceutical
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Key sessions focusing on performance reviews and audit committee
              elections.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-sm p-6 border-l-4 border-sky-500">
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Property &amp; Real Estate
            </h3>
            <p className="text-sky-500 font-medium mb-3">UAC Properties</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Reviews of asset portfolios and long-term investment strategies.
            </p>
          </div>
        </div>

        {/* Note */}
        <div className="bg-sky-50 border border-sky-400 rounded-2xl p-6 max-w-6xl mx-auto">
          <p className="text-gray-700 text-sm md:text-base">
            <span className="font-semibold">Note:</span> Specific dates for
            corporate AGMs will be published as companies release their annual
            reports. ISAN members will receive priority notifications via email
            and SMS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sec2;
