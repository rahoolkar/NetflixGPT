import { createSlice } from "@reduxjs/toolkit";

const GPTBtnSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptBtn: false,
  },
  reducers: {
    toggleGptBtn: (state) => {
      state.showGptBtn = !state.showGptBtn;
    },
  },
});

export const { toggleGptBtn } = GPTBtnSlice.actions;

export default GPTBtnSlice.reducer;
