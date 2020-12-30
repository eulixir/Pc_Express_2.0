import React from 'react';
import './styles/helpToAssembly.css';
import { BsController } from 'react-icons/bs';
import { RiHome2Line } from 'react-icons/ri';
import { BsGear } from 'react-icons/bs';
export default function HelpToAssembly() {
  return (
    <div className="helpToAssemblyContainer">
      <div className="helpToAssemblyText">
        <span>
          <p>Looking for help with assembling your computer?</p>
        </span>
      </div>
      <div className="helpToAssemblyIconsContainer">
        <BsController
          id="assemblyIconsContainer"
          size="40"
          color={'rgb(76, 233, 29)'}
        />

        <span>/</span>
        <RiHome2Line
          id="assemblyIconsContainer"
          size="40"
          color={'rgb(230, 233, 29)'}
        />
        <span>/</span>
        <BsGear
          id="assemblyIconsContainer"
          size="40"
          color={'rgb(233, 29, 223)'}
        />
      </div>
    </div>
  );
}
