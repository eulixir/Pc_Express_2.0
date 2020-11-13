import React from 'react';

import './styles/ForgotPassword.css';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  return (
    <div className="background">
      <div className="forgotBackground">
        <div className="entryContainer">
          <div className="GoBackEntryIcon">
            <Link to="/Entry/Login">
              <BsArrowLeft color="white" size={50} />
            </Link>
          </div>

          <p>Forgot Password?</p>
          <h6>
            Forgot password? does not matter! We will send a code in your email
            !
          </h6>
          <form action="" className="forgotInputs">
            <input
              type="email"
              placeholder="Your email registered"
              name=""
              id=""
            />

            <Link to="/Entry/ChangePassword">
              <input type="submit" value="SEND CODE TO YOUR EMAIL" />
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
