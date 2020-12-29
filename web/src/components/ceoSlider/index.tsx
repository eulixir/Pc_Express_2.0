import React from 'react';
import './styles/ceoSlider.css';
import './styles/animateSlider.css';

export default function CeoSlider() {
  return (
    <div className="container my-4">
      <p className="font-weight-bold">
        Bootstrap carousel multiple items is an improved version of the standard
        bootstrap carousel which allows you to put inside more than one element.
      </p>

      <p>
        <strong>Detailed</strong> documentation and more examples of Bootstrap
        grid you can find in our{' '}
        <a
          href="https://mdbootstrap.com/docs/jquery/javascript/carousel/"
          target="_blank"
        >
          Bootstrap Carousel Docs
        </a>
        .
      </p>

      <hr className="my-4" />

      <div
        id="multi-item-example"
        className="carousel slide carousel-multi-item"
        data-ride="carousel"
      >
        <div className="controls-top">
          <a
            className="btn-floating"
            href="#multi-item-example"
            data-slide="prev"
          >
            <i className="fa fa-chevron-left"></i>
          </a>
          <a
            className="btn-floating"
            href="#multi-item-example"
            data-slide="next"
          >
            <i className="fa fa-chevron-right"></i>
          </a>
        </div>

        <ol className="carousel-indicators">
          <li
            data-target="#multi-item-example"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#multi-item-example" data-slide-to="1"></li>
          <li data-target="#multi-item-example" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner" role="listbox">
          {/* <!--First slide--> */}
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md-4">
                <div className="card mb-2">
                  <img
                    className="card-img-top"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a className="btn btn-primary">Button</a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2">
                  <img
                    className="card-img-top"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a className="btn btn-primary">Button</a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2">
                  <img
                    className="card-img-top"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a className="btn btn-primary">Button</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--/.First slide--> 

          {/* <!--Second slide--> */}
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-4">
                <div className="card mb-2">
                  <img
                    className="card-img-top"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a className="btn btn-primary">Button</a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2">
                  <img
                    className="card-img-top"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a className="btn btn-primary">Button</a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2">
                  <img
                    className="card-img-top"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a className="btn btn-primary">Button</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--/.Second slide--> */}

          {/* <!--Third slide--> */}
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-4">
                <div className="card mb-2">
                  <img
                    className="card-img-top"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a className="btn btn-primary">Button</a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2">
                  <img
                    className="card-img-top"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a className="btn btn-primary">Button</a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2">
                  <img
                    className="card-img-top"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(51).jpg"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a className="btn btn-primary">Button</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--/.Third slide--> */}
        </div>
        {/* <!--/.Slides--> */}
      </div>
      {/* <!--/.Carousel Wrapper--> */}
    </div>
  );
}
