import React from "react";
import "./App.css";
import BackgroundImage from "./components/BackgroundImage";
import ImageBox from "./components/ImageBox";

const App = () => {
  return (
    <div className="App">
      <BackgroundImage />
      <h1 className="title">Medical Team</h1>
      <div className="container">
        <ImageBox
          src="/dr.faris.png"
          alt="Dr. Faris Faqih"
          text="Dr. Faris Faqih is an experienced medical professional specializing in general surgery."
        />
        <ImageBox
          src="/Dr.ebaa.png"
          alt="Dr. Ebaa Maali"
          text="Dr. Ebaa Maali specializes in cardiology with over 5 years of experience in the field."
        />
        <ImageBox
          src="/dr.leena.png"
          alt="Dr. Leena Othman"
          text="Dr. Leena Othman is a pediatrician dedicated to providing quality healthcare for children."
        />
      </div>
    </div>
  );
};

export default App;
