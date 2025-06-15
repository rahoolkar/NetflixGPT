import BrowseHeader from "./BrowseHeader";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.js";
import MainContainer from "./MainContainer.jsx";
import SecondaryContainer from "./SecondaryCOntainer.jsx";
import usePopularMovies from "../hooks/usePopularMovies.js";
import useTopRatedMovies from "../hooks/useTopRatedMovies.js";

function BrowsePage() {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  return (
    <div className="bg-black">
      <BrowseHeader></BrowseHeader>
      <MainContainer></MainContainer>
      <SecondaryContainer></SecondaryContainer>
    </div>
  );
}

export default BrowsePage;
