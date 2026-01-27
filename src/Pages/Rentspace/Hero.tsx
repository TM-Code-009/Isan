import { FaCalendarDay } from "react-icons/fa";



const Hero = () => {
  return (
    <section className="w-full bg-sky-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
         <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#33C1FF] text-white">
                  <FaCalendarDay size={22} />
                </div>
        
        <h1 className="text-2xl font-bold sm:text-3xl lg:text-[50px] text-white">
         Rent Space: Host Your Next Event at the ISAN Secretariat
        </h1>

        <p className="mt-4 text-sm sm:text-base text-white/90 max-w-xl mx-auto lg:max-w-[1000px] ">
          The Independent Shareholders Association of Nigeria (ISAN) offers professional and modern facilities for your corporate meetings, seminars, and social gatherings. Our venue is designed to provide a productive atmosphere with the prestige of a national professional association.</p>

    
      </div>
    </section>
  );
};

export default Hero;