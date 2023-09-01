import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '64402845586832b1fcc80d4c6361d650';

export async function fetchTrendingMovies() {
  const resp = await axios.get(`trending/movie/day?api_key=${API_KEY}`);

  return resp.data;
}
