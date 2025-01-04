import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Services from './component-raneen/Services';
import ConsultationForm from './components1/ConsultationForm';
import DentalImplants from './components2/DentalImplants';
import CosmeticFillings from './components3/CosmeticFillings';
import OrthodonticTreatment from './components4/OrthodonticTreatment';
import GumTreatments from './components5/GumTreatments';
import OralHealthCare from './components6/OralHealthCare';
import OralRadiology from './components7/OralRadiology';
import RootCanalTreatment from './components8/RootCanalTreatment';
import PediatricDentalCare from './components9/PediatricDentalCare';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
         <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Services/>} />
          <Route path="/ConsultaitionForm" element={<ConsultationForm />} />
          <Route path="/DentalImplants" element={<DentalImplants />} />
          <Route path="/CosmeticFillings" element={<CosmeticFillings />} />
          <Route path="/OrthodonticTreatment" element={<OrthodonticTreatment />} />
          <Route path="/GumTreatments" element={<GumTreatments />} />
          <Route path="/OralHealthCare" element={<OralHealthCare />} />
          <Route path="/OralRadiology" element={<OralRadiology />} />
          <Route path="/RootCanalTreatment" element={<RootCanalTreatment />} />
          <Route path="/PediatricDentalCare" element={<PediatricDentalCare />} />
        </Routes>
        </BrowserRouter>

  </React.StrictMode>
);
