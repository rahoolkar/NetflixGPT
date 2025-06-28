import { NETFLIX_BG_IMG } from "../utils/constants";
import GPTSeachBar from "./GPTSearchBar";
import GPTSuggestion from "./GPTSuggestions";

function GPTSearch() {
  return (
    <div>
      <div className="absolute top-0 -z-20">
        <img src={NETFLIX_BG_IMG} alt="bg-img" />
      </div>
      <GPTSeachBar></GPTSeachBar>
    </div>
  );
}

export default GPTSearch;
