import React from 'react';
import PropTypes from 'prop-types';

import './movie-details-desktop.css';

import NoPoster from '../../assets/icons/NoPoster.jpg';
import MoviePropTypes from '../../prop-type-values/movie-prop-types';


const DecktopMovieInformation = ({ movie, addToFavorites, btnStyle }) => {
  const poster = movie.posterPath || NoPoster;

  return (
    <div className="container">
      <div className="desk">
        <div className="image">
          <img src={poster} alt="Smiley face" />
        </div>
        <div className="info">
          <div className="row top">
            <button onClick={addToFavorites} type="button" className={`btn btn-default ${btnStyle}`}>
              Add to favorite
            </button>
          </div>
          <div className="movie-title">{`${movie.title}`}</div>
          <div className="about">
            <div className="score">{`Score: ${movie.score}`}</div>
            <div className="language">{`Language:  ${movie.language}`}</div>
            <div className="realise-date">
              {`Realise-Date: ${movie.realiseDate}`}
            </div>
          </div>
          <div className="overview">{`${movie.overview}`}</div>
        </div>
      </div>
    </div>
  );
};

DecktopMovieInformation.propTypes = {
  movie: MoviePropTypes.isRequired,
  addToFavorites: PropTypes.func.isRequired,
  btnStyle: PropTypes.string.isRequired,
};

export default DecktopMovieInformation;
