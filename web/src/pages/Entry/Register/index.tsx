import React, { useState, FormEvent } from 'react';
import './styles/Register.css';

import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import api from '../../../services/api';
import { useHistory } from 'react-router-dom';

function Register() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  function handleCreateRegister(e: FormEvent) {
    e.preventDefault();

    if (password === repeatPassword) {
      api
        .post('Entry/Register', {
          name,
          email,
          password,
          repeatPassword,
        })

        .then(() => {
          alert('Cadastro realizado com sucesso');
          history.push('/Entry/Login');
        })
        .catch(() => {
          alert('Email já registrado');
        });
    } else {
      alert('As senhas não coincidem');
    }
  }

  return (
    <div className="background">
      <div className="registerBackground">
        <div className="backgroundEntrySmooth">
          <div className="entryContainer">
            <div className="GoBackEntryIcon">
              <Link to="/Entry/Login">
                <BsArrowLeft color="white" size={50} />
              </Link>
            </div>

            <p>Register</p>
            <form onSubmit={handleCreateRegister} className="registerInputs">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => [setName(e.target.value)]}
                required
              />

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => [setEmail(e.target.value)]}
                required
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => [setPassword(e.target.value)]}
                required
              />

              <input
                type="password"
                placeholder="Repeat your Password"
                value={repeatPassword}
                onChange={(e) => [setRepeatPassword(e.target.value)]}
                required
              />

              <input type="submit" value="REGISTER" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
