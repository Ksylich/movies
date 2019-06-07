import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withLastLocation } from 'react-router-last-location';
import PropTypes from 'prop-types';

import MovieDetails from '../movie-details';
import { changeMovie } from '../../redux/actions';
import MoviePropTypes from '../../prop-type-values/movie-prop-types';

class MovieDetailsContainer extends Component {
  onNextClick(movies) {
    const { changeMovie, currentMovieId } = this.props;

    const next = movies.findIndex(movie => movie.id === currentMovieId) + 1;

    changeMovie(next >= movies.length ? movies[0].id : movies[next].id);
  }

  render() {
    const {
      movies, favorites, currentMovieId, lastLocation,
    } = this.props;
    const mvs = lastLocation.pathname === '/' ? movies : favorites;
    const movie = mvs.find(m => m.id === currentMovieId);
    const isFavorite = !favorites.find(mov => mov.id === movie.id);

    return (
      <MovieDetails
        movie={movie}
        isFavorite={isFavorite}
        onHandleNext={this.onNextClick.bind(this, mvs)}
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
