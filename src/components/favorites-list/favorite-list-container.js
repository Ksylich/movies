import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { changeMovie, removeMovie } from '../../redux/actions';
import MoviePropTypes from '../../prop-type-values/movie-prop-types';
import FavoritesList from './favorites-list';

class FavoritesListContainer extends Component {
  removeMovie = (id) => {
    const { removeMovie } = this.props;
    removeMovie(id);
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
