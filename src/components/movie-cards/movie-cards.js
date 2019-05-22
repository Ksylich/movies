import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MovieCardItem from '../movie-card-item';
import ErrorIndicator from '../error-indicator';
import { fetchMovies } from '../../actions';
import Spinner from '../spinner';

import './movie-cards.css';

const MovieCards = ({ movies }) => (
  <div className="body">
    {movies.map(movie => (
      <MovieCardItem
        key={movie.id}
        movie={movie}
        idx={movies.findIndex(m => m.id === movie.id)}
      />
    ))}
  </div>
);

MovieCards.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

class MovieCardsContainer extends Component {
  state = {
    currentPage: 2,
  };

  componentDidMount() {
    const { fetchMovies } = this.props;
    const { currentPage } = this.state;
    fetchMovies(currentPage);
  }

  render() {
    const { movies, loading, error } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <MovieCards movies={movies} />;
  }
}

MovieCardsContainer.propTypes = {
  fetchMovies: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.any.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ movies, loading, error }) => ({
  movies,
  loading,
  error,
});

const mapDispathToProps = {
  fetchMovies,
};

export default connect(
  mapStateToProps,
  mapDispathToProps,
)(MovieCardsContainer);
