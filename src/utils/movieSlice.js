import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: {
      nowPlaying: null,
      popular: null,
      topRated: null,
    },
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.movies.nowPlaying = action.payload;
    },
    addPopular: (state, actions) => {
      state.movies.popular = actions.payload;
    },
    addTopRated: (state, action) => {
      state.movies.topRated = action.payload;
    },
  },
});

export const { addNowPlaying, addPopular, addTopRated } = movieSlice.actions;

export default movieSlice.reducer;
