import React from 'react';
import Navbar from '../../components/navbar/index';
import './styles/Landing.css';
// import { Link } from 'react-router-dom';
import Slider from '../../components/slider';
import TopIcon from '../../components/topIcon';
import HelpToAssembly from '../../components/helpToAssembly';
import Footer from '../../components/footer';

export default function Landing() {
  return (
    <div className="landingBackground area">
      <a href="#navbar">
        <TopIcon />
      </a>
      <div className="backgroundSmooth">
        <div className="landingHeader" id="navbar">
          <Navbar />
          <div className="sliderBackground">
            <Slider />
            <HelpToAssembly />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
