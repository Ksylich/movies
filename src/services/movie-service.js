
export default class MovieService {

  // https://api.themoviedb.org/3/movie/now_playing?api
  // _key=ebea8cfca72fdff8d2624ad7bbf78e4c&page=3

  // https://api.themoviedb.org/3/movie/299534?api_
  // key=ebea8cfca72fdff8d2624ad7bbf78e4c

  // http://image.tmdb.org/t/p/w342/wgQ7APnFpf1TuviKHXeEe3KnsTV.jpg


  _apiBase = "http://api.themoviedb.org/3/movie";
  _apiKey = "api_key=ebea8cfca72fdff8d2624ad7bbf78e4c";
  _posterBase = "http://image.tmdb.org/t/p/w342";

  async getResoureses(url) {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url} 
      , received ${res.status}`)
    }

    return await res.json();
  }

  async getOneMoviePage(page) {
    const res = await this.getResoureses(`${this._apiBase}/now_playing?${this._apiKey}&language=en-US&page=${page}`);
    return res.results
      .map(this._transformMovie);
  }

  async getMovie(id) {
    const res = await this.getResoureses(`${this._apiBase}/${id}?${this._apiKey}`);
    return this._transformMovie(res);
  }

  _transformMovie = (movie) => {
    return {
      id: movie.id,
      title: movie.original_title,
      overview: movie.overview,
      score: movie.vote_average,
      budget: movie.budget,
      realise_date: movie.release_date,
      poster_path: this._posterBase + movie.poster_path
    }
  }

}


// const movie = new MovieService();


// movie.getOneMoviePage(3).then((movies) => {
//   movies.forEach((m) => {
//     console.log(m.title);
//   });
// });

// movie.getMovie(299534).then((movie) => (console.log(movie.title)));

