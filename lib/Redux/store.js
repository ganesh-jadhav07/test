import { configureStore } from "@reduxjs/toolkit";
import updateSlice from "./slice";
import navSlice from "./navSlice";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

//configuring persist
const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  navigation: navSlice,
  update: updateSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  // reducer: {
  //update reducer for updating the fullPageScroll of `home page`
  // navigation:navSlice,
  // update:updateSlice,
  // },

  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
