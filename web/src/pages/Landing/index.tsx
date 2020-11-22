import React from 'react';
import Navbar from '../../components/navbar/index';
import './styles/Landing.css';

export default function Landing() {
  return (
    <div>
      <div className="landingBackground">
        <div className="landingHeader">
          <Navbar />
        </div>
      </div>
    </div>
  );
}
