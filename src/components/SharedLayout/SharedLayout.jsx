import { Suspense } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';

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
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
