import { configureStore } from "@reduxjs/toolkit";
import userTokenReducer from "./userTokenSlice";
import moviesReducer from "./movieSlice";
import trailerReducer from "./trailerSlice";

const appStore = configureStore({
  reducer: {
    userToken: userTokenReducer,
    movies: moviesReducer,
    trailer: trailerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default appStore;
