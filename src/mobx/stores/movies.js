import { observable, action } from 'mobx';
import MovieServise from '../../services/movie-service';

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
  async fetchMovies(page) {
    try {
      this.moviesRequested();
      const data = await movies.getOneMoviePage(page);
      this.moviesLoaded(data.movies);
      this.currentPage = page;
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
  changeCurrentPage(page = this.currentPage) {
    this.currentPage = page;
    this.fetchMovies(this.currentPage);
    // console.log('changeCurrentPage', this.currentPage);
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

}

export const moviesStore = new MoviesStore();

