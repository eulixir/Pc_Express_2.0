import React from 'react';
import './styles/Register.css';

import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="background">
      <div className="registerBackground">
        <div className="entryContainer">
          <div className="GoBackEntryIcon">
            <Link to="/Entry/Login">
              <BsArrowLeft color="white" size={50} />
            </Link>
          </div>

          <p>Register</p>
          <form action="" className="registerInputs">
            <input type="text" placeholder="Name" name="" id="" />

            <input type="email" placeholder="Email" name="" id="" />

            <input type="password" placeholder="Password" name="" id="" />

            <input
              type="password"
              placeholder="Repeat your Password"
              name=""
              id=""
            />
            <Link to="/Entry/Login">
              <input type="submit" value="REGISTER" />
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
