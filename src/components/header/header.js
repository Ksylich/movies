import React from 'react';

import './header.css';
import logo from '../../assets/icons/star.png';
import down from '../../assets/icons/arrow.png';

const Header = () => {

  return (

    <div className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
      <div className="container">
        <div className="navbar-brand" >
          <img src={logo} alt="Smiley face" height={45} width={45}></img>
          <label>Movies</label>
        </div>
        <div className="navbar-brand" />

        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
            <button type="button"
                className="btn btn-outline-secondary">My Account   <img src={down} alt="Smiley face" height={15} width={15} ></img></button>
            </li>
            <li className="nav-item active" />
          </ul>
        </div>
      </div>
    </div>

  );
}

export default Header;















