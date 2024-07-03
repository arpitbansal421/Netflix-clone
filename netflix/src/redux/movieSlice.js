import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    nowPlayingMovies: [],
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
    toggle: false,
    trailerMovie: null,
    open:false,
    id:"",
    umb:false
    
  },
  reducers: {
    getNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    getPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    getTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    getUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    setToggle: (state) => {
      state.toggle = !state.toggle;
    },
    getTrailerMovie: (state, action) => {
      state.trailerMovie = action.payload;
    },
    setOpen:(state,action)=>{
      state.open=action.payload;
    },

    getId:(state,action)=>{
      state.id=action.payload
    },
    getumb:(state,action)=>{
      state.umb=action.payload
    }


  },
});

export const {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  setToggle,
  getTrailerMovie,
  setOpen,
  getId,
  getumb            
} = movieSlice.actions;

export default movieSlice.reducer;


