import React, { useState, FormEvent } from 'react';
import './styles/Login.css';
import '../Entry.css';
import { BsEyeSlash } from 'react-icons/bs';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import api from '../../../services/api';
import { useHistory } from 'react-router-dom';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  function handleLogin(e: FormEvent) {
    e.preventDefault();

    api
      .get('Entry/Validate/' + email + '/' + password, {})
      .then(() => {
        history.push('/');
      })
      .catch((err) => {
        window.alert('Invalid email or password');
      });
  }

  return (
    <div className="background">
      <div className="loginBackground backgroundSmooth">
        <div className="backgroundEntrySmooth">
          <div className="entryContainer">
            <div className="GoBackEntryIcon">
              <Link to="/">
                <BsArrowLeft color="white" size={50} />
              </Link>
            </div>

            <p>Log In</p>
            <h5>Let's go build</h5>
            <form onSubmit={handleLogin} className="loginInputs">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => [setEmail(e.target.value)]}
                required
              />
              <div className="passwordContainer">
                <input
                  type={passwordShown ? 'text' : 'password'}
                  placeholder="Password"
                  onChange={(e) => [setPassword(e.target.value)]}
                  required
                />
                <BsEyeSlash
                  onClick={togglePasswordVisiblity}
                  size={32}
                  color="white"
                  className="showPassword"
                />
              </div>
              <input type="submit" value="LOGIN" />
            </form>
            <div className="loginLinks">
              <Link to="/Entry/ForgotPassword">Forgot Your Password?</Link>
              <Link to="/Entry/Register">Don't Have Register?</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
