import { createSlice } from "@reduxjs/toolkit";

const searchslice= createSlice({
    name:"search",
    initialState:{
        movieName:null,
        searchedMovie:null

    },

    reducers:{
        //action
        setSearchedMoviesDetails:(state,action)=>{
            const {searchMovie,movies}=action.payload
            state.movieName=searchMovie
            state.searchedMovie=movies

        },
       

    }
});

export const {setSearchedMoviesDetails}=searchslice.actions
export default searchslice.reducer
