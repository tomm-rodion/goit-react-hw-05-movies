import { NavLink } from 'react-router-dom';

const Movies = () => {
  return (
    <>
      <div>Page Movies</div>
      <div>
        <ul>
          <li>
            <NavLink to={'movies/:moviesId'}>MoviesDetalies</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Movies;
