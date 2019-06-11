import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import MovieCardItem from '../movie-card-item';
import MoviePropTypes from '../../prop-type-values/movie-prop-types';

import './movie-cards.css';

const MovieCards = ({ movies, onHandleChooseMovie }) => {
  const renderMovie = useCallback(
    movie => (
      <MovieCardItem
        key={movie.id}
        movie={movie}
        idx={movies.findIndex(m => m.id === movie.id)}
        onHandleChooseMovie={onHandleChooseMovie}
      />
    ),
    [movies],
  );

  return (
    <div className="body">
      {movies.map(renderMovie)}
    </div>
  );
};

MovieCards.propTypes = {
  movies: PropTypes.arrayOf(MoviePropTypes).isRequired,
  onHandleChooseMovie: PropTypes.func.isRequired,
};

export default MovieCards;
