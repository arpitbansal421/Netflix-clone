// store.js

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userslice'; // Assuming this is correct
import movieReducer from './movieSlice'; // Assuming this is correct

import searchSlice from './searchSlice';

const store = configureStore({
    reducer: {
        searchMovie:searchSlice,
        app: userReducer,
        movie: movieReducer
    }
});

export default store;
