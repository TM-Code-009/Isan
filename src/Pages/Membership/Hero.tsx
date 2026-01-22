const Hero = () => {
  return (
    <section className="w-full bg-sky-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
        
        <h1 className="text-2xl font-bold sm:text-3xl lg:text-[50px] text-white">
          Membership: Join the ISAN Community
        </h1>

        <p className="mt-4 text-sm sm:text-base text-white/90 max-w-xl mx-auto">
         Join a network of proactive investors dedicated to transparency, accountability, and wealth creation. Whether you are a seasoned investor or a university student just starting out, ISAN provides the tools and community to help you succeed in the Nigerian Capital Market.    </p>


<div className="flex justify-center mt-10">
          <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-3 rounded-xl transition">
            Add to My Calendar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
