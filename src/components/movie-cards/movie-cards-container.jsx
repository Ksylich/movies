import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import PropTypes from 'prop-types';

import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';
import MoviePropTypes from '../../prop-type-values/movie-prop-types';
import MovieCards from './movie-cards';
import { MOVIES_STORE } from '../../mobx/stores/movies';

@inject(MOVIES_STORE)
@observer
class MovieCardsContainer extends Component {
  static defaultProps = {
    error: {},
  };

  static propTypes = {
    fetchMoviesAction: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.shape({}),
    movies: PropTypes.arrayOf(MoviePropTypes).isRequired,
    currentPage: PropTypes.number.isRequired,
    changeMovieAction: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { [MOVIES_STORE]: { fetchMovies } } = this.props;
    fetchMovies();
  }

  render() {
    const { [MOVIES_STORE]: moviesStore } = this.props;
    const {
      movies, loading, error,
    } = moviesStore;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <MovieCards movies={movies} onHandleChooseMovie={() => {}} />;
  }
}


export default MovieCardsContainer;
