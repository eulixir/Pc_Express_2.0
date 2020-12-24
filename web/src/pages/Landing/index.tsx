import React from 'react';
import Navbar from '../../components/navbar/index';
import './styles/Landing.css';

import Slider from '../../components/slider';
import SuportIcon from '../../components/suportIcon';
import HelpToAssembly from '../../components/helpToAssembly';
import Footer from '../../components/footer';

export default function Landing() {
  return (
    <div className="landingBackground area">
      <SuportIcon />
      <div className="backgroundSmooth">
        <div className="landingHeader">
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
