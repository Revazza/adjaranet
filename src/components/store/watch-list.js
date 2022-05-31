import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    list:[]
}

const watchListSlice = createSlice({
    name:'watchlist',
    initialState:initialState,
    reducers:{
        setWatchList(state,action)
        {
            const movieInList = state.list.find(movie => movie.id === action.payload);

            if (!movieInList)
                state.list.push({id:action.payload});

        }
    }
})


export default watchListSlice;