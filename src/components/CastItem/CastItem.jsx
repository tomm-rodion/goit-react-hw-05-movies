import getPoster from 'services/getDefaultImg';

const CastItem = ({ cast: { profile_path, name, character }, index }) => {
  // const defaultImgURL = `https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg`;
  // const getPoster = url => {
  //   return profile_path
  //     ? `https://image.tmdb.org/t/p/w500${url}`
  //     : defaultImgURL;
  // };
  return (
    <li key={index}>
      <div>
        <img src={getPoster(profile_path)} alt="Foto_profile" width={'300px'} />
        <h3>{name}</h3>
        <p>Character:{character}</p>
      </div>
    </li>
  );
};

export default CastItem;
