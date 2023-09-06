const defaultImgURL = `https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg`;
const getPoster = url => {
  return url ? `https://image.tmdb.org/t/p/w300${url}` : defaultImgURL;
};
export default getPoster;
