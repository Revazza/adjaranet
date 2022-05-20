import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./movies-slice";
import watchListSlice from "./watch-list";

const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer,
    watchList:watchListSlice.reducer,
  },
});

export const moviesActions = moviesSlice.actions; 
export const watchListActions = watchListSlice.actions;


export default store;

