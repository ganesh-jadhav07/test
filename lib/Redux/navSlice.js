import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value:[]
};

//update slice updates when the page changes on home page 
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
