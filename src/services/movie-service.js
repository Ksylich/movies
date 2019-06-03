const axios = require("axios");
require('dotenv').config();


export default class MovieService {

  posterBase = "http://image.tmdb.org/t/p/w342";

  async getOneMoviePage(page) {
    const res = await this.getResoureses(
      `${process.env.REACT_APP_API_BASE}/now_playing?${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
    );

    return {
      movies: res.results.map(this.transformMovie),
      pages_count: res.total_pages
    };
  }

  async getResoureses(url) {
    const res = await axios.get(url);
    return res.data;
  }

  async getMovie(id) {
    const res = await this.getResoureses(
      `${process.env.REACT_APP_API_BASE}/${id}?${process.env.REACT_APP_API_KEY}`
    );
    return this.transformMovie(res);
  }

  transformMovie = movie => ({
    id: movie.id,
    title: movie.original_title,
    overview: movie.overview,
    score: movie.vote_average,
    language: movie.original_language,
    realiseDate: movie.release_date,
    posterPath: this.posterBase + movie.poster_path
  });
}

// const movie = new MovieService();

// movie.getOneMoviePage(3).then((movies) => {
//   movies.forEach((m) => {
//     console.log(m.title);
//   });
// });

// movie.getMovie(299534).then((movie) => (console.log(movie.title)));
