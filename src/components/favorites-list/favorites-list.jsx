import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import './favorites-list.css';

import FavoritesItem from '../favorites-item';
import MoviePropTypes from '../../prop-type-values/movie-prop-types';

const FavoritesList = ({
  favorites,
  onHandleRemoveMovie,
  onHandleChooseMovie,
}) => {
  const renderMovie = useCallback(
    movie => (
      <FavoritesItem
        key={`favorite-item${movie.id}`}
        movie={movie}
        onHandleChooseMovie={onHandleChooseMovie}
        onHandleRemoveMovie={onHandleRemoveMovie}
      />
    ),
    [favorites],
  );
  return (
    <div className="container-fav">
      <div className="label-fav">My favorite</div>
      {favorites.map(renderMovie)}
    </div>
  );
};


FavoritesList.propTypes = {
  favorites: PropTypes.arrayOf(MoviePropTypes).isRequired,
  onHandleChooseMovie: PropTypes.func.isRequired,
  onHandleRemoveMovie: PropTypes.func.isRequired,
};

export default FavoritesList;
