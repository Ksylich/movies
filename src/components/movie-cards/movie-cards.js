import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MovieCardItem from '../movie-card-item';
import ErrorIndicator from '../error-indicator';
import { fetchMovies, changeMovie } from '../../redux/actions';
import Spinner from '../spinner';
import MoviePropTypes from '../../prop-type-values/movie-prop-types';

import './movie-cards.css';

const MovieCards = ({ movies, onHandleChooseMovie }) => (
  <div className="body">
    {movies.map(movie => (
      <MovieCardItem
        key={movie.id}
        movie={movie}
        idx={movies.findIndex(m => m.id === movie.id)}
        onHandleChooseMovie={() => onHandleChooseMovie(movie.id)}
      />
    ))}
  </div>
);

MovieCards.propTypes = {
  movies: PropTypes.arrayOf(MoviePropTypes).isRequired,
  onHandleChooseMovie: PropTypes.func.isRequired,
};

class MovieCardsContainer extends Component {
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

MovieCardsContainer.defaultProps = {
  error: {},
};

MovieCardsContainer.propTypes = {
  fetchMovies: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  movies: PropTypes.arrayOf(MoviePropTypes).isRequired,
  currentPage: PropTypes.number.isRequired,
  changeMovie: PropTypes.func.isRequired,
};

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
