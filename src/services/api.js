import axios from 'axios';


require('dotenv').config();

function transformMovie(movie) {
  return (
    {
      id: movie.id,
      title: movie.original_title,
      overview: movie.overview,
      score: movie.vote_average,
      language: movie.original_language,
      realiseDate: movie.release_date,
      posterPath: movie.poster_path ? process.env.REACT_APP_POSTER_BASE + movie.poster_path : null,
    }

  );
}

export const getOneMoviePage = async (page) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_BASE}/now_playing?${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`);
    return {
      movies: res.data.results.map(transformMovie),
      pages_count: res.data.total_pages,
    };
  } catch (e) {
    return new Error(`Could not fetch!!! received ${e}`);
  }
};
