import { observable } from 'mobx';
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

  async fetch({ page }) {
    try {
      this.moviesRequested();
      const data = await movies.getOneMoviePage(page);
      this.moviesLoaded(data.movies);
      this.changeCurrentPage(page);
      this.changePagesCount(data.pages_count);
    } catch (e) {
      this.moviesError(e);
    }
  }

  moviesRequested() {
    this.movies = [];
    this.loading = true;
    this.error = null;
  }

  moviesLoaded(mvs) {
    this.movies = mvs;
    this.loading = false;
    this.error = null;
  }

  changeCurrentPage(page) {
    this.currentPage = page;
  }

  changePagesCount(count) {
    this.pagesCount = count;
  }

  moviesError(e) {
    this.movies = [];
    this.loading = false;
    this.error = e;
  }
}

export const moviesStore = new MoviesStore();

