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
        <a className="nav-link" href="#"></a>

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
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
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
                <span>Computers</span>
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" id="navItemPcGamer" href="#">
                  Pc Gamer
                </a>
                <a className="dropdown-item" id="navItemWorkstation" href="#">
                  WorkStation
                </a>
                <a className="dropdown-item" id="navItemHome" href="#">
                  Home
                </a>
              </div>
            </li>
            <li className="nav-item"></li>
            <li className="nav-item"></li>
            <li className="nav-item marketcarLanding"></li>
          </ul>
          <div className="searchLogo">
            <input type="text" name="" id=""></input>
            <BsSearch size={25} color={'#294CCA'} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
