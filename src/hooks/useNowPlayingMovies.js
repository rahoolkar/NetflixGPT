import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addNowPlaying } from "../utils/movieSlice";

function useNowPlayingMovies() {
  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  async function getNowPlayingMovies() {
    let response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      API_OPTIONS
    );
    let data = await response.json();
    dispatch(addNowPlaying(data.results));
  }
}

export default useNowPlayingMovies;
