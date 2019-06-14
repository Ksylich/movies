import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ErrorIndicator from '../error-indicator';
import { fetchMovies, changeMovie } from '../../redux/actions';
import Spinner from '../spinner';
import MoviePropTypes from '../../prop-type-values/movie-prop-types';
import MovieCards from './movie-cards';

class MovieCardsContainer extends Component {
  static defaultProps = {
    error: {},
  };

  static propTypes = {
    fetchMoviesAction: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.shape,
    movies: PropTypes.arrayOf(MoviePropTypes).isRequired,
    currentPage: PropTypes.number.isRequired,
    changeMovieAction: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { fetchMoviesAction, currentPage } = this.props;
    fetchMoviesAction(currentPage);
  }

  render() {
    const {
      movies, loading, error, changeMovieAction,
    } = this.props;

    console.log('error', error);

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <MovieCards movies={movies} onHandleChooseMovie={changeMovieAction} />;
  }
}

const mapStateToProps = ({
  movies, loading, error, currentPage,
}) => ({
  movies,
  loading,
  error,
  currentPage,
});

const mapDispathToProps = {
  fetchMoviesAction: fetchMovies,
  changeMovieAction: changeMovie,
};

export default connect(
  mapStateToProps,
  mapDispathToProps,
)(MovieCardsContainer);
