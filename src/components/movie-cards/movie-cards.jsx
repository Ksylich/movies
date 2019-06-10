import React from 'react';
import PropTypes from 'prop-types';

import MovieCardItem from '../movie-card-item';
import MoviePropTypes from '../../prop-type-values/movie-prop-types';

import './movie-cards.css';

const MovieCards = ({ movies, onHandleChooseMovie }) => (
  <div className="body">
    {movies.map(movie => (
      <MovieCardItem
        key={movie.id}
        movie={movie}
        idx={movies.findIndex(m => m.id === movie.id)}
        onHandleChooseMovie={onHandleChooseMovie}
      />
    ))}
  </div>
);

MovieCards.propTypes = {
  movies: PropTypes.arrayOf(MoviePropTypes).isRequired,
  onHandleChooseMovie: PropTypes.func.isRequired,
};

export default MovieCards;
