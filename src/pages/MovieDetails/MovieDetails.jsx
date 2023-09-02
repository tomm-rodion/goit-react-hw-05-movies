import ErrorMessage from 'components/ErrorMessages/ErrorMessages';
import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesById } from 'services/api';

const MoviesDetailes = () => {
  const [movie, setMovie] = useState();
  const [error, setError] = useState(false);
  const { moviesId } = useParams(); // '335977' modies id
  console.log(moviesId);

  console.log(movie);

  // Запит за більш детальною інформацією про фільм BY ID !!!
  useEffect(() => {
    async function fetchMovies() {
      try {
        const respInformationAboutMovie = await fetchMoviesById(moviesId);
        console.log('MoviesDetailes:', respInformationAboutMovie);
        setMovie(respInformationAboutMovie);
      } catch (error) {
        console.error(error);
        setError(true);
      }
    }
    fetchMovies();
  }, [moviesId]);

  const yarsMovie = useMemo(() => {
    movie.release_date.substr(0, [4]);
  }, [movie]);

  return (
    <>
      {error && <ErrorMessage />}
      <div>Hi i`m component MoviesDetailes 😉</div>
      {movie && (
        <div>
          <h2>
            {movie.original_title}
            <span> ({yarsMovie})</span>
          </h2>
          <img src={movie.backdrop_path} alt={movie.original_title} />
        </div>
      )}
    </>
  );
};
export default MoviesDetailes;

//???  <span>({yarsMovie.length === 4 && yarsMovie})</span>
