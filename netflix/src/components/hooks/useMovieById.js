import { useEffect } from 'react';
import axios from 'axios';
import { options } from '../../util/constant';
import { useDispatch } from 'react-redux';
import { getTrailerMovie } from '../../redux/movieSlice';

const useMovieById = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        //
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos`, options);
        console.log("I am in useMovieById hook", res.data);

        const trailer = res?.data?.results?.filter((item) => item.type === 'Trailer');
        dispatch(getTrailerMovie(trailer.length > 0 ? trailer[0] : res.data.results[0]));
      } catch (error) {
        console.error('Error fetching movie by id:', error);
      }
    };

    fetchMovieById();
  }, [dispatch, id]);
};

export default useMovieById;
