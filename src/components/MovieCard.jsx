import { POSTER_URL_LINK } from "../utils/constants";

function MovieCard({ movieData }) {
  console.log(movieData);
  const { poster_path } = movieData;
  return (
    <div className="w-[17%] m-2 rounded inline-block">
      <img className="rounded" src={POSTER_URL_LINK + poster_path} alt="poster-image" />
    </div>
  );
}

export default MovieCard;
