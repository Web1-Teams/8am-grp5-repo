
import React from "react";
import './About.css';

import Header from './Header';
import ClinicVideo from './ClinicVideo';
import Achievements from './Achievements';
import MedicalTeam from './MedicalTeam';
import Footer from './Footer';
import Aboutourclinic from './Aboutourclinic';



const About = () => {
  return (
    //about our clinc section
    <div>
     
     
      <Header />
      <Aboutourclinic />
      <ClinicVideo />
      <Achievements />
      <MedicalTeam />
      

      <Footer />
      
    </div>


    
  )
}

export default About
