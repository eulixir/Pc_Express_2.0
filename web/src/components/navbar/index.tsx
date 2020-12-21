import React from 'react';
import { IoIosMenu } from 'react-icons/io';
import { RiUserFill } from 'react-icons/ri';
import { ImCart } from 'react-icons/im';
import './styles/navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const underCuntruction = () => {
    window.alert(
      'Hello, this option is currently under maintenance, try later, but if you want to contribute to the project, search for pc_express_2.0 on github :)'
    );
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg">
        <Link className="navbar-brand" to="/">
          Pc Express
        </Link>
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
                <span>Pc builder</span>
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a
                  className="dropdown-item"
                  id="navItem"
                  href="#"
                  onClick={underCuntruction}
                >
                  Pc Gamer
                </a>
                <a
                  className="dropdown-item"
                  id="navItem"
                  href="#"
                  onClick={underCuntruction}
                >
                  WorkStation
                </a>
                <a
                  className="dropdown-item"
                  id="navItem"
                  href="#"
                  onClick={underCuntruction}
                >
                  Home
                </a>
              </div>
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
                <span>About</span>
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link to="/aboutUs" className="dropdown-item" id="navItem">
                  About Us
                </Link>
                <a
                  className="dropdown-item"
                  onClick={underCuntruction}
                  id="navItem"
                  href="#"
                >
                  About Devs
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={underCuntruction}>
                <span>Contact</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={underCuntruction}>
                <span>FAQ</span>
              </a>
            </li>
          </ul>
          <div className="userLogo">
            <Link to="/Entry/Login">
              <RiUserFill size={25} color={'#294CCA'} />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
