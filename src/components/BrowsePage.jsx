import BrowseHeader from "./BrowseHeader";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.js";
import MainContainer from "./MainContainer.jsx";
import SecondaryContainer from "./SecondaryCOntainer.jsx";
import usePopularMovies from "../hooks/usePopularMovies.js";
import useTopRatedMovies from "../hooks/useTopRatedMovies.js";
import GPTSearch from "./GPTSeach.jsx";
import { useSelector } from "react-redux";

function BrowsePage() {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  const showGptBtn = useSelector((store) => {
    return store.gpt.showGptBtn;
  });

  return (
    <div>
      <BrowseHeader></BrowseHeader>
      {showGptBtn ? (
        <GPTSearch></GPTSearch>
      ) : (
        <>
          <MainContainer></MainContainer>
          <SecondaryContainer></SecondaryContainer>
        </>
      )}
    </div>
  );
}

export default BrowsePage;
