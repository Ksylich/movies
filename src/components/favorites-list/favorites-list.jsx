import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './favorites-list.css';

import FavoritesItem from '../favorites-item';
import MoviePropTypes from '../../prop-type-values/movie-prop-types';

class FavoritesList extends Component {
  renderFavoritesItem() {
    const {
      favorites,
      onHandleRemoveMovie,
      onHandleChooseMovie,
    } = this.props;
    return (
      favorites.map(movie => (
        <FavoritesItem
          key={`favorite-item${movie.id}`}
          movie={movie}
          onHandleChooseMovie={onHandleChooseMovie}
          onHandleRemoveMovie={onHandleRemoveMovie}
        />
      ))
    );
  }

  render() {
    return (
      <div className="container-fav">
        <div className="label-fav">My favorite</div>
        {this.renderFavoritesItem()}
      </div>
    );
  }
}

FavoritesList.propTypes = {
  favorites: PropTypes.arrayOf(MoviePropTypes).isRequired,
  onHandleChooseMovie: PropTypes.func.isRequired,
  onHandleRemoveMovie: PropTypes.func.isRequired,
};

export default FavoritesList;
