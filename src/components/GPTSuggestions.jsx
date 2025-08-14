import { useSelector } from "react-redux";
import MovieCardSuggestion from "./MovieCardSuggestion";

function GPTSuggestion() {
  const suggestedMovies = useSelector((store) => {
    return store.movieRecommendation.suggestedMovies;
  });
  return (
    <div className="space-x-4 absolute top-[50%] bg-black p-4">
      <h1 className="text-3xl ml-2 font-bold text-white">Suggested Movies for you</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
        {suggestedMovies.map((movie) => {
          return (
            <MovieCardSuggestion
              movieData={movie}
              key={movie.id}
            ></MovieCardSuggestion>
          );
        })}
      </div>
    </div>
  );
}

export default GPTSuggestion;
