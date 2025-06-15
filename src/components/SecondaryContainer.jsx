import MovieList from "./MovieList";
import { useSelector } from "react-redux";

function SecondaryContainer() {
  const allMoviesList = useSelector((store) => {
    return store?.movies?.movies;
  });
  if (allMoviesList === null) {
    return;
  }
  return (
    <div className="absolute top-[95%] bg-black">
      <div className="-mt-35 z-20 relative">
        <MovieList
          title="Now Playing"
          data={allMoviesList.nowPlaying}
        ></MovieList>
        <MovieList
          title="Popular Near You"
          data={allMoviesList.popular}
        ></MovieList>
        <MovieList
          title="Top Rated on IMDb"
          data={allMoviesList.topRated}
        ></MovieList>
      </div>
    </div>
  );
}

export default SecondaryContainer;
