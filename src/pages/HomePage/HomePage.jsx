import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/api';
import MoviesList from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //запит на список трендових фільмів
  //отриманий масив даних передаємо в сомпонент MoviesList !!!
  useEffect(() => {
    async function fetchMovies() {
      setIsLoading(true);
      try {
        const resp = await fetchTrendingMovies();
        setTrendingMovies(resp.results);
      } catch {
        console.error(Error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {isLoading && <Loader />}
      <MoviesList movies={trendingMovies} />
    </main>
  );
};

export default HomePage;
