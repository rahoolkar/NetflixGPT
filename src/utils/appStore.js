import { configureStore } from "@reduxjs/toolkit";
import userTokenReducer from "./userTokenSlice";

const appStore = configureStore({
  reducer: {
    userToken: userTokenReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default appStore;
