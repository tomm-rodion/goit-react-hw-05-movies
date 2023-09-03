/* eslint-disable array-callback-return */
import ErrorMessage from 'components/ErrorMessages/ErrorMessages';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastMovie } from 'services/api';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(false);
  const movieId = useParams();

  useEffect(() => {
    async function fetchCastInf() {
      try {
        const respCast = await fetchCastMovie(movieId);
        console.log(respCast.data.cast);
        setCast(respCast.data.cast);
      } catch (error) {
        console.error(error);
        setError(true);
      }
    }
    fetchCastInf();
  }, [movieId]);

  return (
    <>
      <div>Hi i`m component Cast 😉</div>
      {error && <ErrorMessage />}
      <ul>
        {cast.map(({ profile_path, name, character }, index) => {
          <li key={index}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt="Foto_profile"
                width={'300px'}
              />
            ) : (
              <img
                src={`https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg`}
                alt="логотип Netflix "
                width={'300px'}
              />
            )}
            <div>
              <h3>{name}</h3>
              <p>{character}</p>
            </div>
          </li>;
        })}
        ;
      </ul>
    </>
  );
};

export default Cast;
