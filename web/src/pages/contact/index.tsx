import React from 'react';
import Navbar from '../../components/navbar';

import './styles/contact.css';

export default function Contact() {
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
              <form className="registerInputs">
                <p>Contact us</p>
                <input
                  required
                  type="text"
                  id="contactInput"
                  placeholder="Name"
                />
                <input
                  required
                  type="email"
                  id="contactInput"
                  placeholder="Subject"
                />
                <input
                  required
                  type="email"
                  id="contactInput"
                  placeholder="Email"
                />
                <input
                  required
                  type="text"
                  id="contactInput"
                  placeholder="Phone"
                />
                <input
                  required
                  type="text"
                  id="contactInput"
                  placeholder="Local"
                />
                <textarea required placeholder="Content" id="contactInput" />
                <input type="submit" value="SUBMIT" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
