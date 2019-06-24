import React, { Component } from 'react';
import { withLastLocation } from 'react-router-last-location';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

import MovieDetails from '../movie-details';
import { MOVIES_STORE } from '../../mobx/stores/movies';
import MovieStorePropTypes from '../../mobx/stores/movies';

@inject(MOVIES_STORE)
@observer
class MovieDetailsContainer extends Component {

  static propTypes = {
    MOVIES_STORE: PropTypes.shape({
      MovieStorePropTypes,
    }),
    lastLocation: PropTypes.shape({}).isRequired,
  };

  onNextClick = () => {
    const { [MOVIES_STORE]: { changeMovie, currentMovieId } } = this.props;
    const movies = this.returnArr();

    const next = movies.findIndex(movie => movie.id === currentMovieId) + 1;

    changeMovie(next >= movies.length ? movies[0].id : movies[next].id);
  }

  returnArr() {
    const { [MOVIES_STORE]: { movies, favorites }, lastLocation } = this.props;
    return lastLocation.pathname === '/' ? movies : favorites;
  }

  findCurrentMovie(movies) {
    const { [MOVIES_STORE]: { currentMovieId } } = this.props;
    return movies.find(m => m.id === currentMovieId);
  }

  checkIsFavorite(movie) {
    const { [MOVIES_STORE]: { favorites } } = this.props;
    return !favorites.find(mov => mov.id === movie.id);
  }

  render() {
    const mvs = this.returnArr();
    const movie = this.findCurrentMovie(mvs);
    const isFavorite = this.checkIsFavorite(movie);

    return (
      <MovieDetails
        movie={movie}
        isFavorite={isFavorite}
        onHandleNext={this.onNextClick}
        movies={mvs}
      />
    );
  }
}


export default withLastLocation(MovieDetailsContainer);
