import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, POPULAR_MOVIES_API } from "../utils/constants";
import { addPopular } from "../utils/movieSlice";

function usePopularMovies() {
  const dispatch = useDispatch();

  useEffect(() => {
    getPopularMovies();
  }, []);

  async function getPopularMovies() {
    let response = await fetch(POPULAR_MOVIES_API, API_OPTIONS);
    let data = await response.json();
    dispatch(addPopular(data.results.reverse()));
  }
}

export default usePopularMovies;
