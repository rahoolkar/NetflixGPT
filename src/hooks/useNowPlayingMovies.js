import { useDispatch } from "react-redux";
import { API_OPTIONS, MOVIE_NOW_PLAYING_API } from "../utils/constants";
import { useEffect } from "react";
import { addNowPlaying } from "../utils/movieSlice";

function useNowPlayingMovies() {
  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  async function getNowPlayingMovies() {
    let response = await fetch(
      MOVIE_NOW_PLAYING_API,
      API_OPTIONS
    );
    let data = await response.json();
    dispatch(addNowPlaying(data.results));
  }
}

export default useNowPlayingMovies;
