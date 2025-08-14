import { useSelector } from "react-redux";
import { NETFLIX_BG_IMG } from "../utils/constants";
import GPTSeachBar from "./GPTSearchBar";
import GPTSuggestion from "./GPTSuggestions";

function GPTSearch() {
  const suggestedMovies = useSelector((store) => {
    return store.movieRecommendation.suggestedMovies;
  });
  return (
    <div>
      <div className="absolute top-0 -z-20">
        <img src={NETFLIX_BG_IMG} alt="bg-img" />
      </div>
      <GPTSeachBar></GPTSeachBar>
      {suggestedMovies.length == 0 ? null : <GPTSuggestion></GPTSuggestion>}
    </div>
  );
}

export default GPTSearch;
