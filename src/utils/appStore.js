import { configureStore } from "@reduxjs/toolkit";
import userTokenReducer from "./userTokenSlice";
import moviesReducer from "./movieSlice";
import trailerReducer from "./trailerSlice";
import gptReducer from "./GPTBtnSlice";
import movieRecommendationReducer from "./movieRecommendationSlice";

const appStore = configureStore({
  reducer: {
    userToken: userTokenReducer,
    movies: moviesReducer,
    trailer: trailerReducer,
    gpt: gptReducer,
    movieRecommendation: movieRecommendationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default appStore;
