import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const apiKey = 'cbb822aa772537b57d5d040000698149';

export const fetchTrendingMovies = async () => {
  const resp = await axios.get(`trending/movie/day?api_key=${apiKey}`);

  return resp.data;
};

export const fetchSearchMovies = async query => {
  const resp = await axios.get(
    `search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  return resp;
};
