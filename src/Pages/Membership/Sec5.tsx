const Sec5 = () => {
  return (
    <section className="bg-[#0B1E3d] py-20 px-4">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Ready to Join Nigeria's Leading Shareholders Association?
        </h2>

        <p className="text-white/90 text-base md:text-lg mb-10">
         Take the first step towards protecting your investments and building wealth with ISAN.
        </p>

        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
         
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-3 rounded-xl transition"
          >
            Apply For Membership
          </button>
          <button
            type="submit"
            className="border border-sky-400 text-sky-400 font-medium px-8 py-3 rounded-xl transition"
          >
            Download Membership Guide
          </button>
        </form>
        <p className="text-white text-base text-[16px] mt-5 mb-10">
         Questions? Contact us at <span className="text-sky-400" >isan.isan@yahoo.com</span></p>
      </div>
    </section>
  );
};

export default Sec5;
