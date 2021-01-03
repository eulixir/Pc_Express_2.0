import React from 'react';
import Navbar from '../../components/navbar';

import './styles/contact.css';

export default function Contact() {
  return (
    <div className="contactContainer">
      <div className="contactSmooth">
        <Navbar />
        <div className="contactFormContainer">
          <div className="contactFormContainerOne">ds</div>
          <div className="contactFormContainerTwo">
            <div className="contactInputsContainer">
              <span>Send your message here</span>
              <div className="contactInput">
                <input required type="text" placeholder="Nome" />
                <input required type="email" placeholder="Subject" />
                <input required type="email" placeholder="Email" />
                <input required type="text" placeholder="Phone" />
                <input required type="text" placeholder="Local" />
                <textarea required placeholder="Content" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
