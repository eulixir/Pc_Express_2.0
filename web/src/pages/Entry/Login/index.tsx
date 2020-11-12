import React from 'react';
import './styles/Login.css';
import '../Entry.css';
import { BsEyeSlash } from 'react-icons/bs';

export default function Login() {
  return (
    <div className="background">
      <div className="loginBackground">
        <div className="entryContainer">
          <p>Login</p>
          <form action="" className="loginInputs">
            <input type="email" placeholder="Email" name="" id="" />
            <input type="password" placeholder="Password" name="" id="" />
            {/* <BsEyeSlash size={32} color="white" /> */}{' '}
            {/* Eyes icon to reveal password ^ */}
            <input type="submit" value="LOGIN" />
          </form>
          <div className="loginLinks">
            <a href="#">Forgot Your Password?</a>
            <a href="#">Don't Have Register?</a>
          </div>
        </div>
      </div>
    </div>
  );
}
