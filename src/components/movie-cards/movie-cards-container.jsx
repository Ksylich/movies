import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import PropTypes from 'prop-types';

import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';
import MovieCards from './movie-cards';
import { MOVIES_STORE } from '../../mobx/stores/movies';
import MovieStorePropTypes from '../../mobx/stores/movies';


@inject(MOVIES_STORE)
@observer
class MovieCardsContainer extends Component {
  static propTypes = {
    MOVIES_STORE: PropTypes.shape({
      MovieStorePropTypes,
    }),
  };

  componentDidMount() {
    const { [MOVIES_STORE]: { fetchMovies } } = this.props;
    fetchMovies();
  }

  render() {
    const { [MOVIES_STORE]: moviesStore } = this.props;
    const {
      movies, loading, error, changeMovie,
    } = moviesStore;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <MovieCards movies={movies} onHandleChooseMovie={changeMovie} />;
  }
}


export default MovieCardsContainer;
