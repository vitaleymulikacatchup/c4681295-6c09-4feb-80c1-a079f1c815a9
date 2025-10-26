import React from 'react';

const EatDrink = () => {
  return (
    <section id="eat-drink" className="section-padding bg-black text-white">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-12">
            EAT & DRINK
          </h2>
          
          <div className="mb-12">
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Our kitchen celebrates the vibrant flavors of Mediterranean cuisine,
              reimagined through a contemporary lens.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              From our signature cocktails crafted with locally sourced ingredients
              to our carefully curated wine selection, every sip tells a story.
            </p>
          </div>

          <button className="btn-secondary">
            VIEW MENU
          </button>
        </div>
      </div>
    </section>
  );
};

export default EatDrink;