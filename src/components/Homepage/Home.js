import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Doctors from './components/Doctors';
import Appointment from './components/Appoitment';

function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Doctors />
      <Appointment />
    </div>
  );
}

export default Home;
