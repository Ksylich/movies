import React from 'react';
import PropTypes from 'prop-types';

import leftArrow from '../../assets/icons/left-arrow.png';
import rightArrow from '../../assets/icons/right-arrow.png';
import star from '../../assets/icons/US_Army_Star.png';
import NoPoster from '../../assets/icons/NoPoster.jpg';
import MoviePropTypes from '../../prop-type-values/movie-prop-types';

import './movie-details-mb.css';

const MobNav = ({ onHandleBack, onHandleNext }) => (
  <div className="nav-bar-m">
    <div className="left-m">
      <div>
        <img src={leftArrow} alt="Smiley face" height={40} width={40} />
      </div>
      <div onClick={onHandleBack} role="presentation" className="text">Back</div>
    </div>
    <div className="right-m">
      <div>
        <div onClick={onHandleNext} role="presentation" className="text">Next</div>
      </div>
      <div>
        <img src={rightArrow} alt="Smiley face" height={40} width={40} />
      </div>
    </div>
  </div>
);

MobNav.propTypes = {
  onHandleBack: PropTypes.func.isRequired,
  onHandleNext: PropTypes.func.isRequired,
};

const MobMovieInformation = ({ movie, addToFavorites, btnStyle }) => {
  const poster = !movie.posterPath.includes('null') ? movie.posterPath : NoPoster;
  return (
    <div className="desk-m">
      <div className="deck-top">
        <div className="image">
          <img src={poster} alt="Smiley face" />
        </div>
        <div className="info-mob">
          <div className="info-top">
            <div className="score-mob">
              <div className="txt">Score:</div>
              <div className="txt-data">{movie.score}</div>
            </div>
            <div onClick={addToFavorites} role="presentation" className={`icon${btnStyle}`}>
              <img src={star} alt="Smiley face" height={150} width={150} />
            </div>
          </div>
          <div className="score-mob">
            <div className="txt">Language:</div>
            <div className="txt-data">{movie.language}</div>
          </div>
          <div className="score-mob">
            <div className="txt">Realise-Date:</div>
            <div className="txt-data">{movie.realiseDate}</div>
          </div>
        </div>
      </div>
      <div className="desk-bottom">
        <div className="mob-movie-title">{`${movie.title}`}</div>
        <div className="mob-overview">{`${movie.overview}`}</div>
      </div>
    </div>
  );
};

MobMovieInformation.propTypes = {
  movie: MoviePropTypes.isRequired,
  addToFavorites: PropTypes.func.isRequired,
  btnStyle: PropTypes.string.isRequired,
};

export { MobNav, MobMovieInformation };
