import React from 'react';
import './styles/Login.css';
import '../Entry.css';

export default function Login() {
  return (
    <div className="background">
      <div className="loginBackground">
        <div className="entryContainer">
          <p>Login</p>
          <form action="" className="loginInputs">
            <input type="email" placeholder="Email" name="" id="" />
            <input type="password" placeholder="Password" name="" id="" />
            <input type="submit" value="LOGIN" />
          </form>
          <div className="loginLinks">
            <a href="#">Esqueci a senha</a>
            <a href="#">Não possui cadastro?</a>
          </div>
        </div>
      </div>
    </div>
  );
}
