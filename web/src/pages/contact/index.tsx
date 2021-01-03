import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import './styles/contact.css';

export default function Contact() {
  return (
    <div className="contactContainer">
      <div className="contactSmooth">
        <Navbar />
        <div className="contactFormContainer"></div>
        <Footer />
      </div>
    </div>
  );
}
