import React from 'react';
import './styles/helpToAssembly.css';
import { BsController } from 'react-icons/bs';
import { RiHome2Line } from 'react-icons/ri';
import { BsGear } from 'react-icons/bs';
export default function HelpToAssembly() {
  return (
    <div className="helpToAssemblyContainer">
      <div className="iconsAssemblyContainer">
        <BsController size="40" color={'rgb(76, 233, 29)'} />
        <span id="BsController">Build your gamer monster</span>
      </div>

      <span>/</span>

      <div className="iconsAssemblyContainer">
        <RiHome2Line size="40" color={'rgb(230, 233, 29)'} />
        <span id="RiHome2Line">Build your home pc</span>
      </div>

      <span>/</span>

      <div className="iconsAssemblyContainer">
        <BsGear size="40" color={'rgb(233, 29, 223)'} />
        <span id="BsGear">Build your work center</span>
      </div>
    </div>
  );
}
