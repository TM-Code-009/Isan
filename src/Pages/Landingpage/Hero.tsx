const Hero = () => {
  return (
    <section className="w-full bg-gray-100 overflow-x-hidden ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black leading-tight max-w-xl">
              Protecting Your Wealth, Empowering Your Future.
            </h1>

            <p className="mt-5 text-sm sm:text-base text-gray-700 max-w-lg">
              Join the Independent Shareholders Association of Nigeria
              (ISAN)—the leading African proactive shareholders’ group
              driven by law and shared economic value.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-6 py-3 text-sm font-medium bg-sky-500 text-white rounded-sm hover:bg-sky-600 transition">
                Become a Member Today
              </button>

              <button className="px-6 py-3 text-sm font-medium bg-red-600 text-white rounded-sm hover:bg-red-700 transition">
                View 2025 Annual Report
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE PLACEHOLDER */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md aspect-square bg-gray-200 rounded-xl">
              {/* Image goes here */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
