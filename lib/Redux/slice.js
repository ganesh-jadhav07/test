import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

//update slice updates when the page changes on home page 
export const updateSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = updateSlice.actions;
export default updateSlice.reducer;
