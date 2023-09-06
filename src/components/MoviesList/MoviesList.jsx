import { NavLink } from 'react-router-dom';

const MoviesList = ({ movies }) => {
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
