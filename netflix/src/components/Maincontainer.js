import React from 'react';
import Vidiobackground from './Vidiobackground';
import Vidiotitle from './Vidiotitle';
import { useSelector } from 'react-redux';

function MainContainer() {
  const movie = useSelector(store=>store.movie?.nowPlayingMovies);
  if (!movie) {
    console.log("hi")
    return  ; // early return in react.js
  }
  console.log("I am in MainContainer", movie);

  const { overview, id, title } = movie[4];

  console.log("I am fourth movie", movie[4]); 
  return (
    <div>
      <Vidiotitle title={title} overview={overview}     /> 

      {/*    */}
      <Vidiobackground id={id}  />
      {/*  */}
    </div>
  );
}

export default MainContainer;


