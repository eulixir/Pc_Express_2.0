import React from 'react';
import './styles/Login.css';
import '../Entry.css';
import { BsEyeSlash } from 'react-icons/bs';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="background">
      <div className="loginBackground">
        <div className="entryContainer">
          <div className="GoBackEntryIcon">
            <Link to="/">
              <BsArrowLeft color="white" size={50} />
            </Link>
          </div>

          <p>Login</p>
          <form action="" className="loginInputs">
            <input type="email" placeholder="Email" name="" id="" />
            <div className="passwordContainer">
              <input type="password" placeholder="Password" name="" id="" />
              <BsEyeSlash size={32} color="white" className="showPassword" />
            </div>

            <input type="submit" value="LOGIN" />
          </form>
          <div className="loginLinks">
            <Link to="/Entry/ChangePassword">Forgot Your Password?</Link>
            <Link to="/Entry/Register">Don't Have Register?</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
