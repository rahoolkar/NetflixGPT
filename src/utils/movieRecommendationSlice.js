import { createSlice } from "@reduxjs/toolkit";

const movieRecommendationSlice = createSlice({
  name: "movieRecommendation",
  initialState: {
    suggestedMovies: [],
  },
  reducers: {
    addToSuggestion: (state, action) => {
      state.suggestedMovies = [...action.payload];
    },
    clearSuggestedMovies: (state) => {
      state.suggestedMovies.length = 0;
    },
  },
});

export const { addToSuggestion, clearSuggestedMovies } =
  movieRecommendationSlice.actions;

export default movieRecommendationSlice.reducer;
