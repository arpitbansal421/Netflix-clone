// usePopularmovies.js
import { useEffect } from 'react';
import axios from 'axios';
import { POPULAR_MOVIES, options } from '../../util/constant';
import { getPopularMovies } from '../../redux/movieSlice';
import { useDispatch } from 'react-redux';

const usePopularMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(POPULAR_MOVIES, options);
                dispatch(getPopularMovies(res.data.results));
                console.log(res.data.results); // Logging fetched data
            } catch (error) {
                console.error('Error fetching popular movies:', error);
            }
        };
        fetchData();
    }, [dispatch]);
};

export default usePopularMovies;



