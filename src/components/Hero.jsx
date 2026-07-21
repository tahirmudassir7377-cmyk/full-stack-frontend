function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gray-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
            New Arrivals Every Week
          </span>

          <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
            Shop the Latest Trends, <span className="text-primary">Delivered Fast</span>
          </h1>

          <p className="text-gray-600 text-lg mb-8">
            Discover quality products at unbeatable prices. From electronics to fashion, we've got everything you need.
          </p>

          <div className="flex gap-4">
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition">
              Shop Now
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-primary hover:text-primary transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="bg-primary rounded-2xl h-96 flex items-center justify-center text-white text-2xl font-semibold">
          Hero Image Here
        </div>

      </div>
    </section>
  );
}

export default Hero;