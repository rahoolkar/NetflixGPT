import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, TOP_RATED_MOVIES_API } from "../utils/constants";
import { addTopRated } from "../utils/movieSlice";

function useTopRatedMovies() {
  const dispatch = useDispatch();

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  async function getTopRatedMovies() {
    let response = await fetch(TOP_RATED_MOVIES_API, API_OPTIONS);
    let data = await response.json();
    dispatch(addTopRated(data.results));
  }
}

export default useTopRatedMovies;
