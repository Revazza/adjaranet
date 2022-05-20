import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    list:[]
};

const moviesSlice = createSlice({
    name:'movies',
    initialState:initialState,
    reducers:{
        setMovies(state,action){
            state.list = [...action.payload];
        }
    }
})


export default moviesSlice;




