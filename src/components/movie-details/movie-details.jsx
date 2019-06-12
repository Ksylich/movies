import React, { Component, useCallback } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './movie-details.css';

import { DecktopNav, DecktopMovieInformation } from '../movie-details-desktop';
import { MobNav, MobMovieInformation } from '../movie-details-mb';
import { addToFavorites } from '../../redux/actions';
import MoviePropTypes from '../../prop-type-values/movie-prop-types';
import NoPoster from '../../assets/icons/NoPoster.jpg';


class MovieDetails extends Component {
    static propTypes = {
      movie: MoviePropTypes.isRequired,
      isFavorite: PropTypes.bool.isRequired,
      onHandleNext: PropTypes.func.isRequired,
      addToFavorites: PropTypes.func.isRequired,
      history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
    };

  addToFavorites = () => {
    const { movie, addToFavorites } = this.props;
    addToFavorites(movie);
  };

  render() {
    const {
      movie, history, isFavorite, onHandleNext,
    } = this.props;
    const style = classNames({ hidden: !isFavorite });
    const poster = movie.posterPath || NoPoster;
    const sectionStyle = {
      backgroundImage: `url(${poster})`,
    };

    return (
      <div className="wrapper">
        <div className="section" style={sectionStyle} />
        <div className="content">
          <MobNav onHandleBack={history.goBack} onHandleNext={onHandleNext} />
          <MobMovieInformation
            movie={movie}
            btnStyle={style}
            addToFavorites={this.addToFavorites}
          />
          <DecktopNav onHandleBack={history.goBack} onHandleNext={onHandleNext} />
          <DecktopMovieInformation
            movie={movie}
            btnStyle={style}
            addToFavorites={this.addToFavorites}
          />
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = {
  addToFavorites,
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps,
  )(MovieDetails),
);
