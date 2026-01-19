import img from "../../assets/Discord Other.png"
import img1 from "../../assets/1.png"
import img2 from "../../assets/Discord Other (Unnamed)-1.png"

const Sec1 = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">
            A Legacy of Advocacy Since 1998
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">
            Inaugurated in 1998, ISAN has focused on articulating the interests of
            minority shareholders through good corporate governance. We have
            championed landmark reforms in the Nigerian Capital Market, including:
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* CARD 1 */}
          <div className="bg-sky-50 rounded-xl p-6">
            <div className="w-10 h-10 flex items-center justify-center bg-sky-500 text-white rounded-lg mb-4">
              <img src={img} alt="" width={22} height={22} />
            </div>

            <h3 className="font-semibold text-black mb-2">
              Digital Evolution
            </h3>

            <p className="text-sm text-gray-700 leading-relaxed">
              Early proponents of the Central Securities Clearing System (CSCS)
              and e-transactions.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-sky-50 rounded-xl p-6">
            <div className="w-10 h-10 flex items-center justify-center bg-sky-500 text-white rounded-lg mb-4">
              <img src={img1} alt="" width={22} height={22} />
            </div>

            <h3 className="font-semibold text-black mb-2">
              National Reach
            </h3>

            <p className="text-sm text-gray-700 leading-relaxed">
              Headquartered in Lagos with eight zonal offices across Nigeria
              and offshore contacts in the UK and USA.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-sky-50 rounded-xl p-6">
            <div className="w-10 h-10 flex items-center justify-center bg-sky-500 text-white rounded-lg mb-4">
              <img src={img2} alt="" width={22} height={22} />
            </div>

            <h3 className="font-semibold text-black mb-2">
              Education-First
            </h3>

            <p className="text-sm text-gray-700 leading-relaxed">
              Our "most potent weapon" is the continuous enlightenment of
              members to create wealth.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Sec1;
