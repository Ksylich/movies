import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { changeMovie, removeMovie } from '../../redux/actions';
import MoviePropTypes from '../../prop-type-values/movie-prop-types';
import FavoritesList from './favorites-list';

class FavoritesListContainer extends Component {
  static propTypes = {
    favorites: PropTypes.arrayOf(MoviePropTypes).isRequired,
    changeMovieAction: PropTypes.func.isRequired,
    removeMovieAction: PropTypes.func.isRequired,
  };

  onHandleRemoveMovie = (id) => {
    const { removeMovieAction } = this.props;
    removeMovieAction(id);
  }

  render() {
    const { favorites, changeMovieAction } = this.props;
    return (
      <FavoritesList
        favorites={favorites}
        onHandleChooseMovie={changeMovieAction}
        onHandleRemoveMovie={this.onHandleRemoveMovie}
      />
    );
  }
}

const mapStateToProps = ({ favorites }) => ({
  favorites,
});

const mapDispatchToProps = {
  changeMovieAction: changeMovie,
  removeMovieAction: removeMovie,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FavoritesListContainer);
