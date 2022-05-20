import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list:[]
}

const watchListSlice = createSlice({
    name:'watchlist',
    initialState:initialState,
    reducers:{
        setWatchList(state,action)
        {
            state.list = [...action.payload];
        }
    }
})


export default watchListSlice;