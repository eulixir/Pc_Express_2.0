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
        <div className="landingMenu">
          <IoIosMenu size={50} color={'#294CCA'} />
        </div>
        <div className="landingLogo">
          <p>Pc Express</p>
        </div>
        <div className="searchLogo">
          <BsSearch size={25} color={'#fff'} />
        </div>
        <div className="landingUser">
          <RiUserFill size={25} color={'#294CCA'} />
        </div>
        <div className="marketcarLanding">
          <ImCart size={25} color={'#fff'} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
