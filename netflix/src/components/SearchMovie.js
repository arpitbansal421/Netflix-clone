import axios from "axios";
import React, { useState } from "react";
import { SEARCH_MOVIE_URL, options } from "../util/constant";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedMoviesDetails } from "../redux/searchSlice";
import Movielist from "./Movielist";

function SearchMovie() {
  const [searchmovie, setsearchmovie] = useState("");
  console.log(searchmovie)
  const dispatch = useDispatch();
  const { movieName, searchedMovie } = useSelector(
    (store) => store.searchMovie
  );
  console.log("Hi I am from searched movie", movieName, searchedMovie);

  const submithandler = async (e) => {
    e.preventDefault();   

    try { 
      const res = await axios.get(
        `${SEARCH_MOVIE_URL}${searchmovie}&include_adult=false&language=en-US&page=1`,
        options 
      );
      console.log("Hi I am from SearchMovie", res.data);
      const movies = res?.data?.results;
      dispatch(setSearchedMoviesDetails({ searchmovie, movies }));
      console.log("Hi I am from setSearchedMoviesDetails",movieName,searchedMovie)
    } catch (error) {
      console.log(error);
    }
    setsearchmovie("");
  };

  return (
    <>
      <div className="flex justify-center pt-[10%] w-[100%]">
        <form onSubmit={submithandler} className="w-[50%]">
          <div className="flex justify-between shadow-md border-2 border-grey-200 rounded-lg">
            <input
              value={searchmovie}
              onChange={(e) => {
                setsearchmovie(e.target.value);
              }}
              className="w-full outline-none rounded-md text-lg p-2"
              type="text"
              placeholder="Search Movies.."
            />
            <button className="bg-red-800 text-white py-2 px-4 rounded-lg">
              Search
            </button>
          </div>
        </form>
      </div>
      {console.log('hi1')}
     
      
      <Movielist  title={movieName} movies={searchedMovie} searchMovie={true}/>
      
     
    </>
  );
}

export default SearchMovie;
