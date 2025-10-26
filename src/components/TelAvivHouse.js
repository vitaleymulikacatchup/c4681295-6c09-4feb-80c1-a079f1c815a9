import React from 'react';

const TelAvivHouse = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-8 text-gray-900">
              TEL AVIV HOUSE
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Positioned in the heart of the city's cultural and business district,
              our Tel Aviv house serves as both a sanctuary and a social hub.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              From sunrise yoga sessions on our rooftop terrace to late-night
              conversations in our intimate bar, every moment is designed to
              inspire and connect.
            </p>
            <button className="btn-primary">
              EXPLORE OUR HOUSE
            </button>
          </div>

          {/* Right Images */}
          <div className="space-y-6">
            <div className="aspect-w-16 aspect-h-10">
              <img
                src="/images/bar-interior.jpg"
                alt="Delray Bar Interior"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="aspect-w-16 aspect-h-10">
              <img
                src="/images/bedroom.jpg"
                alt="Delray Bedroom"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelAvivHouse;