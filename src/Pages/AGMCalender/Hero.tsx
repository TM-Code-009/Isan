import { FaCalendarDay } from "react-icons/fa";



const Hero = () => {
  return (
    <section className="w-full bg-sky-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
         <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#33C1FF] text-white">
                  <FaCalendarDay size={22} />
                </div>
        
        <h1 className="text-2xl font-bold sm:text-3xl lg:text-[50px] text-white">
          AGM Calendar: 2024 - 2025 Schedule
        </h1>

        <p className="mt-4 text-sm sm:text-base text-white/90 max-w-xl mx-auto lg:max-w-[1000px] ">
          The Annual General Meeting (AGM) is the most critical event for any shareholder. It is your platform to receive and approve financial reports, elect committee members, and hold leadership accountable. In line with our commitment to transparency and accountability, ISAN provides this centralized schedule to ensure every member can exercise their rights.        </p>

      </div>
    </section>
  );
};

export default Hero;