import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CollegeUpdates from './components/CollegeUpdates';
import Slider from './components/Slider';
import Activities from './components/Activities';
import Features from './components/Features';

function App() {

  return (
    <>

    <br />
    <br />
    <br />
    <Slider/>
    <br />
    <Activities/>
    
    <br />
    <CollegeUpdates/>
    <br />
    <Features/>
    <br />

    </>
    
    
  );
}

export default App;
