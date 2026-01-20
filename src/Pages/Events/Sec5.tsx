const Sec5 = () => {
  return (
    <section className="bg-sky-500 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Don&apos;t Miss Our Next Event
        </h2>

        <p className="text-white/90 text-base md:text-lg mb-10">
          Subscribe to our newsletter to receive updates about upcoming AGMs,
          workshops, and advocacy activities.
        </p>

        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="w-full sm:w-96 px-5 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-3 rounded-xl transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Sec5;
