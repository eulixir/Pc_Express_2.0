import React from 'react';
import Navbar from '../../components/navbar/index';
import './styles/Landing.css';

import Slider from '../../components/slider';
import SuportIcon from '../../components/suportIcon';

export default function Landing() {
  return (
    <div>
      <div className="landingBackground">
        <SuportIcon />
        <div className="backgroundSmooth">
          <div className="landingHeader">
            <Navbar />
          </div>
          <Slider />
        </div>
      </div>
    </div>
  );
}
