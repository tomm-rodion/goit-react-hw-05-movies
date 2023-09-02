import { NavLink } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  // перебираємо масив і рендерим список трендових фільмив на сторінку HomePage!
  return (
    <div>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MoviesList;
//   const location = useLocation();
//   console.log(location);
//   <MoviesDetailes moviee={movie} location={location} key={movie.id} />
