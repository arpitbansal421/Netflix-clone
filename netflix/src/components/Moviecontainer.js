import React from 'react';
import Movielist from './Movielist';
import { useSelector } from 'react-redux';

function MovieContainer() {
  const movie = useSelector((store) => store.movie);

  console.log(movie)

  return (
    <div className='bg-black'>
      <div className='-mt-52 relative z-10'>
        <Movielist title={'Popular Movie'} movies={movie.popularMovies} />
        <Movielist title={'Top Rated Movie'} movies={movie.topRatedMovies} />
        <Movielist title={'Now Playing Movie'} movies={movie.nowPlayingMovies} />
        <Movielist title={'Upcoming Movie'} movies={movie.upcomingMovies} />
      </div>
    </div>
  ); 
}

export default MovieContainer;
