/* eslint-disable array-callback-return */
import CastItem from 'components/CastItem/CastItem';
import ErrorMessage from 'components/ErrorMessages/ErrorMessages';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastMovie } from 'services/api';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { moviesId } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCastInf() {
      try {
        const respCast = await fetchCastMovie(moviesId);
        console.log('cast....', respCast.cast);
        setCast(respCast.cast);
      } catch (error) {
        console.error(error);
        setError(true);
      }
    }
    fetchCastInf();
  }, [moviesId]);

  return (
    <>
      {error && <ErrorMessage />}
      {cast && (
        <div>
          <ul>
            {cast.map((actorInf, index) => {
              console.log(actorInf);
              return <CastItem cast={actorInf} />;
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default Cast;
