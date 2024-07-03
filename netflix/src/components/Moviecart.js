import React from 'react'
import { Banner_url } from '../util/constant'
import { useDispatch } from 'react-redux'
import { getId, setOpen } from '../redux/movieSlice'


function Moviecart({posterPath,movieId}) {
  const dispatch=useDispatch()
  console.log("moviecart")

  if(posterPath==null){
    return null
  }

  const handleOpen=()=>{
    dispatch(getId(movieId))
    console.log("Hi I am in handleopen",movieId)
    dispatch(setOpen(true))

  }
  return (
    <div className='w-48 pr-2 p-2 ml-1' onClick={handleOpen}>
      <img src={`${Banner_url}/${posterPath}`} alt="moviebanner" />


    </div>
  )
}

export default Moviecart

