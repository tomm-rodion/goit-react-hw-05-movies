import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
// const API_KEY = '64402845586832b1fcc80d4c6361d650';
axios.defaults.params = {
  api_key: '64402845586832b1fcc80d4c6361d650',
};

export async function fetchTrendingMovies() {
  const resp = await axios.get(`trending/movie/day`);

  return resp.data;
}

export const fetchMoviesById = async moviesId => {
  const resp = await axios.get(`/movie/${moviesId}?&language=en-US`);

  return resp.data;
};

export async function fetchMoviesBySearch(searchQuery) {
  const resp = await axios.get(`search/movie?query=${searchQuery}`);

  return resp.data;
}

export async function fetchCastMovie(moviesId) {
  const resp = await axios.get(`movie/${moviesId}/credits`);

  return resp.data;
}
export async function fetchReviwsMovie(moviesId) {
  const resp = await axios.get(`movie/${moviesId}/reviews`);

  return resp.data;
}
