//this slice is for managing state of links and path from backend 
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value:[]
};
export const navSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    navItems: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { navItems} = navSlice.actions;
export default navSlice.reducer;
