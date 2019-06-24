import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './movie-details.css';

import { DecktopNav, DecktopMovieInformation } from '../movie-details-desktop';
import { MobNav, MobMovieInformation } from '../movie-details-mb';
import MovieStorePropTypes from '../../mobx/stores/movies';
import NoPoster from '../../assets/icons/NoPoster.jpg';
import { MOVIES_STORE } from '../../mobx/stores/movies';
import MoviePropTypes from '../../prop-type-values';

@inject(MOVIES_STORE)
@observer
class MovieDetails extends Component {
  static propTypes = {
    MOVIES_STORE: PropTypes.shape({
      MovieStorePropTypes,
    }),
    isFavorite: PropTypes.bool.isRequired,
    onHandleNext: PropTypes.func.isRequired,
    history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
    movie: MoviePropTypes.isRequired,
  };

  addToFavorites = () => {
    const { [MOVIES_STORE]: { addToFavorites }, movie } = this.props;
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

export default withRouter(MovieDetails);
