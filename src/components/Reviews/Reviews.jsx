import ErrorMessage from 'components/ErrorMessages/ErrorMessages';
import ReviewItem from 'components/ReviewItem/ReviewItem';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviwsMovie } from 'services/api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { moviesId } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCastInf() {
      try {
        const respReviews = await fetchReviwsMovie(moviesId);
        console.log(respReviews.results);
        setReviews(respReviews.results);
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
      {reviews && (
        <div>
          <ul>
            {reviews.map(review => {
              return <ReviewItem review={review} />;
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default Reviews;
