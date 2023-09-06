const ReviewItem = ({ review: { author, content }, index }) => {
  return (
    <>
      <li key={index}>
        <h3>
          Author: <span>{author}</span>
        </h3>
        <p>{content}</p>
      </li>
    </>
  );
};

export default ReviewItem;
