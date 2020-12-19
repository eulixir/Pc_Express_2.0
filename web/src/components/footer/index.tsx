import React from 'react';
import './styles/footer.css';
import { Link } from 'react-router-dom';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { RiInstagramLine } from 'react-icons/ri';

const currentYear = new Date().getFullYear();

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
                <Link to="/contacUS">Contact Us</Link>
              </li>
              <li>
                <Link to="/aboutDevs">About Devs</Link>
              </li>
              <li>
                <a href="#">Build your pc</a>
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; {currentYear} All Rights Reserved by
              <a href="#"> PcExpress</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a
                  className="linkedin"
                  href="https://www.linkedin.com/in/jo%C3%A3o-pedro-alves-910858163/"
                >
                  <FaLinkedinIn size={20} color={'#fff'} />
                </a>
              </li>
              <li>
                <a
                  className="github"
                  href="https://github.com/joaopealves/Pc_Express_2.0"
                >
                  <FiGithub size={20} color={'#fff'} />
                </a>
              </li>
              <li>
                <a className="instagram" href="#">
                  <RiInstagramLine size={20} color={'#fff'}></RiInstagramLine>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
