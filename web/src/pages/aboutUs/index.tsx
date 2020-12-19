import React from 'react';
import './styles/aboutUs.css';
import Navbar from '../../components/navbar/index';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer';

export default function aboutUs() {
  return (
    <div className="landingBackground area">
      <div className="backgroundSmooth">
        <div className="landingHeader">
          <Navbar />
        </div>
        <div className="aboutUsHeader">
          <div className="aboutUsHeaderTextContainer">
            <h2>We help you to build your dreams pc!</h2>
            <h5>
              We are a philanthropic company that seeks to provide the best cost
              benefit for anyone looking to assemble their computer, regardless
              of use
            </h5>
            <Link className="aboutUsLink" to="/">
              LEARN MORE
            </Link>
          </div>
        </div>
        <div className="abousUsContainer">Learn more</div>
        <Footer />
      </div>
    </div>
  );
}
