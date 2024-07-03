import React from "react";
import useMovieById from'../components/hooks/useMovieById'
import { useSelector } from "react-redux";
function Vidiobackground({id,bool}) {
  //
  
  const trailer= useSelector((store)=>store.movie.trailerMovie)
  console.log("My Id is",id)
  console.log("My movie trailer",trailer)

  
  
  useMovieById(id)



  
  
  return (
    <div className="w-[vw] overflow-hidden">
      
      <iframe className={`${bool?'w-full h-[100%]':'w-screen aspect-video'}`}

//    
      
        src={`https://www.youtube.com/embed/${trailer?.key}?si=nqnH2GU3lMAN-Vgh&autoplay=1${bool?'&mute=1' : ''}`

        //  
}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Vidiobackground;
