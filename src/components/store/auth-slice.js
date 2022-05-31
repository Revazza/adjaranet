import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLogged:false
}

const authSlice = createSlice({
    name:'authentication',
    initialState,
    reducers:{
        login(state){
            state.isLogged = true;
        },
        logout(state){
            state.isLogged = false;
        }
    }
});


export default authSlice;

