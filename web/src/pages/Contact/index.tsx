import React, { useState, FormEvent } from 'react';
import Navbar from '../../components/navbar';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

import './styles/contact.css';

export default function Contact() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [phone, setPhone] = useState('');
  const [content, setContent] = useState('');

  function handleSendContent(e: FormEvent) {
    e.preventDefault();
    if (name) {
      api
        .post('/contact', {
          name,
          subject,
          email,
          phone,

          content,
        })

        .then(() => {
          alert('Form send');
          history.push('/');
        })
        .catch(() => {
          alert('Sending error, try later');
        });
    } else {
      alert('test');
    }
  }

  return (
    <div className="contactContainer">
      <div className="contactSmooth">
        <Navbar />
        <div className="contactFormContainer">
          <div className="contactFormContainerOne">
            <p>Send your message here</p>
          </div>
          <div className="contactFormContainerTwo">
            <div className="contactInputFormContainer">
              <form onSubmit={handleSendContent} className="registerInputs">
                <p>Contact us</p>
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => [setName(e.target.value)]}
                  id="contactInput"
                  placeholder="Name"
                />
                <input
                  required
                  type="text"
                  value={subject}
                  onChange={(e) => [setSubject(e.target.value)]}
                  id="contactInput"
                  placeholder="Subject"
                />
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => [setEmail(e.target.value)]}
                  id="contactInput"
                  placeholder="Email"
                />
                <input
                  required
                  type="text"
                  value={phone}
                  onChange={(e) => [setPhone(e.target.value)]}
                  id="contactInput"
                  placeholder="Phone"
                />
                <textarea
                  required
                  placeholder="Content"
                  value={content}
                  onChange={(e) => [setContent(e.target.value)]}
                  id="contactInput"
                />
                <input type="submit" value="SUBMIT" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
