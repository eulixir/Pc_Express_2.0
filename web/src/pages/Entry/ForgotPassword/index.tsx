import React, { useState, FormEvent } from 'react';
import './styles/ForgotPassword.css';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import api from '../../../services/api';
import { useHistory } from 'react-router-dom';

export default function ForgotPassword() {
  const history = useHistory();
  const [email, setEmail] = useState('');

  console.log(email);
  function handleForgotPassword(e: FormEvent) {
    e.preventDefault();

    api
      .get('Entry/sendEmail/' + email, {})
      .then(() => {
        window.alert('A verification code has been sent to your email');
        history.push('/');
      })
      .catch((err) => {
        window.alert('Invalid email');
      });
  }

  return (
    <div className="background">
      <div className="forgotBackground">
        <div className="backgroundEntrySmooth">
          <div className="entryContainer">
            <div className="GoBackEntryIcon">
              <Link to="/Entry/Login">
                <BsArrowLeft color="white" size={50} />
              </Link>
            </div>

            <p>Forgot Password?</p>
            <h6>
              Forgot password? does not matter! We will send a code in your
              email !
            </h6>
            <form onSubmit={handleForgotPassword} className="forgotInputs">
              <input
                type="email"
                placeholder="Your email registered"
                value={email}
                onChange={(e) => [setEmail(e.target.value)]}
                required
              />
              <input type="submit" value="SEND CODE TO YOUR EMAIL" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
