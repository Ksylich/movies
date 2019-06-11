import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withLastLocation } from 'react-router-last-location';
import PropTypes from 'prop-types';

import MovieDetails from '../movie-details';
import { changeMovie } from '../../redux/actions';
import MoviePropTypes from '../../prop-type-values/movie-prop-types';

class MovieDetailsContainer extends Component {
  onNextClick = () => {
    const { changeMovie, currentMovieId } = this.props;
    const movies = this.returnArr();

    const next = movies.findIndex(movie => movie.id === currentMovieId) + 1;

    changeMovie(next >= movies.length ? movies[0].id : movies[next].id);
  }

  returnArr() {
    const { movies, favorites, lastLocation } = this.props;
    return lastLocation.pathname === '/' ? movies : favorites;
  }

  findCurrentMovie(movies) {
    const { currentMovieId } = this.props;
    return movies.find(m => m.id === currentMovieId);
  }

  checkIsFavorite(movie) {
    const { favorites } = this.props;
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

MovieDetailsContainer.propTypes = {
  changeMovie: PropTypes.func.isRequired,
  currentMovieId: PropTypes.number.isRequired,
  lastLocation: PropTypes.object.isRequired,
  movies: PropTypes.arrayOf(MoviePropTypes).isRequired,
  favorites: PropTypes.arrayOf(MoviePropTypes).isRequired,
};


const mapStateToProps = ({ movies, favorites, currentMovieId }) => ({
  movies,
  favorites,
  currentMovieId,
});

const mapDispatchToProps = {
  changeMovie,
};

export default withLastLocation(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(MovieDetailsContainer),
);
