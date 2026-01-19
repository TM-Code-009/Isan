import { FaChartBar, FaShieldAlt, FaUsers } from "react-icons/fa";

const Sec2 = () => {
  return (
    <section className="bg-slate-50 py-16 px-4">
<div className="max-w-6xl mx-auto text-center">
{/* Heading */}
<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
Membership Built for the Modern Investor
</h2>
<p className="max-w-3xl mx-auto text-gray-600 text-base md:text-lg mb-12">
Whether you are a university student just starting your journey or a
professional in the diaspora, ISAN provides the platform for unity
and progress.
</p>


{/* Cards */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/* Card 1 */}
<div className="bg-white rounded-2xl shadow-sm p-6 text-left">
<div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-4">
<FaChartBar size={22} />
</div>
<h3 className="font-semibold text-lg text-gray-900 mb-2">
Market Intelligence
</h3>
<p className="text-gray-600 text-sm leading-relaxed">
Access quarterly press releases and authoritative assessments of
the Nigerian economy.
</p>
</div>


{/* Card 2 */}
<div className="bg-white rounded-2xl shadow-sm p-6 text-left">
<div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-4">
<FaShieldAlt size={22} />
</div>
<h3 className="font-semibold text-lg text-gray-900 mb-2">
Welfare &amp; Protection
</h3>
<p className="text-gray-600 text-sm leading-relaxed">
Benefit from our Life Group Insurance and Welfare Purse, providing
peace of mind for you and your loved ones.
</p>
</div>


{/* Card 3 */}
<div className="bg-white rounded-2xl shadow-sm p-6 text-left">
<div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-4">
<FaUsers size={22} />
</div>
<h3 className="font-semibold text-lg text-gray-900 mb-2">
Networking
</h3>
<p className="text-gray-600 text-sm leading-relaxed">
Connect with a community of proactive investors dedicated to
transparency and accountability.
</p>
</div>
</div>
</div>
</section>
  )
}

export default Sec2