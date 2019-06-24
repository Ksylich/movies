import { observable, action } from 'mobx';
import PropTypes from 'prop-types';

import MovieServise from '../../services/movie-service';
import MoviePropTypes from '../../prop-type-values';

export const MOVIES_STORE = 'MOVIES_STORE';
const movies = new MovieServise();

class MoviesStore {
    @observable movies = [];
    @observable loading = true;
    @observable error = null;
    @observable currentPage = 1;
    @observable currentMovieId = 0;
    @observable pagesCount = 0;
    @observable favorites = [];

  @action.bound
  async fetchMovies(page = this.currentPage) {
    try {
      this.moviesRequested();
      const data = await movies.getOneMoviePage(page);
      this.moviesLoaded(data.movies);
      this.changePagesCount(data.pages_count);
    } catch (e) {
      this.moviesError(e);
    }
  }

  @action.bound
  moviesRequested() {
    this.movies = [];
    this.loading = true;
    this.error = null;
  }

  @action.bound
  moviesLoaded(mvs) {
    this.movies = mvs;
    this.loading = false;
    this.error = null;
  }

  @action.bound
  changeCurrentPage(page) {
    this.currentPage = page;
    this.fetchMovies(page);
  }

  @action.bound
  changePagesCount(count) {
    this.pagesCount = count;
  }

  @action.bound
  moviesError(e) {
    this.movies = [];
    this.loading = false;
    this.error = e;
  }

  @action.bound
  changeMovie(movie) {
    this.currentMovieId = movie;
  }

  @action.bound
  removeMovie(movieId) {
    const movieIndex = this.favorites.findIndex(movie => movie.id === movieId);
    this.favorites = [...this.favorites.slice(0, movieIndex),
      ...this.favorites.slice(movieIndex + 1)];
  }
  @action.bound
  addToFavorites(movie) {
    this.favorites.push(movie);
  }

}

export const MovieStorePropTypes = PropTypes.shape({
  movies: PropTypes.arrayOf(MoviePropTypes).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.shape({}).isRequired,
  currentPage: PropTypes.number.isRequired,
  currentMovieId: PropTypes.number.isRequired,
  pagesCount: PropTypes.number.isRequired,
  favorites: PropTypes.arrayOf(MoviePropTypes).isRequired,
  fetchMovies: PropTypes.func.isRequired,
  moviesRequested: PropTypes.func.isRequired,
  moviesLoaded: PropTypes.func.isRequired,
  changeCurrentPage: PropTypes.func.isRequired,
  changePagesCount: PropTypes.func.isRequired,
  changeMovie: PropTypes.func.isRequired,
  removeMovie: PropTypes.func.isRequired,
});


export const moviesStore = new MoviesStore();

