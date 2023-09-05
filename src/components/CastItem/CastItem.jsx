const CastItem = ({ cast: { profile_path, name, character, cast_id } }) => {
  return (
    <li key={cast_id}>
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
        <p>Character:{character}</p>
      </div>
    </li>
  );
};

export default CastItem;
