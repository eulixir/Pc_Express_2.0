import React from 'react';
import noManSkyImg from '../../assets/no mans sky.png';
import cod from '../../assets/cod.jpg';
import horizon from '../../assets/horizonZero.jpg';
import akali from '../../assets/akali.jpg';
import './styles/slider.css';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
} from 'mdbreact';

export default function Slider() {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={4}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img className="d-block w-100" src={akali} alt="First slide" />
              <MDBMask overlay="black-light" />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img className="d-block w-100" src={horizon} alt="Second slide" />
              <MDBMask overlay="black-strong" />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img className="d-block w-100" src={cod} alt="Third slide" />
              <MDBMask overlay="black-slight" />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img
                className="d-block w-100"
                src={noManSkyImg}
                alt="Third slide"
              />
              <MDBMask overlay="black-slight" />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}
