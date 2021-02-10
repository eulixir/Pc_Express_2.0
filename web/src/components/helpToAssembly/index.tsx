import React from 'react';
import './styles/helpToAssembly.css';
import { BsController } from 'react-icons/bs';
import { RiHome2Line } from 'react-icons/ri';
import { BsGear } from 'react-icons/bs';
export default function HelpToAssembly() {
  return (
    <div className="helpToAssemblyContainer">
      <div className="iconsAssemblyContainer BsController">
        <BsController size="40" color={' rgb(54, 179, 16)'} />
        <span>Build your gamer monster</span>
      </div>
      <div className="iconsAssemblyContainer RiHome2Line">
        <RiHome2Line size="40" color={'rgb(230, 233, 29)'} />
        <span>Build home pc</span>
      </div>

      <div className="iconsAssemblyContainer BsGear">
        <BsGear size="40" color={'rgb(233, 29, 223)'} />
        <span>Build your work center</span>
      </div>
    </div>
  );
}
