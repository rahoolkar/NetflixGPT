import BrowseHeader from "./BrowseHeader";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.js";
import MainContainer from "./MainContainer.jsx";
import SecondaryContainer from "./SecondaryCOntainer.jsx";

function BrowsePage() {
  useNowPlayingMovies();

  return (
    <div className="">
      <BrowseHeader></BrowseHeader>
      <MainContainer></MainContainer>

      {/* <SecondaryContainer></SecondaryContainer> */}
    </div>
  );
}

export default BrowsePage;
