import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: {
      nowPlaying: null,
    },
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.movies.nowPlaying = action.payload;
    },
  },
});

export const { addNowPlaying } = movieSlice.actions;

export default movieSlice.reducer;
