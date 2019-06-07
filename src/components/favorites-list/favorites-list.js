import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './favorites-list.css';

import FavoritesItem from '../favorites-item';
import { changeMovie, removeMovie } from '../../redux/actions';
import MoviePropTypes from '../../prop-type-values/movie-prop-types';

const FavoritesList = ({
  favorites,
  onHandleRemoveMovie,
  onHandleChooseMovie,
}) => (
  <div className="container-fav">
    <div className="label-fav">My favorite</div>
    {favorites.map(movie => (
      <FavoritesItem
        key={`favorite-item${movie.id}`}
        movie={movie}
        onHandleChooseMovie={() => onHandleChooseMovie(movie.id)}
        onHandleRemoveMovie={() => onHandleRemoveMovie(movie.id)}
      />
    ))}
  </div>
);

FavoritesList.propTypes = {
  favorites: PropTypes.arrayOf(MoviePropTypes).isRequired,
  onHandleChooseMovie: PropTypes.func.isRequired,
  onHandleRemoveMovie: PropTypes.func.isRequired,
};


class FavoritesListContainer extends Component {
  removeMovie = (id) => {
    const { favorites, removeMovie } = this.props;
    removeMovie(favorites.findIndex(movie => movie.id === id));
  }

  render() {
    const { favorites, changeMovie } = this.props;
    return (
      <FavoritesList
        favorites={favorites}
        onHandleChooseMovie={changeMovie}
        onHandleRemoveMovie={this.removeMovie}
      />
    );
  }
}

FavoritesListContainer.propTypes = {
  favorites: PropTypes.arrayOf(MoviePropTypes).isRequired,
  changeMovie: PropTypes.func.isRequired,
  removeMovie: PropTypes.func.isRequired,
};

const mapStateToProps = ({ favorites }) => ({
  favorites,
});

const mapDispatchToProps = {
  changeMovie,
  removeMovie,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FavoritesListContainer);
