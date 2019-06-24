import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';


import FavoritesList from './favorites-list';
import { MOVIES_STORE } from '../../mobx/stores/movies';
import MovieStorePropTypes from '../../mobx/stores/movies';


@inject(MOVIES_STORE)
@observer
class FavoritesListContainer extends Component {
  static propTypes = {
    MOVIES_STORE: PropTypes.shape({
      MovieStorePropTypes,
    }),
  };

  onHandleRemoveMovie = (id) => {
    const { [MOVIES_STORE]: { removeMovie } } = this.props;
    removeMovie(id);
  }

  render() {
    const { [MOVIES_STORE]: { favorites, changeMovie } } = this.props;
    return (
      <FavoritesList
        favorites={favorites}
        onHandleChooseMovie={changeMovie}
        onHandleRemoveMovie={this.onHandleRemoveMovie}
      />
    );
  }
}


export default FavoritesListContainer;
