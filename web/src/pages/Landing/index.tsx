import React from 'react';
import Navbar from '../../components/navbar/index';
import './styles/Landing.css';

import Slider from '../../components/slider';
import SuportIcon from '../../components/suportIcon';
import HelpToAssembly from '../../components/helpToAssembly';

export default function Landing() {
  return (
    <div className="landingBackground area" ss-container>
      <SuportIcon />
      <div className="backgroundSmooth">
        <div className="landingHeader">
          <Navbar />
          <div className="sliderBackground">
            <Slider />
            <HelpToAssembly />
          </div>
        </div>
      </div>
    </div>
  );
}
