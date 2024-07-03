import React from "react";
import Moviecart from "./Moviecart";
function Movielist({ title, movies,searchMovie=false }) {

   console.log("I am in MovieList", movies);
  return (
    <div className="px-8 mt-2">
      {console.log(title)}
      <h1 className={`${searchMovie ? "text-black":"py-4 text-3xl text-white"}`}>{title}</h1>
      <div className="flex overflow-x-auto no-scrollbar cursor-pointer">
        <div className="flex items-center">
          {movies.map((movie) => {
            return <Moviecart movieId={movie.id} posterPath={movie.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
} 

export default Movielist;
