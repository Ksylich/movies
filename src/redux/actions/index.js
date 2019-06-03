import { createAction } from "redux-act";
import MovieService from "../../services/movie-service";

const movies = new MovieService();

const moviesRequested = createAction("fetch_movie_request");
const moviesLoaded = createAction("fetch_movie_success");
const moviesError = createAction("fetch_movie_failure");
const changeCurrentPage = createAction("changeCurrentPage");
const changeMovie = createAction("changeChosenMovie");
const changePagesCount = createAction("change_pages_count");
const addToFavorites = createAction("addMovieToFavorites");

const fetchMovies = (page = 1) => async dispatch => {
  try {
    dispatch(moviesRequested());
    const data = await movies.getOneMoviePage(page);
    dispatch(moviesLoaded(data.movies));
    dispatch(changeCurrentPage(page));
    dispatch(changePagesCount(data.pages_count));
  } catch (e) {
    dispatch(moviesError(e));
  }
};

export {
  fetchMovies,
  moviesRequested,
  moviesError,
  moviesLoaded,
  changeCurrentPage,
  changeMovie,
  changePagesCount,
  addToFavorites,
};
