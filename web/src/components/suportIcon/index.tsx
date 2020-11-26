import React from 'react';
import './styles/suportIcon.css';
import { FaUsers } from 'react-icons/fa';

export default function SuportIcon() {
  return (
    <div className="suportContainer">
      <div className="suportIcon">
        <FaUsers size={32} color={'#fff'} />
      </div>
    </div>
  );
}
