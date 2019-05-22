export default class MovieService {
  apiBase = 'http://api.themoviedb.org/3/movie';

  apiKey = 'api_key=ebea8cfca72fdff8d2624ad7bbf78e4c';

  posterBase = 'http://image.tmdb.org/t/p/w342';

  async getOneMoviePage(page) {
    const res = await this.getResoureses(
      `${this.apiBase}/now_playing?${this.apiKey}&language=en-US&page=${page}`,
    );
    return res.results.map(this.transformMovie);
  }

  async getResoureses (url) {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}
      , received ${res.status}`);
    }
    return await res.json();
  }

  async getMovie(id) {
    const res = await this.getResoureses(
      `${this.apiBase}/${id}?${this.apiKey}`,
    );
    return this.transformMovie(res);
  }

  transformMovie = movie => ({
    id: movie.id,
    title: movie.original_title,
    overview: movie.overview,
    score: movie.vote_average,
    budget: movie.budget,
    realiseDate: movie.release_date,
    posterPath: this.posterBase + movie.poster_path,
  });
}

// const movie = new MovieService();

// movie.getOneMoviePage(3).then((movies) => {
//   movies.forEach((m) => {
//     console.log(m.title);
//   });
// });

// movie.getMovie(299534).then((movie) => (console.log(movie.title)));
