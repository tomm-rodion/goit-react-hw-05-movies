import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesBySearch } from 'services/api';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  const [valueSearchMovies, setValueSearchMovies] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    if (searchQuery === '' || searchQuery === null) {
      return;
    }
    async function searchMovies() {
      try {
        const resp = await fetchMoviesBySearch(searchQuery);
        console.log(resp.results); //список знайдених фільмів по ключовому слову
        setValueSearchMovies(resp.results);
      } catch (error) {
        console.error(error);
      }
    }
    searchMovies();
  }, [searchQuery]);

  const handleSubmitForm = e => {
    e.preventDefault();
    setSearchParams({ query: inputRef.current.value });
    inputRef.current.value = '';
  };

  return (
    <>
      <h2>Search movies</h2>
      <form onSubmit={handleSubmitForm}>
        <label name="searchMovies">
          <input
            name="searchMovies"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies for name..."
            ref={inputRef}
          />
        </label>
      </form>
      <MoviesList movies={valueSearchMovies} />
    </>
  );
};

export default Movies;
