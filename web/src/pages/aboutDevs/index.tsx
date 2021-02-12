import React from 'react';
import Navbar from '../../components/navbar/index';
import './styles/aboutDevs.css';
import Footer from '../../components/footer';
import { VscGithub } from 'react-icons/vsc';

export default function AboutDevs() {
  return (
    <div className="aboutDevsBackground">
      <div className="aboutDevsSmooth">
        <Navbar />
        <div className="aboutUsHeader">
          <div className="aboutUsHeaderTextContainer">
            <h2>Comes to be part of the project too</h2>
            <h5>
              This is an open project on github, remembering that all content is
              public for contribution, but has restrictions, copying the content
              is prohibited!
            </h5>
            <a
              target="_blank"
              className="aboutUsLink"
              href="https://github.com/joaopealves/Pc_Express_2.0"
            >
              <VscGithub size="40" />
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
