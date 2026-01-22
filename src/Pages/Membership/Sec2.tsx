const Sec2 = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-semibold mb-4">
          Membership Categories & Fees
        </h2>
        <p className="text-gray-600">
          Select the category that best fits your investment profile. All
          payments contribute to the financial and moral support of the
          association.
        </p>
      </div>

      {/* Table */}
      <div className="max-w-5xl mx-auto overflow-hidden rounded-xl shadow-sm ">
        <table className="w-full ">
          <thead>
            <tr className="bg-sky-500 text-white text-sm">
              <th className="py-4 px-6 text-left font-medium">Category</th>
              <th className="py-4 px-6 text-left font-medium">
                Application Form
              </th>
              <th className="py-4 px-6 text-left font-medium">
                Development Levy
              </th>
              <th className="py-4 px-6 text-left font-medium">
                Annual Dues
              </th>
            </tr>
          </thead>

          <tbody className="text-gray-700">
            <tr className="border-b">
              <td className="py-5 px-6">A - Individual</td>
              <td className="py-5 px-6">Fixed Fee</td>
              <td className="py-5 px-6">Mandatory</td>
              <td className="py-5 px-6">Annual</td>
            </tr>

            <tr>
              <td className="py-5 px-6">B - Private/Corporate</td>
              <td className="py-5 px-6">Fixed Fee</td>
              <td className="py-5 px-6">Mandatory</td>
              <td className="py-5 px-6">Annual</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Note */}
      <div className="max-w-5xl mx-auto mt-8">
        <div className="bg-sky-50 border border-sky-400 text-gray-700 rounded-xl px-6 py-4 text-center">
          <span className="font-semibold">Note:</span>{" "}
          All fees are structured to ensure sustainable operations and member
          welfare support. Contact our secretariat for specific pricing details.
        </div>
      </div>
    </section>
  );
};

export default Sec2;
