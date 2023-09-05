import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import ErrorMessage from 'components/ErrorMessages/ErrorMessages';
import { fetchMoviesById } from 'services/api';

const MoviesDetailes = () => {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState(null);
  const [releaseMovies, setReleaseMovies] = useState(null);
  const [error, setError] = useState(false);
  // const location = useLocation();
  // const locationPrevPage = location.state?.from ?? '/';

  // Запит за більш детальною інформацією про фільм BY ID !!!
  useEffect(() => {
    async function fetchMovies() {
      try {
        const respInformationAboutMovie = await fetchMoviesById(moviesId);
        setMovie(respInformationAboutMovie);
        setReleaseMovies(respInformationAboutMovie.release_date.substr(0, [4]));
      } catch (error) {
        console.error(error);
        setError(true);
      }
    }
    fetchMovies();
  }, [moviesId]);

  return (
    <>
      {error && <ErrorMessage />}
      <div>Hi i`m component MoviesDetailes 😉</div>
      {movie && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt="Poster movie"
            width={'300px'}
          />
          <h2>
            {movie.original_title}
            <span> ({releaseMovies})</span>
          </h2>
          <p>User Score: {movie.vote_average}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movie.genres.map(({ name }, index) => {
              return <li key={index}>{name}</li>;
            })}
          </ul>
        </div>
      )}

      {movie && (
        <div>
          <h3>Additional information</h3>
          <ul>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
        </div>
      )}
      <Outlet />
    </>
  );
};
export default MoviesDetailes;

//  state={{ from: locationPrevPage }}
