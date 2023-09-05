import { NavLink, Outlet, useLocation } from 'react-router-dom';

const SharedLayout = () => {
  const location = useLocation();
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/" state={{ from: location }}>
                Home page
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies" state={{ from: location }}>
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
