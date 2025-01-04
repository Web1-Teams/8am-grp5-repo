import { Routes, Route } from 'react-router-dom';
import './Homepage/style/style.css';
import Header from './Homepage/Header';
import Hero from './Homepage/Hero';
import Services from './Homepage/Services';
import About from './Homepage/About';
import Doctors from './Homepage/Doctors.';
import Appoitment from './Homepage/Appoitment';
import Footer from './Homepage/Footer';
import Form from './components/Form';
import BlogList from './WijdanBlog/BlogList';
import React from "react";
import './About-page-abdulqader/About.css';


import ClinicVideo from './About-page-abdulqader/ClinicVideo';
import Achievements from './About-page-abdulqader/Achievements';
import MedicalTeam from './About-page-abdulqader/MedicalTeam';
import Aboutourclinic from './About-page-abdulqader/Aboutourclinic';

import './WijdanBlog/root.css';
import './WijdanBlog/list.css';

function App() {
  return (
    <>
      <Header />
      <Hero />
              <Services />
              <About />
              <Doctors />
              <Appoitment />
              <BlogList />
              <Footer />
              <Aboutourclinic />
      <ClinicVideo />
      <Achievements />
      <MedicalTeam />

      <Routes>
        {/* الصفحة الرئيسية */}
        <Route
          path="/"
          element={
            <>
 
            </>
          }
        />
        {/* صفحة حجز المواعيد */}
        <Route path="/appoitment" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
