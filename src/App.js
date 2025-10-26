import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import TelAvivHouse from './components/TelAvivHouse';
import EatDrink from './components/EatDrink';
import Events from './components/Events';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <TelAvivHouse />
      <EatDrink />
      <Events />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;