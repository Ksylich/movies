import { createAction } from 'redux-act';

const fetchMovies = createAction('fetch_movies_saga');
const moviesRequested = createAction('fetch_movie_request_saga');
const moviesLoaded = createAction('fetch_movie_success_saga');
const changeCurrentPage = createAction('changeCurrentPage_saga');
const changePagesCount = createAction('change_pages_count_saga');
const moviesError = createAction('fetch_movie_failure_saga');
const changeMovie = createAction('changeChosenMovie_saga');
const addToFavorites = createAction('add_movie_to_favorites_saga');
const removeMovie = createAction('remove_movie_from_favorites_saga');


const moviesLoadedReducer = createAction('fetch_movie_success_reducer');
const moviesRequestedReducer = createAction('fetch_movie_request_reducer');
const changeCurrentPageReducer = createAction('changeCurrentPage_reducer');
const changePagesCountReducer = createAction('change_pages_count_reducer');
const moviesErrorReducer = createAction('fetch_movie_failure_reducer');
const changeMovieReducer = createAction('changeChosenMovie_reducer');
const addToFavoritesReducer = createAction('add_movie_to_favorites_reducer');
const removeMovieReducer = createAction('remove_movie_from_favorites_reducer');

export {
  fetchMovies,
  moviesRequested,
  moviesError,
  moviesLoaded,
  changeCurrentPage,
  changeMovie,
  changePagesCount,
  addToFavorites,
  removeMovie,
  moviesRequestedReducer,
  moviesLoadedReducer,
  changeCurrentPageReducer,
  changePagesCountReducer,
  moviesErrorReducer,
  changeMovieReducer,
  addToFavoritesReducer,
  removeMovieReducer,
};
