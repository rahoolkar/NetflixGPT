import { POSTER_URL_LINK } from "../utils/constants";

function MovieCardSuggestion({ movieData }) {
  const { poster_path } = movieData;
  return (
    <div className="m-2 rounded inline-block transform transition duration-300 hover:scale-110 hover:cursor-pointer">
      <img
        className="rounded"
        src={POSTER_URL_LINK + poster_path}
        alt="poster-image"
      />
    </div>
  );
}

export default MovieCardSuggestion;
