import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/hero-bg.jpg)'
        }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <div className="fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-4 text-shadow">
            MEET ME
            <span className="block text-4xl md:text-5xl lg:text-6xl font-light mt-2">
              at
            </span>
          </h1>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 text-shadow">
            The DELRAY
          </h2>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;