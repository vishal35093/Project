import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import App from './App';
import './index.css';

import NotFound from './components/Pageerror';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchPage from './components/Search';
import TrainingPlacementCell from './components/TPC';
import AboutUs from './components/Aboutus';
import ContactUs from './components/Contactus';
import ITDepartment from './components/IT';
import ElectricalDepartment from './components/Electrical';
import MechanicalDepartment from './components/Mechanical';
import AppliedScienceDepartment from './components/ASAH';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Searchpage" element={<SearchPage />} />
        <Route path="/TPC" element={<TrainingPlacementCell />} />
        <Route path="/Aboutus" element={<AboutUs />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/ITDepartment" element={<ITDepartment />} />
        <Route path="/Electrical" element={<ElectricalDepartment />} />
        <Route path="/Mechanical" element={<MechanicalDepartment />} />
        <Route path="/AppliedScienceandHumanities" element={<AppliedScienceDepartment />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);
