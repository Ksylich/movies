import React from 'react';
import PropTypes from 'prop-types';

import './movie-details-desktop.css';

import left from '../../assets/icons/left-round-16.png';
import right from '../../assets/icons/right-round-16.png';

const DecktopNav = ({ onHandleBack, onHandleNext }) => (
  <div className="container">
    <div className="nav-bar">
      <div className="left" onClick={onHandleBack} role="presentation">
        <div>
          <img src={left} alt="Smiley face" height={17} width={17} />
        </div>
        <div className="text">Back to list</div>
      </div>
      <div className="right">
        <div>
          <div className="text">Next movie</div>
        </div>
        <div onClick={onHandleNext} role="presentation">
          <img src={right} alt="Smiley face" height={17} width={17} />
        </div>
      </div>
    </div>
  </div>
);

DecktopNav.propTypes = {
  onHandleBack: PropTypes.func.isRequired,
  onHandleNext: PropTypes.func.isRequired,
};

export default DecktopNav;
