import africa from "../../assets/africa.png";
import {
  FaChartBar,
  FaUniversity,
  FaDollarSign,
  FaBriefcase,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="w-full min-h-screen px-4 sm:px-6 md:px-14 lg:px-20 py-14 md:py-20">
      
      {/* TOP SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* LEFT TEXT */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-sky-300">
            Empowering the Minority
            <br className="hidden sm:block" />
            Shareholder for Wealth
            <br className="hidden sm:block" />
            Creation.
          </h1>

          <p className="mt-5 md:mt-6 max-w-md mx-auto md:mx-0 text-gray-700 text-sm sm:text-base">
            The leading African Shareholders' group dedicated to good
            corporate governance and investor advocacy since 1998.
          </p>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative flex items-center justify-center w-full min-h-[360px] sm:min-h-[420px] md:min-h-[480px]">
          
          {/* ORBIT 1 */}
          <div className="absolute w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] md:w-[240px] md:h-[240px] rounded-full border border-sky-200 animate-spin-slow">
            <div className="absolute top-0 right-5 md:right-10 -translate-x-1/2 bg-sky-400 p-2 rounded-full text-white text-sm">
              <FaDollarSign />
            </div>
          </div>

          {/* ORBIT 2 */}
          <div className="absolute w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[320px] md:h-[320px] rounded-full border border-sky-200 animate-spin-reverse">
            <div className="absolute bottom-8 left-3 md:left-8 bg-sky-400 p-2 rounded-full text-white text-sm">
              <FaChartBar />
            </div>
          </div>

          {/* ORBIT 3 */}
          <div className="absolute w-[320px] h-[320px] sm:w-[360px] sm:h-[360px] md:w-[400px] md:h-[400px] rounded-full border border-sky-200 animate-spin-slower">
            <div className="absolute top-4 md:left-20 left-13 bg-sky-400 p-2 rounded-full text-white text-sm">
              <FaUniversity />
            </div>
            <div className="absolute bottom-4 right-10 md:right-20 bg-sky-400 p-2 rounded-full text-white text-sm">
              <FaBriefcase />
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="relative z-10 rounded-full p-4 sm:p-6">
            <img
              src={africa}
              alt="Africa Map"
              className="w-[130px] sm:w-[160px] md:w-[180px] lg:w-[200px] object-contain"
            />
          </div>
        </div>
      </div>

      {/* BOTTOM CARDS */}
      <div className="mt-16 md:mt-20 grid md:gap-6 gap-20 sm:grid-cols-2 w-full mx-auto px-2">
        <div className="h-[300px] lg:h-[180px] p-6 flex flex-col items-center justify-center rounded-sm shadow-xl text-center">
          <h3 className="text-sky-400 text-[20px] font-semibold mb-3">
            Our Mission
          </h3>
          <p className="text-sm text-[20px] sm:text-base text-sky-400 leading-relaxed">
            To be a proactive group driven by law<br/> and shared economic
            value that<br/> investors are proud to associate with.
          </p>
        </div>

        <div className="h-[300px] lg:h-[180px] p-6 flex flex-col items-center justify-center rounded-sm shadow-xl text-center">
          <h3 className="text-sky-400 text-[20px] font-semibold mb-3">
            Our Impact
          </h3>
          <p className="text-sm text-[20px]  sm:text-base text-sky-400 leading-relaxed">
            Championing reforms like the Central<br/> Securities Clearing
            System (CSCS) and<br/> e-transactions to protect investor<br/> interests.
          </p>
        </div>
      </div>

    </section>
  );
};

export default Hero;
