import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import './movie-details.css';

import { DecktopNav, DecktopMovieInformation } from '../movie-details-desktop';
import { MobNav, MobMovieInformation } from '../movie-details-mb';
import { addToFavorites } from '../../redux/actions';
import MoviePropTypes from '../../prop-type-values/movie-prop-types';
import NoPoster from '../../assets/icons/NoPoster.jpg';

const classNames = require('classnames');

const MovieDetails = ({
  addToFavorites,
  movie,
  history,
  isFavorite,
  onHandleNext,
}) => {
  const style = classNames({ ' ': isFavorite, ' hidden': !isFavorite });
  const sectionStyle = {
    backgroundImage: !movie.posterPath.includes('null') ? `url(${movie.posterPath})` : `url(${NoPoster})`,
  };
  return (
    <div className="wrapper">
      <div className="section" style={sectionStyle} />
      <div className="content">
        <MobNav onHandleBack={history.goBack} onHandleNext={onHandleNext} />
        <MobMovieInformation
          movie={movie}
          btnStyle={style}
          addToFavorites={() => addToFavorites(movie)}
        />
        <DecktopNav onHandleBack={history.goBack} onHandleNext={onHandleNext} />
        <DecktopMovieInformation
          movie={movie}
          btnStyle={style}
          addToFavorites={() => addToFavorites(movie)}
        />
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  movie: MoviePropTypes.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onHandleNext: PropTypes.func.isRequired,
  addToFavorites: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

const mapDispatchToProps = {
  addToFavorites,
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps,
  )(MovieDetails),
);
