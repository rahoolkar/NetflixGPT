import { useSelector } from "react-redux";
import VideoPlay from "./VideoPlay";
import VideoTitle from "./VideoTitle";

function MainContainer() {
  const movies = useSelector((store) => {
    return store?.movies?.movies?.nowPlaying;
  });

  if (movies === null) {
    return <h1>Loading...</h1>;
  }

  const movieToPlay = movies[0];

  const { title, overview, id } = movieToPlay;

  return (
    <div>
      <VideoTitle title={title} overview={overview}></VideoTitle>
      <VideoPlay id={id}></VideoPlay>
    </div>
  );
}

export default MainContainer;
