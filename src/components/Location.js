import React from 'react';

const Location = () => {
  return (
    <section id="location" className="section-padding bg-black text-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-8">
              PERFECTLY LOCATED
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Situated in the heart of Tel Aviv's cultural district,
              House of Delray offers unparalleled access to the city's
              most vibrant neighborhoods.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              Just steps away from world-class galleries, boutique shopping,
              and the Mediterranean coastline, our location embodies the
              essence of modern Tel Aviv living.
            </p>
            <button className="btn-secondary">
              GET DIRECTIONS
            </button>
          </div>

          {/* Right Map */}
          <div className="bg-delray-teal h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-white text-lg mb-2">Interactive Map</div>
              <div className="text-white/70 text-sm">8 Hilel Hazaken St, Tel Aviv</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;