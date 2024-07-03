// useTopratedmovie.js

import { useEffect } from 'react';
import axios from 'axios';
import { TOP_RATED, options } from '../../util/constant';
import { getTopRatedMovies } from '../../redux/movieSlice';
import { useDispatch } from 'react-redux';

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(TOP_RATED, options);
                dispatch(getTopRatedMovies(res.data.results));
                console.log(res.data.results); // Logging fetched data
            } catch (error) {
                console.error('Error fetching top-rated movies:', error);
            }
        };
        fetchData();
    }, [dispatch]);
};

export default useTopRatedMovies;

