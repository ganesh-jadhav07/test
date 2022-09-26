import { configureStore } from '@reduxjs/toolkit'
import updateSlice from './slice'

export const store = configureStore({
  reducer: {
    //update reducer for updating the fullPageScroll of `home page`
    update:updateSlice,
  },
})