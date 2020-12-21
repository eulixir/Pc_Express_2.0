import React from 'react';
import './styles/aboutUs.css';
import Navbar from '../../components/navbar/index';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer';
import { ImEye, ImFlag } from 'react-icons/im';
import { FaHandshake } from 'react-icons/fa';

export default function aboutUs() {
  return (
    <div className="landingBackground">
      <div className="backgroundSmooth">
        <Navbar />
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
        <div className="abousUsContainer">
          {/* MVV = Mission, Vision and Values */}
          <div className="mvvHeader">
            <span>MISSION, VISION AND VALUES</span>
          </div>
          <div className="mvvItensContainer">
            <div className="mvvItens">
              <ImFlag size={32} color={'#294CCA'} />
              <h5>Mission</h5>
              <span>
                Help those who need a machine and don't know where to start
              </span>
            </div>
            <div className="mvvItens">
              <ImEye size={32} color={'#294CCA'} />
              <h5>Vision</h5>
              <span>Be a reference in computer assembly consulting.</span>
            </div>
            <div className="mvvItens">
              <FaHandshake size={32} color={'#294CCA'} />
              <h5>Values</h5>
              <span>* Respect and Appreciation of people</span>
              <span>* Proactivity and Altruism</span>
              <span>* Innovation and Leadership</span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
