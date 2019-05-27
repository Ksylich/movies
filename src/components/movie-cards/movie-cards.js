import React, { Component, Fragment } from 'react';
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
    const { currentPage } = this.props;
    fetchMovies(currentPage);
  }

  // componentDidUpdate(prevProps){
  //   if(prevProps.movies!==this.props.movies){
  //     const { fetchMovies } = this.props;
  //     const { currentPage } = this.props;
  //     fetchMovies(currentPage);
  //   }
  // }

  render() {
    const { movies, loading, error } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return (
      <Fragment>
         <MovieCards movies={movies} />
      </Fragment>
      )
  }
}

MovieCardsContainer.propTypes = {
  fetchMovies: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.any,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ movies, loading, error,currentPage}) => ({
  movies,
  loading,
  error,
  currentPage
});

const mapDispathToProps = {
  fetchMovies,
};

export default connect(
  mapStateToProps,
  mapDispathToProps,
)(MovieCardsContainer);
