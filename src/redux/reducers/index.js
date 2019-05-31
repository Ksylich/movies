import { createReducer } from "redux-act";

import {
  moviesError,
  moviesLoaded,
  moviesRequested,
  changeCurrentPage,
  changeMovie,
} from "../actions";

const initialState = {
  movies: [],
  loading: true,
  error: null,
  currentPage: 1,
  currentMovieId: 299534
};

const reducer = createReducer(
  {
    [moviesRequested]: state => ({
      ...state,
      movies: [],
      loading: true,
      error: null
    }),
    [moviesLoaded]: (state, payload) => ({
      ...state,
      movies: payload,
      loading: false,
      error: null
    }),
    [moviesError]: (state, payload) => ({
      ...state,
      movies: [],
      loading: false,
      error: payload
    }),
    [changeCurrentPage]: (state, payload) => ({
      ...state,
      currentPage: payload
    }),
    [changeMovie]: (state, payload) => ({
      ...state,
      currentMovieId: payload
    })
  },
  initialState
);

export default reducer;
