const ReviewItem = ({ review: { author, content, id } }) => {
  return (
    <>
      <li key={id}>
        <h3>
          Author: <span>{author}</span>
        </h3>
        <p>{content}</p>
      </li>
    </>
  );
};

export default ReviewItem;
