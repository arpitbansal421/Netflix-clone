// useUpcomingmovie.js

import { useEffect } from 'react';
import axios from 'axios';
import { UPCOMING_MOVIES, options } from '../../util/constant';
import { getUpcomingMovies } from '../../redux/movieSlice';
import { useDispatch } from 'react-redux';

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(UPCOMING_MOVIES, options);
                dispatch(getUpcomingMovies(res.data.results));
                console.log(res.data.results); // Logging fetched data
            } catch (error) {
                console.error('Error fetching upcoming movies:', error);
            }
        };
        fetchData();
    }, [dispatch]);
};

export default useUpcomingMovies;

  