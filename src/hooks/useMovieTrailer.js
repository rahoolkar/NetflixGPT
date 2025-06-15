import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/trailerSlice";

function useMovieTrailer(id) {
  const dispatch = useDispatch();

  useEffect(() => {
    getMovieVideo();
  }, []);

  async function getMovieVideo() {
    let response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      API_OPTIONS
    );
    let data = await response.json();

    const trailer = data.results.filter((video) => {
      return video.name === "Official Trailer";
    });

    dispatch(addTrailerVideo(trailer));
  }
}

export default useMovieTrailer;
