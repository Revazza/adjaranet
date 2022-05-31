import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import moviesSlice from "./movies-slice";
import watchListSlice from "./watch-list";


const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer,
    watchList:watchListSlice.reducer,
    auth:authSlice.reducer,
  },
});

export const moviesActions = moviesSlice.actions; 
export const watchListActions = watchListSlice.actions;
export const authActions = authSlice.actions;


export default store;

