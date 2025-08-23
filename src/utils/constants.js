export const NETFLIX_LOGO_IMG =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_ICON =
  "https://pbs.twimg.com/profile_images/1356333120992149505/-qvakEK7_200x200.jpg";

export const NETFLIX_BG_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTZmMjViZjJkZTA5MGQyMWNmMjE0YzMxMzY2ZGQ1NyIsIm5iZiI6MTc0OTk2NDgxOS45MDEsInN1YiI6IjY4NGU1ODEzMDBlYmI2Y2E3ZjFiZjExMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AKuGN8gKDeXGi3X49yAvT2pDUwman_BEkunuNrbwqZ4",
  },
};

export const POSTER_URL_LINK = "https://image.tmdb.org/t/p/original";

export const MOVIE_NOW_PLAYING_API =
  "https://api.themoviedb.org/3/movie/now_playing";

export const POPULAR_MOVIES_API =
  "https://api.themoviedb.org/3/movie/popular?language=en-IN&page=3";

export const TOP_RATED_MOVIES_API =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-IN&page=2";

export const OPEN_AI_API_KEY = import.meta.env.VITE_OPEN_AI_API_KEY;