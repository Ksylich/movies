import { createReducer } from 'redux-act';

import {
  moviesErrorReducer,
  moviesLoadedReducer,
  moviesRequestedReducer,
  changeCurrentPageReducer,
  changeMovieReducer,
  changePagesCountReducer,
  addToFavoritesReducer,
  removeMovieReducer,
} from '../actions';

const initialState = {
  movies: [],
  loading: true,
  error: null,
  currentPage: 1,
  currentMovieId: 0,
  pagesCount: 0,
  favorites: [],
};

const reducer = createReducer(
  {
    [moviesRequestedReducer]: state => ({
      ...state,
      movies: [],
      loading: true,
      error: null,
    }),
    [moviesLoadedReducer]: (state, payload) => ({
      ...state,
      movies: payload,
      loading: false,
      error: null,
    }),
    [moviesErrorReducer]: (state, payload) => ({
      ...state,
      movies: [],
      loading: false,
      error: payload,
    }),
    [changeCurrentPageReducer]: (state, payload) => ({
      ...state,
      currentPage: payload,
    }),
    [changeMovieReducer]: (state, payload) => ({
      ...state,
      currentMovieId: payload,
    }),
    [changePagesCountReducer]: (state, payload) => ({
      ...state,
      pagesCount: payload,
    }),
    [addToFavoritesReducer]: (state, payload) => ({
      ...state,
      favorites: [...state.favorites, payload],
    }),
    [removeMovieReducer]: (state, payload) => {
      const movieIndex = state.favorites.findIndex(movie => movie.id === payload);
      return {
        ...state,
        favorites: [...state.favorites.slice(0, movieIndex),
          ...state.favorites.slice(movieIndex + 1)],
      };
    },
  },
  initialState,
);

export default reducer;
