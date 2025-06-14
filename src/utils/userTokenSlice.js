import { createSlice } from "@reduxjs/toolkit";

const userTokenSlice = createSlice({
  name: "userToken",
  initialState: {
    token: null,
  },
  reducers: {
    addUserToken: (state, action) => {
      state.token = action.payload;
    },
    removeUserToken: (state, action) => {
      state.token = null;
    },
  },
});

export const { addUserToken, removeUserToken } = userTokenSlice.actions;

export default userTokenSlice.reducer;
