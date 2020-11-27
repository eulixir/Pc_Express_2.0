import React from 'react';
import Navbar from '../../components/navbar/index';
import './styles/Landing.css';

import Slider from '../../components/slider';
import SuportIcon from '../../components/suportIcon';

export default function Landing() {
  return (
    <div className="landingBackground">
      <SuportIcon />
      <div className="backgroundSmooth">
        <div className="landingHeader">
          <Navbar />
          <div className="scrollBody">
            <div className="scrollContainer">
              <Slider />
              <Slider />
              <HelpToAssembly />
            </div>
          </div>
<<<<<<< HEAD
=======
          <Slider />
>>>>>>> parent of 59d4349... Add helpassembly component
        </div>
      </div>
    </div>
  );
}
