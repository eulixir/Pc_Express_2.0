import React from 'react';
import Navbar from '../../components/navbar/index';
import './styles/Landing.css';
import noManSkyImg from '../../assets/no mans sky.png';
import cod from '../../assets/cod.jpg';
import gamer from '../../assets/Gamer.png';
import akali from '../../assets/akali.jpg';

export default function Landing() {
  return (
    <div>
      <div className="landingBackground">
        <div className="landingHeader">
          <Navbar />
          <div className="landingSliderContainer">
            <div className="landingSlider">
              <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={noManSkyImg}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img src={cod} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={gamer} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={akali} className="d-block w-100" alt="..." />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleFade"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleFade"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
