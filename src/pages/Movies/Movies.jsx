import { useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { fetchMoviesById } from 'services/api';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [query, setQuery] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  const [valueSearchMovies, setValueSearchMovies] = useState([]);

  useEffect(() => {
    if (query === '' || query === null) {
      return;
    }
    async function searchMovies() {
      try {
        const resp = await fetchMoviesById(searchQuery);
        setValueSearchMovies(resp.results);
      } catch (error) {
        console.error(error);
      }
    }
    searchMovies();
  }, [query, searchQuery]);

  function handleSubmitForm(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query });
    form.reset();
  }

  const handleChange = e => {
    setQuery(e.target.value);
  };

  return (
    <>
      <Outlet />
      <h2>Search movies</h2>
      <form onSubmit={handleSubmitForm}>
        <label name="searchMovies">
          <input
            name="searchMovies"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies for name..."
            onChange={handleChange}
          />
        </label>
      </form>
      <MoviesList movies={valueSearchMovies} />
    </>
  );
};

export default Movies;
