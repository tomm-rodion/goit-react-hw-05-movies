import { Suspense, useEffect, useRef, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import ErrorMessage from 'components/ErrorMessages/ErrorMessages';
import { fetchMoviesById } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import getPoster from 'services/getDefaultImg';

const MoviesDetailes = () => {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    async function fetchMovies() {
      try {
        const respInformationAboutMovie = await fetchMoviesById(moviesId);
        setMovie(respInformationAboutMovie);
      } catch (error) {
        console.error(error);
        setError(true);
      }
    }
    fetchMovies();
  }, [moviesId]);

  const backLinkLocatinRef = useRef(location.state?.from ?? '/');

  return (
    <>
      {error && <ErrorMessage />}
      {movie && (
        <>
          <NavLink to={backLinkLocatinRef.current}>Go back</NavLink>
          <div>
            <img
              src={getPoster(movie.poster_path)}
              alt="Poster movie"
              width={'300px'}
            />
            <h2>
              {movie.original_title}
              <span> ({movie.release_date.substr(0, [4])})</span>
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
        </>
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
      <Suspense
        fallback={
          <div>
            Loading subpage...
            <Loader />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};
export default MoviesDetailes;
