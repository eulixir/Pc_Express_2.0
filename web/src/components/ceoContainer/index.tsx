import React from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCol,
} from 'mdbreact';
import { SiGithub } from 'react-icons/si';
import { ImLinkedin } from 'react-icons/im';
import { ImSteam } from 'react-icons/im';

import './styles/ceoContainer.css';

const CeoContainer = () => {
  return (
    <MDBCol style={{ maxWidth: '22rem' }}>
      <MDBCard id="card">
        <div className="cardImg">
          <img
            id="cardImg"
            className="img-fluid"
            src="https://avatars0.githubusercontent.com/u/56173070?s=400&u=5ade7c0c2272d94089c411ccc8082ad9308e95eb&v=4"
          />
        </div>
        <MDBCardBody>
          <MDBCardTitle>
            <p className="ownerNameCard">João Pedro Alves</p>
          </MDBCardTitle>
          <MDBCardText>
            Founder of Pc express, full stack developer in JavaScript, majoring
            in Analysis and systems development with skills in Java Script,
            React, Node and CSS
          </MDBCardText>
          <div className="cardItens">
            <a
              href="https://github.com/joaopealves"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub size={32} className="SiGithub" />
            </a>
            <a
              href="https://github.com/joaopealves"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImLinkedin size={32} className="ImLinkedin" />
            </a>
            <a
              href="https://github.com/joaopealves"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="steamCardContainer">
                <ImSteam size={24} className="ImSteam" />
              </div>
            </a>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default CeoContainer;
