import React from 'react';
import './styles/topIcon.css';
import { MdKeyboardArrowUp } from 'react-icons/md';

export default function topIcon() {
  return (
    <div className="topContainer">
      <div className="topIcon">
        <MdKeyboardArrowUp size={40} />
      </div>
    </div>
  );
}
