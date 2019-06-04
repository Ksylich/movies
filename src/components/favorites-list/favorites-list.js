import React, { Component } from "react";
import { connect } from "react-redux";

import "./favorites-list.css";

import FavoritesItem from "../favorites-item";
import { changeMovie, removeMovie } from "../../redux/actions";

const FavoritesList = ({
  favorites,
  onHandleRemoveMovie,
  onHandleChooseMovie
}) => {
  return (
    <div className="container-fav">
      <div className="label-fav">My favorite</div>
      {favorites.map(movie => {
        return (
          <FavoritesItem
            key={`favorite-item${movie.id}`}
            movie={movie}
            onHandleChooseMovie={() => onHandleChooseMovie(movie.id)}
            onHandleRemoveMovie={() => onHandleRemoveMovie(movie.id)}
          />
        );
      })}
    </div>
  );
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

const mapStateToProps = ({ favorites }) => ({
  favorites
});

const mapDispatchToProps = {
  changeMovie,
  removeMovie
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoritesListContainer);
