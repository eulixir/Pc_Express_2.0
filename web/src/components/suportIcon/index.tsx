import React from 'react';
import './styles/goTop.css';
import { FaUsers } from 'react-icons/fa';

export default function GoTopIcon() {
  return (
    <div className="goTopContainer">
      <div className="goTopIcon">
        <FaUsers size={32} />
      </div>
    </div>
  );
}
