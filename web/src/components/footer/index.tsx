import React from 'react';
import './styles/footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About Us</h6>
            <p className="text-justify">
              We are a philanthropic company that aims to help people with
              different levels of knowledge about hardware. For example, a
              person looks for a computer to work with simpler tools such as
              excel and word, the requirements for this activity are not high,
              so they don't need a video card. We use artificial intelligence to
              prepare the best possible working environment and recommend the
              cheapest parts found on the market
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Used technologies</h6>
            <ul className="footer-links">
              <li>
                <a href="https://www.javascript.com">JavaScript</a>
              </li>
              <li>
                <a href="https://www.typescriptlang.org">TypeScript</a>
                <li>
                  <a href="https://reactjs.org">React.Js</a>
                </li>
              </li>
              <li>
                <a href="https://nodejs.org/en/">Node.Js</a>
              </li>
              <li>
                <a href="https://www.mongodb.com">MongoDB</a>
              </li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <Link to="/aboutUs">About Us</Link>
              </li>
              <li>
                <a href="/contacUS">Contact Us</a>
              </li>
              <li>
                <a href="/aboutDevs">About Devs</a>
              </li>
              <li>
                <a href="http://scanfcode.com/privacy-policy/">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/sitemap/">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2020 All Rights Reserved by
              <a href="#"> PcExpress</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a className="facebook" href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a className="twitter" href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a className="dribbble" href="#">
                  <i className="fa fa-dribbble"></i>
                </a>
              </li>
              <li>
                <a className="linkedin" href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
