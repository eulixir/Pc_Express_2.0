import React from 'react';
import { IoIosMenu } from 'react-icons/io';
import { BsSearch } from 'react-icons/bs';
import { RiUserFill } from 'react-icons/ri';
import { ImCart } from 'react-icons/im';
import './styles/navbar.css';
const Navbar = () => {
  return (
    <div>
      <div className="navbarContainer">
        <div className="landingMenu"></div>
        <div className="landingLogo">
          <p>Pc Express</p>
        </div>
        <div className="landingUser">
          <RiUserFill size={25} color={'#294CCA'} />
        </div>
        <div className="landingCar">
          <ImCart size={25} color={'#fff'} />
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg">
        <a className="navbar-brand" href="#">
          Pc Express
        </a>
        <a className="nav-link" href="#">
          <div className="searchLogo">
            <BsSearch size={25} color={'#fff'} />
          </div>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <IoIosMenu size={50} color={'#294CCA'} />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown link
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item"></li>
            <li className="nav-item"></li>
            <li className="nav-item marketcarLanding"></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
