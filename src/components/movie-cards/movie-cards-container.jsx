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
    fetchMovies: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object,
    movies: PropTypes.arrayOf(MoviePropTypes).isRequired,
    currentPage: PropTypes.number.isRequired,
    changeMovie: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { fetchMovies, currentPage } = this.props;
    fetchMovies(currentPage);
  }

  render() {
    const {
      movies, loading, error, changeMovie,
    } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <MovieCards movies={movies} onHandleChooseMovie={changeMovie} />;
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
  fetchMovies,
  changeMovie,
};

export default connect(
  mapStateToProps,
  mapDispathToProps,
)(MovieCardsContainer);
